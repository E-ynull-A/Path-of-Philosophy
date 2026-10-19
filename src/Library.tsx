import { useMemo, useState } from 'react'
import { SchoolIcon } from './art'
import { lib, t } from './copy'
import { glossary } from './glossary'
import {
  eras,
  findPhilosopher,
  findSchool,
  libSchools,
  philosophers,
  type Era,
  type LibSchool,
  type LibSchoolId,
  type Philosopher,
} from './libraryData'
import { ArgPage, GodOverview, ViewPage } from './God'
import { findArg, findView } from './godData'
import { personPhotos, scenePhotos, type Photo } from './photos'
import { problemMetas } from './problems'
import { href, type Route } from './router'
import { Rich } from './Rich'
import { scenes } from './story'
import type { Lang, School } from './types'

// ───────────────────────────────────────── pieces

const eraClass: Record<Era, string> = {
  ancient: 'era-ancient',
  medieval: 'era-medieval',
  modern: 'era-modern',
  contemporary: 'era-contemporary',
}

/** A round "coin" with initials — a portrait stand-in that never pretends to be a likeness. */
export function Medallion({ person, lang, size = 56 }: { person: Philosopher; lang: Lang; size?: number }) {
  const words = person.name[lang].replace(/\(.*\)/, '').trim().split(/\s+/)
  const initials = (words.length > 1 ? words[0][0] + words[words.length - 1][0] : words[0].slice(0, 2)).toUpperCase()
  const photo = personPhotos[person.id]
  const [failed, setFailed] = useState(false)
  if (photo && !failed) {
    return (
      <span className={`medallion has-photo ${eraClass[person.era]}`} style={{ width: size, height: size }} aria-hidden="true">
        <img src={photo.src} alt="" loading="lazy" decoding="async" onError={() => setFailed(true)} />
        <span className="med-badge">
          <SchoolIcon school={person.schools[0]} size={Math.max(12, size * 0.26)} />
        </span>
      </span>
    )
  }
  return (
    <span className={`medallion ${eraClass[person.era]}`} style={{ width: size, height: size }} aria-hidden="true">
      <svg viewBox="0 0 60 60" width={size} height={size}>
        <circle cx="30" cy="30" r="28" className="med-ring" />
        <circle cx="30" cy="30" r="23" className="med-face" />
        {Array.from({ length: 24 }, (_, i) => {
          const a = (i * Math.PI) / 12
          return <circle key={i} cx={30 + Math.cos(a) * 25.6} cy={30 + Math.sin(a) * 25.6} r={0.7} className="med-dot" />
        })}
        <text x="30" y="36" textAnchor="middle" className="med-text">
          {initials}
        </text>
      </svg>
      <span className="med-badge">
        <SchoolIcon school={person.schools[0]} size={Math.max(12, size * 0.26)} />
      </span>
    </span>
  )
}

function SchoolChip({ id, lang }: { id: LibSchoolId; lang: Lang }) {
  const school = findSchool(id)
  if (!school) return null
  return (
    <a className="chip" href={href.school(id)}>
      <SchoolIcon school={id} size={14} />
      {t(lang, school.name)}
    </a>
  )
}

function PersonCard({ person, lang }: { person: Philosopher; lang: Lang }) {
  return (
    <a className="person-card" href={href.person(person.id)}>
      <Medallion person={person} lang={lang} />
      <span className="person-text">
        <strong>{t(lang, person.name)}</strong>
        <span className="muted">{t(lang, person.years)}</span>
        <span className="muted small">{t(lang, person.place)}</span>
      </span>
    </a>
  )
}

/** Large portrait (credited on the Sources page); falls back to the medallion. */
function Portrait({ person, lang }: { person: Philosopher; lang: Lang }) {
  const photo = personPhotos[person.id]
  const [failed, setFailed] = useState(false)
  if (!photo || failed) return <Medallion person={person} lang={lang} size={96} />
  return (
    <figure className="portrait">
      <img src={photo.src} alt={t(lang, person.name)} decoding="async" onError={() => setFailed(true)} />
    </figure>
  )
}

