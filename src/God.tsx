import { useState } from 'react'
import { Art } from './art'
import { god as copy, t } from './copy'
import { args, findArg, findView, intro, spectrum, views, viewsForArg, type GodArg, type GodView, type ViewId } from './godData'
import { findPhilosopher } from './libraryData'
import { href } from './router'
import { Rich } from './Rich'
import { loadVotes, saveVotes, type Vote } from './storage'
import type { Lang } from './types'

// ───────────────────────────────────────── icons

/** Simple symbol per view, so the cards are recognisable at a glance. */
export function ViewIcon({ id, size = 26 }: { id: ViewId; size?: number }) {
  const p = { width: size, height: size, viewBox: '0 0 24 24', 'aria-hidden': true, className: 'view-icon' }
  switch (id) {
    case 'theism': // a source of light reaching down
      return (
        <svg {...p}>
          <circle cx="12" cy="6" r="3" />
          <path d="M12 11v9M8 15l4 5 4-5M5 6H3M21 6h-2M6.5 2.5l1.2 1.2M17.5 2.5l-1.2 1.2" />
        </svg>
      )
    case 'deism': // a clock: wound up, then left
      return (
        <svg {...p}>
          <circle cx="12" cy="13" r="8" />
          <path d="M12 9v4l3 2M10 2h4M12 2v3" />
        </svg>
      )
    case 'panentheism': // a circle inside a larger circle
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="13.5" r="4.5" />
        </svg>
      )
    case 'pantheism': // everything is one
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
        </svg>
      )
    case 'polytheism': // many points
      return (
        <svg {...p}>
          <circle cx="6" cy="7" r="2.2" />
          <circle cx="18" cy="7" r="2.2" />
          <circle cx="12" cy="5" r="2.2" />
          <circle cx="8" cy="16" r="2.2" />
          <circle cx="16" cy="16" r="2.2" />
        </svg>
      )
    case 'agnosticism': // a question
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="9" />
          <path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.3-1 .9-1 1.7M12 17h.01" />
        </svg>
      )
    case 'atheism': // an empty circle
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="9" />
          <path d="M6 18 18 6" />
        </svg>
      )
    case 'fideism': // a flame
      return (
        <svg {...p}>
          <path d="M12 21c-4 0-6-3-6-6 0-4 4-6 4-10 2 2 3 4 3 6 1-1 2-2 2-3 2 2 3 4 3 7 0 3-2 6-6 6z" />
        </svg>
      )
  }
}

function SideMark({ side }: { side: 'for' | 'against' }) {
  return <span className={`side-mark ${side}`} aria-hidden="true">{side === 'for' ? '+' : '−'}</span>
}

function PersonLink({ name, person }: { name: string; person?: string }) {
  const known = person ? findPhilosopher(person) : undefined
  return known ? (
    <a className="chip" href={href.person(known.id)}>
      {name}
    </a>
  ) : (
    <span className="chip plain">{name}</span>
  )
}

// ───────────────────────────────────────── overview

function Spectrum({ lang }: { lang: Lang }) {
  return (
    <div className="spectrum">
      <div className="spectrum-ends">
        <span>{t(lang, intro.spectrumLeft)}</span>
        <span>{t(lang, intro.spectrumRight)}</span>
      </div>
      <div className="spectrum-line">
        {spectrum.map((id) => {
          const view = findView(id)!
          return (
            <a key={id} className="spectrum-node" href={href.godView(id)}>
              <span className="dot">
                <ViewIcon id={id} size={20} />
              </span>
              <span className="name">{t(lang, view.name)}</span>
            </a>
          )
        })}
      </div>
      <p className="muted small">{t(lang, intro.spectrumNote)}</p>
    </div>
  )
}

function ArgCard({ arg, lang, vote }: { arg: GodArg; lang: Lang; vote?: Vote }) {
  return (
    <a className={`arg-card ${arg.side}`} href={href.godArg(arg.id)}>
      <SideMark side={arg.side} />
      <span className="arg-text">
        <strong>{t(lang, arg.name)}</strong>
        <span className="muted">{t(lang, arg.short)}</span>
      </span>
      {vote && <span className={`vote-dot ${vote}`} title={t(lang, copy.vote[vote])} />}
    </a>
  )
}

function VoteSummary({ lang, votes }: { lang: Lang; votes: Record<string, Vote> }) {
  const count = (side: 'for' | 'against', vote: Vote) =>
    args.filter((arg) => arg.side === side && votes[arg.id] === vote).length
  const total = Object.keys(votes).length
  if (total === 0) return null
  return (
    <div className="vote-summary">
      <span className="label">{t(lang, copy.yourMap)}</span>
      <p className="muted small">{t(lang, copy.yourMapNote)}</p>
      <div className="vote-cols">
        {(['for', 'against'] as const).map((side) => (
          <div key={side}>
            <strong>
              <SideMark side={side} /> {t(lang, side === 'for' ? copy.forShort : copy.againstShort)}
            </strong>
            <span>
              {t(lang, copy.vote.yes)}: {count(side, 'yes')} · {t(lang, copy.vote.partly)}: {count(side, 'partly')} ·{' '}
              {t(lang, copy.vote.no)}: {count(side, 'no')}
            </span>
          </div>
        ))}
      </div>
      <button
        type="button"
        className="ghost small-btn"
        onClick={() => {
          saveVotes({})
          window.location.reload()
        }}
      >
        {t(lang, copy.resetVotes)}
      </button>
    </div>
  )
}

