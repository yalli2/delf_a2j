DELF.chapter({
id:'ce-entrainer1', part:'ce', stage:'entrainer', num:1, order:1,
title:'S’entraîner : s’orienter et lire une correspondance', tr:{ko:'실전 연습: 정보 찾기 · 편지 읽기',en:'Practice: finding your way and reading correspondence'},
intro:{ko:'시험 형식의 연습 문제 1–6번. <b>연결하기 표(5점)</b>와 <b>편지·이메일 질문지(6점)</b>를 실제 배점으로 풀어 봅니다.',en:'Exam-style exercises 1–6: matching tables (5 pts) and correspondence questionnaires (6 pts).',fr:'Exercices 1 à 6 au format de l’examen : tableaux d’appariement (5 points) et lectures de correspondance (6 points).'},
blocks:[
{type:'note',kind:'method',title:'Méthode — Lire pour s’orienter',tr:{ko:'방법: 정보 찾기 읽기',en:'Method'},toc:true,html:
'<ul><li>Je lis bien la consigne et j’identifie la situation de communication.</li><li>Je lis d’abord les <b>situations</b> (les personnes) pour savoir quoi chercher.</li><li>Je lis ensuite les documents.</li><li>Je réponds : une activité = une personne.</li></ul>'},
{type:'text',id:'t1',label:'Exercice 1 — Document',title:'Site de la commune — Activités après l’école',source:'Document adapté pour la classe',html:
'<div style="display:flex;flex-wrap:wrap;gap:10px">'+
'<div style="flex:1 1 200px;background:#eef6ff;padding:8px;border-radius:6px"><b>1</b> 🚴<p>Tu aimes la nature et tu veux bouger ? Rejoins le club « Les Mollets d’acier » le samedi à 9 h devant le parc communal : randonnée, course et VTT !</p></div>'+
'<div style="flex:1 1 200px;background:#e8f7ee;padding:8px;border-radius:6px"><b>2</b> 📚<p>Le club de la médiathèque attend tous les passionnés de romans et de bandes dessinées, les mercredis et vendredis à 17 h.</p></div>'+
'<div style="flex:1 1 200px;background:#fff7e0;padding:8px;border-radius:6px"><b>3</b> ✏️<p>L’école primaire Jean-Jaurès cherche des jeunes volontaires pour aider les enfants à faire leurs devoirs, le jeudi après la classe. ☎ 04-71-38-20-65</p></div>'+
'<div style="flex:1 1 200px;background:#ffeef2;padding:8px;border-radius:6px"><b>4</b> 🏊<p>Vous ne savez pas nager ? Cours pour débutants à la piscine des Saules : 1 h le samedi après-midi, 12 € la séance.</p></div>'+
'<div style="flex:1 1 200px;background:#f1edff;padding:8px;border-radius:6px"><b>5</b> 👶<p>Des parents cherchent des jeunes sérieux pour s’occuper de leurs enfants quelques heures après l’école. Contactez l’association « Petits Loups ».</p></div></div>'},
{type:'ex',id:'ex1',title:'Exercice 1',consigne:'Vous habitez en Belgique. Vos amis veulent faire une activité après l’école. Vous lisez les activités proposées sur le site de votre commune. Écrivez le numéro de l’activité qui peut intéresser chaque personne.',tr:{ko:'벨기에에 살고 있습니다. 친구들이 방과 후 활동을 하고 싶어 합니다. 각 사람에게 맞는 활동 번호를 고르세요.',en:'You live in Belgium. Choose the activity number for each friend.'},items:[
 {type:'match',q:'Situation → activité n°',left:['A. Malik veut devenir instituteur.','B. Chloé dévore les romans.','C. Inès ne sait pas nager.','D. Théo fait du sport tous les jours.','E. Lucie adore s’occuper des petits enfants.'],right:['Activité 1','Activité 2','Activité 3','Activité 4','Activité 5'],answer:[2,1,3,0,4],points:5,explain:'instituteur → aider aux devoirs (3) ; romans → médiathèque (2) ; nager → piscine (4) ; sport → club (1) ; enfants → garde (5).'}
]},
{type:'text',id:'t2',label:'Exercice 2 — Document',title:'Marché de Noël — Place de la Fontaine',source:'Document adapté pour la classe',html:
'<div style="display:flex;flex-wrap:wrap;gap:10px;background:#fbf3f3;padding:8px;border-radius:6px">'+
'<div style="flex:1 1 200px;border:1px dashed #b55;padding:8px">🎲 <b>Stand n° 1</b><p>Jeux en bois, puzzles et jeux de société pour animer vos soirées d’hiver.</p></div>'+
'<div style="flex:1 1 200px;border:1px dashed #b55;padding:8px">🍪 <b>Stand n° 2</b><p>Goûtez nos pains d’épices et nos chocolats chauds, recettes de notre région !</p></div>'+
'<div style="flex:1 1 200px;border:1px dashed #b55;padding:8px">🏔️ <b>Stand n° 3</b><p>Exposition : les montagnes enneigées des Alpes en photographies et en aquarelles.</p></div>'+
'<div style="flex:1 1 200px;border:1px dashed #b55;padding:8px">🧣 <b>Stand n° 4</b><p>Gants, chaussettes et pulls en laine d’alpaga. Venez les essayer !</p></div>'+
'<div style="flex:1 1 200px;border:1px dashed #b55;padding:8px">💐 <b>Stand n° 5</b><p>Offrez des bouquets de fleurs d’hiver, une couronne de houx ou un sapin à vos proches.</p></div></div>'},
{type:'ex',id:'ex2',title:'Exercice 2',consigne:'Vous habitez en France. Vous voulez aller au marché de Noël avec vos amis. Vous lisez l’affiche. Écrivez le numéro du stand qui peut intéresser chaque personne.',tr:{ko:'프랑스에 살고 있습니다. 크리스마스 마켓 포스터를 읽고 각 친구에게 맞는 매대 번호를 고르세요.',en:'Choose the Christmas market stand for each friend.'},items:[
 {type:'match',q:'Situation → stand n°',left:['A. Nina aime les belles images de nature.','B. Hugo veut offrir des fleurs à sa mère.','C. Zoé a toujours froid et cherche un pull.','D. Adam veut goûter les spécialités locales.','E. Léon adore jouer.'],right:['Stand 1','Stand 2','Stand 3','Stand 4','Stand 5'],answer:[2,4,3,1,0],points:5}
]},
{type:'text',id:'t3',label:'Exercice 3 — Document',title:'JOURNÉE SOLIDARITÉ DANS VOTRE QUARTIER',source:'Document adapté pour la classe',html:
'<div style="display:flex;flex-wrap:wrap;gap:10px">'+
'<div style="flex:1 1 220px;padding:8px;border-left:4px solid #e67e22"><b>1. COURSE</b><p>Vous aimez courir ? Chaque tour du parc rapporte 1 € à l’association. Inscription à la mairie.</p></div>'+
'<div style="flex:1 1 220px;padding:8px;border-left:4px solid #2980b9"><b>2. QUIZ</b><p>Grand quiz d’histoire et de géographie ! Le gagnant reçoit un atlas. Inscription : 3 €.</p></div>'+
'<div style="flex:1 1 220px;padding:8px;border-left:4px solid #27ae60"><b>3. GOURMANDISES</b><p>Vous savez faire des confitures ou des biscuits ? Préparez-les : nous les vendrons 2 € le pot ou le sachet.</p></div>'+
'<div style="flex:1 1 220px;padding:8px;border-left:4px solid #8e44ad"><b>4. DONS</b><p>Vous avez des jouets, des jeux ou des livres que vous n’utilisez plus ? Donnez-les : ils seront vendus au profit des associations.</p></div>'+
'<div style="flex:1 1 220px;padding:8px;border-left:4px solid #c0392b"><b>5. ORGANISATION</b><p>Vous êtes costaud ? Aidez-nous vendredi soir à porter les tables et à monter les tentes sur la place.</p></div></div>'},
{type:'ex',id:'ex3',title:'Exercice 3',consigne:'Vous habitez dans un pays francophone. Votre quartier organise une journée « Solidarité ». Écrivez le numéro de l’activité qui peut intéresser chaque personne.',tr:{ko:'동네에서 "연대의 날"을 엽니다. 각 친구에게 맞는 활동 번호를 고르세요.',en:'Choose the solidarity-day activity for each friend.'},items:[
 {type:'match',q:'Situation → activité n°',left:['A. Mia a une chambre pleine de jouets qu’elle n’utilise plus.','B. Esteban prépare de délicieux biscuits.','C. Romane court un semi-marathon chaque année.','D. Lina connaît toutes les capitales du monde.','E. Sami est très fort : il fait de la musculation.'],right:['Activité 1','Activité 2','Activité 3','Activité 4','Activité 5'],answer:[3,2,0,1,4],points:5}
]},
{type:'note',kind:'tip',title:'Je retiens',tr:{ko:'기억하기',en:'Remember'},html:'<ul><li>Je lis les situations et les textes plusieurs fois.</li><li>Je cherche les mots importants dans chaque situation et chaque texte (<i>romans ↔ lecture, costaud ↔ fort</i>).</li><li>J’associe les mots ensemble : attention aux synonymes !</li></ul>'},
{type:'note',kind:'method',title:'Méthode — Lire une correspondance',tr:{ko:'방법: 편지 읽기',en:'Method'},toc:true,html:
'<ul><li>J’identifie la situation : qui écrit ? quand ? pourquoi ?</li><li>Je lis le message pour comprendre les informations importantes.</li><li>Je lis les questions plusieurs fois : elles suivent l’ordre du texte. Attention aux mots-questions : <b>qui ?</b> (une personne), <b>quand ?</b> (une date), <b>où ?</b> (un lieu), <b>que ?</b> (une action).</li></ul>'},
{type:'text',id:'t4',label:'Exercice 4 — Document',title:'Courriel de Clément',source:'Document adapté pour la classe',html:
'<div style="border:1px solid #bbb;border-radius:6px;background:#fff"><div style="background:#eef1f6;padding:6px;font-size:14px">De : clement.r@mail.fr<br>Date : 25 mai<br>Objet : Fête du collège</div><div style="padding:8px">'+
'<p>Salut !</p><p>Comment ça va ? Bientôt les grandes vacances et, avant, la fête du collège ! C’est le 14 juin, donc il reste moins de trois semaines pour tout préparer ! Avec ma classe, on va chanter dans la chorale. Les plus petits vont faire un défilé de costumes et les parents tiendront le stand de crêpes. La mairie nous a donné 350 € pour acheter des micros et des décorations.</p>'+
'<p>J’espère que tu pourras venir (c’est un samedi) : ça va être génial !</p><p>À bientôt,<br>Clément</p><p>PS : l’adresse du collège : 12, avenue des Platanes.</p></div></div>'},
{type:'ex',id:'ex4',title:'Exercice 4',consigne:'Vous habitez en France. Vous recevez ce courriel d’un ami français. Répondez aux questions.',tr:{ko:'프랑스 친구에게서 이메일을 받았습니다. 질문에 답하세요.',en:'You receive this email from a French friend. Answer the questions.'},items:[
 {type:'mcq',q:'Quand a lieu la fête ? En…',options:['mai.','juin.','juillet.'],answer:1,points:1,explain:'C’est le 14 juin (메일 날짜 5월 25일과 혼동 주의).'},
 {type:'mcq',q:'Que va faire Clément ?',options:['Décorer la salle.','Chanter.','Vendre des crêpes.'],answer:1,points:1},
 {type:'short',q:'Quelle activité vont faire les plus jeunes élèves ?',answer:'Un défilé de costumes.',keywords:[['défilé','defile','costume']],points:1.5},
 {type:'short',q:'Quelle est l’opinion de Clément sur la fête ?',answer:'Positive : « ça va être génial ! »',keywords:[['positi','génial','genial','bien','super','content']],points:1.5},
 {type:'mcq',q:'La fête se passe…',options:['au collège.','à la mairie.','au théâtre.'],answer:0,points:1,explain:'PS : l’adresse du collège.'}
]},
{type:'text',id:'t5',label:'Exercice 5 — Document',title:'Carte postale de Jeanne',source:'Document adapté pour la classe',html:
'<div style="border:2px dashed #a98;padding:12px;background:#fffaf0;font-family:\'Comic Sans MS\',cursive;font-size:16px;line-height:1.7"><p>Salut !</p><p>Ça va ? Je t’écris pour t’annoncer une grande nouvelle : ma mère a trouvé un nouveau travail dans une entreprise japonaise installée en Bretagne ! Nous partons vivre à Rennes dans deux semaines. Bien sûr, mes parents sont ravis, parce que maman cherchait du travail depuis un an. Mais mon frère Lucas, lui, est triste : il va quitter ses copains et son club de foot… Et moi ? C’est bizarre, mais je suis plutôt contente. Bon, la Suisse va me manquer… Mais le plus important, c’est qu’on reste tous ensemble.</p><p>Tu viendras me voir ? C’est facile en avion depuis Genève !</p><p>Bises, Jeanne</p></div>'},
{type:'ex',id:'ex5',title:'Exercice 5',consigne:'Vous recevez cette carte postale d’une amie. Répondez aux questions.',tr:{ko:'친구에게서 엽서를 받았습니다. 질문에 답하세요.',en:'You receive this postcard from a friend. Answer the questions.'},items:[
 {type:'mcq',q:'Où va partir Jeanne ?',options:['En France.','En Suisse.','Au Japon.'],answer:0,points:1,explain:'Rennes, en Bretagne = France. 일본은 회사 국적, 스위스는 지금 사는 곳.'},
 {type:'short',q:'Quand est-ce que Jeanne va partir ?',answer:'Dans deux semaines.',keywords:[['deux semaines','2 semaines','15 jours','quinze jours']],points:1.5},
 {type:'mcq',q:'La mère de Jeanne se sent…',options:['triste.','heureuse.','en colère.'],answer:1,points:1,explain:'mes parents sont ravis'},
 {type:'mcq',q:'Quelle activité fait Lucas ?',options:['Du sport.','De la musique.','Des arts plastiques.'],answer:0,points:1,explain:'son club de foot'},
 {type:'short',q:'Que vous demande Jeanne ?',answer:'De venir lui rendre visite (à Rennes).',keywords:[['visite','venir','voir']],points:1.5}
]},
{type:'text',id:'t6',label:'Exercice 6 — Document',title:'Courriel d’Adrien',source:'Document adapté pour la classe',html:
'<div style="border:1px solid #bbb;border-radius:6px;background:#fff"><div style="background:#eef1f6;padding:6px;font-size:14px">De : adrien.v@mail.fr<br>Date : 3 juillet<br>Objet : Des nouvelles</div><div style="padding:8px">'+
'<p>Salut !</p><p>J’espère que tu vas mieux ! Tu as encore mal au ventre ? Dommage, j’ai fêté mon anniversaire dimanche dernier sans toi 😢. On était seize dans ma chambre… Elle était beaucoup trop petite ! Heureusement, les copains ont apporté des quiches et des salades de fruits, alors il y avait assez à manger.</p>'+
'<p>Demain, je pars au bord de la mer avec ma tante. Je suis trop content : on va faire du surf tous les jours ! Enfin, j’espère… parce qu’elle a très mal au dos en ce moment. On verra…</p><p>Et toi, tu vas toujours chez tes cousins en Provence ? On se voit à la rentrée ?</p><p>À plus, Adrien</p></div></div>'},
{type:'ex',id:'ex6',title:'Exercice 6',consigne:'Vous recevez ce message d’un ami francophone. Répondez aux questions.',tr:{ko:'프랑스어권 친구에게서 메시지를 받았습니다. 질문에 답하세요.',en:'You receive this message from a French-speaking friend. Answer the questions.'},items:[
 {type:'mcq',q:'La fête d’anniversaire d’Adrien…',options:['s’est passée le week-end dernier.','a lieu dimanche prochain.','est prévue à la rentrée.'],answer:0,points:1,explain:'dimanche dernier + passé composé (j’ai fêté).'},
 {type:'short',q:'Quel était le problème de la chambre d’Adrien ?',answer:'Elle était trop petite (pour seize personnes).',keywords:[['petite']],points:1.5},
 {type:'short',q:'Qu’est-ce qu’on a mangé à l’anniversaire ? (2 réponses attendues)',answer:'Des quiches et des salades de fruits.',keywords:[['quiche'],['salade']],need:2,points:1.5},
 {type:'mcq',q:'Que va faire Adrien avec sa tante ? Il va…',options:['faire du surf.','visiter des musées.','faire du vélo.'],answer:0,points:1},
 {type:'mcq',q:'Où a mal la tante d’Adrien ?',options:['À la tête.','Au dos.','Aux dents.'],answer:1,points:1,explain:'« elle a très mal au dos ». 배(ventre)가 아픈 사람은 편지를 받는 친구.'}
]},
{type:'note',kind:'tip',title:'Je retiens',tr:{ko:'기억하기',en:'Remember'},html:'<ul><li>Je trouve l’identité de la personne qui écrit (ami ? professeur ? entreprise ?).</li><li>Je coche une seule réponse dans un QCM.</li><li>Je cherche les mots-questions pour m’aider à répondre.</li><li>Attention aux pièges : une date d’envoi ≠ la date de l’événement ; une personne citée ≠ la personne qui écrit.</li></ul>'}
]});
