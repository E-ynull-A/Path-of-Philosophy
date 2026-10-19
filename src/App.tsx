import { useEffect, useMemo, useRef, useState } from 'react'
import { Art, SchoolIcon } from './art'
import { home, lib, schoolInfo, schoolName, t, ui } from './copy'
import {
  applyChoice,
  compassPercents,
  createGame,
  dismissInsight,
  dominantSchool,
  getScene,
  resolveEnding,
  SCHOOLS,
  secondSchool,
  undo,
} from './engine'
import { glossary } from './glossary'
import { args as godArgs, views as godViews } from './godData'
import { Library, Medallion } from './Library'
import { LogoMark } from './Logo'
import { findPhilosopher, libSchools, philosophers } from './libraryData'
import { problemMetas } from './problems'
import { go, href, useRoute, type Route } from './router'
import { Rich, Term } from './Rich'
import { loadSaved, save } from './storage'
import type { GameState, Insight, Lang, Mode, School, Scene } from './types'

// ───────────────────────────────────────── small pieces

function SchoolLabel({ school, lang }: { school: School; lang: Lang }) {
  return (
    <Term
      title={t(lang, schoolName[school])}
      def={t(lang, schoolInfo[school])}
      href={href.school(school)}
      more={t(lang, lib.readMore)}
    >
      {t(lang, schoolName[school])}
    </Term>
  )
}

/** Philosopher name with a bio popup, if the glossary knows them. */
function Who({ insight, lang }: { insight: Insight; lang: Lang }) {
  const name = insight.philosopher
  const entry = glossary.find(
    (item) => item.caseSensitive && item.stems[lang].some((stem) => name.includes(stem)),
  )
  return (
    <>
      {entry ? (
        <Term
          title={entry.term[lang]}
          def={entry.def[lang]}
          href={findPhilosopher(entry.id) ? href.person(entry.id) : undefined}
          more={t(lang, lib.readMore)}
        >
          {name}
        </Term>
      ) : (
        name
      )}
      {' · '}
      <SchoolLabel school={insight.school} lang={lang} />
    </>
  )
}

function Compass({
  lang,
  percents,
  highlight,
}: {
  lang: Lang
  percents: Record<School, number>
  highlight?: School
}) {
  return (
    <div className="compass">
      {SCHOOLS.map((school) => (
        <div className={`bar${school === highlight ? ' lead' : ''}`} key={school}>
          <span className="bar-name">
            <SchoolIcon school={school} size={16} />
            <SchoolLabel school={school} lang={lang} />
          </span>
          <div className="track">
            <div className="fill" style={{ width: `${percents[school]}%` }} />
          </div>
          <span>{percents[school]}</span>
        </div>
      ))}
    </div>
  )
}

function ProblemsHub({
  lang,
  scene,
  game,
  onPick,
}: {
  lang: Lang
  scene: Scene
  game: GameState
  onPick: (choiceId: string) => void
}) {
  const solved = new Set(game.solvedProblems)
  const order = scene.choices.map((choice) => choice.id)
  const finish = scene.choices.find((choice) => choice.id === 'problems-finish')
  return (
    <article className="scene hub">
      <div className="chapter">{t(lang, ui.problemsHubTitle)}</div>
      <h2>{t(lang, ui.problemsHubTitle)}</h2>
      <Rich className="body" text={ui.problemsHubBody} lang={lang} />
      <div className="progress" aria-label={`${solved.size} / ${problemMetas.length}`}>
        {problemMetas.map((meta) => (
          <span key={meta.id} className={solved.has(meta.id) ? 'on' : ''} />
        ))}
        <em>
          {solved.size} / {problemMetas.length}
        </em>
      </div>
      <div className="cards">
        {problemMetas.map((meta) => {
          const done = solved.has(meta.id)
          const index = order.indexOf(`open-${meta.id}`)
          return (
            <button
              key={meta.id}
              type="button"
              className={`card-problem${done ? ' done' : ''}`}
              disabled={done}
              onClick={() => onPick(`open-${meta.id}`)}
            >
              <Art name={meta.id} />
              <span className="card-text">
                <strong>
                  {!done && index >= 0 && <span className="num">{index + 1}</span>}
                  {t(lang, meta.title)}
                </strong>
                <span>{t(lang, meta.teaser)}</span>
                {done && <em className="badge">{t(lang, ui.done)}</em>}
              </span>
            </button>
          )
        })}
      </div>
      {finish && (
        <button type="button" className="primary finish" onClick={() => onPick(finish.id)}>
          <span className="num">{order.indexOf(finish.id) + 1}</span>
          {t(lang, finish.text)}
        </button>
      )}
    </article>
  )
}

