import type { Text } from './types'

/*
 * "The question of God" — positions and arguments.
 *
 * Writing rules for this file:
 *  - Fair to every side. Every argument gets its strongest form, its real
 *    weaknesses, and the best replies to those weaknesses.
 *  - No verdict. The page explains; the reader decides.
 *  - Short sentences, plain words. Technical names are in the glossary.
 */

export type ViewId =
  | 'theism'
  | 'deism'
  | 'panentheism'
  | 'pantheism'
  | 'polytheism'
  | 'agnosticism'
  | 'atheism'
  | 'fideism'

export type GodView = {
  id: ViewId
  name: Text
  short: Text
  def: Text
  beliefs: Text[]
  traditions: Text
  thinkers: { name: Text; person?: string }[]
  evil: Text
  strengths: Text[]
  weaknesses: Text[]
  args: string[]
  think: Text
}

export type GodArg = {
  id: string
  side: 'for' | 'against'
  name: Text
  short: Text
  origin: Text
  people?: string[]
  steps: Text[]
  conclusion: Text
  plain: Text
  strengths: Text[]
  objections: Text[]
  replies: Text[]
  think: Text
}

// ───────────────────────────────────────── intro

export const intro = {
  title: { az: 'Tanrı sualı', en: 'The question of God' },
  lede: {
    az: 'Tanrı varmı? Varsa, necə bir varlıqdır? İnsanlar bu sualı minlərlə ildir soruşur. Fəlsəfə buna inancla yox, arqumentlə yanaşır: hər fikrin səbəbini soruşur və yoxlayır.',
    en: 'Does God exist? If so, what is God like? People have asked this for thousands of years. Philosophy approaches it with arguments rather than faith alone: it asks for the reasons behind each view and tests them.',
  },
  fair: {
    az: 'Bu bölmə heç bir cavabı təbliğ etmir. Hər mövqenin ən güclü arqumentlərini, zəif yerlərini və tənqidlərə verilən cavabları göstərir. Qərar sənindir.',
    en: 'This section promotes no answer. It shows each view’s strongest arguments, its weak points and the replies to its critics. The decision is yours.',
  },
  howTitle: { az: 'Arqumenti necə oxumalı', en: 'How to read an argument' },
  how: [
    {
      az: 'Arqument addımlardan (müqəddimələrdən) və nəticədən ibarətdir. Əgər bütün addımlar doğrudursa və nəticə onlardan məntiqlə çıxırsa, nəticə də doğru olmalıdır.',
      en: 'An argument is made of steps (premises) and a conclusion. If every step is true and the conclusion follows logically, the conclusion must be true too.',
    },
    {
      az: 'Ona görə də arqumenti yoxlamaq üçün iki sual ver: addımlar doğrudurmu? Nəticə həqiqətən onlardan çıxırmı?',
      en: 'So to test an argument, ask two questions: are the steps true? Does the conclusion really follow from them?',
    },
    {
      az: 'Fəlsəfədə hamının qəbul etdiyi “son sübut” yoxdur. Hər arqumentin həm güclü tərəfdarları, həm də ciddi tənqidçiləri var. Bu, mövzunu maraqlı edən şeydir.',
      en: 'In philosophy there is no “final proof” that everyone accepts. Every argument has serious defenders and serious critics. That is what makes the topic alive.',
    },
  ],
  spectrumTitle: { az: 'Mövqelərin xəritəsi', en: 'A map of the views' },
  spectrumLeft: { az: 'Şəxsi Tanrı dünyanı yaradıb və ona qarışır', en: 'A personal God created the world and acts in it' },
  spectrumRight: { az: 'Heç bir Tanrı yoxdur', en: 'There is no God' },
  spectrumNote: {
    az: 'Sadələşdirilmiş xəritədir. Politeizm (çoxtanrılıq) və fideizm (inancın ağıldan asılı olmaması) bu xəttə sığmır — onlar ayrıca göstərilib.',
    en: 'A simplified map. Polytheism (many gods) and fideism (faith independent of reason) do not fit on this line — they are shown separately.',
  },
  viewsTitle: { az: 'Mövqelər', en: 'The views' },
  forTitle: { az: 'Tanrının varlığı lehinə arqumentlər', en: 'Arguments for the existence of God' },
  againstTitle: { az: 'Tanrının varlığı əleyhinə arqumentlər', en: 'Arguments against the existence of God' },
}

// ───────────────────────────────────────── views

