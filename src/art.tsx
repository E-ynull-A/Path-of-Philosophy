import { useId, useState, type ReactNode } from 'react'
import { focus, scenePhotos } from './photos'
import type { School } from './types'

/*
 * Hand-drawn illustrations. Every picture uses the same 320×180 frame and the
 * app's palette (classes .a-* in index.css). Each frame gets its own gradient
 * ids (so many pictures can sit on one page). Add a picture by adding an
 * entry to `pictures` and setting `image: '<name>'` on a scene.
 *
 * When a real photo exists for a name (src/photos.ts), <Art> shows the photo
 * and keeps the drawing only as an offline fallback.
 */

const W = 320
const H = 180

type Ids = (name: string) => string

type Hair = 'short' | 'long' | 'cap' | 'grey' | 'scarf' | 'bun' | 'none'

/** A figure with head, hair, arms and legs. (x, y) = feet. */
function Person({
  x,
  y,
  s = 1,
  c = 'a-ink',
  hair = 'short',
  lean = 0,
  arm = 0,
  shadow = true,
}: {
  x: number
  y: number
  s?: number
  c?: string
  hair?: Hair
  lean?: number
  /** raise the right arm (degrees) */
  arm?: number
  shadow?: boolean
}) {
  const u = (n: number) => n * s
  const hy = y - u(40) // head centre
  return (
    <g>
      {shadow && <ellipse cx={x} cy={y + u(1)} rx={u(11)} ry={u(2.4)} className="a-shadow" />}
      <g transform={`rotate(${lean} ${x} ${y})`}>
        {/* legs */}
        <rect x={x - u(5.6)} y={y - u(15)} width={u(4.6)} height={u(15)} rx={u(2)} className="a-legs" />
        <rect x={x + u(1)} y={y - u(15)} width={u(4.6)} height={u(15)} rx={u(2)} className="a-legs" />
        {/* left arm */}
        <rect x={x - u(11.4)} y={y - u(31)} width={u(3.8)} height={u(16)} rx={u(1.9)} className={c} transform={`rotate(6 ${x - u(9.5)} ${y - u(31)})`} />
        {/* torso */}
        <path
          d={`M${x - u(8)} ${y - u(13)} L${x - u(9)} ${y - u(27)} Q${x - u(9)} ${y - u(33)} ${x - u(4)} ${y - u(33)} L${x + u(4)} ${y - u(33)} Q${x + u(9)} ${y - u(33)} ${x + u(9)} ${y - u(27)} L${x + u(8)} ${y - u(13)} Z`}
          className={c}
        />
        {/* right arm */}
        <rect x={x + u(7.6)} y={y - u(31)} width={u(3.8)} height={u(16)} rx={u(1.9)} className={c} transform={`rotate(${-6 - arm} ${x + u(9.5)} ${y - u(31)})`} />
        {/* neck + head */}
        <rect x={x - u(2)} y={y - u(36)} width={u(4)} height={u(4)} className="a-skin" />
        {hair === 'long' && <path d={`M${x - u(6.5)} ${hy} Q${x - u(7.5)} ${y - u(28)} ${x - u(5)} ${y - u(27)} L${x + u(5)} ${y - u(27)} Q${x + u(7.5)} ${y - u(28)} ${x + u(6.5)} ${hy} Z`} className="a-hair" />}
        {hair === 'scarf' && <path d={`M${x - u(7.6)} ${hy + u(1)} Q${x} ${hy - u(11)} ${x + u(7.6)} ${hy + u(1)} L${x + u(6)} ${y - u(30)} L${x - u(6)} ${y - u(30)} Z`} className="a-rust" />}
        <circle cx={x} cy={hy} r={u(5.8)} className="a-skin" />
        {hair === 'short' && <path d={`M${x - u(6)} ${hy - u(0.5)} Q${x - u(6)} ${hy - u(7)} ${x} ${hy - u(6.8)} Q${x + u(6)} ${hy - u(7)} ${x + u(6)} ${hy - u(0.5)} Q${x + u(3)} ${hy - u(4)} ${x - u(6)} ${hy - u(0.5)} Z`} className="a-hair" />}
        {hair === 'long' && <path d={`M${x - u(6.2)} ${hy + u(1)} Q${x - u(6)} ${hy - u(7.4)} ${x} ${hy - u(7)} Q${x + u(6)} ${hy - u(7.4)} ${x + u(6.2)} ${hy + u(1)} Q${x + u(2)} ${hy - u(4)} ${x - u(6.2)} ${hy + u(1)} Z`} className="a-hair" />}
        {hair === 'bun' && (
          <>
            <circle cx={x} cy={hy - u(7)} r={u(3)} className="a-hair" />
            <path d={`M${x - u(6)} ${hy} Q${x} ${hy - u(9)} ${x + u(6)} ${hy} Q${x} ${hy - u(4)} ${x - u(6)} ${hy} Z`} className="a-hair" />
          </>
        )}
        {hair === 'grey' && <path d={`M${x - u(6)} ${hy} Q${x - u(5)} ${hy - u(6)} ${x} ${hy - u(6.4)} Q${x + u(5)} ${hy - u(6)} ${x + u(6)} ${hy} Q${x + u(4)} ${hy - u(2.5)} ${x + u(2)} ${hy - u(3.5)} Q${x - u(3)} ${hy - u(2)} ${x - u(6)} ${hy} Z`} className="a-grey" />}
        {hair === 'cap' && (
          <>
            <path d={`M${x - u(6.4)} ${hy - u(1)} Q${x} ${hy - u(10)} ${x + u(6.4)} ${hy - u(1)} Z`} className="a-moss" />
            <rect x={x - u(1)} y={hy - u(2)} width={u(9)} height={u(1.6)} rx={u(0.8)} className="a-moss" />
          </>
        )}
      </g>
    </g>
  )
}

