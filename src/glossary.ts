import type { Lang, Text } from './types'

/**
 * Words that get a tap-to-explain popup.
 *
 * `stems` are matched at the start of a word, so "utilitar" also catches
 * "utilitarizmdir", "utilitaristlər". Names are case-sensitive so that
 * e.g. "Mill" does not match "millət". Only the first match per paragraph
 * is highlighted, so text does not turn into a sea of underlines.
 */
export type GlossaryEntry = {
  id: string
  term: Text
  def: Text
  stems: { az: string[]; en: string[] }
  caseSensitive?: boolean
  /** Regex the text right after the stem must NOT start with. */
  notFollowedBy?: string
}

export const glossary: GlossaryEntry[] = [
  // ── ideas ──
  {
    id: 'utilitarianism',
    term: { az: 'Utilitarizm', en: 'Utilitarianism' },
    def: {
      az: 'Ən yaxşı seçim ən çox insana ən çox fayda verən, ən az ağrı yaradan seçimdir. Nəticəyə baxan etika. Bentham və Mill (XVIII–XIX əsr, İngiltərə).',
      en: 'The best choice is the one that brings the most good and the least pain to the most people. An ethics that looks at results. Bentham and Mill (18th–19th c., England).',
    },
    stems: { az: ['utilitar'], en: ['utilitarian'] },
  },
  {
    id: 'categorical',
    term: { az: 'Kateqorik imperativ', en: 'Categorical imperative' },
    def: {
      az: 'Kantın əsas qaydası: elə hərəkət et ki, bunu hamının etməsini istəyə biləsən. Həm də: insanı heç vaxt sadəcə alət kimi istifadə etmə.',
      en: 'Kant’s main rule: act only in a way you could want everyone to act. Also: never use a person merely as a tool.',
    },
    stems: { az: ['kateqorik imperativ'], en: ['categorical imperative'] },
  },
  {
    id: 'deontology',
    term: { az: 'Deontologiya', en: 'Deontology' },
    def: {
      az: 'Vəzifə etikası. Bəzi hərəkətlər nəticəsindən asılı olmayaraq doğru və ya yanlışdır — məsələn, yalan danışmaq. Ən məşhur nümayəndəsi Kantdır.',
      en: 'Duty ethics. Some acts are right or wrong regardless of their results — lying, for example. Its best-known voice is Kant.',
    },
    stems: { az: ['deontolog'], en: ['deontolog'] },
  },
  {
    id: 'stoicism',
    term: { az: 'Stoisizm', en: 'Stoicism' },
    def: {
      az: 'Qədim Yunan və Roma fəlsəfəsi. Əsas fikri: səndən asılı olanla (fikrin, hərəkətin) asılı olmayanı (başqaları, şans) ayır və sakitliyini qoru.',
      en: 'An ancient Greek and Roman philosophy. Core idea: separate what depends on you (your thoughts, actions) from what doesn’t (others, luck), and keep your calm.',
    },
    stems: { az: ['stoik', 'stoisizm'], en: ['stoic'] },
  },
  {
    id: 'existentialism',
    term: { az: 'Ekzistensializm', en: 'Existentialism' },
    def: {
      az: 'XX əsr fəlsəfəsi. İnsan hazır “mahiyyətlə” doğulmur — kim olacağını öz seçimləri ilə yaradır. Bu, azadlıq və məsuliyyət deməkdir. Sartre, Camus, Kierkegaard.',
      en: '20th-century philosophy. People aren’t born with a ready-made “essence” — they create who they are through choices. That means freedom and responsibility. Sartre, Camus, Kierkegaard.',
    },
    stems: { az: ['ekzistensial'], en: ['existential'] },
  },
  {
    id: 'virtue',
    term: { az: 'Fəzilət etikası', en: 'Virtue ethics' },
    def: {
      az: 'Aristoteldən gələn baxış: əsas sual “nə etməliyəm?” yox, “necə insan olmalıyam?” sualıdır. Fəzilət — cəsarət, dürüstlük, cömərdlik kimi vərdişə çevrilmiş yaxşı xüsusiyyətdir.',
      en: 'A view going back to Aristotle: the main question is not “what should I do?” but “who should I be?” A virtue is a good trait turned into habit — courage, honesty, generosity.',
    },
    stems: { az: ['fəzilət'], en: ['virtue ethics', 'virtue'] },
  },
  {
    id: 'golden-mean',
    term: { az: 'Qızıl orta', en: 'Golden mean' },
    def: {
      az: 'Aristotelin fikri: hər yaxşı xüsusiyyət iki ifratın ortasındadır. Cəsarət = qorxaqlıqla düşüncəsizliyin ortası. Cömərdlik = xəsisliklə israfçılığın ortası.',
      en: 'Aristotle’s idea: every good trait sits between two extremes. Courage is between cowardice and recklessness. Generosity is between stinginess and wastefulness.',
    },
    stems: { az: ['qızıl orta'], en: ['golden mean'] },
  },
  {
    id: 'buddhism',
    term: { az: 'Buddizm', en: 'Buddhism' },
    def: {
      az: 'Təxminən 2500 il əvvəl Hindistanda yaranıb. Əsas fikri: əziyyətin kökü yapışmaqdadır (qəzəbə, istəklərə, “mən”ə). Mərhəmət və diqqətlə bu düyün açıla bilər.',
      en: 'Began in India about 2,500 years ago. Core idea: suffering is rooted in clinging (to anger, desires, the “self”). Compassion and attention can loosen that knot.',
    },
    stems: { az: ['buddist', 'buddizm'], en: ['buddhis'] },
  },
  {
    id: 'absurd',
    term: { az: 'Absurd', en: 'The absurd' },
    def: {
      az: 'Camusun anlayışı: insan həyatda məna axtarır, dünya isə cavab vermir. Bu ziddiyyətə “absurd” deyilir. Camusa görə cavab ümidsizlik yox, buna baxmayaraq yaşamaqdır.',
      en: 'Camus’s idea: humans search for meaning, and the world gives no answer. That clash is “the absurd”. Camus’s response is not despair but living fully anyway.',
    },
    stems: { az: ['absurd'], en: ['absurd'] },
  },
  {
    id: 'trolley',
    term: { az: 'Vaqon problemi', en: 'Trolley problem' },
    def: {
      az: 'Məşhur düşüncə təcrübəsi (Philippa Foot, 1967): idarəsiz vaqon beş nəfərə doğru gedir. Dəyişdiricini çevirsən, bir nəfər ölür. Çevirməlisənmi?',
      en: 'A famous thought experiment (Philippa Foot, 1967): a runaway trolley heads for five people. Pull a switch and it kills one instead. Should you pull it?',
    },
    stems: { az: ['vaqon problem'], en: ['trolley problem'] },
  },
  {
    id: 'pluralism',
    term: { az: 'Dəyər plüralizmi', en: 'Value pluralism' },
    def: {
      az: 'Fikir ki, bir neçə həqiqi dəyər var (azadlıq, ədalət, mərhəmət) və onları həmişə bir ölçüyə gətirmək olmur. Bəzən biri digərinin hesabına seçilir.',
      en: 'The view that there are several genuine values (freedom, justice, mercy) that can’t always be ranked on one scale. Sometimes one has to give way to another.',
    },
    stems: { az: ['plüralizm'], en: ['pluralism'] },
  },
  {
    id: 'identity',
    term: { az: 'Eynilik problemi', en: 'Problem of identity' },
    def: {
      az: 'Bir şey (və ya insan) dəyişəndə nə zaman “eyni” qalır? Hissələri dəyişsə də, xatirələri dəyişsə də — “sən” nədir?',
      en: 'When does a thing (or a person) stay “the same” as it changes? If its parts change, or its memories — what is “you”?',
    },
    stems: { az: ['eynilik'], en: ['problem of identity'] },
  },
  {
    id: 'thought-experiment',
    term: { az: 'Düşüncə təcrübəsi', en: 'Thought experiment' },
    def: {
      az: 'Xəyali vəziyyət: “Belə olsaydı, nə edərdin?” Filosoflar bunu laboratoriya kimi istifadə edir — real həyatda yoxlamaq mümkün olmayan sualları sınamaq üçün.',
      en: 'An imagined situation: “What would you do if…?” Philosophers use it like a lab — to test questions you can’t test in real life.',
    },
    stems: { az: ['düşüncə təcrübə'], en: ['thought experiment'] },
  },
  {
    id: 'dana',
    term: { az: 'Dana', en: 'Dana' },
    def: {
      az: 'Buddizmdə “vermək, səxavət”. Qarşılıq gözləmədən, açıq ürəklə vermək.',
      en: 'In Buddhism, “giving, generosity” — giving with an open heart, expecting nothing back.',
    },
    stems: { az: ['dana'], en: ['dana'] },
    caseSensitive: true,
  },
  {
    id: 'zen',
    term: { az: 'Zen', en: 'Zen' },
    def: {
      az: 'Çin və Yaponiyada inkişaf edən buddizm məktəbi. Uzun nəzəriyyə yox — sadə, gündəlik hərəkətdə tam diqqətli olmaq.',
      en: 'A school of Buddhism that grew in China and Japan. Less theory — full attention in simple, everyday acts.',
    },
    stems: { az: ['Zen'], en: ['Zen'] },
    caseSensitive: true,
  },

  {
    id: 'theism',
    term: { az: 'Teizm', en: 'Theism' },
    def: {
      az: 'Dünyanı yaradan, onu saxlayan və onunla əlaqədə olan şəxsi bir Tanrıya inam. İslam, xristianlıq və yəhudilik teist dinlərdir.',
      en: 'Belief in a personal God who created the world, sustains it and is involved with it. Islam, Christianity and Judaism are theistic.',
    },
    stems: { az: ['teiz', 'teist'], en: ['theis', 'theist'] },
  },
  {
    id: 'deism',
    term: { az: 'Deizm', en: 'Deism' },
    def: {
      az: 'Tanrı dünyanı yaradıb, amma sonra ona qarışmır: möcüzə, vəhy yoxdur. Tanrı ağılla və təbiət vasitəsilə tanınır. Maarifçilik dövründə yayılıb.',
      en: 'God created the world but does not intervene: no miracles, no revelation. God is known through reason and nature. Popular in the Enlightenment.',
    },
    stems: { az: ['deiz', 'deist'], en: ['deis', 'deist'] },
  },
  {
    id: 'pantheism',
    term: { az: 'Panteizm', en: 'Pantheism' },
    def: {
      az: 'Tanrı ilə təbiət (kainat) eyni şeydir; dünyadan ayrı şəxsi Tanrı yoxdur. Ən məşhur nümayəndəsi Spinozadır.',
      en: 'God and nature (the universe) are the same; there is no personal God apart from the world. Its best-known voice is Spinoza.',
    },
    stems: { az: ['panteiz', 'panteist'], en: ['pantheis', 'pantheist'] },
  },
  {
    id: 'panentheism',
    term: { az: 'Panenteizm', en: 'Panentheism' },
    def: {
      az: '“Hər şey Tanrıdadır”: dünya Tanrının içindədir, amma Tanrı dünyadan böyükdür. Teizm ilə panteizmin ortası.',
      en: '“All is in God”: the world is within God, but God is greater than the world. A middle way between theism and pantheism.',
    },
    stems: { az: ['panenteiz', 'panenteist'], en: ['panentheis', 'panentheist'] },
  },
  {
    id: 'polytheism',
    term: { az: 'Politeizm', en: 'Polytheism' },
    def: {
      az: 'Çoxtanrılıq: hər biri öz sahəsinə cavabdeh olan bir neçə tanrıya inam. Qədim yunan və Roma dinləri buna nümunədir.',
      en: 'Belief in many gods, each responsible for a domain. Ancient Greek and Roman religions are examples.',
    },
    stems: { az: ['politeiz', 'politeist', 'çoxtanrılıq'], en: ['polytheis', 'polytheist'] },
  },
  {
    id: 'agnosticism',
    term: { az: 'Aqnostisizm', en: 'Agnosticism' },
    def: {
      az: 'Tanrının olub-olmadığını bilmirik — bəlkə də bilə bilmərik. Termini 1869-cu ildə Tomas Haksli işlədib.',
      en: 'We do not know whether God exists — perhaps we cannot know. Thomas Huxley coined the term in 1869.',
    },
    stems: { az: ['aqnosti'], en: ['agnostic'] },
  },
  {
    id: 'atheism',
    term: { az: 'Ateizm', en: 'Atheism' },
    def: {
      az: 'Tanrıya inanmamaq. Zəif ateizm: inanmaq üçün səbəb görməmək. Güclü ateizm: Tanrının olmadığını iddia etmək.',
      en: 'Not believing in God. Weak atheism: seeing no reason to believe. Strong atheism: claiming that God does not exist.',
    },
    stems: { az: ['ateiz', 'ateist'], en: ['atheis', 'atheist'] },
  },
  {
    id: 'fideism',
    term: { az: 'Fideizm', en: 'Fideism' },
    def: {
      az: 'İnanc ağılın sübutlarına əsaslanmır və əsaslanmalı da deyil — o, şəxsi bir qərar, “sıçrayış”dır. Paskal və Kyerkeqor bu fikrə yaxın idilər.',
      en: 'Faith does not and need not rest on rational proof — it is a personal decision, a “leap”. Pascal and Kierkegaard were close to this view.',
    },
    stems: { az: ['fideiz', 'fideist'], en: ['fideis', 'fideist'] },
  },
  {
    id: 'theodicy',
    term: { az: 'Teodiseya', en: 'Theodicy' },
    def: {
      az: 'Xeyirxah və qadir Tanrının şərə niyə yol verdiyini izah etmək cəhdi. Söz Leybnisdəndir (1710).',
      en: 'An attempt to explain why a good and powerful God allows evil. The word comes from Leibniz (1710).',
    },
    stems: { az: ['teodiseya'], en: ['theodic'] },
  },
  {
    id: 'evil',
    term: { az: 'Şər problemi', en: 'Problem of evil' },
    def: {
      az: 'Hər şeyə qadir, hər şeyi bilən və xeyirxah Tanrı varsa, dünyada niyə bu qədər əzab var? Tanrı inancına qarşı ən qədim arqument.',
      en: 'If an all-powerful, all-knowing, good God exists, why is there so much suffering? The oldest argument against belief in God.',
    },
    stems: { az: ['şər problem'], en: ['problem of evil'] },
  },
  {
    id: 'occam',
    term: { az: 'Okkamın ülgücü', en: 'Occam’s razor' },
    def: {
      az: 'Prinsip: lazım olmadan varlıqları çoxaltma. İki izahdan daha az fərziyyə tələb edəni seç. Adını XIV əsr rahibi Okkamlı Uilyamdan alıb.',
      en: 'The principle: do not multiply entities without need. Of two explanations, prefer the one with fewer assumptions. Named after the 14th-century friar William of Ockham.',
    },
    stems: { az: ['Okkam'], en: ['Occam', 'Ockham'] },
    caseSensitive: true,
  },
  {
    id: 'kalam',
    term: { az: 'Kəlam arqumenti', en: 'Kalam argument' },
    def: {
      az: 'Başlanğıcı olan hər şeyin səbəbi var; kainatın başlanğıcı var; deməli, onun səbəbi var. Adı İslam ilahiyyatının “kəlam” elmindən gəlir.',
      en: 'Whatever begins to exist has a cause; the universe began to exist; so it has a cause. Named after “kalam”, a discipline of Islamic theology.',
    },
    stems: { az: ['kəlam arqument', 'kəlam alim'], en: ['kalam'] },
  },
  {
    id: 'necessary',
    term: { az: 'Zəruri varlıq (Vacibül-vücud)', en: 'Necessary being' },
    def: {
      az: 'Olmaya bilməyən, varlığı heç nədən asılı olmayan varlıq. İbn Sina Tanrını belə tərif edirdi; “mümkün varlıq”ın əksidir.',
      en: 'A being that cannot fail to exist and depends on nothing. Avicenna defined God this way; the opposite of a “contingent” being.',
    },
    stems: { az: ['zəruri varlıq', 'Vacibül-vücud'], en: ['necessary being', 'Necessary Existent'] },
  },
  {
    id: 'multiverse',
    term: { az: 'Multiverse (çoxlu kainat)', en: 'Multiverse' },
    def: {
      az: 'Bizim kainatımızdan başqa saysız kainatın ola biləcəyi fərziyyəsi. Hələ müşahidə ilə təsdiqlənməyib.',
      en: 'The hypothesis that countless universes besides ours may exist. Not yet confirmed by observation.',
    },
    stems: { az: ['multiverse'], en: ['multiverse'] },
  },
  {
    id: 'anthropic',
    term: { az: 'Antropik prinsip', en: 'Anthropic principle' },
    def: {
      az: 'Kainatı yalnız həyata uyğun olduğu üçün müşahidə edə bilirik — başqa cür olsaydı, biz olmazdıq.',
      en: 'We can only observe a universe that permits life — if it did not, we would not be here.',
    },
    stems: { az: ['antropik prinsip'], en: ['anthropic principle'] },
  },
  {
    id: 'euthyphro',
    term: { az: 'Evtifron dilemması', en: 'Euthyphro dilemma' },
    def: {
      az: 'Platonun sualı: bir şey Tanrı istədiyi üçün yaxşıdır, yoxsa yaxşı olduğu üçün Tanrı onu istəyir?',
      en: 'Plato’s question: is something good because God wills it, or does God will it because it is good?',
    },
    stems: { az: ['Evtifron'], en: ['Euthyphro'] },
    caseSensitive: true,
  },

  // ── people ──
  {
    id: 'anselm',
    term: { az: 'Kenterberili Anselm (1033–1109)', en: 'Anselm of Canterbury (1033–1109)' },
    def: {
      az: 'Orta əsr filosofu və arxiyepiskop. Ontoloji arqumentin müəllifi.',
      en: 'Medieval philosopher and archbishop. Author of the ontological argument.',
    },
    stems: { az: ['Anselm'], en: ['Anselm'] },
    caseSensitive: true,
  },
  {
    id: 'ghazali',
    term: { az: 'Əbu Hamid Qəzali (1058–1111)', en: 'Al-Ghazali (1058–1111)' },
    def: {
      az: 'İslam ilahiyyatçısı və filosof. Kəlam arqumentini müdafiə etdi, filosofları tənqid etdi, sonra sufizmə üz tutdu.',
      en: 'Islamic theologian and philosopher. Defended the kalam argument, criticised the philosophers, then turned to Sufism.',
    },
    stems: { az: ['Qəzali'], en: ['Ghazali'] },
    caseSensitive: true,
  },
  {
    id: 'aquinas',
    term: { az: 'Foma Akvinalı (1225–1274)', en: 'Thomas Aquinas (1225–1274)' },
    def: {
      az: 'Orta əsrin ən məşhur xristian filosofu. İnanc ilə ağılı birləşdirdi, Tanrı üçün “Beş yol” təklif etdi.',
      en: 'The most famous Christian philosopher of the Middle Ages. Joined faith and reason; offered the “Five Ways” to God.',
    },
    stems: { az: ['Akvinalı'], en: ['Aquinas'] },
    caseSensitive: true,
  },
  {
    id: 'spinoza',
    term: { az: 'Barux Spinoza (1632–1677)', en: 'Baruch Spinoza (1632–1677)' },
    def: {
      az: 'Holland filosofu. “Tanrı, yəni Təbiət” — panteizmin ən məşhur forması.',
      en: 'Dutch philosopher. “God, or Nature” — the best-known form of pantheism.',
    },
    stems: { az: ['Spinoza'], en: ['Spinoza'] },
    caseSensitive: true,
  },
  {
    id: 'pascal',
    term: { az: 'Blez Paskal (1623–1662)', en: 'Blaise Pascal (1623–1662)' },
    def: {
      az: 'Fransız riyaziyyatçı və filosof. Ehtimal nəzəriyyəsinin banilərindən; “Paskalın mərcəsi”nin müəllifi.',
      en: 'French mathematician and philosopher. A founder of probability theory; author of “Pascal’s wager”.',
    },
    stems: { az: ['Paskal'], en: ['Pascal'] },
    caseSensitive: true,
  },
  {
    id: 'aristotle',
    term: { az: 'Aristotel (e.ə. 384–322)', en: 'Aristotle (384–322 BC)' },
    def: {
      az: 'Qədim Yunan filosofu, Platonun şagirdi, Makedoniyalı İsgəndərin müəllimi. Fəzilət etikasının və “qızıl orta” fikrinin müəllifi.',
      en: 'Ancient Greek philosopher, student of Plato, teacher of Alexander the Great. Father of virtue ethics and the “golden mean”.',
    },
    stems: { az: ['Aristotel'], en: ['Aristotle'] },
    caseSensitive: true,
  },
  {
    id: 'kant',
    term: { az: 'İmmanuel Kant (1724–1804)', en: 'Immanuel Kant (1724–1804)' },
    def: {
      az: 'Alman filosofu. Əxlaqın nəticəyə yox, vəzifəyə və hamıya aid ola bilən qaydalara əsaslandığını deyirdi. Bütün ömrünü Königsberq şəhərində keçirib.',
      en: 'German philosopher. Argued that morality rests on duty and on rules that could apply to everyone, not on results. Lived his whole life in Königsberg.',
    },
    stems: { az: ['Kant'], en: ['Kant'] },
    caseSensitive: true,
  },
  {
    id: 'mill',
    term: { az: 'Con Stüart Mill (1806–1873)', en: 'John Stuart Mill (1806–1873)' },
    def: {
      az: 'İngilis filosofu. Utilitarizmi insani dildə izah etdi, azad söz və qadın hüquqları uğrunda yazdı.',
      en: 'English philosopher. Explained utilitarianism in a humane voice and wrote for free speech and women’s rights.',
    },
    stems: { az: ['Mill'], en: ['Mill'] },
    caseSensitive: true,
    notFollowedBy: 'ət|i\\b|ion',
  },
  {
    id: 'bentham',
    term: { az: 'Ceremi Bentham (1748–1832)', en: 'Jeremy Bentham (1748–1832)' },
    def: {
      az: 'İngilis filosofu, utilitarizmin banisi. Əxlaqı “ən çox insan üçün ən böyük xoşbəxtlik” ilə ölçməyi təklif etdi.',
      en: 'English philosopher, founder of utilitarianism. Proposed measuring morality by “the greatest happiness of the greatest number”.',
    },
    stems: { az: ['Bentham'], en: ['Bentham'] },
    caseSensitive: true,
  },
  {
    id: 'sartre',
    term: { az: 'Jan-Pol Sartr (1905–1980)', en: 'Jean-Paul Sartre (1905–1980)' },
    def: {
      az: 'Fransız filosofu və yazıçısı, ekzistensializmin əsas siması. “Varlıq mahiyyətdən əvvəl gəlir” — yəni əvvəl varsan, sonra kim olduğunu seçirsən.',
      en: 'French philosopher and writer, the leading face of existentialism. “Existence precedes essence” — you exist first, then choose who you are.',
    },
    stems: { az: ['Sartre', 'Sartr'], en: ['Sartre'] },
    caseSensitive: true,
  },
  {
    id: 'camus',
    term: { az: 'Alber Kamyu (1913–1960)', en: 'Albert Camus (1913–1960)' },
    def: {
      az: 'Fransız yazıçısı və filosofu, Nobel mükafatçısı. “Absurd” anlayışını və “Sizif mifi” essesini yazıb.',
      en: 'French writer and philosopher, Nobel laureate. Developed the idea of “the absurd” and wrote “The Myth of Sisyphus”.',
    },
    stems: { az: ['Camus', 'Kamyu'], en: ['Camus'] },
    caseSensitive: true,
  },
  {
    id: 'kierkegaard',
    term: { az: 'Søren Kierkegaard (1813–1855)', en: 'Søren Kierkegaard (1813–1855)' },
    def: {
      az: 'Danimarkalı filosof, ekzistensializmin sələfi. Seçim, qorxu və şəxsi məsuliyyət haqqında yazıb.',
      en: 'Danish philosopher, forerunner of existentialism. Wrote about choice, anxiety and personal responsibility.',
    },
    stems: { az: ['Kierkegaard'], en: ['Kierkegaard'] },
    caseSensitive: true,
  },
  {
    id: 'epictetus',
    term: { az: 'Epiktet (təx. 50–135)', en: 'Epictetus (c. 50–135)' },
    def: {
      az: 'Stoik filosof. Əvvəl qul olub, sonra azad olub məktəb açıb. Əsas dərsi: nə səndən asılıdır, nə asılı deyil — bunu ayırd et.',
      en: 'Stoic philosopher. Born a slave, later freed, he opened a school. His main lesson: know what depends on you and what doesn’t.',
    },
    stems: { az: ['Epiktet'], en: ['Epictetus'] },
    caseSensitive: true,
  },
  {
    id: 'marcus',
    term: { az: 'Mark Avreli (121–180)', en: 'Marcus Aurelius (121–180)' },
    def: {
      az: 'Roma imperatoru və stoik filosof. Özü üçün yazdığı gündəlik “Özümlə söhbət” (Meditasiyalar) bu gün də oxunur.',
      en: 'Roman emperor and Stoic philosopher. The private journal he wrote for himself — the “Meditations” — is still widely read.',
    },
    stems: { az: ['Mark Avreli'], en: ['Marcus Aurelius'] },
    caseSensitive: true,
  },
  {
    id: 'buddha',
    term: { az: 'Budda (təx. e.ə. V əsr)', en: 'The Buddha (c. 5th c. BC)' },
    def: {
      az: 'Siddhartha Qautama. Hindistanda yaşamış şahzadə, sarayı tərk edib əziyyətin səbəbini axtarıb. Buddizmin banisi.',
      en: 'Siddhartha Gautama. A prince in ancient India who left his palace to seek the cause of suffering. Founder of Buddhism.',
    },
    stems: { az: ['Budda'], en: ['Buddha'] },
    caseSensitive: true,
  },
  {
    id: 'berlin',
    term: { az: 'Isaiah Berlin (1909–1997)', en: 'Isaiah Berlin (1909–1997)' },
    def: {
      az: 'Riqada doğulmuş Britaniya filosofu. Azadlığın iki növü və dəyərlərin toqquşması haqqında yazıb.',
      en: 'British philosopher born in Riga. Wrote about two kinds of liberty and how values can clash.',
    },
    stems: { az: ['Isaiah Berlin', 'Berlin'], en: ['Isaiah Berlin', 'Berlin'] },
    caseSensitive: true,
  },
  {
    id: 'plato',
    term: { az: 'Platon (e.ə. 427–347)', en: 'Plato (427–347 BC)' },
    def: {
      az: 'Qədim Yunan filosofu, Sokratın şagirdi. Afinada Akademiya adlı məktəb qurub. Mağara və Gigesin üzüyü hekayələri onun “Dövlət” əsərindədir.',
      en: 'Ancient Greek philosopher, student of Socrates. Founded the Academy in Athens. The cave and the ring of Gyges come from his “Republic”.',
    },
    stems: { az: ['Platon'], en: ['Plato'] },
    caseSensitive: true,
  },
  {
    id: 'rawls',
    term: { az: 'Con Rouls (1921–2002)', en: 'John Rawls (1921–2002)' },
    def: {
      az: 'Amerikalı filosof. “Ədalət nəzəriyyəsi” kitabında “cəhalət pərdəsi” düşüncə təcrübəsini təklif etdi.',
      en: 'American philosopher. In “A Theory of Justice” he proposed the “veil of ignorance” thought experiment.',
    },
    stems: { az: ['Rawls', 'Rouls'], en: ['Rawls'] },
    caseSensitive: true,
  },
  {
    id: 'nozick',
    term: { az: 'Robert Nozik (1938–2002)', en: 'Robert Nozick (1938–2002)' },
    def: {
      az: 'Amerikalı filosof. “Təcrübə maşını” düşüncə təcrübəsi ilə sual verdi: bizə yalnız xoş hisslər lazımdır, yoxsa real həyat?',
      en: 'American philosopher. His “experience machine” asks: do we only want good feelings, or a real life?',
    },
    stems: { az: ['Nozick', 'Nozik'], en: ['Nozick'] },
    caseSensitive: true,
  },
  {
    id: 'singer',
    term: { az: 'Piter Singer (1946)', en: 'Peter Singer (b. 1946)' },
    def: {
      az: 'Avstraliyalı filosof. Uzaqdakı insanlara və heyvanlara qarşı borclarımız haqqında yazır. “Effektiv xeyriyyəçilik” hərəkatına təsir edib.',
      en: 'Australian philosopher. Writes about our duties to distant people and to animals. Inspired the “effective altruism” movement.',
    },
    stems: { az: ['Singer'], en: ['Singer'] },
    caseSensitive: true,
  },
  {
    id: 'heraclitus',
    term: { az: 'Heraklit (təx. e.ə. 535–475)', en: 'Heraclitus (c. 535–475 BC)' },
    def: {
      az: 'Qədim Yunan filosofu. “Eyni çaya iki dəfə girmək olmaz” — hər şey daim dəyişir.',
      en: 'Ancient Greek philosopher. “You cannot step into the same river twice” — everything is always changing.',
    },
    stems: { az: ['Heraklit'], en: ['Heraclitus'] },
    caseSensitive: true,
  },
  {
    id: 'hierocles',
    term: { az: 'Hierokl (II əsr)', en: 'Hierocles (2nd c.)' },
    def: {
      az: 'Stoik filosof. İnsanı iç-içə dairələrin mərkəzində təsvir edirdi: sən, ailə, qonşular, bütün bəşəriyyət.',
      en: 'Stoic philosopher. Pictured each person at the centre of nested circles: self, family, neighbours, all humanity.',
    },
    stems: { az: ['Hierokl'], en: ['Hierocles'] },
    caseSensitive: true,
  },
  {
    id: 'plutarch',
    term: { az: 'Plutarx (təx. 46–120)', en: 'Plutarch (c. 46–120)' },
    def: {
      az: 'Yunan tarixçisi və filosofu. Teseusun gəmisi hekayəsini ilk yazanlardandır.',
      en: 'Greek historian and philosopher. One of the first to tell the story of the ship of Theseus.',
    },
    stems: { az: ['Plutarch', 'Plutarx'], en: ['Plutarch'] },
    caseSensitive: true,
  },
  {
    id: 'hobbes',
    term: { az: 'Tomas Hobbs (1588–1679)', en: 'Thomas Hobbes (1588–1679)' },
    def: {
      az: 'İngilis filosofu. Teseusun gəmisi tapmacasına “köhnə taxtalardan yığılan gəmi” sualını əlavə edib.',
      en: 'English philosopher. Added the twist of a second ship rebuilt from the old planks to the Theseus puzzle.',
    },
    stems: { az: ['Hobbes', 'Hobbs'], en: ['Hobbes'] },
    caseSensitive: true,
  },
]