// ───────────────────────────────────────── home & section pieces

type Games = Partial<Record<Mode, GameState>>

const ROMAN = ['I', 'II', 'III', 'IV', 'V']

/** Where a saved road stands, in one short line + a 0..1 fraction. */
function progressOf(game: GameState | undefined, lang: Lang) {
  if (!game || (game.history.length === 0 && game.journal.length === 0 && game.solvedProblems.length === 0)) {
    return null
  }
  if (game.sceneId === 'ending' && !game.pendingInsight) {
    return { done: true, line: t(lang, home.finished) + ' ✓', fraction: 1 }
  }
  if (game.mode === 'problems') {
    const solved = game.solvedProblems.length
    return {
      done: false,
      line: `${solved} / ${problemMetas.length} ${t(lang, home.solvedOf)}`,
      fraction: solved / problemMetas.length,
    }
  }
  const scene = getScene(game.sceneId, game)
  if (!scene) return null
  const chapter = ROMAN.indexOf(scene.chapter.az.split(' ·')[0]) + 1
  return {
    done: false,
    line: `${t(lang, home.youAreAt)}: ${t(lang, scene.chapter)}`,
    fraction: Math.max(chapter - 1, 0) / ROMAN.length + 0.1,
  }
}

function PlayCards({ lang, games, hints = false }: { lang: Lang; games: Games; hints?: boolean }) {
  const items = [
    { mode: 'main' as const, link: href.story, art: 'store', title: home.story, hint: home.storyHint },
    { mode: 'problems' as const, link: href.experiments, art: 'p-trolley', title: home.experiments, hint: home.experimentsHint },
  ]
  return (
    <div className="play-cards">
      {items.map((item) => {
        const progress = progressOf(games[item.mode], lang)
        return (
          <a key={item.mode} className="play-card" href={item.link}>
            <Art name={item.art} />
            <span className="play-card-body">
              <strong>{t(lang, item.title)}</strong>
              {hints && <span className="muted">{t(lang, item.hint)}</span>}
              {progress && (
                <span className="progress-line">
                  <span className="meter">
                    <span style={{ width: `${Math.min(progress.fraction, 1) * 100}%` }} />
                  </span>
                  <em>{progress.line}</em>
                </span>
              )}
              <span className="cta">
                {progress ? t(lang, progress.done ? home.seeResult : home.continue) : t(lang, home.start)}
              </span>
            </span>
          </a>
        )
      })}
    </div>
  )
}

function LearnGlyph({ kind }: { kind: 'schools' | 'timeline' | 'glossary' }) {
  const p = { width: 26, height: 26, viewBox: '0 0 24 24', 'aria-hidden': true, className: 'learn-glyph' }
  if (kind === 'schools')
    return (
      <svg {...p}>
        <path d="M3 9 12 4l9 5M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 20h18" />
      </svg>
    )
  if (kind === 'timeline')
    return (
      <svg {...p}>
        <path d="M6 3h12M6 21h12" />
        <path d="M7 3c0 5 4 6 5 9-1 3-5 4-5 9M17 3c0 5-4 6-5 9 1 3 5 4 5 9" />
        <path d="M9.5 18.5c1-1 1.8-1.4 2.5-1.4s1.5.4 2.5 1.4M10 7.5h4" />
      </svg>
    )
  return (
    <svg {...p}>
      <path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3z" />
      <path d="M5 17a3 3 0 0 1 3-3h11M9 8h6" />
    </svg>
  )
}