/** Shared gradients: sky (day dusk), night, warm interior, glow, vignette. */
function Defs({ id }: { id: string }) {
  return (
    <defs>
      <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" className="s-sky-top" />
        <stop offset="1" className="s-sky-bottom" />
      </linearGradient>
      <linearGradient id={`${id}-dawn`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" className="s-dawn-top" />
        <stop offset="0.7" className="s-dawn-mid" />
        <stop offset="1" className="s-dawn-bottom" />
      </linearGradient>
      <linearGradient id={`${id}-night`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" className="s-night-top" />
        <stop offset="1" className="s-night-bottom" />
      </linearGradient>
      <linearGradient id={`${id}-warm`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" className="s-warm-top" />
        <stop offset="1" className="s-warm-bottom" />
      </linearGradient>
      <linearGradient id={`${id}-water`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" className="s-water-top" />
        <stop offset="1" className="s-water-bottom" />
      </linearGradient>
      <radialGradient id={`${id}-glow`}>
        <stop offset="0" className="s-glow-in" />
        <stop offset="1" className="s-glow-out" />
      </radialGradient>
      <radialGradient id={`${id}-vignette`} cx="0.5" cy="0.45" r="0.75">
        <stop offset="0.55" className="s-vig-in" />
        <stop offset="1" className="s-vig-out" />
      </radialGradient>
    </defs>
  )
}

function Frame({
  children,
  label,
  fill,
}: {
  children: (ids: Ids) => ReactNode
  label: string
  fill?: boolean
}) {
  const id = useId().replace(/:/g, '')
  const ids: Ids = (name) => `url(#${id}-${name})`
  return (
    <svg
      className="art"
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio={fill ? 'xMidYMid slice' : 'xMidYMid meet'}
      role="img"
      aria-label={label}
    >
      <Defs id={id} />
      <rect width={W} height={H} fill={ids('sky')} />
      {children(ids)}
      <rect width={W} height={H} fill={ids('vignette')} pointerEvents="none" />
    </svg>
  )
}

function Glow({ ids, x, y, r }: { ids: Ids; x: number; y: number; r: number }) {
  return <circle cx={x} cy={y} r={r} fill={ids('glow')} />
}

function Stars({ n = 18, seed = 1, maxY = 70 }: { n?: number; seed?: number; maxY?: number }) {
  return (
    <>
      {Array.from({ length: n }, (_, i) => (
        <circle
          key={i}
          cx={(i * 97 + seed * 41) % W}
          cy={(i * 53 + seed * 13) % maxY}
          r={i % 4 === 0 ? 1.1 : 0.6}
          className="a-ink a-faint"
        />
      ))}
    </>
  )
}

function Snow({ n = 34, seed = 3 }: { n?: number; seed?: number }) {
  return (
    <>
      {Array.from({ length: n }, (_, i) => (
        <circle
          key={i}
          cx={(i * 73 + seed * 31) % W}
          cy={(i * 41 + seed * 17) % 150}
          r={i % 3 === 0 ? 1.7 : 1}
          className="a-ink a-soft"
        />
      ))}
    </>
  )
}

/** A row of products on a shelf. */
function Shelf({ x, y, w, seed = 0 }: { x: number; y: number; w: number; seed?: number }) {
  const colors = ['a-rust', 'a-gold', 'a-moss2', 'a-ink', 'a-gold2', 'a-moss']
  const items = []
  let cx = x + 3
  let i = seed
  while (cx < x + w - 8) {
    const iw = 6 + ((i * 7) % 6)
    const ih = 8 + ((i * 5) % 8)
    items.push(<rect key={cx} x={cx} y={y - ih} width={iw} height={ih} rx={1} className={`${colors[i % colors.length]} a-soft`} />)
    cx += iw + 2
    i++
  }
  return (
    <g>
      {items}
      <rect x={x} y={y} width={w} height={3.5} className="a-wood" />
    </g>
  )
}

const pictures: Record<string, { label: string; draw: (ids: Ids) => ReactNode }> = {
  // ───────── title
  hero: {
    label: 'A winding path up a mountain under a question-mark moon',
    draw: (ids) => (
      <>
        <rect width={W} height={H} fill={ids('dawn')} />
        <Stars n={22} seed={2} />
        <Glow ids={ids} x={250} y={44} r={46} />
        <circle cx={250} cy={44} r={20} className="a-moon" />
        <text x={250} y={55} textAnchor="middle" className="a-qmark">
          ?
        </text>
        <path d="M0 140 L48 104 L80 118 L130 70 L170 96 L200 62 L240 98 L290 76 L320 92 L320 180 L0 180 Z" className="a-mtn-far" />
        <path d="M130 70 L142 80 L134 82 L124 76 Z M200 62 L210 72 L198 74 Z" className="a-ink a-soft" />
        <path d="M0 170 L60 128 L110 150 L170 112 L230 140 L320 118 L320 180 L0 180 Z" className="a-mtn-near" />
        <path d="M0 180 L0 168 L80 152 L160 166 L240 150 L320 160 L320 180 Z" className="a-ground" />
        <path d="M150 180 C140 166 196 158 176 142 C158 128 206 118 194 102 C186 92 192 82 190 72" className="a-path" />
        <path d="M150 180 C140 166 196 158 176 142 C158 128 206 118 194 102 C186 92 192 82 190 72" className="a-line" strokeDasharray="3 7" />
        {[40, 62, 268, 292].map((x, i) => (
          <path key={x} d={`M${x} ${166 - (i % 2) * 6} l6 -18 l6 18 Z`} className="a-tree" />
        ))}
        <Person x={160} y={172} s={0.62} c="a-gold" hair="short" />
      </>
    ),
  },

  // ───────── the question of God (offline fallback for the deep-field photo)
  god: {
    label: 'Two people on a hill at night, looking up at a sky full of stars and a distant galaxy',
    draw: (ids) => (
      <>
        <rect width={W} height={H} fill={ids('night')} />
        <Stars n={60} seed={7} maxY={130} />
        <Glow ids={ids} x={226} y={52} r={58} />
        <ellipse cx={226} cy={52} rx={30} ry={9} transform="rotate(-24 226 52)" className="a-moon a-soft" />
        <ellipse cx={226} cy={52} rx={12} ry={4} transform="rotate(-24 226 52)" className="a-moon" />
        <path d="M30 40 q60 -26 130 -6 q70 20 150 -10" className="a-line a-faint" />
        <path d="M0 160 C60 132 120 128 170 140 C220 152 270 146 320 132 L320 180 L0 180 Z" className="a-mtn-near" />
        <path d="M0 180 L0 170 C80 156 150 160 210 168 C260 174 300 168 320 164 L320 180 Z" className="a-ground" />
        <Person x={128} y={150} s={0.6} c="a-jacket" hair="short" />
        <Person x={146} y={152} s={0.56} c="a-dress" hair="long" arm={-60} />
      </>
    ),
  },

  // ───────── main story
  morning: {
    label: 'A desk by a window at sunrise, a phone lights up with a question',
    draw: (ids) => (
      <>
        <rect width={W} height={H} fill={ids('warm')} />
        {/* window */}
        <rect x={30} y={16} width={150} height={104} rx={3} fill={ids('dawn')} />
        <Glow ids={ids} x={104} y={104} r={52} />
        <circle cx={104} cy={106} r={16} className="a-sun" />
        <path d="M30 120 L30 92 L44 92 L44 80 L60 80 L60 96 L76 96 L76 70 L86 64 L96 70 L96 98 L118 98 L118 84 L136 84 L136 94 L150 94 L150 76 L162 76 L162 96 L180 96 L180 120 Z" className="a-city" />
        {[[48, 86], [52, 100], [80, 76], [88, 88], [122, 90], [154, 82], [166, 102]].map(([x, y]) => (
          <rect key={`${x}${y}`} x={x} y={y} width={3} height={3} className="a-gold2 a-soft" />
        ))}
        <rect x={30} y={16} width={150} height={104} rx={3} className="a-frame" />
        <path d="M105 16 L105 120 M30 68 L180 68" className="a-frame" />
        {/* curtain */}
        <path d="M184 12 C192 50 186 90 194 126 L206 126 C198 90 204 50 198 12 Z" className="a-rust a-soft" />
        {/* plant */}
        <rect x={42} y={110} width={16} height={12} rx={2} className="a-rust" />
        <path d="M50 110 C44 98 40 96 36 92 M50 110 C52 96 58 92 62 88 M50 110 C50 100 50 96 50 90" className="a-leaf" />
        {/* desk */}
        <rect x={0} y={124} width={W} height={10} className="a-wood" />
        <rect x={0} y={134} width={W} height={46} className="a-wood-dark" />
        {/* lamp */}
        <path d="M282 124 L282 86 L270 70" className="a-thin" />
        <path d="M256 66 L282 64 L276 78 Z" className="a-gold" />
        <Glow ids={ids} x={268} y={96} r={30} />
        {/* books */}
        <rect x={214} y={112} width={46} height={12} rx={1.5} className="a-rust" />
        <rect x={218} y={102} width={40} height={10} rx={1.5} className="a-moss" />
        <rect x={222} y={94} width={30} height={8} rx={1.5} className="a-gold" />
        {/* mug with steam */}
        <rect x={194} y={110} width={12} height={14} rx={2} className="a-ink" />
        <path d="M206 114 q5 0 5 4 q0 4 -5 4" className="a-thin" />
        <path d="M198 106 q-3 -5 0 -9 M203 106 q-3 -5 0 -9" className="a-thin a-soft" />
        {/* phone */}
        <g transform="rotate(-8 140 118)">
          <rect x={124} y={110} width={34} height={16} rx={3} className="a-dark" />
          <rect x={126} y={112} width={30} height={12} rx={2} className="a-screen" />
          <text x={141} y={122} textAnchor="middle" className="a-qtiny">
            ?
          </text>
        </g>
        <Glow ids={ids} x={140} y={116} r={18} />
      </>
    ),
  },
  store: {
    label: 'A corner shop at dusk; a boy walks out hiding bread under his jacket',
    draw: (ids) => (
      <>
        <rect width={W} height={H} fill={ids('dawn')} />
        <Stars n={8} seed={5} maxY={30} />
        {/* building */}
        <rect x={24} y={20} width={272} height={140} className="a-wall" />
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <path key={i} d={`M24 ${30 + i * 18} H296`} className="a-brick" />
        ))}
        <rect x={34} y={34} width={252} height={24} rx={2} className="a-moss" />
        <rect x={34} y={58} width={252} height={6} className="a-awning" />
        {Array.from({ length: 14 }, (_, i) => (
          <path key={i} d={`M${34 + i * 18} 64 q9 8 18 0`} className="a-moss2" />
        ))}
        <text x={160} y={51} textAnchor="middle" className="a-sign">
          MARKET
        </text>
        {/* shop window with shelves */}
        <rect x={44} y={78} width={112} height={66} className="a-interior" fill={ids('warm')} />
        <Glow ids={ids} x={100} y={110} r={60} />
        <Shelf x={48} y={98} w={104} seed={1} />
        <Shelf x={48} y={120} w={104} seed={3} />
        <Shelf x={48} y={140} w={104} seed={5} />
        <rect x={44} y={78} width={112} height={66} className="a-frame" />
        {/* open door with light */}
        <rect x={180} y={78} width={52} height={82} className="a-interior" fill={ids('warm')} />
        <path d="M180 160 L232 160 L250 180 L170 180 Z" className="a-gold a-faint" />
        <rect x={180} y={78} width={52} height={82} className="a-frame" />
        <rect x={232} y={78} width={8} height={82} className="a-dark" />
        {/* camera */}
        <rect x={262} y={76} width={14} height={8} rx={2} className="a-dark" />
        <circle cx={264} cy={80} r={2} className="a-rust" />
        {/* street */}
        <rect x={0} y={160} width={W} height={20} className="a-pavement" />
        <path d="M0 168 H320" className="a-thin a-faint" />
        {/* the boy walking out, bread under jacket */}
        <Person x={258} y={170} s={0.82} c="a-jacket" hair="short" lean={7} />
        <ellipse cx={262} cy={152} rx={6.5} ry={4} className="a-bread" />
        {/* you */}
        <Person x={130} y={172} s={1.02} c="a-gold" hair="short" />
      </>
    ),
  },
  home: {
    label: 'A cold flat at night: a mother on the sofa, a girl doing homework, bread on the table',
    draw: (ids) => (
      <>
        <rect width={W} height={H} fill={ids('warm')} />
        {/* wallpaper stripes */}
        {Array.from({ length: 16 }, (_, i) => (
          <rect key={i} x={i * 20} y={0} width={10} height={130} className="a-ink a-ghost" />
        ))}
        {/* window with night and moon */}
        <rect x={214} y={18} width={74} height={56} rx={3} fill={ids('night')} />
        <Stars n={6} seed={9} maxY={50} />
        <circle cx={268} cy={34} r={8} className="a-moon" />
        <rect x={214} y={18} width={74} height={56} rx={3} className="a-frame" />
        <path d="M251 18 V74" className="a-frame" />
        {/* hanging bulb */}
        <path d="M150 0 V28" className="a-thin" />
        <circle cx={150} cy={32} r={5} className="a-sun" />
        <Glow ids={ids} x={150} y={36} r={70} />
        {/* floor */}
        <rect x={0} y={130} width={W} height={50} className="a-wood-dark" />
        {Array.from({ length: 8 }, (_, i) => (
          <path key={i} d={`M${i * 44} 130 L${i * 44 - 20} 180`} className="a-thin a-faint" />
        ))}
        {/* sofa with mother and blanket */}
        <rect x={16} y={98} width={128} height={34} rx={8} className="a-moss" />
        <rect x={16} y={84} width={128} height={20} rx={8} className="a-moss2 a-soft" />
        <rect x={10} y={92} width={14} height={40} rx={6} className="a-moss" />
        <rect x={136} y={92} width={14} height={40} rx={6} className="a-moss" />
        <circle cx={40} cy={92} r={7} className="a-skin" />
        <path d="M33 92 q7 -11 14 0 q-7 -4 -14 0" className="a-hair" />
        <rect x={44} y={88} width={88} height={14} rx={7} className="a-blanket" />
        <path d="M54 92 h70 M58 98 h66" className="a-thin a-faint" />
        {/* cup of tea on the floor */}
        <rect x={70} y={124} width={8} height={8} rx={1} className="a-ink a-soft" />
        {/* table */}
        <rect x={186} y={108} width={104} height={7} rx={2} className="a-wood" />
        <rect x={194} y={115} width={5} height={20} className="a-wood" />
        <rect x={277} y={115} width={5} height={20} className="a-wood" />
        <ellipse cx={262} cy={102} rx={16} ry={6} className="a-bread" />
        <path d="M252 100 l4 -3 M260 99 l4 -3 M268 100 l4 -3" className="a-thin" />
        <rect x={204} y={100} width={20} height={8} rx={1} className="a-ink" />
        <path d="M208 103 h12 M208 105 h9" className="a-thin" />
        {/* little sister writing */}
        <Person x={214} y={135} s={0.58} c="a-dress" hair="bun" />
        {/* Murad */}
        <Person x={172} y={140} s={0.74} c="a-jacket" hair="short" />
      </>
    ),
  },
  night: {
    label: 'Inside the shop: a guard slips on a wet floor while a boy runs to the door',
    draw: (ids) => (
      <>
        <rect width={W} height={H} fill={ids('night')} />
        {/* fluorescent light */}
        <rect x={60} y={8} width={90} height={4} rx={2} className="a-ink" />
        <path d="M60 12 L20 120 L190 120 L150 12 Z" className="a-gold a-faint" />
        {[34, 70, 106].map((y, i) => (
          <Shelf key={y} x={14} y={y} w={132} seed={i * 2} />
        ))}
        <rect x={12} y={20} width={4} height={100} className="a-wood" />
        <rect x={144} y={20} width={4} height={100} className="a-wood" />
        {/* floor tiles */}
        <rect x={0} y={120} width={W} height={60} className="a-floor" />
        {Array.from({ length: 9 }, (_, i) => (
          <path key={i} d={`M${i * 40} 120 L${i * 40 - 30} 180`} className="a-thin a-faint" />
        ))}
        <path d="M0 146 H320" className="a-thin a-faint" />
        {/* wet floor sign + puddle with reflection */}
        <path d="M206 134 L214 112 L222 134 Z" className="a-sun" />
        <text x={214} y={131} textAnchor="middle" className="a-qtiny">
          !
        </text>
        <ellipse cx={170} cy={154} rx={66} ry={8} className="a-puddle" />
        <path d="M120 152 q20 -3 40 0 M170 156 q20 -3 40 0" className="a-ink a-faint" stroke="currentColor" />
        {/* door with street light */}
        <rect x={262} y={44} width={48} height={96} fill={ids('dawn')} />
        <rect x={262} y={44} width={48} height={96} className="a-frame" />
        <Person x={288} y={140} s={0.78} c="a-jacket" hair="short" lean={12} arm={40} />
        {/* the guard falling */}
        <g transform="rotate(-72 166 150)">
          <Person x={166} y={150} s={1} c="a-uniform" hair="cap" shadow={false} />
        </g>
        <path d="M118 124 l8 -6 M126 132 l10 -2 M206 112 l6 -8 M138 112 l-4 -8" className="a-line" />
        {/* dropped box */}
        <rect x={230} y={142} width={12} height={9} rx={1} transform="rotate(18 236 146)" className="a-ink" />
        <path d="M234 146 h4 M236 144 v4" className="a-rust" stroke="currentColor" />
      </>
    ),
  },
  owner: {
    label: 'An old shop owner with glasses behind the counter',
    draw: (ids) => (
      <>
        <rect width={W} height={H} fill={ids('warm')} />
        <Glow ids={ids} x={160} y={20} r={110} />
        {/* back shelves */}
        <rect x={14} y={14} width={120} height={92} className="a-wall" />
        {[38, 62, 86].map((y, i) => (
          <Shelf key={y} x={18} y={y} w={112} seed={i + 2} />
        ))}
        <rect x={232} y={14} width={76} height={92} className="a-wall" />
        {[38, 62, 86].map((y, i) => (
          <Shelf key={y} x={236} y={y} w={68} seed={i + 6} />
        ))}
        {/* clock */}
        <circle cx={182} cy={26} r={11} className="a-ink" />
        <path d="M182 26 V19 M182 26 L187 29" className="a-dark-line" />
        {/* the owner */}
        <Person x={180} y={132} s={1.3} c="a-cardigan" hair="grey" />
        <path d="M173 75 h6 M183 75 h6" className="a-dark-line" />
        <circle cx={176} cy={77} r={3.2} className="a-glasses" />
        <circle cx={186} cy={77} r={3.2} className="a-glasses" />
        <path d="M174 86 q6 3 12 0" className="a-dark-line" />
        {/* counter */}
        <rect x={0} y={118} width={W} height={62} className="a-wood-dark" />
        <rect x={0} y={112} width={W} height={9} className="a-wood" />
        {/* register */}
        <path d="M234 112 L240 88 L292 88 L298 112 Z" className="a-dark" />
        <rect x={246} y={92} width={24} height={9} rx={1} className="a-screen" />
        <rect x={274} y={94} width={14} height={4} className="a-gold a-soft" />
        {/* jar of sweets */}
        <rect x={60} y={94} width={22} height={18} rx={4} className="a-ink a-faint" />
        {[64, 70, 76].map((x) => (
          <circle key={x} cx={x} cy={106} r={2.6} className="a-rust" />
        ))}
        {/* you, from behind */}
        <Person x={84} y={186} s={1.08} c="a-gold" hair="short" />
      </>
    ),
  },
  statement: {
    label: 'A witness statement on an office desk, a pen waiting for a signature',
    draw: (ids) => (
      <>
        <rect width={W} height={H} fill={ids('warm')} />
        <Glow ids={ids} x={160} y={80} r={120} />
        {/* desk surface */}
        <rect x={0} y={0} width={W} height={H} className="a-wood-dark" opacity={0.65} />
        {Array.from({ length: 6 }, (_, i) => (
          <path key={i} d={`M0 ${20 + i * 30} q160 ${i % 2 ? 6 : -6} 320 0`} className="a-thin a-faint" />
        ))}
        {/* stamp */}
        <circle cx={56} cy={50} r={22} className="a-rust" />
        <circle cx={56} cy={50} r={15} className="a-line" />
        <rect x={50} y={20} width={12} height={12} rx={2} className="a-wood" />
        {/* paper */}
        <g transform="rotate(-6 160 92)">
          <rect x={106} y={18} width={118} height={148} rx={2} className="a-shadow" transform="translate(4 4)" />
          <rect x={106} y={18} width={118} height={148} rx={2} className="a-paper" />
          <rect x={120} y={32} width={70} height={7} className="a-dark" />
          {[52, 64, 76, 88, 100, 112].map((y, i) => (
            <rect key={y} x={120} y={y} width={i === 5 ? 50 : 90} height={3} className="a-ink-line" />
          ))}
          <path d="M120 144 C132 134 140 150 152 138 S170 146 182 140" className="a-sig" />
          <rect x={120} y={150} width={80} height={1.6} className="a-ink-line" />
        </g>
        {/* pen */}
        <g transform="rotate(32 252 92)">
          <rect x={246} y={30} width={10} height={98} rx={4} className="a-gold" />
          <rect x={246} y={50} width={10} height={6} className="a-dark" />
          <path d="M246 128 L251 146 L256 128 Z" className="a-dark" />
        </g>
        {/* coffee ring and phone */}
        <circle cx={278} cy={150} r={14} className="a-ring-stain" />
        <rect x={20} y={118} width={44} height={24} rx={4} className="a-dark" />
      </>
    ),
  },
  pharmacy: {
    label: 'A pharmacy shelf with a green cross; an older woman clutches a box of insulin',
    draw: (ids) => (
      <>
        <rect width={W} height={H} fill={ids('warm')} />
        <Glow ids={ids} x={210} y={34} r={50} />
        <rect x={190} y={14} width={38} height={38} rx={5} className="a-moss2" />
        <rect x={204} y={20} width={10} height={26} className="a-ink" />
        <rect x={196} y={28} width={26} height={10} className="a-ink" />
        {/* shelves */}
        <rect x={140} y={60} width={170} height={100} className="a-wall" />
        {[82, 108, 134, 158].map((y, i) => (
          <g key={y}>
            {Array.from({ length: 9 }, (_, j) => (
              <g key={j}>
                <rect x={146 + j * 18} y={y - 15} width={14} height={15} rx={1} className={j % 3 === 0 ? 'a-ink' : j % 3 === 1 ? 'a-moss2 a-soft' : 'a-gold a-soft'} />
                <rect x={146 + j * 18} y={y - 10} width={14} height={2} className="a-rust a-soft" />
              </g>
            ))}
            <rect x={140} y={y} width={170} height={3} className="a-wood" opacity={i === 3 ? 0 : 1} />
          </g>
        ))}
        <rect x={0} y={160} width={W} height={20} className="a-floor" />
        {/* Leyla with headscarf, holding the box */}
        <Person x={96} y={168} s={1.1} c="a-coat" hair="scarf" />
        <rect x={100} y={128} width={16} height={11} rx={1.5} className="a-ink" />
        <path d="M104 133 h8 M108 130 v6" className="a-rust" stroke="currentColor" />
        {/* the guard */}
        <Person x={46} y={170} s={1.05} c="a-uniform" hair="cap" />
        {/* bag */}
        <path d="M74 140 q-4 14 2 20 h12 q4 -6 0 -20 Z" className="a-rust" />
      </>
    ),
  },
  calls: {
    label: 'A phone ringing with two calls at once: a hospital and a job',
    draw: (ids) => (
      <>
        <rect width={W} height={H} fill={ids('night')} />
        <Stars n={20} seed={7} maxY={90} />
        {/* left: hospital */}
        <Glow ids={ids} x={66} y={70} r={56} />
        <rect x={34} y={42} width={64} height={60} rx={4} className="a-wall" />
        <rect x={56} y={50} width={20} height={20} rx={2} className="a-paper" />
        <rect x={63} y={53} width={6} height={14} className="a-rust" />
        <rect x={59} y={57} width={14} height={6} className="a-rust" />
        {[40, 52, 80, 88].map((x) => (
          <rect key={x} x={x} y={78} width={7} height={7} className="a-gold2 a-soft" />
        ))}
        <path d="M30 108 q8 -10 16 0 q8 10 16 0 q8 -10 16 0 q8 10 16 0" className="a-pulse" />
        {/* right: office / job */}
        <Glow ids={ids} x={254} y={70} r={56} />
        <rect x={226} y={52} width={56} height={40} rx={5} className="a-gold" />
        <rect x={244} y={44} width={20} height={10} rx={3} className="a-line" />
        <rect x={226} y={68} width={56} height={4} className="a-wood" />
        <rect x={250} y={66} width={8} height={8} rx={1} className="a-dark" />
        <text x={254} y={110} textAnchor="middle" className="a-small">
          08:00
        </text>
        {/* phone in the middle with ripples */}
        <path d="M118 46 C104 62 104 92 118 108 M202 46 C216 62 216 92 202 108" className="a-line" />
        <path d="M108 36 C88 60 88 96 108 118 M212 36 C232 60 232 96 212 118" className="a-line a-soft" />
        <rect x={136} y={28} width={48} height={92} rx={9} className="a-dark" />
        <rect x={140} y={36} width={40} height={74} rx={4} className="a-screen" />
        <rect x={146} y={46} width={28} height={12} rx={3} className="a-rust" />
        <rect x={146} y={64} width={28} height={12} rx={3} className="a-gold" />
        <circle cx={160} cy={98} r={5} className="a-moss2" />
        <rect x={0} y={150} width={W} height={30} className="a-ground" />
        <Person x={160} y={172} s={0.72} c="a-gold" hair="short" />
      </>
    ),
  },
  tea: {
    label: 'Grandmother pours tea into a tulip-shaped glass; a teapot and a bowl of sweets',
    draw: (ids) => (
      <>
        <rect width={W} height={H} fill={ids('warm')} />
        <Glow ids={ids} x={170} y={90} r={90} />
        {/* carpet pattern on the wall */}
        <rect x={210} y={10} width={100} height={90} rx={3} className="a-rust a-soft" />
        <rect x={218} y={18} width={84} height={74} rx={2} className="a-carpet" />
        <path d="M260 26 L286 55 L260 84 L234 55 Z" className="a-gold a-soft" />
        <path d="M260 40 L272 55 L260 70 L248 55 Z" className="a-rust" />
        {/* table */}
        <rect x={0} y={128} width={W} height={52} className="a-wood-dark" />
        <rect x={0} y={124} width={W} height={7} className="a-wood" />
        {/* tablecloth embroidery */}
        {Array.from({ length: 16 }, (_, i) => (
          <path key={i} d={`M${i * 20 + 4} 131 l6 6 l6 -6`} className="a-thin a-faint" />
        ))}
        {/* steam */}
        <path d="M152 52 C150 42 162 36 160 24 M166 52 C164 42 176 36 174 22" className="a-steam" />
        {/* saucer + armudu glass */}
        <ellipse cx={164} cy={126} rx={40} ry={6.5} className="a-gold" />
        <ellipse cx={164} cy={124} rx={30} ry={4} className="a-gold2 a-soft" />
        <path d="M144 58 L184 58 C184 72 175 80 175 92 C175 104 186 110 184 124 L144 124 C142 110 153 104 153 92 C153 80 144 72 144 58 Z" className="a-glass" />
        <path d="M147 74 L181 74 C179 82 175 86 175 92 C175 104 186 110 184 124 L144 124 C142 110 153 104 153 92 C153 86 149 82 147 74 Z" className="a-tea" />
        <path d="M150 64 L152 116" className="a-ink a-soft" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
        {/* teapot */}
        <ellipse cx={74} cy={104} rx={36} ry={22} className="a-moss" />
        <path d="M44 98 h60" className="a-gold" stroke="currentColor" strokeWidth={2} />
        <rect x={62} y={76} width={24} height={8} rx={3} className="a-moss2" />
        <circle cx={74} cy={74} r={4} className="a-gold" />
        <path d="M108 100 C120 94 126 82 136 78" className="a-teapot-spout" />
        <path d="M40 90 C26 92 26 114 42 114" className="a-teapot-spout" />
        {/* sweets bowl */}
        <path d="M206 116 q20 16 40 0 Z" className="a-ink a-soft" />
        {[214, 224, 234].map((x) => (
          <circle key={x} cx={x} cy={114} r={4} className={x === 224 ? 'a-rust' : 'a-gold'} />
        ))}
        {/* grandmother */}
        <Person x={282} y={128} s={1.05} c="a-cardigan" hair="scarf" shadow={false} />
      </>
    ),
  },
  meeting: {
    label: 'Neighbours gather in a snowy courtyard around a kindness shelf',
    draw: (ids) => (
      <>
        <rect width={W} height={H} fill={ids('night')} />
        {/* buildings */}
        <rect x={0} y={8} width={124} height={130} className="a-wall" />
        <rect x={196} y={0} width={124} height={138} className="a-wall" />
        {[22, 50, 78, 106].map((y) =>
          [12, 44, 76, 208, 240, 272, 300].map((x) => (
            <g key={`${x}-${y}`}>
              <rect x={x} y={y} width={20} height={18} className={(x + y) % 3 ? 'a-window' : 'a-dark'} />
              <path d={`M${x + 10} ${y} V${y + 18}`} className="a-dark-line" />
            </g>
          )),
        )}
        {/* street lamp */}
        <path d="M150 138 V54 q0 -10 10 -10" className="a-lamp-post" />
        <path d="M156 42 h14 l-3 6 h-8 Z" className="a-dark" />
        <Glow ids={ids} x={162} y={52} r={40} />
        <path d="M150 52 L120 138 L210 138 L170 52 Z" className="a-gold a-faint" />
        {/* snowy ground */}
        <rect x={0} y={136} width={W} height={44} className="a-snow" />
        <path d="M0 136 q40 -6 80 0 q40 6 80 0 q40 -6 80 0 q40 6 80 0" className="a-snow" />
        {/* kindness shelf */}
        <rect x={168} y={94} width={44} height={50} rx={2} className="a-wood" />
        <path d="M168 94 L190 82 L212 94 Z" className="a-rust" />
        <rect x={172} y={108} width={36} height={2.5} className="a-dark" />
        <rect x={172} y={124} width={36} height={2.5} className="a-dark" />
        <rect x={175} y={99} width={8} height={9} className="a-bread" />
        <rect x={187} y={101} width={8} height={7} className="a-ink" />
        <rect x={198} y={98} width={7} height={10} className="a-moss2" />
        <rect x={176} y={115} width={12} height={9} className="a-gold" />
        <rect x={192} y={116} width={12} height={8} className="a-rust" />
        {/* neighbours */}
        <Person x={56} y={158} s={0.95} c="a-coat" hair="scarf" />
        <Person x={88} y={154} s={1} c="a-uniform" hair="cap" />
        <Person x={120} y={164} s={0.62} c="a-jacket" hair="short" />
        <Person x={234} y={160} s={1.05} c="a-cardigan" hair="grey" />
        <Person x={268} y={154} s={0.95} c="a-dress" hair="long" />
        <Person x={294} y={162} s={0.55} c="a-dress" hair="bun" />
        <Person x={142} y={176} s={1.06} c="a-gold" hair="short" />
        <Snow />
      </>
    ),
  },

  // ───────── short problems
  'p-trolley': {
    label: 'A runaway wagon heading for a fork: five people on one track, one on the other',
    draw: (ids) => (
      <>
        <rect width={W} height={H} fill={ids('dawn')} />
        <path d="M0 116 L60 96 L120 108 L200 86 L320 100 L320 180 L0 180 Z" className="a-mtn-far" />
        <rect x={0} y={124} width={W} height={56} className="a-ground" />
        {/* sleepers */}
        {Array.from({ length: 22 }, (_, i) => (
          <rect key={i} x={i * 15} y={138} width={4} height={16} className="a-wood" />
        ))}
        {Array.from({ length: 10 }, (_, i) => (
          <rect key={`b${i}`} x={160 + i * 16} y={130 - i * 4.4} width={4} height={14} className="a-wood" transform={`rotate(-14 ${162 + i * 16} ${136 - i * 4.4})`} />
        ))}
        <path d="M0 142 L320 142 M0 150 L320 150" className="a-rail" />
        <path d="M150 142 L320 100 M150 150 L320 108" className="a-rail" />
        {/* the wagon */}
        <rect x={18} y={116} width={50} height={24} rx={3} className="a-rust" />
        <rect x={24} y={120} width={14} height={9} rx={1} className="a-screen" />
        <rect x={44} y={120} width={14} height={9} rx={1} className="a-screen" />
        <circle cx={30} cy={142} r={5} className="a-dark" />
        <circle cx={56} cy={142} r={5} className="a-dark" />
        <path d="M6 124 h8 M2 130 h10 M8 136 h6" className="a-line a-soft" />
        {/* five and one */}
        {[226, 244, 262, 280, 298].map((x, i) => (
          <Person key={x} x={x} y={142} s={0.52} c={i % 2 ? 'a-uniform' : 'a-coat'} hair={i % 2 ? 'cap' : 'short'} />
        ))}
        <Person x={292} y={104} s={0.52} c="a-uniform" hair="cap" />
        {/* lever */}
        <rect x={134} y={152} width={14} height={6} rx={1} className="a-dark" />
        <path d="M141 154 L130 136" className="a-lever" />
        <circle cx={130} cy={136} r={3} className="a-rust" />
        <Person x={112} y={176} s={0.76} c="a-gold" hair="short" arm={50} />
      </>
    ),
  },
  'p-theseus': {
    label: 'Two identical ships: one sails on the water, one rebuilt from old planks on the shore',
    draw: (ids) => (
      <>
        <rect width={W} height={H} fill={ids('dawn')} />
        <Glow ids={ids} x={60} y={40} r={40} />
        <circle cx={60} cy={40} r={14} className="a-sun" />
        <rect x={0} y={112} width={176} height={68} fill={ids('water')} />
        {[120, 132, 146, 162].map((y) => (
          <path key={y} d={`M${10 + (y % 20)} ${y} q10 -4 20 0 M${80 + (y % 30)} ${y} q10 -4 20 0`} className="a-wave" />
        ))}
        <path d="M176 180 L176 120 Q230 112 320 118 L320 180 Z" className="a-sand" />
        {/* new ship on water */}
        <path d="M26 108 L144 108 L128 128 L42 128 Z" className="a-gold" />
        <path d="M34 116 H136" className="a-dark-line" />
        <rect x={82} y={40} width={4} height={68} className="a-wood" />
        <path d="M86 46 L126 98 L86 98 Z" className="a-sail" />
        <path d="M82 52 L50 94 L82 94 Z" className="a-sail a-soft" />
        <path d="M86 40 l14 4 l-14 4 Z" className="a-rust" />
        {/* old ship on land, patched planks */}
        <path d="M188 114 L302 114 L286 136 L204 136 Z" className="a-rust" />
        {[120, 126, 132].map((y) => (
          <path key={y} d={`M${200 + (y - 120)} ${y} H${292 - (y - 120)}`} className="a-dark-line" />
        ))}
        <rect x={242} y={50} width={4} height={64} className="a-wood" />
        <path d="M246 56 L282 102 L246 102 Z" className="a-sail a-soft" />
        {/* planks pile + carpenter */}
        <rect x={290} y={140} width={26} height={4} className="a-wood" />
        <rect x={292} y={144} width={22} height={4} className="a-wood" />
        <Person x={206} y={160} s={0.7} c="a-coat" hair="grey" />
        <text x={168} y={60} textAnchor="middle" className="a-qsmall">
          ?
        </text>
      </>
    ),
  },
  'p-cave': {
    label: 'Prisoners chained in a cave watch shadows on the wall cast by a fire; light at the entrance',
    draw: (ids) => (
      <>
        <rect width={W} height={H} fill={ids('night')} />
        {/* cave entrance with daylight */}
        <path d="M240 0 L320 0 L320 60 Q290 50 262 54 Q246 30 240 0 Z" fill={ids('dawn')} />
        <Glow ids={ids} x={292} y={20} r={40} />
        {/* rock wall */}
        <path d="M0 0 L232 0 Q220 30 240 56 L0 64 Z" className="a-rock" />
        <rect x={14} y={30} width={150} height={96} rx={6} className="a-wall" />
        {/* shadows on wall */}
        <g opacity={0.85}>
          <Person x={56} y={118} s={1.25} c="a-dark" hair="none" shadow={false} />
          <path d="M92 72 L112 52 L132 72 L122 72 L122 96 L102 96 L102 72 Z" className="a-dark" />
          <Person x={146} y={118} s={1} c="a-dark" hair="none" shadow={false} arm={60} />
        </g>
        {/* fire */}
        <Glow ids={ids} x={250} y={136} r={50} />
        <path d="M236 150 Q250 104 264 150 Z" className="a-sun" />
        <path d="M242 150 Q250 122 258 150 Z" className="a-rust" />
        <path d="M232 152 h36 M236 156 h28" className="a-wood" stroke="currentColor" strokeWidth={4} strokeLinecap="round" />
        {/* low wall with puppeteers' objects */}
        <rect x={188} y={124} width={30} height={22} className="a-rock" />
        {/* floor + prisoners facing the wall */}
        <rect x={0} y={146} width={W} height={34} className="a-ground" />
        {[60, 92, 124, 156].map((x) => (
          <g key={x}>
            <Person x={x} y={164} s={0.62} c="a-coat" hair="short" />
            <path d={`M${x - 8} 170 q8 4 16 0`} className="a-chain" />
          </g>
        ))}
      </>
    ),
  },
  'p-gyges': {
    label: 'A golden ring glows; a figure beside it fades into invisibility',
    draw: (ids) => (
      <>
        <rect width={W} height={H} fill={ids('night')} />
        <Stars n={24} seed={4} maxY={110} />
        <Glow ids={ids} x={116} y={92} r={74} />
        {/* rays */}
        {Array.from({ length: 12 }, (_, i) => {
          const a = (i * Math.PI) / 6
          return (
            <path
              key={i}
              d={`M${116 + Math.cos(a) * 44} ${96 + Math.sin(a) * 44} L${116 + Math.cos(a) * 58} ${96 + Math.sin(a) * 58}`}
              className="a-line a-soft"
            />
          )
        })}
        <circle cx={116} cy={96} r={30} fill="none" strokeWidth={13} className="a-ring" />
        <circle cx={116} cy={96} r={30} fill="none" strokeWidth={3} className="a-ring-shine" />
        <path d="M102 58 L116 42 L130 58 L116 70 Z" className="a-gem" />
        <path d="M108 58 L116 48 L122 58 Z" className="a-ink a-soft" />
        {/* fading person */}
        <g opacity={0.5}>
          <Person x={238} y={158} s={1.55} c="a-coat" hair="short" shadow={false} />
        </g>
        <g opacity={0.25}>
          <Person x={250} y={158} s={1.55} c="a-coat" hair="short" shadow={false} />
        </g>
        {[[214, 70], [276, 64], [282, 108], [204, 118], [262, 40]].map(([x, y]) => (
          <path key={`${x}${y}`} d={`M${x - 4} ${y} H${x + 4} M${x} ${y - 4} V${y + 4}`} className="a-line" />
        ))}
        <rect x={0} y={158} width={W} height={22} className="a-ground" />
      </>
    ),
  },
  'p-machine': {
    label: 'A person asleep in a glowing machine, dreaming of a sunny island',
    draw: (ids) => (
      <>
        <rect width={W} height={H} fill={ids('night')} />
        {/* dream bubble */}
        <ellipse cx={226} cy={58} rx={78} ry={42} fill={ids('dawn')} />
        <circle cx={140} cy={92} r={6} className="a-ink a-soft" />
        <circle cx={152} cy={80} r={9} className="a-ink a-soft" />
        <Glow ids={ids} x={262} y={40} r={22} />
        <circle cx={262} cy={40} r={9} className="a-sun" />
        <rect x={148} y={70} width={156} height={30} fill={ids('water')} opacity={0.8} />
        <path d="M184 76 Q226 58 268 76 Z" className="a-sand" />
        <path d="M226 64 q-2 -12 4 -22" className="a-wood" stroke="currentColor" strokeWidth={3} fill="none" />
        <path d="M230 42 q10 -6 20 2 M230 42 q-10 -6 -20 2 M230 42 q6 -10 14 -10 M230 42 q-6 -10 -14 -10" className="a-leaf" />
        {/* machine pod */}
        <Glow ids={ids} x={110} y={124} r={70} />
        <rect x={26} y={104} width={176} height={46} rx={20} className="a-pod" />
        <rect x={34} y={110} width={160} height={30} rx={14} className="a-screen" />
        <circle cx={58} cy={124} r={8} className="a-skin" />
        <path d="M50 124 q8 -12 16 0" className="a-hair" />
        <rect x={66} y={118} width={110} height={13} rx={6.5} className="a-blanket" />
        {/* helmet wires */}
        <path d="M52 112 C40 80 70 66 96 74 M60 112 C62 90 82 84 104 92" className="a-wire" />
        {/* control panel */}
        <rect x={210} y={118} width={34} height={32} rx={3} className="a-dark" />
        {[124, 132, 140].map((y, i) => (
          <circle key={y} cx={220} cy={y} r={2.2} className={i === 1 ? 'a-rust' : 'a-moss2'} />
        ))}
        <rect x={228} y={122} width={10} height={20} rx={1} className="a-screen" />
        <rect x={0} y={150} width={W} height={30} className="a-floor" />
      </>
    ),
  },
  'p-veil': {
    label: 'Behind a curtain stand people of different ages and sizes; nobody knows who they will be',
    draw: (ids) => (
      <>
        <rect width={W} height={H} fill={ids('warm')} />
        <Glow ids={ids} x={160} y={70} r={110} />
        {/* people peeking under */}
        {[
          [52, 0.68, 'a-coat', 'grey'],
          [96, 1, 'a-uniform', 'cap'],
          [140, 0.5, 'a-dress', 'bun'],
          [180, 0.95, 'a-gold', 'short'],
          [222, 0.8, 'a-cardigan', 'scarf'],
          [264, 1.05, 'a-jacket', 'long'],
        ].map(([x, s, c, h]) => (
          <Person key={x as number} x={x as number} y={170} s={s as number} c={c as string} hair={h as Hair} />
        ))}
        {/* curtain with folds */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <path
            key={i}
            d={`M${18 + i * 48} 18 C${30 + i * 48} 60 ${14 + i * 48} 110 ${24 + i * 48} 142 L${72 + i * 48} 142 C${62 + i * 48} 110 ${78 + i * 48} 60 ${66 + i * 48} 18 Z`}
            className={i % 2 ? 'a-curtain-dark' : 'a-curtain'}
          />
        ))}
        <path d="M18 142 Q160 152 306 142" className="a-gold" stroke="currentColor" strokeWidth={2} fill="none" />
        <rect x={10} y={10} width={300} height={9} rx={4.5} className="a-gold" />
        {[24, 72, 120, 168, 216, 264, 302].map((x) => (
          <circle key={x} cx={x} cy={14} r={4} className="a-wood" />
        ))}
        <rect x={0} y={170} width={W} height={10} className="a-floor" />
        <text x={160} y={84} textAnchor="middle" className="a-qmark a-soft">
          ?
        </text>
      </>
    ),
  },
  'p-pond': {
    label: 'A child splashes in a pond in the park; new shoes wait on the bank',
    draw: (ids) => (
      <>
        <rect width={W} height={H} fill={ids('dawn')} />
        {/* trees */}
        {[[30, 104], [64, 96], [288, 100], [258, 108]].map(([x, y]) => (
          <g key={x}>
            <rect x={x - 2} y={y} width={4} height={18} className="a-wood" />
            <circle cx={x} cy={y - 8} r={16} className="a-tree" />
            <circle cx={x + 8} cy={y - 2} r={10} className="a-tree" />
          </g>
        ))}
        <rect x={0} y={112} width={W} height={68} className="a-grass" />
        {/* pond */}
        <ellipse cx={168} cy={140} rx={112} ry={28} fill={ids('water')} />
        <ellipse cx={168} cy={140} rx={112} ry={28} className="a-line a-soft" />
        {/* splashes and child */}
        <circle cx={176} cy={132} r={7} className="a-skin" />
        <path d="M169 130 q7 -9 14 0" className="a-hair" />
        <path d="M164 128 l-8 -14 M188 128 l8 -14" className="a-arm" />
        <path d="M150 138 q12 -6 24 0 q12 6 24 0" className="a-wave" />
        <path d="M156 122 l-4 -6 M196 120 l4 -6 M176 116 v-6" className="a-line" />
        {/* duck */}
        <path d="M232 146 q8 -8 16 0 Z" className="a-gold" />
        <circle cx={248} cy={142} r={3} className="a-gold" />
        {/* shoes and bag on the bank */}
        <path d="M38 156 h22 q6 0 6 6 v2 h-28 Z" className="a-shoe" />
        <path d="M70 158 h22 q6 0 6 6 v2 h-28 Z" className="a-shoe" />
        <rect x={34} y={138} width={22} height={16} rx={2} className="a-rust" />
        {/* you, rushing */}
        <Person x={288} y={136} s={0.95} c="a-gold" hair="short" lean={-10} arm={30} />
        {/* bench */}
        <rect x={102} y={102} width={36} height={4} className="a-wood" />
        <rect x={106} y={106} width={3} height={8} className="a-wood" />
        <rect x={131} y={106} width={3} height={8} className="a-wood" />
      </>
    ),
  },
  'p-promise': {
    label: 'A box tied with a ribbon passes from an old hand to a young hand beside a hospital bed',
    draw: (ids) => (
      <>
        <rect width={W} height={H} fill={ids('warm')} />
        <Glow ids={ids} x={160} y={86} r={90} />
        {/* window with evening */}
        <rect x={232} y={16} width={70} height={56} rx={3} fill={ids('dawn')} />
        <rect x={232} y={16} width={70} height={56} rx={3} className="a-frame" />
        <path d="M267 16 V72" className="a-frame" />
        {/* drip stand */}
        <path d="M34 150 V24 h18" className="a-lamp-post" />
        <rect x={46} y={26} width={12} height={18} rx={3} className="a-glass" />
        <path d="M52 44 Q60 90 70 110" className="a-thin" />
        {/* bed */}
        <rect x={0} y={118} width={W} height={62} className="a-blanket" />
        <path d="M0 126 H320" className="a-thin a-faint" />
        {/* box */}
        <rect x={124} y={64} width={74} height={52} rx={4} className="a-gold" />
        <rect x={157} y={64} width={8} height={52} className="a-rust" />
        <rect x={124} y={86} width={74} height={8} className="a-rust" />
        <path d="M161 64 C146 46 134 58 150 64 M161 64 C176 46 188 58 172 64" className="a-ribbon" />
        {/* old hand from left, young hand from right */}
        <path d="M14 124 C54 116 92 112 124 108 L124 120 C92 124 56 132 14 138 Z" className="a-skin-old" />
        <path d="M110 108 q6 -4 14 0 v12 q-8 2 -14 0 Z" className="a-skin-old" />
        <path d="M306 124 C266 116 228 112 198 108 L198 120 C228 124 264 132 306 138 Z" className="a-skin" />
        <path d="M212 108 q-6 -4 -14 0 v12 q8 2 14 0 Z" className="a-skin" />
        <path d="M14 124 C54 116 92 112 124 108" className="a-thin a-soft" />
        <path d="M306 124 C266 116 228 112 198 108" className="a-thin a-soft" />
        {/* sleeves */}
        <rect x={0} y={122} width={26} height={20} className="a-cardigan" />
        <rect x={294} y={122} width={26} height={20} className="a-jacket" />
      </>
    ),
  },
  'p-sisyphus': {
    label: 'A figure pushes a huge boulder up a steep mountain at sunset',
    draw: (ids) => (
      <>
        <rect width={W} height={H} fill={ids('dawn')} />
        <Glow ids={ids} x={64} y={60} r={50} />
        <circle cx={64} cy={60} r={20} className="a-sun" />
        <Stars n={10} seed={8} maxY={40} />
        <path d="M0 150 L50 128 L90 140 L130 118 L170 132 L320 90 L320 180 L0 180 Z" className="a-mtn-far" />
        <path d="M0 180 L0 172 L300 38 L320 36 L320 180 Z" className="a-mtn-near" />
        <path d="M0 180 L0 176 L310 44 L320 44 L320 180 Z" className="a-ground" />
        {/* path traces down the slope */}
        <path d="M30 168 L290 58" className="a-line a-soft" strokeDasharray="2 8" />
        {/* boulder with cracks */}
        <circle cx={198} cy={76} r={30} className="a-boulder" />
        <path d="M184 62 l10 6 l-2 8 M208 88 l-8 -4 M212 66 l-6 4" className="a-dark-line" />
        <ellipse cx={190} cy={64} rx={9} ry={5} className="a-ink a-faint" />
        <g transform="rotate(-25 158 130)">
          <Person x={158} y={130} s={1} c="a-gold" hair="short" arm={70} shadow={false} />
        </g>
        {/* summit flag */}
        <path d="M300 38 V18 l14 6 l-14 6" className="a-rust" stroke="currentColor" strokeWidth={1.5} />
      </>
    ),
  },
}