export function GodOverview({ lang }: { lang: Lang }) {
  const [votes] = useState(loadVotes)
  const forArgs = args.filter((arg) => arg.side === 'for')
  const againstArgs = args.filter((arg) => arg.side === 'against')
  const extra = views.filter((view) => !spectrum.includes(view.id))
  return (
    <div className="god">
      <div className="god-hero">
        <Art name="god" className="god-art" fill />
        <div className="god-hero-text">
          <h2>{t(lang, intro.title)}</h2>
          <Rich className="lede-sm" text={intro.lede} lang={lang} />
        </div>
      </div>

      <p className="fair">{t(lang, intro.fair)}</p>

      <details className="how-to">
        <summary>{t(lang, intro.howTitle)}</summary>
        <ol>
          {intro.how.map((item, index) => (
            <li key={index}>{t(lang, item)}</li>
          ))}
        </ol>
      </details>

      <h3>{t(lang, intro.spectrumTitle)}</h3>
      <Spectrum lang={lang} />

      <h3>{t(lang, intro.viewsTitle)}</h3>
      <div className="view-grid">
        {[...spectrum.map((id) => findView(id)!), ...extra].map((view) => (
          <a key={view.id} className="view-card" href={href.godView(view.id)}>
            <span className="view-card-icon">
              <ViewIcon id={view.id} />
            </span>
            <strong>{t(lang, view.name)}</strong>
            <span className="muted">{t(lang, view.short)}</span>
          </a>
        ))}
      </div>

      <div className="arg-columns">
        <section>
          <h3>
            <SideMark side="for" /> {t(lang, intro.forTitle)}
          </h3>
          <div className="arg-list">
            {forArgs.map((arg) => (
              <ArgCard key={arg.id} arg={arg} lang={lang} vote={votes[arg.id]} />
            ))}
          </div>
        </section>
        <section>
          <h3>
            <SideMark side="against" /> {t(lang, intro.againstTitle)}
          </h3>
          <div className="arg-list">
            {againstArgs.map((arg) => (
              <ArgCard key={arg.id} arg={arg} lang={lang} vote={votes[arg.id]} />
            ))}
          </div>
        </section>
      </div>

      <VoteSummary lang={lang} votes={votes} />
    </div>
  )
}

// ───────────────────────────────────────── one view

