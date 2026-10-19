import type { Ending } from './types'

export const endings: Ending[] = [
  {
    id: 'stoic',
    school: 'stoic',
    title: { az: 'Sakit dairə', en: 'The quiet circle' },
    body: {
      az: 'Sən bütün dünyanı idarə etməyə çalışmadın. Əlinin çatdığını tutdun: sözünü, hərəkətini, sakitliyini. Stoiklər məhz bunu öyrədirdi: bəzi şeylər səndən asılıdır, bəziləri yox. Azadlıq hər hadisəni dayandırmaq deyil — ona necə baxmağı seçməkdir.\n\nBu, soyuqluq demək deyil. Bu, hər ağrını öz adına yazmamaqdır. Yoxsa həm sən tükənərsən, həm də heç kimə kömək edə bilməzsən.',
      en: 'You didn’t try to control the whole world. You held on to what you could reach: your words, your actions, your calm. That is exactly what the Stoics taught: some things depend on you, some don’t. Freedom isn’t stopping every event — it’s choosing how you look at it.\n\nThat isn’t coldness. It is not writing every pain in your own name. Otherwise you burn out, and then you can’t help anyone.',
    },
    reading: [
      {
        work: { az: 'Epiktet — Təlimat kitabçası (Enxiridion)', en: 'Epictetus — Enchiridion (The Handbook)' },
        why: {
          az: 'Cəmi 50 səhifə. Qısa, aydın: nə səndən asılıdır, nə asılı deyil.',
          en: 'About 50 pages. Short and clear: what is up to you, and what is not.',
        },
      },
      {
        work: { az: 'Mark Avreli — Özümlə söhbət (Meditasiyalar)', en: 'Marcus Aurelius — Meditations' },
        why: {
          az: 'Bir imperatorun özü üçün yazdığı gündəlik. İstənilən səhifədən başlamaq olar.',
          en: 'An emperor’s private journal. You can open it on any page.',
        },
      },
    ],
  },
  {
    id: 'utilitarian',
    school: 'utilitarian',
    title: { az: 'Ən çoxun xeyri', en: 'The greatest number' },
    body: {
      az: 'Sən çox vaxt belə soruşdun: bu seçimdən sonra ağrı azalır, yoxsa artır? Bir üzün göz yaşı səni dayandıranda belə, nəticəyə baxdın. Bu düşüncənin adı utilitarizmdir. Soyuq görünə bilər, amma ürəyində hesab yox, əziyyəti azaltmaq istəyi var.\n\nYadda saxla: “çoxluq” deyəndə tək bir insan görünməz ola bilər. Bu yolun kölgəsi var. Sən o kölgəni görə-görə getdin.',
      en: 'You often asked: after this choice, does pain go down or up? Even when one person’s tears slowed you, you looked at the outcome. This way of thinking is called utilitarianism. It can look cold, but at its heart is not maths — it is the wish to reduce suffering.\n\nRemember: when you think of “the many”, one person can disappear. This road has a shadow. You walked it with your eyes open.',
    },
    reading: [
      {
        work: { az: 'Con Stüart Mill — Utilitarizm', en: 'John Stuart Mill — Utilitarianism' },
        why: {
          az: 'Qısa kitab. “Ən böyük xoşbəxtlik” fikrini insan dilində izah edir.',
          en: 'A short book that explains “the greatest happiness” in a human voice.',
        },
      },
      {
        work: { az: 'Piter Singer — Xilas edə biləcəyin həyat', en: 'Peter Singer — The Life You Can Save' },
        why: {
          az: 'Müasir və praktik: bu fikir bu gün necə yaşanır?',
          en: 'Modern and practical: how does this idea work in real life today?',
        },
      },
    ],
  },
  {
    id: 'kantian',
    school: 'kantian',
    title: { az: 'Hamı üçün qayda', en: 'A rule for everyone' },
    body: {
      az: 'Sən “bircə dəfəlik istisna” sözünü sevmədin. Soruşdun: hamı belə etsə, nə olar? Bu, Kantın sualıdır. Yalan, aldatmaq, insanı alət kimi istifadə etmək — nəticə yaxşı olsa belə, bunları təmizə çıxarmır.\n\nBu yol sərt ola bilər. Uşaq, dərman, aclıq istisna istəyəndə ürək titrəyir. Sən qaydanı qorudun. Bu da bir sədaqətdir: təkcə bir insana yox, hamının dayandığı zəminə.',
      en: 'You didn’t like the phrase “just this once”. You asked: what if everyone did this? That is Kant’s question. Lying, cheating, using a person as a tool — a good result doesn’t wash them clean.\n\nThis road can be strict. When a child, medicine or hunger asks for an exception, the heart trembles. You protected the rule. That is a loyalty too: not to one person, but to the ground everyone stands on.',
    },
    reading: [
      {
        work: { az: 'Kant — Əxlaq metafizikasının əsasları (qısa hissələr)', en: 'Kant — Groundwork of the Metaphysics of Morals (short sections)' },
        why: {
          az: 'Dili ağırdır, amma əsas fikir bir cümlədir. Əvvəl qısa xülasəsini oxu.',
          en: 'The prose is heavy, but the main idea fits in one sentence. Start with a summary.',
        },
      },
      {
        work: { az: 'Maykl Sendel — Ədalət (kitab və Harvard mühazirələri)', en: 'Michael Sandel — Justice (book and Harvard lectures)' },
        why: {
          az: 'Kantı və digərlərini canlı nümunələrlə izah edir. Mühazirələri YouTube-da var.',
          en: 'Explains Kant and others with lively examples. The lectures are on YouTube.',
        },
      },
    ],
  },
  {
    id: 'existential',
    school: 'existential',
    title: { az: 'Özünü yazan yol', en: 'The self-written road' },
    body: {
      az: 'Sən hazır cavab axtarmadın. Məna kənardan gəlmədi — sən onu seçə-seçə yaratdın. Sartre deyirdi: əvvəl varsan, sonra kim olduğunu qurursan. Camus deyirdi: dünya məna verməsə belə, daşı yenə qaldır.\n\nBu azadlıq yüngül deyil. Bəhanə azalır. “Məni belə ediblər” demək çətinləşir. Sən yenə də qələmi öz əlində saxladın.',
      en: 'You didn’t look for a ready-made answer. Meaning didn’t come from outside — you built it by choosing. Sartre said: first you exist, then you build who you are. Camus said: even if the world gives no meaning, lift the stone again.\n\nThis freedom isn’t light. Excuses get thinner. It gets harder to say “they made me this way.” You still kept the pen in your own hand.',
    },
    reading: [
      {
        work: { az: 'Sartre — Ekzistensializm humanizmdir', en: 'Sartre — Existentialism Is a Humanism' },
        why: {
          az: 'Bir mühazirədir, bir axşama oxunur. “Varlıq mahiyyətdən əvvəl gəlir” fikri buradadır.',
          en: 'A single lecture — one evening’s read. “Existence precedes essence” lives here.',
        },
      },
      {
        work: { az: 'Camus — Sizif mifi', en: 'Camus — The Myth of Sisyphus' },
        why: {
          az: 'Daşı yenə qaldırmaq. Və buna baxmayaraq Sizifi xoşbəxt təsəvvür etmək.',
          en: 'Lifting the stone again — and still imagining Sisyphus happy.',
        },
      },
    ],
  },
  {
    id: 'virtue',
    school: 'virtue',
    title: { az: 'Qızıl orta', en: 'The golden mean' },
    body: {
      az: 'Sən təkcə “indi nə edim?” soruşmadın. “Necə insan olum?” da soruşdun. Aristotel üçün yaxşı həyat bal toplamaq deyil — vərdişdir. Cəsarət qorxaqlıqla düşüncəsizliyin ortasındadır, cömərdlik də xəsisliklə israfın.\n\nBir yaxşı hərəkət insanı müdrik etmir. Amma sabah eyni sualı yenə vermək — artıq yoldur.',
      en: 'You didn’t just ask “what do I do now?” You also asked “who do I want to be?” For Aristotle, a good life isn’t scoring points — it’s a habit. Courage sits between cowardice and recklessness; generosity between stinginess and waste.\n\nOne good act doesn’t make you wise. But asking the same question again tomorrow — that is already a path.',
    },
    reading: [
      {
        work: { az: 'Aristotel — Nikomax etikası (II kitab)', en: 'Aristotle — Nicomachean Ethics (Book II)' },
        why: {
          az: 'Fəzilətin istedad yox, məşq olduğunu izah edir. II kitabdan başla.',
          en: 'Explains that virtue is practice, not talent. Start with Book II.',
        },
      },
    ],
  },
  {
    id: 'buddhist',
    school: 'buddhist',
    title: { az: 'Yüngül əl', en: 'The light hand' },
    body: {
      az: 'Sən yapışmamağa meyl etdin: qisasa, inada, hətta “mən haqlıyam” cümləsinə. Burada mərhəmət zəiflik deyil. Başqasının ağrısını görməkdir — və onu kiminsə günahı kimi yox, insan halı kimi görmək.\n\nAğrı yox olmayacaq. Amma yüngül əl ağrıya bir az yer buraxır ki, həm sən, həm də o nəfəs ala bilsin.',
      en: 'You leaned toward not clinging: not to revenge, not to stubbornness, not even to “I am right”. Compassion here isn’t weakness. It is seeing another person’s pain — as a human condition, not just someone’s fault.\n\nPain won’t vanish. But a light hand leaves pain a little room, so both you and the other person can breathe.',
    },
    reading: [
      {
        work: { az: 'Dhammapada', en: 'The Dhammapada' },
        why: {
          az: 'Qısa misralar toplusu. Hər gün bir-iki misra oxumaq olar.',
          en: 'A collection of short verses. Read one or two a day.',
        },
      },
    ],
  },
  {
    id: 'fractured',
    school: 'fractured',
    title: { az: 'Çatlamış güzgü', en: 'The cracked mirror' },
    body: {
      az: 'Yol səni bir məktəbə yox, toqquşmaya gətirdi. Bəzən qayda, bəzən nəticə, bəzən azadlıq, bəzən mərhəmət seçdin. Bu, uğursuzluq deyil.\n\nIsaiah Berlin deyirdi: yaxşı dəyərlər də bir-biri ilə vuruşa bilər. Fəlsəfənin çoxu məhz belə başlayır — iki doğru səs eyni anda danışanda. Güzgünün bütöv olmasını tələb etmə. Onu daşı.',
      en: 'The road didn’t lead you to one school — it led you to a collision. Sometimes the rule, sometimes the outcome, sometimes freedom, sometimes mercy. That isn’t failure.\n\nIsaiah Berlin said good values can fight each other. A lot of philosophy begins right there — when two true voices speak at once. Don’t demand a whole mirror. Carry it.',
    },
    reading: [
      {
        work: { az: 'Isaiah Berlin — Azadlığın iki anlayışı', en: 'Isaiah Berlin — Two Concepts of Liberty' },
        why: {
          az: 'İki yaxşı şeyin eyni anda sığmaya biləcəyini göstərir. Bu, bəhanə yox, xəritədir.',
          en: 'Shows that two good things may not fit together. A map, not an excuse.',
        },
      },
      {
        work: { az: 'Yostein Qorder — Sofinin dünyası', en: 'Jostein Gaarder — Sophie’s World' },
        why: {
          az: 'Roman şəklində bütün fəlsəfə tarixi. Hər məktəbə bir az baxmaq üçün ideal başlanğıc.',
          en: 'The whole history of philosophy as a novel. A perfect start for tasting every school.',
        },
      },
    ],
  },
]
