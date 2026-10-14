import type { ProblemMeta, Scene } from './types'

export const problemMetas: ProblemMeta[] = [
  {
    id: 'p-trolley',
    title: { az: 'İdarəsiz vaqon', en: 'The runaway wagon' },
    teaser: {
      az: 'Beş nəfər, bir nəfər, sənin əlində dəyişdirici.',
      en: 'Five people, one person, a switch in your hand.',
    },
  },
  {
    id: 'p-theseus',
    title: { az: 'Teseusun gəmisi', en: 'The ship of Theseus' },
    teaser: {
      az: 'Hər taxtanı dəyişsən, bu eyni gəmidirmi?',
      en: 'If you replace every plank, is it the same ship?',
    },
  },
  {
    id: 'p-cave',
    title: { az: 'Mağara', en: 'The cave' },
    teaser: {
      az: 'Divarda kölgə görürsən. Kölgəni həyat sanırsan.',
      en: 'You see shadows on a wall and call them life.',
    },
  },
  {
    id: 'p-gyges',
    title: { az: 'Görünməz üzük', en: 'The invisible ring' },
    teaser: {
      az: 'Səni heç kim görməsə, yenə düzgün olardın?',
      en: 'If nobody could see you, would you still be decent?',
    },
  },
  {
    id: 'p-machine',
    title: { az: 'Həzz qutusu', en: 'The pleasure box' },
    teaser: {
      az: 'Sonsuz xoşbəxt yuxu, yoxsa gerçək həyat?',
      en: 'An endless happy dream, or a real life?',
    },
  },
  {
    id: 'p-veil',
    title: { az: 'Pərdənin arxası', en: 'Behind the veil' },
    teaser: {
      az: 'Kim olacağını bilmədən cəmiyyət qur.',
      en: 'Build a society without knowing who you will be.',
    },
  },
]

