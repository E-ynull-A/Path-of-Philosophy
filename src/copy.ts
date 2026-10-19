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
    az: 'Bir həftəlik hekayə: market, qonşular, çətin seçimlər. Hər seçim növbəti səhifəni dəyişir.',
    en: 'One week of everyday life: a shop, neighbours, hard choices. Every choice changes the next page.',
  },
  enterProblems: { az: 'Düşüncə təcrübələri', en: 'Thought experiments' },
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
  walkAgain: { az: 'Ana səhifəyə qayıt', en: 'Back to home' },
  yourPath: { az: 'Sənin yolun', en: 'Your path' },
  reading: { az: 'Sonra oxumaq üçün', en: 'To read next' },
  echoLabel: { az: 'Yolun yaddaşı', en: 'The path remembers' },
  emptyJournal: {
    az: 'Hələ izah yoxdur. Bir seçim et, sonra burda qalacaq.',
    en: 'No insights yet. Make a choice, and it will stay here.',
  },
  problemsHubTitle: { az: 'Düşüncə təcrübələri', en: 'Thought experiments' },
  problemsHubBody: {
    az: 'Bunlar əsrlərdir insanların başını qarışdıran suallardır. Hər biri qısa bir hekayədir. “Düzgün cavab” yoxdur. Məqsəd odur ki, sən özün hiss edəsən, sonra adını öyrənəsən.',
    en: 'These questions have tangled people for centuries. Each one is a short story. There is no correct answer. The point is to feel it first, then learn its name.',
  },
  problemsDone: {
    az: 'Bu qədər bəsdir — mənə deyilənləri göstər',
    en: 'That is enough — show me what I leaned toward',
  },
  solved: { az: 'baxılıb', en: 'done' },
  home: { az: 'Əvvələ', en: 'Home' },
  resume: { az: 'Qaldığın yerdən davam et', en: 'Continue where you left off' },
  undo: { az: '← Geri al', en: '← Undo' },
  keysHint: {
    az: 'Klaviatura: 1–5 seçir, Enter davam edir.',
    en: 'Keyboard: 1–5 to choose, Enter to continue.',
  },
  lastStep: { az: 'Son addım', en: 'The last step' },
  yourCompass: { az: 'Sənin kompasın', en: 'Your compass' },
  alsoNear: { az: 'Yaxın səs', en: 'A close second voice' },
  alsoNearBody: {
    az: 'Səndə bu səs də güclü idi:',
    en: 'This voice was strong in you too:',
  },
  yourRoad: { az: 'Keçdiyin yol', en: 'The road you walked' },
  copyResult: { az: 'Nəticəni kopyala', en: 'Copy my result' },
  copied: { az: 'Kopyalandı ✓', en: 'Copied ✓' },
  tryOther: {
    az: 'Başqa yolla bir də keç — hekayə başqa cür açılacaq.',
    en: 'Walk it again another way — the story will open differently.',
  },
  playAgainMain: { az: 'Ana hekayəni yenidən başla', en: 'Restart the main story' },
  openProblems: { az: 'Düşüncə təcrübələrinə keç', en: 'Go to the thought experiments' },
  plain: { az: 'Sadə dillə', en: 'In plain words' },
  think: { az: 'Bir az düşün', en: 'Think about it' },
  done: { az: 'Baxılıb ✓', en: 'Done ✓' },
  open: { az: 'Aç', en: 'Open' },
  tapHint: {
    az: 'Altından xətt çəkilmiş sözə toxun — izahı çıxacaq.',
    en: 'Tap any underlined word to see what it means.',
  },
  compassHint: {
    az: 'Hər seçim bu altı düşüncə məktəbindən birinə yaxındır. Kompas hansına daha çox meyl etdiyini göstərir.',
    en: 'Every choice sits close to one of these six schools of thought. The compass shows where you lean.',
  },
} as const satisfies Record<string, Text>

export const schoolName: Record<School, Text> = {
  stoic: { az: 'Stoiklər', en: 'Stoics' },
  utilitarian: { az: 'Ən çoxun xeyri', en: 'Greatest good' },
  kantian: { az: 'Qayda və vəzifə', en: 'Duty and rules' },
  existential: { az: 'Özünü yazmaq', en: 'Writing yourself' },
  virtue: { az: 'Xarakter', en: 'Character' },
  buddhist: { az: 'Mərhəmət', en: 'Compassion' },
}