/** Credit line for a photo (CC BY / BY-SA require it). */
export function Credit({ name }: { name: string }) {
  const photo = scenePhotos[name]
  if (!photo) return null
  return (
    <a className="credit" href={photo.page} target="_blank" rel="noopener noreferrer">
      {photo.artist} · {photo.license}
    </a>
  )
}

/**
 * Shows the real photo for `name` if there is one, otherwise the drawing.
 * If the photo fails to load (offline), it falls back to the drawing.
 * `credit` puts the author line on the picture — turn it off inside buttons
 * (a link inside a button is invalid) and credit elsewhere instead.
 */
export function Art({
  name,
  className,
  fill,
  credit = false,
}: {
  name: string
  className?: string
  fill?: boolean
  credit?: boolean
}) {
  const picture = pictures[name]
  const photo = scenePhotos[name]
  const [failed, setFailed] = useState(false)
  const cls = `art-wrap${className ? ` ${className}` : ''}`

  if (photo && !failed) {
    return (
      <div className={`${cls} photo-wrap`}>
        <img
          className="photo"
          src={photo.src}
          srcSet={photo.srcSet}
          sizes={photo.srcSet ? '100vw' : undefined}
          alt={picture?.label ?? ''}
          loading={photo.srcSet ? 'eager' : 'lazy'}
          decoding="async"
          style={focus[name] ? { objectPosition: focus[name] } : undefined}
          onError={() => setFailed(true)}
        />
        {credit && <Credit name={name} />}
      </div>
    )
  }
  if (!picture) return null
  return (
    <div className={cls}>
      <Frame label={picture.label} fill={fill}>
        {picture.draw}
      </Frame>
    </div>
  )
}

