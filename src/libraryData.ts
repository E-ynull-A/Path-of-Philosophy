import type { IconKey } from './art'
import type { School, Text } from './types'

/*
 * The library: schools of thought and the people behind them.
 * Every text is short on purpose — enough to get curious, with one thing to
 * read next. Glossary words inside are explained automatically.
 */

export type LibSchoolId = School | 'knowledge' | 'justice' | 'eastern' | 'religion'

export type LibSchool = {
  id: LibSchoolId
  name: Text
  tagline: Text
  question: Text
  ideas: Text[]
  daily: Text
  thinkers: string[]
  /** Is this one of the six schools scored in the game? */
  inGame: boolean
}

export type Era = 'ancient' | 'medieval' | 'modern' | 'contemporary'

export type Philosopher = {
  id: string
  name: Text
  years: Text
  /** Birth year for sorting (negative = BC). */
  born: number
  era: Era
  place: Text
  schools: LibSchoolId[]
  idea: Text
  quote?: Text
  hook: Text
  read: Text
}

export const eras: { id: Era; name: Text; span: Text }[] = [
  { id: 'ancient', name: { az: 'Qədim dövr', en: 'Ancient' }, span: { az: 'e.ə. VI əsr — b.e. V əsr', en: '6th c. BC — 5th c. AD' } },
  { id: 'medieval', name: { az: 'Orta əsrlər', en: 'Middle Ages' }, span: { az: 'V — XV əsr', en: '5th — 15th c.' } },
  { id: 'modern', name: { az: 'Yeni dövr', en: 'Early modern & modern' }, span: { az: 'XVI — XIX əsr', en: '16th — 19th c.' } },
  { id: 'contemporary', name: { az: 'Müasir dövr', en: 'Contemporary' }, span: { az: 'XX əsr — bu gün', en: '20th c. — today' } },
]