export const views: GodView[] = [
  {
    id: 'theism',
    name: { az: 'Teizm', en: 'Theism' },
    short: {
      az: 'Dünyanı yaradan, onu saxlayan və onunla əlaqədə olan şəxsi bir Tanrı var.',
      en: 'There is a personal God who created the world, sustains it and is involved with it.',
    },
    def: {
      az: 'Teizmə görə Tanrı hər şeyə qadir, hər şeyi bilən və tamamilə xeyirxah bir varlıqdır. O, dünyanı yaradıb, onu hər an varlıqda saxlayır və insanlarla əlaqə qurur: vəhy, dua, möcüzə vasitəsilə. Tanrı dünyadan ayrıdır, amma ondan uzaq deyil. Monoteizm — tək Tanrıya inam — teizmin ən geniş yayılmış formasıdır.',
      en: 'For theism, God is all-powerful, all-knowing and wholly good. God created the world, keeps it in existence at every moment and relates to people — through revelation, prayer and miracles. God is distinct from the world but not distant from it. Monotheism — belief in one God — is its most widespread form.',
    },
    beliefs: [
      { az: 'Tanrı şəxsdir: bilir, istəyir, sevir.', en: 'God is personal: God knows, wills and loves.' },
      { az: 'Dünya Tanrıdan asılıdır, Tanrı isə dünyadan asılı deyil.', en: 'The world depends on God; God does not depend on the world.' },
      { az: 'Tanrı tarixdə və insan həyatında iştirak edir.', en: 'God takes part in history and in human lives.' },
    ],
    traditions: {
      az: 'İslam, xristianlıq, yəhudilik; hinduizmin bəzi qolları (məsələn, bhakti ənənəsi).',
      en: 'Islam, Christianity, Judaism; some branches of Hinduism (e.g. the bhakti tradition).',
    },
    thinkers: [
      { name: { az: 'İbn Sina', en: 'Avicenna' }, person: 'avicenna' },
      { name: { az: 'Qəzali', en: 'Al-Ghazali' }, person: 'ghazali' },
      { name: { az: 'Anselm', en: 'Anselm' }, person: 'anselm' },
      { name: { az: 'Foma Akvinalı', en: 'Thomas Aquinas' }, person: 'aquinas' },
      { name: { az: 'Musa ibn Meymun', en: 'Maimonides' } },
      { name: { az: 'Alvin Plantinqa', en: 'Alvin Plantinga' } },
    ],
    evil: {
      az: 'Teizm üçün şər ən çətin sualdır. Cavablar (teodiseyalar): Tanrı insana azad iradə verib və pisliyin çoxu ondan doğur; çətinliklər insanı yetişdirir və sınayır; bu dünya hekayənin sonu deyil — ədalət axirətdə tamamlanır.',
      en: 'Evil is theism’s hardest question. Its answers (theodicies): God gave people free will, and much evil comes from it; hardships shape and test us; this world is not the end of the story — justice is completed in the afterlife.',
    },
    strengths: [
      { az: 'Bir çox böyük suala tək cavab verir: niyə nəsə var, niyə dünya qaydalıdır, əxlaq haradan gəlir.', en: 'Gives one answer to many big questions: why anything exists, why the world is ordered, where morality comes from.' },
      { az: 'Milyardlarla insanın dini təcrübəsini ciddiyə alır.', en: 'Takes the religious experience of billions of people seriously.' },
      { az: 'Minillik zəngin fəlsəfi ənənəsi var — İbn Sinadan Akvinalıya qədər.', en: 'Has a rich philosophical tradition spanning a millennium — from Avicenna to Aquinas.' },
    ],
    weaknesses: [
      { az: 'Şər problemi: hər şeyə qadir və xeyirxah Tanrı niyə bu qədər əzaba yol verir?', en: 'The problem of evil: why would an all-powerful, good God allow so much suffering?' },
      { az: 'Gizlilik problemi: Tanrı varsa, niyə bu qədər insan Ona inanmır?', en: 'The problem of hiddenness: if God exists, why do so many people not believe?' },
      { az: 'Sifətlərin uyğunluğu: “hər şeyə qadirlik” və “hər şeyi bilmək” birlikdə ziddiyyət yaradırmı?', en: 'Coherence of attributes: do “all-powerful” and “all-knowing” lead to contradictions?' },
    ],
    args: ['kalam', 'contingency', 'design', 'ontological', 'moral', 'experience'],
    think: {
      az: 'Səncə, bir arqument Tanrının varlığını göstərsə belə, onun hansı dinin Tanrısı olduğunu da göstərə bilərmi?',
      en: 'Even if an argument showed that God exists, could it also show which religion’s God it is?',
    },
  },
  {
    id: 'deism',
    name: { az: 'Deizm', en: 'Deism' },
    short: {
      az: 'Tanrı dünyanı yaradıb və qanunlarını qoyub, amma sonra ona qarışmır.',
      en: 'God created the world and set its laws, but does not intervene afterwards.',
    },
    def: {
      az: 'Deizmə görə Tanrı dünyanın ilk səbəbidir, onun qanunlarını yaradandır. Amma O, möcüzə göstərmir, vəhy göndərmir, dualara cavab vermir. Məşhur bənzətmə: Tanrı saat düzəldən ustadır — saatı qurur və o, öz-özünə işləyir. Deistlər Tanrını vəhydən yox, ağıldan və təbiətin quruluşundan tanımağa çalışırdılar.',
      en: 'For deism, God is the first cause of the world and the author of its laws. But God performs no miracles, sends no revelation and does not answer prayers. The famous image: God is a watchmaker — builds the watch, winds it, and it runs by itself. Deists sought to know God through reason and nature rather than revelation.',
    },
    beliefs: [
      { az: 'Tanrı var və dünyanı yaradıb.', en: 'God exists and created the world.' },
      { az: 'Tanrını tanımaq üçün ağıl kifayətdir; vəhyə ehtiyac yoxdur.', en: 'Reason is enough to know God; revelation is not needed.' },
      { az: 'Dünya təbiət qanunları ilə işləyir; möcüzə olmur.', en: 'The world runs by natural laws; there are no miracles.' },
    ],
    traditions: {
      az: 'XVII–XVIII əsr Avropa Maarifçiliyi; o dövrün bir çox alim və siyasətçisi.',
      en: 'The European Enlightenment of the 17th–18th centuries; many scientists and politicians of that era.',
    },
    thinkers: [
      { name: { az: 'Çerberili Herbert', en: 'Herbert of Cherbury' } },
      { name: { az: 'Volter', en: 'Voltaire' } },
      { name: { az: 'Tomas Peyn', en: 'Thomas Paine' } },
    ],
    evil: {
      az: 'Tanrı dünyaya qarışmadığı üçün pislik təbiət qanunlarından və insan azadlığından doğur. Tanrı onu “buraxmır” — sadəcə müdaxilə etmir.',
      en: 'Since God does not intervene, evil comes from natural laws and human freedom. God does not “allow” it in a personal sense — God simply does not interfere.',
    },
    strengths: [
      { az: 'Dünyanın səbəbi və qaydası sualına cavab verir, amma elmlə toqquşmur.', en: 'Answers the question of the world’s cause and order without clashing with science.' },
      { az: 'Möcüzələr və ziddiyyətli vəhylər problemindən qaçır.', en: 'Avoids the problems of miracles and conflicting revelations.' },
      { az: 'Yalnız ağıla əsaslanır — hər kəs onu yoxlaya bilər.', en: 'Relies on reason alone — anyone can check it.' },
    ],
    weaknesses: [
      { az: 'Niyə bir yaradıcı dünyanı yaradıb sonra ona tamamilə biganə qalsın?', en: 'Why would a creator make a world and then stay completely indifferent to it?' },
      { az: 'Tanrı heç nə etmirsə, Onun varlığı ilə yoxluğu arasında praktik fərq qalırmı?', en: 'If God does nothing, is there any practical difference between God existing and not existing?' },
      { az: 'Darvindən sonra “dizayn” arqumenti zəiflədi və deizmin əsas dayağı sarsıldı.', en: 'After Darwin the design argument weakened, shaking deism’s main support.' },
    ],
    args: ['kalam', 'contingency', 'design'],
    think: {
      az: 'Dünyaya heç qarışmayan bir Tanrıya inanmaq insanın həyatını necə dəyişə bilər?',
      en: 'How could believing in a God who never intervenes change a person’s life?',
    },
  },
  {
    id: 'panentheism',
    name: { az: 'Panenteizm', en: 'Panentheism' },
    short: {
      az: 'Dünya Tanrının içindədir, amma Tanrı dünyadan daha böyükdür.',
      en: 'The world is within God, but God is greater than the world.',
    },
    def: {
      az: 'Panenteizm — “hər şey Tanrıdadır” deməkdir. Bu baxışa görə dünya Tanrının bir hissəsidir, amma Tanrı onunla bitmir. Bənzətmə: dalğa dənizin içindədir, amma dəniz dalğadan qat-qat böyükdür. Panenteizm teizmlə panteizmin ortasında durur: Tanrı həm dünyaya çox yaxındır, həm də ondan üstündür.',
      en: 'Panentheism means “all is in God”. On this view the world is part of God, but God does not end with it. An image: a wave is within the sea, yet the sea is far greater than the wave. Panentheism sits between theism and pantheism: God is both very close to the world and beyond it.',
    },
    beliefs: [
      { az: 'Dünya Tanrının içindədir.', en: 'The world exists within God.' },
      { az: 'Tanrı dünyadan böyükdür, onunla eyni deyil.', en: 'God is greater than the world, not identical to it.' },
      { az: 'Dünyada baş verənlər Tanrıya da təsir edir.', en: 'What happens in the world affects God too.' },
    ],
    traditions: {
      az: 'XIX–XX əsr “proses teologiyası”; bəzi tədqiqatçılar sufi düşüncəsinin (vəhdət-i vücud) bir qismini də belə şərh edir.',
      en: '19th–20th century “process theology”; some scholars read parts of Sufi thought (the unity of being) this way.',
    },
    thinkers: [
      { name: { az: 'Karl Krauze', en: 'Karl Krause' } },
      { name: { az: 'Alfred Nort Uaytxed', en: 'Alfred North Whitehead' } },
      { name: { az: 'Çarlz Hartşorn', en: 'Charles Hartshorne' } },
    ],
    evil: {
      az: 'Proses teologiyasına görə Tanrı dünyanı məcbur etmir, inandırır. Varlıqların azadlığı var və pislik buradan doğur. Tanrı əzabı kənardan izləmir — onu dünya ilə birlikdə yaşayır.',
      en: 'In process theology God persuades rather than forces the world. Creatures have freedom, and evil arises from it. God does not watch suffering from outside — God shares it with the world.',
    },
    strengths: [
      { az: 'Tanrını həm yaxın, həm də uca göstərir — iki ehtiyacı birləşdirir.', en: 'Shows God as both near and transcendent — uniting two needs.' },
      { az: 'Şər problemini yumşaldır: Tanrı hər şeyi idarə etmir, əzabı paylaşır.', en: 'Softens the problem of evil: God does not control everything and shares suffering.' },
      { az: 'Müasir elmin dəyişən, inkişaf edən dünya təsviri ilə uyğun gəlir.', en: 'Fits modern science’s picture of a changing, evolving world.' },
    ],
    weaknesses: [
      { az: '“Tanrının içində” ifadəsi dəqiq nə deməkdir? Bənzətmədən o yana keçmək çətindir.', en: 'What exactly does “in God” mean? It is hard to go beyond the metaphor.' },
      { az: 'Proses versiyasında Tanrı hər şeyə qadir deyil — ənənəvi inanc üçün bu böyük güzəştdir.', en: 'In its process version God is not all-powerful — a big concession for traditional faith.' },
      { az: 'Teizmlə panteizm arasındakı sərhəd bulanıq qalır.', en: 'The line between it and theism or pantheism stays blurry.' },
    ],
    args: ['contingency', 'experience'],
    think: {
      az: 'Əgər Tanrı dünyanın əzabını yaşayırsa, bu, onu daha az, yoxsa daha çox Tanrı edir?',
      en: 'If God feels the world’s suffering, does that make God less divine, or more?',
    },
  },
  {
    id: 'pantheism',
    name: { az: 'Panteizm', en: 'Pantheism' },
    short: {
      az: 'Tanrı ilə təbiət eyni şeydir. Hər şey birdir və o bir — ilahidir.',
      en: 'God and nature are the same thing. Everything is one, and that one is divine.',
    },
    def: {
      az: 'Panteizmə görə dünyadan ayrı, şəxsi bir Tanrı yoxdur. Kainatın özü — onun qanunları, nizamı, bütövlüyü — ilahidir. Spinozanın məşhur ifadəsi: “Tanrı, yəni Təbiət”. Panteist dua edilən bir Tanrıya yox, hər şeyin vəhdətinə heyranlıqla baxır.',
      en: 'For pantheism there is no personal God apart from the world. The universe itself — its laws, order and wholeness — is divine. Spinoza’s famous phrase: “God, or Nature”. A pantheist does not pray to a God but contemplates the unity of everything with awe.',
    },
    beliefs: [
      { az: 'Hər şey bir bütündür.', en: 'Everything is one whole.' },
      { az: 'Bu bütöv — ilahidir.', en: 'That whole is divine.' },
      { az: 'Tanrı şəxs deyil: istəmir, mükafatlandırmır, cəzalandırmır.', en: 'God is not a person: does not will, reward or punish.' },
    ],
    traditions: {
      az: 'Qədim stoiklər (kosmosu ilahi saydılar); Spinoza; bəzi şərq təlimləri panteizmə yaxın görülür.',
      en: 'The ancient Stoics (who saw the cosmos as divine); Spinoza; some Eastern teachings are seen as close to it.',
    },
    thinkers: [
      { name: { az: 'Spinoza', en: 'Spinoza' }, person: 'spinoza' },
      { name: { az: 'Stoiklər', en: 'The Stoics' }, person: 'marcus' },
      { name: { az: 'Cordano Bruno', en: 'Giordano Bruno' } },
    ],
    evil: {
      az: 'Təbiətdə “xeyir” və “şər” insanın öz baxışından verdiyi adlardır. Zəlzələ kainatın zəruri işləyişinin bir hissəsidir — kimsə onu cəza kimi göndərmir.',
      en: '“Good” and “evil” in nature are names we give from a human point of view. An earthquake is part of the universe’s necessary workings — no one sends it as punishment.',
    },
    strengths: [
      { az: 'Elmlə heç bir ziddiyyəti yoxdur: Tanrı elə təbiətin özüdür.', en: 'No conflict with science: God simply is nature.' },
      { az: 'Kainata qarşı heyranlıq və birlik hissini ifadə edir.', en: 'Expresses awe and a sense of unity with the universe.' },
      { az: 'Şər problemi yaranmır, çünki hər şeyi idarə edən şəxsi iradə yoxdur.', en: 'The problem of evil does not arise, since no personal will controls everything.' },
    ],
    weaknesses: [
      { az: 'Əgər Tanrı = təbiətdirsə, bu, sadəcə təbiətə yeni ad vermək deyilmi? Şopenhauer onu “ateizmin nəzakətli forması” adlandırırdı.', en: 'If God = nature, is this just a new name for nature? Schopenhauer called it “a polite form of atheism”.' },
      { az: 'Şəxsi Tanrı olmadığı üçün dua, bağışlanma, ümid kimi dini təcrübələr mənasızlaşır.', en: 'Without a personal God, prayer, forgiveness and hope lose their meaning.' },
      { az: 'Hər şey ilahidirsə, pislik də ilahidirmi?', en: 'If everything is divine, is evil divine too?' },
    ],
    args: ['contingency', 'experience'],
    think: {
      az: 'Kainata “Tanrı” demək nəyisə dəyişirmi, yoxsa yalnız hisslərimizi?',
      en: 'Does calling the universe “God” change anything, or only how we feel about it?',
    },
  },
  {
    id: 'polytheism',
    name: { az: 'Politeizm', en: 'Polytheism' },
    short: {
      az: 'Bir yox, çoxlu tanrı var — hər birinin öz sahəsi və xarakteri.',
      en: 'There is not one god but many — each with its own domain and character.',
    },
    def: {
      az: 'Politeizm çoxtanrılıqdır. Hər tanrı təbiətin və ya həyatın bir sahəsinə cavabdehdir: dəniz, müharibə, sevgi, məhsul. Tanrılar çox vaxt insan kimi düşünür, sevir, qəzəblənir, bir-biri ilə mübahisə edir. Qədim dünyanın əksər xalqları politeist olub.',
      en: 'Polytheism is belief in many gods. Each god is responsible for an area of nature or life: the sea, war, love, the harvest. The gods often think, love, rage and quarrel like humans. Most peoples of the ancient world were polytheists.',
    },
    beliefs: [
      { az: 'Bir neçə ilahi varlıq var.', en: 'There are several divine beings.' },
      { az: 'Hər tanrının öz gücü və hüdudu var.', en: 'Each god has its own power and limits.' },
      { az: 'Tanrılarla münasibət ayinlər və qurbanlarla qurulur.', en: 'Relationships with the gods are kept through rituals and offerings.' },
    ],
    traditions: {
      az: 'Qədim Yunan, Roma, Misir, Skandinaviya dinləri; şintoizm; hinduizmin bəzi formaları.',
      en: 'Ancient Greek, Roman, Egyptian and Norse religions; Shinto; some forms of Hinduism.',
    },
    thinkers: [
      { name: { az: 'Hesiod (“Teoqoniya”)', en: 'Hesiod (“Theogony”)' } },
      { name: { az: 'Ksenofan (tənqidçi)', en: 'Xenophanes (critic)' } },
      { name: { az: 'Devid Hum (“Dinin təbii tarixi”)', en: 'David Hume (“Natural History of Religion”)' }, person: 'hume' },
    ],
    evil: {
      az: 'Dünyadakı qarışıqlıq tanrıların müxtəlif istəklərindən və münaqişələrindən doğur. Bir tanrının xeyri başqasının qəzəbi ilə toqquşa bilər.',
      en: 'The world’s mix of good and bad comes from the gods’ different wishes and conflicts. One god’s favour can clash with another’s anger.',
    },
    strengths: [
      { az: 'Dünyanın qarışıq — həm gözəl, həm qəddar — olmasını təbii izah edir.', en: 'Naturally explains why the world is mixed — both beautiful and cruel.' },
      { az: 'Zəngin mifologiya, incəsənət və mədəniyyət yaradıb.', en: 'Has produced rich mythology, art and culture.' },
      { az: 'Tək, hər şeyə qadir Tanrının şər problemi burada daha yüngüldür.', en: 'The problem of evil is lighter than for a single all-powerful God.' },
    ],
    weaknesses: [
      { az: 'Tanrıların özlərini kim yaradıb? Son izah sualı cavabsız qalır.', en: 'Who made the gods themselves? The question of ultimate explanation stays open.' },
      { az: 'Ksenofan hələ e.ə. VI əsrdə yazırdı: atların əli olsaydı, tanrıları at kimi çəkərdilər — yəni tanrılar insanın öz əksidir.', en: 'Xenophanes wrote in the 6th century BC: if horses had hands, they would draw gods like horses — gods mirror their makers.' },
      { az: 'Okkamın ülgücü: bir izah kifayətdirsə, niyə çoxlu tanrı fərz edək?', en: 'Occam’s razor: if one explanation is enough, why assume many gods?' },
    ],
    args: ['experience'],
    think: {
      az: 'Niyə tarixdə insanlar zamanla çoxtanrılıqdan təktanrılığa keçib?',
      en: 'Why, over history, did many peoples move from many gods to one?',
    },
  },
  {
    id: 'agnosticism',
    name: { az: 'Aqnostisizm', en: 'Agnosticism' },
    short: {
      az: 'Tanrının olub-olmadığını bilmirik — bəlkə də bilə bilmərik.',
      en: 'We do not know whether God exists — perhaps we cannot know.',
    },
    def: {
      az: 'Aqnostik “Tanrı var” da demir, “Tanrı yoxdur” da. O deyir: bu suala əmin cavab vermək üçün kifayət qədər əsas yoxdur. Zəif aqnostisizm: “mən bilmirəm”. Güclü aqnostisizm: “heç kim bilə bilməz, çünki bu, insan idrakının hüdudlarından kənardadır”. Termini 1869-cu ildə ingilis alimi Tomas Haksli işlədib.',
      en: 'An agnostic says neither “God exists” nor “God does not exist”. The claim is: there is not enough ground for a confident answer. Weak agnosticism: “I don’t know.” Strong agnosticism: “No one can know — it lies beyond the limits of human understanding.” The English scientist Thomas Huxley coined the term in 1869.',
    },
    beliefs: [
      { az: 'Hər iki tərəfin dəlilləri qəti deyil.', en: 'Neither side’s evidence is decisive.' },
      { az: 'Bilmədiyini etiraf etmək dürüstlükdür.', en: 'Admitting you don’t know is honesty.' },
      { az: 'Bəlkə də bəzi suallar ağlın imkanlarından kənardadır.', en: 'Some questions may lie beyond reason’s reach.' },
    ],
    traditions: {
      az: 'Qədim skeptiklər; Protaqor; müasir dövrdə bir çox alim və mütəfəkkir.',
      en: 'The ancient sceptics; Protagoras; many modern scientists and thinkers.',
    },
    thinkers: [
      { name: { az: 'Protaqor', en: 'Protagoras' } },
      { name: { az: 'Devid Hum', en: 'David Hume' }, person: 'hume' },
      { name: { az: 'Tomas Haksli', en: 'Thomas Huxley' } },
      { name: { az: 'Kant (nəzəri sübutların hüdudu)', en: 'Kant (limits of theoretical proof)' }, person: 'kant' },
    ],
    evil: {
      az: 'Aqnostik üçün şər problemi Tanrıya qarşı sübut deyil, amma Tanrının lehinə əminliyi də zəiflədir — sualı açıq saxlayan dəlillərdən biridir.',
      en: 'For an agnostic, evil does not disprove God, but it weakens confidence in God — one of the reasons to keep the question open.',
    },
    strengths: [
      { az: 'İntellektual təvazökarlıq: bilmədiyini bildiyini iddia etmir.', en: 'Intellectual humility: does not claim to know what it doesn’t.' },
      { az: 'Hər iki tərəfin arqumentlərini ədalətlə çəkib-ölçür.', en: 'Weighs both sides’ arguments fairly.' },
      { az: 'Dialoq üçün açıqdır — dindarla da, ateistlə də danışa bilir.', en: 'Open to dialogue — can talk with believers and atheists alike.' },
    ],
    weaknesses: [
      { az: 'Uilyam Ceyms: həyatda insan ya inanan kimi, ya da inanmayan kimi yaşayır — “seçməmək” də bir seçimdir.', en: 'William James: in life one lives either as a believer or not — “not choosing” is also a choice.' },
      { az: 'Güclü aqnostisizm özü bir bilik iddiasıdır: “bunu bilmək mümkün deyil” deməyi haradan bilirik?', en: 'Strong agnosticism is itself a knowledge claim: how do we know it cannot be known?' },
      { az: 'Bəzən dərin düşüncə yox, sadəcə maraqsızlıq olur.', en: 'Sometimes it is not deep thought, just indifference.' },
    ],
    args: ['evil-evidential', 'hiddenness', 'diversity', 'kalam', 'design'],
    think: {
      az: 'Hansı dəlil səni “bilmirəm” mövqeyindən bir tərəfə keçirə bilərdi?',
      en: 'What evidence could move you from “I don’t know” to one side?',
    },
  },
  {
    id: 'atheism',
    name: { az: 'Ateizm', en: 'Atheism' },
    short: {
      az: 'Tanrıya inanmamaq — ya inanc yoxluğu, ya da Tanrının olmadığına inam.',
      en: 'Not believing in God — either an absence of belief, or a belief that there is no God.',
    },
    def: {
      az: 'Ateizmin iki forması var. Zəif (neqativ) ateizm: “Tanrıya inanmıram, çünki inandırıcı səbəb görmürəm.” Güclü (pozitiv) ateizm: “Tanrı yoxdur.” Ateistlərə görə dünyanı təbiət qanunları ilə izah etmək mümkündür, əxlaq və məna isə insanların özündən — ağlından, empatiyasından, cəmiyyətindən — gəlir.',
      en: 'Atheism has two forms. Weak (negative) atheism: “I don’t believe in God because I see no convincing reason.” Strong (positive) atheism: “There is no God.” For atheists the world can be explained by natural laws, while morality and meaning come from humans themselves — reason, empathy, community.',
    },
    beliefs: [
      { az: 'Tanrının varlığı üçün kifayət qədər dəlil yoxdur.', en: 'There is not enough evidence for God’s existence.' },
      { az: 'Sübut yükü iddia edənin üzərindədir.', en: 'The burden of proof lies with the one who makes the claim.' },
      { az: 'Əxlaq və məna Tanrısız da mümkündür.', en: 'Morality and meaning are possible without God.' },
    ],
    traditions: {
      az: 'Qədim hindistanlı Çarvaka məktəbi; Maarifçilik; XIX–XX əsr Avropa fəlsəfəsi; müasir dünyəvi humanizm.',
      en: 'The ancient Indian Charvaka school; the Enlightenment; 19th–20th century European philosophy; modern secular humanism.',
    },
    thinkers: [
      { name: { az: 'Baron Holbax', en: 'Baron d’Holbach' } },
      { name: { az: 'Lüdviq Feyerbax', en: 'Ludwig Feuerbach' } },
      { name: { az: 'Nitsşe', en: 'Nietzsche' }, person: 'nietzsche' },
      { name: { az: 'Sartr', en: 'Sartre' }, person: 'sartre' },
      { name: { az: 'Con Maki', en: 'J. L. Mackie' } },
    ],
    evil: {
      az: 'Ateizm üçün şər problemi yoxdur: əzab təbiətin və insanların işidir, onu “buraxan” biri yoxdur. Əksinə, ateistlər şəri Tanrıya qarşı ən güclü dəlil sayırlar.',
      en: 'For atheism there is no problem of evil: suffering is the work of nature and people, and no one “permits” it. Indeed, atheists see evil as the strongest evidence against God.',
    },
    strengths: [
      { az: 'Sadədir (Okkamın ülgücü): əlavə varlıq fərz etmədən dünyanı izah etməyə çalışır.', en: 'Simple (Occam’s razor): tries to explain the world without assuming extra beings.' },
      { az: 'Elmin uğurları ilə uyğundur: bir vaxt Tanrı ilə izah olunan çox şey indi təbii səbəblərlə izah olunur.', en: 'Fits the success of science: much once explained by God is now explained naturally.' },
      { az: 'Şər və gizlilik problemlərindən azaddır.', en: 'Free of the problems of evil and hiddenness.' },
    ],
    weaknesses: [
      { az: 'Niyə ümumiyyətlə nəsə var, heç nə yox? “Sadəcə var” cavabı çoxlarını qane etmir.', en: 'Why is there something rather than nothing? “It just is” does not satisfy many.' },
      { az: 'Obyektiv əxlaqın əsası nədir? Tənqidçilər deyir ki, Tanrısız “yaxşı” sadəcə zövq məsələsinə çevrilir.', en: 'What grounds objective morality? Critics say that without God “good” becomes a matter of taste.' },
      { az: 'Güclü ateizm bir iddiadır və onun da sübut yükü var.', en: 'Strong atheism is a claim too, and carries its own burden of proof.' },
    ],
    args: ['evil-logical', 'evil-evidential', 'hiddenness', 'paradoxes', 'parsimony', 'diversity'],
    think: {
      az: 'Səncə, insan Tanrıya inanmadan da həyatına dərin məna verə bilərmi? Necə?',
      en: 'Do you think a person can find deep meaning in life without believing in God? How?',
    },
  },
  {
    id: 'fideism',
    name: { az: 'Fideizm', en: 'Fideism' },
    short: {
      az: 'İnanc ağılın sübutlarına əsaslanmır — o, başqa bir yoldur.',
      en: 'Faith does not rest on rational proof — it is a different path.',
    },
    def: {
      az: 'Fideizmə görə Tanrıya inanc arqumentlərlə qurulmur. Ağıl bu sualı həll etmək üçün kifayət deyil, ya da bu, ağlın işi deyil. İnanc — sevgi kimi — şəxsi bir qərar, “sıçrayış”dır. Bu, Tanrıya inananların bir mövqeyidir, amma onun sualı başqadır: Tanrı varmı yox, inanca sübut lazımdırmı?',
      en: 'For fideism, faith in God is not built on arguments. Reason is not enough to settle the question, or it is not reason’s job. Faith — like love — is a personal decision, a “leap”. It is a believer’s position, but it answers a different question: not whether God exists, but whether faith needs proof.',
    },
    beliefs: [
      { az: 'Ağılın hüdudları var.', en: 'Reason has limits.' },
      { az: 'İnanc sübuta söykənmir, amma buna görə dəyərsiz deyil.', en: 'Faith does not rest on proof, yet it is not worthless for that.' },
      { az: 'Ən dərin həqiqətlər şəxsi təcrübə ilə tanınır.', en: 'The deepest truths are known through personal experience.' },
    ],
    traditions: {
      az: 'Xristian düşüncəsində Paskal və Kyerkeqor; müxtəlif dinlərdə mistik ənənələr ağılın hüdudlarını vurğulayıb.',
      en: 'In Christian thought, Pascal and Kierkegaard; mystical traditions in many religions have stressed reason’s limits.',
    },
    thinkers: [
      { name: { az: 'Kyerkeqor', en: 'Kierkegaard' }, person: 'kierkegaard' },
      { name: { az: 'Paskal', en: 'Pascal' }, person: 'pascal' },
    ],
    evil: {
      az: 'Fideist şərə nəzəri izah axtarmaya bilər. Kyerkeqor üçün İbrahim peyğəmbərin sınağı göstərir ki, inanc insan məntiqinin anlamadığı yerdə də davam edir.',
      en: 'A fideist may not seek a theoretical answer to evil. For Kierkegaard, the trial of Abraham shows that faith continues even where human logic cannot follow.',
    },
    strengths: [
      { az: 'İnancı arqumentlərin dəyişkən taleyindən qoruyur.', en: 'Protects faith from the shifting fortunes of arguments.' },
      { az: 'Ağılın hüdudları haqqında dürüstdür.', en: 'Is honest about the limits of reason.' },
      { az: 'Bir çox dindarın inancını real olaraq necə yaşadığına uyğundur.', en: 'Matches how many believers actually live their faith.' },
    ],
    weaknesses: [
      { az: 'Sübut yoxdursa, hansı inancın doğru olduğunu necə seçmək olar?', en: 'Without evidence, how do you choose which faith is true?' },
      { az: 'Tənqidə qapalı mövqe başqalarına izah edilə və ya müdafiə edilə bilmir.', en: 'A view closed to criticism cannot be explained or defended to others.' },
      { az: 'Hər şeyi “inanc” adı ilə qəbul etmək təhlükəli ola bilər.', en: 'Accepting anything in the name of “faith” can be dangerous.' },
    ],
    args: ['pascal', 'experience'],
    think: {
      az: 'Sevgi kimi bəzi şeyləri sübutsuz qəbul edirik. İnanc da belədirmi, yoxsa fərq var?',
      en: 'We accept some things, like love, without proof. Is faith like that, or is there a difference?',
    },
  },
]

