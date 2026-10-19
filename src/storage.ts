import type { GameState, Lang, Mode } from './types'

/*
 * v3: the story and the thought experiments keep separate progress,
 * so switching between them never loses either one.
 * Older saves (v2: one game at a time) are migrated once.
 */

export type Saved = {
  version: 3
  lang: Lang
  games: Partial<Record<Mode, GameState>>
}

const KEY = 'path-of-philosophy:v3'
const OLD_KEY = 'path-of-philosophy:v2'

function readJSON(key: string): unknown {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

/** Reads the saved session. Returns null if nothing is saved or storage is blocked. */
export function loadSaved(): Saved | null {
  const data = readJSON(KEY) as Saved | null
  if (data?.version === 3 && data.games) {
    for (const game of Object.values(data.games)) if (game) game.history ??= []
    return data
  }
  // migrate v2
  const old = readJSON(OLD_KEY) as { lang?: Lang; game?: GameState } | null
  if (old?.game?.mode) {
    old.game.history ??= []
    return { version: 3, lang: old.lang ?? 'az', games: { [old.game.mode]: old.game } }
  }
  return null
}

export function save(data: Omit<Saved, 'version'>): void {
  try {
    localStorage.setItem(KEY, JSON.stringify({ version: 3, ...data }))
  } catch {
    // Private mode or blocked storage: the app still works, it just will not resume.
  }
}

/** Per-viewer answers on the God page ("does this argument convince you?"). */
export type Vote = 'yes' | 'partly' | 'no'
const VOTES = 'path-of-philosophy:god-votes'

export function loadVotes(): Record<string, Vote> {
  const data = readJSON(VOTES)
  return data && typeof data === 'object' ? (data as Record<string, Vote>) : {}
}

export function saveVotes(votes: Record<string, Vote>): void {
  try {
    localStorage.setItem(VOTES, JSON.stringify(votes))
  } catch {
    // ignore
  }
}