function Tabs({ tab, lang }: { tab: string; lang: Lang }) {
  const items = [
    ['schools', href.library, lib.tabSchools],
    ['people', href.people, lib.tabPeople],
    ['god', href.god, lib.tabGod],
    ['timeline', href.timeline, lib.tabTimeline],
    ['glossary', href.glossary, lib.tabGlossary],
  ] as const
  return (
    <nav className="tabs" aria-label={t(lang, lib.title)}>
      {items.map(([id, link, label]) => (
        <a key={id} href={link} className={tab === id ? 'on' : ''} aria-current={tab === id ? 'page' : undefined}>
          {t(lang, label)}
        </a>
      ))}
    </nav>
  )
}

function norm(value: string) {
  return value.toLocaleLowerCase('az').normalize('NFD').replace(/\p{M}/gu, '')
}

// ───────────────────────────────────────── tabs

function SchoolsTab({ lang, lean }: { lang: Lang; lean: School | null }) {
  const leanSchool = lean ? findSchool(lean) : undefined
  return (
    <>
      {leanSchool && (
        <a className="lean" href={href.school(leanSchool.id)}>
          <span className="lean-icon">
            <SchoolIcon school={leanSchool.id} size={26} />
          </span>
          <span>
            <span className="label">{t(lang, lib.yourLean)}</span>
            <span className="lean-text">
              {t(lang, lib.yourLeanBody)} <strong>{t(lang, leanSchool.name)}</strong>
            </span>
          </span>
          <span className="lean-arrow">→</span>
        </a>
      )}
      <div className="school-grid">
        {libSchools.map((school) => (
          <a key={school.id} className="school-card" href={href.school(school.id)}>
            <span className="school-card-head">
              <span className="school-card-icon">
                <SchoolIcon school={school.id} size={28} />
              </span>
              {school.inGame && <span className="tag">{t(lang, lib.inGame)}</span>}
            </span>
            <strong>{t(lang, school.name)}</strong>
            <span className="muted">{t(lang, school.tagline)}</span>
            <span className="faces">
              {school.thinkers.slice(0, 5).map((id) => {
                const person = findPhilosopher(id)
                return person ? <Medallion key={id} person={person} lang={lang} size={30} /> : null
              })}
            </span>
          </a>
        ))}
      </div>
    </>
  )
}

function PeopleTab({ lang }: { lang: Lang }) {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState<LibSchoolId | 'all'>('all')
  const list = useMemo(() => {
    const q = norm(query.trim())
    return philosophers.filter((person) => {
      if (filter !== 'all' && !person.schools.includes(filter)) return false
      if (!q) return true
      const hay = norm([person.name.az, person.name.en, person.place[lang], person.idea[lang], person.years[lang]].join(' '))
      return hay.includes(q)
    })
  }, [query, filter, lang])

  return (
    <>
      <div className="toolbar">
        <input
          type="search"
          className="search"
          value={query}
          placeholder={t(lang, lib.search)}
          onChange={(event) => setQuery(event.target.value)}
          aria-label={t(lang, lib.search)}
        />
        <div className="filters" role="group">
          <button type="button" className={filter === 'all' ? 'on' : ''} onClick={() => setFilter('all')}>
            {t(lang, lib.all)}
          </button>
          {libSchools.map((school) => (
            <button
              key={school.id}
              type="button"
              className={filter === school.id ? 'on' : ''}
              onClick={() => setFilter(school.id)}
              title={t(lang, school.name)}
            >
              <SchoolIcon school={school.id} size={14} />
              <span>{t(lang, school.name)}</span>
            </button>
          ))}
        </div>
      </div>
      {list.length === 0 && <p className="muted empty">{t(lang, lib.nothing)}</p>}
      <div className="people-grid">
        {list.map((person) => (
          <PersonCard key={person.id} person={person} lang={lang} />
        ))}
      </div>
    </>
  )
}

