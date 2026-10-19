import type { Scene } from './types'

/**
 * Chapter V — every road in the main story ends here.
 * The `memory` lines make the scene remember which path you walked:
 * one line for your first answer, one or two for chapters III–IV.
 */
export const finale: Scene = {
  id: 'meeting',
  step: 5,
  image: 'meeting',
  chapter: { az: 'V · Həyət', en: 'V · The courtyard' },
  title: { az: 'Məhəllə yığıncağı', en: 'The neighbourhood meeting' },
  memory: [
    // — the first answer —
    {
      when: ['morning-good'],
      text: {
        az: 'Sual xatırladır: “Həftənin əvvəlində demişdin ki, yaxşı insan olmaq istəyirsən. Bu gün yaxşılıq bütöv bir məhəllə ilə ölçüləcək.”',
        en: 'Sual reminds you: “At the start of the week you said you wanted to be a good person. Today goodness is measured by a whole neighbourhood.”',
      },
    },
    {
      when: ['morning-pain'],
      text: {
        az: 'Sual xatırladır: “Həftənin əvvəlində demişdin ki, daha az ağrı istəyirsən. Burada ağrı çoxdur, ərzaq isə azdır.”',
        en: 'Sual reminds you: “At the start of the week you said you wanted less pain. Here there is plenty of pain and very little food.”',
      },
    },
    {
      when: ['morning-free'],
      text: {
        az: 'Sual xatırladır: “Həftənin əvvəlində demişdin ki, azad olmaq istəyirsən. İndi başqaları sənin seçiminə baxır.”',
        en: 'Sual reminds you: “At the start of the week you said you wanted to be free. Now other people are waiting on your choice.”',
      },
    },
    {
      when: ['morning-many'],
      text: {
        az: 'Sual xatırladır: “Həftənin əvvəlində demişdin ki, çoxuna kömək etmək istəyirsən. Bu gün o “çox” dediyin insanların hamısını adbaad tanıyırsan.”',
        en: 'Sual reminds you: “At the start of the week you said you wanted to help many people. Today you know every one of those ‘many’ by name.”',
      },
    },
    // — path A: lied, then joined or refused —
    {
      when: ['night-stay'],
      text: {
        az: 'Raufun qolu gipsdədir. Səni görəndə başını yelləyir — o gün qaçmadığını unutmayıb.',
        en: 'Rauf’s arm is in a cast. He nods when he sees you — he hasn’t forgotten that you didn’t run.',
      },
    },
    {
      when: ['night-run'],
      text: {
        az: 'Səbinə xala daha yaxşı görünür, Murad onun yanındadır. Raufun qolu gipsdədir. O hələ bilmir ki, o gün sən də orada idin.',
        en: 'Sabina looks better; Murad stands beside her. Rauf’s arm is in a cast. He still doesn’t know you were there that day.',
      },
    },
    {
      when: ['night-split'],
      text: {
        az: 'Raufun qolu gipsdədir. Sənə baxır — o gün yanında qalan üzü tanıyır. Murad isə gözlərini səndən qaçırır.',
        en: 'Rauf’s arm is in a cast. He looks at you — he recognises the face that stayed with him. Murad avoids your eyes.',
      },
    },
    {
      when: ['owner-name'],
      text: {
        az: 'Kamal dayı sözünü tutub — polisə getməyib, Səbinə xala ilə danışıb. Murad isə səninlə salamlaşmır.',
        en: 'Mr Kamal kept his word — no police, he talked to Sabina. But Murad won’t say hello to you.',
      },
    },
    {
      when: ['owner-silent'],
      text: {
        az: 'Kamal dayı sənə bir an baxıb üzünü çevirir. Murad heç vaxt bilməyəcək ki, o gün sən susmuşdun.',
        en: 'Mr Kamal glances at you and looks away. Murad will never know that you kept quiet that day.',
      },
    },
    {
      when: ['owner-help'],
      text: {
        az: 'Kamal dayı səni görəndə gülümsəyir — şənbələri birlikdə işləyirsiniz. Murad da bəzən gəlib kömək edir.',
        en: 'Mr Kamal smiles when he sees you — you work Saturdays together now. Sometimes Murad comes to help too.',
      },
    },
    // — path B: told the truth —
    {
      when: ['pharmacy-same'],
      text: {
        az: 'Leyla xala da buradadır, üzü solğundur. Nəvəsi necədir? Heç kim sənə deməyib. Sən də soruşmamısan.',
        en: 'Leyla is here too, pale. How is her grandson? Nobody has told you. You haven’t asked.',
      },
    },
    {
      when: ['pharmacy-bend'],
      text: {
        az: 'Kamal dayı səni görəndə qaşqabağını tökür. Leyla xala isə yaxınlaşıb əlini sıxır: “Nəvəm yaxşıdır.”',
        en: 'Mr Kamal frowns when he sees you. Leyla comes over and squeezes your hand: “My grandson is fine.”',
      },
    },
    {
      when: ['pharmacy-pay'],
      text: {
        az: 'Kartında pul azalıb, amma Leyla xala səni hamıya “bizim qəhrəman” deyə tanıdır. Kamal dayı buna necə baxacağını hələ bilmir.',
        en: 'Your bank card is lighter, but Leyla introduces you to everyone as “our hero”. Mr Kamal still doesn’t know what to make of it.',
      },
    },
    // — path C: stayed quiet —
    {
      when: ['calls-murad'],
      text: {
        az: 'Səbinə xala yaxşılaşıb, Murad sənin yanında dayanıb. Rauf isə başqa işə keçib və səndən aralı durur.',
        en: 'Sabina has recovered; Murad stands next to you. Rauf has moved to another job and keeps his distance.',
      },
    },
    {
      when: ['calls-rauf'],
      text: {
        az: 'Rauf işini saxlayıb və sənə minnətdardır. Murad isə səninlə danışmır — o gecə səni gözləyirdi.',
        en: 'Rauf kept his job and is grateful. Murad isn’t talking to you — that night, he was waiting for you.',
      },
    },
    {
      when: ['calls-both'],
      text: {
        az: 'Murad da, Rauf da səninlə salamlaşır — ikisi də yarımçıq kömək aldı, ikisi də səni yarımçıq bağışladı.',
        en: 'Murad and Rauf both say hello — each got half your help, each half forgives you.',
      },
    },
    {
      when: ['tea-sooner'],
      text: {
        az: 'Nənən də gəlib. Sənə göz vurur: “Daha tez seçəcəkdin. Budur, fürsət.”',
        en: 'Your grandmother is here too. She winks: “You said you’d choose sooner. Here’s your chance.”',
      },
    },
    {
      when: ['tea-limit'],
      text: {
        az: 'Nənən də gəlib. Qulağına pıçıldayır: “Sərhədini unutma. Amma bu gün dairən böyükdür.”',
        en: 'Your grandmother is here too. She whispers: “Keep your limits. But today your circle is big.”',
      },
    },
    {
      when: ['tea-both'],
      text: {
        az: 'Nənən də gəlib, əlində termosda çay. “Bu gün hansı dəyəri seçəcəksən?” deyir.',
        en: 'Your grandmother is here too, with a flask of tea. “Which value will you pick today?” she asks.',
      },
    },
  ],
  body: {
    az: 'Qış gəlib. Həyətdə ilk qar yağır. Binanın sakinləri yığışıb: Kamal dayı, Rauf, Səbinə xala, Murad, qonşular.\n\nKamal dayı bir fikir gətirib: marketin qabağına “xeyir rəfi” qoyulsun. Kim istəyir, ora ərzaq qoyur, ehtiyacı olan götürür. Amma ərzaq azdır, ehtiyacı olan isə çox.\n\nHamı sənə baxır. “Sən bu hekayəni hər tərəfdən görmüsən,” deyir Kamal dayı. “De görək, rəfi necə idarə edək?”\n\nSual bu dəfə pıçıldamır, ucadan deyir: “Bu, son sualdır. Artıq təkcə özün üçün seçmirsən.”',
    en: 'Winter has come. The first snow falls on the courtyard. The residents have gathered: Mr Kamal, Rauf, Sabina, Murad, the neighbours.\n\nMr Kamal has an idea: put a “kindness shelf” outside the shop. Anyone can leave food there; anyone in need can take some. But there is little food and many people in need.\n\nEveryone looks at you. “You’ve seen this story from every side,” says Mr Kamal. “So tell us — how should we run the shelf?”\n\nThis time Sual doesn’t whisper. It says out loud: “This is the last question. You are no longer choosing only for yourself.”',
  },
  prompt: {
    az: 'Həyət susur. Hamı sənə baxır.',
    en: 'The courtyard goes quiet. Everyone is looking at you.',
  },
  choices: [
    {
      id: 'meeting-rule',
      text: {
        az: 'Hamı üçün bir qayda: hər ailə həftədə bir dəfə, eyni miqdarda götürür. İstisna yoxdur — mənim üçün də.',
        en: 'One rule for all: each family takes once a week, the same amount. No exceptions — not even for me.',
      },
      next: 'ending',
      weights: { kantian: 2, stoic: 1 },
      insight: {
        school: 'kantian',
        philosopher: 'Kant',
        quote: {
          az: 'İnsanı heç vaxt yalnız vasitə kimi yox, həmişə həm də məqsəd kimi gör.',
          en: 'Treat people never merely as a means, but always also as an end.',
        },
        explain: {
          az: 'Sən qaydanı insanlardan yuxarı qoymadın — hamıdan eyni məsafəyə qoydun. Kant üçün ədalətin özəyi budur: qayda kimin üzünə baxdığını bilməməlidir. Özünü də içəri yazdın. Bu vacibdir: qaydanı yazan özünü istisna edəndə, o artıq qayda yox, imtiyaz olur.\n\nZəif yeri də var: eyni pay xəstəyə də, sağlama da eyni gəlir. Bərabər həmişə ədalətli deyil.',
          en: 'You didn’t put the rule above people — you put it at the same distance from everyone. For Kant, this is the heart of justice: a rule shouldn’t know whose face it is looking at. You included yourself. That matters: when the rule-maker exempts himself, it becomes a privilege, not a rule.\n\nThere is a weak spot: the same share goes to the sick and the healthy. Equal is not always fair.',
        },
        think: {
          az: 'Bərabərlik və ədalət eyni şeydirmi?',
          en: 'Are equality and fairness the same thing?',
        },
      },
      echo: {
        az: 'Kamal dayı qaydanı kağıza yazıb rəfin üstünə yapışdırır. Bəziləri deyinir. Amma heç kim deyə bilmir ki, kimsə ondan çox alıb.',
        en: 'Mr Kamal writes the rule down and tapes it to the shelf. Some grumble. But nobody can say anyone got more than them.',
      },
    },
    {
      id: 'meeting-need',
      text: {
        az: 'Əvvəl uşaqlı, xəstə və yaşlı ailələr. Qalanı sonra. Kimsə az alacaq, amma ən çox ehtiyacı olan doyacaq.',
        en: 'Families with children, the sick and the elderly first. The rest after. Some get less, but those most in need will eat.',
      },
      next: 'ending',
      weights: { utilitarian: 2 },
      insight: {
        school: 'utilitarian',
        philosopher: 'Bentham',
        quote: {
          az: 'Hər kəs bir nəfər sayılır, heç kim birdən artıq sayılmır.',
          en: 'Everybody to count for one, nobody for more than one.',
        },
        explain: {
          az: 'Sən ehtiyaca görə böldün və nəticəyə baxdın: qışın sonunda kim daha yaxşı olacaq? Utilitarizm burada ən güclü üzünü göstərir — soyuq hesab yox, ən zəifə ən çox kömək.\n\nAmma sual qalır: “ehtiyacı” kim ölçəcək? Kimsə özünü daha kasıb göstərəcək, kimsə inciyəcək. Rəqəm yaxşı köməkçidir, amma pis hakim ola bilər.',
          en: 'You divided by need and looked at the outcome: who will be better off at the end of winter? Here utilitarianism shows its best face — not cold maths, but the most help for the weakest.\n\nBut a question remains: who measures “need”? Some will pretend to be poorer, some will feel hurt. Numbers make good helpers but can make bad judges.',
        },
        think: {
          az: 'Ehtiyacı ədalətli şəkildə necə ölçmək olar?',
          en: 'How could need be measured fairly?',
        },
      },
      echo: {
        az: 'Kamal dayı siyahı yazmağa başlayır. Ən başda uşaqların adları. Bir qonşu narazı mızıldanır, amma razılaşır.',
        en: 'Mr Kamal starts a list. Children’s names come first. One neighbour mutters, but agrees.',
      },
    },
    {
      id: 'meeting-peace',
      text: {
        az: 'Rəfdən əvvəl barışaq: Murad Kamal dayıdan üzr istəsin, Kamal dayı da onu bağışlasın. Küsülü məhəllədə rəf işləməz.',
        en: 'Before the shelf, let’s make peace: Murad apologises to Mr Kamal, and Mr Kamal forgives him. A shelf won’t work in a neighbourhood full of grudges.',
      },
      next: 'ending',
      weights: { buddhist: 2, virtue: 1 },
      insight: {
        school: 'buddhist',
        philosopher: 'Budda',
        quote: {
          az: '“Məni təhqir etdi, məni incitdi” — bu fikri ürəyində saxlayanın nifrəti sönmür.',
          en: '“He insulted me, he hurt me” — in those who hold such thoughts, hatred never ends.',
        },
        explain: {
          az: 'Sən ərzaqdan əvvəl ərzağın ətrafındakı ağrını gördün. Buddist baxışda əziyyətin kökü çox vaxt aclıq yox, kin və inaddır: “o mənə borcludur”, “o oğrudur”, “mən haqlıyam”. Bu düyün açılmasa, ən ədalətli qayda da davaya çevrilir.\n\nTəhlükəsi: barışığı məcbur etmək olmur. Kimsə üzr istəməsə, ac qalanlar gözləməlidirmi?',
          en: 'Before the food, you saw the pain around the food. In the Buddhist view, suffering often comes not from hunger but from grudges and stubbornness: “he owes me”, “he is a thief”, “I am right”. If that knot isn’t untied, even the fairest rule turns into a fight.\n\nThe danger: you can’t force reconciliation. If someone won’t apologise, should hungry people wait?',
        },
        think: {
          az: 'Kimi hələ də bağışlamamısan? Bu, kimə daha çox ağır gəlir — sənə, yoxsa ona?',
          en: 'Who haven’t you forgiven yet? Who does that weigh on more — you or them?',
        },
      },
      echo: {
        az: 'Uzun sükut. Sonra Murad bir addım irəli atır. Kamal dayı başını qaldırır. Hələ heç kim heç nə deməyib, amma həyət bir az isinib.',
        en: 'A long silence. Then Murad steps forward. Mr Kamal lifts his head. Nobody has said a word yet, but the courtyard feels a little warmer.',
      },
    },
    {
      id: 'meeting-volunteer',
      text: {
        az: 'Mən hökm verməyəcəm — kömək edəcəm. Hər şənbə rəfi özüm dolduracam. Qərarı birlikdə verin, mən işimlə yanınızdayam.',
        en: 'I won’t pass judgment — I’ll help. Every Saturday I’ll fill the shelf myself. Decide together; I’ll be with you through my work.',
      },
      next: 'ending',
      weights: { virtue: 2, stoic: 1 },
      insight: {
        school: 'virtue',
        philosopher: 'Aristotel',
        quote: {
          az: 'İnsan təbiətcə cəmiyyət içində yaşayan varlıqdır.',
          en: 'Man is by nature a social animal.',
        },
        explain: {
          az: 'Sən hakim olmaq əvəzinə cəmiyyətin bir parçası olmağı seçdin. Aristotel deyirdi: xarakter tənhalıqda yox, insanların arasında formalaşır. Yaxşı həyat bir böyük qərar deyil — hər həftə doldurulan rəfdir.\n\nAmma məhəllə səndən qərar istəmişdi. Bəzən təvazökarlıq da məsuliyyətdən qaçmaq ola bilər.',
          en: 'Instead of being the judge, you chose to be part of the community. Aristotle said character is formed among people, not alone. A good life is not one big decision — it is a shelf filled every week.\n\nBut the neighbourhood asked you for a decision. Sometimes modesty can also be a way of dodging responsibility.',
        },
        think: {
          az: 'Sən hansı icmanın — ailə, sinif, məhəllə — bir parçasısan? Ona nə verirsən?',
          en: 'Which community — family, class, neighbourhood — are you part of? What do you give it?',
        },
      },
      echo: {
        az: 'Kamal dayı təəccüblə baxır, sonra sənə bir qutu uzadır: “Onda şənbə səhər birinci qutu səndən.”',
        en: 'Mr Kamal looks surprised, then hands you a box: “Then on Saturday morning, the first box is yours.”',
      },
    },
    {
      id: 'meeting-vote',
      text: {
        az: 'Mən sizin yerinizə seçməyəcəm. Hər kəs fikrini desin, sonra səsverməyə qoyaq. Qərar hamınızındır — sonra heç kim “məni məcbur etdilər” deməsin.',
        en: 'I won’t choose for you. Everyone speaks, then we vote. The decision belongs to all of you — and afterwards nobody gets to say “they made me.”',
      },
      next: 'ending',
      weights: { existential: 2, stoic: 1 },
      insight: {
        school: 'existential',
        philosopher: 'Sartre',
        quote: {
          az: 'İnsan azad olmağa məhkumdur.',
          en: 'Man is condemned to be free.',
        },
        explain: {
          az: 'Sən qərarı insanlara qaytardın. Sartre deyərdi: azadlıqdan qaçmaq olmur — onu başqasına ötürmək də bir seçimdir. Sən insanları öz qərarlarının müəllifi etdin, bəhanəsiz.\n\nZəif yeri: ac insan sakit müzakirə etmir. Səsi uca olan çox alacaq, utancaq olan az. Azadlıq hamıya bərabər paylanmır — bunu da görməlisən.',
          en: 'You handed the decision back to the people. Sartre would say: you can’t escape freedom — handing it to someone else is also a choice. You made people the authors of their own decision, with no excuses.\n\nThe weak spot: hungry people don’t debate calmly. The loud get more, the shy get less. Freedom isn’t shared out equally — you have to see that too.',
        },
        think: {
          az: 'Səsvermə həmişə ədalətli nəticə verirmi?',
          en: 'Does voting always produce a fair result?',
        },
      },
      echo: {
        az: 'Bir anlıq sükut. Sonra bir qadın danışmağa başlayır, sonra başqası. Səs-küy artır. Bu, sənin qərarın deyil. Onlarındır.',
        en: 'A moment of silence. Then one woman starts speaking, then another. The noise grows. This isn’t your decision. It’s theirs.',
      },
    },
  ],
}