/** Library + navigation strings. */
export const lib = {
  navPlay: { az: 'Sına', en: 'Play' },
  navLibrary: { az: 'Öyrən', en: 'Learn' },
  title: { az: 'Öyrən', en: 'Learn' },
  subtitle: {
    az: 'Fəlsəfə məktəbləri, onları quran insanlar, Tanrı sualı və əsas anlayışlar — qısa, aydın və növbəti addımla.',
    en: 'Schools of philosophy, the people who built them, the question of God and the key ideas — short, clear, with a next step.',
  },
  tabSchools: { az: 'Məktəblər', en: 'Schools' },
  tabPeople: { az: 'Filosoflar', en: 'Philosophers' },
  tabTimeline: { az: 'Zaman xətti', en: 'Timeline' },
  tabGlossary: { az: 'Lüğət', en: 'Glossary' },
  tabGod: { az: 'Tanrı sualı', en: 'The question of God' },
  search: { az: 'Axtar: ad, şəhər, fikir…', en: 'Search: name, place, idea…' },
  searchGlossary: { az: 'Söz axtar…', en: 'Search a word…' },
  all: { az: 'Hamısı', en: 'All' },
  inGame: { az: 'Oyunda var', en: 'In the game' },
  thinkers: { az: 'Mütəfəkkirlər', en: 'Thinkers' },
  keyQuestion: { az: 'Əsas sual', en: 'The key question' },
  keyIdeas: { az: 'Əsas fikirlər', en: 'Key ideas' },
  daily: { az: 'Gündəlik həyatda', en: 'In everyday life' },
  tryInGame: { az: 'Bu düşüncəni oyunda sına →', en: 'Try this way of thinking in the game →' },
  bigIdea: { az: 'Əsas fikri', en: 'The big idea' },
  funFact: { az: 'Maraqlı fakt', en: 'Did you know?' },
  startWith: { az: 'Nədən başlamalı', en: 'Where to start' },
  schoolsOf: { az: 'Məktəblər', en: 'Schools' },
  back: { az: '← Öyrən', en: '← Learn' },
  prev: { az: '← Əvvəlki', en: '← Previous' },
  next: { az: 'Növbəti →', en: 'Next →' },
  nothing: { az: 'Heç nə tapılmadı. Başqa söz yoxla.', en: 'Nothing found. Try another word.' },
  yourLean: { az: 'Sənin kompasın', en: 'Your compass' },
  yourLeanBody: {
    az: 'Son oyununda ən çox bu məktəbə yaxın idin:',
    en: 'In your last game you leaned most toward:',
  },
  readMore: { az: 'Ətraflı →', en: 'More →' },
  openLibrary: { az: '“Öyrən” bölməsində oxu →', en: 'Read more in Learn →' },
  libraryCard: {
    az: 'Filosoflar, məktəblər, zaman xətti və lüğət. Öyrənmək və araşdırmaq üçün.',
    en: 'Philosophers, schools, a timeline and a glossary. For learning and exploring.',
  },
  peopleCount: { az: 'filosof', en: 'thinkers' },
  schoolsCount: { az: 'məktəb', en: 'schools' },
  tabCredits: { az: 'Mənbələr', en: 'Sources' },
  footerCredits: { az: 'Şəkillər: Wikimedia Commons · müəlliflər və lisenziyalar', en: 'Images: Wikimedia Commons · authors and licences' },
  creditsIntro: {
    az: 'Tətbiqdəki bütün foto və rəsm əsərləri Wikimedia Commons-dandır və sərbəst lisenziyalıdır: ictimai mülkiyyət, CC0, CC BY və ya CC BY-SA. Müəlliflərə təşəkkür edirik. Hər şəklin adına toxunsan, orijinal səhifəsi açılacaq.',
    en: 'All photos and artworks in the app come from Wikimedia Commons under free licences: public domain, CC0, CC BY or CC BY-SA. Thanks to their authors. Tap a source to open the original page.',
  },
  creditsScenes: { az: 'Hekayə və problemlər', en: 'Story and problems' },
  creditsPeople: { az: 'Filosofların portretləri', en: 'Portraits of the philosophers' },
  creditsTitleScreen: { az: 'Ana səhifə — Yeddi Gümbəz, Şamaxı', en: 'Home page — Yeddi Gumbez, Shamakhi' },
  creditsDrawings: {
    az: 'Şəkillər tətbiqin içində saxlanılır. Hər hansı biri açılmasa, yerinə tətbiqin öz vektor illüstrasiyası göstərilir.',
    en: 'The images are stored inside the app. If one cannot load, the app shows its own vector illustration instead.',
  },
  ideasCount: { az: 'anlayış', en: 'ideas' },
}

