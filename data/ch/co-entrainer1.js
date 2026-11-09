DELF.chapter({
id:'co-entrainer1', part:'co', stage:'entrainer', num:1, order:1,
title:'S’entraîner : annonces et messages (exercices 1 à 6)',
tr:{ko:'실전 연습: 안내 방송과 음성 메시지 (연습 1~6)',en:'Practice: announcements and messages (exercises 1–6)'},
intro:{ko:'DELF A2 듣기 <b>1번(안내 방송, 5점)</b>과 <b>2번(자동응답기 메시지, 6점)</b> 유형의 실전 연습입니다. 시험처럼 두 번 듣고 답하세요.',en:'Exam-style practice for listening exercise 1 (announcements, 5 points) and exercise 2 (voicemail, 6 points).',fr:'Entraînement aux exercices 1 (annonces, 5 points) et 2 (messages sur répondeur, 6 points) de l’épreuve.'},
blocks:[
{type:'note',kind:'method',title:'Comprendre une annonce et des instructions orales',tr:{ko:'안내 방송과 지시 이해하기',en:'Announcements and instructions'},toc:true,html:'<ul><li>J’ai <b>30 secondes</b> pour lire les 5 questions.</li><li>Je note sur un papier les mots connus et compris.</li><li>Après la 1<sup>re</sup> écoute, je réponds aux questions faciles.</li><li>Je garde la 2<sup>e</sup> écoute pour les questions à réponse courte.</li><li>La 1<sup>re</sup> question est souvent une question de <b>compréhension globale</b> (quel type de message ?).</li></ul>'},
{type:'audio',id:'a1',title:'Exercice 1 — À la cafétéria',plays:2,situation:{ko:'카페테리아 안내 방송',en:'Announcement in a cafeteria',fr:'Vous entendez cette annonce à la cafétéria.'},names:{N:'Annonce'},lines:[
 {s:'N',t:'Chers clients, votre attention s’il vous plaît. La cafétéria va fermer dans 20 minutes, à 14 heures 30.'},
 {s:'N',t:'Il n’y a plus d’entrées ni de salades, mais il reste encore des desserts : n’hésitez pas à aller chercher une part de tarte au citron au comptoir.'},
 {s:'N',t:'Quand vous avez terminé, merci de poser vos plateaux et vos verres sur l’étagère, près de la sortie.'},
 {s:'N',t:'Toute l’équipe vous souhaite une bonne fin de journée !'}
]},
{type:'ex',id:'e1',title:'Exercice 1 (5 points)',consigne:'Vous entendez cette annonce à la cafétéria. Lisez les questions. Écoutez le document puis répondez.',tr:{ko:'카페테리아에서 이 안내 방송을 듣습니다. 질문을 읽고, 녹음을 들은 후 답하세요.',en:'You hear this announcement in a cafeteria. Read the questions, listen, then answer.'},items:[
 {type:'mcq',q:'1. Ce message est…',options:['A. une publicité.','B. une commande.','C. une information.'],answer:2,points:1,explain:'Question globale : la cafétéria informe ses clients.'},
 {type:'mcq',q:'2. La cafétéria ferme…',options:['A. dans 20 minutes.','B. pendant 20 minutes.','C. à 1 heure 20.'],answer:0,points:1,explain:'« dans 20 minutes » = 20분 후에. Attention à l’expression !'},
 {type:'mcq',q:'3. Vous pouvez aller chercher…',options:['🥧 A. une tarte','🥗 B. une salade','🍟 C. des frites'],answer:0,points:1,explain:'On entend « entrées, salades, desserts » mais il reste seulement des desserts.'},
 {type:'short',q:'4. Que faut-il mettre sur l’étagère près de la sortie ? (2 réponses)',answer:'les plateaux et les verres',keywords:[['plateau'],['verre']],need:2,points:1,explain:'L’orthographe n’est pas importante, mais il faut les deux objets.'},
 {type:'short',q:'5. Que souhaite la personne aux clients à la fin de l’annonce ?',answer:'une bonne fin de journée',keywords:[['bonne fin de journée','bonne fin de journee']],need:1,points:1,explain:'Il faut écrire la formule complète.'}
]},

{type:'audio',id:'a2',title:'Exercice 2 — Au cinéma',plays:2,situation:{ko:'영화관 안내 방송',en:'Announcement in a cinema',fr:'Vous entendez cette annonce au cinéma.'},names:{M:'Réalisateur'},lines:[
 {s:'M',t:'Bonsoir à tous ! Excusez-moi de vous déranger avant la séance. Je m’appelle Damien Rocher, je suis réalisateur et je prépare un nouveau film d’action qui se passe à Marseille.'},
 {s:'M',t:'Je cherche des jeunes de 13 à 17 ans pour jouer dans ce film. Pas besoin d’expérience !'},
 {s:'M',t:'Si vous êtes intéressés, venez me parler après la fin du film, je serai devant la salle 3.'},
 {s:'M',t:'Le jour du rendez-vous, vous allez vous présenter devant une caméra et dire quelques phrases. Bonne séance !'}
]},
{type:'ex',id:'e2',title:'Exercice 2 (5 points)',consigne:'Vous entendez cette annonce au cinéma. Lisez les questions. Écoutez le document puis répondez.',tr:{ko:'영화관에서 이 안내 방송을 듣습니다. 질문을 읽고, 녹음을 들은 후 답하세요.',en:'You hear this announcement in a cinema. Read the questions, listen, then answer.'},items:[
 {type:'mcq',q:'1. La personne qui fait l’annonce…',options:['A. travaille dans le cinéma.','B. fait des études de cinéma.','C. donne des cours de cinéma.'],answer:0,points:1,explain:'Il est réalisateur.'},
 {type:'short',q:'2. L’annonce s’adresse à des jeunes de quel âge ?',answer:'de 13 à 17 ans',keywords:[['13'],['17']],need:2,points:1},
 {type:'mcq',q:'3. La personne cherche des jeunes pour jouer…',options:['A. dans une publicité.','B. dans un film d’action.','C. dans une équipe de sport.'],answer:1,points:1},
 {type:'mcq',q:'4. Vous pouvez venir parler avec la personne…',options:['A. avant le début du film.','B. pendant la séance du film.','C. après la fin du film.'],answer:2,points:1},
 {type:'mcq',q:'5. Vous allez au rendez-vous. Qu’est-ce qu’on vous demande de faire ?',options:['🎥 A. parler devant une caméra','📹 B. filmer dans un parc','📸 C. faire des photos dans un photomaton'],answer:0,points:1}
]},

{type:'audio',id:'a3',title:'Exercice 3 — Au supermarché',plays:2,situation:{ko:'슈퍼마켓 안내 방송',en:'Announcement in a supermarket',fr:'Vous entendez cette annonce au supermarché.'},names:{F:'Annonce'},lines:[
 {s:'F',t:'Chers clients, aujourd’hui, c’est la Journée de la santé dans votre magasin Marché Plus !'},
 {s:'F',t:'Pour bien commencer l’après-midi, nous vous invitons sur le parking, devant l’entrée du magasin, pour une activité gratuite.'},
 {s:'F',t:'À partir de 15 heures, venez découvrir le yoga ! Une séance de trente minutes pour respirer et vous détendre.'},
 {s:'F',t:'La séance est animée par Mehdi, professeur de yoga à la salle de sport de la ville. Venez nombreux !'}
]},
{type:'ex',id:'e3',title:'Exercice 3 (5 points)',consigne:'Vous entendez cette annonce au supermarché. Lisez les questions. Écoutez puis répondez.',tr:{ko:'슈퍼마켓에서 이 안내 방송을 듣습니다. 질문을 읽고, 들은 후 답하세요.',en:'You hear this announcement in a supermarket. Read the questions, listen, then answer.'},items:[
 {type:'short',q:'1. Pour quelle journée spéciale entendez-vous cette annonce ?',answer:'la Journée de la santé',keywords:[['santé','sante']],need:1,points:1},
 {type:'mcq',q:'2. Vous pouvez faire l’activité…',options:['A. dans le hall.','B. à l’intérieur du supermarché.','C. à l’extérieur du supermarché.'],answer:2,points:1,explain:'sur le parking, devant l’entrée = dehors.'},
 {type:'short',q:'3. À quelle heure commence la nouvelle activité ?',answer:'à 15 heures',keywords:[['15','3 h','trois heures']],need:1,points:1},
 {type:'mcq',q:'4. Quelle activité allez-vous découvrir ?',options:['🥊 A. la boxe','🧘 B. le yoga','🎸 C. un concert'],answer:1,points:1},
 {type:'short',q:'5. Qui est Mehdi ?',answer:'un professeur de yoga',keywords:[['prof','professeur','animateur','coach']],need:1,points:1}
]},

{type:'note',kind:'method',title:'Comprendre un message oral',tr:{ko:'음성 메시지 이해하기',en:'Understanding a voicemail'},toc:true,html:'<ul><li>Attention : 30 secondes de pause, mais <b>6 questions</b> !</li><li>C’est toujours un <b>message sur un répondeur</b>, d’une personne connue ou inconnue.</li><li>Concentrez-vous sur l’information donnée : une situation ou une <b>demande particulière</b>.</li><li>Les numéros de téléphone se disent par groupes de deux chiffres.</li><li>Faites attention aux <b>expressions du sentiment</b> (à la fin du message).</li></ul>'},
{type:'audio',id:'a4',title:'Exercice 4 — Le cabinet dentaire',plays:2,situation:{ko:'치과에서 남긴 메시지',en:'A message from the dentist’s office',fr:'Message du cabinet dentaire'},names:{F:'Secrétaire'},lines:[
 {s:'F',t:'Bonjour, ici Sandrine, la secrétaire du cabinet dentaire du docteur Morel. Je vous appelle pour votre rendez-vous de vendredi prochain, à 10 heures 30.'},
 {s:'F',t:'Malheureusement, le docteur Morel a eu un accident : il est tombé à vélo et il s’est cassé le bras. Il ne peut pas travailler pendant un mois.'},
 {s:'F',t:'Ne vous inquiétez pas : la semaine prochaine, un autre dentiste, le docteur Benali, va le remplacer et pourra vous recevoir.'},
 {s:'F',t:'Pouvez-vous me rappeler au 01 53 48 26 71 pour confirmer ? Le cabinet est fermé lundi, alors appelez-moi plutôt mardi. Merci et à bientôt.'}
]},
{type:'ex',id:'e4',title:'Exercice 4 (6 points)',consigne:'Vous entendez ce message. Lisez les questions. Écoutez le document puis répondez.',tr:{ko:'이 메시지를 듣습니다. 질문을 읽고, 녹음을 들은 후 답하세요.',en:'You hear this message. Read the questions, listen, then answer.'},items:[
 {type:'mcq',q:'1. La personne téléphone pour…',options:['A. demander de l’aide.','B. poser une question.','C. donner une information.'],answer:2,points:1},
 {type:'gap',q:'2. Quand est votre rendez-vous ?',text:'Heure : {{10 h 30|10h30|10 heures 30}} — Jour : {{vendredi|vendredi prochain}}',points:1},
 {type:'mcq',q:'3. Le docteur a eu un accident à…',options:['🦵 A. la jambe','💪 B. le bras','🤕 C. la tête'],answer:1,points:1,explain:'« il s’est cassé le bras ».'},
 {type:'mcq',q:'4. Que va-t-il se passer la semaine prochaine ?',options:['A. Le cabinet sera fermé.','B. Un autre dentiste va remplacer le docteur.','C. Le docteur va prendre deux rendez-vous.'],answer:1,points:1},
 {type:'short',q:'5. Quel est le numéro de la personne ?',answer:'01 53 48 26 71',keywords:[['0153482671','01 53 48 26 71']],need:1,points:1},
 {type:'mcq',q:'6. Vous pouvez téléphoner…',options:['A. lundi.','B. mardi.'],answer:1,points:1,explain:'Deux jours sont nommés, mais le cabinet est fermé lundi.'}
]},

{type:'audio',id:'a5',title:'Exercice 5 — Le message de Papi',plays:2,situation:{ko:'할아버지의 메시지',en:'A message from Grandpa',fr:'Message du grand-père'},names:{M:'Papi'},lines:[
 {s:'M',t:'Allô, mon grand, c’est Papi. Tu sais que dimanche, c’est l’anniversaire de ta grand-mère ? Elle va avoir 70 ans !'},
 {s:'M',t:'Je voudrais lui préparer une surprise, mais chut, elle ne sait rien ! Est-ce que tu peux appeler ta cousine Camille et ton oncle Patrick pour les inviter ?'},
 {s:'M',t:'Rendez-vous dimanche au restaurant « Le Moulin », au bord de la rivière. Mamie et moi, on arrive à 13 heures, alors toi, viens à 12 heures 45, pas plus tard !'},
 {s:'M',t:'Oh, je suis tellement content de faire cette fête avec toute la famille ! À dimanche !'}
]},
{type:'ex',id:'e5',title:'Exercice 5 (6 points)',consigne:'Vous entendez ce message. Lisez les questions. Écoutez le document puis répondez.',tr:{ko:'이 메시지를 듣습니다. 질문을 읽고, 녹음을 들은 후 답하세요.',en:'You hear this message. Read the questions, listen, then answer.'},items:[
 {type:'mcq',q:'1. Le grand-père appelle parce que c’est…',options:['A. son anniversaire.','B. l’anniversaire du frère.','C. l’anniversaire de la grand-mère.'],answer:2,points:1},
 {type:'mcq',q:'2. Le grand-père appelle pour…',options:['A. faire une surprise.','B. préparer une surprise.','C. répondre à une surprise.'],answer:1,points:1},
 {type:'short',q:'3. Qui le grand-père vous demande-t-il de contacter ? (2 personnes)',answer:'la cousine Camille et l’oncle Patrick',keywords:[['camille','cousine'],['patrick','oncle']],need:2,points:1},
 {type:'short',q:'4. Où doit se passer la rencontre dimanche ?',answer:'au restaurant « Le Moulin »',keywords:[['restaurant','moulin']],need:1,points:1},
 {type:'mcq',q:'5. À quelle heure devez-vous venir ?',options:['12 h 15','12 h 30','12 h 45'],answer:2,points:1,explain:'13 h = l’heure des grands-parents ; vous : 12 h 45.'},
 {type:'short',q:'6. Quel est le sentiment du grand-père à la fin de l’appel ?',answer:'Il est content / heureux.',keywords:[['content','heureux','joie']],need:1,points:1}
]},

{type:'audio',id:'a6',title:'Exercice 6 — Un petit travail',plays:2,situation:{ko:'아르바이트 제안 메시지',en:'A message offering a small job',fr:'Un message pour un petit travail'},names:{M:'Gérard Lambert'},lines:[
 {s:'M',t:'Bonjour, je suis Gérard Lambert, le papa d’Agathe, ta camarade de classe. Je t’appelle parce que je cherche quelqu’un pour un petit travail.'},
 {s:'M',t:'Agathe m’a dit que tu adores les animaux. Voilà : nous partons tout le week-end chez des amis, du samedi matin au dimanche soir.'},
 {s:'M',t:'Notre chien, Filou, reste à la maison parce qu’il est malade en voiture. Tu devras venir deux fois par jour pour le promener dans le parc et lui donner à manger.'},
 {s:'M',t:'Est-ce qu’on peut se rencontrer jeudi soir, après tes cours ? Rappelle-moi. Merci !'}
]},
{type:'ex',id:'e6',title:'Exercice 6 (6 points)',consigne:'Vous entendez ce message. Lisez les questions. Écoutez le document puis répondez.',tr:{ko:'이 메시지를 듣습니다. 질문을 읽고, 녹음을 들은 후 답하세요.',en:'You hear this message. Read the questions, listen, then answer.'},items:[
 {type:'mcq',q:'1. Gérard Lambert téléphone pour…',options:['A. offrir un travail.','B. proposer son aide.','C. demander du travail.'],answer:0,points:1},
 {type:'short',q:'2. Qu’est-ce qu’Agathe a dit à son père sur vous ?',answer:'que vous adorez les animaux',keywords:[['animaux','animal']],need:1,points:1},
 {type:'mcq',q:'3. Combien de temps la famille d’Agathe va-t-elle partir ?',options:['A. Toute une nuit.','B. Tout un week-end.','C. Toute une semaine.'],answer:1,points:1},
 {type:'short',q:'4. Pour quelle raison le père laisse-t-il le chien à la maison ?',answer:'parce que le chien est malade en voiture',keywords:[['malade'],['voiture']],need:2,points:1},
 {type:'mcq',q:'5. Vous devez…',options:['🎾 A. jouer à la balle avec le chien','🐕 B. promener le chien','🛁 C. laver le chien'],answer:1,points:1},
 {type:'short',q:'6. Quand le père vous propose-t-il de le rencontrer ?',answer:'jeudi soir, après les cours',keywords:[['jeudi']],need:1,points:1}
]},
{type:'note',kind:'tip',title:'Je retiens',tr:{ko:'기억하기',en:'Remember'},html:'<ul><li>✔ Je trouve les questions <b>dans l’ordre</b> du document.</li><li>✔ L’orthographe n’est pas importante, mais le correcteur doit comprendre.</li><li>✔ Je coche <b>une seule</b> réponse.</li><li>✔ Je lis d’abord les questions et j’imagine les réponses possibles.</li><li>✔ J’écris des informations simples, pas de phrase complète.</li><li>✔ Je relis mes réponses pendant les 30 dernières secondes.</li><li>✔ Je cherche la <b>raison du message</b>, puis les détails à la 2<sup>e</sup> écoute.</li></ul>'}
]});
