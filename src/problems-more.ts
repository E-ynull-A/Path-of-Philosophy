import type { ProblemMeta, Scene } from './types'

export const moreProblemMetas: ProblemMeta[] = [
  {
    id: 'p-pond',
    title: { az: 'Gölməçədəki uşaq', en: 'The child in the pond' },
    teaser: {
      az: 'Təzə ayaqqabın, yoxsa bir uşağın həyatı? Bəs uzaqdakı uşaq?',
      en: 'Your new shoes, or a child’s life? And the child far away?',
    },
  },
  {
    id: 'p-promise',
    title: { az: 'Son vəd', en: 'The deathbed promise' },
    teaser: {
      az: 'Heç kimin bilmədiyi sözü tutmalısanmı?',
      en: 'Must you keep a promise nobody knows you made?',
    },
  },
  {
    id: 'p-sisyphus',
    title: { az: 'Sizifin daşı', en: 'The stone of Sisyphus' },
    teaser: {
      az: 'Daş hər dəfə geri yuvarlanır. Sabah yenə qaldırırsanmı?',
      en: 'The stone always rolls back down. Will you push it again tomorrow?',
    },
  },
]

export const moreProblemScenes: Scene[] = [
  {
    id: 'p-pond',
    chapter: { az: 'Məşhur sual', en: 'A famous question' },
    title: { az: 'Gölməçədəki uşaq', en: 'The child in the pond' },
    body: {
      az: 'Səhər işə gedirsən. Əynində təzə, bahalı ayaqqabı və paltar var. Parkın dayaz gölməçəsində balaca bir uşaq boğulur. Ətrafda heç kim yoxdur.\n\nSuya girsən, uşaq sağ qalacaq. Ayaqqabın, paltarın xarab olacaq, işə də gecikəcəksən. Əlbəttə, girərsən — bunu demək asandır.\n\nİndi ikinci hissə. Dünyanın o biri ucunda da hər gün uşaqlar ölür — aclıqdan, asan sağalan xəstəliklərdən. O ayaqqabının pulu ilə onlardan birini xilas etmək mümkündür. Sadəcə onlar gözünün qabağında deyil.\n\nFərq nədir? Bu sualı avstraliyalı filosof Peter Singer verib. Sual sadədir, amma rahat yaşamağa qoymur.',
      en: 'You are walking to work in new, expensive shoes and clothes. In the shallow pond in the park, a small child is drowning. Nobody else is around.\n\nIf you wade in, the child lives. Your shoes and clothes will be ruined, and you will be late. Of course you would go in — that is easy to say.\n\nNow the second part. On the other side of the world, children die every day — from hunger, from illnesses that are easy to cure. The price of those shoes could save one of them. They are simply not in front of your eyes.\n\nWhat is the difference? The Australian philosopher Peter Singer asked this. The question is simple. It will not let you live comfortably.',
    },
    prompt: {
      az: 'Sual: uzaqdakı uşaq da sənin gölməçəndədirmi?',
      en: 'Sual: is the child far away also in your pond?',
    },
    choices: [
      {
        id: 'pond-give',
        text: {
          az: 'Fərq yoxdur. Məsafə əxlaqı dəyişmir. Gəlirimin bir hissəsini hər ay verəcəyəm.',
          en: 'There is no difference. Distance does not change morality. I will give part of my income every month.',
        },
        next: 'problems-hub',
        weights: { utilitarian: 2 },
        insight: {
          school: 'utilitarian',
          philosopher: 'Peter Singer',
          quote: {
            az: 'Pis bir şeyin qarşısını, eyni dərəcədə vacib nəyisə qurban vermədən ala biliriksə, almalıyıq.',
            en: 'If it is in our power to prevent something bad from happening, without sacrificing anything of comparable moral importance, we ought to do it.',
          },
          explain: {
            az: 'Sən Singerin məntiqini sona qədər apardın. Uşaq gözünün qabağında olanda da, min kilometr uzaqda olanda da həyatı eyni dərəcədə dəyərlidir. Utilitar baxış belədir: əhəmiyyətli olan ağrının harada olduğu yox, onu azalda bilib-bilməməyindir.\n\nBu, ağır nəticədir. Hər qəhvə, hər yeni telefon bir sual olur. Bəziləri deyir: bu, insandan müqəddəs olmağı tələb edir. Singer cavab verir: müqəddəs olmaq lazım deyil — sadəcə bir az az almaq, bir az çox vermək.',
            en: 'You took Singer’s logic all the way. A child’s life is worth the same whether it is in front of you or a thousand kilometres away. That is the utilitarian view: what matters is not where the pain is, but whether you can reduce it.\n\nIt is a heavy conclusion. Every coffee, every new phone becomes a question. Some say this asks people to be saints. Singer answers: you do not need to be a saint — just buy a little less, give a little more.',
          },
        },
        echo: {
          az: 'Ayaqqabın islanıb. Uşaq sahildə öskürür. Axşam, evdə, telefonunda bir xeyriyyə səhifəsi açıq qalır.',
          en: 'Your shoes are soaked. The child coughs on the bank. That evening at home, a charity page stays open on your phone.',
        },
      },
      {
        id: 'pond-near',
        text: {
          az: 'Fərq var. Gözümün qabağındakı uşaq birbaşa mənə müraciət edir. Mən bütün dünyanın yükünü daşıya bilmərəm — amma dairəmi böyütməyə çalışaram.',
          en: 'There is a difference. The child in front of me is calling to me directly. I cannot carry the whole world — but I can try to widen my circle.',
        },
        next: 'problems-hub',
        weights: { stoic: 2, virtue: 1 },
        insight: {
          school: 'stoic',
          philosopher: 'Hierokl',
          quote: {
            az: 'Dairələri mərkəzə doğru çəkmək — uzaqdakıları yaxındakılar kimi görmək lazımdır.',
            en: 'We should draw the circles somehow towards the centre — treating those far away as if they were near.',
          },
          explain: {
            az: 'Stoik Hierokl insanı iç-içə dairələrin ortasında təsvir edirdi: əvvəl sən, sonra ailə, qonşu, şəhər, bütün bəşəriyyət. Yaxındakını daha güclü hiss etmək təbiidir — sən bunu inkar etmədin.\n\nAmma stoiklərin tapşırığı da var idi: dairələri içəri çəkmək, yəni uzaqdakı insanı da bir az qohum kimi görmək. Sən “hamısını edə bilmərəm” dedin, “heç nə etmərəm” demədin. Bu, səmimi bir orta yerdir. Singer deyərdi ki, kifayət deyil. Sual açıq qalır.',
            en: 'The Stoic Hierocles pictured a person at the centre of nested circles: yourself, then family, neighbours, city, all humanity. It is natural to feel the near ones more strongly — you did not deny that.\n\nBut the Stoics also had a task: pull the circles inward, so that a stranger far away feels a little like kin. You said “I cannot do it all,” not “I will do nothing.” That is an honest middle place. Singer would say it is not enough. The question stays open.',
          },
        },
        echo: {
          az: 'Uşağı sudan çıxarırsan. Yolda bir an dayanıb düşünürsən: dairəm haradan başlayır, harada bitir?',
          en: 'You pull the child out. On the way, you stop for a moment: where does my circle begin, and where does it end?',
        },
      },
      {
        id: 'pond-drops',
        text: {
          az: 'Gölməçəyə girirəm. Uzaqdakılar üçün isə imkanım qədər verəcəyəm — özümü günahkar hiss etmədən, amma unutmadan da.',
          en: 'I go into the pond. For the ones far away, I will give what I can — without drowning in guilt, but without forgetting either.',
        },
        next: 'problems-hub',
        weights: { buddhist: 2, virtue: 1 },
        insight: {
          school: 'buddhist',
          philosopher: 'Dhammapada',
          quote: {
            az: '“Xeyir mənə gəlməz” deyə yaxşılığı kiçik sayma. Damla-damla küp dolar.',
            en: 'Do not think lightly of good, saying “it will not come to me.” Drop by drop the water pot is filled.',
          },
          explain: {
            az: 'Sən iki tələdən qaçdın: “hamısını etməliyəm” deyib tükənməkdən və “onsuz da heç nə dəyişmir” deyib əl çəkməkdən. Buddist ənənədə vermək (dana) qorxudan və ya günahdan yox, açıq ürəkdən gəlməlidir.\n\nGünahkarlıq hissi yaxşı yanacaq deyil — tez yanır, tez sönür. Kiçik, amma davamlı yaxşılıq daha uzağa gedir. Singer bəlkə deyərdi ki, “imkanım qədər” çox rahat ifadədir. Sən isə ona cavab verə bilərsən: damla da sudur.',
            en: 'You escaped two traps: burning out on “I must do everything” and giving up on “nothing changes anyway.” In the Buddhist tradition, giving (dana) should come from an open heart, not from fear or guilt.\n\nGuilt is poor fuel — it flares and dies fast. Small but steady good goes further. Singer might say “what I can” is too comfortable a phrase. You can answer: a drop is still water.',
          },
        },
        echo: {
          az: 'Paltarın islanıb, ürəyin isə yüngüldür. Cibində həmişəkindən bir az az pul var. Bu, səni narahat etmir.',
          en: 'Your clothes are soaked; your heart is light. There is a little less money in your pocket than usual. It does not trouble you.',
        },
      },
    ],
  },
  {
    id: 'p-promise',
    chapter: { az: 'Məşhur sual', en: 'A famous question' },
    title: { az: 'Son vəd', en: 'The deathbed promise' },
    body: {
      az: 'Köhnə dostun Tofiq xəstəxanada son günlərini yaşayır. Səni yanına çağırır, əlinə bir qutu verir: ömrü boyu yığdığı pul. “Bunu oğlum Elçinə ver,” deyir. “Söz ver.” Sən söz verirsən. Otaqda başqa heç kim yoxdur.\n\nTofiq ölür. Elçin artıq böyük adamdır, amma pulu qumara, bahalı maşınlara xərcləyir. Bu pul da ora gedəcək — bunu bilirsən.\n\nEyni vaxtda kəndin uşaq xəstəxanasının qış üçün sobası yoxdur. Qutudakı pul tam ona çatar. Sözünü pozsan, heç kim heç vaxt bilməyəcək.\n\nBu, fəlsəfə dərsliklərində məşhur sualdır: ölmüş birinə verilən vədin gücü varmı?',
      en: 'Your old friend Tofiq is living his last days in hospital. He calls you close and puts a box in your hands: the savings of a lifetime. “Give this to my son Elçin,” he says. “Promise me.” You promise. Nobody else is in the room.\n\nTofiq dies. Elçin is a grown man, but he spends money on gambling and expensive cars. This money will go there too — you know it.\n\nMeanwhile the village children’s hospital has no heater for the winter. The money in the box would cover it exactly. If you break your word, nobody will ever know.\n\nThis is a well-known question in philosophy textbooks: does a promise to the dead still bind?',
    },
    prompt: {
      az: 'Qutu stolun üstündədir. Nə edirsən?',
      en: 'The box is on the table. What do you do?',
    },
    choices: [
      {
        id: 'promise-keep',
        text: {
          az: 'Pulu Elçinə verirəm. Söz verdim. Kimsə bilməsə də, mən bilirəm.',
          en: 'I give the money to Elçin. I gave my word. Even if nobody knows, I know.',
        },
        next: 'problems-hub',
        weights: { kantian: 2 },
        insight: {
          school: 'kantian',
          philosopher: 'Kant',
          quote: {
            az: 'Vəd verib tutmamaq hamı üçün qanun olsaydı, vəd özü mənasını itirərdi.',
            en: 'If breaking promises were a law for everyone, promising itself would become impossible.',
          },
          explain: {
            az: 'Kant məhz bu nümunəni çox sevirdi. Fikirləş: əgər hər kəs “daha yaxşı nəticə üçün” vədini pozsaydı, heç kim heç kimə söz verə bilməzdi. Ölüm yatağında olan insan da kiməsə güvənə bilməzdi.\n\nSən Elçinin pulu necə xərcləyəcəyini idarə etmirsən — bu onun məsuliyyətidir. Sənin məsuliyyətin öz sözündür. Bəli, xəstəxana soyuq qalır. Kant bunu görməzlikdən gəlmir. Sadəcə deyir: yaxşı nəticə əldə etmək üçün yalançı olmaq olmaz.',
            en: 'Kant loved exactly this kind of example. Think: if everyone broke promises “for a better outcome,” nobody could give anyone their word. A dying person could trust no one.\n\nYou do not control how Elçin spends the money — that is his responsibility. Your responsibility is your own word. Yes, the hospital stays cold. Kant does not ignore that. He only says: you may not become a liar to buy a good result.',
          },
        },
        echo: {
          az: 'Elçin qutunu alır, “sağ ol” deyir, gedir. Sən pəncərədən xəstəxananın qaranlıq binasına baxırsan.',
          en: 'Elçin takes the box, says thanks, and leaves. You look out of the window at the dark hospital building.',
        },
      },
      {
        id: 'promise-hospital',
        text: {
          az: 'Pulu xəstəxanaya verirəm. Ölmüş insan inciməz, donan uşaq isə incəyər.',
          en: 'I give the money to the hospital. The dead cannot be hurt. A freezing child can.',
        },
        next: 'problems-hub',
        weights: { utilitarian: 2 },
        insight: {
          school: 'utilitarian',
          philosopher: 'Bentham',
          quote: {
            az: 'Təbiət bəşəriyyəti iki hökmdarın — ağrı ilə həzzin hakimiyyəti altına qoyub.',
            en: 'Nature has placed mankind under the governance of two sovereign masters, pain and pleasure.',
          },
          explain: {
            az: 'Sən nəticələri müqayisə etdin: bir tərəfdə qumarda itəcək pul, o biri tərəfdə isti otaqda sağalan uşaqlar. Bentham üçün bu, çətin sual deyil. Tofiq artıq heç nə hiss etmir, uşaqlar isə hiss edir.\n\nAmma etiraz güclüdür: əgər hamı belə düşünsə, ölənlər heç kimə güvənə bilməz — və bu da gələcəkdə çox ağrı yaradar. Bəzi utilitaristlər buna görə deyir: vədlərə hörmət etmək qayda olaraq faydalıdır, hətta bəzən konkret halda zərər görünsə də. Sən bu halı istisna saydın.',
            en: 'You compared outcomes: on one side money lost to gambling, on the other children recovering in a warm room. For Bentham this is not hard. Tofiq feels nothing now; the children do.\n\nBut the objection is strong: if everyone thought like this, the dying could trust no one — and that would cause much pain in the future. That is why some utilitarians say respecting promises is useful as a rule, even when one case seems to lose. You treated this case as the exception.',
          },
        },
        echo: {
          az: 'Qışda xəstəxananın pəncərələrində buğ var. Sən Tofiqin məzarının yanından keçəndə addımlarını bir az yeyinlədirsən.',
          en: 'In winter, the hospital windows are fogged with warmth. When you pass Tofiq’s grave, you walk a little faster.',
        },
      },
      {
        id: 'promise-tell',
        text: {
          az: 'Pulu Elçinə verirəm, amma atasının son sözlərini də ona danışıram — və onu xəstəxanaya aparıb göstərirəm. Qərar onundur.',
          en: 'I give the money to Elçin, but I also tell him his father’s last words — and I take him to see the hospital. The decision is his.',
        },
        next: 'problems-hub',
        weights: { virtue: 2, buddhist: 1 },
        insight: {
          school: 'virtue',
          philosopher: 'Aristotel',
          quote: {
            az: 'Dost ikinci məndir.',
            en: 'A friend is another self.',
          },
          explain: {
            az: 'Sən sözünü də tutdun, gözünü də yummadın. Aristotel üçün dostluq ən yüksək fəzilətlərdən biridir: dostun yaxşılığını öz yaxşılığın kimi istəyirsən. Tofiq oğlunun yaxşı insan olmasını da istəyərdi, təkcə pulu almasını yox.\n\nBu yol riskdir: Elçin yenə də pulu qumara verə bilər. Amma sən ona bir şans verdin — insan kimi seçmək şansı. Fəzilət etikası belə deyir: düzgün qayda yox, düzgün adam ol, düzgün anda, düzgün şəkildə.',
            en: 'You kept your word without closing your eyes. For Aristotle, friendship is among the highest virtues: you want your friend’s good as your own. Tofiq would also have wanted his son to become a good man, not only to receive money.\n\nThis road is a risk: Elçin may still gamble it away. But you gave him a chance — the chance to choose as a person. Virtue ethics says: not the right rule, but the right person, at the right time, in the right way.',
          },
        },
        echo: {
          az: 'Elçin uzun müddət soyuq dəhlizdə dayanır. Heç nə demir. Bir həftə sonra xəstəxanaya yeni soba gətirirlər. Kimin aldığını heç kim demir.',
          en: 'Elçin stands in the cold corridor a long time. He says nothing. A week later, a new heater arrives at the hospital. Nobody says who bought it.',
        },
      },
    ],
  },
  {
    id: 'p-sisyphus',
    chapter: { az: 'Məşhur sual', en: 'A famous question' },
    title: { az: 'Sizifin daşı', en: 'The stone of Sisyphus' },
    body: {
      az: 'Hər səhər eyni dağın ətəyində oyanırsan. Qarşında böyük bir daş var. Onu zirvəyə qədər itələməlisən. Zirvəyə çatanda daş geri yuvarlanır. Sabah yenidən. Və sonra yenə. Həmişə.\n\nQədim yunan mifində tanrılar Sizifi belə cəzalandırıb: mənasız, bitməyən iş. Bəlkə sənə tanış gəlir — hər gün eyni yol, eyni dərs, eyni iş.\n\nBir axşam daşın arxasınca aşağı enərkən birdən fərq edirsən: günəş batır, dağın qayaları qızarıb, nəfəsin ritmlidir.\n\nFransız yazıçı Albert Camus bu mif haqqında esse yazıb. Sual budur: həyat məna vermirsə, nə etməli?',
      en: 'Every morning you wake at the foot of the same mountain. In front of you is a huge stone. You must push it to the top. At the top, it rolls back down. Tomorrow, again. And again. Forever.\n\nIn the ancient Greek myth, the gods punished Sisyphus like this: pointless, endless work. Maybe it feels familiar — the same road every day, the same lesson, the same job.\n\nOne evening, walking down after the stone, you suddenly notice: the sun is setting, the rocks have turned red, your breath has a rhythm.\n\nThe French writer Albert Camus wrote an essay about this myth. The question is: if life gives no meaning, what then?',
    },
    prompt: {
      az: 'Sabah səhər. Daş gözləyir.',
      en: 'Tomorrow morning. The stone is waiting.',
    },
    choices: [
      {
        id: 'sisyphus-revolt',
        text: {
          az: 'Yenə itələyirəm — tanrılara inad. Daş mənimdir. Mənanı onlar vermir, mən yaradıram.',
          en: 'I push again — in defiance of the gods. The stone is mine. They do not give the meaning; I make it.',
        },
        next: 'problems-hub',
        weights: { existential: 2 },
        insight: {
          school: 'existential',
          philosopher: 'Camus',
          quote: {
            az: 'Sizifi xoşbəxt təsəvvür etmək lazımdır.',
            en: 'One must imagine Sisyphus happy.',
          },
          explain: {
            az: 'Camus buna “absurd” deyirdi: insan məna axtarır, dünya isə susur. Bu ziddiyyətdən üç çıxış var: ümidsizliyə düşmək, yalançı bir təsəlliyə qaçmaq, ya da üsyan etmək — yəni absurdu bilə-bilə yaşamağa davam etmək.\n\nSən üçüncünü seçdin. Sizif daşı itələyərkən tanrıların cəzası, aşağı enərkən isə öz həyatının sahibidir. Camusa görə məhz bu anda o, taleyindən güclüdür.',
            en: 'Camus called this “the absurd”: humans look for meaning, the world stays silent. There are three exits: fall into despair, flee into a false comfort, or revolt — that is, keep living while fully knowing the absurd.\n\nYou chose the third. While pushing, Sisyphus serves the gods’ punishment; walking down, he owns his life. For Camus, in exactly that moment he is stronger than his fate.',
          },
        },
        echo: {
          az: 'Səhər daşa çiyninlə söykənirsən. Bu dəfə dodaqlarında, özün də bilmədən, bir mahnı var.',
          en: 'In the morning you lean your shoulder into the stone. This time, without knowing it, you are humming.',
        },
      },
      {
        id: 'sisyphus-accept',
        text: {
          az: 'Daşı mən seçməmişəm, amma onu necə itələyəcəyimi mən seçirəm. Şikayət etmədən, sakitcə.',
          en: 'I did not choose the stone, but I choose how I push it. Without complaint, calmly.',
        },
        next: 'problems-hub',
        weights: { stoic: 2 },
        insight: {
          school: 'stoic',
          philosopher: 'Mark Avreli',
          quote: {
            az: 'Yolun qarşısında duran şey yolun özü olur.',
            en: 'What stands in the way becomes the way.',
          },
          explain: {
            az: 'Stoik baxışda daşın özü nə yaxşıdır, nə pis. Yaxşı və pis yalnız sənin ona münasibətindədir. Mark Avreli imperator idi, amma gündəliyində hər səhər özünə eyni şeyi xatırladırdı: bu gün də çətinlik olacaq, mən də onunla necə qarşılaşacağımı seçəcəyəm.\n\nCamusdan fərqi: stoik üsyan etmir, razılaşır. Amma bu razılıq məğlubiyyət deyil — daşa qarşı daxili sakitlikdir. Daş səni yox, sən daşı daşıyırsan.',
            en: 'In the Stoic view, the stone itself is neither good nor bad. Good and bad live only in how you meet it. Marcus Aurelius was an emperor, yet every morning he reminded himself in his journal: today will bring difficulty too, and I will choose how to meet it.\n\nThe difference from Camus: the Stoic does not revolt; he accepts. But this acceptance is not defeat — it is inner calm toward the stone. The stone does not carry you; you carry it.',
          },
        },
        echo: {
          az: 'Daş yenə yuvarlanır. Sən onun arxasınca tələsmədən enirsən. Ayaqların artıq yolu tanıyır.',
          en: 'The stone rolls again. You walk down after it without hurrying. Your feet already know the path.',
        },
      },
      {
        id: 'sisyphus-present',
        text: {
          az: 'Zirvəni düşünməyi buraxıram. Yalnız bu addım, bu nəfəs, bu daş. Hər itələyişdə buradayam.',
          en: 'I let go of thinking about the top. Only this step, this breath, this stone. With every push, I am here.',
        },
        next: 'problems-hub',
        weights: { buddhist: 2 },
        insight: {
          school: 'buddhist',
          philosopher: 'Zen deyimi',
          quote: {
            az: 'Aydınlanmadan əvvəl: odun doğra, su daşı. Aydınlanmadan sonra: odun doğra, su daşı.',
            en: 'Before enlightenment: chop wood, carry water. After enlightenment: chop wood, carry water.',
          },
          explain: {
            az: 'Sizifin əzabı daşda deyil — “zirvəyə çatmalıyam, amma heç vaxt çatmayacağam” fikrindədir. Buddist baxışda əziyyət nəticəyə yapışmaqdan gəlir. Nəticəni buraxanda iş eyni qalır, amma ağırlığı dəyişir.\n\nZen deyimi bunu deyir: maarifçilik həyatını dəyişmir, ona baxışını dəyişir. Odun eyni odundur, su eyni sudur. Sən isə artıq onunla döyüşmürsən.',
            en: 'Sisyphus’s torment is not the stone — it is the thought “I must reach the top, and I never will.” In the Buddhist view, suffering comes from clinging to results. When you let go of the result, the work stays the same, but its weight changes.\n\nThe Zen saying puts it like this: awakening does not change your life, it changes how you see it. The wood is the same wood, the water the same water. You are simply no longer fighting it.',
          },
        },
        echo: {
          az: 'Daşın səthində bir cızıq var — dünən görməmişdin. Bu gün onu görürsən. Bu kifayətdir.',
          en: 'There is a scratch on the stone’s surface — you had not seen it yesterday. Today you see it. That is enough.',
        },
      },
    ],
  },
]
