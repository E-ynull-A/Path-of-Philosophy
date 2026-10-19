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
  Snapshot,
  Text,
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
    sceneId: mode === 'main' ? 'morning' : 'problems-hub',
    scores: emptyScores(),
    journal: [],
    lastEcho: null,
    pendingInsight: null,
    solvedProblems: [],
    history: [],
  }
}

const HISTORY_LIMIT = 60

function snapshot(state: GameState): Snapshot {
  const { history: _history, ...rest } = state
  void _history
  return rest
}

/** Step back to the state before the last choice. */
export function undo(state: GameState): GameState {
  if (state.history.length === 0) return state
  const history = state.history.slice(0, -1)
  const previous = state.history[state.history.length - 1]
  return { ...previous, history }
}

function pickedChoices(state: GameState | undefined): Set<string> {
  return new Set(state?.journal.map((entry) => entry.choiceId) ?? [])
}

/** Adds the scene's memory lines (if the player earned them) in front of the body. */
function withMemory(scene: Scene, state: GameState | undefined): Scene {
  if (!scene.memory?.length) return scene
  const picked = pickedChoices(state)
  const lines = scene.memory.filter((line) => line.when.some((id) => picked.has(id)))
  if (lines.length === 0) return scene
  const join = (lang: keyof Text) =>
    [...lines.map((line) => line.text[lang]), scene.body[lang]].join('\n\n')
  return { ...scene, body: { az: join('az'), en: join('en') } }
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
  const scene = catalog.find((item) => item.id === id)
  return scene ? withMemory(scene, state) : undefined
}

export function applyChoice(state: GameState, choiceId: string): GameState {
  const scene = getScene(state.sceneId, state)
  const choice = scene?.choices.find((item) => item.id === choiceId)
  if (!scene || !choice) return state

  const history = [...state.history, snapshot(state)].slice(-HISTORY_LIMIT)
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
      history,
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
    history,
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

/**
 * Highest score wins. On a tie, the school the player leaned on most recently
 * wins — so the ending reflects where the road actually finished.
 */
export function dominantSchool(
  scores: Record<School, number>,
  journal: JournalEntry[] = [],
): School {
  const top = Math.max(...SCHOOLS.map((school) => scores[school]))
  const tied = SCHOOLS.filter((school) => scores[school] === top)
  if (tied.length > 1) {
    for (let i = journal.length - 1; i >= 0; i--) {
      const school = journal[i].insight.school
      if (tied.includes(school)) return school
    }
  }
  return tied[0]
}

/** The runner-up school, if it is a real presence (not zero). */
export function secondSchool(
  scores: Record<School, number>,
  first: School,
): School | null {
  const rest = SCHOOLS.filter((school) => school !== first)
  const best = rest.reduce((a, b) => (scores[b] > scores[a] ? b : a))
  return scores[best] > 0 ? best : null
}

export function resolveEnding(state: GameState): Ending {
  // "Fractured" = no clear leader (top school under 30% of all points)
  // AND rival schools pull against each other at least as hard as the leader.
  const heat = contradiction(state.scores)
  const max = Math.max(...SCHOOLS.map((school) => state.scores[school]))
  const total = SCHOOLS.reduce((sum, school) => sum + state.scores[school], 0)
  if (heat >= 4 && max > 0 && heat >= max && max / total < 0.3) {
    return endings.find((ending) => ending.id === 'fractured')!
  }
  const school = dominantSchool(state.scores, state.journal)
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
