import { useMemo, useState } from 'react'
import { schoolName, t, ui } from './copy'
import {
  applyChoice,
  compassPercents,
  createGame,
  dismissInsight,
  getScene,
  resolveEnding,
  SCHOOLS,
} from './engine'
import type { GameState, Lang, Mode } from './types'

type Screen = 'title' | 'play' | 'ending'

export default function App() {
  const [lang, setLang] = useState<Lang>('az')
  const [screen, setScreen] = useState<Screen>('title')
  const [game, setGame] = useState<GameState>(() => createGame('main'))
  const [journalOpen, setJournalOpen] = useState(true)

  const scene = getScene(game.sceneId, game)
  const percents = useMemo(() => compassPercents(game.scores), [game.scores])
  const ending = screen === 'ending' ? resolveEnding(game) : null

  function start(mode: Mode) {
    setGame(createGame(mode))
    setScreen('play')
  }

  function goHome() {
    setScreen('title')
    setGame(createGame('main'))
  }

  function choose(choiceId: string) {
    const next = applyChoice(game, choiceId)
    setGame(next)
    if (next.sceneId === 'ending' && !next.pendingInsight) setScreen('ending')
  }

  function continueAfterInsight() {
    const next = dismissInsight(game)
    setGame(next)
    if (next.sceneId === 'ending') setScreen('ending')
  }

  return (
    <div className="app">
      <header className="topbar">
        <button type="button" className="brand" onClick={goHome}>
          {t(lang, ui.title)}
        </button>
        <div className="top-actions">
          {screen !== 'title' && (
            <button type="button" className="ghost" onClick={goHome}>
              {t(lang, ui.home)}
            </button>
          )}
          <div className="lang" role="group" aria-label="Language">
            <button
              type="button"
              className={lang === 'az' ? 'on' : ''}
              onClick={() => setLang('az')}
            >
              AZ
            </button>
            <button
              type="button"
              className={lang === 'en' ? 'on' : ''}
              onClick={() => setLang('en')}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      {screen === 'title' && (
        <section className="title-screen">
          <div>
            <h1>{t(lang, ui.title)}</h1>
            <p className="lede">{t(lang, ui.subtitle)}</p>
            <p className="how">{t(lang, ui.howTo)}</p>
            <div className="path-picks">
              <button type="button" className="path-card" onClick={() => start('main')}>
                <strong>{t(lang, ui.enterMain)}</strong>
                <span>{t(lang, ui.enterMainHint)}</span>
              </button>
              <button type="button" className="path-card" onClick={() => start('problems')}>
                <strong>{t(lang, ui.enterProblems)}</strong>
                <span>{t(lang, ui.enterProblemsHint)}</span>
              </button>
            </div>
          </div>
        </section>
      )}

      {screen === 'play' && scene && (
        <div className="layout">
          <article className="scene">
            {game.lastEcho && (
              <p className="echo">
                <strong>{t(lang, ui.echoLabel)}. </strong>
                {t(lang, game.lastEcho)}
              </p>
            )}
            <div className="chapter">{t(lang, scene.chapter)}</div>
            <h2>{t(lang, scene.title)}</h2>
            <p className="body">{t(lang, scene.body)}</p>
            {scene.prompt && <p className="prompt">{t(lang, scene.prompt)}</p>}
            <div className="choices">
              {scene.choices.map((choice) => (
                <button
                  key={choice.id}
                  type="button"
                  className="choice"
                  onClick={() => choose(choice.id)}
                >
                  {t(lang, choice.text)}
                </button>
              ))}
            </div>
          </article>

          <aside className="side">
            <h3>{t(lang, ui.sual)}</h3>
            <p className="sual">{t(lang, ui.sualIntro)}</p>
            <h3>{t(lang, ui.compass)}</h3>
            {SCHOOLS.map((school) => (
              <div className="bar" key={school}>
                <span>{t(lang, schoolName[school])}</span>
                <div className="track">
                  <div className="fill" style={{ width: `${percents[school]}%` }} />
                </div>
                <span>{percents[school]}</span>
              </div>
            ))}
            <div style={{ marginTop: 18 }}>
              <button
                type="button"
                className="ghost"
                onClick={() => setJournalOpen((open) => !open)}
              >
                {t(lang, ui.journal)}
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
                      {entry.insight.philosopher} · {t(lang, schoolName[entry.insight.school])}
                    </strong>
                    {t(lang, entry.insight.explain)}
                  </div>
                ))}
              </div>
            )}
          </aside>
        </div>
      )}

      {game.pendingInsight && (
        <div className="modal" role="dialog" aria-modal="true">
          <div className="card">
            <div className="who">
              {game.pendingInsight.insight.philosopher} ·{' '}
              {t(lang, schoolName[game.pendingInsight.insight.school])}
            </div>
            <blockquote>{t(lang, game.pendingInsight.insight.quote)}</blockquote>
            <p className="explain">{t(lang, game.pendingInsight.insight.explain)}</p>
            <p className="echo">{t(lang, game.pendingInsight.echo)}</p>
            <button type="button" className="primary" onClick={continueAfterInsight}>
              {t(lang, ui.continue)}
            </button>
          </div>
        </div>
      )}

      {screen === 'ending' && ending && (
        <section className="ending scene">
          <div className="chapter">{t(lang, ui.yourPath)}</div>
          <h1>{t(lang, ending.title)}</h1>
          <p className="body">{t(lang, ending.body)}</p>
          <h3>{t(lang, ui.reading)}</h3>
          <ul className="reads">
            {ending.reading.map((item) => (
              <li key={t('en', item.work)}>
                <strong>{t(lang, item.work)}</strong>
                <div className="explain">{t(lang, item.why)}</div>
              </li>
            ))}
          </ul>
          <button type="button" className="primary" onClick={goHome}>
            {t(lang, ui.walkAgain)}
          </button>
        </section>
      )}
    </div>
  )
}
