import type { Scene } from './types'

export const scenes: Scene[] = [
  {
    id: 'dawn',
    chapter: { az: 'I · Darvaza', en: 'I · The gate' },
    title: { az: 'Dumanlı səhər', en: 'A misted morning' },
    body: {
      az: 'Yol dağın ətəyində başlayır. Lövhə yoxdur. Yalnız bir daşın üstündə yazılıb: “Kim gedirsə, özü ilə gedir.”\n\nYanında kimsə durur. Üzü yoxdur, səsi var. Adı Sualdır. O deyir ki, bu yol səni imtahana çəkmir. Sadəcə sənə özünü göstərir.\n\nİlk sual asandır kimi görünür. Amma cavabın növbəti addımı dəyişəcək.',
      en: 'The path begins at the foot of a mountain. There is no sign. Only a stone: “Whoever walks, walks with themselves.”\n\nSomeone stands beside you. No face, only a voice. The name is Sual. This road, they say, is not an exam. It only shows you to yourself.\n\nThe first question looks easy. Your answer will still change the next step.',
    },
    prompt: {
      az: 'Sual soruşur: bu yolu niyə tutursan?',
      en: 'Sual asks: why take this path?',
    },
    choices: [
      {
        id: 'dawn-good',
        text: {
          az: 'Yaxşı insan olmaq istəyirəm. Yəni elə birinə çevrilmək istəyirəm ki, seçimlərin özü məni utandırmasın.',
          en: 'I want to become a good person — the kind whose choices do not make them ashamed.',
        },
        next: 'thief',
        weights: { virtue: 2 },
        insight: {
          school: 'virtue',
          philosopher: 'Aristotel',
          quote: {
            az: 'Biz ədalətli işlər görməklə ədalətli oluruq.',
            en: 'We become just by doing just acts.',
          },
          explain: {
            az: 'Aristotel deyirdi: yaxşı olmaq bir qayda siyahısını əzbərləmək deyil. Bu, vərdişdir. Hər gün eyni cür seçəndə xarakter yaranır. “Yaxşı insan olum” demək, əslində belə bir sualdır: mən necə biri olmaq istəyirəm, təkcə bu dəqiqədə nə etmək yox.',
            en: 'Aristotle said goodness is not a list of rules to memorise. It is a habit. Character grows when you choose in the same spirit, day after day. “I want to be good” really asks: what kind of person am I becoming, not only what should I do in this minute?',
          },
        },
        echo: {
          az: 'Sual deyir: “Yaxşı olmaq istəyirsən. Yaxşı. İndi görək, yaxşılıq asan olanda da qalacaq, çətin olanda da.”',
          en: 'Sual says: “You want to be good. Fine. Now we will see if goodness stays when it is hard.”',
        },
      },
      {
        id: 'dawn-less',
        text: {
          az: 'Əziyyəti azaltmaq istəyirəm. Həm özümünkünü, həm başqalarının. Ağrı azalsın, bəsdir.',
          en: 'I want less suffering — mine and other people’s. If the pain falls, that is enough.',
        },
        next: 'thief',
        weights: { buddhist: 1, stoic: 1 },
        insight: {
          school: 'buddhist',
          philosopher: 'Budda',
          quote: {
            az: 'Nifrət nifrətlə sönmür. Sevgi ilə sönür.',
            en: 'Hatreds never cease through hatred. Through love they cease.',
          },
          explain: {
            az: 'Bu baxış dünyanı döyüş meydanı kimi görmür. Əsas düşmən ağrıdır: qorxu, acıq, “mən haqlıyam” deyə yapışmaq. Məqsəd qalib gəlmək yox, bir az yüngül getməkdir. Sonra sual gəlir: bəzən həqiqət daha çox ağrıdır. Onda nə edirsən?',
            en: 'This view does not treat the world as a battlefield. The real enemy is pain: fear, anger, clinging to “I am right.” The aim is not to win. It is to walk a little lighter. Then a harder question arrives: sometimes the truth hurts more. What then?',
          },
        },
        echo: {
          az: 'Sual deyir: “Ağrı azalsın deyirsən. Bəs ağrı ilə həqiqət eyni qapıdan gələndə?”',
          en: 'Sual says: “You want less pain. What if pain and truth walk through the same door?”',
        },
      },
      {
        id: 'dawn-free',
        text: {
          az: 'Hazır cavab istəmirəm. Heç kim mənə “sən beləsən” deməsin. Özüm yazım.',
          en: 'I do not want a ready-made answer. Nobody should tell me what I am. I will write it myself.',
        },
        next: 'thief',
        weights: { existential: 2 },
        insight: {
          school: 'existential',
          philosopher: 'Sartre',
          quote: {
            az: 'İnsan özünü necə yaradırsa, odur.',
            en: 'Man is nothing else but what he makes of himself.',
          },
          explain: {
            az: 'Sartre deyirdi: sən əvvəldən “qəhrəman” və ya “qorxaq” yazılmamısan. Əvvəl varsan, sonra seçimlərin səni düzəldir. Bu, azadlıqdır. Amma azadlıq yüngül deyil, çünki bəhanə qalmır. “Məni belə yaradıblar” demək çətinləşir.',
            en: 'Sartre said you are not written in advance as a hero or a coward. First you exist, then your choices build you. That is freedom. It is not light, because the alibis fall away. It gets harder to say “they made me this way.”',
          },
        },
        echo: {
          az: 'Sual deyir: “Özünü yazmaq istəyirsən. Qələm sənin əlindədir. Kağız isə başqalarının həyatıdır da.”',
          en: 'Sual says: “You want to write yourself. The pen is in your hand. The paper is also other people’s lives.”',
        },
      },
      {
        id: 'dawn-help',
        text: {
          az: 'Mümkün qədər çox adama kömək etmək istəyirəm. Bir nəfər yox, çoxu.',
          en: 'I want to help as many people as I can. Not one person — the many.',
        },
        next: 'thief',
        weights: { utilitarian: 2 },
        insight: {
          school: 'utilitarian',
          philosopher: 'Mill',
          quote: {
            az: 'Bir iş o qədər doğrudur ki, xoşbəxtliyi artırır.',
            en: 'Actions are right in proportion as they tend to promote happiness.',
          },
          explain: {
            az: 'Bu düşüncənin sadə sualı var: bu seçimdən sonra dünyada nə qədər sevinc qalır, nə qədər ağrı? Bir nəfərin göz yaşı beş nəfərin qurtuluşu yanında kiçik görünə bilər. Bəziləri deyir bu soyuqdur. Cavab belədir: məqsəd riyaziyyat yox, əziyyətin azalmasıdır. Amma “çox” deyəndə bəzən bir üz itir.',
            en: 'This way of thinking has a simple question: after this choice, how much joy is left in the world, and how much pain? One person’s tears can look small beside five people saved. Some call that cold. The aim is not maths. It is less suffering. Still, when you say “the many,” a face can disappear.',
          },
        },
        echo: {
          az: 'Sual deyir: “Çoxunu xilas etmək istəyirsən. Yaxşı niyyətdir. İndi bir üz gələcək. Görək rəqəm üzə qalib gələcək, ya yox.”',
          en: 'Sual says: “You want to save the many. That is a decent wish. Now a face will arrive. We will see if the number beats the face.”',
        },
      },
    ],
  },
  {
    id: 'thief',
    chapter: { az: 'II · Meşə', en: 'II · The woods' },
    title: { az: 'Yaralı və keşikçilər', en: 'The wounded and the watch' },
    body: {
      az: 'Kolun arxasında bir insan yatır. Qolu qan içindədir. Səsini zorla çıxarır: “Çörək oğurladım. Uşaqlar ac idi.”\n\nUzaqda at kişnəyir. Keşikçilər yaxınlaşır. Adam səndən gizlətməyini istəyir.\n\nSual pıçıldayır: burada üç yol var. Hansını seçsən, növbəti mənzərə dəyişəcək. Eyni meşəyə qayıtmayacaqsan.',
      en: 'Behind the brush a person lies. The arm is bloody. They force the words out: “I stole bread. The children were hungry.”\n\nHorses in the distance. The watch is close. They ask you to hide them.\n\nSual whispers: three roads from here. Whichever you take, the next view changes. You will not return to the same woods.',
    },
    prompt: {
      az: 'Keşikçilər soruşacaq: yolda kiməsə rast gəldin?',
      en: 'The watch will ask: did you meet anyone on the road?',
    },
    choices: [
      {
        id: 'thief-lie',
        text: {
          az: 'Yalan danışıram və onu kolun dibində saxlayıram. Bir həyat, mənim dilimdən bahadır.',
          en: 'I lie and keep them in the brush. A life is worth more than the words in my mouth.',
        },
        next: 'camp',
        weights: { utilitarian: 2, buddhist: 1 },
        insight: {
          school: 'utilitarian',
          philosopher: 'Bentham',
          quote: {
            az: 'Hər kəs bir sayılır, heç kim birdən çox deyil.',
            en: 'Everybody to count for one, nobody for more than one.',
          },
          explain: {
            az: 'Sən nəticəyə baxdın: yalan pis sözdür, amma bu dəqiqədə bir insanı döyülməkdən, bəlkə də ölümdən qoruya bilər. Bu cür düşünən adam deyir: əməlin “təmiz” olmasından çox, dünyada ağrının azalıb-azalmamasına bax. Kant isə deyərdi ki, yalanı bir dəfə “yaxşılıq üçün” açsan, qayda dağılır. Sən hələlik qaydanı yox, bu bədəni seçdin. Ona görə də yol səni onun düşərgəsinə aparır — yalanın davamı var.',
            en: 'You looked at the result: a lie is an ugly word, but in this minute it may keep a person from a beating, or worse. This view says: do not worship a clean act. Watch whether pain in the world goes down. Kant would answer that if you open lying “for good,” the rule itself collapses. For now you chose the body, not the rule. So the path takes you to their camp — a lie has a sequel.',
          },
        },
        echo: {
          az: 'Keşikçilər “heç kim yoxdur” deyib keçir. Yaralı sənin ətəyindən yapışır. “Gəl,” deyir. “Sən artıq bizdənsən.”',
          en: 'The watch rides on after “nobody here.” The wounded person grips your coat. “Come,” they say. “You are one of us now.”',
        },
      },
      {
        id: 'thief-truth',
        text: {
          az: 'Düzünü deyirəm. Əgər hamı belə yalan danışsa, yolda heç kimə inanmaq olmaz.',
          en: 'I tell the truth. If everyone lied like this, nobody on the road could be believed.',
        },
        next: 'guard',
        weights: { kantian: 2 },
        insight: {
          school: 'kantian',
          philosopher: 'Kant',
          quote: {
            az: 'Elə et ki, sənin qaydan hamı üçün qanun ola bilsin.',
            en: 'Act only on a rule you could will as a law for everyone.',
          },
          explain: {
            az: 'Kantın fikri belədir: bir işi seçəndə düşün ki, hamı eyni işi görsə, dünya dağılarmı? Yalanı “bu dəfə yaxşıdır” sənətsən, etibar da yox olur. O, nəticəni inkar etmir. Deyir ki, nəticə səni aklamaq üçün bəhanə olmamalıdır. İnsanı aldatmaq onu alət etməkdir. Sən bu sərt qaydanı tutdun. Ona görə keşikçilər səni şahid kimi aparır — doğru sözün də davamı var.',
            en: 'Kant’s idea is this: when you choose an act, ask whether the world would break if everyone did the same. If you carve “this lie is fine,” trust itself dies. He does not deny results. He says results must not become an excuse. To deceive a person is to use them as a tool. You took that stern rule. So the watch takes you as a witness — a true word has a sequel too.',
          },
        },
        echo: {
          az: 'Keşikçilər adamı qaldırır. Başçı sənə baxır: “Sən düz danışdın. Bizimlə gəl. Bu iş bitməyib.”',
          en: 'The watch lifts the wounded person. The captain looks at you: “You spoke straight. Ride with us. This is not finished.”',
        },
      },
      {
        id: 'thief-tend',
        text: {
          az: 'Nə yalan deyirəm, nə də xəbər. Yarasını sarıyıram və yoldan çəkilirəm. Qalanı mənim əlimdə deyil.',
          en: 'I neither lie nor report. I bind the wound and step off the road. The rest is not in my hands.',
        },
        next: 'ridge',
        weights: { stoic: 2, virtue: 1 },
        insight: {
          school: 'stoic',
          philosopher: 'Epiktet',
          quote: {
            az: 'Bəzi şeylər sənin əlindədir, bəziləri deyil.',
            en: 'Some things are up to you, and some things are not.',
          },
          explain: {
            az: 'Stoiklər deyirdi: keşikçilərin qərarı, o adamın keçmişi, uşaqların aclığı — bunların hamısını sən bu dəqiqədə idarə edə bilməzsən. İdarə etdiyin şey əllərin, səsin, sakitliyindir. Yaranı bağlamaq sənin işindir. Hökm çıxarmaq isə bəzən başqasının. Bu, biganəlik kimi görünə bilər. Bəzən də sərhəddir. Yol səni tək silsiləyə çıxarır. Amma meşə səni tam buraxmayacaq.',
            en: 'The Stoics said: the watch’s decision, that person’s past, the children’s hunger — you cannot steer all of that in this minute. What you can steer is your hands, your voice, your composure. Binding a wound is yours. Passing a sentence sometimes is not. This can look like indifference. Sometimes it is a boundary. The path takes you onto a ridge alone. The woods will not fully let you go.',
          },
        },
        echo: {
          az: 'Sarğı bağlanır. Sən yoxuşa qalxırsan. Arxada həm yalvarış, həm nərə qalır. İkisi də sənin adını çağırır.',
          en: 'The bandage is tied. You climb. Behind you, a plea and a shout both stay. Both call your name.',
        },
      },
    ],
  },
  {
    id: 'camp',
    chapter: { az: 'III · Düşərgə', en: 'III · The camp' },
    title: { az: 'Od və ac qarınlar', en: 'Fire and empty stomachs' },
    body: {
      az: 'Gecə meşənin içində kiçik od yanır. Üç uşaq var. Qadın sənin ələ baxır, təşəkkür etmir, ölçür.\n\nYaralı — indi adı Arazdır — deyir ki, sabah dəyirmanın anbarına girəcəklər. Un yoxdur, qış gəlir. “Sən yalanınla bizi saxladın. İndi ya bizimləsən, ya da bu odun kənarındasan.”\n\nSual deyir: yalan bir dəfə qurtardı. İkinci dəfə oğurluqdur.',
      en: 'At night a small fire burns in the woods. Three children. A woman studies your hands. She does not thank you. She measures you.\n\nThe wounded one — Araz, now — says they will enter the mill stores tomorrow. There is no flour. Winter is coming. “Your lie kept us. Now you are with us, or you are only beside this fire.”\n\nSual says: the lie saved once. The second time is theft.',
    },
    prompt: {
      az: 'Uşaqlar oda baxır. Sən nə edirsən?',
      en: 'The children watch the fire. What do you do?',
    },
    choices: [
      {
        id: 'camp-join',
        text: {
          az: 'Onlarla gedirəm. Ac uşaqların yanında qanun kağız kimidir.',
          en: 'I go with them. Beside hungry children, the law feels like paper.',
        },
        next: 'mill-raid',
        weights: { utilitarian: 2, existential: 1 },
        insight: {
          school: 'utilitarian',
          philosopher: 'Mill',
          quote: {
            az: 'Əxlaqın ölçüsü xoşbəxtlikdir, kağız deyil.',
            en: 'The measure of morals is happiness, not paper.',
          },
          explain: {
            az: 'Sən yenə nəticəyə baxdın: anbarda un var, uşaqlarda yox. Qanun dəyirmançını qoruyur, amma bu gecə qarınlar boşdur. Bu düşüncə deyir ki, qayda insan üçündür, insan qayda üçün yox. Təhlükəsi də budur: “uşaqlar üçün” deyib hər sərhədi aşa bilərsən. Sən o sərhədi aşmağa razı oldun. Sabah dəyirmandasınız.',
            en: 'You looked at the result again: the mill has flour, the children do not. The law protects the miller; tonight the stomachs are empty. This view says rules exist for people, not people for rules. The danger is the same sentence: you can cross every line “for the children.” You agreed to cross. Tomorrow you are at the mill.',
          },
        },
        echo: {
          az: 'Səhər tezdən dəyirmanın arxasındasınız. İt hürür. Araz pıçıldayır: “Sən qapını aç.”',
          en: 'At dawn you are behind the mill. A dog barks. Araz whispers: “You open the door.”',
        },
      },
      {
        id: 'camp-refuse',
        text: {
          az: 'Yalan danışdım, çünki qan axırdı. Oğurluğa yox. Gedirəm — amma onları da satmaram.',
          en: 'I lied because blood was running. I will not steal. I leave — and I will not sell them either.',
        },
        next: 'mill-ask',
        weights: { virtue: 2, kantian: 1 },
        insight: {
          school: 'virtue',
          philosopher: 'Aristotel',
          quote: {
            az: 'Cəsarət ehtiyatsızlıqla qorxaqlığın arasında durur.',
            en: 'Courage stands between rashness and cowardice.',
          },
          explain: {
            az: 'Sən bir jesti ömürlük qayda etmədin. Bir dəfə gizlətmək, hər dəfə oğurlamaq deyil. Aristotel belə xarakter axtarırdı: ifrat yox, ölçü. Araz bunu xəyanət saysa belə, sən özünü “oğru dəstəsinin adamı” kimi yazmadın. Amma dəyirmançı sabah yenə səni görəcək. Yol səni oraya aparır — susmaq da bir seçim olacaq.',
            en: 'You did not turn one gesture into a lifetime rule. Hiding someone once is not joining every theft. Aristotle looked for that kind of character: not the extreme, the measure. Araz may call it betrayal. You still refused to write yourself as one of a thief-band. The miller will see you tomorrow anyway. The path takes you there — silence will also be a choice.',
          },
        },
        echo: {
          az: 'Od sönür kimi olur. Sən çıxırsan. Səhər dəyirmançı səni yolda saxlayır: “Bu meşədə kim yaşayır? Sən gördün.”',
          en: 'The fire seems to shrink. You leave. In the morning the miller stops you on the road: “Who lives in those woods? You saw.”',
        },
      },
    ],
  },
  {
    id: 'mill-raid',
    chapter: { az: 'IV · Dəyirman', en: 'IV · The mill' },
    title: { az: 'Un və qırılmış əl', en: 'Flour and a broken hand' },
    body: {
      az: 'Qapı açılır. Un kisələri. Araz doldurur. Birdən dəyirmançı çıxır, əlində çıraq. Dava qısa olur. Çıraq düşür. Dəyirmançının əli yanlış yerə gedir, sümük səsi gəlir.\n\nUşaqların unu ələ keçib. Bir adam yerdə inildəyir. Keşikçilərin borusu uzaqda eşidilir.\n\nSual: sən oğurluğun içinə girdin. İndi qurban da var.',
      en: 'The door opens. Sacks of flour. Araz fills them. Then the miller is there with a lamp. The fight is short. The lamp falls. The miller’s hand goes the wrong way. You hear bone.\n\nThe children’s flour is taken. A person groans on the floor. A watch-horn sounds far off.\n\nSual: you stepped inside the theft. Now there is also a victim.',
    },
    prompt: {
      az: 'Araz deyir: “Qaç.” Dəyirmançı sənin adını bilmir hələ.',
      en: 'Araz says: “Run.” The miller does not know your name yet.',
    },
    choices: [
      {
        id: 'raid-stay',
        text: {
          az: 'Qalmıram qaçmağa. Əlini bağlayıram və borunu özüm çağırıram — mən də burdayam.',
          en: 'I do not run. I bind the hand and call the horn myself — I am here too.',
        },
        next: 'ending',
        weights: { virtue: 2, kantian: 1 },
        insight: {
          school: 'virtue',
          philosopher: 'Aristotel',
          quote: {
            az: 'Ədalət başqasına yönəlmiş fəzilətdir.',
            en: 'Justice is the virtue directed toward others.',
          },
          explain: {
            az: 'Sən əvvəl “çoxun xeyiri” ilə oğurluğa girdin, sonra bir üzün yanında dayandın. Bu, ziddiyyət ola bilər. Fəlsəfədə belə olur: iki yaxşı səs eyni anda danışır. Xarakter burada “heç vaxt səhv etmədim” deyil. “Səhvimin yanında qaldım” deməkdir. Yolun sonu belə bağlanır.',
            en: 'You entered the theft for “the many,” then you stood beside one face. That can be a contradiction. Philosophy is full of those: two good voices at once. Character here is not “I never erred.” It is “I stayed with my error.” The road ends on that note.',
          },
        },
        echo: {
          az: 'Un yerə tökülür. Əlin üstündə qan var. Boru yaxınlaşır. Sən qaçmırsan.',
          en: 'Flour spills. There is blood on the hand. The horn comes closer. You do not run.',
        },
      },
      {
        id: 'raid-run',
        text: {
          az: 'Unu uşaqlara çatdırmaq üçün qaçıram. Dəyirmançının əli mənim əlimdən çıxıb.',
          en: 'I run so the flour reaches the children. The miller’s hand is already beyond me.',
        },
        next: 'ending',
        weights: { utilitarian: 2 },
        insight: {
          school: 'utilitarian',
          philosopher: 'Bentham',
          quote: {
            az: 'Ən çox insan üçün ən çox xoşbəxtlik.',
            en: 'The greatest happiness for the greatest number.',
          },
          explain: {
            az: 'Bu, məşhur “vaqon problemi”nin qohumudur. Bir nəfər ağrıyır, üç uşaq yeyəcək. Sən sayına baxıb qaçdın. Bəziləri bunu soyuqqanlılıq sayır. Sən isə deyirsən: qalsaydım, bəlkə un da gedərdi, əl də sağalmazdı. Hesab belə qurulur. İnsanın ürəyi isə hesabı həmişə qəbul etmir. Bu da fəlsəfənin içindədir.',
            en: 'This is kin to the famous trolley problem. One person is in pain; three children will eat. You counted and you ran. Some call that cold. You can answer: if I stayed, the flour might vanish and the hand still not heal. That is how the sum is built. The heart does not always sign it. That too sits inside philosophy.',
          },
        },
        echo: {
          az: 'Meşəyə un kisəsi ilə qayıdırsınız. Uşaqlar gülür. Sən dəyirmançının iniltisini hələ eşidirsən.',
          en: 'You return to the woods with sacks. The children laugh. You can still hear the miller.',
        },
      },
      {
        id: 'raid-split',
        text: {
          az: 'Unu Araz aparsın. Mən dəyirmançı ilə qalıram, amma adlarını vermirəm.',
          en: 'Araz takes the flour. I stay with the miller, and I do not give names.',
        },
        next: 'ending',
        weights: { buddhist: 2, stoic: 1 },
        insight: {
          school: 'buddhist',
          philosopher: 'Budda',
          quote: {
            az: 'Nifrəti nifrətlə söndürmə.',
            en: 'Do not extinguish hate with hate.',
          },
          explain: {
            az: 'Sən cəzanı da, qaçmağı da tam götürmədin. Un getsin deyə uşaqlar ac qalmasın, sən də bir bədənin yanında qal. Mərhəmət bəzən “hamını razı salmaq” deyil. İki ağrını da görməkdir. Təmiz əl qalmır. Amma yapışma da azalır: nə qəhrəman, nə xain olmaq istəmədin.',
            en: 'You did not take full punishment, and you did not take full flight. Let the flour go so the children eat; stay with a body anyway. Compassion is not always pleasing everyone. It is seeing both pains. The hands are not clean. The clinging is quieter: you refused to be either hero or traitor.',
          },
        },
        echo: {
          az: 'Araz kisələrlə yoxa çıxır. Sən çırağı yandırırsan. Dəyirmançı sənin üzünə baxır və başa düşmür.',
          en: 'Araz vanishes with the sacks. You light the lamp. The miller looks at your face and does not understand.',
        },
      },
    ],
  },
  {
    id: 'mill-ask',
    chapter: { az: 'IV · Dəyirman yolu', en: 'IV · The mill road' },
    title: { az: 'Adını ver', en: 'Give the name' },
    body: {
      az: 'Dəyirmançı qoca kişidir. Gözü qorxulu deyil, yorğundur. “Gecələr un itir,” deyir. “Uşaq səsi eşidirəm. Sən meşədən gəlirsən. Düz danış.”\n\nSən Arazın odunu gördün. Uşaqları da. Satmasan, bəlkə yenə anbara girəcəklər. Satasan, keşikçilər uşaqların da dalınca gedə bilər.\n\nSual: sən oğurluğa getmədin. Amma bildiyin şey də bir yüktür.',
      en: 'The miller is old. The eyes are not cruel. They are tired. “Flour vanishes at night,” he says. “I hear children. You came from the woods. Speak straight.”\n\nYou saw Araz’s fire. You saw the children. If you stay silent, they may enter the store again. If you speak, the watch may go after the children too.\n\nSual: you refused the theft. What you know is still a weight.',
    },
    prompt: {
      az: 'Dəyirmançı gözləyir.',
      en: 'The miller waits.',
    },
    choices: [
      {
        id: 'ask-name',
        text: {
          az: 'Yeri deyirəm. Un da, qayda da qalsın. Uşaqları bağlamasınlar deyə yalvarıram.',
          en: 'I name the place. Let the flour and the rule remain. I beg them not to bind the children.',
        },
        next: 'ending',
        weights: { kantian: 2, virtue: 1 },
        insight: {
          school: 'kantian',
          philosopher: 'Kant',
          quote: {
            az: 'Düz danışmaq vəzifədir, hətta ürək əsəndə də.',
            en: 'Telling the truth is a duty, even when the heart shakes.',
          },
          explain: {
            az: 'Sən yenə qaydanı tutdun, amma yalvarış da qoydun. Kant yalvarışı şərt saymazdı — vəzifə vəzifədir. Sən isə insan üzünü qaydanın yanına qoymağa çalışdın. Bu, təmiz Kant deyil, daha çox “qayda + mərhəmət”dir. Fəlsəfə belə qarışıq əl ilə də yaşayır.',
            en: 'You held the rule again, and you also begged. Kant would not make the begging a condition — duty is duty. You tried to set a human face beside the rule. That is not pure Kant. It is “rule plus mercy.” Philosophy also lives in mixed hands.',
          },
        },
        echo: {
          az: 'Dəyirmançı başını tərpədir. “Uşaqlara əl vurmaram,” deyir. Sən isə Arazın odunu xəyalında görürsən.',
          en: 'The miller nods. “I will not touch the children,” he says. In your mind the fire at Araz’s camp still burns.',
        },
      },
      {
        id: 'ask-silent',
        text: {
          az: 'Susuram. Mən şahid olmağa söz verməmişdim.',
          en: 'I stay silent. I never promised to be a witness.',
        },
        next: 'ending',
        weights: { existential: 2, stoic: 1 },
        insight: {
          school: 'existential',
          philosopher: 'Sartre',
          quote: {
            az: 'Susmaq da bir seçimdir.',
            en: 'Silence is also a choice.',
          },
          explain: {
            az: 'Sən “mən bu hekayənin adamı deyiləm” demək istədin. Sartre deyərdi: susmaq da sənin əməlindir, sonra “mən qarışmadım” deyə bilməzsən. Stoik isə deyərdi: sənə aid olmayan hökmü götürmə. İkisi də sənin susmağında var. Yol belə bitir: adını vermədin, amma heç nə etmədin də demə.',
            en: 'You wanted to say “I am not a person in this story.” Sartre would answer: silence is still your act; you cannot later claim you never touched it. A Stoic would say: do not pick up a verdict that is not yours. Both sit inside your silence. The road ends here: you gave no name, and you also cannot say you did nothing.',
          },
        },
        echo: {
          az: 'Dəyirmançı sənə elə baxır ki, sanki artıq cavabı alıb. Sən yoluna davam edirsən. Meşə arxada qalır.',
          en: 'The miller looks at you as if the answer already arrived. You walk on. The woods stay behind.',
        },
      },
      {
        id: 'ask-help',
        text: {
          az: 'Ad vermirəm. Əvəzində deyirəm: unun bir kisəsini mən özüm aparım, uşaqlar oğurlamasın.',
          en: 'I give no name. Instead I say: I will carry one sack myself, so the children do not have to steal.',
        },
        next: 'ending',
        weights: { buddhist: 1, virtue: 2 },
        insight: {
          school: 'virtue',
          philosopher: 'Aristotel',
          quote: {
            az: 'Cömərdlik verməyi də, kimə verməyi də bilir.',
            en: 'Generosity knows how to give, and to whom.',
          },
          explain: {
            az: 'Sən düşməni ifşa etmədin, özündən də verdin. Bu, “qızıl orta”ya yaxındır: qanunu tapdalama, adamı da satma, bir jestlə boşluğu doldur. Əlbəttə, bir kisə qışı bitirməz. Fəzilət bəzən dünyanı düzəltmir. Sadəcə sənin kim olduğunu göstərir.',
            en: 'You did not expose an enemy, and you gave from yourself. That sits near the golden mean: do not trample the law, do not sell a person, fill a gap with one gesture. One sack will not end winter. Virtue does not always repair the world. It shows who you are.',
          },
        },
        echo: {
          az: 'Dəyirmançı uzun baxır, sonra bir kisəni itələyir. “Bu dəfə,” deyir. “İkinci dəfə olmaz.”',
          en: 'The miller looks a long time, then pushes one sack forward. “This once,” he says. “Not twice.”',
        },
      },
    ],
  },
  {
    id: 'guard',
    chapter: { az: 'III · Keşik', en: 'III · The watch' },
    title: { az: 'And və şahid', en: 'Oath and witness' },
    body: {
      az: 'Səni qalaya aparırlar. Yaralı Araz küncdə oturub. Başçı deyir: “Sən düz danışdın. İndi and iç: o, oğru idi və biz haqlıydıq.”\n\nSən çörək oğurluğunu gördün, uşaqların aclığını da eşitdin. And içsən, bu iş bağlanır və səni özlərinə götürəcəklər. Şübhəni desən, Araz bəlkə yüngül cəza alar, sən isə “etibarsız şahid” olarsan.\n\nSual: doğru söz səni onların adamı etdi. İndi həmin sözü möhürləmək istəyirlər.',
      en: 'They take you to the fort. Wounded Araz sits in a corner. The captain says: “You spoke straight. Now swear: he was a thief, and we were right.”\n\nYou saw bread stolen. You also heard of hungry children. If you swear, the case closes and they will take you in. If you speak your doubt, Araz may get a lighter sentence, and you become an “unreliable witness.”\n\nSual: the true word made you theirs. Now they want that word sealed.',
    },
    prompt: {
      az: 'And içmək üçün əlini kitaba qoyurlar.',
      en: 'They put your hand on a book to swear.',
    },
    choices: [
      {
        id: 'guard-swear',
        text: {
          az: 'And içirəm. Oğurluq oğurluqdur. Aclıq onu başqa şey etmir.',
          en: 'I swear. Theft is theft. Hunger does not turn it into something else.',
        },
        next: 'hunt',
        weights: { kantian: 2 },
        insight: {
          school: 'kantian',
          philosopher: 'Kant',
          quote: {
            az: 'Qayda istisna sevmir.',
            en: 'A rule does not love exceptions.',
          },
          explain: {
            az: 'Sən eyni ölçünü hamıya tətbiq etdin. Bu, ədalətin bir üzüdür: kiminsə hekayəsi qanunu əyməsin. Digər üzüdə var: bəzən ölçü o qədər sərt olur ki, insanı görmür. Kant deyərdi ki, istisna açılanda qayda ölür. Sən qaydanı diri saxladın. Ona görə səni ovun növbəti hissəsinə göndərirlər — eyni qaydanı bir də tətbiq etmək üçün.',
            en: 'You applied the same measure to everyone. That is one face of justice: a story should not bend the law. There is another face: sometimes the measure is so stern it cannot see a person. Kant would say that when the exception opens, the rule dies. You kept the rule alive. So they send you to the next part of the hunt — to apply the same rule once more.',
          },
        },
        echo: {
          az: 'And içilir. Başçı deyir: “Yaxşı. Meşədə daha biri var. Eyni iş. Sən bizimləsən.”',
          en: 'The oath is made. The captain says: “Good. There is another in the woods. Same work. You are with us.”',
        },
      },
      {
        id: 'guard-doubt',
        text: {
          az: 'Deyirəm: çörək götürdü, bunu gördüm. Amma “bu adam pisdir, siz əlasınız” deyə and içmərəm.',
          en: 'I say: I saw the bread taken. I will not swear that “this person is wicked and you are righteous.”',
        },
        next: 'hunt',
        weights: { existential: 2, virtue: 1 },
        insight: {
          school: 'existential',
          philosopher: 'Kierkegaard',
          quote: {
            az: 'Həqiqət bəzən andın içində yox, titrəyişindədir.',
            en: 'Sometimes truth is not inside the oath, but in the tremor.',
          },
          explain: {
            az: 'Sən faktı inkar etmədin, mənanı möhürləmədin. Bu, dürüstlüyün başqa növüdür: “gördüyümü deyirəm, dünyanın hökmünü isə öz adıma yazmıram.” Keşikçilər bunu zəiflik saysa da, sən öz sözünün sərhədini çəkdin. Yenə də səni meşəyə aparacaqlar. Çünki şahid lazımdır. Amma artıq sən onların tam adamı deyilsən.',
            en: 'You did not deny the fact, and you did not stamp the meaning. That is another kind of honesty: “I say what I saw; I will not write the world’s verdict in my name.” The watch may call it weakness. You drew a border around your word. They will still take you to the woods, because they need a witness. You are no longer fully theirs.',
          },
        },
        echo: {
          az: 'Başçı əsəbiləşir, amma səni buraxmır. “Gəl,” deyir. “Görək titrəyişin meşədə də qalır.”',
          en: 'The captain is angry, but does not let you go. “Come,” he says. “We will see if that tremor lasts in the woods.”',
        },
      },
    ],
  },
  {
    id: 'hunt',
    chapter: { az: 'IV · İkinci ov', en: 'IV · The second hunt' },
    title: { az: 'Eyni qayda, başqa üz', en: 'The same rule, another face' },
    body: {
      az: 'Meşədə bir qadın kisə ilə qaçır. Bu dəfə çörək yox, dərmandır — kənddə qızdırma var. Keşikçilər deyir: “Oğurluqdur. Dünən nə dedinsə, bu gün də o.”\n\nQadın dayanır, kisəni sinəsinə sıxır. “Uşaq ölür,” deyir.\n\nSual: qayda eynidir. Üz dəyişib. Fəlsəfənin çoxu belə başlayır — eyni cümləni ikinci dəfə demək lazım gələndə.',
      en: 'A woman runs in the woods with a sack. This time it is not bread. It is medicine — fever in the village. The watch says: “Theft. Whatever you said yesterday, say it today.”\n\nShe stops, holding the sack to her chest. “A child is dying,” she says.\n\nSual: the rule is the same. The face changed. A lot of philosophy begins here — when you must speak the same sentence a second time.',
    },
    prompt: {
      az: 'Başçı sənə baxır: “Şahid, danış.”',
      en: 'The captain looks at you: “Witness, speak.”',
    },
    choices: [
      {
        id: 'hunt-same',
        text: {
          az: 'Eyni sözü deyirəm. Qayda dərmana görə əyilməsin.',
          en: 'I say the same words. The rule should not bend for medicine.',
        },
        next: 'ending',
        weights: { kantian: 2, stoic: 1 },
        insight: {
          school: 'kantian',
          philosopher: 'Kant',
          quote: {
            az: 'İstisna bir dəfə açılsa, həmişə açılır.',
            en: 'Once the exception opens, it stays open.',
          },
          explain: {
            az: 'Sən tutarlı oldun. Bu, gücdür. Eyni zamanda sərtlikdir. Kant üçün əxlaq belə işləyir: bu gün dərman, sabah qızıl, o biri gün “mənim uşağım.” Sən qapını bağladın. Uşaq isə hələ xəstədir. Fəlsəfə sənə rahat yuxu vəd etmir. Yalnız bunu deyir: sən nəyi qoruduğunu bilirsən.',
            en: 'You were consistent. That is a strength. It is also hardness. For Kant, morals work like this: today medicine, tomorrow gold, the next day “my child.” You shut the door. The child is still ill. Philosophy does not promise easy sleep. It only says: you know what you protected.',
          },
        },
        echo: {
          az: 'Qadını aparırlar. Kisə keşikçinin əlində yellənir. Sən eyni cümləni iki dəfə demiş oldun.',
          en: 'They take the woman. The sack swings in a watchman’s hand. You have now said the same sentence twice.',
        },
      },
      {
        id: 'hunt-bend',
        text: {
          az: 'Deyirəm: bu dəfə başqa işdir. Dərman çörəkdən ağırdır. Qoy getsin.',
          en: 'I say: this time it is different. Medicine is heavier than bread. Let her go.',
        },
        next: 'ending',
        weights: { utilitarian: 2, buddhist: 1 },
        insight: {
          school: 'utilitarian',
          philosopher: 'Mill',
          quote: {
            az: 'Qayda insana xidmət etməlidir, əksinə yox.',
            en: 'Rules should serve people, not the other way round.',
          },
          explain: {
            az: 'Sən istisna açdın. Nəticəyə baxdın: bir uşağın həyatı anbarın nizamından ağır gəldi. Keşikçilər sənə “dünən başqa, bu gün başqa” deyəcək. Onlar haqlı da ola bilər. Amma sən üzə baxdın. Utilitar düşüncə belə deyir: vəziyyətlər eyni deyilsə, eyni hökm də olmaya bilər. Tutarlılıq sındı. Bəlkə də insanlıq sınmadı.',
            en: 'You opened an exception. You looked at the result: one child’s life weighed more than the order of a store. The watch will say you were one person yesterday and another today. They may even be right. You still looked at a face. The utilitarian view says: if the situations are not the same, the verdict need not be either. Consistency broke. Perhaps humanity did not.',
          },
        },
        echo: {
          az: 'Qadın qaçır. Başçı sənə belə deyir: “Şahidin bitdi.” Sən tək qalırsan, amma kisə getdi.',
          en: 'The woman runs. The captain tells you: “Your witnessing is over.” You are left alone, but the sack is gone.',
        },
      },
      {
        id: 'hunt-self',
        text: {
          az: 'Öz kisəmlə, öz pulumla dərmanı mən alıram. Qadını da buraxın, qaydanı da pozmayın.',
          en: 'I buy the medicine with my own purse. Let her go, and do not break the rule either.',
        },
        next: 'ending',
        weights: { virtue: 2, stoic: 1 },
        insight: {
          school: 'virtue',
          philosopher: 'Aristotel',
          quote: {
            az: 'Fəzilət tapmaca həll etmək yox, özündən verməkdir.',
            en: 'Virtue is not solving a riddle. It is giving from yourself.',
          },
          explain: {
            az: 'Sən “ya qayda, ya uşaq” tələsindən çıxmağa çalışdın. Üçüncü yol: özündən ödə. Bu həmişə mümkün olmur. Oyunda mümkün etdik, çünki xarakter belə bir jest axtarır. Reallıqda pulun, vaxtın, dərmanın olmadığı günlər də var. O vaxt yenə ilk iki yola düşürsən. Fəlsəfə buna da hazırlayır.',
            en: 'You tried to leave the trap of “either the rule or the child.” A third road: pay from yourself. That is not always possible. The game allows it because character looks for that kind of gesture. In life there are days with no money, no time, no medicine. Then you fall back to the first two roads. Philosophy prepares you for that too.',
          },
        },
        echo: {
          az: 'Kisə sənin əlinə keçir, qadının yox. Keşikçilər gileylənir. Uşaq üçün bir şüşə qalır.',
          en: 'The sack is in your hands, not hers. The watch mutters. One bottle remains for a child.',
        },
      },
    ],
  },
  {
    id: 'ridge',
    chapter: { az: 'III · Silsilə', en: 'III · The ridge' },
    title: { az: 'İki səs, bir cüt qulaq', en: 'Two voices, one pair of ears' },
    body: {
      az: 'Yoxuşda külək var. Bir tərəfdə dərə, o biri tərəfdə keçi yolu.\n\nSoldan Arazın səsi gəlir — yarası açılıb, kömək istəyir. Sağdan keşikçinin səsi gəlir — at yıxılıb, ayağı daşın altında qalıb.\n\nSən əvvəl heç bir tərəfi seçmədin. İndi vaxt yoxdur. İkisini də eyni anda götürmək, çox vaxt heç birini götürməmək deməkdir.\n\nSual: “Mənim əlimdə deyil” demək asan idi. İndi iki əl səni çağırır.',
      en: 'Wind on the climb. A ravine on one side, a goat-path on the other.\n\nFrom the left, Araz’s voice — the wound has opened, they want help. From the right, a watchman’s voice — a horse down, a leg under stone.\n\nYou refused both sides earlier. There is no time now. Trying to take both often means taking neither.\n\nSual: “It is not in my hands” was easy to say. Now two hands are calling you.',
    },
    prompt: {
      az: 'Hansı səsə doğru qaçırsan?',
      en: 'Which voice do you run toward?',
    },
    choices: [
      {
        id: 'ridge-araz',
        text: {
          az: 'Arazın yanına enirəm. Keşikçi silahlıdır, o, tək və yaralıdır.',
          en: 'I go down to Araz. The watchman is armed; this person is alone and hurt.',
        },
        next: 'hut',
        weights: { buddhist: 2, utilitarian: 1 },
        insight: {
          school: 'buddhist',
          philosopher: 'Budda',
          quote: {
            az: 'Əziyyətə əvvəl yaxın dur.',
            en: 'Stand close to suffering first.',
          },
          explain: {
            az: 'Sən zəifin yanına getdin. Mərhəmət çox vaxt belə seçir: kim daha müdafiəsizdir. Keşikçi sənə “xəyanət” deyə bilər. Sən isə ağrıya baxdın. Bu da bir ölçüdür — qanunun yox, ehtiyacın ölçüsü. Aşağıda bir daxma var. Yol səni ora aparır.',
            en: 'You went to the weaker one. Compassion often chooses that way: who is less defended. The watchman may call it betrayal. You looked at pain. That is also a measure — not of law, of need. Below there is a hut. The path takes you there.',
          },
        },
        echo: {
          az: 'Arazın qanını təzədən bağlayırsan. Yuxarıda at kişnəyir, sonra susur. Daxmanın tüstüsü görünür.',
          en: 'You bind Araz’s blood again. Above, a horse cries, then goes quiet. Smoke from a hut appears.',
        },
      },
      {
        id: 'ridge-watch',
        text: {
          az: 'Keşikçiyə qalxıram. Atın altındakı ayaq elə indidir. Araz isə artıq bir dəfə kömək alıb.',
          en: 'I climb to the watchman. The leg under the horse is now. Araz has already been helped once.',
        },
        next: 'hut',
        weights: { stoic: 1, kantian: 1, virtue: 1 },
        insight: {
          school: 'stoic',
          philosopher: 'Mark Avreli',
          quote: {
            az: 'Önündə duran işi gör. Qalanını rəvayət etmə.',
            en: 'Do the work in front of you. Do not mythologise the rest.',
          },
          explain: {
            az: 'Sən “kim haqlıdır”u yox, “kim bu dəqiqə əzilir”i seçdin. Stoik baxış belədir: nağıl qurma, əlindəki daşı qaldır. Arazın hekayəsi səni yumşaltmışdı, amma sən birinci jestə ömürlük borc yazmadın. Bu, sərt görünə bilər. Bəzən də aydındır. Daxmada ikiniz də danışılacaqsınız.',
            en: 'You did not choose “who is righteous.” You chose “who is being crushed in this minute.” The Stoic view is that: do not build a legend, lift the stone in front of you. Araz’s story had softened you, but you did not turn the first gesture into a lifelong debt. That can look hard. Sometimes it is simply clear. In the hut, both of you will still be spoken of.',
          },
        },
        echo: {
          az: 'Daşı qaldırırsan. Keşikçi nəfəs alır. Aşağıda bir səs daha zəif gəlir. Tüstü səni daxmaya çağırır.',
          en: 'You lift the stone. The watchman breathes. Below, a voice grows thinner. Smoke calls you to a hut.',
        },
      },
      {
        id: 'ridge-both',
        text: {
          az: 'İkisinin arasında qışqırıb yol göstərirəm, özümü dağa vururam ki, bəlkə yetişəm. Bəlkə heç birinə yetişməyəcəm.',
          en: 'I shout between them and throw myself at the mountain, hoping to reach both. I may reach neither.',
        },
        next: 'hut',
        weights: { existential: 2, virtue: 1 },
        insight: {
          school: 'existential',
          philosopher: 'Camus',
          quote: {
            az: 'Mən üsyan edirəm, ona görə də varam.',
            en: 'I rebel — therefore I exist.',
          },
          explain: {
            az: 'Sən qeyri-mümkünü götürməyə çalışdın. Camus desəydi: dünya sənə rahat seçim vermir, sən də “onda heç nə” demirsən. Bu, uduzmaq ola bilər. Amma uduzmaq belə, sən “mən buradayam” demisən. Daxmadakı qoca bunu “axmaqlıq” da adlandırır, “ürək” də. Fərqini sən qoyacaqsan.',
            en: 'You tried to take the impossible. Camus might say: the world will not hand you a clean option, and you still refuse to say “then nothing.” That may be a loss. Even losing, you said “I am here.” The old person in the hut will call it folly, or heart. You will have to name the difference.',
          },
        },
        echo: {
          az: 'Nəfəsin kəsilir. Bir səs uzaqlaşır, o biri də. Daxmanın qapısı aralıdır, sanki səni gözləyirmiş.',
          en: 'Your breath breaks. One voice fades, then the other. The hut door is ajar, as if it had been waiting.',
        },
      },
    ],
  },
  {
    id: 'hut',
    chapter: { az: 'IV · Daxma', en: 'IV · The hut' },
    title: { az: 'Qoca və çay', en: 'An old person and tea' },
    body: {
      az: 'Daxmada çay qaynayır. Qocanın üzü Sualın səsinə oxşayır — bəlkə də eynidir.\n\n“Sən əvvəl qaçdın,” deyir. “Sonra yenə seçdin. Bəziləri belə deyir: seçməmək də seçimdir. Bəziləri deyir: sənə aid olmayan yükü götürmə. İkisi də bir ağızdan çıxa bilər.”\n\nÇayın buxarı gözünü yaşardır. Bu, son sualdır bu yolda.',
      en: 'Tea is boiling in the hut. The old face resembles Sual’s voice — perhaps it is the same.\n\n“You walked away at first,” they say. “Then you chose again. Some say: not choosing is still a choice. Some say: do not pick up a weight that is not yours. Both sentences can come from one mouth.”\n\nSteam from the tea stings your eyes. This is the last question on this road.',
    },
    prompt: {
      az: 'Qoca fincanı uzadır: “Bunu necə yaşayacaqsan?”',
      en: 'The old person holds out a cup: “How will you live with this?”',
    },
    choices: [
      {
        id: 'hut-own',
        text: {
          az: 'Deyirəm: növbəti dəfə daha tez seçəcəyəm. Qaçmaq mənə rahatlıq vermədi.',
          en: 'I say: next time I will choose sooner. Walking away did not give me peace.',
        },
        next: 'ending',
        weights: { existential: 2, virtue: 1 },
        insight: {
          school: 'existential',
          philosopher: 'Sartre',
          quote: {
            az: 'İnsan öz bəhanələrinin cəmidir — ta ki, onları atana qədər.',
            en: 'A person is the sum of their excuses — until they put them down.',
          },
          explain: {
            az: 'Sən etiraf etdin: “mənim əlimdə deyil” cümləsi səni yüngülləşdirmədi. Azadlıq belə öyrənilir. Növbəti dəfə yenə qorxacaqsan. Amma indi bilirsən ki, qaçışın da üzü var. Yolun sonu belədir: sən özünü bir az daha az bəhanə ilə götürürsən.',
            en: 'You admitted it: the sentence “it is not in my hands” did not make you lighter. That is how freedom is learned. You will be afraid next time too. Now you know that flight also has a face. The road ends here: you carry yourself with fewer excuses.',
          },
        },
        echo: {
          az: 'Çay soyuyur. Qoca başını tərpədir. “Onda get,” deyir. “Yol səni daha yüngül aparmaz. Daha doğru apara bilər.”',
          en: 'The tea cools. The old person nods. “Then go,” they say. “The path will not carry you more lightly. It may carry you more truly.”',
        },
      },
      {
        id: 'hut-limit',
        text: {
          az: 'Deyirəm: yenə sərhəd qoyacağam. Hər ağrı mənim adıma yazılmamalıdır. Yoxsa mən də dağılırəm.',
          en: 'I say: I will still draw a border. Not every pain should be written in my name, or I come apart too.',
        },
        next: 'ending',
        weights: { stoic: 2, buddhist: 1 },
        insight: {
          school: 'stoic',
          philosopher: 'Epiktet',
          quote: {
            az: 'Başqasının ruhuna sahib çıxmağa çalışma.',
            en: 'Do not try to own another person’s soul.',
          },
          explain: {
            az: 'Sən mərhəməti götürdün, amma özünü tanrı etmədin. Stoiklər buna “nəzarət dairəsi” deyirdi: əllərin, sözün, qərarın. Bütün meşənin ağrısı yox. Bəziləri bunu soyuqluq sanır. Sən isə deyirsən: sərhəd olmasa, kömək də olmur, yalnız tükənmə olur. Bu da bir hikmətdir.',
            en: 'You took compassion, and you still refused to become a god. The Stoics called this the circle of control: your hands, your words, your decision. Not the pain of the whole woods. Some hear that as cold. You are saying: without a border there is no help, only exhaustion. That is a wisdom too.',
          },
        },
        echo: {
          az: 'Qoca gülümsəyir, az qala. “Sərhəd də bir növ sədaqətdir,” deyir. “Özünə olan.”',
          en: 'The old person almost smiles. “A border is also a loyalty,” they say. “To yourself.”',
        },
      },
      {
        id: 'hut-both',
        text: {
          az: 'Deyirəm: bəzən qayda, bəzən üz. Mən tək formul olmayacağam. Bunu da daşıyacağam.',
          en: 'I say: sometimes the rule, sometimes the face. I will not be one formula. I will carry that too.',
        },
        next: 'ending',
        weights: { existential: 1, virtue: 1, buddhist: 1 },
        insight: {
          school: 'existential',
          philosopher: 'Isaiah Berlin',
          quote: {
            az: 'Yaxşı şeylər də bir-biri ilə vuruşa bilər.',
            en: 'Good things can still fight each other.',
          },
          explain: {
            az: 'Bu, “çatlamış güzgü”yə yaxın cavabdır. Berlin deyirdi: azadlıq, ədalət, mərhəmət — hamısı dəyərlidir, amma bəzən eyni anda dolmur. Sən bunu uğursuzluq saymırsan. Saymamaq da bir fəlsəfədir: dünyanı tək açarla açmaq istəməmək. Yolun belə bitməsi səni qarışıq buraxır. Qarışıqlıq bəzən dürüstlüyün formasıdır.',
            en: 'This sits near the cracked mirror. Berlin said liberty, justice, mercy are all valuable, and they still do not always fit in one hour. You refuse to call that failure. That refusal is itself a philosophy: not forcing the world onto one key. Ending the road this way leaves you mixed. Mixed is sometimes the shape of honesty.',
          },
        },
        echo: {
          az: 'İki fincan boşalır. Qoca deyir: “Onda güzgünü bütöv istəmə. Onu daşı.”',
          en: 'Two cups empty. The old person says: “Then do not demand a whole mirror. Carry it.”',
        },
      },
    ],
  },
]