/** One-line explanation of each school, shown when you tap it in the compass. */
export const schoolInfo: Record<School, Text> = {
  stoic: {
    az: 'Stoisizm. Səndən asılı olana diqqət et, olmayana görə əsəbləşmə. Epiktet, Mark Avreli, Seneka.',
    en: 'Stoicism. Focus on what depends on you; don’t be upset by what doesn’t. Epictetus, Marcus Aurelius, Seneca.',
  },
  utilitarian: {
    az: 'Utilitarizm. Ən yaxşı seçim ən çox insana ən çox fayda verəndir. Bentham, Mill.',
    en: 'Utilitarianism. The best choice brings the most good to the most people. Bentham, Mill.',
  },
  kantian: {
    az: 'Vəzifə etikası (deontologiya). Bəzi qaydalar nəticədən asılı olmayaraq doğrudur. Kant.',
    en: 'Duty ethics (deontology). Some rules are right regardless of results. Kant.',
  },
  existential: {
    az: 'Ekzistensializm. Sən hazır doğulmursan — seçimlərinlə özünü yaradırsan. Sartre, Camus, Kierkegaard.',
    en: 'Existentialism. You are not born finished — you create yourself through choices. Sartre, Camus, Kierkegaard.',
  },
  virtue: {
    az: 'Fəzilət etikası. Əsas sual: necə insan olmaq istəyirəm? Xarakter vərdişlə qurulur. Aristotel.',
    en: 'Virtue ethics. The key question: who do I want to be? Character is built by habit. Aristotle.',
  },
  buddhist: {
    az: 'Buddist mərhəmət. Əziyyətin kökü yapışmaqdadır; mərhəmət və diqqət onu yüngülləşdirir. Budda.',
    en: 'Buddhist compassion. Suffering is rooted in clinging; compassion and attention ease it. The Buddha.',
  },
}

/** Home page and the two sections: Play (Sına) and Learn (Öyrən). */
export const home = {
  playTitle: { az: 'Sına', en: 'Play' },
  playLede: {
    az: 'Fəlsəfəni yaşa: vəziyyətin içinə gir, seçim et, sonra seçiminin hansı düşüncəyə yaxın olduğunu gör.',
    en: 'Live philosophy: step into a situation, make a choice, then see which way of thinking it sits near.',
  },
  learnTitle: { az: 'Öyrən', en: 'Learn' },
  learnLede: {
    az: 'Məktəblər, filosoflar, Tanrı sualı və əsas anlayışlar — öz sürətinlə oxu və araşdır.',
    en: 'Schools, philosophers, the question of God and the key ideas — read and explore at your own pace.',
  },
  story: { az: 'Hekayə', en: 'Story' },
  storyHint: {
    az: 'Bir həftəlik gündəlik həyat: market, qonşular, çətin seçimlər. Hər seçim növbəti səhifəni dəyişir.',
    en: 'One week of everyday life: a shop, neighbours, hard choices. Every choice changes the next page.',
  },
  experiments: { az: 'Düşüncə təcrübələri', en: 'Thought experiments' },
  experimentsHint: {
    az: 'Fəlsəfənin məşhur sualları qısa hekayə kimi: trolley, Teseyin gəmisi, mağara… İstədiyini seç.',
    en: 'Philosophy’s famous puzzles as short stories: the trolley, Theseus’ ship, the cave… Pick any.',
  },
  start: { az: 'Başla →', en: 'Start →' },
  continue: { az: 'Davam et →', en: 'Continue →' },
  seeResult: { az: 'Nəticəyə bax →', en: 'See your result →' },
  restart: { az: 'Yenidən başla', en: 'Start over' },
  restartSure: { az: 'Əminsən? Bəli, sıfırla', en: 'Sure? Yes, reset' },
  finished: { az: 'Bitirdin', en: 'Finished' },
  youAreAt: { az: 'Qaldığın yer', en: 'You are at' },
  solvedOf: { az: 'baxılıb', en: 'done' },
  schoolsHint: { az: 'Düşüncənin böyük yolları', en: 'The great ways of thinking' },
  peopleHint: { az: 'Kim nə deyib, niyə vacibdir', en: 'Who said what, and why it matters' },
  godHint: {
    az: 'Tanrının varlığı və yoxluğu haqqında arqumentlər; teizmdən ateizmə qədər mövqelər, güclü və zəif tərəfləri ilə.',
    en: 'Arguments for and against the existence of God; views from theism to atheism, with their strengths and weaknesses.',
  },
  views: { az: 'mövqe', en: 'views' },
  args: { az: 'arqument', en: 'arguments' },
  timelineHint: { az: '2500 illik söhbət, ardıcıllıqla', en: '2,500 years of conversation, in order' },
  glossaryHint: { az: 'Çətin sözlər, sadə dildə', en: 'Hard words in plain language' },
  playHubLede: {
    az: 'İki yol var. Hər birinin öz irəliləyişi saxlanılır — birindən digərinə keçəndə heç nə itmir.',
    en: 'Two roads. Each keeps its own progress — switching between them loses nothing.',
  },
}

