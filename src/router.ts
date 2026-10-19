import { useEffect, useState } from 'react'

/*
 * Tiny hash router. Two sections — "Play" (Sına) and "Learn" (Öyrən):
 *
 *   #/                         home
 *   #/play                     play hub
 *   #/play/story               the story
 *   #/play/experiments         thought experiments
 *   #/learn                    schools (default Learn tab)
 *   #/learn/people             philosophers
 *   #/learn/god                the question of God
 *   #/learn/god/v/<viewId>     one view (theism, atheism, …)
 *   #/learn/god/a/<argId>      one argument
 *   #/learn/timeline           timeline
 *   #/learn/glossary           glossary
 *   #/learn/credits            photo sources and licences
 *   #/learn/s/<schoolId>       one school
 *   #/learn/p/<personId>       one philosopher
 *
 * Old links (#/library/…) still work. Hash routing works on any static host.
 */

export type LearnTab = 'schools' | 'people' | 'god' | 'timeline' | 'glossary' | 'credits'
export type PlayMode = 'main' | 'problems'

export type Route =
  | { view: 'home' }
  | { view: 'play'; mode?: PlayMode }
  | { view: 'learn'; tab: LearnTab }
  | { view: 'school'; id: string }
  | { view: 'person'; id: string }
  | { view: 'god-view'; id: string }
  | { view: 'god-arg'; id: string }

const learnTabs: LearnTab[] = ['schools', 'people', 'god', 'timeline', 'glossary', 'credits']

export function parse(hash: string): Route {
  const parts = hash.replace(/^#\/?/, '').split('/').filter(Boolean)
  const [section, a, b] = parts
  if (section === 'play') {
    if (a === 'story') return { view: 'play', mode: 'main' }
    if (a === 'experiments') return { view: 'play', mode: 'problems' }
    return { view: 'play' }
  }
  if (section === 'learn' || section === 'library') {
    if (a === 's' && b) return { view: 'school', id: b }
    if (a === 'p' && b) return { view: 'person', id: b }
    if (a === 'god' && parts[2] === 'v' && parts[3]) return { view: 'god-view', id: parts[3] }
    if (a === 'god' && parts[2] === 'a' && parts[3]) return { view: 'god-arg', id: parts[3] }
    if (learnTabs.includes(a as LearnTab)) return { view: 'learn', tab: a as LearnTab }
    return { view: 'learn', tab: 'schools' }
  }
  return { view: 'home' }
}

export const href = {
  home: '#/',
  play: '#/play',
  story: '#/play/story',
  experiments: '#/play/experiments',
  learn: '#/learn',
  library: '#/learn',
  people: '#/learn/people',
  god: '#/learn/god',
  godView: (id: string) => `#/learn/god/v/${id}`,
  godArg: (id: string) => `#/learn/god/a/${id}`,
  timeline: '#/learn/timeline',
  glossary: '#/learn/glossary',
  credits: '#/learn/credits',
  school: (id: string) => `#/learn/s/${id}`,
  person: (id: string) => `#/learn/p/${id}`,
}

export function useRoute(): Route {
  const [route, setRoute] = useState(() => parse(window.location.hash))
  useEffect(() => {
    const onChange = () => setRoute(parse(window.location.hash))
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return route
}

export function go(to: string) {
  if (window.location.hash !== to) window.location.hash = to
}
