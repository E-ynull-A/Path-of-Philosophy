import type { Ending } from './types'

export const endings: Ending[] = [
  {
    id: 'stoic',
    school: 'stoic',
    title: { az: 'Sakit dairə', en: 'The quiet circle' },
    body: {
      az: 'Sən dünyanı tam idarə etmək istəmədin. Əlinin çatdığı yeri tutdun: sözünü, əllərini, sakitliyini. Stoiklər bunu belə deyirdi: bəzi şeylər sənin ixtiyarındadır, bəziləri deyil. Azadlıq hadisəni dayandırmaqda yox, ona necə baxmağındadır.\n\nBu, soyuqluq demək deyil. Bu, hər ağrını öz adınla yazmamaqdır. Yoxsa həm sən dağılarsan, həm də heç kimə kömək çatmaz.',
      en: 'You did not try to steer the whole world. You held what your hands could reach: your word, your work, your composure. The Stoics put it like this: some things are up to you, some are not. Freedom is not stopping every event. It is how you look at it.\n\nThat is not the same as coldness. It is refusing to write every pain in your own name. Otherwise you come apart, and then nobody is helped.',
    },
    reading: [
      {
        work: { az: 'Epiktet — Əlkitab', en: 'Epictetus — Enchiridion' },
        why: {
          az: 'Qısa və aydındır: nə sənin əlindədir, nə deyil.',
          en: 'Short and plain: what is in your hands, and what is not.',
        },
      },
      {
        work: { az: 'Mark Avreli — Özünə düşüncələr', en: 'Marcus Aurelius — Meditations' },
        why: {
          az: 'Gündəlik kimidir. Güclü adamın özünü necə sakit saxladığı.',
          en: 'Like a private journal. How a powerful person kept himself still.',
        },
      },
    ],
  },
  {
    id: 'utilitarian',
    school: 'utilitarian',
    title: { az: 'Ən çoxun xeyiri', en: 'The greatest number' },
    body: {
      az: 'Sən çox vaxt belə soruşdun: bu seçimdən sonra dünyada ağrı azalır, ya artır? Bir üzün göz yaşı səni dayandırdısa belə, rəqəmə də baxdın. Bu düşüncənin adı utilitarizmdir. Soyuq görünə bilər. Ürəyi isə hesablama yox, əziyyətin azalmasıdır.\n\nYadda saxla: “çox” deyəndə bir üz itə bilər. Ona görə də bu yolun kölgəsi var. Sən o kölgəyə baxaraq getdin, inkar etmədin.',
      en: 'You asked, more often than not: after this choice, does pain in the world fall or rise? Even when one face’s tears slowed you, you still looked at the number. That way of thinking is utilitarianism. It can look cold. Its heart is not arithmetic. It is less suffering.\n\nRemember: when you say “the many,” a face can vanish. This road has a shadow. You walked while looking at it, not while denying it.',
    },
    reading: [
      {
        work: { az: 'Mill — Utilitarizm', en: 'John Stuart Mill — Utilitarianism' },
        why: {
          az: '“Ən çoxun xoşbəxtliyi”ni insan dilində izah edir, maşın dilində yox.',
          en: 'Explains the greatest happiness in a human voice, not a machine’s.',
        },
      },
    ],
  },
  {
    id: 'kantian',
    school: 'kantian',
    title: { az: 'Hamı üçün qayda', en: 'A rule for everyone' },
    body: {
      az: 'Sən “bu dəfə istisna” deməyi sevmədin. Düşündün: əgər hamı belə etsə, yol dağılarmı? Kant belə soruşurdu. Yalan, aldatmaq, insanı alət etmək — nəticə yaxşı olsa belə, onu aklamaz.\n\nBu yol sərt ola bilər. Uşaq, dərman, aclıq istisna istəyəndə ürək əsir. Sən qaydanı diri saxladın. Bu da bir növ sədaqətdir: təkcə bir üzü yox, hamının dayandığı yeri qorumaq.',
      en: 'You did not love the sentence “just this once.” You asked: if everyone did this, would the road collapse? That is Kant’s question. Lying, deceiving, using a person as a tool — a good result does not wash those clean.\n\nThis road can be stern. When a child, medicine, or hunger asks for an exception, the heart shakes. You kept the rule alive. That too is a loyalty: not only to one face, but to the ground everyone stands on.',
    },
    reading: [
      {
        work: {
          az: 'Kant — Əxlaqın əsası (qısa hissələr)',
          en: 'Kant — Groundwork (short sections)',
        },
        why: {
          az: 'Kateqorik imperativ: elə et ki, qaydan hamı üçün qanun ola bilsin. Ağır dildir, amma fikir bir cümlədir.',
          en: 'The categorical imperative: act only on a rule that could be a law for everyone. The prose is hard; the idea is one sentence.',
        },
      },
    ],
  },
  {
    id: 'existential',
    school: 'existential',
    title: { az: 'Özünü yazan yol', en: 'The self-written road' },
    body: {
      az: 'Sən hazır cavab axtarmadın. Məna kənardan gəlmədi. Sən onu seçməklə düzəltdin. Sartre deyirdi: əvvəl varsan, sonra “nəcəsən” yaranır. Camus deyirdi: dünya məna verməsə belə, daşı yenə qaldır.\n\nBu azadlıq yüngül deyil. Bəhanə az qalır. “Məni belə ediblər” demək çətinləşir. Sən yenə də qələmi əlində saxladın.',
      en: 'You did not hunt for a ready-made answer. Meaning did not arrive from outside. You made it by choosing. Sartre said: first you exist, then what you are is built. Camus said: even if the world offers no meaning, lift the stone anyway.\n\nThis freedom is not light. The alibis thin out. It gets harder to say “they made me this way.” You still kept the pen in your hand.',
    },
    reading: [
      {
        work: {
          az: 'Sartre — Ekzistensializm humanizmdir',
          en: 'Sartre — Existentialism Is a Humanism',
        },
        why: {
          az: 'Qısa çıxışdır. “Əvvəl varlıq, sonra mahiyyət” cümləsi buradadır.',
          en: 'A short lecture. The line “existence precedes essence” lives here.',
        },
      },
      {
        work: { az: 'Camus — Sizif mifi', en: 'Camus — The Myth of Sisyphus' },
        why: {
          az: 'Daşı yenə qaldırmaq. Və buna baxmayaraq Sizifi xoşbəxt təsəvvür etmək.',
          en: 'To lift the stone again. And still imagine Sisyphus happy.',
        },
      },
    ],
  },
  {
    id: 'virtue',
    school: 'virtue',
    title: { az: 'Qızıl orta', en: 'The golden mean' },
    body: {
      az: 'Sən təkcə “bu an nə edim?” demədin. “Necə insan olum?” da dedin. Aristotel üçün yaxşı həyat xal lövhəsi deyil. Təkrarlanan vərdişdir. Cəsarət qorxaqlıqla ehtiyatsızlığın arasında durur. Cömərdlik də ifratın arasında.\n\nBir jest səni müdrik etməz. Eyni sualı sabah yenə vermək — artıq yoldur.',
      en: 'You did not only ask “what should I do in this second?” You also asked “what kind of person am I becoming?” For Aristotle a good life is not a scoreboard. It is a repeated habit. Courage stands between cowardice and rashness. Generosity also lives between extremes.\n\nOne gesture will not make you wise. Asking the same question again tomorrow — that already is a path.',
    },
    reading: [
      {
        work: { az: 'Aristotel — Nikomax etikası', en: 'Aristotle — Nicomachean Ethics' },
        why: {
          az: 'Fəzilətin məşq olduğunu deyir. Talent yox, təkrar.',
          en: 'Virtue is practice. Not a gift — repetition.',
        },
      },
    ],
  },
  {
    id: 'buddhist',
    school: 'buddhist',
    title: { az: 'Yüngül əl', en: 'The light hand' },
    body: {
      az: 'Sən yapışmamağa meyl etdin: qisasə, qızıla, hətta “mən haqlıyam” cümləsinə. Mərhəmət burada zəiflik deyil. Başqasının ağrısını görməkdir — və onu öz tacı etməmək.\n\nAğrı yox olmayacaq. Yüngül əl ağrıya bir az yer buraxır ki, sən də, o da nəfəs alsın.',
      en: 'You leaned toward not clinging: not to revenge, not to gold, not even to the sentence “I am right.” Compassion here is not softness. It is seeing another person’s pain — without making it your crown.\n\nPain will not vanish. A light hand leaves pain a little room, so that both of you can breathe.',
    },
    reading: [
      {
        work: { az: 'Dhammapada', en: 'The Dhammapada' },
        why: {
          az: 'Qısa misralar. Ağıl hər şeyin önündə gedir, deyir.',
          en: 'Short verses. The mind, it says, precedes all things.',
        },
      },
    ],
  },
  {
    id: 'fractured',
    school: 'fractured',
    title: { az: 'Çatlamış güzgü', en: 'The cracked mirror' },
    body: {
      az: 'Yol səni bir məktəbə yox, toqquşmaya apardı. Bəzən qayda, bəzən rəqəm, bəzən azadlıq, bəzən mərhəmət. Bu, uğursuzluq deyil.\n\nIsaiah Berlin deyirdi: yaxşı dəyərlər də bir-biri ilə vuruşa bilər. Fəlsəfənin çoxu belə başlayır — iki doğru səs eyni anda danışanda. Güzgünü bütöv istəmə. Onu daşı.',
      en: 'The path did not deliver you to one school. It delivered you to a collision. Sometimes the rule, sometimes the number, sometimes freedom, sometimes mercy. That is not failure.\n\nIsaiah Berlin said good values can still fight each other. A lot of philosophy begins there — when two true voices speak at once. Do not demand a whole mirror. Carry it.',
    },
    reading: [
      {
        work: {
          az: 'Berlin — Azadlığın iki anlayışı',
          en: 'Isaiah Berlin — Two Concepts of Liberty',
        },
        why: {
          az: 'Göstərir ki, iki yaxşı şey eyni anda sığmaya bilər. Bu, bəhanə yox, xəritədir.',
          en: 'Shows that two good things may not fit in one hour. That is a map, not an excuse.',
        },
      },
    ],
  },
]
