import type { Lang, School, Text } from './types'

export const ui = {
  title: { az: 'Fəlsəfə Yolu', en: 'Path of Philosophy' },
  subtitle: {
    az: 'Burada dərs yoxdur. Sən vəziyyətin içindəsən. Seçirsən, sonra görürsən ki, bu seçim hansı düşüncəyə yaxındır.',
    en: 'This is not a lecture. You are inside a situation. You choose, then you see which way of thinking that choice sits near.',
  },
  howTo: {
    az: 'İki cür oynaya bilərsən. Ana hekayədə bir yol tutursan və o yol başqa yola ayrılır — əvvəlki seçimin növbəti səhnəni dəyişir. Kiçik problemlərdə isə dünyada məşhur fəlsəfi suallar qısa hekayə kimi gəlir: bir vəziyyət, bir qərar, sonra sadə izah.',
    en: 'You can play two ways. In the main story the road splits — an earlier choice changes the next scene. In the short problems, famous philosophical questions arrive as tiny stories: a situation, a decision, then a plain explanation.',
  },
  enterMain: { az: 'Ana hekayə', en: 'Main story' },
  enterMainHint: {
    az: 'Uzun yol. Seçimin növbəti səhifəni dəyişir.',
    en: 'A longer road. Your choice changes the next page.',
  },
  enterProblems: { az: 'Kiçik fəlsəfi problemlər', en: 'Short philosophical problems' },
  enterProblemsHint: {
    az: 'Məşhur suallar, qısa hekayə ilə. İstədiyini seç, qayıt, başqasını aç.',
    en: 'Famous questions as short stories. Pick one, return, open another.',
  },
  continue: { az: 'Davam et', en: 'Continue' },
  journal: { az: 'Jurnal', en: 'Journal' },
  compass: { az: 'Kompas', en: 'Compass' },
  sual: { az: 'Sual', en: 'Sual' },
  sualIntro: {
    az: 'Mən Sualam. Sənə “belə et” demirəm. Yalnız soruşuram. Çətin cümlə gələndə də qorxma — izah seçimdən sonra, sadə dildə gələcək.',
    en: 'I am Sual. I will not tell you what to do. I only ask. If a sentence feels hard, wait — the explanation comes after the choice, in plain language.',
  },
  walkAgain: { az: 'Başlığa qayıt', en: 'Back to the start' },
  yourPath: { az: 'Sənin yolun', en: 'Your path' },
  reading: { az: 'Sonra oxumaq üçün', en: 'To read next' },
  echoLabel: { az: 'Yolun yaddaşı', en: 'The path remembers' },
  emptyJournal: {
    az: 'Hələ izah yoxdur. Bir seçim et, sonra burda qalacaq.',
    en: 'No insights yet. Make a choice, and it will stay here.',
  },
  problemsHubTitle: { az: 'Kiçik problemlər', en: 'Short problems' },
  problemsHubBody: {
    az: 'Bunlar əsrlərdir insanların başını qarışdıran suallardır. Hər biri qısa bir hekayədir. “Düzgün cavab” yoxdur. Məqsəd odur ki, sən özün hissedəsən, sonra adını öyrənəsən.',
    en: 'These questions have tangled people for centuries. Each one is a short story. There is no correct answer. The point is to feel it first, then learn its name.',
  },
  problemsDone: {
    az: 'Bu qədər bəsdir — mənə deyilənləri göstər',
    en: 'That is enough — show me what I leaned toward',
  },
  solved: { az: 'baxılıb', en: 'done' },
  home: { az: 'Əvvələ', en: 'Home' },
} as const satisfies Record<string, Text>

export const schoolName: Record<School, Text> = {
  stoic: { az: 'Stoiklər', en: 'Stoics' },
  utilitarian: { az: 'Ən çoxun xeyiri', en: 'Greatest good' },
  kantian: { az: 'Qayda və vəzifə', en: 'Duty and rules' },
  existential: { az: 'Özünü yazmaq', en: 'Writing yourself' },
  virtue: { az: 'Xarakter', en: 'Character' },
  buddhist: { az: 'Mərhəmət', en: 'Compassion' },
}

export function t(lang: Lang, text: Text): string {
  return text[lang]
}