export const libSchools: LibSchool[] = [
  {
    id: 'stoic',
    inGame: true,
    name: { az: 'Stoisizm', en: 'Stoicism' },
    tagline: {
      az: 'Səndən asılı olana diqqət et, olmayana görə əzab çəkmə.',
      en: 'Focus on what depends on you; don’t suffer over what doesn’t.',
    },
    question: { az: 'Bunu dəyişə bilərəmmi?', en: 'Can I change this?' },
    ideas: [
      { az: 'Dünyanı ikiyə böl: nəzarət etdiyin (fikrin, hərəkətin) və etmədiyin (başqaları, şans).', en: 'Split the world in two: what you control (your thoughts, actions) and what you don’t (others, luck).' },
      { az: 'Bizi hadisələr yox, onlar haqqında fikirlərimiz narahat edir.', en: 'Events don’t disturb us — our opinions about them do.' },
      { az: 'Fəzilət — müdriklik, cəsarət, ədalət, ölçülülük — yeganə həqiqi sərvətdir.', en: 'Virtue — wisdom, courage, justice, moderation — is the only true wealth.' },
    ],
    daily: {
      az: 'İmtahan nəticəsini gözləyirsən. Nəticə artıq səndən asılı deyil — amma bu axşam necə keçirəcəyin asılıdır.',
      en: 'You’re waiting for exam results. The result no longer depends on you — how you spend this evening does.',
    },
    thinkers: ['epictetus', 'seneca', 'marcus'],
  },
  {
    id: 'utilitarian',
    inGame: true,
    name: { az: 'Utilitarizm', en: 'Utilitarianism' },
    tagline: {
      az: 'Ən yaxşı seçim — ən çox insana ən çox fayda verəndir.',
      en: 'The best choice brings the most good to the most people.',
    },
    question: { az: 'Bundan sonra dünyada ağrı azalacaqmı?', en: 'Will there be less pain in the world after this?' },
    ideas: [
      { az: 'Əxlaqı nəticə ilə ölç: xoşbəxtlik artır, yoxsa azalır?', en: 'Judge morality by results: does happiness go up or down?' },
      { az: 'Hər kəs bir nəfər sayılır — nə çox, nə az.', en: 'Everyone counts as one — no more, no less.' },
      { az: 'Heyvanların da ağrısı var, onlar da hesaba daxildir.', en: 'Animals feel pain too, so they count as well.' },
    ],
    daily: {
      az: 'Qrup layihəsində kimin hansı işi görəcəyini seçirsən — hamıya eyni yox, nəticəni ən yaxşı edəcək şəkildə bölürsən.',
      en: 'Splitting tasks in a group project not equally, but in the way that gives the best result for everyone.',
    },
    thinkers: ['bentham', 'mill', 'singer'],
  },
  {
    id: 'kantian',
    inGame: true,
    name: { az: 'Vəzifə etikası', en: 'Duty ethics' },
    tagline: {
      az: 'Bəzi şeylər nəticəsindən asılı olmayaraq doğru və ya yanlışdır.',
      en: 'Some things are right or wrong whatever the outcome.',
    },
    question: { az: 'Hamı belə etsə, nə olar?', en: 'What if everyone did this?' },
    ideas: [
      { az: 'Elə hərəkət et ki, bunu hamının etməsini istəyə biləsən (kateqorik imperativ).', en: 'Act only in a way you could want everyone to act (the categorical imperative).' },
      { az: 'İnsanı heç vaxt sadəcə alət kimi istifadə etmə.', en: 'Never use a person merely as a tool.' },
      { az: 'Niyyət vacibdir: düzgün işi düzgün səbəbə görə et.', en: 'Intention matters: do the right thing for the right reason.' },
    ],
    daily: {
      az: 'Dostun “bir dəfəlik” ev tapşırığını köçürməyə icazə istəyir. “Hamı belə etsə?” — tapşırığın mənası qalmazdı.',
      en: 'A friend asks to copy your homework “just once”. If everyone did, homework would lose its point.',
    },
    thinkers: ['kant'],
  },
  {
    id: 'existential',
    inGame: true,
    name: { az: 'Ekzistensializm', en: 'Existentialism' },
    tagline: {
      az: 'Sən hazır doğulmursan — seçimlərinlə özünü yaradırsan.',
      en: 'You are not born finished — you create yourself through choices.',
    },
    question: { az: 'Bu seçim mənimdir, yoxsa başqalarının gözləntisi?', en: 'Is this choice mine, or someone else’s expectation?' },
    ideas: [
      { az: 'Varlıq mahiyyətdən əvvəl gəlir: əvvəl varsan, sonra kim olacağını seçirsən.', en: 'Existence precedes essence: you exist first, then choose who to be.' },
      { az: 'Azadlıq ağırdır, çünki bəhanə qoymur.', en: 'Freedom is heavy because it leaves no excuses.' },
      { az: 'Dünya hazır məna vermir — mənanı biz yaradırıq (absurd).', en: 'The world gives no ready meaning — we create it (the absurd).' },
    ],
    daily: {
      az: 'Hamı “həkim ol” deyir, sən isə rəssamlığı sevirsən. Seçim çətindir — amma onu sənin yerinə heç kim edə bilməz.',
      en: 'Everyone says “become a doctor”, but you love painting. The choice is hard — and nobody can make it for you.',
    },
    thinkers: ['kierkegaard', 'nietzsche', 'sartre', 'beauvoir', 'camus'],
  },
  {
    id: 'virtue',
    inGame: true,
    name: { az: 'Fəzilət etikası', en: 'Virtue ethics' },
    tagline: {
      az: 'Əsas sual “nə edim?” yox, “necə insan olum?” sualıdır.',
      en: 'The key question is not “what should I do?” but “who should I be?”',
    },
    question: { az: 'Yaxşı insan burada necə davranardı?', en: 'What would a good person do here?' },
    ideas: [
      { az: 'Xarakter vərdişlə qurulur — idmançının əzələsi kimi.', en: 'Character is built by habit — like an athlete’s muscle.' },
      { az: 'Hər fəzilət iki ifratın ortasındadır (qızıl orta).', en: 'Every virtue sits between two extremes (the golden mean).' },
      { az: 'Məqsəd — çiçəklənən, dolu həyat (evdemoniya).', en: 'The goal is a flourishing, full life (eudaimonia).' },
    ],
    daily: {
      az: 'Dostuna acı həqiqəti deməlisən. Çox sərt olsan — kobudluq, heç deməsən — qorxaqlıq. Ortası: dürüst və mehriban.',
      en: 'You must tell a friend a hard truth. Too harsh is rude, silence is cowardly. The middle: honest and kind.',
    },
    thinkers: ['socrates', 'aristotle', 'confucius', 'tusi', 'nizami'],
  },
  {
    id: 'buddhist',
    inGame: true,
    name: { az: 'Buddist mərhəmət', en: 'Buddhist compassion' },
    tagline: {
      az: 'Əziyyətin kökü yapışmaqdadır; mərhəmət onu yüngülləşdirir.',
      en: 'Suffering is rooted in clinging; compassion eases it.',
    },
    question: { az: 'Burada kim əziyyət çəkir və mən nəyə yapışıram?', en: 'Who is suffering here, and what am I clinging to?' },
    ideas: [
      { az: 'Həyatda əziyyət var və onun səbəbi var — istək və yapışma.', en: 'Life contains suffering, and it has a cause — craving and clinging.' },
      { az: 'Hər şey dəyişir; heç nə əbədi deyil.', en: 'Everything changes; nothing is permanent.' },
      { az: 'Diqqət və mərhəmət — həm özünə, həm başqasına — yoldur.', en: 'Attention and compassion — for yourself and others — are the path.' },
    ],
    daily: {
      az: 'Kimsə səni sosial şəbəkədə təhqir edir. Cavab yazmaq əvəzinə bir dəqiqə nəfəs alıb qəzəbinə baxırsan.',
      en: 'Someone insults you online. Instead of replying, you breathe for a minute and look at your anger.',
    },
    thinkers: ['buddha'],
  },
  {
    id: 'knowledge',
    inGame: false,
    name: { az: 'Bilik və gerçəklik', en: 'Knowledge and reality' },
    tagline: {
      az: 'Nəyi həqiqətən bilirik? Gördüyümüz dünya gerçəkdirmi?',
      en: 'What do we really know? Is the world we see real?',
    },
    question: { az: 'Bunu haradan bilirəm?', en: 'How do I know this?' },
    ideas: [
      { az: 'Hisslər bizi aldada bilər — Platonun mağarası.', en: 'The senses can deceive us — Plato’s cave.' },
      { az: 'Şübhə də yoldur: Dekart hər şeyə şübhə edib bir əmin nöqtə tapdı.', en: 'Doubt is a path: Descartes doubted everything to find one certain point.' },
      { az: 'Bəlkə bilik təcrübədən gəlir (Hume), bəlkə ağıldan (Dekart)?', en: 'Does knowledge come from experience (Hume) or from reason (Descartes)?' },
    ],
    daily: {
      az: 'İnternetdə şok xəbər görürsən. Paylaşmazdan əvvəl soruşursan: bunu haradan bilirlər?',
      en: 'You see shocking news online. Before sharing, you ask: how do they know this?',
    },
    thinkers: ['plato', 'avicenna', 'descartes', 'hume'],
  },
  {
    id: 'justice',
    inGame: false,
    name: { az: 'Ədalət və cəmiyyət', en: 'Justice and society' },
    tagline: {
      az: 'Ədalətli cəmiyyət necə qurulur? Dövlət nə üçün lazımdır?',
      en: 'How is a just society built? Why do we need a state at all?',
    },
    question: { az: 'Kim olacağımı bilməsəydim, hansı qaydaları seçərdim?', en: 'If I didn’t know who I’d be, which rules would I choose?' },
    ideas: [
      { az: 'İctimai müqavilə: insanlar təhlükəsizlik üçün bəzi azadlıqlardan imtina edir.', en: 'Social contract: people give up some freedoms for safety.' },
      { az: 'Cəhalət pərdəsi: qaydaları kim olacağını bilmədən seç.', en: 'Veil of ignorance: choose rules without knowing who you will be.' },
      { az: 'Şərin bayağılığı: böyük pislikləri çox vaxt düşünməyən adi insanlar edir.', en: 'The banality of evil: great harm is often done by ordinary people who stop thinking.' },
    ],
    daily: {
      az: 'Sinifdə növbətçilik qrafiki qurursan. Ən zəif, ən yeni şagirdin yerində olsaydın, hansı qaydanı istərdin?',
      en: 'Making a class duty rota. If you were the newest, weakest student, which rule would you want?',
    },
    thinkers: ['farabi', 'hobbes', 'arendt', 'rawls'],
  },
  {
    id: 'eastern',
    inGame: false,
    name: { az: 'Şərq və Azərbaycan mütəfəkkirləri', en: 'Islamic-era and Azerbaijani thinkers' },
    tagline: {
      az: 'Yunan fəlsəfəsini qoruyan, inkişaf etdirən və Avropaya ötürən böyük ənənə.',
      en: 'The great tradition that kept, developed and passed Greek philosophy on to Europe.',
    },
    question: { az: 'Ağıl, iman və əxlaq bir yerdə necə yaşaya bilər?', en: 'How can reason, faith and ethics live together?' },
    ideas: [
      { az: 'Bağdad, Buxara, Marağa kimi elm mərkəzlərində Aristotel və Platon tərcümə edilib şərh olunurdu.', en: 'In centres like Baghdad, Bukhara and Maragha, Aristotle and Plato were translated and explained.' },
      { az: 'Fəlsəfə, tibb, astronomiya və poeziya bir-birindən ayrılmırdı.', en: 'Philosophy, medicine, astronomy and poetry were not kept apart.' },
      { az: 'Əxlaq tərbiyə ilə dəyişə bilər — fərd, ailə və cəmiyyət üçün.', en: 'Character can be shaped by education — for the person, the family and society.' },
    ],
    daily: {
      az: 'Nizaminin poemalarında hökmdarlar ədalət haqqında filosoflarla danışır — bu suallar bu gün də siyasətdə səslənir.',
      en: 'In Nizami’s poems rulers discuss justice with philosophers — the same questions echo in politics today.',
    },
    thinkers: ['farabi', 'avicenna', 'bahmanyar', 'nizami', 'tusi'],
  },
  {
    id: 'religion',
    inGame: false,
    name: { az: 'Din fəlsəfəsi', en: 'Philosophy of religion' },
    tagline: {
      az: 'Tanrı varmı? İnanc və ağıl necə yola gedir? Şər niyə var?',
      en: 'Does God exist? How do faith and reason get along? Why is there evil?',
    },
    question: { az: 'Bu inancın səbəbləri nədir — və onlar kifayətdirmi?', en: 'What are the reasons for this belief — and are they enough?' },
    ideas: [
      { az: 'Tanrının varlığı lehinə və əleyhinə arqumentlər: kəlam, ontoloji, dizayn, şər problemi.', en: 'Arguments for and against God: kalam, ontological, design, the problem of evil.' },
      { az: 'İnanc ilə ağılın münasibəti: biri digərinə dayaq ola bilərmi, yoxsa ayrı yollardır?', en: 'Faith and reason: can one support the other, or are they separate paths?' },
      { az: 'Teizm, deizm, panteizm, aqnostisizm, ateizm — fərqli mövqelər və onların məntiqi.', en: 'Theism, deism, pantheism, agnosticism, atheism — different views and their logic.' },
    ],
    daily: {
      az: 'Dostunla “Tanrı varmı?” mövzusunda mübahisə edirsən. Kimin haqlı olduğundan əvvəl soruşmaq olar: hər birimizin əsl səbəbləri nədir?',
      en: 'You argue with a friend about whether God exists. Before asking who is right, ask: what are our real reasons?',
    },
    thinkers: ['anselm', 'ghazali', 'aquinas', 'spinoza', 'pascal', 'kierkegaard'],
  },
]

