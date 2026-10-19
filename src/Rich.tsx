import { useEffect, useId, useLayoutEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { lib } from './copy'
import { segment, type GlossaryEntry } from './glossary'
import { findPhilosopher } from './libraryData'
import { href as links } from './router'
import type { Lang, Text } from './types'

const OPEN_EVENT = 'term:open'
const TIP_WIDTH = 290

/**
 * A word with a dotted underline. Hover (desktop) or tap (phone) shows a
 * short explanation. Only one is open at a time.
 */
export function Term({
  children,
  title,
  def,
  href,
  more,
}: {
  children: ReactNode
  title: string
  def: string
  /** Optional link shown at the bottom of the popup (e.g. to the library). */
  href?: string
  more?: string
}) {
  const id = useId()
  const [open, setOpen] = useState(false)
  const [style, setStyle] = useState<CSSProperties>({})
  const [below, setBelow] = useState(false)
  const anchor = useRef<HTMLButtonElement>(null)
  const tip = useRef<HTMLSpanElement>(null)
  const hoverTimer = useRef<number | undefined>(undefined)

  useLayoutEffect(() => {
    if (!open || !anchor.current) return
    const rect = anchor.current.getBoundingClientRect()
    const width = Math.min(TIP_WIDTH, window.innerWidth - 24)
    const left = Math.min(
      Math.max(12, rect.left + rect.width / 2 - width / 2),
      window.innerWidth - width - 12,
    )
    const tipHeight = tip.current?.offsetHeight ?? 140
    const flip = rect.top < tipHeight + 20
    setBelow(flip)
    setStyle({
      width,
      left,
      top: flip ? rect.bottom + 8 : rect.top - 8,
    })
  }, [open])

  useEffect(() => {
    if (!open) return
    const close = () => setOpen(false)
    const onOther = (event: Event) => {
      if ((event as CustomEvent<string>).detail !== id) close()
    }
    const onDown = (event: PointerEvent) => {
      const target = event.target as Node
      if (!anchor.current?.contains(target) && !tip.current?.contains(target)) close()
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.stopPropagation()
        close()
      }
    }
    window.addEventListener(OPEN_EVENT, onOther)
    window.addEventListener('pointerdown', onDown)
    window.addEventListener('keydown', onKey, true)
    window.addEventListener('scroll', close, true)
    window.addEventListener('resize', close)
    window.addEventListener('hashchange', close)
    return () => {
      window.removeEventListener('hashchange', close)
      window.removeEventListener(OPEN_EVENT, onOther)
      window.removeEventListener('pointerdown', onDown)
      window.removeEventListener('keydown', onKey, true)
      window.removeEventListener('scroll', close, true)
      window.removeEventListener('resize', close)
    }
  }, [open, id])

  function show() {
    window.dispatchEvent(new CustomEvent(OPEN_EVENT, { detail: id }))
    setOpen(true)
  }

  return (
    <>
      <button
        type="button"
        ref={anchor}
        className={`term${open ? ' on' : ''}`}
        aria-expanded={open}
        aria-describedby={open ? id : undefined}
        onClick={(event) => {
          event.stopPropagation()
          if (open) setOpen(false)
          else show()
        }}
        onPointerEnter={(event) => {
          if (event.pointerType !== 'mouse') return
          window.clearTimeout(hoverTimer.current)
          hoverTimer.current = window.setTimeout(show, 120)
        }}
        onPointerLeave={(event) => {
          if (event.pointerType !== 'mouse') return
          window.clearTimeout(hoverTimer.current)
          hoverTimer.current = window.setTimeout(() => setOpen(false), 180)
        }}
      >
        {children}
      </button>
      {open &&
        createPortal(
        <span
          ref={tip}
          id={id}
          role="tooltip"
          className={`tip${below ? ' below' : ''}`}
          style={style}
          onPointerEnter={() => window.clearTimeout(hoverTimer.current)}
          onPointerLeave={(event) => {
            if (event.pointerType === 'mouse') setOpen(false)
          }}
        >
          <strong>{title}</strong>
          {def}
          {href && (
            <a className="tip-more" href={href}>
              {more ?? '→'}
            </a>
          )}
        </span>,
          // Rendered at the page root so a parent's transform or overflow
          // (e.g. the animated insight card) cannot clip or shift it.
          document.body,
        )}
    </>
  )
}

export function GlossaryTerm({
  entry,
  lang,
  children,
}: {
  entry: GlossaryEntry
  lang: Lang
  children: ReactNode
}) {
  const person = findPhilosopher(entry.id)
  return (
    <Term
      title={entry.term[lang]}
      def={entry.def[lang]}
      href={person ? links.person(person.id) : undefined}
      more={lib.readMore[lang]}
    >
      {children}
    </Term>
  )
}

/** Renders text and turns glossary words into explainable terms. */
export function Rich({
  text,
  lang,
  as: Tag = 'p',
  className,
}: {
  text: Text
  lang: Lang
  as?: 'p' | 'span' | 'div'
  className?: string
}) {
  const parts = segment(text[lang], lang)
  return (
    <Tag className={className}>
      {parts.map((part, index) =>
        typeof part === 'string' ? (
          part
        ) : (
          <GlossaryTerm key={index} entry={part.entry} lang={lang}>
            {part.text}
          </GlossaryTerm>
        ),
      )}
    </Tag>
  )
}