function LearnCards({ lang }: { lang: Lang }) {
  const faces = ['socrates', 'confucius', 'avicenna', 'beauvoir']
    .map((id) => findPhilosopher(id))
    .filter((person) => person !== undefined)
  return (
    <div className="learn-cards">
      <a className="learn-card featured" href={href.god}>
        <Art name="god" fill />
        <span className="learn-card-body">
          <span className="tag">
            {godViews.length} {t(lang, home.views)} · {godArgs.length} {t(lang, home.args)}
          </span>
          <strong>{t(lang, lib.tabGod)}</strong>
        </span>
      </a>
      <a className="learn-card" href={href.learn}>
        <LearnGlyph kind="schools" />
        <strong>{t(lang, lib.tabSchools)}</strong>
        <span className="count">
          {libSchools.length} {t(lang, lib.schoolsCount)}
        </span>
      </a>
      <a className="learn-card" href={href.people}>
        <span className="faces">
          {faces.map((person) => (
            <Medallion key={person.id} person={person} lang={lang} size={30} />
          ))}
        </span>
        <strong>{t(lang, lib.tabPeople)}</strong>
        <span className="count">
          {philosophers.length} {t(lang, lib.peopleCount)}
        </span>
      </a>
      <a className="learn-card" href={href.timeline}>
        <LearnGlyph kind="timeline" />
        <strong>{t(lang, lib.tabTimeline)}</strong>
      </a>
      <a className="learn-card" href={href.glossary}>
        <LearnGlyph kind="glossary" />
        <strong>{t(lang, lib.tabGlossary)}</strong>
      </a>
    </div>
  )
}

function SectionHead({ title, link, num }: { title: string; link: string; num: string }) {
  return (
    <header className="section-head">
      <span className="section-num" aria-hidden="true">
        {num}
      </span>
      <div>
        <h2>
          <a href={link}>{title}</a>
        </h2>
      </div>
    </header>
  )
}

function PlayTabs({
  lang,
  mode,
  onRestart,
  canRestart,
}: {
  lang: Lang
  mode?: Mode
  onRestart: () => void
  canRestart: boolean
}) {
  const [sure, setSure] = useState(false)
  return (
    <div className="play-tabs">
      <nav className="tabs" aria-label={t(lang, home.playTitle)}>
        <a href={href.story} className={mode === 'main' ? 'on' : ''} aria-current={mode === 'main' ? 'page' : undefined}>
          {t(lang, home.story)}
        </a>
        <a
          href={href.experiments}
          className={mode === 'problems' ? 'on' : ''}
          aria-current={mode === 'problems' ? 'page' : undefined}
        >
          {t(lang, home.experiments)}
        </a>
      </nav>
      {mode && canRestart && (
        <button
          type="button"
          className={`ghost small-btn restart${sure ? ' sure' : ''}`}
          onClick={() => {
            if (!sure) return setSure(true)
            setSure(false)
            onRestart()
          }}
          onBlur={() => setSure(false)}
        >
          {t(lang, sure ? home.restartSure : home.restart)}
        </button>
      )}
    </div>
  )
}

// ───────────────────────────────────────── app

function validGames(): { lang?: Lang; games: Games } {
  const data = loadSaved()
  const games: Games = {}
  for (const [mode, game] of Object.entries(data?.games ?? {}) as [Mode, GameState][]) {
    // A save from an older story version may point to a scene that no longer exists.
    if (game.sceneId === 'ending' || getScene(game.sceneId, game)) games[mode] = game
  }
  return { lang: data?.lang, games }
}

function isLearn(route: Route) {
  return route.view !== 'home' && route.view !== 'play'
}