function TimelineTab({ lang }: { lang: Lang }) {
  return (
    <div className="timeline">
      {eras.map((era) => {
        const people = philosophers.filter((person) => person.era === era.id)
        return (
          <section key={era.id} className={`era ${eraClass[era.id]}`}>
            <header className="era-head">
              <h3>{t(lang, era.name)}</h3>
              <span className="muted">{t(lang, era.span)}</span>
            </header>
            <ol>
              {people.map((person) => (
                <li key={person.id}>
                  <a href={href.person(person.id)} className="tl-item">
                    <span className="tl-year">{t(lang, person.years)}</span>
                    <Medallion person={person} lang={lang} size={42} />
                    <span className="tl-text">
                      <strong>{t(lang, person.name)}</strong>
                      <span className="muted clamp">{t(lang, person.idea)}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </section>
        )
      })}
    </div>
  )
}

function GlossaryTab({ lang }: { lang: Lang }) {
  const [query, setQuery] = useState('')
  const people = new Set(philosophers.map((person) => person.id))
  const ideas = glossary
    .filter((entry) => !(entry.caseSensitive && !['dana', 'zen'].includes(entry.id)))
    .filter((entry) => !people.has(entry.id))
    .sort((a, b) => a.term[lang].localeCompare(b.term[lang], lang))
  const q = norm(query.trim())
  const list = q ? ideas.filter((entry) => norm(entry.term[lang] + ' ' + entry.def[lang]).includes(q)) : ideas
  return (
    <>
      <div className="toolbar">
        <input
          type="search"
          className="search"
          value={query}
          placeholder={t(lang, lib.searchGlossary)}
          onChange={(event) => setQuery(event.target.value)}
          aria-label={t(lang, lib.searchGlossary)}
        />
      </div>
      {list.length === 0 && <p className="muted empty">{t(lang, lib.nothing)}</p>}
      <dl className="glossary">
        {list.map((entry) => (
          <div key={entry.id} className="gl-item">
            <dt>{entry.term[lang]}</dt>
            <dd>{entry.def[lang]}</dd>
          </div>
        ))}
      </dl>
    </>
  )
}

function CreditRow({ photo, label }: { photo: Photo; label: string }) {
  return (
    <li className="credit-row">
      <img src={photo.src} alt="" loading="lazy" decoding="async" />
      <span className="credit-text">
        <strong>{label}</strong>
        <span className="muted small">
          {photo.artist} ·{' '}
          {photo.licenseUrl ? (
            <a href={photo.licenseUrl} target="_blank" rel="noopener noreferrer">
              {photo.license}
            </a>
          ) : (
            photo.license
          )}{' '}
          ·{' '}
          <a href={photo.page} target="_blank" rel="noopener noreferrer">
            Wikimedia Commons
          </a>
        </span>
      </span>
    </li>
  )
}

function CreditsTab({ lang }: { lang: Lang }) {
  const sceneName = (key: string) => {
    if (key === 'hero') return t(lang, lib.creditsTitleScreen)
    const scene = scenes.find((item) => (item.image ?? item.id) === key)
    if (scene) return `${t(lang, scene.chapter)} — ${t(lang, scene.title)}`
    const meta = problemMetas.find((item) => item.id === key)
    return meta ? t(lang, meta.title) : key
  }
  return (
    <div className="credits">
      <p className="lede-sm">{t(lang, lib.creditsIntro)}</p>
      <h3>{t(lang, lib.creditsScenes)}</h3>
      <ul>
        {Object.entries(scenePhotos).map(([key, photo]) => (
          <CreditRow key={key} photo={photo} label={sceneName(key)} />
        ))}
      </ul>
      <h3>{t(lang, lib.creditsPeople)}</h3>
      <ul>
        {philosophers
          .filter((person) => personPhotos[person.id])
          .map((person) => (
            <CreditRow key={person.id} photo={personPhotos[person.id]} label={t(lang, person.name)} />
          ))}
      </ul>
      <p className="muted small">{t(lang, lib.creditsDrawings)}</p>
    </div>
  )
}

// ───────────────────────────────────────── detail pages

function SchoolPage({ school, lang, onTry }: { school: LibSchool; lang: Lang; onTry: () => void }) {
  return (
    <article className="detail">
      <a className="back" href={href.library}>
        {t(lang, lib.back)}
      </a>
      <header className="detail-head">
        <span className="detail-icon">
          <SchoolIcon school={school.id} size={40} />
        </span>
        <div>
          {school.inGame && <span className="tag">{t(lang, lib.inGame)}</span>}
          <h1>{t(lang, school.name)}</h1>
          <p className="lede-sm">{t(lang, school.tagline)}</p>
        </div>
      </header>

      <div className="question-box">
        <span className="label">{t(lang, lib.keyQuestion)}</span>
        <p>“{t(lang, school.question)}”</p>
      </div>

      <h3>{t(lang, lib.keyIdeas)}</h3>
      <ol className="ideas">
        {school.ideas.map((idea, index) => (
          <li key={index}>
            <Rich as="span" text={idea} lang={lang} />
          </li>
        ))}
      </ol>

      <div className="daily">
        <span className="label">{t(lang, lib.daily)}</span>
        <p>{t(lang, school.daily)}</p>
      </div>

      <h3>{t(lang, lib.thinkers)}</h3>
      <div className="people-grid">
        {school.thinkers.map((id) => {
          const person = findPhilosopher(id)
          return person ? <PersonCard key={id} person={person} lang={lang} /> : null
        })}
      </div>

      {school.inGame && (
        <button type="button" className="primary try" onClick={onTry}>
          {t(lang, lib.tryInGame)}
        </button>
      )}
    </article>
  )
}

function PersonPage({ person, lang }: { person: Philosopher; lang: Lang }) {
  const index = philosophers.findIndex((item) => item.id === person.id)
  const prev = philosophers[index - 1]
  const next = philosophers[index + 1]
  return (
    <article className="detail">
      <a className="back" href={href.people}>
        {t(lang, lib.back)}
      </a>
      <header className="detail-head person-head">
        <Portrait person={person} lang={lang} />
        <div>
          <h1>{t(lang, person.name)}</h1>
          <p className="muted">
            {t(lang, person.years)} · {t(lang, person.place)}
          </p>
          <div className="chips">
            {person.schools.map((id) => (
              <SchoolChip key={id} id={id} lang={lang} />
            ))}
          </div>
        </div>
      </header>

      {person.quote && <blockquote className="big-quote">“{t(lang, person.quote)}”</blockquote>}

      <h3>{t(lang, lib.bigIdea)}</h3>
      <Rich className="body" text={person.idea} lang={lang} />

      <div className="cards-2">
        <div className="fact">
          <span className="label">{t(lang, lib.funFact)}</span>
          <p>{t(lang, person.hook)}</p>
        </div>
        <div className="fact read">
          <span className="label">{t(lang, lib.startWith)}</span>
          <p>
            <strong>{t(lang, person.read)}</strong>
          </p>
        </div>
      </div>

      <nav className="pager">
        {prev ? (
          <a href={href.person(prev.id)}>
            <span className="muted small">{t(lang, lib.prev)}</span>
            <strong>{t(lang, prev.name)}</strong>
          </a>
        ) : (
          <span />
        )}
        {next && (
          <a href={href.person(next.id)} className="right">
            <span className="muted small">{t(lang, lib.next)}</span>
            <strong>{t(lang, next.name)}</strong>
          </a>
        )}
      </nav>
    </article>
  )
}

// ───────────────────────────────────────── page

export function Library({
  route,
  lang,
  lean,
  onTry,
}: {
  route: Exclude<Route, { view: 'home' } | { view: 'play' }>
  lang: Lang
  lean: School | null
  onTry: () => void
}) {
  if (route.view === 'school') {
    const school = findSchool(route.id)
    if (school) return <SchoolPage school={school} lang={lang} onTry={onTry} />
  }
  if (route.view === 'person') {
    const person = findPhilosopher(route.id)
    if (person) return <PersonPage person={person} lang={lang} />
  }
  if (route.view === 'god-view') {
    const view = findView(route.id)
    if (view) return <ViewPage view={view} lang={lang} />
  }
  if (route.view === 'god-arg') {
    const arg = findArg(route.id)
    if (arg) return <ArgPage arg={arg} lang={lang} />
  }
  const tab = route.view === 'learn' ? route.tab : route.view === 'god-view' || route.view === 'god-arg' ? 'god' : 'schools'
  return (
    <section className="library">
      <header className="lib-head">
        <div>
          <h1>{t(lang, lib.title)}</h1>
          <p className="lede-sm">{t(lang, lib.subtitle)}</p>
        </div>
        <p className="lib-stats muted">
          <strong>{philosophers.length}</strong> {t(lang, lib.peopleCount)} · <strong>{libSchools.length}</strong>{' '}
          {t(lang, lib.schoolsCount)}
        </p>
      </header>
      <Tabs tab={tab} lang={lang} />
      {tab === 'schools' && <SchoolsTab lang={lang} lean={lean} />}
      {tab === 'people' && <PeopleTab lang={lang} />}
      {tab === 'god' && <GodOverview lang={lang} />}
      {tab === 'timeline' && <TimelineTab lang={lang} />}
      {tab === 'glossary' && <GlossaryTab lang={lang} />}
      {tab === 'credits' && <CreditsTab lang={lang} />}
    </section>
  )
}

