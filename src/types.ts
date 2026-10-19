export type Lang = 'az' | 'en'

export type School =
  | 'stoic'
  | 'utilitarian'
  | 'kantian'
  | 'existential'
  | 'virtue'
  | 'buddhist'

export type Mode = 'main' | 'problems'

export type Text = { az: string; en: string }

export type Weights = Partial<Record<School, number>>

export type Insight = {
  school: School
  philosopher: string
  quote: Text
  explain: Text
  /** Optional question for the reader to keep thinking about. */
  think?: Text
}

export type Choice = {
  id: string
  text: Text
  next: string
  weights: Weights
  insight: Insight
  echo: Text
  skipInsight?: boolean
}

/** A line that appears in a scene only if one of `when` (choice ids) was picked earlier. */
export type Memory = {
  when: string[]
  text: Text
}

export type Scene = {
  id: string
  chapter: Text
  title: Text
  body: Text
  /** Chapter number in the main story (1–5), for the progress dots. */
  step?: number
  /** Key of an illustration in src/art.tsx */
  image?: string
  memory?: Memory[]
  prompt?: Text
  choices: Choice[]
}

export type JournalEntry = {
  sceneId: string
  choiceId: string
  insight: Insight
  echo: Text
}

export type GameState = {
  mode: Mode
  sceneId: string
  scores: Record<School, number>
  journal: JournalEntry[]
  lastEcho: Text | null
  pendingInsight: { insight: Insight; echo: Text; next: string } | null
  solvedProblems: string[]
  /** Earlier states, for undo. Never nested. */
  history: Snapshot[]
}

export type Snapshot = Omit<GameState, 'history'>

export type Ending = {
  id: string
  school: School | 'fractured'
  title: Text
  body: Text
  reading: { work: Text; why: Text }[]
}

export type ProblemMeta = {
  id: string
  title: Text
  teaser: Text
}