export const philosophers: Philosopher[] = [
  {
    id: 'anselm',
    name: { az: 'Kenterberili Anselm', en: 'Anselm of Canterbury' },
    years: { az: '1033–1109', en: '1033–1109' },
    born: 1033,
    era: 'medieval',
    place: { az: 'Aosta (İtaliya); Kenterberi arxiyepiskopu', en: 'Aosta (Italy); Archbishop of Canterbury' },
    schools: ['religion'],
    idea: {
      az: 'Ontoloji arqumentin müəllifi: Tanrı “ondan daha böyüyü təsəvvür edilə bilməyən varlıq”dır, deməli, yalnız ağılda yox, reallıqda da olmalıdır. İnancı ağılla anlamağa çalışırdı.',
      en: 'Author of the ontological argument: God is “that than which nothing greater can be conceived”, so God must exist not only in the mind but in reality. He sought to understand faith through reason.',
    },
    quote: { az: 'Anlamaq üçün inanıram.', en: 'I believe in order to understand.' },
    hook: {
      az: 'Rahib Qaunilo onun arqumentinə “ən mükəmməl ada” bənzətməsi ilə etiraz etdi. Anselm bu etirazı və öz cavabını kitabına əlavə etməyi tapşırdı.',
      en: 'The monk Gaunilo objected with his “perfect island”. Anselm asked that the objection and his reply be copied into his book.',
    },
    read: { az: 'Proslogion', en: 'Proslogion' },
  },
  {
    id: 'ghazali',
    name: { az: 'Əbu Hamid Qəzali', en: 'Al-Ghazali' },
    years: { az: '1058–1111', en: '1058–1111' },
    born: 1058,
    era: 'medieval',
    place: { az: 'Tus; Bağdadda dərs deyib', en: 'Tus; taught in Baghdad' },
    schools: ['religion', 'eastern'],
    idea: {
      az: '“Filosofların ziddiyyəti” kitabında İbn Sina kimi filosofları tənqid etdi: dünyanın əbədi olmadığını, başlanğıcı olduğunu iddia etdi (kəlam arqumenti). Sonra həqiqəti mənəvi təcrübədə — sufizmdə axtardı.',
      en: 'In “The Incoherence of the Philosophers” he criticised thinkers like Avicenna, arguing the world is not eternal but had a beginning (the kalam argument). Later he sought truth in spiritual experience — in Sufism.',
    },
    hook: {
      az: 'Şöhrətinin zirvəsində, Bağdadın ən nüfuzlu məktəbində professor ikən dərin mənəvi böhran keçirib vəzifəsini tərk etdi. İbn Rüşd sonra ona “Ziddiyyətin ziddiyyəti” kitabı ilə cavab yazdı.',
      en: 'At the height of his fame, as a professor at Baghdad’s leading school, he went through a spiritual crisis and left his post. Averroes later answered him with “The Incoherence of the Incoherence”.',
    },
    read: { az: 'Zəlalətdən xilas (Əl-Münqiz)', en: 'Deliverance from Error (al-Munqidh)' },
  },
  {
    id: 'aquinas',
    name: { az: 'Foma Akvinalı', en: 'Thomas Aquinas' },
    years: { az: '1225–1274', en: '1225–1274' },
    born: 1225,
    era: 'medieval',
    place: { az: 'Rokkasekka (İtaliya); Paris', en: 'Roccasecca (Italy); Paris' },
    schools: ['religion', 'virtue'],
    idea: {
      az: 'İnanc ilə ağılın bir-birinə zidd olmadığını müdafiə etdi. Tanrının varlığı üçün “Beş yol” təklif etdi — onlardan biri zəruri varlıq arqumentidir. Aristoteli, eləcə də İbn Sina və İbn Rüşdü dərindən öyrənmişdi.',
      en: 'He argued that faith and reason do not contradict each other, and offered “Five Ways” to God’s existence — one is the argument from contingency. He studied Aristotle deeply, along with Avicenna and Averroes.',
    },
    hook: {
      az: 'Sakit və iri olduğu üçün tələbə yoldaşları ona “lal öküz” deyirdilər. Ömrünün sonunda yazmağı dayandırıb dedi ki, yazdıqlarının hamısı ona saman kimi görünür.',
      en: 'Classmates called him “the Dumb Ox” for being quiet and large. Near the end of his life he stopped writing, saying all he had written seemed like straw.',
    },
    read: { az: 'İlahiyyatın xülasəsi (I, sual 2)', en: 'Summa Theologiae (I, question 2)' },
  },
  {
    id: 'spinoza',
    name: { az: 'Barux Spinoza', en: 'Baruch Spinoza' },
    years: { az: '1632–1677', en: '1632–1677' },
    born: 1632,
    era: 'modern',
    place: { az: 'Amsterdam, Hollandiya', en: 'Amsterdam, Netherlands' },
    schools: ['religion', 'knowledge'],
    idea: {
      az: '“Tanrı, yəni Təbiət”: kainatdan ayrı, şəxsi Tanrı yoxdur — hər şey bir substansiyanın təzahürüdür. Hər şey zəruri qanunlarla baş verir; azadlıq bu zərurəti anlamaqdır.',
      en: '“God, or Nature”: there is no personal God apart from the universe — everything expresses a single substance. Everything happens by necessary laws; freedom is understanding that necessity.',
    },
    quote: { az: 'Gülmə, ağlama, nifrət etmə — anla.', en: 'Not to laugh, not to lament, not to detest, but to understand.' },
    hook: {
      az: '23 yaşında fikirlərinə görə Amsterdamın yəhudi icmasından qovuldu. Linza cilalayaraq dolanırdı. Əsas kitabı “Etika” yalnız ölümündən sonra çap olundu.',
      en: 'At 23 he was expelled from Amsterdam’s Jewish community for his ideas. He earned his living grinding lenses. His main work, the “Ethics”, was published only after his death.',
    },
    read: { az: 'Etika', en: 'Ethics' },
  },
  {
    id: 'pascal',
    name: { az: 'Blez Paskal', en: 'Blaise Pascal' },
    years: { az: '1623–1662', en: '1623–1662' },
    born: 1623,
    era: 'modern',
    place: { az: 'Klermon və Paris, Fransa', en: 'Clermont and Paris, France' },
    schools: ['religion'],
    idea: {
      az: 'İnsan sonsuzluq ilə heçlik arasında asılı qalmış “düşünən qamış”dır. Tanrı haqqında ağıl son sözü deyə bilmir — ona görə həyatı bir mərc kimi düşünməyi təklif etdi (Paskalın mərcəsi).',
      en: 'A human is a “thinking reed” suspended between infinity and nothingness. Reason cannot have the final word on God — so he proposed thinking of life as a wager (Pascal’s wager).',
    },
    quote: { az: 'Ürəyin elə səbəbləri var ki, ağıl onları bilmir.', en: 'The heart has its reasons which reason does not know.' },
    hook: {
      az: '19 yaşında ilk mexaniki hesablama maşınlarından birini — “Paskalina”nı düzəltdi. Təzyiq vahidi “paskal” və proqramlaşdırma dili Pascal onun adını daşıyır.',
      en: 'At 19 he built one of the first mechanical calculators, the “Pascaline”. The pressure unit “pascal” and the programming language Pascal are named after him.',
    },
    read: { az: 'Düşüncələr', en: 'Pensées' },
  },
  {
    id: 'confucius',
    name: { az: 'Konfutsi', en: 'Confucius' },
    years: { az: 'e.ə. 551–479', en: '551–479 BC' },
    born: -551,
    era: 'ancient',
    place: { az: 'Lu dövləti, Çin', en: 'State of Lu, China' },
    schools: ['virtue'],
    idea: {
      az: 'Yaxşı cəmiyyət yaxşı münasibətlərdən başlayır: valideyn və övlad, dost və dost, hökmdar və xalq. Əsas fəzilət — insanpərvərlik (ren).',
      en: 'A good society starts with good relationships: parent and child, friend and friend, ruler and people. The key virtue is humaneness (ren).',
    },
    quote: { az: 'Özünə istəmədiyini başqasına etmə.', en: 'Do not do to others what you do not want done to yourself.' },
    hook: { az: '“Konfutsi” latınlaşmış addır — çincə Kong Fuzi, yəni “Usta Kun”.', en: '“Confucius” is a Latinised name — in Chinese, Kong Fuzi, “Master Kong”.' },
    read: { az: 'Söhbətlər (Lunyu)', en: 'The Analects' },
  },
  {
    id: 'buddha',
    name: { az: 'Budda', en: 'The Buddha' },
    years: { az: 'təx. e.ə. V əsr', en: 'c. 5th c. BC' },
    born: -480,
    era: 'ancient',
    place: { az: 'Lumbini (indiki Nepal)', en: 'Lumbini (today’s Nepal)' },
    schools: ['buddhist'],
    idea: {
      az: 'Dörd nəcib həqiqət: əziyyət var; onun səbəbi istək və yapışmadır; əziyyət sona çata bilər; buna aparan yol var — düzgün düşüncə, söz və hərəkət.',
      en: 'Four noble truths: suffering exists; its cause is craving and clinging; it can end; there is a path — right thought, speech and action.',
    },
    quote: { az: 'Nifrət nifrətlə sönmür. Yalnız sevgi ilə sönür.', en: 'Hatred does not cease by hatred, but only by love.' },
    hook: {
      az: 'Rəvayətə görə şahzadə idi. İlk dəfə xəstə, qoca və ölü insan görəndə sarayı tərk edib cavab axtarmağa getdi.',
      en: 'Legend says he was a prince who left his palace after seeing a sick man, an old man and a corpse for the first time.',
    },
    read: { az: 'Dhammapada', en: 'The Dhammapada' },
  },
  {
    id: 'socrates',
    name: { az: 'Sokrat', en: 'Socrates' },
    years: { az: 'e.ə. 470–399', en: '470–399 BC' },
    born: -470,
    era: 'ancient',
    place: { az: 'Afina, Yunanıstan', en: 'Athens, Greece' },
    schools: ['virtue', 'knowledge'],
    idea: {
      az: 'Heç nə yazmadı. Bazarda insanlara suallar verərək onları öz fikirlərini yoxlamağa məcbur edirdi. Bu, bu gün də “Sokrat metodu” adlanır.',
      en: 'He wrote nothing. He questioned people in the marketplace until they examined their own beliefs — still called “the Socratic method”.',
    },
    quote: { az: 'Sorğulanmayan həyat yaşamağa dəyməz.', en: 'The unexamined life is not worth living.' },
    hook: {
      az: 'Gəncləri “yoldan çıxarmaqda” ittiham olunub ölümə məhkum edildi. Qaçmaq imkanı var idi, amma qanuna tabe olub zəhər içdi.',
      en: 'Accused of “corrupting the youth”, he was sentenced to death. He could have escaped, but obeyed the law and drank the poison.',
    },
    read: { az: 'Platon — Sokratın müdafiəsi (Apologiya)', en: 'Plato — The Apology of Socrates' },
  },
  {
    id: 'plato',
    name: { az: 'Platon', en: 'Plato' },
    years: { az: 'e.ə. 427–347', en: '427–347 BC' },
    born: -427,
    era: 'ancient',
    place: { az: 'Afina, Yunanıstan', en: 'Athens, Greece' },
    schools: ['knowledge', 'justice'],
    idea: {
      az: 'Gördüyümüz dünya kölgələrə bənzəyir; əsl gerçəklik — dəyişməyən ideyalar aləmidir. Filosofun işi mağaradan çıxıb işığa baxmaqdır.',
      en: 'The world we see is like shadows; true reality is the unchanging world of Forms. A philosopher’s job is to leave the cave and face the light.',
    },
    quote: { az: 'Başlanğıc hər işin ən vacib hissəsidir.', en: 'The beginning is the most important part of the work.' },
    hook: {
      az: 'Afinada “Akademiya” adlı məktəb qurdu — “akademiya” sözü oradan gəlir. Deyilənə görə “Platon” ləqəbdir, “enlikürək” deməkdir.',
      en: 'He founded the Academy in Athens — the origin of the word “academy”. “Plato” is said to be a nickname meaning “broad”.',
    },
    read: { az: 'Dövlət (VII kitab — Mağara)', en: 'The Republic (Book VII — the cave)' },
  },
  {
    id: 'aristotle',
    name: { az: 'Aristotel', en: 'Aristotle' },
    years: { az: 'e.ə. 384–322', en: '384–322 BC' },
    born: -384,
    era: 'ancient',
    place: { az: 'Stagira, Yunanıstan', en: 'Stagira, Greece' },
    schools: ['virtue'],
    idea: {
      az: 'Yaxşı həyat (evdemoniya) xarakterlə qurulur. Fəzilət vərdişdir və iki ifratın ortasındadır — qızıl orta.',
      en: 'A good life (eudaimonia) is built on character. Virtue is a habit and sits between two extremes — the golden mean.',
    },
    quote: { az: 'Biz ədalətli işlər görə-görə ədalətli oluruq.', en: 'We become just by doing just acts.' },
    hook: {
      az: 'Makedoniyalı İsgəndərin müəllimi olub. Məntiqdən biologiyaya qədər hər şey haqqında yazıb — Şərqdə ona “Birinci müəllim” deyirdilər.',
      en: 'Tutor of Alexander the Great. Wrote on everything from logic to biology — in the East he was called “the First Teacher”.',
    },
    read: { az: 'Nikomax etikası', en: 'Nicomachean Ethics' },
  },
  {
    id: 'seneca',
    name: { az: 'Seneka', en: 'Seneca' },
    years: { az: 'e.ə. 4 — b.e. 65', en: '4 BC — AD 65' },
    born: -4,
    era: 'ancient',
    place: { az: 'Kordova (indiki İspaniya)', en: 'Córdoba (today’s Spain)' },
    schools: ['stoic'],
    idea: {
      az: 'Vaxt ən dəyərli sərvətdir — onu israf etmə. Qəzəb qısa müddətli dəlilikdir; onu idarə etməyi öyrən.',
      en: 'Time is our most precious wealth — don’t waste it. Anger is brief madness; learn to master it.',
    },
    quote: { az: 'Biz reallıqdan çox təxəyyülümüzdə əziyyət çəkirik.', en: 'We suffer more often in imagination than in reality.' },
    hook: { az: 'İmperator Neronun müəllimi və müşaviri olub.', en: 'He was tutor and adviser to the emperor Nero.' },
    read: { az: 'Lusiliyə məktublar', en: 'Letters to Lucilius' },
  },
  {
    id: 'epictetus',
    name: { az: 'Epiktet', en: 'Epictetus' },
    years: { az: 'təx. 50–135', en: 'c. 50–135' },
    born: 50,
    era: 'ancient',
    place: { az: 'Hierapolis (indiki Türkiyə)', en: 'Hierapolis (today’s Turkey)' },
    schools: ['stoic'],
    idea: {
      az: 'Azadlıq — səndən asılı olanla olmayanı ayırd etməkdir. Başqalarının hərəkəti səndən asılı deyil, sənin cavabın isə asılıdır.',
      en: 'Freedom is knowing what depends on you and what doesn’t. Others’ actions are not up to you; your response is.',
    },
    quote: { az: 'Bizi narahat edən hadisələr deyil, onlar haqqında fikirlərimizdir.', en: 'Men are disturbed not by things, but by the views they take of them.' },
    hook: { az: 'Qul kimi doğulub, sonra azad olub öz məktəbini açıb.', en: 'Born a slave, he was later freed and opened his own school.' },
    read: { az: 'Təlimat kitabçası (Enxiridion)', en: 'The Enchiridion (Handbook)' },
  },
  {
    id: 'marcus',
    name: { az: 'Mark Avreli', en: 'Marcus Aurelius' },
    years: { az: '121–180', en: '121–180' },
    born: 121,
    era: 'ancient',
    place: { az: 'Roma', en: 'Rome' },
    schools: ['stoic'],
    idea: {
      az: 'Dünyanın ən güclü adamı olsa da, hər səhər özünə xatırladırdı: təvazökar ol, qarşındakı işi yaxşı gör, başqalarına səbirli ol.',
      en: 'Though the most powerful man in the world, every morning he reminded himself: be humble, do the task at hand well, be patient with others.',
    },
    quote: { az: 'Yolun qarşısında duran şey yolun özü olur.', en: 'What stands in the way becomes the way.' },
    hook: { az: '“Meditasiyalar”ı çap üçün yox, yalnız özü üçün yazırdı.', en: 'He wrote the “Meditations” only for himself, never for publication.' },
    read: { az: 'Özümlə söhbət (Meditasiyalar)', en: 'Meditations' },
  },
  {
    id: 'farabi',
    name: { az: 'Əbu Nəsr Fərabi', en: 'Al-Farabi' },
    years: { az: 'təx. 870–950', en: 'c. 870–950' },
    born: 870,
    era: 'medieval',
    place: { az: 'Mərkəzi Asiya; Bağdad və Dəməşqdə yaşayıb', en: 'Central Asia; lived in Baghdad and Damascus' },
    schools: ['eastern', 'justice'],
    idea: {
      az: '“Fazil şəhər” — insanların xoşbəxtliyə birlikdə, bir-birinə kömək edərək çatdığı ideal cəmiyyət. Aristotel və Platonu birləşdirməyə çalışırdı.',
      en: 'The “virtuous city” — an ideal society where people reach happiness together by helping one another. He tried to unite Aristotle and Plato.',
    },
    hook: {
      az: 'Aristoteldən sonra “İkinci müəllim” adlanıb. Musiqi nəzəriyyəsi haqqında da böyük kitab yazıb.',
      en: 'Called “the Second Teacher” after Aristotle. He also wrote a major book on music theory.',
    },
    read: { az: 'Fazil şəhər əhalisinin görüşləri', en: 'The Virtuous City' },
  },
  {
    id: 'avicenna',
    name: { az: 'İbn Sina', en: 'Avicenna (Ibn Sina)' },
    years: { az: '980–1037', en: '980–1037' },
    born: 980,
    era: 'medieval',
    place: { az: 'Buxara yaxınlığı; Həmədanda vəfat edib', en: 'Near Bukhara; died in Hamadan' },
    schools: ['eastern', 'knowledge'],
    idea: {
      az: '“Uçan insan” düşüncə təcrübəsi: boşluqda heç nə görməyən, heç nəyə toxunmayan insan yenə də var olduğunu bilər. Deməli, “mən” bədəndən ayrı dərk olunur.',
      en: 'The “floating man” thought experiment: a person floating in empty space, sensing nothing, would still know they exist. So the “self” is known apart from the body.',
    },
    hook: {
      az: 'Onun “Tibb qanunu” Avropa universitetlərində əsrlər boyu əsas tibb dərsliyi olub.',
      en: 'His “Canon of Medicine” was a standard textbook in European universities for centuries.',
    },
    read: { az: 'Şəfa kitabı', en: 'The Book of Healing' },
  },
  {
    id: 'bahmanyar',
    name: { az: 'Bəhmənyar', en: 'Bahmanyar' },
    years: { az: '? — 1066', en: '? — 1066' },
    born: 993,
    era: 'medieval',
    place: { az: 'Azərbaycan', en: 'Azerbaijan' },
    schools: ['eastern'],
    idea: {
      az: 'İbn Sinanın ən yaxın şagirdi. Müəlliminin fəlsəfəsini — varlıq, məntiq və bilik haqqında — “Ət-Təhsil” kitabında aydın sistemə saldı.',
      en: 'Avicenna’s closest student. He organised his teacher’s philosophy — on being, logic and knowledge — into a clear system in “Al-Tahsil”.',
    },
    hook: {
      az: 'İbn Sinanın bəzi əsərləri müəllimi ilə Bəhmənyarın sual-cavab söhbətləri şəklində qalıb.',
      en: 'Some of Avicenna’s writings survive as question-and-answer exchanges with Bahmanyar.',
    },
    read: { az: 'Ət-Təhsil', en: 'Al-Tahsil' },
  },
  {
    id: 'nizami',
    name: { az: 'Nizami Gəncəvi', en: 'Nizami Ganjavi' },
    years: { az: 'təx. 1141–1209', en: 'c. 1141–1209' },
    born: 1141,
    era: 'medieval',
    place: { az: 'Gəncə, Azərbaycan', en: 'Ganja, Azerbaijan' },
    schools: ['eastern', 'virtue', 'justice'],
    idea: {
      az: 'Şair-mütəfəkkir. Poemalarında ədalətli hökmdar, elmin dəyəri, sevgi və insan ləyaqəti haqqında düşünür. “İsgəndərnamə”də İsgəndər yunan filosofları ilə söhbət edir.',
      en: 'A poet-philosopher. His poems reflect on the just ruler, the value of knowledge, love and human dignity. In the “Iskandarnameh” Alexander converses with Greek philosophers.',
    },
    hook: {
      az: '“Xəmsə” — beş böyük poema. “Leyli və Məcnun” və “Yeddi gözəl” də onlardandır.',
      en: 'His “Khamsa” is five great poems — including “Layla and Majnun” and “The Seven Beauties”.',
    },
    read: { az: 'Sirlər xəzinəsi', en: 'The Treasury of Mysteries' },
  },
  {
    id: 'tusi',
    name: { az: 'Nəsirəddin Tusi', en: 'Nasir al-Din al-Tusi' },
    years: { az: '1201–1274', en: '1201–1274' },
    born: 1201,
    era: 'medieval',
    place: { az: 'Tus; Marağada işləyib', en: 'Tus; worked in Maragha' },
    schools: ['eastern', 'virtue'],
    idea: {
      az: '“Əxlaqi-Nasiri” əsərində xarakterin tərbiyə ilə dəyişə biləcəyini yazır və etikanı üç səviyyədə izah edir: insanın özü, ailə və cəmiyyət.',
      en: 'In the “Nasirean Ethics” he argues that character can be changed by education, and explains ethics on three levels: the self, the family and society.',
    },
    hook: {
      az: 'Marağada dövrünün ən böyük rəsədxanasını qurdu. Ayda bir krater onun adını daşıyır.',
      en: 'He founded the greatest observatory of his time at Maragha. A crater on the Moon bears his name.',
    },
    read: { az: 'Əxlaqi-Nasiri', en: 'The Nasirean Ethics' },
  },
  {
    id: 'descartes',
    name: { az: 'Rene Dekart', en: 'René Descartes' },
    years: { az: '1596–1650', en: '1596–1650' },
    born: 1596,
    era: 'modern',
    place: { az: 'Fransa; Hollandiyada yaşayıb', en: 'France; lived in the Netherlands' },
    schools: ['knowledge'],
    idea: {
      az: 'Hər şeyə şübhə et. Şübhə edə bilmədiyin yeganə şey — şübhə etdiyin, yəni düşündüyündür. Bilik buradan qurulmalıdır.',
      en: 'Doubt everything. The one thing you cannot doubt is that you are doubting — that is, thinking. Knowledge must be built from there.',
    },
    quote: { az: 'Düşünürəm, deməli, varam.', en: 'I think, therefore I am.' },
    hook: { az: 'Riyaziyyatdakı koordinat sistemi onun adını daşıyır — Dekart koordinatları.', en: 'The coordinate system in maths is named after him — Cartesian coordinates.' },
    read: { az: 'Metod haqqında mühakimə', en: 'Discourse on the Method' },
  },
  {
    id: 'hobbes',
    name: { az: 'Tomas Hobbs', en: 'Thomas Hobbes' },
    years: { az: '1588–1679', en: '1588–1679' },
    born: 1588,
    era: 'modern',
    place: { az: 'İngiltərə', en: 'England' },
    schools: ['justice'],
    idea: {
      az: 'Dövlət olmasaydı, hamı hamıya qarşı müharibə aparardı. İnsanlar təhlükəsizlik üçün “ictimai müqavilə” bağlayıb gücü dövlətə verir.',
      en: 'Without a state there would be a war of all against all. People make a “social contract”, handing power to the state in exchange for safety.',
    },
    quote: { az: 'İnsanın həyatı tənha, kasıb, iyrənc, vəhşi və qısa olardı.', en: 'The life of man, solitary, poor, nasty, brutish, and short.' },
    hook: {
      az: 'Deyirdi ki, anası İspan armadasının hücum xəbərindən qorxub onu vaxtından əvvəl doğub: “Anam əkiz doğdu — məni və qorxunu.”',
      en: 'He said his mother gave birth early from fear of the Spanish Armada: “My mother gave birth to twins — myself and fear.”',
    },
    read: { az: 'Leviafan', en: 'Leviathan' },
  },
  {
    id: 'hume',
    name: { az: 'Devid Hum', en: 'David Hume' },
    years: { az: '1711–1776', en: '1711–1776' },
    born: 1711,
    era: 'modern',
    place: { az: 'Edinburq, Şotlandiya', en: 'Edinburgh, Scotland' },
    schools: ['knowledge'],
    idea: {
      az: 'Bilik təcrübədən gəlir. Əxlaq isə ağıldan çox hisslərdən doğur. “Olan”dan “olmalı” olanı məntiqlə çıxarmaq olmaz.',
      en: 'Knowledge comes from experience. Morality grows from feeling more than reason. You can’t logically get an “ought” from an “is”.',
    },
    quote: { az: 'Ağıl ehtirasların quludur və belə də olmalıdır.', en: 'Reason is, and ought only to be, the slave of the passions.' },
    hook: { az: 'Kant deyirdi ki, Hume onu “doqmatik yuxudan oyatdı”.', en: 'Kant said Hume woke him from his “dogmatic slumber”.' },
    read: { az: 'İnsan idrakı haqqında araşdırma', en: 'An Enquiry Concerning Human Understanding' },
  },
  {
    id: 'kant',
    name: { az: 'İmmanuel Kant', en: 'Immanuel Kant' },
    years: { az: '1724–1804', en: '1724–1804' },
    born: 1724,
    era: 'modern',
    place: { az: 'Königsberq (indiki Kalininqrad)', en: 'Königsberg (today’s Kaliningrad)' },
    schools: ['kantian'],
    idea: {
      az: 'Əxlaq nəticəyə yox, vəzifəyə əsaslanır. Qaydanı elə seç ki, hamı üçün qanun ola bilsin və insanı heç vaxt sadəcə alət kimi istifadə etmə.',
      en: 'Morality rests on duty, not results. Choose rules that could be a law for everyone, and never use a person merely as a tool.',
    },
    quote: {
      az: 'İki şey ruhumu heyranlıqla doldurur: üstümdəki ulduzlu səma və içimdəki əxlaq qanunu.',
      en: 'Two things fill the mind with awe: the starry heavens above me and the moral law within me.',
    },
    hook: {
      az: 'Gündəlik gəzintisinə o qədər dəqiq çıxırdı ki, deyilənə görə qonşular saatlarını ona görə qururdular.',
      en: 'His daily walk was so punctual that neighbours supposedly set their clocks by it.',
    },
    read: { az: 'Əxlaq metafizikasının əsasları', en: 'Groundwork of the Metaphysics of Morals' },
  },
  {
    id: 'bentham',
    name: { az: 'Ceremi Bentham', en: 'Jeremy Bentham' },
    years: { az: '1748–1832', en: '1748–1832' },
    born: 1748,
    era: 'modern',
    place: { az: 'London, İngiltərə', en: 'London, England' },
    schools: ['utilitarian'],
    idea: {
      az: 'Qanun və əxlaq bir sualla ölçülməlidir: insanların ümumi xoşbəxtliyini artırırmı? Ağrı və həzz — bizi idarə edən iki hökmdardır.',
      en: 'Laws and morals should be judged by one question: do they increase people’s overall happiness? Pain and pleasure are our two masters.',
    },
    quote: { az: 'Ən çox insan üçün ən böyük xoşbəxtlik.', en: 'The greatest happiness of the greatest number.' },
    hook: {
      az: 'Vəsiyyətinə görə skeleti geyindirilib Londonda universitet binasında sərgilənir.',
      en: 'At his request, his clothed skeleton is on display at University College London.',
    },
    read: { az: 'Əxlaq və qanunvericiliyin prinsiplərinə giriş', en: 'An Introduction to the Principles of Morals and Legislation' },
  },
  {
    id: 'mill',
    name: { az: 'Con Stüart Mill', en: 'John Stuart Mill' },
    years: { az: '1806–1873', en: '1806–1873' },
    born: 1806,
    era: 'modern',
    place: { az: 'London, İngiltərə', en: 'London, England' },
    schools: ['utilitarian', 'justice'],
    idea: {
      az: 'Xoşbəxtliyin keyfiyyəti də var: düşünmək, öyrənmək kimi “yüksək” həzlər daha dəyərlidir. Başqasına zərər vermədikcə hər kəs azad olmalıdır.',
      en: 'Happiness has quality too: “higher” pleasures like thinking and learning matter more. Everyone should be free as long as they harm no one else.',
    },
    quote: {
      az: 'Razı donuz olmaqdansa, narazı insan olmaq yaxşıdır.',
      en: 'It is better to be a human being dissatisfied than a pig satisfied.',
    },
    hook: { az: 'Üç yaşında qədim yunan dilini öyrənməyə başlayıb. Qadınların seçki hüququ uğrunda parlamentdə çıxış edib.', en: 'He began learning ancient Greek at three, and argued in Parliament for women’s right to vote.' },
    read: { az: 'Azadlıq haqqında', en: 'On Liberty' },
  },
  {
    id: 'kierkegaard',
    name: { az: 'Søren Kierkegaard', en: 'Søren Kierkegaard' },
    years: { az: '1813–1855', en: '1813–1855' },
    born: 1813,
    era: 'modern',
    place: { az: 'Kopenhagen, Danimarka', en: 'Copenhagen, Denmark' },
    schools: ['existential'],
    idea: {
      az: 'Həyat seçimlərdən ibarətdir və onları heç kim sənin yerinə edə bilməz. Narahatlıq — azadlığın başgicəlləndirməsidir.',
      en: 'Life is made of choices that no one can make for you. Anxiety is “the dizziness of freedom”.',
    },
    quote: {
      az: 'Həyatı geriyə baxaraq anlayırıq, amma irəliyə baxaraq yaşamalıyıq.',
      en: 'Life can only be understood backwards, but it must be lived forwards.',
    },
    hook: { az: 'Sevdiyi Regine Olsenlə nişanı pozdu və bütün həyatı boyu bu qərar haqqında yazdı.', en: 'He broke off his engagement to Regine Olsen and wrote about that choice for the rest of his life.' },
    read: { az: 'Ya-ya da', en: 'Either/Or' },
  },
  {
    id: 'nietzsche',
    name: { az: 'Fridrix Nitsşe', en: 'Friedrich Nietzsche' },
    years: { az: '1844–1900', en: '1844–1900' },
    born: 1844,
    era: 'modern',
    place: { az: 'Almaniya', en: 'Germany' },
    schools: ['existential'],
    idea: {
      az: 'Köhnə dəyərləri kor-koranə qəbul etmə, sorğula. Öz dəyərlərini yarat və həyatına “bəli” de — hətta çətin anlarına da.',
      en: 'Don’t accept old values blindly — question them. Create your own values and say “yes” to your life, even its hard parts.',
    },
    quote: { az: 'Yaşamaq üçün “niyə”si olan, demək olar ki, hər “necə”yə dözər.', en: 'He who has a why to live can bear almost any how.' },
    hook: { az: 'Cəmi 24 yaşında Bazel Universitetində professor oldu.', en: 'He became a professor at the University of Basel at just 24.' },
    read: { az: 'Zərdüşt belə deyirdi', en: 'Thus Spoke Zarathustra' },
  },
  {
    id: 'sartre',
    name: { az: 'Jan-Pol Sartr', en: 'Jean-Paul Sartre' },
    years: { az: '1905–1980', en: '1905–1980' },
    born: 1905,
    era: 'contemporary',
    place: { az: 'Paris, Fransa', en: 'Paris, France' },
    schools: ['existential'],
    idea: {
      az: 'Varlıq mahiyyətdən əvvəl gəlir: əvvəl varsan, sonra seçimlərinlə kim olacağını yaradırsan. Bu azadlıqdan qaçmaq olmur.',
      en: 'Existence precedes essence: you exist first, then create who you are through choices. There is no escaping this freedom.',
    },
    quote: { az: 'İnsan azad olmağa məhkumdur.', en: 'Man is condemned to be free.' },
    hook: { az: '1964-cü ildə Nobel ədəbiyyat mükafatından imtina etdi.', en: 'He turned down the Nobel Prize in Literature in 1964.' },
    read: { az: 'Ekzistensializm humanizmdir', en: 'Existentialism Is a Humanism' },
  },
  {
    id: 'arendt',
    name: { az: 'Hanna Arendt', en: 'Hannah Arendt' },
    years: { az: '1906–1975', en: '1906–1975' },
    born: 1906,
    era: 'contemporary',
    place: { az: 'Almaniya; ABŞ-da yaşayıb', en: 'Germany; lived in the USA' },
    schools: ['justice'],
    idea: {
      az: '“Şərin bayağılığı”: ən dəhşətli cinayətləri çox vaxt canavarlar yox, düşünmədən əmrə tabe olan adi insanlar törədir. Düşünmək — mənəvi borcdur.',
      en: '“The banality of evil”: the worst crimes are often committed not by monsters but by ordinary people who stop thinking and just obey. Thinking is a moral duty.',
    },
    hook: { az: 'Nasist cinayətkarı Eyxmanın məhkəməsini jurnalist kimi izləyib və bu fikri orada formalaşdırıb.', en: 'She covered the trial of the Nazi official Eichmann as a journalist and formed this idea there.' },
    read: { az: 'Yerusəlimdə Eyxman', en: 'Eichmann in Jerusalem' },
  },
  {
    id: 'beauvoir',
    name: { az: 'Simona de Bovuar', en: 'Simone de Beauvoir' },
    years: { az: '1908–1986', en: '1908–1986' },
    born: 1908,
    era: 'contemporary',
    place: { az: 'Paris, Fransa', en: 'Paris, France' },
    schools: ['existential', 'justice'],
    idea: {
      az: 'Cəmiyyətin “qadın” və “kişi” üçün hazırladığı rollar təbiətdən yox, adət-ənənədən gəlir. Azadlıq hamı üçün olmalıdır.',
      en: 'The roles society prepares for “women” and “men” come from custom, not nature. Freedom must be for everyone.',
    },
    quote: { az: 'Qadın doğulmur, qadın olur.', en: 'One is not born, but rather becomes, a woman.' },
    hook: { az: 'Sartrla 51 il birlikdə oldu, amma heç vaxt evlənmədilər və ayrı evlərdə yaşadılar.', en: 'She was Sartre’s partner for 51 years; they never married and lived apart.' },
    read: { az: 'İkinci cins', en: 'The Second Sex' },
  },
  {
    id: 'camus',
    name: { az: 'Alber Kamyu', en: 'Albert Camus' },
    years: { az: '1913–1960', en: '1913–1960' },
    born: 1913,
    era: 'contemporary',
    place: { az: 'Əlcəzair; Fransada yaşayıb', en: 'Algeria; lived in France' },
    schools: ['existential'],
    idea: {
      az: 'İnsan məna axtarır, dünya isə susur — bu, absurddur. Cavab ümidsizlik deyil, üsyandır: hər şeyə baxmayaraq dolu yaşamaq.',
      en: 'Humans seek meaning and the world stays silent — that’s the absurd. The answer is not despair but revolt: living fully anyway.',
    },
    quote: { az: 'Sizifi xoşbəxt təsəvvür etmək lazımdır.', en: 'One must imagine Sisyphus happy.' },
    hook: { az: 'Gəncliyində futbol qapıçısı olub. 44 yaşında Nobel mükafatı alıb.', en: 'He was a football goalkeeper in his youth, and won the Nobel Prize at 44.' },
    read: { az: 'Sizif mifi', en: 'The Myth of Sisyphus' },
  },
  {
    id: 'rawls',
    name: { az: 'Con Rouls', en: 'John Rawls' },
    years: { az: '1921–2002', en: '1921–2002' },
    born: 1921,
    era: 'contemporary',
    place: { az: 'ABŞ', en: 'USA' },
    schools: ['justice'],
    idea: {
      az: 'Cəhalət pərdəsi: cəmiyyətin qaydalarını kim olacağını (varlı, kasıb, xəstə, sağlam) bilmədən seçsəydin, ədalətli qaydalar seçərdin.',
      en: 'The veil of ignorance: if you chose society’s rules without knowing who you’d be (rich, poor, sick, healthy), you would choose fair rules.',
    },
    quote: { az: 'Ədalət ictimai institutların ilk fəzilətidir.', en: 'Justice is the first virtue of social institutions.' },
    hook: {
      az: 'Uşaqlıqda iki qardaşı ondan yoluxan xəstəliklərdən öldü — bu, onun şans və ədalət haqqında düşüncəsinə təsir etdiyi deyilir.',
      en: 'As a child, two of his brothers died of illnesses caught from him — something said to have shaped his thinking about luck and fairness.',
    },
    read: { az: 'Ədalət nəzəriyyəsi', en: 'A Theory of Justice' },
  },
  {
    id: 'singer',
    name: { az: 'Piter Singer', en: 'Peter Singer' },
    years: { az: '1946 —', en: 'b. 1946' },
    born: 1946,
    era: 'contemporary',
    place: { az: 'Melburn, Avstraliya', en: 'Melbourne, Australia' },
    schools: ['utilitarian'],
    idea: {
      az: 'Uzaqdakı insanın da, heyvanın da ağrısı yaxındakı qədər vacibdir. İmkanımız varsa, kömək etməyə borcluyuq.',
      en: 'The pain of a faraway person, or of an animal, matters as much as the pain near us. If we can help, we ought to.',
    },
    quote: {
      az: 'Pis bir şeyin qarşısını, eyni dərəcədə vacib nəyisə qurban vermədən ala biliriksə, almalıyıq.',
      en: 'If we can prevent something bad without sacrificing anything of comparable moral importance, we ought to do it.',
    },
    hook: { az: '1975-ci ildə yazdığı “Heyvanların azadlığı” kitabı heyvan hüquqları hərəkatına böyük təsir etdi.', en: 'His 1975 book “Animal Liberation” had a huge influence on the animal rights movement.' },
    read: { az: 'Xilas edə biləcəyin həyat', en: 'The Life You Can Save' },
  },
].sort((a, b) => a.born - b.born) as Philosopher[]

export function findPhilosopher(id: string): Philosopher | undefined {
  return philosophers.find((item) => item.id === id)
}

export function findSchool(id: string): LibSchool | undefined {
  return libSchools.find((item) => item.id === id)
}

export const schoolIcon = (id: LibSchoolId): IconKey => id
