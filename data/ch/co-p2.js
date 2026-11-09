DELF.chapter({
id:'co-p2', part:'co', stage:'preparer', num:2, order:2,
title:'Comprendre un message oral',
tr:{ko:'음성 메시지 이해하기',en:'Understanding a spoken message'},
intro:{ko:'친구, 가족, 병원 등에서 남긴 <b>자동응답기 메시지</b>를 듣고 개인 정보, 간단한 지시, 그리고 <b>감정</b>을 파악하는 연습입니다.',en:'Practise understanding voicemail messages from friends, family or services: personal information, simple instructions and feelings.',fr:'S’entraîner à comprendre des messages sur un répondeur : informations personnelles, indications simples et émotions.'},
blocks:[
{type:'note',kind:'method',title:'Comprendre une information personnelle',tr:{ko:'개인적인 정보 이해하기',en:'Understanding personal information'},toc:true,html:'<ul><li>Un message commence souvent par : <span class="say">Allô, c’est Manon !</span> / <span class="say">Bonjour, ici le cabinet du docteur Martin.</span> → <b>Qui</b> parle ?</li><li>Puis la <b>raison</b> de l’appel : <span class="say">Je t’appelle pour…</span> / <span class="say">Je vous appelle au sujet de…</span></li><li>Et souvent une <b>demande</b> à la fin : <span class="say">Rappelle-moi !</span> / <span class="say">Merci de nous rappeler au…</span></li><li>Les <b>numéros de téléphone</b> se disent par groupes de deux chiffres : <span class="say">zéro six, vingt-quatre, quinze, quatre-vingt-dix-huit, trente</span>.</li></ul>'},

{type:'audio',id:'a14',title:'Activité 14 — Trois messages d’amis',plays:2,situation:{ko:'친구들이 남긴 세 개의 메시지',en:'Three messages from friends',fr:'Trois messages laissés par des amis'},names:{F:'Manon',M:'Rayan',F2:'Lina'},lines:[
 {s:'F',t:'Message 1. Salut Manon, c’est Jeanne ! Pour samedi, c’est bon : Louis et Sofia veulent venir avec nous, donc on sera quatre avec toi et moi. On va à la patinoire, d’accord ? On se retrouve devant l’entrée à 14 heures 30. Bisous !'},
 {s:'M',t:'Message 2. Coucou Manon, c’est Rayan. Pour ton anniversaire vendredi, j’ai invité tout le monde : Jules, Chloé, Malo, Yasmine et Ethan. Ils sont tous d’accord pour la surprise. Ne dis rien à ta sœur !'},
 {s:'F2',t:'Message 3. Allô Nolan, c’est Lina. Tu sais, pour le journal du collège, j’ai fait un classement des chanteurs préférés de la classe ! Je voudrais faire un article avec toi. Numéro 1 : Zoé Mars. Numéro 2 : Tom Lune. Numéro 3 : Nina Sol. Et numéro 4 : DJ Kalo. Tu veux écrire l’article avec moi mercredi ? Rappelle-moi !'}
]},
{type:'ex',id:'e14',title:'Activité 14',consigne:'Écoutez chaque message deux fois. Répondez aux questions.',tr:{ko:'각 메시지를 두 번 듣고 질문에 답하세요.',en:'Listen to each message twice and answer the questions.'},items:[
 {type:'short',q:'Message 1 a. Combien de personnes veulent accompagner Manon ?',answer:'trois (Jeanne, Louis et Sofia)',keywords:[['3','trois']],need:1,explain:'Jeanne + Louis + Sofia = 3 → « on sera quatre avec toi ».'},
 {type:'short',q:'Message 1 b. Où les amis vont-ils aller ensemble ?',answer:'à la patinoire',keywords:[['patinoire']],need:1},
 {type:'short',q:'Message 1 c. À quelle heure se retrouvent-ils ?',answer:'14 h 30',keywords:[['14 h 30','14h30','14 heures 30','2 h 30','deux heures et demie']],need:1},
 {type:'gap',q:'Message 2 — Écrivez les prénoms de tous les amis.',text:'{{Jules}}, {{Chloé|Chloe}}, {{Malo}}, {{Yasmine}} et {{Ethan}}'},
 {type:'mcq',q:'Message 3 a. Lina téléphone à Nolan pour…',options:['demander de l’aide.','proposer une activité.','donner une information.'],answer:1,explain:'« Tu veux écrire l’article avec moi mercredi ? » → 활동 제안.'},
 {type:'short',q:'Message 3 b. À quoi correspond le classement proposé par Lina ?',answer:'aux chanteurs préférés de la classe',keywords:[['chanteur'],['préf','pref','classe']],need:2},
 {type:'gap',q:'Message 3 c. Quels sont les noms des quatre personnes du classement ?',text:'1 : {{Zoé Mars|Zoe Mars}} — 2 : {{Tom Lune}} — 3 : {{Nina Sol}} — 4 : {{DJ Kalo|Kalo}}'}
]},

{type:'audio',id:'a15',title:'Activité 15 — L’agenda de Mme Perrin',plays:1,situation:{ko:'여행사에서 남긴 메시지',en:'A message from a travel agency',fr:'Message d’une agence de voyages'},names:{M:'Agent de voyages'},lines:[
 {s:'M',t:'Bonjour madame Perrin, ici Thomas, de l’agence Horizon. Je vous appelle pour votre voyage de lundi à Strasbourg.'},
 {s:'M',t:'J’ai deux trains pour vous. Le premier part de Paris à 8 heures 30 et arrive à Strasbourg à 10 heures 15. Il coûte 65 euros.'},
 {s:'M',t:'Le deuxième part à 9 heures, mais il passe par Metz, et il arrive à Strasbourg à midi et demi. Il est moins cher : 42 euros.'},
 {s:'M',t:'Rappelez-moi pour me dire votre choix. Bonne journée !'}
]},
{type:'ex',id:'e15',title:'Activité 15',consigne:'Écoutez le message une fois. Complétez l’agenda de Mme Perrin avec les horaires, les villes et les prix.',tr:{ko:'메시지를 한 번 듣고 페랭 부인의 일정표에 시간, 도시, 가격을 채우세요.',en:'Listen once and complete Mrs Perrin’s diary with times, cities and prices.'},items:[
 {type:'gap',q:'Lundi — Complétez.',text:'<table><tr><th></th><th>Train 1</th><th>Train 2</th></tr><tr><td>Départ</td><td>Paris, {{8 h 30|8h30|8 heures 30}}</td><td>Paris, {{9 h|9h|9 heures|9 h 00}}</td></tr><tr><td>Passe par</td><td>—</td><td>{{Metz}}</td></tr><tr><td>Arrivée à Strasbourg</td><td>{{10 h 15|10h15|10 heures 15}}</td><td>{{12 h 30|12h30|midi et demi|midi trente}}</td></tr></table><p>NOTES — Voyage pour : {{Strasbourg}} · Prix du train 1 : {{65}} € · Prix du train 2 : {{42}} €</p>'}
]},

{type:'audio',id:'a16',title:'Activité 16 — Trois messages et trois numéros',plays:2,situation:{ko:'세 개의 전화 메시지',en:'Three phone messages',fr:'Trois messages téléphoniques'},names:{F:'Mère de Margaux',N:'Répondeur',F2:'Secrétaire'},lines:[
 {s:'F',t:'Message 1. Margaux, c’est maman. Je suis à la maison et je viens de voir que tu as oublié tes clés sur la table ! Ce n’est pas grave : ce soir, ton frère sera là à 18 heures pour t’ouvrir. S’il y a un problème, appelle-moi sur mon portable au 06 24 15 98 30.'},
 {s:'N',t:'Message 2. Bienvenue au point Info Jeunesse de Villeneuve. Notre centre est fermé. Nous sommes ouverts du lundi au vendredi, de 9 heures à 17 heures. En dehors de ces horaires, vous pouvez appeler notre ligne d’écoute au 04 73 81 22 50, tous les jours de 18 heures à 22 heures.'},
 {s:'F2',t:'Message 3. Bonjour, ici le cabinet du docteur Lambert. Le docteur doit annuler votre rendez-vous de jeudi. Nous vous proposons un nouveau rendez-vous le mardi 14 mars à 10 heures 30. Merci de nous rappeler au 02 40 56 71 19 pour confirmer ou changer ce rendez-vous.'}
]},
{type:'ex',id:'e16',title:'Activité 16',consigne:'1. Écoutez les trois messages une fois. Associez chaque message à un lieu. 2. Écoutez encore une fois et répondez aux questions.',tr:{ko:'1. 세 메시지를 듣고 장소와 연결하세요. 2. 다시 듣고 질문에 답하세요.',en:'1. Listen once and match each message with a place. 2. Listen again and answer.'},items:[
 {type:'match',q:'1 — Associez.',left:['Message 1','Message 2','Message 3'],right:['au centre d’information','chez le médecin','à la maison'],answer:[2,0,1]},
 {type:'short',q:'Message 1 a. Quel est le numéro de téléphone entendu ?',answer:'06 24 15 98 30',keywords:[['0624159830','06 24 15 98 30']],need:1},
 {type:'short',q:'Message 1 b. Quel est le problème de Margaux ?',answer:'Elle a oublié ses clés.',keywords:[['clé','cle','clef']],need:1},
 {type:'short',q:'Message 1 c. Quelle est la solution ?',answer:'Son frère sera à la maison à 18 h pour lui ouvrir.',keywords:[['frère','frere'],['18','ouvr']],need:1},
 {type:'short',q:'Message 2 a. Quel est le numéro de téléphone entendu ?',answer:'04 73 81 22 50',keywords:[['0473812250','04 73 81 22 50']],need:1},
 {type:'short',q:'Message 2 b. Quand pouvez-vous utiliser ce numéro ?',answer:'tous les jours de 18 h à 22 h',keywords:[['18'],['22']],need:2},
 {type:'short',q:'Message 3 a. Quel est le numéro de téléphone entendu ?',answer:'02 40 56 71 19',keywords:[['0240567119','02 40 56 71 19']],need:1},
 {type:'mcq',q:'Message 3 b. Pourquoi faut-il appeler ce numéro ? Pour…',options:['changer de rendez-vous.','accepter le rendez-vous.','annuler le rendez-vous.'],answer:1,explain:'« pour confirmer ou changer » → 새 예약을 확인(수락)하기 위해. 이미 취소는 병원이 했습니다.'},
 {type:'short',q:'Message 3 c. Quelles sont la date et l’heure du nouveau rendez-vous ?',answer:'le mardi 14 mars à 10 h 30',keywords:[['14 mars','mardi'],['10 h 30','10h30','10 heures 30']],need:2}
]},

{type:'note',kind:'lex',title:'Comprendre des indications simples',tr:{ko:'간단한 안내 이해하기',en:'Understanding simple instructions'},toc:true,html:'<ul><li>Heure : <span class="say">On part à 7 heures pile.</span> <span class="say">Rendez-vous à 8 heures moins le quart.</span></li><li>Objets : <span class="say">Prends ta gourde, ton pique-nique et ta lampe.</span></li><li>Vêtements : <span class="say">un imperméable, des bottes, un bonnet, des gants</span></li><li>Météo : <span class="say">Il va pleuvoir. Il fera froid. Il y aura du vent.</span></li></ul>'},
{type:'audio',id:'a17',title:'Activité 17 — La sortie de demain',plays:2,situation:{ko:'내일 소풍에 대한 메시지',en:'A message about tomorrow’s outing',fr:'Message à propos de la sortie de demain'},names:{M:'Père de Maxime'},lines:[
 {s:'M',t:'Allô Maxime, c’est papa. Pour la randonnée de demain avec les scouts, on part de la maison à 7 heures, pas plus tard !'},
 {s:'M',t:'Prépare ton sac ce soir : ta gourde, ton pique-nique et ta lampe de poche. La météo annonce de la pluie et du froid, seulement 8 degrés. Alors prends ton imperméable, tes bottes et ton bonnet.'},
 {s:'M',t:'Ah, et autre chose : demain après-midi, tu ne pourras pas aller au match de foot avec Lucas, parce qu’on rentre tard, vers 19 heures. Je suis désolé. À ce soir !'}
]},
{type:'ex',id:'e17',title:'Activité 17',consigne:'1. Écoutez le message une fois. Complétez les informations. 2. Écoutez encore une fois et répondez aux questions.',tr:{ko:'1. 메시지를 한 번 듣고 정보를 채우세요. 2. 다시 듣고 답하세요.',en:'1. Listen once and complete the information. 2. Listen again and answer.'},items:[
 {type:'short',q:'1 — Heure de départ',answer:'7 h',keywords:[['7','sept']],need:1},
 {type:'short',q:'1 — Objets à prendre',answer:'une gourde, un pique-nique, une lampe de poche',keywords:[['gourde'],['pique','repas'],['lampe']],need:3,lines:2},
 {type:'short',q:'1 — Vêtements à prendre',answer:'un imperméable, des bottes, un bonnet',keywords:[['imperméable','impermeable','k-way'],['botte'],['bonnet']],need:3,lines:2},
 {type:'short',q:'2a. Quelle est la météo de demain ?',answer:'de la pluie et du froid (8 degrés)',keywords:[['pluie','pleu'],['froid','8']],need:2},
 {type:'short',q:'2b. Qu’est-ce que Maxime ne peut pas faire demain après-midi ?',answer:'aller au match de foot avec Lucas',keywords:[['match','foot']],need:1},
 {type:'short',q:'2c. Pourquoi ?',answer:'parce qu’ils rentrent tard, vers 19 heures',keywords:[['tard','19']],need:1}
]},

{type:'audio',id:'a18',title:'Activité 18 — Jade est malade',plays:2,situation:{ko:'아픈 친구의 메시지',en:'A message from a sick friend',fr:'Message d’une amie malade'},names:{F:'Jade'},lines:[
 {s:'F',t:'Allô Sami, c’est Jade… Je ne vais pas bien du tout. Je tousse beaucoup, j’ai mal à la gorge et j’ai très mal à la tête. J’ai aussi de la fièvre, 39 !'},
 {s:'F',t:'Le médecin est venu ce matin : j’ai la grippe. Je dois rester au lit une semaine.'},
 {s:'F',t:'Est-ce que tu peux noter les devoirs de maths et de français pour moi, s’il te plaît ? Envoie-moi une photo de ton cahier de textes ce soir. Merci, tu es super !'}
]},
{type:'ex',id:'e18',title:'Activité 18',consigne:'1. Écoutez le message une fois. Choisissez les symptômes de la maladie de Jade. 2. Écoutez encore une fois et répondez aux questions.',tr:{ko:'1. 메시지를 듣고 자드의 증상을 고르세요. 2. 다시 듣고 답하세요.',en:'1. Listen once and choose Jade’s symptoms. 2. Listen again and answer.'},items:[
 {type:'multi',q:'1 — Quels sont les symptômes de Jade ?',options:['🩹 A. une blessure à la main','🤧 B. elle tousse, mal à la gorge','🔙 C. mal au dos','🦶 D. mal au pied','🤢 E. mal au ventre','🤕 F. mal à la tête'],answer:[1,5]},
 {type:'short',q:'2a. Comment s’appelle la maladie de Jade ?',answer:'la grippe',keywords:[['grippe']],need:1},
 {type:'mcq',q:'2b. Jade téléphone à Sami pour…',options:['inviter Sami à la maison.','noter les devoirs à faire.','prévenir l’école.'],answer:1}
]},

{type:'audio',id:'a19',title:'Activité 19 — Une séance de relaxation',plays:1,situation:{ko:'이완 명상 녹음',en:'A relaxation recording',fr:'Un message de relaxation'},names:{F:'Coach'},lines:[
 {s:'F',t:'Bonjour et bienvenue dans votre séance de relaxation. Pendant dix minutes, vous allez vous détendre et oublier le stress de la journée.'},
 {s:'F',t:'Asseyez-vous confortablement. Fermez les yeux. Respirez lentement par le nez… et soufflez par la bouche.'},
 {s:'F',t:'Maintenant, relâchez vos épaules. Posez vos mains sur votre ventre et sentez votre respiration.'},
 {s:'F',t:'Imaginez que vous êtes dans une grande prairie verte, au pied des montagnes. L’air est frais, le ciel est bleu, la neige brille sur les sommets… Vous êtes bien.'}
]},
{type:'ex',id:'e19',title:'Activité 19',consigne:'Écoutez le message. Répondez aux questions.',tr:{ko:'메시지를 듣고 질문에 답하세요.',en:'Listen to the message and answer the questions.'},items:[
 {type:'mcq',q:'a. Le but du message est de…',options:['se relaxer.','s’endormir.','faire du sport.'],answer:0},
 {type:'short',q:'b. Combien de temps va durer cette leçon ?',answer:'dix minutes',keywords:[['10','dix']],need:1},
 {type:'multi',q:'c. Choisissez les parties du corps entendues.',options:['yeux','bouche','ventre','épaules','jambe','bras'],answer:[0,1,2,3],explain:'yeux, bouche, épaules, ventre (+ nez, mains). Pas de jambe ni de bras.'},
 {type:'mcq',q:'d. Le message propose de penser à…',options:['🏔️ A. la montagne','🏙️ B. une grande ville','🏝️ C. une plage'],answer:0}
]},

{type:'note',kind:'lex',title:'Comprendre une émotion',tr:{ko:'감정 이해하기',en:'Understanding emotions'},toc:true,html:'<table><tr><th>Joie 😊</th><th>Tristesse 😢</th><th>Inquiétude 😟</th><th>Déception 😞</th></tr><tr><td><span class="say">Je suis trop contente !</span><br><span class="say">C’est génial !</span><br><span class="say">Super !</span></td><td><span class="say">Je suis triste.</span><br><span class="say">J’ai le cafard.</span></td><td><span class="say">J’ai peur que…</span><br><span class="say">Je suis inquiète.</span></td><td><span class="say">Dommage…</span><br><span class="say">Je suis déçue.</span></td></tr></table><p>Écoutez aussi l’<b>intonation</b> : une voix forte et rapide = joie ou colère ; une voix lente et basse = tristesse.</p>'},
{type:'audio',id:'a20',title:'Activité 20 — Anaïs est heureuse',plays:2,situation:{ko:'기쁜 소식을 전하는 메시지',en:'A happy message',fr:'Un message plein de joie'},names:{F:'Anaïs'},lines:[
 {s:'F',t:'Allô Clara ! C’est Anaïs ! Oh là là, je suis trop contente ! Il faut que je te raconte !'},
 {s:'F',t:'Hier, je suis allée à la piscine avec mon père. Et là, j’ai rencontré une fille super sympa, elle s’appelle Rose. Elle vient d’arriver dans notre ville et elle sera dans notre collège ! C’est génial, non ?'},
 {s:'F',t:'On a nagé ensemble tout l’après-midi et on a déjà plein de projets. Quelle journée magnifique ! Rappelle-moi vite !'}
]},
{type:'ex',id:'e20',title:'Activité 20',consigne:'1. Écoutez le message une fois. Notez les trois expressions de joie d’Anaïs. 2. Écoutez encore une fois et répondez aux questions.',tr:{ko:'1. 메시지를 듣고 아나이스의 기쁨 표현 3개를 쓰세요. 2. 다시 듣고 답하세요.',en:'1. Listen once and note Anaïs’s three expressions of joy. 2. Listen again and answer.'},items:[
 {type:'short',q:'1 — Notez les trois expressions de joie.',answer:'Je suis trop contente ! — C’est génial ! — Quelle journée magnifique !',keywords:[['contente'],['génial','genial'],['magnifique']],need:3,lines:2},
 {type:'short',q:'2a. Où est allée Anaïs hier ?',answer:'à la piscine',keywords:[['piscine']],need:1},
 {type:'short',q:'2b. Qui a-t-elle rencontré ?',answer:'Rose, une nouvelle fille qui vient d’arriver',keywords:[['rose','fille','nouvelle']],need:1},
 {type:'mcq',q:'2c. Anaïs est heureuse parce qu’elle…',options:['est sortie avec son père.','a rencontré une nouvelle copine.','a reçu un nouveau téléphone.'],answer:1,explain:'Elle est sortie avec son père, mais elle est heureuse à cause de Rose.'}
]},

{type:'audio',id:'a21',title:'Activité 21 — Des amis en conflit',plays:2,situation:{ko:'친구 사이 문제에 대한 메시지',en:'A message about a quarrel between friends',fr:'Un message à propos d’une dispute'},names:{M:'Bastien'},lines:[
 {s:'M',t:'Salut Yanis, c’est Bastien. Écoute, j’ai vu Clémence ce matin. Elle est très triste : elle pleurait au CDI, parce que tu ne lui parles plus depuis votre dispute.'},
 {s:'M',t:'Et toi, je sais que tu es en colère contre elle, mais franchement, c’est bête ! À la fin de l’année, on part tous ensemble en voyage à Barcelone avec la classe !'},
 {s:'M',t:'Alors, j’ai deux conseils pour toi : d’abord, envoie-lui un message gentil. Ensuite, invite-la à manger une glace samedi pour discuter. Allez, rappelle-moi !'}
]},
{type:'ex',id:'e21',title:'Activité 21',consigne:'1. Écoutez le message une fois. Choisissez la bonne réponse. 2. Écoutez encore une fois et répondez aux questions.',tr:{ko:'1. 메시지를 듣고 알맞은 답을 고르세요. 2. 다시 듣고 답하세요.',en:'1. Listen once and choose the right answer. 2. Listen again and answer.'},items:[
 {type:'mcq',q:'1 — Qui téléphone à qui ?',options:['Bastien téléphone à Clémence.','Clémence téléphone à Yanis.','Bastien téléphone à Yanis.'],answer:2},
 {type:'short',q:'2a. Quel est le sentiment de Clémence ?',answer:'Elle est triste.',keywords:[['trist','pleur']],need:1},
 {type:'short',q:'2b. Quel est le sentiment de Yanis ?',answer:'Il est en colère.',keywords:[['colère','colere','fâché','fache']],need:1},
 {type:'short',q:'2c. Que font les amis à la fin de l’année ?',answer:'un voyage à Barcelone avec la classe',keywords:[['voyage','barcelone']],need:1},
 {type:'short',q:'2d. Quels sont les deux conseils de Bastien ?',answer:'1. envoyer un message gentil ; 2. l’inviter à manger une glace samedi',keywords:[['message'],['glace','invit']],need:2,lines:2}
]},

{type:'audio',id:'a22',title:'Activité 22 — Les messages de Mamie',plays:2,situation:{ko:'할머니의 두 메시지',en:'Two messages from Grandma',fr:'Deux messages de la grand-mère'},names:{F:'Mamie'},lines:[
 {s:'F',t:'Message 1. Allô Victor, c’est Mamie. J’ai bien reçu ton colis ce matin. Oh, mon chéri, le dessin de ma maison avec le jardin et le chat est magnifique ! Je l’ai déjà mis sur le frigo. Je suis si heureuse ! Gros bisous.'},
 {s:'F',t:'Message 2. Victor, c’est encore Mamie. J’ai organisé un pique-nique au bord du lac avec toute la famille, dimanche prochain. Mais ta mère m’a dit que tu ne pouvais pas venir à cause de ton tournoi de judo… C’est dommage, j’avais préparé ton gâteau préféré. Je suis vraiment déçue.'}
]},
{type:'ex',id:'e22',title:'Activité 22',consigne:'1. Écoutez les deux messages une fois. Associez les messages au sentiment de la grand-mère. 2. Écoutez encore une fois et répondez aux questions.',tr:{ko:'1. 두 메시지를 듣고 할머니의 감정과 연결하세요. 2. 다시 듣고 답하세요.',en:'1. Listen once and match each message with Grandma’s feeling. 2. Listen again and answer.'},items:[
 {type:'match',q:'1 — Associez.',left:['Message 1','Message 2'],right:['triste','inquiète','heureuse','déçue'],answer:[2,3]},
 {type:'short',q:'Message 1 — Quel cadeau Victor a-t-il fait à sa grand-mère ?',answer:'un dessin de sa maison',keywords:[['dessin']],need:1},
 {type:'short',q:'Message 2 a. Qu’est-ce que la grand-mère a organisé ?',answer:'un pique-nique au bord du lac avec la famille',keywords:[['pique']],need:1},
 {type:'short',q:'Message 2 b. Quand ?',answer:'dimanche prochain',keywords:[['dimanche']],need:1}
]}
]});