export type IconKey = School | 'knowledge' | 'justice' | 'eastern' | 'religion'

/** Small icon for each school, used in the compass, library and ending. */
export function SchoolIcon({ school, size = 20 }: { school: IconKey; size?: number }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', 'aria-hidden': true, className: 'school-icon' }
  switch (school) {
    case 'stoic': // a column
      return (
        <svg {...common}>
          <path d="M4 5h16M5 8h14M7 8v11M12 8v11M17 8v11M4 20h16" />
        </svg>
      )
    case 'utilitarian': // many people
      return (
        <svg {...common}>
          <circle cx="7" cy="8" r="2.4" />
          <circle cx="17" cy="8" r="2.4" />
          <circle cx="12" cy="6" r="2.6" />
          <path d="M3 19c0-3 2-5 4-5M21 19c0-3-2-5-4-5M7 20c0-4 2.2-6.5 5-6.5S17 16 17 20" />
        </svg>
      )
    case 'kantian': // scales
      return (
        <svg {...common}>
          <path d="M12 4v16M7 20h10M4 8h16M6 8l-3 6h6zM18 8l-3 6h6z" />
        </svg>
      )
    case 'existential': // pen
      return (
        <svg {...common}>
          <path d="M4 20l4-1 11-11-3-3L5 16zM14 7l3 3M4 20h8" />
        </svg>
      )
    case 'virtue': // laurel
      return (
        <svg {...common}>
          <path d="M12 21C6 18 4 12 6 5M12 21c6-3 8-9 6-16M6 9c2 0 3 1 3 3M6 14c2 0 3 1 3 3M18 9c-2 0-3 1-3 3M18 14c-2 0-3 1-3 3" />
        </svg>
      )
    case 'buddhist': // lotus
      return (
        <svg {...common}>
          <path d="M12 6c2 3 2 8 0 12-2-4-2-9 0-12zM12 18c-3 0-6-2-8-6 3 0 6 2 8 6zM12 18c3 0 6-2 8-6-3 0-6 2-8 6zM5 20h14" />
        </svg>
      )
    case 'knowledge': // an eye inside a lamp of light
      return (
        <svg {...common}>
          <path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6S2 12 2 12z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )
    case 'justice': // a scroll / social contract
      return (
        <svg {...common}>
          <path d="M7 4h11v13a3 3 0 0 1-3 3H6a3 3 0 0 0 3-3V6a2 2 0 0 0-2-2zM7 4a2 2 0 0 0-2 2v2h4M11 9h5M11 13h5" />
        </svg>
      )
    case 'religion': // light rays from a point
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" />
        </svg>
      )
    case 'eastern': // star over an astrolabe
      return (
        <svg {...common}>
          <circle cx="12" cy="13" r="7" />
          <path d="M12 6v14M5 13h14M12 2l1 2h-2zM8 9l8 8" />
        </svg>
      )
  }
}