function ListBlock({ title, items, kind, lang }: { title: string; items: { az: string; en: string }[]; kind: string; lang: Lang }) {
  return (
    <div className={`list-block ${kind}`}>
      <span className="label">{title}</span>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <Rich as="span" text={item} lang={lang} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export function ViewPage({ view, lang }: { view: GodView; lang: Lang }) {
  const order = [...spectrum, ...views.filter((v) => !spectrum.includes(v.id)).map((v) => v.id)]
  const index = order.indexOf(view.id)
  const prev = findView(order[index - 1] ?? '')
  const next = findView(order[index + 1] ?? '')
  return (
    <article className="detail god-detail">
      <a className="back" href={href.god}>
        {t(lang, copy.back)}
      </a>
      <header className="detail-head">
        <span className="detail-icon">
          <ViewIcon id={view.id} size={40} />
        </span>
        <div>
          <span className="tag">{t(lang, copy.viewTag)}</span>
          <h1>{t(lang, view.name)}</h1>
          <p className="lede-sm">{t(lang, view.short)}</p>
        </div>
      </header>

      <Rich className="body" text={view.def} lang={lang} />

      <h3>{t(lang, copy.keyClaims)}</h3>
      <ol className="ideas">
        {view.beliefs.map((item, index) => (
          <li key={index}>
            <Rich as="span" text={item} lang={lang} />
          </li>
        ))}
      </ol>

      <div className="daily">
        <span className="label">{t(lang, copy.traditions)}</span>
        <p>{t(lang, view.traditions)}</p>
      </div>

      <h3>{t(lang, copy.thinkers)}</h3>
      <div className="chips">
        {view.thinkers.map((item) => (
          <PersonLink key={t('en', item.name)} name={t(lang, item.name)} person={item.person} />
        ))}
      </div>

      <h3>{t(lang, copy.onEvil)}</h3>
      <Rich className="body" text={view.evil} lang={lang} />

      <div className="pros-cons">
        <ListBlock title={t(lang, copy.strengths)} items={view.strengths} kind="pro" lang={lang} />
        <ListBlock title={t(lang, copy.weaknesses)} items={view.weaknesses} kind="con" lang={lang} />
      </div>

      <h3>{t(lang, copy.relatedArgs)}</h3>
      <div className="arg-list">
        {view.args.map((id) => {
          const arg = findArg(id)
          return arg ? <ArgCard key={id} arg={arg} lang={lang} /> : null
        })}
      </div>

      <div className="think">
        <div className="label">{t(lang, copy.think)}</div>
        <p>{t(lang, view.think)}</p>
      </div>

      <nav className="pager">
        {prev ? (
          <a href={href.godView(prev.id)}>
            <span className="muted small">{t(lang, copy.prev)}</span>
            <strong>{t(lang, prev.name)}</strong>
          </a>
        ) : (
          <span />
        )}
        {next && (
          <a href={href.godView(next.id)} className="right">
            <span className="muted small">{t(lang, copy.next)}</span>
            <strong>{t(lang, next.name)}</strong>
          </a>
        )}
      </nav>
    </article>
  )
}

// ───────────────────────────────────────── one argument

export function ArgPage({ arg, lang }: { arg: GodArg; lang: Lang }) {
  const [votes, setVotes] = useState(loadVotes)
  const index = args.findIndex((item) => item.id === arg.id)
  const prev = args[index - 1]
  const next = args[index + 1]
  const related = viewsForArg(arg.id)

  function vote(value: Vote) {
    const nextVotes = { ...votes }
    if (nextVotes[arg.id] === value) delete nextVotes[arg.id]
    else nextVotes[arg.id] = value
    setVotes(nextVotes)
    saveVotes(nextVotes)
  }

  return (
    <article className="detail god-detail">
      <a className="back" href={href.god}>
        {t(lang, copy.back)}
      </a>
      <header className="detail-head">
        <span className={`detail-icon side-${arg.side}`}>
          <SideMark side={arg.side} />
        </span>
        <div>
          <span className={`tag ${arg.side}`}>{t(lang, arg.side === 'for' ? copy.forTag : copy.againstTag)}</span>
          <h1>{t(lang, arg.name)}</h1>
          <p className="lede-sm">{t(lang, arg.short)}</p>
        </div>
      </header>

      <p className="origin">
        <span className="label">{t(lang, copy.origin)}</span>
        <Rich as="span" text={arg.origin} lang={lang} />
      </p>
      {arg.people && arg.people.length > 0 && (
        <div className="chips">
          {arg.people.map((id) => {
            const person = findPhilosopher(id)
            return person ? <PersonLink key={id} name={t(lang, person.name)} person={id} /> : null
          })}
        </div>
      )}

      <h3>{t(lang, copy.structure)}</h3>
      <ol className="steps-list">
        {arg.steps.map((step, index) => (
          <li key={index}>
            <span className="step-num">{index + 1}</span>
            <Rich as="span" text={step} lang={lang} />
          </li>
        ))}
        <li className="conclusion">
          <span className="step-num">∴</span>
          <Rich as="span" text={arg.conclusion} lang={lang} />
        </li>
      </ol>

      <h3>{t(lang, copy.plain)}</h3>
      <Rich className="body" text={arg.plain} lang={lang} />

      <div className="pros-cons three">
        <ListBlock title={t(lang, copy.strengths)} items={arg.strengths} kind="pro" lang={lang} />
        <ListBlock title={t(lang, copy.objections)} items={arg.objections} kind="con" lang={lang} />
        <ListBlock title={t(lang, copy.replies)} items={arg.replies} kind="reply" lang={lang} />
      </div>

      {related.length > 0 && (
        <>
          <h3>{t(lang, arg.side === 'for' ? copy.usedBy : copy.supports)}</h3>
          <div className="chips">
            {related.map((view) => (
              <a key={view.id} className="chip" href={href.godView(view.id)}>
                <ViewIcon id={view.id} size={14} />
                {t(lang, view.name)}
              </a>
            ))}
          </div>
        </>
      )}

      <div className="think">
        <div className="label">{t(lang, copy.think)}</div>
        <p>{t(lang, arg.think)}</p>
      </div>

      <div className="vote">
        <span className="label">{t(lang, copy.voteQuestion)}</span>
        <div className="vote-buttons" role="group">
          {(['yes', 'partly', 'no'] as const).map((value) => (
            <button
              key={value}
              type="button"
              className={votes[arg.id] === value ? `on ${value}` : value}
              aria-pressed={votes[arg.id] === value}
              onClick={() => vote(value)}
            >
              {t(lang, copy.vote[value])}
            </button>
          ))}
        </div>
        <p className="muted small">{t(lang, copy.votePrivate)}</p>
      </div>

      <nav className="pager">
        {prev ? (
          <a href={href.godArg(prev.id)}>
            <span className="muted small">{t(lang, copy.prev)}</span>
            <strong>{t(lang, prev.name)}</strong>
          </a>
        ) : (
          <span />
        )}
        {next && (
          <a href={href.godArg(next.id)} className="right">
            <span className="muted small">{t(lang, copy.next)}</span>
            <strong>{t(lang, next.name)}</strong>
          </a>
        )}
      </nav>
    </article>
  )
}