export const problemScenes: Scene[] = [
  {
    id: 'p-trolley',
    chapter: { az: 'Məşhur sual', en: 'A famous question' },
    title: { az: 'İdarəsiz vaqon', en: 'The runaway wagon' },
    body: {
      az: 'Sən dağın yamacında dəyişdiricinin yanında durursan. Aşağıda rels var.\n\nİdarəsiz vaqon gəlir. Düz getsə, beş işçi öləcək — onlar səni görmür. Dəyişdiricini çevirsən, vaqon yan relsə keçəcək. Orada isə bir nəfər durub. O da səni görmür.\n\nƏlin dəyişdiricidədir. Heç nə etməsən, beş nəfər ölür, sən “toxunmadım” deyə bilərsən. Çevirsən, bir nəfər ölür, amma bunu sən seçmisən.\n\nBu hekayənin adı fəlsəfədə “trolley problem” — vaqon problemidir. Məqsəd səni qəddar etmək deyil. Sual budur: rəqəm, yoxsa əlini qana batırmamaq?',
      en: 'You stand on a hillside beside a switch. Below, a track.\n\nA runaway wagon is coming. If it goes straight, five workers die — they cannot see you. If you throw the switch, the wagon takes a side track. One person stands there. They cannot see you either.\n\nYour hand is on the switch. If you do nothing, five die, and you can say you never touched it. If you throw it, one dies, and you chose that.\n\nPhilosophy calls this the trolley problem. It is not here to make you cruel. The question is: the number, or keeping your hands clean?',
    },
    prompt: {
      az: 'Sual: əlini tərpədəcəksən?',
      en: 'Sual: will you move your hand?',
    },
    choices: [
      {
        id: 'trolley-switch',
        text: {
          az: 'Çevirirəm. Beş həyat bir həyatdan çoxdur. Ağrı azalsın.',
          en: 'I throw the switch. Five lives are more than one. Let the pain be smaller.',
        },
        next: 'problems-hub',
        weights: { utilitarian: 2 },
        insight: {
          school: 'utilitarian',
          philosopher: 'Bentham / Mill',
          quote: {
            az: 'Ən çox insan üçün daha az əziyyət.',
            en: 'Less suffering for more people.',
          },
          explain: {
            az: 'Sən nəticəyə baxdın. Bu baxışın adı utilitarizmdir: bir iş o qədər yaxşıdır ki, dünyada xoşbəxtliyi artırır, ağrını azaldır. Vaqon problemində “çevirənlər” adətən belə deyir: mən bir nəfəri sevmirəm, sadəcə beşini itirməyə razı deyiləm.\n\nEtiraz da aydındır: o bir nəfəri sən alət etdin. O, relsin üstündə “qurban olmaq üçün” durmamışdı. Fəlsəfə burada dayanır və soruşur: rəqəm bizi qurtarır, yoxsa bizi sərtləşdirir?',
            en: 'You looked at the outcome. That view is called utilitarianism: an act is better when it raises happiness and lowers pain. People who throw the switch usually say: I do not hate the one person. I simply will not accept losing five.\n\nThe objection is clear: you used that one person as a tool. They did not stand there in order to be a sacrifice. Philosophy stops here and asks: does the number save us, or harden us?',
          },
        },
        echo: {
          az: 'Dəyişdirici ağır gəlir. Yan relsdə bir səs kəsilir. Beş nəfər hələ nəfəs alır.',
          en: 'The switch is heavy. A sound stops on the side track. Five people are still breathing.',
        },
      },
      {
        id: 'trolley-stay',
        text: {
          az: 'Çevirmirəm. Bir insanı öz əlimlə ölümə göndərmərəm. Bu, riyaziyyat deyil.',
          en: 'I do not throw it. I will not send one person to death with my own hand. This is not arithmetic.',
        },
        next: 'problems-hub',
        weights: { kantian: 2 },
        insight: {
          school: 'kantian',
          philosopher: 'Kant',
          quote: {
            az: 'İnsanı vasitə etmə, məqsəd say.',
            en: 'Treat a person as an end, not as a tool.',
          },
          explain: {
            az: 'Sən vəzifəyə baxdın. Kant deyirdi: insan heç vaxt təkcə alət olmamalıdır. Bir nəfəri beş nəfər üçün “sərf etmək” onu əşyaya çevirməkdir. Heç nə etməmək də ölüm gətirir — bunu Kant da bilir. Amma deyir: mənim əlim o ölümü seçməsin.\n\nBu, deontologiya adlanır: nəticədən əvvəl qayda. Vaqon problemində insanlar elə buna görə bölünür. “Düzgün” cavab yoxdur. Sən hansı ağrıya dözə bildiyini gördün.',
            en: 'You looked at duty. Kant said a person must never be only a tool. Spending one life for five turns a someone into a something. Doing nothing also brings death — Kant knows that. He still says: let my hand not choose that death.\n\nThis is called deontology: the rule before the result. That is why the trolley problem splits people. There is no correct answer. You saw which pain you could bear.',
          },
        },
        echo: {
          az: 'Əlin dəyişdiricidən çəkilir. Düz relsdə səs gəlir, sonra kəsilir. Sən toxunmamısan. Yüngül deyilsən.',
          en: 'Your hand leaves the switch. A sound comes on the straight track, then stops. You did not touch it. You are not light.',
        },
      },
      {
        id: 'trolley-body',
        text: {
          az: 'Dəyişdiricini yox, özümü relsə atıram — bəlkə vaqon dayansın. Bəlkə də mən də, onlar da gedək.',
          en: 'I do not use the switch. I throw my own body onto the track — maybe the wagon stops. Maybe none of us remain.',
        },
        next: 'problems-hub',
        weights: { virtue: 2, existential: 1 },
        insight: {
          school: 'virtue',
          philosopher: 'Aristotel',
          quote: {
            az: 'Cəsarət qorxusuzluq deyil. Doğru yerdə durmaqdır.',
            en: 'Courage is not fearlessness. It is standing in the right place.',
          },
          explain: {
            az: 'Sən “birini alət et” və “heç nə etmə” tələsindən çıxmaq istədin. Özünü qoydun. Fəzilət əxlaqı belə suallar verir: cəsarətli insan bu anda necə durar? Bu, həmişə ağıllı çıxış deyil. Bəzən sadəcə xarakter jestidir.\n\nVaqon problemində üçüncü yollar da var: özünü qurban vermək, qışqırmaq, başqa rels axtarmaq. Riyaziyyat bunları sevmir. Həyat isə bəzən elə belə çirkli və gözəl olur.',
            en: 'You tried to leave the trap of “use one person” versus “do nothing.” You put yourself in. Virtue ethics asks: how would a courageous person stand in this minute? That is not always the clever exit. Sometimes it is only a gesture of character.\n\nThe trolley problem also has third roads: sacrifice yourself, shout, look for another track. Arithmetic dislikes those. Life is sometimes that messy, and that fine.',
          },
        },
        echo: {
          az: 'Yamacdan aşağı qaçırsan. Vaqonun səsi böyüyür. Nəticəni oyun sənə göstərmir. Jestini göstərir.',
          en: 'You run down the hill. The wagon grows louder. The game will not show the result. It shows the gesture.',
        },
      },
    ],
  },
  {
    id: 'p-theseus',
    chapter: { az: 'Məşhur sual', en: 'A famous question' },
    title: { az: 'Teseusun gəmisi', en: 'The ship of Theseus' },
    body: {
      az: 'Limanda köhnə bir gəmi durur. Deyirlər, qəhrəman Teseus bununla qayıdıb. Hər il bir taxta çürüyür, sən yenisini qoyursan. Otuz ildən sonra heç bir köhnə taxta qalmır.\n\nSahildə bir dülgər bütün atılan taxtaları yığıb ikinci gəmi düzəldir. İndi iki gəmi var. Biri suda, təzə taxtalarla. Biri quruda, köhnə taxtalarla.\n\nUşaq soruşur: “Qəhrəmanın gəmisi hansıdır?”\n\nBu, eynilik problemidir. Sən də dəyişirsən: hüceyrən, xatirən, adın. Hansı sən qalırsan?',
      en: 'An old ship sits in the harbour. They say the hero Theseus came home in it. Each year a plank rots; you put in a new one. After thirty years, no old plank remains.\n\nOn the shore a carpenter has kept every discarded plank and built a second ship. Now there are two. One in the water, new wood. One on land, old wood.\n\nA child asks: “Which is the hero’s ship?”\n\nThis is the problem of identity. You change too: cells, memories, name. Which you remains?',
    },
    prompt: {
      az: 'Uşağa nə deyirsən?',
      en: 'What do you tell the child?',
    },
    choices: [
      {
        id: 'theseus-new',
        text: {
          az: 'Sudakı gəmi. İşləyən, üzən, adı qalan odur. Taxta dəyişəndə hekayə dəyişmir.',
          en: 'The one in the water. The one that still sails and keeps the name. Change the planks, the story stays.',
        },
        next: 'problems-hub',
        weights: { stoic: 1, existential: 1 },
        insight: {
          school: 'stoic',
          philosopher: 'Plutarch / Hobbs',
          quote: {
            az: 'Ad və iş qalırsa, şey də qalır.',
            en: 'If the name and the work remain, the thing remains.',
          },
          explain: {
            az: 'Sən davamlılığı seçdin: gəmi o dur ki, hələ üzür, adamlar hələ “Teseusun gəmisi” deyir. Fəlsəfədə buna bəzən “funksiya və hekayə” deyirlər. Sən də beləsən: saçın, dərin dəyişir, amma səni tanıyanlar səni sənin sayır.\n\nÇətin yer: dülgərin gəmisi də eyni taxtalardır. Bəzən bədən dəyişir, xatirə qalır. Bəzən xatirə dəyişir, bədən qalır. Ona görə bu sual min ildir bağlanmır.',
            en: 'You chose continuity: the ship is the one that still sails, the one people still call Theseus’s. Philosophy sometimes names this “function and story.” You are like that too: hair and skin change, and the people who know you still call you you.\n\nThe hard part: the carpenter’s ship is the old wood. Sometimes the body changes and memory stays. Sometimes memory changes and the body stays. That is why this question has not closed in a thousand years.',
          },
        },
        echo: {
          az: 'Uşaq sudakı gəmiyə əl yelləyir. Qurudakı taxtalar susur.',
          en: 'The child waves at the ship in the water. The planks on land are quiet.',
        },
      },
      {
        id: 'theseus-old',
        text: {
          az: 'Qurudakı gəmi. Əsl taxtalar oradadır. Təzəsi nüsxədir.',
          en: 'The one on land. The original planks are there. The new one is a copy.',
        },
        next: 'problems-hub',
        weights: { kantian: 1, virtue: 1 },
        insight: {
          school: 'virtue',
          philosopher: 'Plutarch',
          quote: {
            az: 'Maddə dəyişəndə şey də dəyişir.',
            en: 'When the matter changes, the thing changes.',
          },
          explain: {
            az: 'Sən materialı seçdin: bu taxta, bu mismar, bu iz. Nüsxə necə oxşarsa oxşasın, o, o deyil. İnsan üçün bu, belə səslənir: mənim bədənim, mənim izlərim mənəm.\n\nAmma otuz ilin taxtaları da bir-bir dəyişib. “Əsl”i harada kəsdin? Fəlsəfə səndən dəqiq xətt istəyir, həyat isə xətti tez-tez itirir. Ona görə uşağın sualı sadə görünür, içi dərindir.',
            en: 'You chose the material: this plank, this nail, this mark. A copy can resemble all it likes. It is not the thing. For a person that sounds like: my body, my marks, that is me.\n\nYet the planks of thirty years also changed one by one. Where did you cut the line of the “original”? Philosophy wants a clean line. Life mislays it. That is why the child’s question looks simple and is not.',
          },
        },
        echo: {
          az: 'Uşaq qurudakı gəmiyə çıxır. Ayağı köhnə taxtada cırıldayır. “Bu, daha çox qoxuyur,” deyir.',
          en: 'The child climbs the land-ship. A foot creaks on old wood. “This one smells more,” they say.',
        },
      },
      {
        id: 'theseus-both',
        text: {
          az: 'Deyirəm: ikisi dədir, heç biri deyil. “Eyni” sözü burada dar gəlir.',
          en: 'I say: both, and neither. The word “same” is too small here.',
        },
        next: 'problems-hub',
        weights: { buddhist: 2, existential: 1 },
        insight: {
          school: 'buddhist',
          philosopher: 'Budda / Heraklit',
          quote: {
            az: 'Eyni çaya iki dəfə girə bilməzsən.',
            en: 'You cannot step into the same river twice.',
          },
          explain: {
            az: 'Sən eyniliyin özünü şübhəyə götürdün. Heraklit deyirdi: hər şey axır. Buddist düşüncə deyir: “mən” deyilən şey də hissələrin toplusudur, sabit taxt deyil.\n\nBu, qorxulu ola bilər. Kiməsə rahatlıq da verir: dəyişmək yox olmaq deyil. Gəmi sualı əslində sən sualıdır. Ona görə məşhurdur.',
            en: 'You doubted identity itself. Heraclitus said everything flows. A Buddhist view says the thing we call “I” is also a bundle of parts, not a fixed plank.\n\nThat can be frightening. For some it is also a relief: to change is not to vanish. The ship question is really a you-question. That is why it is famous.',
          },
        },
        echo: {
          az: 'Uşaq bir az küsdü, sonra gülür. “Onda mən də dünənki uşaq deyiləm,” deyir.',
          en: 'The child sulks a little, then laughs. “Then I am not yesterday’s child either,” they say.',
        },
      },
    ],
  },
  {
    id: 'p-cave',
    chapter: { az: 'Məşhur sual', en: 'A famous question' },
    title: { az: 'Mağara', en: 'The cave' },
    body: {
      az: 'Sən zəncirli oturmusan. Üzün divara tərəfdir. Arxanda od yanır. Odun önündən əşyalar keçir, divarda kölgə düşür. Sən ömrün boyu yalnız o kölgələri görmüsən. Adları da kölgələrə qoymusan: “it”, “çörək”, “ana”.\n\nBir gün zəncir qırılır. Arxaya dönürsən. Od gözünü yandırır. Çıxışda günəş daha da yandırır. Bayırda əsl it var, əsl çörək var.\n\nMağarada qalanlar sənə inanmayacaq. Səni dəli sayacaqlar.\n\nBu, Platonun mağara hekayəsidir. Sual: həqiqət ağrıdırsa, qayıdıb demək lazımdır?',
      en: 'You sit in chains. Your face is to a wall. Behind you, a fire. Things pass in front of the fire, and shadows fall on the wall. All your life you have seen only those shadows. You have even named them: “dog”, “bread”, “mother”.\n\nOne day the chain breaks. You turn. The fire hurts your eyes. The sun at the exit hurts them more. Outside there is a real dog, real bread.\n\nThe ones still in the cave will not believe you. They will call you mad.\n\nThis is Plato’s cave. The question: if truth hurts, must you go back and speak?',
    },
    prompt: {
      az: 'Günəşin altında durursan. Nə edirsən?',
      en: 'You are standing in the sun. What do you do?',
    },
    choices: [
      {
        id: 'cave-return',
        text: {
          az: 'Qayıdıram. Gözləri ağrısa belə, kölgənin kölgə olduğunu deyirəm.',
          en: 'I go back. Even if it hurts their eyes, I say the shadow is a shadow.',
        },
        next: 'problems-hub',
        weights: { virtue: 2, kantian: 1 },
        insight: {
          school: 'virtue',
          philosopher: 'Platon',
          quote: {
            az: 'Görən, görməyənə borcludur.',
            en: 'The one who sees owes the ones who do not.',
          },
          explain: {
            az: 'Platon deyirdi: həqiqəti görən adam mağaraya qayıtmalıdır, çünki bilik şəxsi zinət deyil. Bu, ağır vəzifədir. Mağaradakılar sənə düşmən ola bilər — gözləri odun işığına öyrəşməyib.\n\nBu hekayə təkcə qədim Yunanıstan deyil. Xəbər, adət, qorxu da kölgə ola bilər. Qayıtmaq cəsarətdir. Məcbur etmək isə başqa söhbətdir. Platon bəzən ikisini qarışdırır. Sən bu dəfə qayıtmağı seçdin.',
            en: 'Plato said the one who sees the truth must return to the cave, because knowledge is not private jewellery. That is a heavy duty. The people inside may hate you — their eyes are used to firelight, not the sun.\n\nThe story is not only ancient Greece. News, custom, and fear can be shadows too. Returning is courage. Forcing people is another conversation. Plato sometimes mixes the two. This time you chose to return.',
          },
        },
        echo: {
          az: 'Zəncir səsləri yenə eşidilir. Sən aşağı enirsən. Kölgələr səni qarşılayır, isti deyil.',
          en: 'You hear chains again. You go down. The shadows meet you, and they are not warm.',
        },
      },
      {
        id: 'cave-stay-sun',
        text: {
          az: 'Qalmıram qayıtmağa. Mən azad oldum. Onlar da zənciri özləri qırsın.',
          en: 'I do not go back. I am free. Let them break their own chains.',
        },
        next: 'problems-hub',
        weights: { existential: 2, stoic: 1 },
        insight: {
          school: 'existential',
          philosopher: 'Sartre',
          quote: {
            az: 'Azadlıq başqasının əvəzinə yaşamaq deyil.',
            en: 'Freedom is not living in another person’s place.',
          },
          explain: {
            az: 'Sən öz çıxışını seçdin. Ekzistensial baxış deyir: sən başqasını zorla ayılda bilməzsən, çünki ayılmaq da onun azadlığıdır. Stoik də deyərdi: başqasının ruhu sənin ixtiyarında deyil.\n\nEtiraz: bəlkə zənciri sən də bir vaxt kimsə qırıb. Bəlkə borc var. Platon borcu böyük sayırdı. Sən borcu götürmədin. Bu da bir cavabdır — rahat yox, açıq cavab.',
            en: 'You chose your own exit. An existential view says you cannot force another person awake, because waking is their freedom too. A Stoic would add: another person’s soul is not yours to command.\n\nThe objection: perhaps someone once broke your chain as well. Perhaps there is a debt. Plato thought the debt was large. You did not pick it up. That is also an answer — not a soft one, an open one.',
          },
        },
        echo: {
          az: 'Günəş isti deyil, təmizdir. Mağaradan səs gəlir. Sən dönmürsən.',
          en: 'The sun is not kind. It is clear. A sound comes from the cave. You do not turn.',
        },
      },
      {
        id: 'cave-slow',
        text: {
          az: 'Qayıdıram, amma odun yanına. Günəşi zorla göstərmirəm. Əvvəl çırağı, sonra qapını.',
          en: 'I go back, but only as far as the fire. I do not force the sun on them. First a lamp, then the door.',
        },
        next: 'problems-hub',
        weights: { buddhist: 1, virtue: 2 },
        insight: {
          school: 'virtue',
          philosopher: 'Aristotel',
          quote: {
            az: 'Tərbiyə zor yox, ölçü istəyir.',
            en: 'Education wants measure, not force.',
          },
          explain: {
            az: 'Sən mağara hekayəsini yumşaltdın. Platonun özü də deyirdi ki, gözü bir anda günəşə çevirmək kor edir. Fəzilət burada müəllim jestidir: addım-addım.\n\nBu, həm də mərhəmətdir. Həqiqət var. Amma həqiqəti döyərək vermək onu həqiqət kimi yaşatmaya bilər. Kiçik problem belə böyüyür: nəyi bilmək, necə demək.',
            en: 'You softened the cave story. Plato himself said that turning the eyes straight at the sun makes them blind. Virtue here is a teacher’s gesture: step by step.\n\nIt is also compassion. The truth exists. Beating people with it may not let them live it as truth. A small problem grows here: what to know, and how to say it.',
          },
        },
        echo: {
          az: 'Mağarada çıraq yandırısan. Kimsə zəncirini bir az oynadır. Bu da bir çıxışın başlanğıcıdır.',
          en: 'You light a lamp in the cave. Someone shifts a chain a little. That too is the start of an exit.',
        },
      },
    ],
  },
  {
    id: 'p-gyges',
    chapter: { az: 'Məşhur sual', en: 'A famous question' },
    title: { az: 'Görünməz üzük', en: 'The invisible ring' },
    body: {
      az: 'Çoban Giges yerdə bir üzük tapır. Barmağına keçirir, içəri çevirəndə görünməz olur. Heç kim onu görmür, heç kim cəza verə bilməz.\n\nSarayda qızıl var. Düşmənin adı var. Sevdiyi var, o isə başqasınındır. Qanun yoxdur, çünki şahid yoxdur.\n\nPlaton bu hekayəni ona görə danışırdı: insan düzgündürmü, yoxsa sadəcə tutulmaqdan qorxur?\n\nÜzük indi sənin barmağındadır.',
      en: 'A shepherd, Gyges, finds a ring in the ground. He puts it on. Turn it inward, and he vanishes. Nobody can see him. Nobody can punish him.\n\nThere is gold in the palace. There is an enemy’s name. There is someone he loves, who belongs to another. There is no law, because there is no witness.\n\nPlato told this story for a reason: is a person decent, or only afraid of being caught?\n\nThe ring is on your finger now.',
    },
    prompt: {
      az: 'Üzüyü necə istifadə edirsən?',
      en: 'How do you use the ring?',
    },
    choices: [
      {
        id: 'gyges-gold',
        text: {
          az: 'Götürürəm ki, götürüm. Görünməyəndə əxlaq da görünmür.',
          en: 'I take what I can take. When I cannot be seen, morals cannot be seen either.',
        },
        next: 'problems-hub',
        weights: { existential: 1 },
        insight: {
          school: 'existential',
          philosopher: 'Platon (Glaukon)',
          quote: {
            az: 'Adamlar ədalətli görünmək istəyir, ədalətli olmaq yox.',
            en: 'People want to seem just, not to be just.',
          },
          explain: {
            az: 'Sən Glaukonun tərəfini tutdun — Platonun qardaşı belə deyirdi: əxlaq çox vaxt qorxudur. Üzük qorxunu götürəndə insan “əslini” göstərir.\n\nPlaton bununla razılaşmırdı. Deyirdi: ədalət ruhun öz sağlamlığıdır, cəza üçün yox. Amma sual qalır və ona görə məşhurdur. Sən üzüyü mənfəətə çevirdin. Oyun səni qınamır. Yalnız bunu göstərir: şahid olmayanda sən kim qalırsan.',
            en: 'You took Glaucon’s side — Plato’s brother said morals are often fear. When the ring lifts the fear, a person shows what they “really” are.\n\nPlato disagreed. He said justice is the health of the soul, not a trick to avoid punishment. The question remains, and that is why it is famous. You turned the ring into gain. The game does not scold you. It only shows: when there is no witness, who remains?',
          },
        },
        echo: {
          az: 'Qızıl cibindədir. Küçədə kimsə səni görmür. Sən də özünü bir az görmürsən.',
          en: 'Gold is in your pocket. In the street nobody sees you. You see yourself a little less too.',
        },
      },
      {
        id: 'gyges-help',
        text: {
          az: 'Görünməzliyi xəstəyə dərman, zülmə şahid olmaq üçün istifadə edirəm. Özümə qızıl yox.',
          en: 'I use invisibility to bring medicine, to witness cruelty. No gold for me.',
        },
        next: 'problems-hub',
        weights: { virtue: 2, buddhist: 1 },
        insight: {
          school: 'virtue',
          philosopher: 'Platon',
          quote: {
            az: 'Ədalət gizli qalsa belə, ədalətdir.',
            en: 'Justice is still justice when it stays hidden.',
          },
          explain: {
            az: 'Sən Platonun cavabına yaxın durdun: düzgün iş ona görə düzgündür ki, səni yaxşı edir, tərifə görə yox. Görünməz yaxşılıq, görünən yaxşılıqdan bəzən daha təmizdir, çünki alqış yoxdur.\n\nTəhlükə: “mən gizli xeyirxaham” də bir növ təkəbbür ola bilər. Yenə də jest aydındır. Üzük səni tanrı etmir. Sənin xarakterini böyüdür.',
            en: 'You stood near Plato’s answer: a right act is right because it makes you better, not because it wins praise. Hidden good is sometimes cleaner than visible good, because there is no applause.\n\nThe danger: “I am a secret saint” can become a kind of pride. The gesture is still clear. The ring does not make you a god. It enlarges your character.',
          },
        },
        echo: {
          az: 'Dərman qapının ağzında qalır, sən yox. Üzük barmağında soyuyur.',
          en: 'Medicine is left at a door. You are not. The ring cools on your finger.',
        },
      },
      {
        id: 'gyges-off',
        text: {
          az: 'Üzüyü çıxarıb quyuya atıram. Belə bir güc mənə aid olmamalıdır.',
          en: 'I take the ring off and throw it in a well. That kind of power should not be mine.',
        },
        next: 'problems-hub',
        weights: { stoic: 2, kantian: 1 },
        insight: {
          school: 'stoic',
          philosopher: 'Epiktet',
          quote: {
            az: 'Sənə aid olmayan gücü götürmə.',
            en: 'Do not pick up a power that is not yours.',
          },
          explain: {
            az: 'Sən imtahanı götürmədin, imtahanı atdın. Stoik deyərdi: belə bir alət sənin nəzarət dairəni pozur — sən tanrı olursan, sonra insan qalmaq çətinləşir. Kant desəydi: qayda “görünəndə düzgün ol” deyil, “həmişə düzgün ol”dur. Üzük o qaydanı həmişə yoxlayır.\n\nAtmaq qorxaqlıq da sayıla bilər. Sən onu sərhəd saydın. Fəlsəfədə sərhəd də cavabdır.',
            en: 'You did not take the test. You threw the test away. A Stoic would say: that tool breaks your circle of control — you become a god, then it is hard to remain a person. Kant would say the rule is not “be decent when seen.” It is “be decent.” The ring tests that without end.\n\nThrowing it away can look like fear. You called it a border. In philosophy a border is also an answer.',
          },
        },
        echo: {
          az: 'Quyudan səs gəlir, sonra sükut. Barmağın yüngüldür. Dünya yenə səni görür.',
          en: 'A sound from the well, then quiet. Your finger is light. The world can see you again.',
        },
      },
    ],
  },
  {
    id: 'p-machine',
    chapter: { az: 'Məşhur sual', en: 'A famous question' },
    title: { az: 'Həzz qutusu', en: 'The pleasure box' },
    body: {
      az: 'Alim sənə bir qutu göstərir. Deyir: içinə girsən, beyninə nağıl yazacağıq. Ömür boyu sevdiyin insanı, uğuru, dənizi hiss edəcəksən. Ağrı olmayacaq. Yuxu olmadığını da unudacaqsan.\n\nQutunun xaricində isə həyatın qalır: yorğunluq, xəstəlik, səhv, təsadüfi gözəllik, başqalarının səni həqiqətən görməsi.\n\nBu, Robert Nozick-in “experience machine” — təcrübə maşınıdır. Sual sadədir: xoşbəxt hiss etmək istəyirsən, yoxsa həqiqətən yaşamaq?',
      en: 'A scientist shows you a box. They say: if you climb in, we will write a story into your brain. For the rest of your life you will feel the person you love, success, the sea. There will be no pain. You will also forget it is a dream.\n\nOutside the box your life remains: tiredness, illness, error, accidental beauty, other people actually seeing you.\n\nThis is Robert Nozick’s experience machine. The question is simple: do you want to feel happy, or to live?',
    },
    prompt: {
      az: 'Qutunun qapağı açıqdır.',
      en: 'The lid of the box is open.',
    },
    choices: [
      {
        id: 'machine-in',
        text: {
          az: 'Girirəm. Ağrıdan nə çıxır? Hiss eynidirsə, gerçək də eynidir.',
          en: 'I climb in. What is pain for? If the feeling is the same, the real is the same.',
        },
        next: 'problems-hub',
        weights: { utilitarian: 2 },
        insight: {
          school: 'utilitarian',
          philosopher: 'Bentham / Nozick',
          quote: {
            az: 'Yaxşı olan, xoş gələn ola bilər.',
            en: 'What is good might simply be what feels good.',
          },
          explain: {
            az: 'Sən hissə baxdın. Köhnə utilitar fikir deyirdi: xoşbəxtlik budur, əziyyətin əksi. Qutu əziyyəti sıfırlayır. Onda niyə yox?\n\nNozick bu maşını məhz ona görə uydurdu ki, çox adam “yox” desin. Deyirdi: biz təkcə hiss istəmirik. Biz iş görmək, kim olmaq, gerçəyə bağlı qalmaq istəyirik. Sən “bəli” dedin. Bu, nadir cavabdır və ciddi cavabdır: bəlkə də həyatın mənası həqiqət yox, əziyyətsizlikdir. Oyun bunu rədd etmir. Yalnız adını qoyur.',
            en: 'You looked at feeling. An older utilitarian idea said: happiness is this, the opposite of pain. The box sets pain to zero. Then why not?\n\nNozick invented the machine so that many people would say no. He thought we do not only want a feeling. We want to do things, to be someone, to stay tied to the real. You said yes. That is a rare answer and a serious one: maybe the meaning of life is not truth, but the absence of pain. The game does not refuse that. It only names it.',
          },
        },
        echo: {
          az: 'Qapaq bağlanır. Dəniz səsi gəlir. O dəniz yoxdur. Sən gülümsəyirsən.',
          en: 'The lid closes. You hear the sea. That sea is not there. You smile.',
        },
      },
      {
        id: 'machine-out',
        text: {
          az: 'Qalmıram. Yalan xoşbəxtlik istəmirəm. Səhvim də mənimdir.',
          en: 'I stay out. I do not want a false happiness. My errors are mine too.',
        },
        next: 'problems-hub',
        weights: { existential: 2, virtue: 1 },
        insight: {
          school: 'existential',
          philosopher: 'Nozick / Camus',
          quote: {
            az: 'Mən yuxunu yox, izimi istəyirəm.',
            en: 'I want my trace, not a dream.',
          },
          explain: {
            az: 'Sən Nozick-in gözlədiyi yerə düşdün: insanlar çox vaxt qutunu rədd edir. Çünki həyat yalnız “içimdə nə hiss olunur” deyil. Əlaqədir, riskdir, səhvin düzəlişidir.\n\nCamus desəydi: absurd dünyada belə, daşı özün qaldır. Qutu daşı yox edir. Sən daşı saxladın. Bu, stoik sakitlikdən çox, “mən burada olum” deməkdir.',
            en: 'You landed where Nozick expected: people often refuse the box. Because a life is not only “what it feels like inside.” It is contact, risk, the repair of error.\n\nCamus might say: even in an absurd world, lift your own stone. The box deletes the stone. You kept it. That is less Stoic calm than a sentence: let me be here.',
          },
        },
        echo: {
          az: 'Qapaq açıq qalır. Küçədə kimsə səni çağırır. Səs qutudan gəlmir.',
          en: 'The lid stays open. Someone calls you in the street. The voice is not from the box.',
        },
      },
      {
        id: 'machine-sometimes',
        text: {
          az: 'Qısa girirəm — ağrı dözülməz olanda. Ömrümü orada keçirmirəm.',
          en: 'I climb in briefly — when the pain is unbearable. I will not spend my life there.',
        },
        next: 'problems-hub',
        weights: { buddhist: 1, virtue: 1, stoic: 1 },
        insight: {
          school: 'buddhist',
          philosopher: 'Aristotel',
          quote: {
            az: 'Ölçü ifratın düşmənidir.',
            en: 'Measure is the enemy of excess.',
          },
          explain: {
            az: 'Sən qızıl orta axtardın: qutu dərman olsun, vətən olmasın. Bu, fəlsəfi cəhətdən “təmiz” cavab deyil, çünki Nozick tam ömür təklif edirdi. Amma həyat belədir: yuxu dərmanı var, yuxu həyatı da var.\n\nSual qalır: bir dəfə girəndən sonra çıxmaq asandır? Maşınlar asılılıq da yaradır. Ona görə “qısa” demək də bir cəsarət, də bir riskdir.',
            en: 'You looked for a mean: let the box be medicine, not a country. Philosophically that is not a “pure” answer, because Nozick offered a whole life. Life is still like this: there is a sleep that heals, and a sleep that replaces.\n\nThe question remains: after you climb in once, is leaving easy? Machines also create dependence. So “only a while” is both courage and a risk.',
          },
        },
        echo: {
          az: 'Qapağı özün bağlayırsan, özün də açacaqmışın kimi. Barmaqların titrəyir.',
          en: 'You close the lid yourself, as if you will also be the one to open it. Your fingers shake.',
        },
      },
    ],
  },
  {
    id: 'p-veil',
    chapter: { az: 'Məşhur sual', en: 'A famous question' },
    title: { az: 'Pərdənin arxası', en: 'Behind the veil' },
    body: {
      az: 'Sən hələ doğulmamısan. Kim olacağını bilmirsən: kasıb yoxsa varlı, qadın yoxsa kişi, sağlam yoxsa xəstə, bu dildən yoxsa başqa dildən.\n\nQarşında boş bir cəmiyyət masası var. Qaydaları sən yazacaqsan. Yazıb qurtarandan sonra pərdə qalxacaq və sən o qaydaların içinə düşəcəksən — bəlkə ən altda, bəlkə ən üstə.\n\nBu, Con Rolsun “veil of ignorance” — cəhalət pərdəsidir. Ədaləti belə ölçürdü: öz yerini bilmədən razı qaldığın qayda ədalətlidir.',
      en: 'You have not been born yet. You do not know who you will be: poor or rich, woman or man, healthy or ill, of this language or another.\n\nIn front of you, an empty table for a society. You will write the rules. When you finish, the veil lifts and you fall into those rules — perhaps at the bottom, perhaps at the top.\n\nThis is John Rawls’s veil of ignorance. He measured justice like this: a rule is fair if you could accept it without knowing your place.',
    },
    prompt: {
      az: 'İlk qaydanı yaz.',
      en: 'Write the first rule.',
    },
    choices: [
      {
        id: 'veil-equal',
        text: {
          az: 'Yazıram: heç kim çox kasıb olmasın, hətta bu, varlıların bir az az olması demək olsa da.',
          en: 'I write: nobody should be very poor, even if that means the rich have a little less.',
        },
        next: 'problems-hub',
        weights: { utilitarian: 1, buddhist: 1, virtue: 1 },
        insight: {
          school: 'buddhist',
          philosopher: 'John Rawls',
          quote: {
            az: 'Fərq o vaxt ədalətlidir ki, ən zəifə də yardım etsin.',
            en: 'Inequality is only fair when it also helps the least well-off.',
          },
          explain: {
            az: 'Sən Rolsun ürəyinə yaxın yazdın. O deyirdi: özünü ən pis yerdə təsəvvür et. O yerdə yaşamağa razısan? Rols bərabərliyi tam eynilik saymırdı. Deyirdi, fərq ola bilər, amma kasıb da nəfəs alsın.\n\nBu, mərhəmət kimidir, amma hiss yox, qaydadır. Pərdə ona görə lazımdır ki, “mən varlı olacağam” deyə özünə tərəf çəkməyəsən.',
            en: 'You wrote near Rawls’s heart. He said: imagine yourself in the worst seat. Could you live there? He did not think justice meant everyone identical. He thought difference is allowed, if the poor can still breathe.\n\nThat resembles compassion, but it is a rule, not a mood. The veil exists so you cannot pull the blanket toward yourself by assuming “I will be rich.”',
          },
        },
        echo: {
          az: 'Pərdə hələ enməyib. Sən artıq ən altdakı yeri düşünmüsən. Bu da bir növ cəsarətdir.',
          en: 'The veil has not lifted. You have already imagined the lowest seat. That too is a kind of courage.',
        },
      },
      {
        id: 'veil-free',
        text: {
          az: 'Yazıram: azadlıq birinci olsun. Kim necə yaşayırsa yaşasın, mən qarışmayım — hətta bərabərsizlik olsa da.',
          en: 'I write: freedom first. Let people live as they live. I will not interfere — even if that means inequality.',
        },
        next: 'problems-hub',
        weights: { existential: 2, kantian: 1 },
        insight: {
          school: 'existential',
          philosopher: 'Berlin / Nozick',
          quote: {
            az: 'Məni rahat burax — bu da bir ədalət ola bilər.',
            en: 'Leave me alone — that can also be a kind of justice.',
          },
          explain: {
            az: 'Sən başqa məktəbə getdin. Berlin “mənfi azadlıq” deyirdi: qapımda durma. Nozick də Rolsə etiraz edirdi: mənim əməyimi başqasına vermək, məni alət etməkdir.\n\nRols deyərdi: pərdənin arxasında sən xəstə də ola bilərsən, onda “qarışma” səni öldürər. Sən riski götürdün. Ədalət haqqında mübahisə elə budur — iki yaxşı söz, bir masa.',
            en: 'You went to another school. Berlin spoke of “negative liberty”: do not stand in my doorway. Nozick also pushed against Rawls: taking my labour for someone else uses me as a tool.\n\nRawls would say: behind the veil you might also be ill, and then “do not interfere” can kill you. You took that risk. The fight about justice is exactly this — two good words, one table.',
          },
        },
        echo: {
          az: 'Masada bir cümlə qalır: qarışma. Pərdə qalxanda bu cümlə kimi səslənəcək, sən hələ bilmirsən.',
          en: 'One sentence stays on the table: do not interfere. When the veil lifts, you do not yet know how that sentence will sound.',
        },
      },
      {
        id: 'veil-duty',
        text: {
          az: 'Yazıram: eyni qayda hamıya. İstisna yox. Mən kimsəyə görə qanunu əymərəm, özüm üçün də.',
          en: 'I write: the same rule for everyone. No exceptions. I will not bend the law for anyone, including myself.',
        },
        next: 'problems-hub',
        weights: { kantian: 2 },
        insight: {
          school: 'kantian',
          philosopher: 'Kant / Rawls',
          quote: {
            az: 'Ümumi qanun ola bilməyən qaydanı yazma.',
            en: 'Do not write a rule you could not will as a general law.',
          },
          explain: {
            az: 'Sən Kantın dilini Rolsun masasına gətirdin: istisna yox. Bu, təmiz görünür. Bəzən də sərt olur, çünki həyat istisna ilə doludur — uşaq, xəstə, fəlakət.\n\nRols bir az yumşaq idi: ən zəifə yardım üçün fərqə icazə. Sən fərqi bağladın. Pərdənin arxasında bu, cəsarətli bərabərlikdir. Pərdə qalxanda isə bəzən ətəksiz qayda olur. İkisini də yadda saxla.',
            en: 'You brought Kant’s language to Rawls’s table: no exceptions. That looks clean. It is also sometimes stern, because life is full of exceptions — a child, an illness, a disaster.\n\nRawls was a little softer: allow difference if it helps the least well-off. You closed that difference. Behind the veil this is brave equality. When the veil lifts it is sometimes a rule with no sleeves. Keep both in mind.',
          },
        },
        echo: {
          az: 'Qayda kağıza düşür, düz, kəskin. Pərdə hələ enir. Əlin titrəmir.',
          en: 'The rule hits the page, straight and sharp. The veil is still lowering. Your hand does not shake.',
        },
      },
    ],
  },
]