export type Segment = string | { text: string; entry: GlossaryEntry }

const escape = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

const matchers: Record<Lang, { entry: GlossaryEntry; re: RegExp }[]> = {
  az: [],
  en: [],
}
for (const lang of ['az', 'en'] as const) {
  for (const entry of glossary) {
    const stems = entry.stems[lang]
    if (!stems.length) continue
    const body = stems.map(escape).join('|')
    const guard = entry.notFollowedBy ? `(?!${entry.notFollowedBy})` : ''
    matchers[lang].push({
      entry,
      // start of a word, the stem, then the rest of the word (suffixes)
      re: new RegExp(`(?<![\\p{L}\\p{M}])(?:${body})${guard}[\\p{L}\\p{M}]*`, entry.caseSensitive ? 'u' : 'iu'),
    })
  }
}

/** Splits a paragraph into plain text and glossary terms (first hit per term). */
export function segment(text: string, lang: Lang, skip: Set<string> = new Set()): Segment[] {
  const hits: { start: number; end: number; entry: GlossaryEntry }[] = []
  for (const { entry, re } of matchers[lang]) {
    if (skip.has(entry.id)) continue
    const found = re.exec(text)
    if (!found) continue
    const start = found.index
    const end = start + found[0].length
    if (hits.some((hit) => start < hit.end && end > hit.start)) continue
    hits.push({ start, end, entry })
  }
  if (!hits.length) return [text]
  hits.sort((a, b) => a.start - b.start)
  const out: Segment[] = []
  let cursor = 0
  for (const hit of hits) {
    if (hit.start > cursor) out.push(text.slice(cursor, hit.start))
    out.push({ text: text.slice(hit.start, hit.end), entry: hit.entry })
    cursor = hit.end
  }
  if (cursor < text.length) out.push(text.slice(cursor))
  return out
}

export function findEntry(id: string): GlossaryEntry | undefined {
  return glossary.find((entry) => entry.id === id)
}
