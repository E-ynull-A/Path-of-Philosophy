import { ui } from './copy'
import { endings } from './endings'
import { problemMetas, problemScenes } from './problems'
import { scenes } from './story'
import type {
  Choice,
  Ending,
  GameState,
  Insight,
  JournalEntry,
  Mode,
  School,
  Scene,
} from './types'

export const SCHOOLS: School[] = [
  'stoic',
  'utilitarian',
  'kantian',
  'existential',
  'virtue',
  'buddhist',
]

const silentInsight: Insight = {
  school: 'stoic',
  philosopher: 'Sual',
  quote: { az: '', en: '' },
  explain: { az: '', en: '' },
}

export function emptyScores(): Record<School, number> {
  return {
    stoic: 0,
    utilitarian: 0,
    kantian: 0,
    existential: 0,
    virtue: 0,
    buddhist: 0,
  }
}

export function createGame(mode: Mode): GameState {
  return {
    mode,
    sceneId: mode === 'main' ? 'dawn' : 'problems-hub',
    scores: emptyScores(),
    journal: [],
    lastEcho: null,
    pendingInsight: null,
    solvedProblems: [],
  }
}

function problemsHub(state: GameState | undefined): Scene {
  const solved = new Set(state?.solvedProblems ?? [])
  const remaining = problemMetas.filter((meta) => !solved.has(meta.id))
  const choices: Choice[] = remaining.map((meta) => ({
    id: `open-${meta.id}`,
    text: {
      az: `${meta.title.az} — ${meta.teaser.az}`,
      en: `${meta.title.en} — ${meta.teaser.en}`,
    },
    next: meta.id,
    weights: {},
    insight: silentInsight,
    echo: { az: '', en: '' },
    skipInsight: true,
  }))

  if ((state?.solvedProblems.length ?? 0) > 0) {
    choices.push({
      id: 'problems-finish',
      text: ui.problemsDone,
      next: 'ending',
      weights: {},
      insight: silentInsight,
      echo: { az: '', en: '' },
      skipInsight: true,
    })
  }

  const doneLine =
    solved.size === 0
      ? {
          az: 'Hələ heç birinə baxmamısan. Birini aç.',
          en: 'You have not opened any yet. Pick one.',
        }
      : {
          az: `${solved.size} / ${problemMetas.length} problemə baxmısan.`,
          en: `You have opened ${solved.size} / ${problemMetas.length} problems.`,
        }

  return {
    id: 'problems-hub',
    chapter: ui.problemsHubTitle,
    title: ui.problemsHubTitle,
    body: {
      az: `${ui.problemsHubBody.az}\n\n${doneLine.az}`,
      en: `${ui.problemsHubBody.en}\n\n${doneLine.en}`,
    },
    choices,
  }
}

const catalog: Scene[] = [...scenes, ...problemScenes]

export function getScene(id: string, state?: GameState): Scene | undefined {
  if (id === 'problems-hub') return problemsHub(state)
  return catalog.find((scene) => scene.id === id)
}

export function applyChoice(state: GameState, choiceId: string): GameState {
  const scene = getScene(state.sceneId, state)
  const choice = scene?.choices.find((item) => item.id === choiceId)
  if (!scene || !choice) return state

  const scores = { ...state.scores }
  for (const school of SCHOOLS) {
    scores[school] += choice.weights[school] ?? 0
  }

  let solvedProblems = state.solvedProblems
  if (state.mode === 'problems' && state.sceneId.startsWith('p-')) {
    if (!solvedProblems.includes(state.sceneId)) {
      solvedProblems = [...solvedProblems, state.sceneId]
    }
  }

  if (choice.skipInsight) {
    return {
      ...state,
      scores,
      solvedProblems,
      sceneId: choice.next,
      lastEcho: choice.echo.az ? choice.echo : state.lastEcho,
      pendingInsight: null,
    }
  }

  const entry: JournalEntry = {
    sceneId: scene.id,
    choiceId: choice.id,
    insight: choice.insight,
    echo: choice.echo,
  }

  return {
    ...state,
    scores,
    solvedProblems,
    journal: [...state.journal, entry],
    pendingInsight: {
      insight: choice.insight,
      echo: choice.echo,
      next: choice.next,
    },
  }
}

export function dismissInsight(state: GameState): GameState {
  if (!state.pendingInsight) return state
  const nextId = state.pendingInsight.next
  return {
    ...state,
    sceneId: nextId,
    lastEcho:
      nextId === 'problems-hub' ? null : state.pendingInsight.echo,
    pendingInsight: null,
  }
}

const rivals: [School, School][] = [
  ['kantian', 'utilitarian'],
  ['stoic', 'existential'],
  ['virtue', 'utilitarian'],
  ['buddhist', 'kantian'],
]

export function contradiction(scores: Record<School, number>): number {
  let heat = 0
  for (const [a, b] of rivals) {
    heat += Math.min(scores[a], scores[b])
  }
  return heat
}

export function dominantSchool(scores: Record<School, number>): School {
  return SCHOOLS.reduce((best, school) =>
    scores[school] > scores[best] ? school : best,
  )
}

export function resolveEnding(state: GameState): Ending {
  const heat = contradiction(state.scores)
  const max = Math.max(...SCHOOLS.map((school) => state.scores[school]))
  if (heat >= 4 && max > 0 && heat >= max) {
    return endings.find((ending) => ending.id === 'fractured')!
  }
  const school = dominantSchool(state.scores)
  return endings.find((ending) => ending.school === school) ?? endings[0]
}

export function compassPercents(
  scores: Record<School, number>,
): Record<School, number> {
  const max = Math.max(1, ...SCHOOLS.map((school) => scores[school]))
  const result = emptyScores()
  for (const school of SCHOOLS) {
    result[school] = Math.round((scores[school] / max) * 100)
  }
  return result
}
