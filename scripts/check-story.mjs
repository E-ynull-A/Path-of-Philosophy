// Checks the story for broken links and missing translations,
// then walks every road through the main story and counts the endings.
// Run: npm run check
import { readdirSync } from 'node:fs'
import { createServer } from 'vite'

const server = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
})

let failed = false
const fail = (message) => {
  failed = true
  console.error('  ✗ ' + message)
}

// File names that differ only in upper/lower case break on Windows and macOS.
console.log('File names')
{
  const seen = new Map()
  // Code files are imported without extension, so Foo.tsx and foo.ts collide.
  for (const name of readdirSync('src').filter((file) => /\.(ts|tsx|js|jsx)$/.test(file))) {
    const key = name.replace(/\.[^.]+$/, '').toLowerCase()
    if (seen.has(key)) fail(`src/${seen.get(key)} and src/${name} differ only in letter case`)
    seen.set(key, name)
  }
  if (!failed) console.log('  ✓ no case clashes')
}

try {
  const { scenes } = await server.ssrLoadModule('/src/story.ts')
  const { problemScenes, problemMetas } = await server.ssrLoadModule('/src/problems.ts')
  const engine = await server.ssrLoadModule('/src/engine.ts')

  const all = [...scenes, ...problemScenes]
  const ids = new Set(all.map((scene) => scene.id))
  const choiceIds = new Set(all.flatMap((scene) => scene.choices.map((choice) => choice.id)))
  const special = new Set(['ending', 'problems-hub'])

  console.log('Links and text')
  const seenScene = new Set()
  const seenChoice = new Set()
  const checkText = (where, text) => {
    if (!text || !text.az?.trim() || !text.en?.trim()) fail(`${where}: missing AZ or EN text`)
  }
  for (const scene of all) {
    if (seenScene.has(scene.id)) fail(`duplicate scene id "${scene.id}"`)
    seenScene.add(scene.id)
    checkText(`${scene.id}.title`, scene.title)
    checkText(`${scene.id}.body`, scene.body)
    for (const line of scene.memory ?? []) {
      checkText(`${scene.id}.memory`, line.text)
      for (const id of line.when) {
        if (!choiceIds.has(id)) fail(`${scene.id}.memory refers to unknown choice "${id}"`)
      }
    }
    for (const choice of scene.choices) {
      if (seenChoice.has(choice.id)) fail(`duplicate choice id "${choice.id}"`)
      seenChoice.add(choice.id)
      if (!ids.has(choice.next) && !special.has(choice.next)) {
        fail(`${scene.id} → ${choice.id} points to missing scene "${choice.next}"`)
      }
      checkText(`${choice.id}.text`, choice.text)
      if (!choice.skipInsight) {
        checkText(`${choice.id}.quote`, choice.insight.quote)
        checkText(`${choice.id}.explain`, choice.insight.explain)
        checkText(`${choice.id}.echo`, choice.echo)
      }
      for (const school of Object.keys(choice.weights)) {
        if (!engine.SCHOOLS.includes(school)) fail(`${choice.id} has unknown school "${school}"`)
      }
    }
  }
  for (const meta of problemMetas) {
    if (!ids.has(meta.id)) fail(`problem "${meta.id}" has no scene`)
  }
  if (!failed) console.log(`  ✓ ${all.length} scenes, ${choiceIds.size} choices`)

  console.log('Every road through the main story')
  const endings = {}
  const visited = new Set()
  let roads = 0
  const walk = (state, depth) => {
    if (depth > 40) return fail(`road too long near "${state.sceneId}"`)
    if (state.sceneId === 'ending') {
      roads++
      const ending = engine.resolveEnding(state).id
      endings[ending] = (endings[ending] ?? 0) + 1
      return
    }
    const scene = engine.getScene(state.sceneId, state)
    if (!scene) return fail(`missing scene "${state.sceneId}"`)
    visited.add(scene.id)
    for (const choice of scene.choices) {
      let next = engine.applyChoice(state, choice.id)
      if (next.pendingInsight) next = engine.dismissInsight(next)
      walk(next, depth + 1)
    }
  }
  walk(engine.createGame('main'), 0)
  const unreachable = scenes.filter((scene) => !visited.has(scene.id)).map((scene) => scene.id)
  if (unreachable.length) fail(`unreachable scenes: ${unreachable.join(', ')}`)
  console.log(`  ${roads} different roads. Endings:`)
  for (const [id, count] of Object.entries(endings).sort((a, b) => b[1] - a[1])) {
    console.log(`    ${id.padEnd(12)} ${count}`)
  }

  console.log('The question of God')
  const god = await server.ssrLoadModule('/src/godData.ts')
  const { findPhilosopher } = await server.ssrLoadModule('/src/libraryData.ts')
  const argIds = new Set(god.args.map((arg) => arg.id))
  const textOk = (where, text) => {
    if (!text?.az?.trim() || !text?.en?.trim()) fail(`${where}: missing az/en text`)
  }
  const godBefore = failed
  for (const view of god.views) {
    for (const key of ['name', 'short', 'def', 'traditions', 'evil', 'think']) textOk(`view ${view.id}.${key}`, view[key])
    for (const id of view.args) if (!argIds.has(id)) fail(`view ${view.id} links unknown argument "${id}"`)
    for (const item of view.thinkers) if (item.person && !findPhilosopher(item.person)) fail(`view ${view.id}: unknown person "${item.person}"`)
    if (!view.strengths.length || !view.weaknesses.length) fail(`view ${view.id}: needs strengths and weaknesses`)
  }
  for (const arg of god.args) {
    for (const key of ['name', 'short', 'origin', 'conclusion', 'plain', 'think']) textOk(`arg ${arg.id}.${key}`, arg[key])
    for (const id of arg.people ?? []) if (!findPhilosopher(id)) fail(`arg ${arg.id}: unknown person "${id}"`)
    if (arg.steps.length < 2) fail(`arg ${arg.id}: needs at least two steps`)
    if (!arg.strengths.length || !arg.objections.length || !arg.replies.length) fail(`arg ${arg.id}: needs strengths, objections and replies`)
  }
  for (const id of god.spectrum) if (!god.findView(id)) fail(`spectrum: unknown view "${id}"`)
  if (!godBefore && !failed) console.log(`  ✓ ${god.views.length} views, ${god.args.length} arguments, all links resolve`)
} finally {
  await server.close()
}

if (failed) {
  console.error('\nProblems found.')
  process.exit(1)
}
console.log('\nAll good.')