/** The question of God. */
export const god = {
  back: { az: '← Tanrı sualı', en: '← The question of God' },
  viewTag: { az: 'Mövqe', en: 'View' },
  forTag: { az: 'Lehinə arqument', en: 'Argument for' },
  againstTag: { az: 'Əleyhinə arqument', en: 'Argument against' },
  forShort: { az: 'Lehinə', en: 'For' },
  againstShort: { az: 'Əleyhinə', en: 'Against' },
  keyClaims: { az: 'Əsas iddialar', en: 'Key claims' },
  traditions: { az: 'Harada rast gəlinir', en: 'Where you find it' },
  thinkers: { az: 'Tanınmış müdafiəçilər', en: 'Well-known defenders' },
  onEvil: { az: 'Pislik problemi barədə nə deyir?', en: 'What does it say about evil?' },
  strengths: { az: 'Güclü tərəfləri', en: 'Strengths' },
  weaknesses: { az: 'Zəif tərəfləri', en: 'Weaknesses' },
  objections: { az: 'Tənqidlər', en: 'Objections' },
  replies: { az: 'Tənqidlərə cavablar', en: 'Replies to the objections' },
  relatedArgs: { az: 'Əlaqəli arqumentlər', en: 'Related arguments' },
  origin: { az: 'Haradan gəlir', en: 'Where it comes from' },
  structure: { az: 'Arqumentin quruluşu', en: 'The argument step by step' },
  plain: { az: 'Sadə dillə', en: 'In plain words' },
  think: { az: 'Bir az düşün', en: 'Think about it' },
  usedBy: { az: 'Bu arqumenti işlədən mövqelər', en: 'Views that use this argument' },
  supports: { az: 'Bu arqumentin dəstəklədiyi mövqelər', en: 'Views this argument supports' },
  voteQuestion: { az: 'Bu arqument səni inandırırmı?', en: 'Does this argument convince you?' },
  vote: {
    yes: { az: 'Bəli', en: 'Yes' },
    partly: { az: 'Qismən', en: 'Partly' },
    no: { az: 'Xeyr', en: 'No' },
  },
  votePrivate: {
    az: 'Cavabın yalnız bu cihazda saxlanılır və heç yerə göndərilmir. Fikrini istədiyin vaxt dəyişə bilərsən.',
    en: 'Your answer stays on this device and is sent nowhere. You can change your mind any time.',
  },
  yourMap: { az: 'Sənin xəritən', en: 'Your map' },
  yourMapNote: {
    az: 'Hansı arqumentlər səni inandırdı. Bu bir test deyil — sadəcə öz düşüncəni görmək üçün güzgüdür.',
    en: 'Which arguments convinced you. This is not a test — just a mirror for your own thinking.',
  },
  resetVotes: { az: 'Cavabları sil', en: 'Clear my answers' },
  prev: { az: '← Əvvəlki', en: '← Previous' },
  next: { az: 'Növbəti →', en: 'Next →' },
}

export function t(lang: Lang, text: Text): string {
  return text[lang]
}