export default function App() {
  const route = useRoute()
  const [initial] = useState(validGames)
  const [lang, setLang] = useState<Lang>(initial.lang ?? 'az')
  const [games, setGames] = useState<Games>(initial.games)
  const [journalOpen, setJournalOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const continueRef = useRef<HTMLButtonElement>(null)

  const mode: Mode | undefined = route.view === 'play' ? route.mode : undefined
  const game: GameState | undefined = mode ? (games[mode] ?? createGame(mode)) : undefined
  const scene = game ? getScene(game.sceneId, game) : undefined
  const scores = game?.scores
  const percents = useMemo(() => (scores ? compassPercents(scores) : null), [scores])
  const atEnd = !!game && game.sceneId === 'ending' && !game.pendingInsight
  const ending = atEnd && game ? resolveEnding(game) : null
  const isHub = scene?.id === 'problems-hub'

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  // Keep the session so a refresh does not wipe the road.
  useEffect(() => {
    save({ lang, games })
  }, [lang, games])

  useEffect(() => {
    if (game?.pendingInsight) continueRef.current?.focus()
  }, [game?.pendingInsight])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [game?.sceneId])

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [route])

  function setGame(next: GameState) {
    setGames((all) => ({ ...all, [next.mode]: next }))
  }

  function start(which: Mode) {
    setGames((all) => ({ ...all, [which]: createGame(which) }))
    setCopied(false)
    go(which === 'main' ? href.story : href.experiments)
    window.scrollTo({ top: 0 })
  }

  function choose(choiceId: string) {
    if (game) setGame(applyChoice(game, choiceId))
  }

  function continueAfterInsight() {
    if (game) setGame(dismissInsight(game))
  }

  function stepBack() {
    if (game) setGame(undo(game))
  }

  async function copyResult() {
    if (!ending || !percents) return
    const lines = [
      `${t(lang, ui.title)} — ${t(lang, ending.title)}`,
      ...SCHOOLS.map((school) => `${t(lang, schoolName[school])}: ${percents[school]}`),
    ]
    try {
      await navigator.clipboard.writeText(lines.join('\n'))
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  // Keyboard (play pages only): number keys pick a choice, Enter / Space closes the insight card.
  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (!game || event.metaKey || event.ctrlKey || event.altKey || event.repeat) return
      const target = event.target as HTMLElement | null
      // Never steal keys while typing.
      if (target?.closest('input, textarea')) return
      if (game.pendingInsight) {
        // Let Enter / Space work normally on a focused link, term or toggle.
        const onControl = target?.closest('.term, .tip, summary, a, .lang, .mainnav, .tabs')
        if (!onControl && (event.key === 'Enter' || event.key === ' ')) {
          event.preventDefault()
          continueAfterInsight()
        }
        return
      }
      if (atEnd || !scene) return
      const index = Number(event.key) - 1
      if (Number.isInteger(index) && index >= 0 && index < scene.choices.length) {
        choose(scene.choices[index].id)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  const lead = ending && ending.school !== 'fractured' ? ending.school : undefined
  const runnerUp =
    ending && game ? secondSchool(game.scores, lead ?? dominantSchool(game.scores, game.journal)) : null
  const picture = scene && !isHub ? (scene.image ?? scene.id) : undefined
  const leanGame = games.main?.journal.length ? games.main : games.problems
  const leanSchool = leanGame && leanGame.journal.length > 0 ? dominantSchool(leanGame.scores, leanGame.journal) : null
  const section = route.view === 'home' ? null : route.view === 'play' ? 'play' : 'learn'
  const canRestart = !!game && (game.history.length > 0 || game.journal.length > 0 || atEnd)

  return (
    <>
      {route.view === 'home' && (
        <div className="home-bg" aria-hidden="true">
          <Art name="hero" fill />
        </div>
      )}
      <div className="app">
        <header className="topbar">
          <a className="brand" href={href.home}>
            <LogoMark size={34} className="brand-logo" />
            {t(lang, ui.title)}
          </a>
          <nav className="mainnav" aria-label="Main">
            <a
              href={href.play}
              className={section === 'play' ? 'on' : ''}
              aria-current={section === 'play' ? 'page' : undefined}
            >
              {t(lang, home.playTitle)}
            </a>
            <a
              href={href.learn}
              className={section === 'learn' ? 'on' : ''}
              aria-current={section === 'learn' ? 'page' : undefined}
            >
              {t(lang, home.learnTitle)}
            </a>
          </nav>
          <div className="top-actions">
            <div className="lang" role="group" aria-label="Language">
              <button
                type="button"
                className={lang === 'az' ? 'on' : ''}
                aria-pressed={lang === 'az'}
                onClick={() => setLang('az')}
              >
                AZ
              </button>
              <button
                type="button"
                className={lang === 'en' ? 'on' : ''}
                aria-pressed={lang === 'en'}
                onClick={() => setLang('en')}
              >
                EN
              </button>
            </div>
          </div>
        </header>

        {route.view === 'home' && (
          <main className="home">
            <div className="home-hero">
              <LogoMark size={88} className="home-logo" />
              <h1 className="home-title">{t(lang, ui.title)}</h1>
            </div>
            <section className="home-section">
              <SectionHead num="01" title={t(lang, home.playTitle)} link={href.play} />
              <PlayCards lang={lang} games={games} />
            </section>
            <section className="home-section">
              <SectionHead num="02" title={t(lang, home.learnTitle)} link={href.learn} />
              <LearnCards lang={lang} />
            </section>
            <p className="keys">{t(lang, ui.tapHint)}</p>
          </main>
        )}

        {isLearn(route) && (
          <Library
            route={route as Exclude<Route, { view: 'home' } | { view: 'play' }>}
            lang={lang}
            lean={leanSchool}
            onTry={() => {
              if (!games.main || games.main.sceneId === 'ending') start('main')
              else go(href.story)
            }}
          />
        )}

        {route.view === 'play' && (
          <PlayTabs
            key={mode ?? 'hub'}
            lang={lang}
            mode={mode}
            canRestart={canRestart}
            onRestart={() => mode && start(mode)}
          />
        )}

        {route.view === 'play' && !mode && (
          <section className="play-hub">
            <h1>{t(lang, home.playTitle)}</h1>
            <p className="lede-sm">{t(lang, home.playHubLede)}</p>
            <PlayCards lang={lang} games={games} hints />
            <p className="keys">
              {t(lang, ui.tapHint)} {t(lang, ui.keysHint)}
            </p>
          </section>
        )}

        {game && !atEnd && scene && percents && (
          <div className={`layout${isHub ? ' wide' : ''}`}>
            {isHub ? (
              <ProblemsHub lang={lang} scene={scene} game={game} onPick={choose} />
            ) : (
              <article className="scene" key={scene.id}>
                {picture && <Art name={picture} className="scene-art" fill />}
                {game.lastEcho && (
                  <p className="echo">
                    <strong>{t(lang, ui.echoLabel)}. </strong>
                    {t(lang, game.lastEcho)}
                  </p>
                )}
                <div className="chapter-row">
                  <div className="chapter">{t(lang, scene.chapter)}</div>
                  {scene.step && (
                    <ol className="steps" aria-label={`${scene.step} / 5`}>
                      {[1, 2, 3, 4, 5].map((n) => (
                        <li key={n} className={n < scene.step! ? 'done' : n === scene.step ? 'now' : ''} />
                      ))}
                    </ol>
                  )}
                </div>
                <h2>{t(lang, scene.title)}</h2>
                <Rich className="body" text={scene.body} lang={lang} />
                {scene.prompt && <Rich className="prompt" text={scene.prompt} lang={lang} />}
                <div className="choices">
                  {scene.choices.map((choice, index) => (
                    <button
                      key={choice.id}
                      type="button"
                      className="choice"
                      onClick={() => choose(choice.id)}
                    >
                      <span className="num" aria-hidden="true">
                        {index + 1}
                      </span>
                      <span>{t(lang, choice.text)}</span>
                    </button>
                  ))}
                </div>
                {game.history.length > 0 && (
                  <button type="button" className="ghost undo" onClick={stepBack}>
                    {t(lang, ui.undo)}
                  </button>
                )}
              </article>
            )}

            <aside className="side">
              <h3>{t(lang, ui.sual)}</h3>
              <p className="sual">{t(lang, ui.sualIntro)}</p>
              <h3>{t(lang, ui.compass)}</h3>
              <p className="hint">{t(lang, ui.compassHint)}</p>
              <Compass lang={lang} percents={percents} />
              <div style={{ marginTop: 18 }}>
                <button
                  type="button"
                  className="ghost"
                  aria-expanded={journalOpen}
                  onClick={() => setJournalOpen((open) => !open)}
                >
                  {t(lang, ui.journal)} · {game.journal.length} {journalOpen ? '▴' : '▾'}
                </button>
              </div>
              {journalOpen && (
                <div className="journal">
                  {game.journal.length === 0 && (
                    <p className="explain">{t(lang, ui.emptyJournal)}</p>
                  )}
                  {[...game.journal].reverse().map((entry) => (
                    <div className="entry" key={`${entry.sceneId}-${entry.choiceId}`}>
                      <strong>
                        <Who insight={entry.insight} lang={lang} />
                      </strong>
                      <span className="entry-quote">“{t(lang, entry.insight.quote)}”</span>
                    </div>
                  ))}
                </div>
              )}
            </aside>
          </div>
        )}

        {game?.pendingInsight && (
          <div className="modal" role="dialog" aria-modal="true" aria-labelledby="insight-who">
            <div className="card">
              <div className="card-head">
                <span className="card-icon">
                  <SchoolIcon school={game.pendingInsight.insight.school} size={26} />
                </span>
                <div className="who" id="insight-who">
                  <Who insight={game.pendingInsight.insight} lang={lang} />
                </div>
              </div>
              <blockquote>{t(lang, game.pendingInsight.insight.quote)}</blockquote>
              <div className="label">{t(lang, ui.plain)}</div>
              <Rich className="explain" text={game.pendingInsight.insight.explain} lang={lang} />
              {game.pendingInsight.insight.think && (
                <div className="think">
                  <div className="label">{t(lang, ui.think)}</div>
                  <p>{t(lang, game.pendingInsight.insight.think)}</p>
                </div>
              )}
              <p className="echo">{t(lang, game.pendingInsight.echo)}</p>
              <button
                type="button"
                className="primary"
                ref={continueRef}
                onClick={continueAfterInsight}
              >
                {t(lang, ui.continue)}
              </button>
            </div>
          </div>
        )}

        {game && ending && percents && (
          <section className="ending scene">
            {game.lastEcho && (
              <p className="echo">
                <strong>{t(lang, ui.lastStep)}. </strong>
                {t(lang, game.lastEcho)}
              </p>
            )}
            <div className="ending-head">
              <span className="ending-icon">
                {lead ? (
                  <SchoolIcon school={lead} size={44} />
                ) : (
                  <span className="crack" aria-hidden="true">
                    ⟡
                  </span>
                )}
              </span>
              <div>
                <div className="chapter">{t(lang, ui.yourPath)}</div>
                <h1>{t(lang, ending.title)}</h1>
              </div>
            </div>
            <Rich className="body" text={ending.body} lang={lang} />
            {lead && (
              <a className="inline-link" href={href.school(lead)}>
                {t(lang, lib.openLibrary)}
              </a>
            )}

            <h3>{t(lang, ui.yourCompass)}</h3>
            <Compass lang={lang} percents={percents} highlight={lead} />
            {runnerUp && (
              <p className="explain near">
                <strong>{t(lang, ui.alsoNear)}.</strong> {t(lang, ui.alsoNearBody)}{' '}
                <SchoolLabel school={runnerUp} lang={lang} />
              </p>
            )}

            <h3>{t(lang, ui.reading)}</h3>
            <ul className="reads">
              {ending.reading.map((item) => (
                <li key={t('en', item.work)}>
                  <strong>{t(lang, item.work)}</strong>
                  <div className="explain">{t(lang, item.why)}</div>
                </li>
              ))}
            </ul>

            {game.journal.length > 0 && (
              <details className="road">
                <summary>
                  {t(lang, ui.yourRoad)} · {game.journal.length}
                </summary>
                <ol>
                  {game.journal.map((entry) => {
                    const from = getScene(entry.sceneId)
                    return (
                      <li key={`${entry.sceneId}-${entry.choiceId}`}>
                        <span className="road-scene">{from ? t(lang, from.title) : ''}</span>
                        <span className="road-who">
                          {entry.insight.philosopher} · {t(lang, schoolName[entry.insight.school])}
                        </span>
                      </li>
                    )
                  })}
                </ol>
              </details>
            )}

            {game.mode === 'main' && <p className="explain">{t(lang, ui.tryOther)}</p>}
            <div className="ending-actions">
              <button type="button" className="primary" onClick={() => start(game.mode)}>
                {game.mode === 'main' ? t(lang, ui.playAgainMain) : t(lang, home.restart)}
              </button>
              {game.mode === 'main' ? (
                <a className="ghost btn-link" href={href.experiments}>
                  {t(lang, ui.openProblems)}
                </a>
              ) : (
                <a className="ghost btn-link" href={href.story}>
                  {t(lang, home.story)} →
                </a>
              )}
              <button type="button" className="ghost" onClick={copyResult}>
                {copied ? t(lang, ui.copied) : t(lang, ui.copyResult)}
              </button>
              <a className="ghost btn-link" href={href.learn}>
                {t(lang, home.learnTitle)} →
              </a>
            </div>
          </section>
        )}
        <footer className="site-footer">
          <a href={href.credits}>{t(lang, lib.footerCredits)}</a>
        </footer>
      </div>
    </>
  )
}
