import { finale } from './finale'
import type { Scene } from './types'

/*
 * Main story — everyday life, plain language.
 *
 *   I  morning ─┬─ II store ─┬─ lie   → III home ─┬─ join   → IV night ─┐
 *               │            │                     └─ refuse → IV owner ─┤
 *               │            ├─ truth → III statement ──────→ IV pharmacy┤→ V meeting → ending
 *               │            └─ quiet → III calls ──────────→ IV tea ────┘
 *
 * Writing rule: short sentences. Say what happens. The name of the idea comes
 * after the choice, inside the insight card. Words from the glossary
 * (src/glossary.ts) get a tap-to-explain popup automatically.
 */
export const scenes: Scene[] = [
  // ───────────────────────────── I
  {
    id: 'morning',
    step: 1,
    image: 'morning',
    chapter: { az: 'I · Səhər', en: 'I · Morning' },
    title: { az: 'Bir tapşırıq', en: 'An assignment' },
    body: {
      az: 'Səhər saat səkkizdir. Universitetə tələsirsən. Telefonuna müəllimdən mesaj gəlir: “Bu həftənin tapşırığı sadədir. Hər seçimdən sonra özündən soruş: niyə belə etdim?”\n\nGülümsəyirsən. Asan görünür.\n\nAmma o andan başında bir səs yaranır. Gəl, ona Sual deyək. Sual sənə nə etməli olduğunu demir. Yalnız soruşur.\n\nİlk sualı da budur:',
      en: 'It is eight in the morning. You are rushing to university. A message from your teacher pops up: “This week’s task is simple. After every choice, ask yourself: why did I do that?”\n\nYou smile. Sounds easy.\n\nBut from that moment a voice appears in your head. Let’s call it Sual — the Azerbaijani word for “question”. Sual never tells you what to do. It only asks.\n\nHere is its first question:',
    },
    prompt: {
      az: 'Həyatda sənin üçün ən vacib nədir?',
      en: 'What matters most to you in life?',
    },
    choices: [
      {
        id: 'morning-good',
        text: {
          az: 'Yaxşı insan olmaq. Elə insan ki, öz seçimlərindən utanmasın.',
          en: 'Being a good person — someone who is not ashamed of their own choices.',
        },
        next: 'store',
        weights: { virtue: 2 },
        insight: {
          school: 'virtue',
          philosopher: 'Aristotel',
          quote: {
            az: 'Biz ədalətli işlər görə-görə ədalətli oluruq.',
            en: 'We become just by doing just acts.',
          },
          explain: {
            az: 'Aristotelə görə yaxşılıq bir dəfəlik qərar deyil, vərdişdir. Hər gün məşq edən idmançı güclənir. Hər gün düzgün seçən insan da yaxşılaşır.\n\nBuna fəzilət etikası deyilir. Burada əsas sual “indi nə etməliyəm?” yox, “necə insan olmaq istəyirəm?” sualıdır.',
            en: 'For Aristotle, goodness is not a one-time decision. It is a habit. An athlete who trains every day gets stronger. A person who chooses well every day gets better.\n\nThis is called virtue ethics. Its main question is not “what should I do right now?” but “what kind of person do I want to be?”',
          },
          think: {
            az: 'Hansı vərdişinlə fəxr edirsən? Hansından qurtulmaq istərdin?',
            en: 'Which of your habits are you proud of? Which would you like to drop?',
          },
        },
        echo: {
          az: 'Sual deyir: “Yaxşı. Görək, yaxşılıq çətin olanda da qalacaqmı.”',
          en: 'Sual says: “Good. Let’s see if goodness stays when things get hard.”',
        },
      },
      {
        id: 'morning-pain',
        text: {
          az: 'Daha az ağrı. Həm özümdə, həm də başqalarında.',
          en: 'Less pain — in me and in other people.',
        },
        next: 'store',
        weights: { buddhist: 2, stoic: 1 },
        insight: {
          school: 'buddhist',
          philosopher: 'Budda',
          quote: {
            az: 'Nifrət nifrətlə sönmür. Yalnız sevgi ilə sönür.',
            en: 'Hatred does not cease by hatred. It ceases only by love.',
          },
          explain: {
            az: 'Buddaya görə həyatda ağrı var. Amma onun böyük hissəsi bizim yapışmağımızdan gəlir: qəzəbə, qorxuya, “mən haqlıyam” inadına.\n\nMəqsəd kimisə məğlub etmək yox, ağrını azaltmaqdır — öz ağrını da, başqasınınkını da. Buna mərhəmət yolu deyə bilərik.',
            en: 'For the Buddha, life contains pain. But much of it comes from clinging: to anger, to fear, to “I am right.”\n\nThe goal is not to defeat anyone. It is to reduce pain — yours and other people’s. We could call it the way of compassion.',
          },
          think: {
            az: 'Səni ən çox nə əsəbiləşdirir: hadisənin özü, yoxsa onun haqqında düşüncən?',
            en: 'What upsets you more: the event itself, or your thoughts about it?',
          },
        },
        echo: {
          az: 'Sual deyir: “Ağrı azalsın deyirsən. Bəs həqiqət ağrı verəndə nə edəcəksən?”',
          en: 'Sual says: “You want less pain. So what will you do when the truth hurts?”',
        },
      },
      {
        id: 'morning-free',
        text: {
          az: 'Azad olmaq. Heç kim mənə “sən belə olmalısan” deməsin. Kim olacağımı özüm seçim.',
          en: 'Being free. Nobody should tell me who I must be. I choose that myself.',
        },
        next: 'store',
        weights: { existential: 2 },
        insight: {
          school: 'existential',
          philosopher: 'Sartre',
          quote: {
            az: 'İnsan özünü necə yaradırsa, elə də olur.',
            en: 'Man is nothing else but what he makes of himself.',
          },
          explain: {
            az: 'Fransız filosofu Sartre deyirdi: sən hazır doğulmursan. Əvvəl dünyaya gəlirsən, sonra seçimlərinlə özünü “yazırsan”. Buna ekzistensializm deyilir.\n\nBu, böyük azadlıqdır. Amma həm də məsuliyyətdir: artıq “məni belə yaradıblar” deyə bəhanə gətirə bilmirsən.',
            en: 'The French philosopher Sartre said you are not born finished. First you exist, then you “write” yourself through your choices. This is called existentialism.\n\nThat is a huge freedom. It is also a responsibility: you can no longer say “I was just made this way.”',
          },
          think: {
            az: 'Bu gün nəyi başqasının gözləntisinə görə etdin?',
            en: 'What did you do today only because someone expected it?',
          },
        },
        echo: {
          az: 'Sual deyir: “Özünü özün yazmaq istəyirsən. Unutma: sənin hekayən başqalarının hekayəsinə də toxunur.”',
          en: 'Sual says: “You want to write yourself. Remember: your story touches other people’s stories too.”',
        },
      },
      {
        id: 'morning-many',
        text: {
          az: 'Mümkün qədər çox insana kömək etmək. Bir nəfərə yox — çoxuna.',
          en: 'Helping as many people as possible. Not one person — many.',
        },
        next: 'store',
        weights: { utilitarian: 2 },
        insight: {
          school: 'utilitarian',
          philosopher: 'Mill',
          quote: {
            az: 'Bir iş xoşbəxtliyi nə qədər artırırsa, o qədər doğrudur.',
            en: 'Actions are right in proportion as they tend to promote happiness.',
          },
          explain: {
            az: 'Bu düşüncənin adı utilitarizmdir. Sualı sadədir: bu seçimdən sonra dünyada ağrı azalır, yoxsa artır? Ən yaxşı seçim ən çox insana ən çox fayda verəndir.\n\nGüclü fikirdir. Amma bir təhlükəsi var: “çoxluq” deyəndə tək bir insanın üzü görünməz ola bilər.',
            en: 'This way of thinking is called utilitarianism. Its question is simple: after this choice, is there more pain in the world or less? The best choice brings the most good to the most people.\n\nIt is a strong idea. But there is a danger: when you think about “the many”, one person’s face can disappear.',
          },
          think: {
            az: 'Bir nəfərin kədəri beş nəfərin sevincinə dəyərmi?',
            en: 'Is one person’s sadness worth five people’s happiness?',
          },
        },
        echo: {
          az: 'Sual deyir: “Çoxuna kömək istəyirsən. İndi qarşına bir üz çıxacaq. Görək, rəqəm qalib gələcək, yoxsa üz.”',
          en: 'Sual says: “You want to help the many. Now a face is about to appear. Let’s see which wins — the number or the face.”',
        },
      },
    ],
  },

  // ───────────────────────────── II
  {
    id: 'store',
    step: 2,
    image: 'store',
    chapter: { az: 'II · Market', en: 'II · The shop' },
    title: { az: 'Kassanın yanında', en: 'By the checkout' },
    body: {
      az: 'Dərsdən sonra evinin yanındakı marketə girirsən. Kassanın yanında qonşunun oğlu Muradı görürsən. On üç yaşı var. Gödəkçəsinin altına çörək və bir qutu dərman gizlədir. Pulunu ödəmədən çıxır.\n\nSən onun ailəsini tanıyırsan. Anası Səbinə xala bir aydır xəstədir, işləyə bilmir. Evdə Muradın balaca bacısı Lalə də var.\n\nBir dəqiqə sonra mühafizəçi Rauf qaçaraq gəlir: “Kamera bir uşaq göstərir. Sən burada idin. Kim idi, gördün?”',
      en: 'After class you walk into the little shop near your home. By the checkout you see Murad, the neighbours’ son. He is thirteen. He hides bread and a box of medicine under his jacket and walks out without paying.\n\nYou know his family. His mother, Sabina, has been ill for a month and cannot work. His little sister Lala lives with them too.\n\nA minute later Rauf, the security guard, runs up: “The camera shows a kid. You were here. Did you see who it was?”',
    },
    prompt: {
      az: 'Rauf sənə baxır və cavab gözləyir.',
      en: 'Rauf looks at you and waits.',
    },
    choices: [
      {
        id: 'store-lie',
        text: {
          az: '“Görmədim,” deyirəm. Ac uşaq üçün kiçik bir yalan böyük günah deyil.',
          en: '“I didn’t see,” I say. A small lie for a hungry kid is not a big sin.',
        },
        next: 'home',
        weights: { utilitarian: 2, buddhist: 1 },
        insight: {
          school: 'utilitarian',
          philosopher: 'Bentham',
          quote: {
            az: 'Ən çox insan üçün ən böyük xoşbəxtlik.',
            en: 'The greatest happiness of the greatest number.',
          },
          explain: {
            az: 'Sən nəticəyə baxdın: yalan pisdir, amma bu yalan ac bir ailəni qoruyur. Utilitarizm belə düşünür: əsas olan qaydanın təmizliyi yox, sonda ağrının azalmasıdır.\n\nKant isə etiraz edərdi: “Hamı ‘yaxşı səbəblə’ yalan danışsa, heç kim heç kimə inanmaz.”',
            en: 'You looked at the result: lying is bad, but this lie protects a hungry family. Utilitarianism thinks this way: what matters is not a clean rule but less pain in the end.\n\nKant would object: “If everyone lied for a ‘good reason’, nobody could trust anybody.”',
          },
          think: {
            az: 'Hansı yalanı “yaxşı yalan” saymaq olar? Sərhəd haradadır?',
            en: 'Which lies count as “good lies”? Where is the line?',
          },
        },
        echo: {
          az: 'Rauf çiyinlərini çəkib gedir. Axşam qapın döyülür. Murad dayanıb: “Sağ ol. Gəl, bizə bax.”',
          en: 'Rauf shrugs and leaves. In the evening someone knocks. It is Murad: “Thanks. Come over — see how we live.”',
        },
      },
      {
        id: 'store-truth',
        text: {
          az: 'Düzünü deyirəm: “Murad idi.” Hər kəs özünə sərf edəndə yalan danışsa, heç kimə inanmaq olmaz.',
          en: 'I tell the truth: “It was Murad.” If everyone lied when it suited them, nobody could be trusted.',
        },
        next: 'statement',
        weights: { kantian: 2 },
        insight: {
          school: 'kantian',
          philosopher: 'Kant',
          quote: {
            az: 'Elə hərəkət et ki, sənin qaydan hamı üçün qanun ola bilsin.',
            en: 'Act only on a rule that you could want to be a law for everyone.',
          },
          explain: {
            az: 'Bu, Kantın məşhur kateqorik imperativi fikridir. Sadə dillə: bir şey etməzdən əvvəl soruş — hamı belə etsə, dünya necə olar?\n\nHamı “yaxşı səbəblə” yalan danışsa, söz dəyərsizləşər. Kant üçün nəticə də vacibdir, amma düzgün qaydanı pozmağa bəhanə olmamalıdır.',
            en: 'This is Kant’s famous categorical imperative. In plain words: before you act, ask — what if everyone did this?\n\nIf everyone lied for “good reasons”, words would lose their value. Results matter to Kant too, but they should not become an excuse to break a right rule.',
          },
          think: {
            az: 'Elə qayda varmı ki, onu heç vaxt pozmazsan?',
            en: 'Is there a rule you would never break?',
          },
        },
        echo: {
          az: 'Rauf yazır. Bir saat sonra zəng gəlir: “Marketin sahibi Kamal dayı səninlə danışmaq istəyir.”',
          en: 'Rauf writes it down. An hour later your phone rings: “Mr Kamal, the owner, wants to talk to you.”',
        },
      },
      {
        id: 'store-quiet',
        text: {
          az: 'Nə yalan deyirəm, nə də ad. “Bu barədə danışmayacam,” deyirəm. Sonra Muradla özüm danışaram.',
          en: 'I neither lie nor name him. “I won’t talk about this,” I say. I will talk to Murad myself later.',
        },
        next: 'calls',
        weights: { stoic: 2, virtue: 1 },
        insight: {
          school: 'stoic',
          philosopher: 'Epiktet',
          quote: {
            az: 'Bəzi şeylər bizim əlimizdədir, bəziləri isə yox.',
            en: 'Some things are within our power, and some are not.',
          },
          explain: {
            az: 'Stoiklər — qədim Yunanıstan və Romanın filosofları — deyirdilər: həyatı iki hissəyə böl. Səndən asılı olanlar: sözlərin, hərəkətlərin, münasibətin. Səndən asılı olmayanlar: başqalarının qərarı, keçmiş, şans.\n\nEnerjini birinciyə sərf et. Raufun nə edəcəyini idarə edə bilməzsən, amma öz sözünə sahibsən.',
            en: 'The Stoics — philosophers of ancient Greece and Rome — said: split life into two parts. What depends on you: your words, actions, attitude. What does not: other people’s decisions, the past, luck.\n\nSpend your energy on the first. You cannot control what Rauf does, but you own your words.',
          },
          think: {
            az: 'Bu gün səni narahat edən şey həqiqətən sənin əlindədirmi?',
            en: 'Is the thing worrying you today actually in your hands?',
          },
        },
        echo: {
          az: 'Rauf əsəbiləşir: “Yaxşı, sənsiz də taparıq.” Axşam telefonuna eyni anda iki zəng gəlir.',
          en: 'Rauf gets annoyed: “Fine, we’ll find out without you.” That evening, two calls hit your phone at once.',
        },
      },
    ],
  },

  // ───────────────────────────── III-A (lied)
  {
    id: 'home',
    step: 3,
    image: 'home',
    chapter: { az: 'III · Muradgil', en: 'III · Murad’s flat' },
    title: { az: 'Kiçik mətbəx', en: 'A small kitchen' },
    body: {
      az: 'Muradgilin evi soyuqdur. Səbinə xala divanda uzanıb, öskürür. Lalə dərs oxuyur, qarnı acdır. Stolun üstündə Muradın gətirdiyi çörək var.\n\nMurad pıçıldayır: “Dərmanın yarısı çatmadı. Sabah yenə gedəcəm. Sən Raufu söhbətə tut, mən götürüm. Onsuz da sən artıq bizimləsən — yalanı sən dedin.”',
      en: 'Murad’s flat is cold. Sabina lies on the sofa, coughing. Lala is doing homework on an empty stomach. On the table is the bread Murad brought.\n\nMurad whispers: “Half the medicine is missing. I’m going back tomorrow. You keep Rauf talking, I’ll grab it. You’re already with us anyway — you told the lie.”',
    },
    prompt: {
      az: 'Sual soruşur: bir dəfə kömək etdin. İkinci dəfə də edəcəksən?',
      en: 'Sual asks: you helped once. Will you help a second time?',
    },
    choices: [
      {
        id: 'home-join',
        text: {
          az: 'Razıyam. Xəstə ananın yanında qanun ikinci plandadır.',
          en: 'I’m in. Next to a sick mother, the law comes second.',
        },
        next: 'night',
        weights: { utilitarian: 2, existential: 1 },
        insight: {
          school: 'utilitarian',
          philosopher: 'Mill',
          quote: {
            az: 'Ən böyük xoşbəxtlik prinsipi əxlaqın təməlidir.',
            en: 'The Greatest Happiness Principle is the foundation of morals.',
          },
          explain: {
            az: 'Sən yenə nəticəyə baxdın: dərman lazımdır, pul yoxdur. Utilitarizm deyir ki, qaydalar insanlara xidmət etməlidir, əksinə yox.\n\nAmma təhlükəli tərəfi də var: “yaxşı məqsəd üçün” deyə hər sərhədi keçmək olar. Bir yalandan oğurluğa keçmək çox asandır.',
            en: 'You looked at the result again: medicine is needed, money is not there. Utilitarianism says rules should serve people, not the other way round.\n\nBut there is a dangerous side: “for a good cause” can justify crossing every line. One small lie can slide into stealing very easily.',
          },
          think: {
            az: 'Yaxşı məqsəd pis yolu haqlı çıxarırmı?',
            en: 'Does a good goal justify a bad path?',
          },
        },
        echo: {
          az: 'Ertəsi gün marketdəsiniz. Sən Raufla futboldan danışırsan. Arxada Murad rəfə uzanır...',
          en: 'The next day you are in the shop. You chat with Rauf about football. Behind him, Murad reaches for the shelf...',
        },
      },
      {
        id: 'home-refuse',
        text: {
          az: 'Yox. Bir dəfə səni qorudum, amma oğurluğa qoşulmaram. Gəl, başqa yol tapaq.',
          en: 'No. I covered for you once, but I won’t join a theft. Let’s find another way.',
        },
        next: 'owner',
        weights: { virtue: 2, kantian: 1 },
        insight: {
          school: 'virtue',
          philosopher: 'Aristotel',
          quote: {
            az: 'Cəsarət qorxaqlıqla ehtiyatsızlığın ortasındadır.',
            en: 'Courage is the mean between cowardice and recklessness.',
          },
          explain: {
            az: 'Aristotel hər yaxşı xüsusiyyəti iki ifratın ortasında görürdü. Buna qızıl orta deyilir. Məsələn, cəsarət qorxaqlıqla düşüncəsizliyin arasındadır.\n\nSən də ortanı tapdın: Muradı satmadın, amma oğurluğa da qoşulmadın. “Başqa yol tapaq” demək fəzilətin başlanğıcıdır.',
            en: 'Aristotle saw every good trait as a middle point between two extremes. This is called the golden mean. Courage, for example, sits between cowardice and recklessness.\n\nYou found a middle too: you did not betray Murad, and you did not join the theft. “Let’s find another way” is where virtue begins.',
          },
          think: {
            az: 'Sənin hansı xüsusiyyətin həddən çox olanda pisləşir?',
            en: 'Which of your traits turns bad when there is too much of it?',
          },
        },
        echo: {
          az: 'Murad küsür. Səhər marketin sahibi Kamal dayı səni küçədə saxlayır: “Bir dəqiqə. Səninlə danışmalıyam.”',
          en: 'Murad sulks. In the morning Mr Kamal, the shop owner, stops you in the street: “A minute. I need to talk to you.”',
        },
      },
    ],
  },

  // ───────────────────────────── IV-A1 (joined)
  {
    id: 'night',
    step: 4,
    image: 'night',
    chapter: { az: 'IV · Yenə market', en: 'IV · The shop again' },
    title: { az: 'Yaş döşəmə', en: 'A wet floor' },
    body: {
      az: 'Hər şey bir dəqiqədə olur. Murad dərmanı götürüb qaçır. Rauf onu görür, arxasınca qaçır. Yenicə silinmiş döşəmədə sürüşüb yıxılır. Qolu qəribə vəziyyətdə qalır — sınıb.\n\nMurad qapının ağzından qışqırır: “Qaç!” Rauf yerdə inildəyir. Hələ heç kim sənin adını bilmir.\n\nSual: sən oğurluğun içindəsən. İndi zərər çəkən biri də var.',
      en: 'It all happens in one minute. Murad grabs the medicine and runs. Rauf sees him and gives chase. He slips on the freshly mopped floor and falls. His arm lands at a strange angle — it is broken.\n\nMurad shouts from the door: “Run!” Rauf groans on the floor. Nobody knows your name yet.\n\nSual: you are inside the theft now. And someone got hurt.',
    },
    prompt: {
      az: 'Nə edirsən?',
      en: 'What do you do?',
    },
    choices: [
      {
        id: 'night-stay',
        text: {
          az: 'Qaçmıram. Təcili yardımı çağırıram və nə olduğunu düzünə danışıram.',
          en: 'I don’t run. I call an ambulance and tell the truth about what happened.',
        },
        next: 'meeting',
        weights: { virtue: 2, kantian: 1 },
        insight: {
          school: 'virtue',
          philosopher: 'Aristotel',
          quote: {
            az: 'Ədalət başqalarına yönəlmiş fəzilətdir.',
            en: 'Justice is complete virtue in relation to others.',
          },
          explain: {
            az: 'Sən əvvəl nəticə üçün qaydanı pozdun, sonra səhvinin yanında qaldın. Fəzilət etikasında yaxşı insan heç vaxt səhv etməyən deyil — səhvinin məsuliyyətini götürəndir.\n\nBu, ziddiyyət kimi görünə bilər. Amma insan elə budur.',
            en: 'First you broke a rule for a good result, then you stayed with your mistake. In virtue ethics a good person is not someone who never errs — it is someone who owns their errors.\n\nThat can look like a contradiction. But that is what people are like.',
          },
          think: {
            az: 'Ən son nə vaxt “səhv mən idim” dedin?',
            en: 'When did you last say “that was my fault”?',
          },
        },
        echo: {
          az: 'Təcili yardım gəlir. Rauf sənə baxır — nə qəzəb var, nə təşəkkür. Sadəcə təəccüb.',
          en: 'The ambulance arrives. Rauf looks at you — no anger, no thanks. Just surprise.',
        },
      },
      {
        id: 'night-run',
        text: {
          az: 'Qaçıram. Dərman evə çatmalıdır. Raufa başqaları kömək edər.',
          en: 'I run. The medicine has to get home. Others will help Rauf.',
        },
        next: 'meeting',
        weights: { utilitarian: 2 },
        insight: {
          school: 'utilitarian',
          philosopher: 'Bentham',
          quote: {
            az: 'Ağrı və həzz — bizi idarə edən iki hökmdardır.',
            en: 'Pain and pleasure are the two sovereign masters that govern us.',
          },
          explain: {
            az: 'Bu, məşhur vaqon probleminə bənzəyir: bir nəfərin ağrısı, bir ailənin xilası. Sən hesabladın və qaçdın.\n\nBəziləri bunu soyuqluq sayar. Sən isə deyə bilərsən: qalsaydım, dərman da gedərdi. Amma ürək həmişə hesabla razılaşmır — bu da fəlsəfənin bir hissəsidir.',
            en: 'This is like the famous trolley problem: one person’s pain, one family’s rescue. You did the maths and ran.\n\nSome would call that cold. You could answer: if I had stayed, the medicine would be lost too. But the heart does not always agree with the maths — and that is part of philosophy too.',
          },
          think: {
            az: 'Hesab düzgündürsə, vicdan niyə narahatdır?',
            en: 'If the maths is right, why is your conscience uneasy?',
          },
        },
        echo: {
          az: 'Səbinə xala dərmanı içir. Lalə gülür. Sən isə Raufun səsini hələ də eşidirsən.',
          en: 'Sabina takes the medicine. Lala laughs. But you can still hear Rauf’s voice.',
        },
      },
      {
        id: 'night-split',
        text: {
          az: 'Murad dərmanla getsin. Mən Raufun yanında qalıb kömək çağırıram, amma Muradın adını demirəm.',
          en: 'Murad goes with the medicine. I stay with Rauf and call for help — but I don’t say Murad’s name.',
        },
        next: 'meeting',
        weights: { buddhist: 2, stoic: 1 },
        insight: {
          school: 'buddhist',
          philosopher: 'Budda',
          quote: {
            az: 'Bütün canlılara qarşı sonsuz mərhəmət bəslə.',
            en: 'Cultivate a boundless heart towards all beings.',
          },
          explain: {
            az: 'Sən iki ağrını birdən gördün: xəstə ananı və yerdə yatan Raufu. Buddist baxışda mərhəmət hamını razı salmaq deyil — hər iki ağrını görməkdir.\n\nƏlin tam təmiz qalmadı. Amma nə “qəhrəman”, nə də “xain” olmağa çalışdın.',
            en: 'You saw two pains at once: a sick mother and Rauf on the floor. In the Buddhist view, compassion does not mean pleasing everyone — it means seeing both pains.\n\nYour hands are not perfectly clean. But you tried to be neither “hero” nor “traitor”.',
          },
          think: {
            az: 'Hamının ağrısını eyni anda görmək mümkündürmü?',
            en: 'Is it possible to see everyone’s pain at the same time?',
          },
        },
        echo: {
          az: 'Murad gözdən itir. Sən gödəkçəni Raufun başının altına qoyursan. O, sənin üzünə baxır və heç nə başa düşmür.',
          en: 'Murad disappears. You put your jacket under Rauf’s head. He looks at your face and understands nothing.',
        },
      },
    ],
  },

  // ───────────────────────────── IV-A2 (refused)
  {
    id: 'owner',
    step: 4,
    image: 'owner',
    chapter: { az: 'IV · Kamal dayı', en: 'IV · Mr Kamal' },
    title: { az: 'Adını de', en: 'Say the name' },
    body: {
      az: 'Kamal dayı yetmiş yaşındadır. Marketi otuz ildir işlədir. Gözlərində qəzəb yox, yorğunluq var.\n\n“Hər həftə nəsə itir,” deyir. “Kamerada bir uşaq görünür. Sən bu məhəllədə yaşayırsan. Kimdir?”\n\nAdı desən, Murad problemə düşəcək, bəlkə də polisə. Deməsən, oğurluq davam edəcək və Kamal dayı ziyan çəkəcək.',
      en: 'Mr Kamal is seventy. He has run the shop for thirty years. There is no anger in his eyes, only tiredness.\n\n“Something goes missing every week,” he says. “The camera shows a kid. You live around here. Who is it?”\n\nIf you say the name, Murad gets in trouble — maybe with the police. If you don’t, the stealing goes on and Mr Kamal keeps losing money.',
    },
    prompt: {
      az: 'Sual: sən oğurluğa getmədin. Amma bildiyin şey də bir yükdür.',
      en: 'Sual: you refused to steal. But what you know is still a weight.',
    },
    choices: [
      {
        id: 'owner-name',
        text: {
          az: 'Adı deyirəm. Amma xahiş edirəm: polisə yox, əvvəlcə ailəsi ilə danışsın.',
          en: 'I say the name. But I ask him: not the police — talk to the family first.',
        },
        next: 'meeting',
        weights: { kantian: 2, virtue: 1 },
        insight: {
          school: 'kantian',
          philosopher: 'Kant',
          quote: {
            az: 'Doğruluq hər kəsə qarşı borcumuzdur.',
            en: 'Truthfulness is a duty we owe to everyone.',
          },
          explain: {
            az: 'Sən doğru danışmaq qaydasını tutdun, amma yanına mərhəmət də qoydun. Kant üçün vəzifə şərtsizdir — “amma”sız.\n\nSən isə qaydanın yanında insanı da görmək istədin. Bu, təmiz Kant deyil. Amma çox insani bir qarışıqdır.',
            en: 'You kept the rule of telling the truth, and you added mercy to it. For Kant, duty has no conditions — no “but”.\n\nYou wanted to see the person next to the rule. That is not pure Kant. But it is a very human mix.',
          },
          think: {
            az: 'Düzlük və mərhəmət toqquşanda hansını seçirsən?',
            en: 'When honesty and mercy collide, which do you pick?',
          },
        },
        echo: {
          az: 'Kamal dayı başını yelləyir: “Polisə getmərəm. Anası ilə danışaram.”',
          en: 'Mr Kamal nods: “I won’t go to the police. I’ll talk to his mother.”',
        },
      },
      {
        id: 'owner-silent',
        text: {
          az: 'Susuram. Mən heç kimin şahidi olmağa söz verməmişəm.',
          en: 'I stay silent. I never promised to be anyone’s witness.',
        },
        next: 'meeting',
        weights: { existential: 2, stoic: 1 },
        insight: {
          school: 'existential',
          philosopher: 'Sartre',
          quote: {
            az: 'Biz bəhanəsiz təkik.',
            en: 'We are left alone, without excuse.',
          },
          explain: {
            az: 'Sən kənarda qalmaq istədin. Amma Sartre deyərdi: susmaq da bir hərəkətdir, onun da nəticəsi var. Sonra “mən qarışmadım” demək olmur.\n\nStoik isə deyərdi: başqasının məhkəməsini öz üzərinə götürmə. İkisi də sənin susqunluğunun içindədir.',
            en: 'You wanted to stay out of it. But Sartre would say: silence is also an action, and it has consequences. Afterwards you cannot say “I wasn’t involved.”\n\nA Stoic would say: don’t take on someone else’s trial. Both ideas live inside your silence.',
          },
          think: {
            az: 'Susmaq nə vaxt neytraldır, nə vaxt seçimdir?',
            en: 'When is silence neutral, and when is it a choice?',
          },
        },
        echo: {
          az: 'Kamal dayı sənə uzun-uzun baxır, sonra çevrilib gedir. Sanki cavabı onsuz da bilir.',
          en: 'Mr Kamal looks at you for a long time, then turns and leaves. As if he already knows.',
        },
      },
      {
        id: 'owner-help',
        text: {
          az: 'Ad demirəm. Əvəzində təklif edirəm: həftədə iki gün marketdə pulsuz işləyim, o da Muradgilə ərzaq versin.',
          en: 'I don’t give the name. Instead I offer: I’ll work in the shop two days a week for free, and he gives Murad’s family food.',
        },
        next: 'meeting',
        weights: { virtue: 2, buddhist: 1 },
        insight: {
          school: 'virtue',
          philosopher: 'Aristotel',
          quote: {
            az: 'Cömərd insan düzgün adama, düzgün qədər və düzgün vaxtda verir.',
            en: 'The generous person gives to the right people, the right amount, at the right time.',
          },
          explain: {
            az: 'Sən “ya satım, ya susum” tələsindən çıxdın və özündən verdin. Bu, Aristotelin qızıl ortasına yaxındır: qanunu tapdalamırsan, insanı da satmırsan.\n\nBu, hər problemi həll etmir. Amma sənin kim olduğunu göstərir.',
            en: 'You escaped the trap of “betray or stay silent” and gave something of yourself. That is close to Aristotle’s golden mean: you don’t trample the law, and you don’t sell out a person.\n\nIt does not solve everything. But it shows who you are.',
          },
          think: {
            az: 'Başqalarına puldan başqa nə verə bilərsən?',
            en: 'What can you give others besides money?',
          },
        },
        echo: {
          az: 'Kamal dayı təəccüblənir, sonra gülümsəyir: “Şənbə saat doqquzda gəl.”',
          en: 'Mr Kamal is surprised, then smiles: “Come on Saturday at nine.”',
        },
      },
    ],
  },

  // ───────────────────────────── III-B (told the truth)
  {
    id: 'statement',
    step: 3,
    image: 'statement',
    chapter: { az: 'III · Ofis', en: 'III · The office' },
    title: { az: 'İmzala', en: 'Sign here' },
    body: {
      az: 'Kamal dayının kiçik ofisi. Rauf da buradadır. Stolun üstündə bir vərəq var: “Şahid ifadəsi.”\n\nOrada yazılıb: “Murad oğrudur. Bir daha marketə buraxılmasın. Polisə məlumat verilsin.”\n\nKamal dayı deyir: “Sən düzünü dedin. İndi imzala, iş bitsin.”\n\nSən Muradın götürdüyünü gördün. Amma xəstə anasını da bilirsən.',
      en: 'Mr Kamal’s tiny office. Rauf is here too. On the desk lies a sheet: “Witness statement.”\n\nIt says: “Murad is a thief. He must never enter the shop again. The police should be informed.”\n\nMr Kamal says: “You told the truth. Now sign, and we are done.”\n\nYou saw Murad take the things. But you also know about his sick mother.',
    },
    prompt: {
      az: 'Sual soruşur: “oğru” sözü Murad haqqında hər şeyi deyirmi?',
      en: 'Sual asks: does the word “thief” say everything about Murad?',
    },
    choices: [
      {
        id: 'statement-sign',
        text: {
          az: 'İmzalayıram. Oğurluq oğurluqdur, səbəbi nə olursa olsun.',
          en: 'I sign. Stealing is stealing, whatever the reason.',
        },
        next: 'pharmacy',
        weights: { kantian: 2 },
        insight: {
          school: 'kantian',
          philosopher: 'Kant',
          quote: {
            az: 'Ədalət yox olarsa, insanların yer üzündə yaşamasının dəyəri qalmaz.',
            en: 'If justice perishes, human life on earth loses its value.',
          },
          explain: {
            az: 'Sən eyni ölçünü hamıya tətbiq etdin. Bu, ədalətin bir üzüdür: kiminsə acınacaqlı hekayəsi qanunu əyməməlidir.\n\nAmma ədalətin başqa üzü də var: bəzən çox sərt qayda insanı görmür. Kant deyərdi: bir istisna açsan, qayda ölür.',
            en: 'You applied the same measure to everyone. That is one face of justice: a sad story should not bend the law.\n\nBut justice has another face: sometimes a very strict rule cannot see the person. Kant would say: open one exception, and the rule dies.',
          },
          think: {
            az: 'Ədalət hamıya eyni davranmaqdır, yoxsa hər kəsə layiq olduğunu verməkdir?',
            en: 'Is justice treating everyone the same, or giving everyone what they deserve?',
          },
        },
        echo: {
          az: 'İmzalayırsan. Kamal dayı deyir: “Belə düz insan azdır. Gələn həftə də gəl.”',
          en: 'You sign. Mr Kamal says: “Honest people are rare. Come by next week too.”',
        },
      },
      {
        id: 'statement-fact',
        text: {
          az: 'Yalnız gördüyümü yazıram: “Murad çörək və dərman götürdü.” Amma “oğrudur, cəzalandırın” yazmıram.',
          en: 'I write only what I saw: “Murad took bread and medicine.” I don’t write “he is a thief, punish him.”',
        },
        next: 'pharmacy',
        weights: { existential: 2, virtue: 1 },
        insight: {
          school: 'existential',
          philosopher: 'Kierkegaard',
          quote: {
            az: 'Həqiqət subyektivlikdir.',
            en: 'Truth is subjectivity.',
          },
          explain: {
            az: 'Sən faktı inkar etmədin, amma hökmü də öz adına yazmadın. Danimarkalı filosof Kierkegaard deyirdi: həqiqət təkcə quru fakt deyil, həm də sənin ona necə yanaşmağındır.\n\nSən öz sözünün sərhədini çəkdin: “gördüyümü deyirəm, amma insan haqqında son sözü mən demirəm.”',
            en: 'You did not deny the fact, but you did not sign the verdict either. The Danish philosopher Kierkegaard said truth is not only a dry fact — it is also how you stand toward it.\n\nYou drew a line around your words: “I say what I saw, but I don’t have the final word on a person.”',
          },
          think: {
            az: 'Bir insanı bircə hərəkətinə görə adlandırmaq ədalətlidirmi?',
            en: 'Is it fair to name a person by a single action?',
          },
        },
        echo: {
          az: 'Kamal dayı narazıdır, amma vərəqi götürür: “Yaxşı. Gələn həftə yenə lazım ola bilərsən.”',
          en: 'Mr Kamal is not pleased, but takes the sheet: “Fine. I may need you again next week.”',
        },
      },
    ],
  },

  // ───────────────────────────── IV-B
  {
    id: 'pharmacy',
    step: 4,
    image: 'pharmacy',
    chapter: { az: 'IV · Aptek rəfi', en: 'IV · The pharmacy shelf' },
    title: { az: 'Eyni qayda, başqa üz', en: 'Same rule, different face' },
    body: {
      az: 'Bir həftə sonra yenə marketdəsən. Bu dəfə yaşlı bir qadın — Leyla xala — aptek rəfindən insulin götürüb çantasına qoyur. Nəvəsində şəkər xəstəliyi var, pulu çatmır.\n\nRauf onu saxlayır. Kamal dayı sənə baxır: “Keçən həftə nə dedinsə, bu gün də onu de. Qayda qaydadır.”\n\nLeyla xala titrəyir: “Uşaq dərmansız qala bilməz.”',
      en: 'A week later you are in the shop again. This time an older woman — Leyla — takes insulin from the pharmacy shelf and slips it into her bag. Her grandson has diabetes; she cannot afford it.\n\nRauf stops her. Mr Kamal looks at you: “Whatever you said last week, say it today. A rule is a rule.”\n\nLeyla is trembling: “The boy can’t go without his medicine.”',
    },
    prompt: {
      az: 'Sual: qayda eynidir, üz dəyişib. Fəlsəfənin çoxu belə başlayır — eyni sözü ikinci dəfə demək lazım gələndə.',
      en: 'Sual: the rule is the same, the face has changed. A lot of philosophy starts here — when you must say the same thing a second time.',
    },
    choices: [
      {
        id: 'pharmacy-same',
        text: {
          az: 'Eyni sözü deyirəm. Qayda dərmana görə dəyişməməlidir.',
          en: 'I say the same thing. The rule shouldn’t change because it’s medicine.',
        },
        next: 'meeting',
        weights: { kantian: 2, stoic: 1 },
        insight: {
          school: 'kantian',
          philosopher: 'Kant',
          quote: {
            az: 'Qaydanı elə seç ki, istisnasız hamıya aid ola bilsin.',
            en: 'Choose a rule that could apply to everyone, without exception.',
          },
          explain: {
            az: 'Sən ardıcıl oldun. Bu, gücdür — həm də sərtlikdir. Kant üçün əxlaq belə işləyir: bu gün dərman, sabah pul, o biri gün “mənim uşağım”.\n\nSən qapını bağladın. Uşaq isə hələ də dərmansızdır. Fəlsəfə rahat yuxu vəd etmir. Yalnız bunu deyir: sən nəyi qoruduğunu bilirsən.',
            en: 'You were consistent. That is a strength — and a hardness. For Kant, morality works like this: today medicine, tomorrow money, the day after “my child”.\n\nYou closed the door. The boy still has no medicine. Philosophy doesn’t promise easy sleep. It only says: you know what you protected.',
          },
          think: {
            az: 'Ardıcıl olmaq həmişə yaxşıdırmı?',
            en: 'Is being consistent always good?',
          },
        },
        echo: {
          az: 'Leyla xalanı ofisə aparırlar. Sən eyni cümləni iki dəfə demiş oldun.',
          en: 'They take Leyla to the office. You have now said the same sentence twice.',
        },
      },
      {
        id: 'pharmacy-bend',
        text: {
          az: 'Deyirəm: bu başqa işdir. Uşağın sağlamlığı rəfdəki qaydadan vacibdir. Buraxın onu.',
          en: 'I say: this is different. A child’s health matters more than a shop rule. Let her go.',
        },
        next: 'meeting',
        weights: { utilitarian: 2, buddhist: 1 },
        insight: {
          school: 'utilitarian',
          philosopher: 'Mill',
          quote: {
            az: 'Ölçü sənin öz xoşbəxtliyin deyil — işə aid olan hamının xoşbəxtliyidir.',
            en: 'The standard is not the agent’s own happiness, but that of all concerned.',
          },
          explain: {
            az: 'Sən istisna etdin. Nəticəyə baxdın: bir uşağın sağlamlığı marketin qaydasından ağır gəldi.\n\nKamal dayı deyəcək: “Keçən həftə başqa danışırdın.” Bəlkə haqlıdır. Amma utilitarizm deyir: vəziyyətlər eyni deyilsə, hökm də eyni olmaya bilər.',
            en: 'You made an exception. You looked at the outcome: a child’s health weighed more than the shop’s rule.\n\nMr Kamal will say: “Last week you said something else.” Maybe he is right. But utilitarianism says: if situations are different, the verdict can be different too.',
          },
          think: {
            az: 'Fikrini dəyişmək zəiflikdir, yoxsa ağıl?',
            en: 'Is changing your mind weakness, or wisdom?',
          },
        },
        echo: {
          az: 'Leyla xala gedir. Kamal dayı başını bulayır: “Səndən daha şahid olmaz.”',
          en: 'Leyla walks out. Mr Kamal shakes his head: “You’ll never be a witness again.”',
        },
      },
      {
        id: 'pharmacy-pay',
        text: {
          az: 'İnsulinin pulunu özüm ödəyirəm. Nə Leyla xala cəzalansın, nə də qayda pozulsun.',
          en: 'I pay for the insulin myself. Leyla isn’t punished, and the rule isn’t broken.',
        },
        next: 'meeting',
        weights: { virtue: 2, stoic: 1 },
        insight: {
          school: 'virtue',
          philosopher: 'Aristotel',
          quote: {
            az: 'Yaxşılıq bilməkdə yox, etməkdədir.',
            en: 'Goodness lies not in knowing, but in doing.',
          },
          explain: {
            az: 'Sən “ya qayda, ya uşaq” tələsindən çıxmağa çalışdın. Üçüncü yol: özündən ver.\n\nBu həmişə mümkün deyil — bəzən nə pul olur, nə vaxt. Onda yenə ilk iki yola qayıdırsan. Amma imkan olanda belə jest xarakteri göstərir.',
            en: 'You tried to escape the trap of “the rule or the child”. A third way: give from yourself.\n\nThat is not always possible — sometimes there is no money, no time. Then you are back to the first two roads. But when you can, such a gesture shows character.',
          },
          think: {
            az: 'Pulun olmasaydı, nə edərdin?',
            en: 'What would you do if you had no money?',
          },
        },
        echo: {
          az: 'Kassada kartını uzadırsan. Leyla xala əlini sıxır. Kamal dayı heç nə demir.',
          en: 'At the till you hand over your card. Leyla squeezes your hand. Mr Kamal says nothing.',
        },
      },
    ],
  },

  // ───────────────────────────── III-C (stayed quiet)
  {
    id: 'calls',
    step: 3,
    image: 'calls',
    chapter: { az: 'III · İki zəng', en: 'III · Two calls' },
    title: { az: 'Eyni anda', en: 'At the same time' },
    body: {
      az: 'Axşam saat doqquzda telefonuna eyni anda iki zəng gəlir.\n\nBirinci Muraddır, ağlayır: “Anam huşunu itirdi! Təcili yardım gecikir, maşın lazımdır!”\n\nİkinci Raufdur: “Kamal dayı məni işdən çıxarır. Deyir, oğurluğa göz yummuşam. Sabah saat səkkizdə gəl, şahidlik et — yoxsa işimi itirəcəm.”\n\nSənin maşının var. Amma Muradgilə getsən, gecəni xəstəxanada keçirəcəksən və səhər Raufa çatmayacaqsan.',
      en: 'At nine in the evening, two calls hit your phone at once.\n\nThe first is Murad, crying: “Mum fainted! The ambulance is late, we need a car!”\n\nThe second is Rauf: “Mr Kamal is firing me. He says I let the stealing happen. Come at eight tomorrow and be my witness — or I lose my job.”\n\nYou have a car. But if you go to Murad, you will spend the night at the hospital and miss Rauf in the morning.',
    },
    prompt: {
      az: 'Sual: “bu mənim işim deyil” demək asan idi. İndi iki nəfər səni çağırır.',
      en: 'Sual: “not my business” was easy to say. Now two people are calling you.',
    },
    choices: [
      {
        id: 'calls-murad',
        text: {
          az: 'Muradgilə gedirəm. Sağlamlıq işdən vacibdir.',
          en: 'I go to Murad. Health matters more than a job.',
        },
        next: 'tea',
        weights: { buddhist: 2, utilitarian: 1 },
        insight: {
          school: 'buddhist',
          philosopher: 'Budda',
          quote: {
            az: 'Kim mənə qulluq etmək istəyirsə, xəstəyə qulluq etsin.',
            en: 'Whoever would care for me should care for the sick.',
          },
          explain: {
            az: 'Sən daha çox ehtiyacı olanın yanına getdin. Mərhəmət çox vaxt belə seçir: kim daha köməksizdir?\n\nRauf bunu haqsızlıq saya bilər. Sən isə ağrının ən güclü olduğu yerə baxdın.',
            en: 'You went to the one in greater need. Compassion often chooses this way: who is most helpless?\n\nRauf may call it unfair. You looked at where the pain was strongest.',
          },
          think: {
            az: 'Kimin ehtiyacının daha böyük olduğunu necə ölçürsən?',
            en: 'How do you measure whose need is greater?',
          },
        },
        echo: {
          az: 'Gecə xəstəxanada keçir. Səbinə xala yaxşılaşır. Saat səkkizi keçir. Telefonda Raufdan buraxılmış zənglər.',
          en: 'The night passes at the hospital. Sabina gets better. Eight o’clock comes and goes. Missed calls from Rauf.',
        },
      },
      {
        id: 'calls-rauf',
        text: {
          az: 'Muradgilə yenidən təcili yardım çağırıram, qonşuları oyadıram. Səhər isə sözümü tutub Raufa gedirəm.',
          en: 'I call the ambulance again for Murad and wake up the neighbours. In the morning I keep my word and go to Rauf.',
        },
        next: 'tea',
        weights: { stoic: 1, kantian: 1, virtue: 1 },
        insight: {
          school: 'stoic',
          philosopher: 'Mark Avreli',
          quote: {
            az: 'Hər işi elə gör ki, sanki həyatının son işidir.',
            en: 'Do every act of your life as if it were your last.',
          },
          explain: {
            az: 'Sən panikaya düşmədin. Muradgilə kömək üçün əlindən gələni etdin, amma özün getmədin.\n\nRoma imperatoru və stoik filosof Mark Avreli hər səhər özünə xatırladırdı: qarşındakı işi sakit və düzgün gör. Sən iki işi böldün. Bu, soyuq görünə bilər. Bəzən isə sadəcə aydın düşüncədir.',
            en: 'You did not panic. You did what you could for Murad’s family without going yourself.\n\nThe Roman emperor and Stoic philosopher Marcus Aurelius reminded himself every morning: do the task in front of you calmly and well. You split the two tasks. That can look cold. Sometimes it is just clear thinking.',
          },
          think: {
            az: 'Panika səni nə vaxt yanlış qərara aparıb?',
            en: 'When has panic led you to a bad decision?',
          },
        },
        echo: {
          az: 'Qonşular Səbinə xalanı xəstəxanaya aparır. Səhər sən Raufun yanındasan. O, əlini sıxır. Muradın mesajı isə cavabsız qalıb.',
          en: 'The neighbours take Sabina to hospital. In the morning you stand by Rauf. He shakes your hand. Murad’s message stays unanswered.',
        },
      },
      {
        id: 'calls-both',
        text: {
          az: 'Hər ikisinə çatmağa çalışıram: gecə xəstəxanaya, səhər yuxusuz Raufa. Bəlkə heç birinə tam çata bilməyəcəm.',
          en: 'I try to make both: hospital at night, Rauf in the morning without sleep. Maybe I won’t fully make either.',
        },
        next: 'tea',
        weights: { existential: 2, virtue: 1 },
        insight: {
          school: 'existential',
          philosopher: 'Camus',
          quote: {
            az: 'Mən üsyan edirəm — deməli, biz varıq.',
            en: 'I rebel — therefore we exist.',
          },
          explain: {
            az: 'Sən mümkün olmayanı seçdin. Fransız yazıçı və filosof Camus deyərdi: dünya sənə asan seçim vermir, amma sən “onda heç nə etmərəm” demirsən.\n\nBu, uduzmaq ola bilər. Amma uduzanda belə sən “mən buradayam” demiş olursan.',
            en: 'You chose the impossible. The French writer and philosopher Camus would say: the world won’t give you an easy choice, but you refuse to say “then I’ll do nothing.”\n\nYou might lose. But even when you lose, you have said “I am here.”',
          },
          think: {
            az: 'Mümkün olmayanı yenə də sınamağa dəyərmi?',
            en: 'Is it worth trying the impossible anyway?',
          },
        },
        echo: {
          az: 'Gecə xəstəxanada, səhər ofisdə. Gözlərin yumulur. Nənən zəng edir: “Gəl, çay dəmləmişəm.”',
          en: 'Night at the hospital, morning at the office. Your eyes are closing. Your grandmother calls: “Come over, I’ve made tea.”',
        },
      },
    ],
  },

  // ───────────────────────────── IV-C
  {
    id: 'tea',
    step: 4,
    image: 'tea',
    chapter: { az: 'IV · Nənənin evi', en: 'IV · Grandma’s place' },
    title: { az: 'Armudu stəkanda çay', en: 'Tea in a tulip glass' },
    body: {
      az: 'Nənənin evində həmişə çay dəmlənir. O, heç nə soruşmadan armudu stəkana çay süzür.\n\nSonra deyir: “Əvvəl kənarda qalmaq istədin. Sonra yenə seçmək məcburiyyətində qaldın. Bəziləri deyir: seçməmək də bir seçimdir. Bəziləri deyir: hər yükü öz çiyninə götürmə. İkisi də doğrudur.”\n\nStəkandan buxar qalxır.',
      en: 'At your grandmother’s, there is always tea brewing. Without a word she pours it into a tulip-shaped glass.\n\nThen she says: “First you wanted to stay out of it. Then you had to choose anyway. Some say: not choosing is also a choice. Others say: don’t carry every weight yourself. Both are true.”\n\nSteam rises from the glass.',
    },
    prompt: {
      az: 'Nənən soruşur: “Bundan sonra necə yaşayacaqsan?”',
      en: 'She asks: “So how will you live from now on?”',
    },
    choices: [
      {
        id: 'tea-sooner',
        text: {
          az: 'Növbəti dəfə daha tez qərar verəcəm. Kənarda qalmaq məni rahatlatmadı.',
          en: 'Next time I’ll decide sooner. Staying out of it didn’t give me peace.',
        },
        next: 'meeting',
        weights: { existential: 2, virtue: 1 },
        insight: {
          school: 'existential',
          philosopher: 'Kierkegaard',
          quote: {
            az: 'Həyatı geriyə baxaraq anlayırıq, amma irəliyə baxaraq yaşamalıyıq.',
            en: 'Life can only be understood backwards, but it must be lived forwards.',
          },
          explain: {
            az: 'Sən etiraf etdin: “bu mənim işim deyil” cümləsi səni yüngülləşdirmədi. Kierkegaard deyirdi: qərarsızlıq da bir qərardır, sadəcə gizlənmiş qərar.\n\nNövbəti dəfə yenə qorxacaqsan. Amma artıq bilirsən ki, kənarda qalmağın da qiyməti var.',
            en: 'You admitted it: “not my business” did not make you lighter. Kierkegaard said indecision is also a decision — just a hidden one.\n\nNext time you will still be afraid. But now you know that staying out of things has a price too.',
          },
          think: {
            az: 'Hansı qərarı çoxdandır təxirə salırsan?',
            en: 'Which decision have you been putting off for a long time?',
          },
        },
        echo: {
          az: 'Nənən gülümsəyir: “Onda get. Yol səni yüngül aparmayacaq. Amma düz aparacaq.”',
          en: 'She smiles: “Then go. The road won’t carry you lightly. But it will carry you straight.”',
        },
      },
      {
        id: 'tea-limit',
        text: {
          az: 'Sərhəd qoyacam. Hər kəsin ağrısını öz üzərimə götürsəm, özüm dağılaram.',
          en: 'I’ll set limits. If I take on everyone’s pain, I’ll fall apart myself.',
        },
        next: 'meeting',
        weights: { stoic: 2, buddhist: 1 },
        insight: {
          school: 'stoic',
          philosopher: 'Epiktet',
          quote: {
            az: 'Bizi narahat edən hadisələr deyil, onlar haqqında fikirlərimizdir.',
            en: 'Men are disturbed not by things, but by the views they take of them.',
          },
          explain: {
            az: 'Sən mərhəməti saxladın, amma özünü “hamını xilas edən qəhrəman” etmədin. Stoiklər buna nəzarət dairəsi deyirdi: sözlərin, əllərin, qərarın. Bütün dünyanın ağrısı yox.\n\nBəziləri bunu soyuqluq sanır. Sən isə bilirsən: sərhəd olmasa, kömək yox, yalnız yorğunluq qalır.',
            en: 'You kept compassion, but you did not make yourself the “hero who saves everyone”. The Stoics called this the circle of control: your words, your hands, your decisions. Not the pain of the whole world.\n\nSome see that as coldness. You know better: without limits there is no help, only exhaustion.',
          },
          think: {
            az: 'Özünə qayğı göstərməyi nə vaxt unudursan?',
            en: 'When do you forget to take care of yourself?',
          },
        },
        echo: {
          az: 'Nənən başını yelləyir: “Sərhəd də sədaqətdir. Özünə olan sədaqət.”',
          en: 'She nods: “A limit is a kind of loyalty too. Loyalty to yourself.”',
        },
      },
      {
        id: 'tea-both',
        text: {
          az: 'Bəzən qayda, bəzən insan. Tək bir formulla yaşamayacam. Bu çətinliyi daşıyacam.',
          en: 'Sometimes the rule, sometimes the person. I won’t live by one formula. I’ll carry that difficulty.',
        },
        next: 'meeting',
        weights: { existential: 1, virtue: 1, buddhist: 1 },
        insight: {
          school: 'existential',
          philosopher: 'Isaiah Berlin',
          quote: {
            az: 'Bütün yaxşı şeylər bir-biri ilə uyğun gəlmir.',
            en: 'Not all good things are compatible.',
          },
          explain: {
            az: 'Bu cavab dəyər plüralizminə yaxındır. İngilis filosofu Isaiah Berlin deyirdi: azadlıq, ədalət, mərhəmət — hamısı dəyərlidir, amma bəzən eyni anda sığmırlar.\n\nBunu uğursuzluq saymamaq da bir fəlsəfədir: dünyanı tək açarla açmağa çalışmamaq.',
            en: 'This answer is close to value pluralism. The British philosopher Isaiah Berlin said: freedom, justice, mercy — all are valuable, but sometimes they don’t fit together.\n\nNot calling that a failure is a philosophy too: not trying to open the world with a single key.',
          },
          think: {
            az: 'Sənin üçün ən vacib iki dəyər hansıdır? Onlar heç toqquşubmu?',
            en: 'What are your two most important values? Have they ever clashed?',
          },
        },
        echo: {
          az: 'Nənən ikinci stəkanı süzür: “Hər şeyin bir cavabı olsaydı, çaya ehtiyac qalmazdı.”',
          en: 'She pours a second glass: “If everything had one answer, we wouldn’t need tea.”',
        },
      },
    ],
  },

  finale,
]