// ───────────────────────────────────────── arguments

export const args: GodArg[] = [
  // ── FOR ──
  {
    id: 'kalam',
    side: 'for',
    name: { az: 'Kəlam arqumenti (ilk səbəb)', en: 'The kalam argument (first cause)' },
    short: {
      az: 'Kainatın başlanğıcı varsa, onu başladan bir səbəb də olmalıdır.',
      en: 'If the universe had a beginning, something must have caused it to begin.',
    },
    origin: {
      az: 'İslam kəlam alimləri (əl-Kindi, Qəzali, XI əsr); müasir dövrdə Uilyam Leyn Kreyq (1979).',
      en: 'Islamic kalam scholars (al-Kindi, al-Ghazali, 11th c.); in modern times William Lane Craig (1979).',
    },
    people: ['ghazali'],
    steps: [
      { az: 'Başlanğıcı olan hər şeyin bir səbəbi var.', en: 'Everything that begins to exist has a cause.' },
      { az: 'Kainatın başlanğıcı var.', en: 'The universe began to exist.' },
    ],
    conclusion: { az: 'Deməli, kainatın bir səbəbi var.', en: 'Therefore, the universe has a cause.' },
    plain: {
      az: 'Heç nə yoxdan, səbəbsiz yaranmır — bunu gündəlik həyatdan bilirik. Qəzali iddia edirdi ki, keçmiş sonsuz ola bilməz: əgər sonsuz sayda gün keçməli olsaydı, bu günə heç vaxt çatmazdıq. Müasir kosmologiya da (Böyük Partlayış) kainatın təxminən 13,8 milyard il əvvəl başladığını göstərir. Tərəfdarlara görə bu səbəb zaman və məkandan kənar, çox güclü bir varlıq olmalıdır.',
      en: 'Nothing comes from nothing without a cause — we know this from daily life. Al-Ghazali argued the past cannot be infinite: if infinitely many days had to pass, we would never reach today. Modern cosmology (the Big Bang) also shows the universe began about 13.8 billion years ago. Defenders say this cause must be beyond time and space and immensely powerful.',
    },
    strengths: [
      { az: 'Hər iki addım intuitiv görünür və gündəlik təcrübəyə uyğundur.', en: 'Both steps seem intuitive and fit everyday experience.' },
      { az: 'Böyük Partlayış nəzəriyyəsi kainatın başlanğıcı olduğunu dəstəkləyir.', en: 'Big Bang cosmology supports the idea that the universe had a beginning.' },
      { az: 'Sonsuz keçmişin paradoksları ciddi fəlsəfi sualdır.', en: 'The paradoxes of an infinite past are a serious philosophical puzzle.' },
    ],
    objections: [
      { az: 'Səbəbiyyət qanunu kainatın içindəki şeylər üçün doğrudur; kainatın özünə də aiddirmi?', en: 'Causation holds for things inside the universe; does it apply to the universe itself?' },
      { az: 'Kvant fizikasında bəzi hadisələr səbəbsiz görünür. Bəlkə kainatın başlanğıcı da elədir.', en: 'Some quantum events seem uncaused. Perhaps the universe’s beginning is like that.' },
      { az: 'Arqument ən çoxu “bir səbəb” göstərir — onun şəxsi, xeyirxah və ya tək olduğunu göstərmir.', en: 'At most it shows “a cause” — not that the cause is personal, good or one.' },
      { az: '“Bəs Tanrını kim yaradıb?” sualı.', en: 'The question “Then who made God?”' },
    ],
    replies: [
      { az: 'Arqument “var olan hər şeyin” yox, “başlanğıcı olan hər şeyin” səbəbi olduğunu deyir. Tanrının başlanğıcı yoxdur.', en: 'The argument says “everything that begins to exist”, not “everything that exists” has a cause. God did not begin.' },
      { az: 'Kvant hadisələri boşluqdan yox, kvant sahəsindən yaranır — o da “heç nə” deyil.', en: 'Quantum events arise from a quantum field, not from nothing — and a field is not “nothing”.' },
      { az: 'Zaman və materiyanın səbəbi özü zamandan və materiyadan kənar olmalıdır — bu, ən azı bəzi ilahi sifətlərə işarədir.', en: 'A cause of time and matter must itself be beyond time and matter — pointing to at least some divine attributes.' },
    ],
    think: {
      az: 'Səncə, “sonsuz keçmiş” ideyası mümkündürmü? Niyə?',
      en: 'Do you think an “infinite past” is possible? Why?',
    },
  },
  {
    id: 'contingency',
    side: 'for',
    name: { az: 'Zəruri varlıq arqumenti', en: 'The argument from contingency' },
    short: {
      az: 'Hər şey başqa bir şeydən asılıdırsa, nəhayət heç nədən asılı olmayan bir varlıq olmalıdır.',
      en: 'If everything depends on something else, there must ultimately be a being that depends on nothing.',
    },
    origin: {
      az: 'İbn Sina (XI əsr, “Vacibül-vücud”); Foma Akvinalı; Leybnis (XVIII əsr).',
      en: 'Avicenna (11th c., the “Necessary Existent”); Thomas Aquinas; Leibniz (18th c.).',
    },
    people: ['avicenna', 'aquinas'],
    steps: [
      { az: 'Hər şey ya zəruri (olmaya bilməyən), ya da mümkün (olmaya da bilən) varlıqdır.', en: 'Everything is either necessary (cannot fail to exist) or contingent (could have not existed).' },
      { az: 'Mümkün varlıq öz varlığını başqa bir şeyə borcludur.', en: 'A contingent thing owes its existence to something else.' },
      { az: 'Bütün mümkün varlıqların zənciri də izah tələb edir və bu izah zəncirin içində ola bilməz.', en: 'The whole chain of contingent things also needs an explanation, which cannot lie inside the chain.' },
    ],
    conclusion: {
      az: 'Deməli, zəruri bir varlıq var — mövcudluğu heç nədən asılı olmayan.',
      en: 'Therefore, a necessary being exists — one whose existence depends on nothing.',
    },
    plain: {
      az: 'Sən var olmaya da bilərdin — valideynlərin görüşməsəydi. Valideynlərin də, Yer kürəsi də, ulduzlar da belədir: hamısı başqa şeylərdən asılıdır. Bu asılılıq zənciri nəyəsə bağlanmalıdır. İbn Sina bunu “Vacibül-vücud” — varlığı zəruri olan adlandırırdı. Leybnis sualı belə qoyurdu: “Niyə ümumiyyətlə nəsə var, heç nə yox?”',
      en: 'You might not have existed — had your parents never met. The same goes for your parents, the Earth and the stars: all depend on other things. This chain of dependence must hang on something. Avicenna called it the “Necessary Existent”. Leibniz put the question this way: “Why is there something rather than nothing?”',
    },
    strengths: [
      { az: 'Kainatın başlanğıcı olub-olmamasından asılı deyil — sonsuz kainatda da işləyir.', en: 'Does not depend on whether the universe had a beginning — works even for an eternal universe.' },
      { az: '“Niyə nəsə var?” sualı fəlsəfənin ən dərin suallarındandır.', en: '“Why is there anything?” is one of philosophy’s deepest questions.' },
      { az: 'Elm hər şeyə izah axtarır — arqument bu prinsipi sona qədər aparır.', en: 'Science seeks explanations for everything — the argument takes that principle all the way.' },
    ],
    objections: [
      { az: 'Rassel (1948): “Kainat sadəcə var, vəssalam.” Hər şeyin izahı olmalı deyil.', en: 'Russell (1948): “The universe is just there, and that’s all.” Not everything needs an explanation.' },
      { az: 'Hissələrin hər birinin səbəbi olması bütövün də səbəbi olmasını tələb etmir (tərkib xətası).', en: 'Each part having a cause does not mean the whole has one (the fallacy of composition).' },
      { az: '“Zəruri varlıq” anlayışı ziddiyyətsizdirmi? Hume: istənilən şeyin olmadığını təsəvvür edə bilərik.', en: 'Is a “necessary being” even coherent? Hume: we can imagine anything not existing.' },
    ],
    replies: [
      { az: 'Hər şeyin izahı olduğu prinsipindən imtina etsək, elmin özünün əsası da zəifləyər.', en: 'If we give up the principle that things have explanations, the basis of science weakens too.' },
      { az: 'Tərkib xətası həmişə xəta deyil: hər kərpic qırmızıdırsa, divar da qırmızıdır.', en: 'Composition is not always a fallacy: if every brick is red, the wall is red.' },
      { az: 'Riyazi həqiqətlər kimi zəruri olan şeylər var — deməli, zəruri varlıq ideyası mənasız deyil.', en: 'Some things, like mathematical truths, are necessary — so the idea of a necessary being is not meaningless.' },
    ],
    think: {
      az: 'Kainat “sadəcə var” ola bilərmi, yoxsa onun da izahı olmalıdır?',
      en: 'Can the universe “just be”, or must it too have an explanation?',
    },
  },
  {
    id: 'design',
    side: 'for',
    name: { az: 'Dizayn və incə tənzimləmə arqumenti', en: 'The design and fine-tuning argument' },
    short: {
      az: 'Kainatın həyata bu qədər uyğun qurulması təsadüf deyil, ağıllı bir planın əlamətidir.',
      en: 'That the universe is so finely suited to life is not chance but a sign of intelligent design.',
    },
    origin: {
      az: 'Qədim dövrdən var; Uilyam Peyli, “Saatsaz” (1802); XX əsrdə fizikanın “incə tənzimləmə” kəşfləri.',
      en: 'Ancient roots; William Paley, the “watchmaker” (1802); 20th-century physics and “fine-tuning”.',
    },
    steps: [
      { az: 'Kainatın fiziki sabitləri (cazibə qüvvəsi, kosmoloji sabit və s.) həyatın mümkün olması üçün çox dar bir aralıqdadır.', en: 'The universe’s physical constants (gravity, the cosmological constant, etc.) lie in a very narrow life-permitting range.' },
      { az: 'Bunun səbəbi ya zərurət, ya təsadüf, ya da dizayndır.', en: 'This is due to necessity, chance or design.' },
      { az: 'Zərurət və təsadüf bunu yaxşı izah etmir.', en: 'Necessity and chance do not explain it well.' },
    ],
    conclusion: { az: 'Deməli, ən yaxşı izah dizayndır.', en: 'Therefore, design is the best explanation.' },
    plain: {
      az: 'Peyli belə yazırdı: çöldə daş görsən, düşünməzsən ki, onu kimsə qoyub. Amma saat tapsan, bilərsən ki, onu usta düzəldib — çünki hissələri məqsədə uyğun birləşib. Canlılar saatdan da mürəkkəbdir. Müasir versiya fizikadan gəlir: əgər bəzi sabitlər bir az fərqli olsaydı, ulduzlar, atomlar və həyat yaranmazdı.',
      en: 'Paley wrote: if you find a stone on a heath, you don’t assume someone put it there. But if you find a watch, you know a maker built it — its parts fit a purpose. Living things are more complex than watches. The modern version comes from physics: if some constants were slightly different, stars, atoms and life could not exist.',
    },
    strengths: [
      { az: 'İncə tənzimləmənin özü bir çox fizik tərəfindən fakt kimi qəbul edilir; mübahisə onun izahı ətrafındadır.', en: 'Many physicists accept fine-tuning as a fact; the debate is about how to explain it.' },
      { az: 'Gündəlik məntiqə uyğundur: mürəkkəb, məqsədli quruluş adətən ağıldan gəlir.', en: 'Fits everyday reasoning: complex, purposeful structure usually comes from a mind.' },
      { az: 'Müasir elmlə birbaşa əlaqəlidir.', en: 'Engages directly with modern science.' },
    ],
    objections: [
      { az: 'Darvin (1859): canlıların “dizaynı” təbii seçmə ilə, plansız da izah olunur.', en: 'Darwin (1859): the “design” of living things is explained by natural selection, without a plan.' },
      { az: 'Multiverse fərziyyəsi: əgər saysız kainat varsa, birinin həyata uyğun olması təəccüblü deyil.', en: 'The multiverse: if countless universes exist, one suited to life is no surprise.' },
      { az: 'Antropik prinsip: həyata uyğun olmayan kainatda biz olmazdıq ki, bunu soruşaq.', en: 'The anthropic principle: in a universe unfit for life, we would not be here to ask.' },
      { az: 'Hume (1779): dizayner varsa, onu kim dizayn edib? Həm də dizayner çox, qüsurlu və ya artıq ölmüş ola bilər.', en: 'Hume (1779): who designed the designer? And the designer could be many, flawed, or long gone.' },
    ],
    replies: [
      { az: 'Darvin canlıları izah edir, amma fizika qanunlarının özünün incə tənzimlənməsini izah etmir.', en: 'Darwin explains living things, but not the fine-tuning of the laws of physics themselves.' },
      { az: 'Multiverse heç vaxt müşahidə olunmayıb — o da Tanrı qədər “görünməz” fərziyyədir.', en: 'The multiverse has never been observed — it is as “invisible” a hypothesis as God.' },
      { az: 'Ən yaxşı izahın özünün izahı olmasa belə, o, yenə ən yaxşı izah ola bilər.', en: 'An explanation can be the best one even if it has no explanation itself.' },
    ],
    think: {
      az: 'Multiverse və Tanrı — hansı fərziyyə sənə daha sadə görünür? Niyə?',
      en: 'The multiverse or God — which hypothesis seems simpler to you? Why?',
    },
  },
  {
    id: 'ontological',
    side: 'for',
    name: { az: 'Ontoloji arqument', en: 'The ontological argument' },
    short: {
      az: 'Tanrı ideyasının özündən Onun varlığı çıxır.',
      en: 'God’s existence follows from the very idea of God.',
    },
    origin: {
      az: 'Kenterberili Anselm, “Proslogion” (1078); Dekart; müasir modal versiya — Alvin Plantinqa (1974).',
      en: 'Anselm of Canterbury, “Proslogion” (1078); Descartes; modern modal version — Alvin Plantinga (1974).',
    },
    people: ['anselm', 'descartes'],
    steps: [
      { az: 'Tanrı “ondan daha böyüyü təsəvvür edilə bilməyən varlıq”dır.', en: 'God is “that than which nothing greater can be conceived”.' },
      { az: 'Belə bir varlıq ən azı ağlımızda var.', en: 'Such a being exists at least in our minds.' },
      { az: 'Həm ağılda, həm reallıqda var olmaq yalnız ağılda var olmaqdan böyükdür.', en: 'Existing in reality as well as in the mind is greater than existing in the mind alone.' },
    ],
    conclusion: {
      az: 'Deməli, Tanrı reallıqda da var — yoxsa ondan daha böyüyünü təsəvvür edə bilərdik.',
      en: 'Therefore, God exists in reality too — otherwise we could conceive of something greater.',
    },
    plain: {
      az: 'Bu, yeganə arqumentdir ki, dünyaya baxmadan, yalnız düşünərək nəticə çıxarır. Anselmin fikri: ən mükəmməl varlığı düşün. Əgər o yalnız xəyaldadırsa, ondan daha mükəmməli var — reallıqda da olanı. Deməli, ən mükəmməl varlıq real olmalıdır. Bir çoxları ilk dəfə eşidəndə onu “hiylə” sanır, amma səhvin harada olduğunu göstərmək təəccüblü dərəcədə çətindir.',
      en: 'This is the only argument that reaches its conclusion by thought alone, without looking at the world. Anselm’s idea: think of the most perfect being. If it exists only in imagination, something more perfect is possible — one that also exists in reality. So the most perfect being must be real. Many first hear it as a trick, yet pinning down exactly where it goes wrong is surprisingly hard.',
    },
    strengths: [
      { az: 'Əgər doğrudursa, Tanrının varlığı zəruri həqiqət olar — riyaziyyat kimi.', en: 'If sound, God’s existence would be a necessary truth — like mathematics.' },
      { az: 'Doqquz əsrdir fəlsəfəçiləri məşğul edir; tam təkzib edildiyi barədə razılıq yoxdur.', en: 'It has occupied philosophers for nine centuries; there is no consensus it has been refuted.' },
      { az: 'Plantinqanın modal versiyası məntiqi baxımdan etibarlıdır (nəticə müqəddimələrdən çıxır).', en: 'Plantinga’s modal version is logically valid (the conclusion follows from the premises).' },
    ],
    objections: [
      { az: 'Qaunilo (Anselmin müasiri): eyni məntiqlə “ən mükəmməl ada” da var olmalıdır — bu, absurddur.', en: 'Gaunilo (Anselm’s contemporary): by the same logic “the most perfect island” must exist — which is absurd.' },
      { az: 'Kant: “varlıq” bir şeyin xüsusiyyəti deyil. 100 real manat ilə 100 xəyali manatın tərifi eynidir.', en: 'Kant: “existence” is not a property. A hundred real coins and a hundred imagined ones have the same definition.' },
      { az: 'Modal versiyada “Tanrının olması mümkündür” addımı nəticəni əvvəlcədən qəbul etməyə bənzəyir.', en: 'In the modal version, “it is possible that God exists” seems to assume the conclusion.' },
    ],
    replies: [
      { az: 'Adanın “ən mükəmməl” həddi yoxdur (həmişə bir palma da artırmaq olar), Tanrının isə var — ona görə bənzətmə işləmir.', en: 'An island has no maximal perfection (you can always add a palm tree), but God does — so the analogy fails.' },
      { az: 'Plantinqa özü də deyir ki, arqument Tanrını sübut etmir, amma inancın rasional ola biləcəyini göstərir.', en: 'Plantinga himself says it does not prove God, but shows that belief can be rational.' },
    ],
    think: {
      az: 'Yalnız düşüncə ilə reallıq haqqında nəsə bilmək mümkündürmü?',
      en: 'Can we learn something about reality by thought alone?',
    },
  },
  {
    id: 'moral',
    side: 'for',
    name: { az: 'Əxlaqi arqument', en: 'The moral argument' },
    short: {
      az: 'Obyektiv yaxşı və pis varsa, onların bir mənbəyi olmalıdır.',
      en: 'If objective good and evil exist, they need a source.',
    },
    origin: {
      az: 'Kant (Tanrı əxlaqın “postulatı” kimi, 1788); müasir versiya — Uilyam Leyn Kreyq və başqaları.',
      en: 'Kant (God as a “postulate” of morality, 1788); modern version — William Lane Craig and others.',
    },
    people: ['kant'],
    steps: [
      { az: 'Tanrı yoxdursa, obyektiv əxlaqi dəyərlər də yoxdur.', en: 'If God does not exist, objective moral values do not exist.' },
      { az: 'Obyektiv əxlaqi dəyərlər var (məsələn, uşağa əyləncə üçün işgəncə vermək həqiqətən pisdir).', en: 'Objective moral values do exist (e.g. torturing a child for fun is truly wrong).' },
    ],
    conclusion: { az: 'Deməli, Tanrı var.', en: 'Therefore, God exists.' },
    plain: {
      az: 'Biz bəzi şeylərin sadəcə “xoşumuza gəlmədiyini” yox, həqiqətən pis olduğunu hiss edirik — bütün dünya başqa cür düşünsə belə. Bəs bu “həqiqətən pis” haradan gəlir? Arqumentə görə, əgər hər şey yalnız atom və təsadüfdürsə, əxlaq da yalnız fikir və adət olardı. Obyektiv əxlaqın möhkəm təməli üçün ondan daha yüksək bir mənbə lazımdır.',
      en: 'We feel some things are not just “disliked” but truly wrong — even if the whole world thought otherwise. So where does “truly wrong” come from? The argument says: if everything is just atoms and chance, morality would be mere opinion and custom. Objective morality needs a higher foundation.',
    },
    strengths: [
      { az: 'Əksər insanların güclü intuisiyasına söykənir: bəzi şeylər hər yerdə və həmişə pisdir.', en: 'Rests on a strong intuition most people share: some things are wrong everywhere and always.' },
      { az: 'Əxlaqın “niyə” məcburi olduğu sualına cavab verir.', en: 'Answers why morality is binding at all.' },
      { az: 'Fəlsəfi ateistlərin bir qismi də Tanrısız obyektiv əxlaqı əsaslandırmağın çətin olduğunu qəbul edir.', en: 'Some philosophical atheists also admit that grounding objective morality without God is hard.' },
    ],
    objections: [
      { az: 'Evtifron dilemması (Platon): bir şey Tanrı istədiyi üçün yaxşıdır, yoxsa yaxşı olduğu üçün Tanrı onu istəyir? Birincisi əxlaqı özbaşına edir, ikincisi Tanrısız da yaxşının olduğunu göstərir.', en: 'The Euthyphro dilemma (Plato): is something good because God wills it, or does God will it because it is good? The first makes morality arbitrary; the second shows goodness exists without God.' },
      { az: 'Dünyəvi əxlaq nəzəriyyələri (utilitarizm, Kant etikası) Tanrıya istinad etmədən obyektivlik iddia edir.', en: 'Secular moral theories (utilitarianism, Kantian ethics) claim objectivity without appealing to God.' },
      { az: 'Təkamül əxlaqi hisslərimizi izah edə bilər: əməkdaşlıq edən qruplar daha yaxşı yaşayıb.', en: 'Evolution can explain our moral sense: cooperative groups survived better.' },
    ],
    replies: [
      { az: 'Evtifrona cavab: yaxşılıq Tanrının əmrindən yox, Onun təbiətindən gəlir — nə özbaşına, nə də Ondan kənardadır.', en: 'Reply to Euthyphro: goodness comes from God’s nature, not mere command — neither arbitrary nor outside God.' },
      { az: 'Təkamül hisslərimizin necə yarandığını izah edir, amma onların doğru olub-olmadığını izah etmir.', en: 'Evolution explains how our moral feelings arose, not whether they are true.' },
    ],
    think: {
      az: 'Hamı razılaşsa belə pis qalan bir şey düşünə bilərsənmi? O nəyə görə pisdir?',
      en: 'Can you think of something that would stay wrong even if everyone agreed to it? Why is it wrong?',
    },
  },
  {
    id: 'experience',
    side: 'for',
    name: { az: 'Dini təcrübə arqumenti', en: 'The argument from religious experience' },
    short: {
      az: 'Milyonlarla insan ilahi varlığı birbaşa yaşadığını deyir — bu, dəlil sayıla bilər.',
      en: 'Millions of people report directly experiencing the divine — that can count as evidence.',
    },
    origin: {
      az: 'Uilyam Ceyms, “Dini təcrübənin müxtəlifliyi” (1902); Riçard Suinbern; sufi və digər mistik ənənələr.',
      en: 'William James, “The Varieties of Religious Experience” (1902); Richard Swinburne; Sufi and other mystical traditions.',
    },
    people: ['ghazali'],
    steps: [
      { az: 'Bir şeyin mövcud olduğunu yaşayırıqsa, əksinə ciddi səbəb yoxdursa, ona inanmaq rasionaldır.', en: 'If we experience something as present, and there is no strong reason to doubt it, it is rational to believe it.' },
      { az: 'Bir çox insan Tanrının hüzurunu yaşadığını bildirir.', en: 'Many people report experiencing the presence of God.' },
      { az: 'Bu təcrübələri inkar etmək üçün qəti səbəb yoxdur.', en: 'There is no decisive reason to dismiss these experiences.' },
    ],
    conclusion: {
      az: 'Deməli, Tanrının varlığına inanmaq rasionaldır.',
      en: 'Therefore, it is rational to believe that God exists.',
    },
    plain: {
      az: 'Biz gördüyümüz masaya, eşitdiyimiz səsə, bir səbəb olmadıqca, inanırıq. Suinbern bunu “etibar prinsipi” adlandırır. Bəs niyə dini təcrübəni istisna edək? Qəzali də uzun axtarışdan sonra yazırdı ki, bəzi həqiqətləri dəlil-sübutla yox, mənəvi təcrübə ilə — “zövq” ilə tanımaq olar.',
      en: 'We trust the table we see and the sound we hear unless we have a reason not to. Swinburne calls this the “principle of credulity”. So why make religious experience the exception? Al-Ghazali, after a long search, also wrote that some truths are known not by proof but by inner experience — by “taste”.',
    },
    strengths: [
      { az: 'Bütün mədəniyyətlərdə və dövrlərdə rast gəlinir.', en: 'Found across all cultures and eras.' },
      { az: 'Bilik haqqında ümumi prinsipə (təcrübəyə etibar) əsaslanır.', en: 'Rests on a general principle of knowledge (trusting experience).' },
      { az: 'Təcrübəni yaşayan insan üçün o, ən güclü dəlil ola bilər.', en: 'For the person who has the experience, it can be the strongest evidence of all.' },
    ],
    objections: [
      { az: 'Fərqli dinlərin təcrübələri bir-birinə zidd görünür — hamısı doğru ola bilməz.', en: 'Experiences in different religions seem to conflict — they cannot all be true.' },
      { az: 'Psixologiya və nevrologiya bu təcrübələri beyin prosesləri ilə izah edə bilər.', en: 'Psychology and neuroscience may explain these experiences as brain processes.' },
      { az: 'Şəxsi təcrübəni başqası yoxlaya bilmir; görmə ilə fərqli olaraq, hamı onu yaşamır.', en: 'Personal experience cannot be checked by others; unlike sight, not everyone has it.' },
    ],
    replies: [
      { az: 'Bütün təcrübələrin beyin fəaliyyəti ilə müşayiət olunması onların yalan olduğunu göstərmir — masanı görmək də beyin prosesidir.', en: 'That experiences come with brain activity doesn’t make them false — seeing a table is a brain process too.' },
      { az: 'Fərqli dinlərin təcrübələrində ortaq nüvə var: daha böyük, xeyirxah bir gerçəkliklə qarşılaşma hissi.', en: 'Experiences across religions share a common core: a sense of meeting a greater, good reality.' },
    ],
    think: {
      az: 'Başqasının dərin təcrübəsi sənin üçün dəlil sayıla bilərmi?',
      en: 'Can someone else’s deep experience count as evidence for you?',
    },
  },
  {
    id: 'pascal',
    side: 'for',
    name: { az: 'Paskalın mərcəsi', en: 'Pascal’s wager' },
    short: {
      az: 'Tanrıya inanmaq ağıllı mərcədir: itirəcəyin az, qazanacağın sonsuzdur.',
      en: 'Believing in God is a wise bet: you risk little and could gain infinitely.',
    },
    origin: {
      az: 'Blez Paskal, “Düşüncələr” (ölümündən sonra, 1670).',
      en: 'Blaise Pascal, “Pensées” (published posthumously, 1670).',
    },
    people: ['pascal'],
    steps: [
      { az: 'Tanrının olub-olmadığını ağılla dəqiq bilə bilmərik.', en: 'We cannot know for certain by reason whether God exists.' },
      { az: 'İnansan və Tanrı varsa — sonsuz qazanc; inansan və yoxdursa — kiçik itki.', en: 'If you believe and God exists — infinite gain; if you believe and God doesn’t — small loss.' },
      { az: 'İnanmasan və Tanrı varsa — böyük itki; inanmasan və yoxdursa — kiçik qazanc.', en: 'If you don’t believe and God exists — great loss; if you don’t and God doesn’t — small gain.' },
    ],
    conclusion: {
      az: 'Deməli, inanmaq daha ağıllı seçimdir.',
      en: 'Therefore, believing is the wiser choice.',
    },
    plain: {
      az: 'Bu, Tanrının varlığını sübut etmək üçün yox, inanmağın niyə ağıllı olduğunu göstərmək üçün arqumentdir. Paskal riyaziyyatçı idi və ehtimal nəzəriyyəsinin banilərindən sayılır. Onun fikri: həyat bir mərcdir və hamı mərc edir — seçməmək də seçimdir. Belə olduqda mümkün nəticələri ölçmək lazımdır.',
      en: 'This is not an argument that God exists, but that believing is wise. Pascal was a mathematician and a founder of probability theory. His idea: life is a bet and everyone is betting — not choosing is also a choice. So we should weigh the possible outcomes.',
    },
    strengths: [
      { az: 'Qeyri-müəyyənlik şəraitində qərar vermə haqqında ağıllı düşüncədir — qərar nəzəriyyəsinin erkən nümunəsi.', en: 'Clever thinking about decisions under uncertainty — an early example of decision theory.' },
      { az: 'Sübutun yoxluğunda da inancın praktik tərəfini göstərir.', en: 'Shows the practical side of belief even without proof.' },
    ],
    objections: [
      { az: '“Çoxlu tanrı” etirazı: hansı Tanrıya mərc etməli? Səhv Tanrıya inanmaq da riskdir.', en: 'The “many gods” objection: which God should you bet on? Believing in the wrong one is also a risk.' },
      { az: 'İnancı iradə ilə seçmək olmur — özümüzü sadəcə inanmağa məcbur edə bilmərik.', en: 'Belief cannot simply be chosen — we can’t force ourselves to believe.' },
      { az: 'Xeyirxah Tanrı hesablama ilə edilən inancı mükafatlandırarmı?', en: 'Would a good God reward belief adopted out of calculation?' },
    ],
    replies: [
      { az: 'Paskalın özü cavab verirdi: inanan kimi yaşa, dua et — inanc zamanla gələcək.', en: 'Pascal’s own answer: live as believers do, pray — belief will follow in time.' },
      { az: 'Bütün mümkün tanrılar yox, yalnız real, ciddi seçimlər nəzərə alınmalıdır.', en: 'Only real, live options need to be weighed, not every conceivable god.' },
    ],
    think: {
      az: 'Mənfəət hesabı ilə qəbul edilən inanc səmimi ola bilərmi?',
      en: 'Can belief adopted for gain be sincere?',
    },
  },

  // ── AGAINST ──
  {
    id: 'evil-logical',
    side: 'against',
    name: { az: 'Şər problemi (məntiqi forma)', en: 'The problem of evil (logical form)' },
    short: {
      az: 'Hər şeyə qadir və tam xeyirxah Tanrı ilə şərin varlığı bir-birinə ziddir.',
      en: 'An all-powerful, wholly good God and the existence of evil contradict each other.',
    },
    origin: {
      az: 'Epikürə aid edilir (e.ə. III əsr); Devid Hum (1779); Con Maki, “Şər və hər şeyə qadirlik” (1955).',
      en: 'Attributed to Epicurus (3rd c. BC); David Hume (1779); J. L. Mackie, “Evil and Omnipotence” (1955).',
    },
    people: ['hume'],
    steps: [
      { az: 'Tanrı varsa, O, hər şeyə qadir, hər şeyi bilən və tam xeyirxahdır.', en: 'If God exists, God is all-powerful, all-knowing and wholly good.' },
      { az: 'Xeyirxah varlıq bacardığı qədər şəri aradan qaldırar.', en: 'A good being eliminates evil as far as it can.' },
      { az: 'Hər şeyə qadir və hər şeyi bilən varlıq bütün şəri aradan qaldıra bilər.', en: 'An all-powerful, all-knowing being can eliminate all evil.' },
      { az: 'Amma şər var.', en: 'But evil exists.' },
    ],
    conclusion: { az: 'Deməli, belə bir Tanrı yoxdur.', en: 'Therefore, no such God exists.' },
    plain: {
      az: 'Hum qədim sualı belə yazmışdı: Tanrı şəri dayandırmaq istəyir, amma bacarmırmı? Onda qadir deyil. Bacarır, amma istəmirmi? Onda xeyirxah deyil. Həm istəyir, həm bacarır? Onda şər haradan gəlir? Bu, Tanrı inancına qarşı ən qədim və ən çox müzakirə olunan arqumentdir.',
      en: 'Hume put the ancient question like this: Is God willing to prevent evil, but not able? Then God is not omnipotent. Able, but not willing? Then God is malevolent. Both able and willing? Then where does evil come from? It is the oldest and most discussed argument against belief in God.',
    },
    strengths: [
      { az: 'Sadə və güclüdür — hər kəs əzabı görür və hiss edir.', en: 'Simple and powerful — everyone sees and feels suffering.' },
      { az: 'Teizmin özünün qəbul etdiyi sifətlərdən çıxış edir.', en: 'Starts from attributes theism itself accepts.' },
    ],
    objections: [
      { az: 'Azad iradə müdafiəsi (Plantinqa, 1974): azad varlıqlar yaratmaq böyük xeyirdir, amma azadlıq pislik etmək imkanını da daxil edir. Tanrının buna “kifayət qədər səbəbi” ola bilər — ziddiyyət yoxdur.', en: 'The free will defence (Plantinga, 1974): creating free beings is a great good, but freedom includes the ability to do evil. God may have a “morally sufficient reason” — no contradiction.' },
      { az: '“Xeyirxah varlıq bütün şəri aradan qaldırar” addımı səhv ola bilər: bəzən daha böyük xeyir üçün ağrıya yol verilir (məsələn, həkim iynəsi).', en: 'The step “a good being eliminates all evil” may be false: sometimes pain is allowed for a greater good (like a doctor’s injection).' },
    ],
    replies: [
      { az: 'Azad iradə insanların pisliyini izah edə bilər, amma zəlzələ, xəstəlik kimi təbii şəri izah etmir.', en: 'Free will may explain human wrongdoing, but not natural evil like earthquakes and disease.' },
      { az: 'Bu səbəbdən bir çox müasir filosof, hətta ateistlər də, məntiqi formanın zəiflədiyini qəbul edib və müzakirəni “dəlil formasına” keçirib.', en: 'For this reason many modern philosophers, atheists included, accept the logical form has weakened, and the debate has moved to the “evidential form”.' },
    ],
    think: {
      az: 'Azadlıq pislik etmək imkanı olmadan mümkündürmü?',
      en: 'Is freedom possible without the ability to do evil?',
    },
  },
  {
    id: 'evil-evidential',
    side: 'against',
    name: { az: 'Şər problemi (dəlil forması)', en: 'The problem of evil (evidential form)' },
    short: {
      az: 'Heç bir xeyrə xidmət etməyən bu qədər əzab Tanrının olmamasını daha ehtimallı edir.',
      en: 'So much suffering that serves no good makes God’s non-existence more likely.',
    },
    origin: {
      az: 'Uilyam Rou (1979) və başqaları.',
      en: 'William Rowe (1979) and others.',
    },
    steps: [
      { az: 'Elə əzablar var ki, hər şeyə qadir, hər şeyi bilən varlıq onların qarşısını daha böyük xeyri itirmədən ala bilərdi.', en: 'There are instances of suffering an all-powerful, all-knowing being could prevent without losing a greater good.' },
      { az: 'Tam xeyirxah varlıq belə əzabların qarşısını alardı.', en: 'A wholly good being would prevent such suffering.' },
    ],
    conclusion: {
      az: 'Deməli, belə bir Tanrının olması ehtimalı azdır.',
      en: 'Therefore, such a God probably does not exist.',
    },
    plain: {
      az: 'Rounun nümunəsi: uzaq meşədə ildırımdan yanğın çıxır, bir maral balası yanaraq günlərlə əzab çəkib ölür. Heç kim görmür, heç kim bundan dərs çıxarmır. Bu əzab hansı xeyrə xidmət edir? Bu forma ziddiyyət iddia etmir — sadəcə deyir ki, dünyadakı əzabın miqdarı və növü Tanrısız dünyaya daha çox uyğun gəlir.',
      en: 'Rowe’s example: lightning starts a fire in a distant forest, and a fawn is badly burned and suffers for days before dying. No one sees it, no one learns from it. What good does this suffering serve? This form claims no contradiction — only that the amount and kind of suffering fit a godless world better.',
    },
    strengths: [
      { az: 'Azad iradə müdafiəsindən təsirlənmir: heyvan əzabı və təbii fəlakətlər insan seçimindən doğmur.', en: 'Unaffected by the free will defence: animal suffering and natural disasters do not come from human choices.' },
      { az: 'Daha təvazökar iddiadır — sübut yox, ehtimal haqqındadır.', en: 'A more modest claim — about probability, not proof.' },
    ],
    objections: [
      { az: 'Skeptik teizm: məhdud insan ağlı Tanrının səbəblərini görə bilməz. Bir xeyir görmürüksə, bu, onun olmadığı demək deyil.', en: 'Sceptical theism: limited human minds cannot see God’s reasons. Not seeing a good does not mean there is none.' },
      { az: '“Ruhun yetişməsi” teodiseyası (Con Hik, 1966): çətinliksiz dünyada cəsarət, mərhəmət, səbir kimi fəzilətlər yarana bilməzdi.', en: 'The “soul-making” theodicy (John Hick, 1966): in a world without hardship, virtues like courage, compassion and patience could not grow.' },
      { az: 'Axirət inancına görə bu dünyanın əzabı son hesab deyil.', en: 'On belief in an afterlife, this world’s suffering is not the final account.' },
    ],
    replies: [
      { az: 'Əgər Tanrının səbəblərini heç görə bilmiriksə, onda Onun xeyirxah olduğunu da necə bilirik?', en: 'If we can never see God’s reasons, how can we know God is good?' },
      { az: '“Ruhun yetişməsi” insanları izah edə bilər, amma milyonlarla il əvvəl əzab çəkən heyvanları izah etmir.', en: '“Soul-making” may explain humans, but not animals suffering millions of years ago.' },
    ],
    think: {
      az: 'Səbəbini görmədiyimiz əzab səbəbsiz əzab deməkdirmi?',
      en: 'Does suffering whose reason we cannot see mean suffering with no reason?',
    },
  },
  {
    id: 'hiddenness',
    side: 'against',
    name: { az: 'Gizlilik problemi', en: 'The problem of divine hiddenness' },
    short: {
      az: 'Sevən Tanrı varsa, niyə Ona səmimi axtaran hər kəsin inanması asan deyil?',
      en: 'If a loving God exists, why is belief not easy for everyone who sincerely seeks?',
    },
    origin: {
      az: 'Con Şellenberq, “İlahi gizlilik və insan ağlı” (1993).',
      en: 'J. L. Schellenberg, “Divine Hiddenness and Human Reason” (1993).',
    },
    steps: [
      { az: 'Tam sevən Tanrı hər kəslə münasibət qurmağa açıq olardı.', en: 'A perfectly loving God would be open to a relationship with everyone.' },
      { az: 'Bunun üçün insan Onun varlığına inanmalıdır; deməli, Tanrı müqavimət göstərməyənlərə inanc imkanı verərdi.', en: 'That requires belief in God’s existence; so God would make belief available to anyone not resisting it.' },
      { az: 'Amma səmimi axtaran, müqavimət göstərməyən, buna baxmayaraq inana bilməyən insanlar var.', en: 'But there are sincere seekers, not resisting, who still cannot believe.' },
    ],
    conclusion: { az: 'Deməli, tam sevən Tanrı yoxdur.', en: 'Therefore, a perfectly loving God does not exist.' },
    plain: {
      az: 'Təsəvvür et ki, uşağını sevən valideyn ondan illərlə gizlənir və uşaq onun var olduğuna şübhə edir. Sevgi belə olarmı? Şellenberqə görə Tanrının “gizli” qalması — səmimi axtaranlar üçün belə — sevən Tanrı ideyası ilə uyğun gəlmir. Bu arqument şərdən fərqli olaraq əzaba yox, inancın özünə baxır.',
      en: 'Imagine a loving parent hiding from their child for years, so the child doubts they exist. Is that love? For Schellenberg, God staying “hidden” — even from sincere seekers — does not fit the idea of a loving God. Unlike the problem of evil, this argument looks not at suffering but at belief itself.',
    },
    strengths: [
      { az: 'Yeni və orijinal arqumentdir; şər problemindən asılı deyil.', en: 'A newer, original argument, independent of the problem of evil.' },
      { az: 'Sevgi anlayışına əsaslanır — dinlərin özü Tanrını sevgi ilə təsvir edir.', en: 'Rests on the idea of love — religions themselves describe God as loving.' },
    ],
    objections: [
      { az: 'Tanrı tam aşkar olsaydı, insan azad seçim edə bilməzdi — inanc məcburi olardı.', en: 'If God were fully obvious, people could not choose freely — belief would be forced.' },
      { az: 'Bəlkə “müqavimətsiz inanmamaq” düşündüyümüzdən daha nadirdir, ya da müvəqqətidir.', en: 'Perhaps “non-resistant non-belief” is rarer, or more temporary, than we think.' },
      { az: 'Bir çox din bu dünyanı bir imtahan kimi görür; gizlilik bu imtahanın bir hissəsidir.', en: 'Many religions see this world as a test; hiddenness is part of that test.' },
    ],
    replies: [
      { az: 'Bir çox insan Tanrının varlığına inanır, amma yenə də azad şəkildə Ona qarşı çıxır — deməli, aydınlıq azadlığı aradan qaldırmır.', en: 'Many people believe God exists yet still freely turn away — so clarity does not destroy freedom.' },
    ],
    think: {
      az: 'Əgər Tanrı tam aşkar olsaydı, insanlar daha yaxşı olardımı, yoxsa sadəcə daha qorxulu?',
      en: 'If God were fully obvious, would people be better — or just more afraid?',
    },
  },
  {
    id: 'paradoxes',
    side: 'against',
    name: { az: 'Sifətlərin paradoksları', en: 'Paradoxes of the divine attributes' },
    short: {
      az: 'Tanrıya aid edilən bəzi sifətlər birlikdə ziddiyyət yaradır.',
      en: 'Some attributes ascribed to God seem to contradict each other.',
    },
    origin: {
      az: 'Orta əsrlərdən bəri müzakirə olunur; müasir analitik din fəlsəfəsi.',
      en: 'Debated since the Middle Ages; modern analytic philosophy of religion.',
    },
    people: ['aquinas'],
    steps: [
      { az: 'Hər şeyə qadir Tanrı özünün qaldıra bilməyəcəyi qədər ağır daş yarada bilərmi?', en: 'Can an all-powerful God create a stone too heavy for God to lift?' },
      { az: 'Bacarırsa, qaldıra bilmədiyi bir daş var — qadir deyil. Bacarmırsa, yarada bilmədiyi bir şey var — yenə qadir deyil.', en: 'If yes, there is a stone God cannot lift — not all-powerful. If no, there is something God cannot create — again not all-powerful.' },
      { az: 'Bənzər sual: Tanrı sabah nə edəcəyimi indidən bilirsə, mən necə azad ola bilərəm?', en: 'A similar puzzle: if God already knows what I will do tomorrow, how can I be free?' },
    ],
    conclusion: {
      az: 'Deməli, ənənəvi Tanrı anlayışı ziddiyyətlidir — belə bir varlıq ola bilməz.',
      en: 'Therefore, the traditional concept of God is incoherent — such a being cannot exist.',
    },
    plain: {
      az: 'Bu arqument dünyaya yox, anlayışın özünə baxır. Əgər “dördbucaqlı dairə” ola bilmirsə, ziddiyyətli sifətləri olan Tanrı da ola bilməz. Daş paradoksu oyun kimi görünür, amma o, “hər şeyə qadir” sözünün dəqiq nə demək olduğunu düşünməyə məcbur edir.',
      en: 'This argument looks not at the world but at the concept itself. If there cannot be a “square circle”, there cannot be a God with contradictory attributes. The stone paradox looks like a game, but it forces us to think what “all-powerful” really means.',
    },
    strengths: [
      { az: 'Anlayışların aydınlığını yoxlayır — yaxşı fəlsəfi məşqdir.', en: 'Tests the clarity of concepts — good philosophical exercise.' },
      { az: 'Bilgi və azadlıq paradoksu dindar filosofları da əsrlərdir düşündürür.', en: 'The foreknowledge-and-freedom puzzle has troubled religious philosophers for centuries too.' },
    ],
    objections: [
      { az: 'Foma Akvinalı: hər şeyə qadirlik məntiqi cəhətdən mümkün olan hər şeyi edə bilmək deməkdir. “Qaldırıla bilməyən daş yaradan qadir” ziddiyyətli ifadədir, “dördbucaqlı dairə” kimi.', en: 'Aquinas: omnipotence means the power to do whatever is logically possible. “A stone an omnipotent being can’t lift” is a contradiction, like a “square circle”.' },
      { az: 'Boetsi (VI əsr): Tanrı zamandan kənardadır; O, gələcəyi “əvvəlcədən” yox, əbədi indidə görür — bilmək məcbur etmək deyil.', en: 'Boethius (6th c.): God is outside time; God sees the future not “in advance” but in an eternal present — knowing is not causing.' },
    ],
    replies: [
      { az: 'Belə cavablar sifətləri yenidən tərif edir — tənqidçilər deyir ki, bu, Tanrını “kiçildir”.', en: 'Such replies redefine the attributes — critics say this “shrinks” God.' },
    ],
    think: {
      az: '“Hər şeyə qadir” olmaq məntiqə tabe olmaq deməkdirmi?',
      en: 'Does being “all-powerful” include being bound by logic?',
    },
  },
  {
    id: 'parsimony',
    side: 'against',
    name: { az: 'Sadəlik arqumenti (Okkamın ülgücü)', en: 'The argument from simplicity (Occam’s razor)' },
    short: {
      az: 'Dünya Tanrısız da izah oluna bilirsə, əlavə fərziyyəyə ehtiyac yoxdur.',
      en: 'If the world can be explained without God, the extra hypothesis is unnecessary.',
    },
    origin: {
      az: 'Okkamlı Uilyam (XIV əsr, özü rahib idi); Laplasa aid edilən söz; Hum, möcüzələr haqqında (1748).',
      en: 'William of Ockham (14th c., himself a friar); a saying attributed to Laplace; Hume on miracles (1748).',
    },
    people: ['hume'],
    steps: [
      { az: 'İki izahdan daha az fərziyyə tələb edəni üstündür.', en: 'Of two explanations, the one with fewer assumptions is better.' },
      { az: 'Elm bir vaxt Tanrı ilə izah olunan çox şeyi (ildırım, xəstəlik, canlıların müxtəlifliyi) təbii səbəblərlə izah edir.', en: 'Science now explains naturally much that was once explained by God (lightning, disease, the variety of life).' },
      { az: 'Tanrı fərziyyəsi əlavə izah gücü vermir.', en: 'The God hypothesis adds no explanatory power.' },
    ],
    conclusion: {
      az: 'Deməli, Tanrıya inanmaq üçün əsas yoxdur.',
      en: 'Therefore, there is no good reason to believe in God.',
    },
    plain: {
      az: 'Rəvayətə görə Napoleon Laplasdan soruşur ki, kainat haqqındakı kitabında niyə Tanrının adı yoxdur. Laplas cavab verir: “Bu fərziyyəyə ehtiyacım olmadı.” Hum isə möcüzələr haqqında yazırdı: təbiət qanununun pozulmasındansa, şahidlərin yanılması həmişə daha ehtimallıdır.',
      en: 'Legend says Napoleon asked Laplace why his book on the universe never mentioned God. Laplace replied: “I had no need of that hypothesis.” Hume wrote about miracles: it is always more likely that witnesses are mistaken than that a law of nature was broken.',
    },
    strengths: [
      { az: 'Elmin uğurlu metoduna əsaslanır.', en: 'Rests on the successful method of science.' },
      { az: '“Boşluqların Tanrısı” təhlükəsini göstərir: bilmədiyimizi Tanrı ilə doldurmaq, elm inkişaf etdikcə geri çəkilməyə məhkumdur.', en: 'Exposes the “God of the gaps” problem: filling unknowns with God means retreating as science advances.' },
    ],
    objections: [
      { az: 'Klassik teizmdə Tanrı elmi fərziyyə deyil, təbiət qanunlarının özünün varlıq səbəbidir. Elm “necə”ni izah edir, “niyə ümumiyyətlə nəsə var”ı yox.', en: 'In classical theism God is not a scientific hypothesis but the reason the laws of nature exist at all. Science explains “how”, not “why there is anything”.' },
      { az: 'Sadəlik yeganə meyar deyil — izah gücü də vacibdir. Teistlər deyir ki, şüur, əxlaq və kainatın başlanğıcı naturalizm üçün çətindir.', en: 'Simplicity is not the only criterion — explanatory power matters too. Theists say consciousness, morality and the universe’s beginning are hard for naturalism.' },
      { az: 'Humun möcüzə arqumenti dairəvi ola bilər: təbiət qanunlarının heç vaxt pozulmadığını əvvəlcədən qəbul edir.', en: 'Hume’s argument on miracles may be circular: it assumes in advance that natural laws are never broken.' },
    ],
    replies: [
      { az: 'Tanrı heç bir sınaqdan keçirilə bilən proqnoz vermirsə, onun izah gücü həqiqətən nədir?', en: 'If God yields no testable predictions, what is God’s explanatory power, really?' },
    ],
    think: {
      az: 'Elm bir gün hər şeyi izah etsə, “niyə” sualı yenə qalarmı?',
      en: 'If science one day explained everything, would the question “why” still remain?',
    },
  },
  {
    id: 'diversity',
    side: 'against',
    name: { az: 'Dinlərin müxtəlifliyi arqumenti', en: 'The argument from religious diversity' },
    short: {
      az: 'Minlərlə din bir-birinə zidd iddialar edir — bu, hər birinə inamı zəiflədir.',
      en: 'Thousands of religions make conflicting claims — which weakens confidence in each.',
    },
    origin: {
      az: 'Qədim skeptiklər; Hum; müasir din fəlsəfəsi.',
      en: 'Ancient sceptics; Hume; modern philosophy of religion.',
    },
    people: ['hume'],
    steps: [
      { az: 'Dünyada bir-birinə zidd çoxlu dini inanc var.', en: 'The world holds many religious beliefs that contradict each other.' },
      { az: 'İnsanın hansı dinə inanması çox vaxt harada doğulmasından asılıdır.', en: 'Which religion a person holds largely depends on where they were born.' },
      { az: 'Əgər doğulduğumuz yer inancımızı müəyyən edirsə, inancımızın doğruluğuna əminliyimiz azalmalıdır.', en: 'If birthplace decides our belief, our confidence in its truth should drop.' },
    ],
    conclusion: {
      az: 'Deməli, hər hansı xüsusi dini inanca əmin olmaq üçün əsas zəifdir.',
      en: 'Therefore, there is weak ground for confidence in any particular religious belief.',
    },
    plain: {
      az: 'Bakıda doğulan uşaq çox vaxt bir dinə, Tokioda doğulan başqasına, Mumbayda doğulan isə üçüncüsünə inanır. Hər biri öz dininin doğru olduğuna əmindir. Bu arqument soruşur: əgər fərqli yerdə doğulsaydın, eyni dərəcədə əmin olacaqdın — bəs bu əminlik nəyə əsaslanır?',
      en: 'A child born in Baku often holds one religion, a child in Tokyo another, a child in Mumbai a third. Each is sure theirs is true. The argument asks: had you been born elsewhere, you would be just as sure of something else — so what is this certainty based on?',
    },
    strengths: [
      { az: 'Statistik faktlara əsaslanır.', en: 'Rests on statistical facts.' },
      { az: 'Hər kəsi öz inancını tənqidi gözlə yoxlamağa dəvət edir.', en: 'Invites everyone to examine their own beliefs critically.' },
    ],
    objections: [
      { az: 'Fikir ayrılığı heç kimin haqlı olmadığını göstərmir — elmdə və fəlsəfədə də ayrılıqlar var.', en: 'Disagreement does not show no one is right — science and philosophy have disagreements too.' },
      { az: 'Bir inancın haradan gəldiyi onun doğru olub-olmadığını göstərmir (genetik xəta).', en: 'Where a belief comes from does not show whether it is true (the genetic fallacy).' },
      { az: 'Dinlər arasında ortaq nüvə var: daha yüksək bir gerçəklik, əxlaq, məna axtarışı.', en: 'Religions share a common core: a higher reality, morality, a search for meaning.' },
      { az: 'Bu arqument ateizmin özünə də tətbiq oluna bilər — o da müəyyən mədəniyyətlərdə daha geniş yayılıb.', en: 'The argument can be turned on atheism too — it is also more common in certain cultures.' },
    ],
    replies: [
      { az: 'Fərq ondadır ki, dinlər çox vaxt yalnız müqəddəs mətnə və ənənəyə söykənir; elmi ayrılıqlar isə müşahidə ilə həll edilə bilər.', en: 'The difference: religions often rest on scripture and tradition alone, while scientific disagreements can be settled by observation.' },
    ],
    think: {
      az: 'Başqa ölkədə doğulsaydın, hansı fikirlərin dəyişərdi? Hansıları dəyişməzdi?',
      en: 'Had you been born in another country, which of your views would change? Which would not?',
    },
  },
]

export function findView(id: string) {
  return views.find((view) => view.id === id)
}

export function findArg(id: string) {
  return args.find((arg) => arg.id === id)
}

/** Order on the simplified map (left = personal God, right = no God). */
export const spectrum: ViewId[] = ['theism', 'deism', 'panentheism', 'pantheism', 'agnosticism', 'atheism']

/** Views that use (for) or are supported by (against) an argument. */
export function viewsForArg(argId: string) {
  return views.filter((view) => view.args.includes(argId))
}
