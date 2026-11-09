DELF.chapter({
id:'co-p1', part:'co', stage:'preparer', num:1, order:1,
title:'Comprendre une annonce et des instructions orales',
tr:{ko:'안내 방송과 구두 지시 이해하기',en:'Understanding announcements and spoken instructions'},
intro:{ko:'역, 학교, 상점, 박물관 등 <b>공공장소의 안내 방송</b>과 <b>지시</b>를 듣고 장소, 시간, 행동, 메시지의 목적을 파악하는 연습입니다.',en:'Practise understanding announcements and instructions in public places: place, time, actions and purpose.',fr:'S’entraîner à comprendre des annonces et des instructions dans des lieux publics : lieu, heure, actions, but du message.'},
blocks:[
{type:'note',kind:'method',title:'Comprendre une information',tr:{ko:'정보 이해하기',en:'Understanding information'},toc:true,html:'<ul><li>Écoutez d’abord <b>le lieu</b> : gare, école, magasin, théâtre… Les mots-clés vous aident (<span class="say">quai, voie, train</span> = la gare).</li><li>Repérez ensuite <b>les chiffres</b> : heures, numéros, prix, étages.</li><li>Dans une instruction, les verbes sont souvent à l’<b>impératif</b> : <span class="say">Attachez votre ceinture. Tournez à gauche. Présentez votre billet.</span></li></ul>'},

{type:'audio',id:'a1',title:'Activité 1 — Cinq annonces',plays:2,situation:{ko:'다섯 개의 안내 방송',en:'Five announcements',fr:'Cinq annonces dans des lieux différents'},names:{N:'Annonce',M:'Annonce'},lines:[
 {s:'N',t:'Annonce 1. Mesdames et messieurs, le spectacle va commencer dans cinq minutes. Merci de rejoindre votre place et d’éteindre vos téléphones. Nous vous demandons le silence pendant toute la pièce. Les photos de la scène sont interdites.'},
 {s:'M',t:'Annonce 2. Attention, chers élèves ! La sonnerie va retentir. Rangez vos affaires et sortez dans la cour par la porte principale. Les élèves de sixième attendent leur professeur près du préau.'},
 {s:'M',t:'Annonce 3. Les joueurs des Aigles de Brest sont attendus sur le terrain numéro 2. Le capitaine doit passer au vestiaire pour récupérer les nouveaux maillots de l’équipe. Le match commence à 15 heures.'},
 {s:'N',t:'Annonce 4. Voyageurs à destination de Bordeaux, votre car partira du quai C dans dix minutes. Merci de déposer vos valises dans la soute. Attention : le parking de la gare routière ferme à 22 heures.'},
 {s:'M',t:'Annonce 5. Et voici la météo pour demain. Dans le nord du pays, le ciel restera gris toute la journée, avec quelques gouttes. Au bord de la mer, en Bretagne, le vent soufflera fort. Il fera 14 degrés à Lille.'}
]},
{type:'ex',id:'e1',title:'Activité 1',consigne:'1. Écoutez les cinq annonces. Reliez chaque annonce à l’image correspondante. 2. Écoutez encore une fois et associez à chaque message le groupe de mots entendus.',tr:{ko:'1. 다섯 개의 안내 방송을 듣고 알맞은 그림과 연결하세요. 2. 다시 듣고 각 메시지와 들은 단어 묶음을 연결하세요.',en:'1. Listen to the five announcements and match each one with the right picture. 2. Listen again and match each message with the group of words you hear.'},items:[
 {type:'match',q:'1 — Reliez chaque annonce à l’image.',left:['Annonce 1','Annonce 2','Annonce 3','Annonce 4','Annonce 5'],right:['🎭 A. le hall d’un théâtre','🚌 B. une gare routière avec des valises','📺 C. un présentateur météo devant une carte','🏫 D. des élèves dans une cour','🏀 E. une équipe de sport'],answer:[0,3,4,1,2],explain:'1 spectacle/scène → théâtre ; 2 élèves/cour → école ; 3 terrain/maillots → équipe ; 4 car/quai/valises → gare routière ; 5 météo → présentateur.'},
 {type:'match',q:'2 — Associez chaque message au groupe de mots entendus.',left:['Message 1','Message 2','Message 3','Message 4','Message 5'],right:['valises, parking, car','silence, place, scène','nord, mer, gris','élèves, porte, cour','terrain, capitaine, maillots'],answer:[1,3,4,0,2]}
]},

{type:'audio',id:'a2',title:'Activité 2 — Au service des visas',plays:2,situation:{ko:'비자 사무실 안내 방송',en:'Announcement at a visa office',fr:'Annonce dans un service des visas'},names:{F:'Agent d’accueil'},lines:[
 {s:'F',t:'Bonjour et bienvenue au service des visas. Avant de prendre votre ticket, préparez votre demande de visa avec votre passeport.'},
 {s:'F',t:'Ensuite, écrivez vos informations personnelles sur le formulaire bleu. Utilisez un stylo noir, s’il vous plaît. N’oubliez pas de signer le formulaire en bas de la page.'},
 {s:'F',t:'Puis, passez au guichet numéro 3 pour payer. Attention : nous acceptons seulement les chèques. Enfin, entrez dans la salle d’attente et attendez qu’on appelle votre numéro.'},
 {s:'F',t:'Dans la salle, les ordinateurs portables sont interdits. Merci de votre compréhension.'}
]},
{type:'ex',id:'e2',title:'Activité 2',consigne:'1. Écoutez l’annonce une fois. Cochez les objets nommés dans l’annonce. 2. Écoutez encore une fois. Classez les actions dans l’ordre.',tr:{ko:'1. 한 번 듣고 언급된 물건에 표시하세요. 2. 다시 듣고 행동을 순서대로 배열하세요.',en:'1. Listen once and tick the objects named. 2. Listen again and put the actions in order.'},items:[
 {type:'multi',q:'1 — Quels objets sont nommés ? (3 réponses)',options:['🛂 A. un passeport','💳 B. une carte bancaire','🖊️ C. un stylo','💻 D. un ordinateur portable','💶 E. des billets et des pièces'],answer:[0,2,3],explain:'passeport, stylo noir, ordinateurs portables (interdits). On paie par chèque : pas de carte ni d’espèces.'},
 {type:'order',q:'2 — Classez les actions dans l’ordre (1 à 5).',items:['préparer la demande de visa','écrire des informations','signer un formulaire','payer avec un chèque','entrer dans une salle']}
]},

{type:'audio',id:'a3',title:'Activité 3 — Une leçon de conduite',plays:2,situation:{ko:'자동차 안에서 듣는 지시',en:'Instructions in a car',fr:'Des instructions dans une voiture'},names:{M:'Moniteur',M2:'Malik'},lines:[
 {s:'M',t:'Bonjour Malik ! Alors, c’est ta première leçon de conduite. Tu es prêt ?'},
 {s:'M2',t:'Oui, un peu stressé, mais prêt !'},
 {s:'M',t:'Très bien. D’abord, attache ta ceinture. Ensuite, règle bien ton rétroviseur. Voilà. Maintenant, mets la clé et démarre le moteur.'},
 {s:'M',t:'On va rouler doucement dans le centre-ville. Attention, en ville, la vitesse maximale, c’est 50 kilomètres à l’heure. Pas plus ! Je suis ton moniteur, je suis là pour t’aider. Allez, on y va.'}
]},
{type:'ex',id:'e3',title:'Activité 3',consigne:'1. Écoutez l’instruction une fois. Répondez aux questions. 2. Écoutez encore une fois et répondez.',tr:{ko:'1. 지시를 한 번 듣고 답하세요. 2. 다시 듣고 답하세요.',en:'1. Listen once and answer. 2. Listen again and answer.'},items:[
 {type:'mcq',q:'a. Où se trouve Malik ?',options:['🚌 Dans un bus.','✈️ Dans un avion.','🚗 Dans une voiture.'],answer:2},
 {type:'mcq',q:'b. Que va faire Malik ?',options:['Voyager.','Conduire.','Se promener.'],answer:1,explain:'« ta première leçon de conduite ».'},
 {type:'short',q:'2a. Quelles sont les trois premières actions de Malik ?',answer:'attacher sa ceinture, régler le rétroviseur, démarrer le moteur',keywords:[['ceinture'],['rétroviseur','retroviseur'],['démarr','demarr','moteur','clé','cle']],need:3,lines:2},
 {type:'short',q:'2b. Pourquoi le moniteur parle-t-il de 50 km/heure ?',answer:'C’est la vitesse maximale en ville.',keywords:[['maxim','limite','pas plus'],['ville']],need:2},
 {type:'short',q:'2c. Quel est le métier de la personne avec Malik ?',answer:'moniteur d’auto-école',keywords:[['moniteur','professeur de conduite','auto-école','auto ecole']],need:1}
]},

{type:'audio',id:'a4',title:'Activité 4 — Un message dans la cuisine',plays:2,situation:{ko:'부엌에서 녹음한 메시지',en:'A message recorded in a kitchen',fr:'Un message enregistré dans une cuisine'},names:{F:'Odile'},lines:[
 {s:'F',t:'Bonjour à tous ! Je m’appelle Odile et je vous parle depuis ma cuisine. En ce moment, je prépare un gâteau aux pommes, comme le faisait ma grand-mère.'},
 {s:'F',t:'Vous savez, aujourd’hui, à la télévision et sur Internet, on voit beaucoup de nouvelles recettes. Elles sont jolies sur les photos, mais elles sont trop compliquées, trop chères, avec des produits qu’on ne trouve nulle part !'},
 {s:'F',t:'Moi, je pense que la cuisine doit rester simple. Des œufs, de la farine, du beurre, des fruits de saison… et beaucoup d’amour. C’est ça, la vraie cuisine !'}
]},
{type:'ex',id:'e4',title:'Activité 4',consigne:'1. Écoutez ce message une fois. Répondez aux questions. 2. Écoutez encore une fois et répondez.',tr:{ko:'1. 메시지를 한 번 듣고 답하세요. 2. 다시 듣고 답하세요.',en:'1. Listen once and answer. 2. Listen again and answer.'},items:[
 {type:'mcq',q:'a. Que fait la personne dans sa cuisine ?',options:['📻 Elle écoute la radio.','🍽️ Elle prend son repas.','🎂 Elle prépare un gâteau.'],answer:2},
 {type:'mcq',q:'b. Quel est le but de ce message ?',options:['Donner une recette.','Exprimer un avis.','Commander un repas.'],answer:1,explain:'« Moi, je pense que… » → 의견 표현. 재료는 말하지만 레시피를 알려주는 것이 목적은 아닙니다.'},
 {type:'short',q:'2a. Le message parle de…',answer:'la cuisine simple / les recettes de cuisine',keywords:[['cuisine','recette']],need:1},
 {type:'mcq',q:'2b. La personne qui parle critique…',options:['les nouvelles recettes.','les recettes traditionnelles.','les recettes des parents.'],answer:0,explain:'« les nouvelles recettes… trop compliquées, trop chères ».'}
]},

{type:'note',kind:'method',title:'Comprendre des indications simples',tr:{ko:'간단한 안내 이해하기',en:'Understanding simple directions'},toc:true,html:'<ul><li>Les <b>prépositions de lieu</b> : <span class="say">à côté de, en face de, au premier étage, au rez-de-chaussée, au fond</span>.</li><li>Les <b>directions</b> : <span class="say">tournez à droite, à gauche, continuez tout droit, au rond-point, prenez la deuxième sortie</span>.</li><li>Les <b>interdictions</b> : <span class="say">Il est interdit de… Défense de… Merci de ne pas…</span></li></ul>'},
{type:'audio',id:'a5',title:'Activité 5 — Trois messages',plays:2,situation:{ko:'세 곳의 안내 방송',en:'Three announcements',fr:'Trois annonces dans trois lieux'},names:{N:'Annonce',M:'Annonce'},lines:[
 {s:'N',t:'Message 1. Chers visiteurs, le musée va fermer dans vingt minutes. Les portes fermeront à 17 heures 45. Les salles de peinture sont déjà fermées. La sortie se trouve au rez-de-chaussée, à côté de la boutique de souvenirs.'},
 {s:'M',t:'Message 2. Votre attention, s’il vous plaît. Nous avons retrouvé le petit Lucas, cinq ans, au rayon des jouets. Il porte une casquette rouge, un sac à dos vert et un pantalon marron. Ses parents sont attendus à l’accueil du magasin, près des caisses.'},
 {s:'N',t:'Message 3. Bienvenue à la piscine municipale. Les enfants de moins de dix ans vont au premier étage, au petit bassin. Les adultes et les nageurs du club vont au deuxième étage, au grand bassin. Rappel : il est interdit de courir autour des bassins et de manger dans les vestiaires.'}
]},
{type:'ex',id:'e5',title:'Activité 5',consigne:'1. Écoutez les trois messages une fois. Écrivez le lieu de la situation et trois mots entendus. 2. Écoutez encore une fois et répondez aux questions.',tr:{ko:'1. 세 메시지를 듣고 장소와 그 근거가 되는 단어 3개를 쓰세요. 2. 다시 듣고 질문에 답하세요.',en:'1. Listen once, write the place and three words that prove it. 2. Listen again and answer.'},items:[
 {type:'short',q:'1 — Message 1 : lieu + 3 mots entendus',answer:'un musée — visiteurs, salles de peinture, boutique de souvenirs',keywords:[['musée','musee'],['visiteur','peinture','souvenir','salle']],need:2,lines:2},
 {type:'short',q:'1 — Message 2 : lieu + 3 mots entendus',answer:'un magasin / un supermarché — rayon des jouets, accueil, caisses',keywords:[['magasin','supermarch','hypermarch'],['rayon','jouet','caisse','accueil']],need:2,lines:2},
 {type:'short',q:'1 — Message 3 : lieu + 3 mots entendus',answer:'une piscine — bassin, nageurs, vestiaires',keywords:[['piscine'],['bassin','nageur','vestiaire']],need:2,lines:2},
 {type:'short',q:'2 — Message 1 a. À quelle heure ferme-t-on les portes ?',answer:'17 h 45',keywords:[['17 h 45','17h45','17 heures 45','17:45','5 h 45','six heures moins le quart']],need:1},
 {type:'short',q:'2 — Message 1 b. Où est la sortie ?',answer:'au rez-de-chaussée, à côté de la boutique de souvenirs',keywords:[['rez','boutique']],need:1},
 {type:'short',q:'2 — Message 2 a. Où a-t-on retrouvé le petit Lucas ?',answer:'au rayon des jouets',keywords:[['jouet']],need:1},
 {type:'match',q:'2 — Message 2 b. Associez chaque couleur entendue à un objet.',left:['🟥 rouge','🟩 vert','🟫 marron'],right:['👕 A. un pull','🧢 B. une casquette','🎒 C. un sac à dos','👟 D. des baskets','👖 E. un pantalon'],answer:[1,2,4]},
 {type:'short',q:'2 — Message 3 a. Qui va au premier étage ? Qui va au deuxième étage ?',answer:'1er étage : les enfants de moins de dix ans ; 2e étage : les adultes (et les nageurs du club)',keywords:[['enfant'],['adulte','nageur']],need:2,lines:2},
 {type:'short',q:'2 — Message 3 b. Deux choses sont interdites. Lesquelles ?',answer:'courir autour des bassins ; manger dans les vestiaires',keywords:[['cour'],['mang']],need:2}
]},

{type:'audio',id:'a6',title:'Activité 6 — Les costumes du spectacle',plays:1,situation:{ko:'학교 공연 의상 안내',en:'Announcement about costumes for the school show',fr:'Annonce au collège pour les costumes du spectacle'},names:{F:'Professeure de théâtre'},lines:[
 {s:'F',t:'Bonjour à tous ! Voici les costumes pour le spectacle de fin d’année. Écoutez bien, c’est selon votre taille.'},
 {s:'F',t:'Si vous mesurez moins d’un mètre quarante, vous portez le tee-shirt bleu. Entre un mètre quarante et un mètre cinquante, c’est la chemise à carreaux. Et si vous mesurez plus d’un mètre cinquante, vous prenez la robe noire.'},
 {s:'F',t:'Pour la dernière danse, c’est selon votre âge : les élèves de douze ans mettent le short vert, ceux de quatorze ans la robe rouge, et les grands de seize ans gardent la robe noire.'}
]},
{type:'ex',id:'e6',title:'Activité 6',consigne:'Écoutez l’annonce une fois. Cochez dans le tableau les bons vêtements.',tr:{ko:'방송을 한 번 듣고 표에 알맞은 옷을 표시하세요.',en:'Listen once and tick the right clothes in the table.'},items:[
 {type:'match',q:'Pour chaque ligne du tableau, choisissez le bon vêtement.',left:['Taille < 1,40 m','Entre 1,40 m et 1,50 m','Taille > 1,50 m','12 ans','14 ans','16 ans'],right:['👗 robe rouge','🖤 robe noire','🩳 short vert','🧥 chemise à carreaux','👕 tee-shirt bleu'],answer:[4,3,1,2,0,1]}
]},

{type:'audio',id:'a7',title:'Activité 7 — À la gare',plays:2,situation:{ko:'기차역 안내 방송',en:'Station announcement',fr:'Annonce en gare'},names:{N:'Annonce SNCF'},lines:[
 {s:'N',t:'Votre attention, s’il vous plaît. Le TER de 7 heures 40 à destination de Lille partira avec un retard de vingt-cinq minutes, à 8 heures 05, voie 4.'},
 {s:'N',t:'Le TGV de 8 heures 10 à destination de Marseille partira à 8 heures 30. Il partira de la voie 7 au lieu de la voie 2.'},
 {s:'N',t:'L’Intercités de 8 heures 25 à destination de Clermont-Ferrand est supprimé. Les voyageurs peuvent prendre le train suivant, à 9 heures 50, voie 1.'},
 {s:'N',t:'Enfin, l’Eurostar de 9 heures pour Londres partira à l’heure, voie 12. Merci de présenter votre passeport avant de monter. Nous vous souhaitons un bon voyage.'}
]},
{type:'ex',id:'e7',title:'Activité 7',consigne:'1. Écoutez l’annonce une fois. Complétez le tableau des départs. 2. Écoutez encore une fois. Vous entendez quatre noms de train. Lesquels ?',tr:{ko:'1. 방송을 듣고 출발 시간표를 완성하세요. 2. 다시 듣고 네 가지 열차 이름을 쓰세요.',en:'1. Listen once and complete the departures board. 2. Listen again: which four train names do you hear?'},items:[
 {type:'gap',q:'1 — Complétez le tableau.',text:'<table><tr><th>Horaire de départ</th><th>Pour…</th><th>Changement d’horaire</th><th>Voie n°</th></tr><tr><td>7 h 40</td><td>{{Lille}}</td><td>départ {{8 h 05|8h05|8 heures 05}}</td><td>{{4}}</td></tr><tr><td>{{8 h 10|8h10|8 heures 10}}</td><td>{{Marseille}}</td><td>départ 8 h 30</td><td>{{7}}</td></tr><tr><td>8 h 25</td><td>{{Clermont-Ferrand|Clermont Ferrand|Clermont}}</td><td>[[*train supprimé|départ à l’heure|retard de 10 minutes]]</td><td>—</td></tr><tr><td>9 h</td><td>{{Londres}}</td><td>[[*à l’heure|retard|supprimé]]</td><td>{{12}}</td></tr></table>'},
 {type:'gap',q:'2 — Les quatre noms de train.',text:'1. T{{ER}} — 2. T{{GV}} — 3. I{{ntercités|ntercites}} — 4. E{{urostar}}'}
]},

{type:'audio',id:'a8',title:'Activité 8 — L’audio-guide',plays:2,situation:{ko:'과학관 오디오 가이드',en:'Science museum audio guide',fr:'L’audio-guide de la Maison des sciences de Nantes'},names:{M:'Audio-guide'},lines:[
 {s:'M',t:'Bonjour et bienvenue à la Maison des sciences ! Je m’appelle Antoine Ferrand, je suis astronome et je vais vous accompagner pendant la visite.'},
 {s:'M',t:'Vous êtes maintenant dans le grand hall d’entrée, devant l’escalier. Notre exposition « Le ciel et la Terre » a trois parties.'},
 {s:'M',t:'Au premier niveau, vous allez découvrir les planètes, les étoiles et les fusées : c’est l’espace. Au deuxième niveau, vous allez faire des expériences sur le climat et l’énergie de notre planète.'},
 {s:'M',t:'La troisième partie est dans le jardin : c’est un grand télescope. Bonne visite et bonnes découvertes !'}
]},
{type:'ex',id:'e8',title:'Activité 8',consigne:'Vous êtes à la Maison des sciences et vous écoutez l’audio-guide. Répondez aux questions.',tr:{ko:'과학관에서 오디오 가이드를 듣습니다. 질문에 답하세요.',en:'You are at a science museum listening to the audio guide. Answer the questions.'},items:[
 {type:'short',q:'a. Un homme se présente. Quel est son métier ?',answer:'astronome',keywords:[['astronom']],need:1},
 {type:'short',q:'b. Combien de parties l’exposition a-t-elle ?',answer:'trois',keywords:[['3','trois']],need:1},
 {type:'short',q:'c. Où êtes-vous pendant l’écoute de cette annonce ?',answer:'dans le hall d’entrée',keywords:[['hall','entrée','entree']],need:1},
 {type:'short',q:'d. Écrivez trois mots entendus qui parlent de science.',answer:'planètes, étoiles, fusées (expériences, climat, énergie, télescope)',keywords:[['planète','planete','étoile','etoile'],['fusée','fusee','expérience','experience','télescope','telescope'],['climat','énergie','energie','espace']],need:3,lines:2},
 {type:'short',q:'e. Quels sont les thèmes des deux niveaux de l’exposition ?',answer:'1er niveau : l’espace ; 2e niveau : le climat et l’énergie',keywords:[['espace','planète','planete'],['climat','énergie','energie']],need:2}
]},

{type:'audio',id:'a9',title:'Activité 9 — Un itinéraire',plays:2,situation:{ko:'길 안내',en:'Directions',fr:'Une personne explique le chemin'},names:{F:'Clémentine'},lines:[
 {s:'F',t:'Alors, pour venir chez moi, c’est facile. Tu es rue des Lilas, d’accord ? Tu continues tout droit et après 50 mètres, tu tournes à droite, dans la rue du Marché.'},
 {s:'F',t:'Au bout de la rue, il y a un rond-point. Tu fais le tour et tu prends la deuxième sortie, la rue Pasteur. Attention, ne prends pas la direction de l’autoroute !'},
 {s:'F',t:'Ensuite, tu suis la direction « Centre-ville ». Tu arrives au boulevard Victor-Duruy. J’habite au numéro 18, boulevard Victor-Duruy, au troisième étage. À tout à l’heure !'}
]},
{type:'note',kind:'info',title:'Le plan',tr:{ko:'지도',en:'The map'},html:'<div style="font-family:monospace;line-height:1.6;background:#f4f7fb;padding:10px;border-radius:8px">🔵 Départ : rue des Lilas ➡️ 50 m ➡️ ↪️ rue du Marché ➡️ 🔄 rond-point<br>&nbsp;&nbsp;&nbsp;🔄 1<sup>re</sup> sortie : rue de la Gare · 2<sup>e</sup> sortie : rue Pasteur · 3<sup>e</sup> sortie : ⛔ autoroute<br>➡️ panneau « Centre-ville » ➡️ boulevard Victor-Duruy 🏠</div>'},
{type:'ex',id:'e9',title:'Activité 9',consigne:'1. Écoutez l’instruction une fois. Répondez aux questions. 2. Écoutez encore une fois et retrouvez le trajet.',tr:{ko:'1. 길 안내를 한 번 듣고 답하세요. 2. 다시 듣고 경로를 완성하세요.',en:'1. Listen once and answer. 2. Listen again and reconstruct the route.'},items:[
 {type:'mcq',q:'a. Vous êtes rue des Lilas. Où tournez-vous après 50 mètres ?',options:['⬅️ à gauche','➡️ à droite','⬆️ on ne tourne pas'],answer:1},
 {type:'mcq',q:'b. Quel itinéraire prenez-vous au rond-point ?',options:['la première sortie','la deuxième sortie, rue Pasteur','la direction de l’autoroute'],answer:1},
 {type:'short',q:'c. Quelle direction prenez-vous ensuite ?',answer:'Centre-ville',keywords:[['centre']],need:1},
 {type:'short',q:'d. À quelle adresse allez-vous ?',answer:'18, boulevard Victor-Duruy',keywords:[['18','dix-huit'],['duruy','boulevard']],need:2},
 {type:'order',q:'2 — Remettez le trajet dans l’ordre.',items:['rue des Lilas, tout droit','à droite, rue du Marché','le rond-point','la deuxième sortie, rue Pasteur','direction Centre-ville','18, boulevard Victor-Duruy']}
]},

{type:'note',kind:'method',title:'Comprendre la fonction du message',tr:{ko:'메시지의 기능 파악하기',en:'Understanding the purpose of a message'},toc:true,html:'<p>Demandez-vous : <b>pourquoi</b> cette personne parle ? Pour <b>informer</b> (<span class="say">Nous vous informons que…</span>), pour <b>vendre</b> (<span class="say">Profitez de notre offre !</span>), pour <b>demander</b> (<span class="say">Merci de nous rappeler</span>), pour <b>s’excuser</b> (<span class="say">Nous sommes désolés…</span>), pour <b>interdire</b> (<span class="say">Il est interdit de…</span>).</p>'},
{type:'audio',id:'a10',title:'Activité 10 — Cinq messages',plays:2,situation:{ko:'자동응답기에 남겨진 다섯 개의 메시지',en:'Five voicemail messages',fr:'Cinq messages sur un répondeur'},names:{F:'Message',M:'Message',F2:'Inès'},lines:[
 {s:'F',t:'Message 1. Bonjour, ici la librairie Page Blanche. Vous avez commandé le roman « Le Phare des oubliés », mais malheureusement, il n’y a plus de livres chez notre fournisseur. Nous pouvons vous proposer le même livre en format poche, ou vous rembourser. Passez au magasin quand vous voulez.'},
 {s:'M',t:'Message 2. Vous avez un nouveau message, reçu mardi à 14 heures 20. Pour rappeler votre correspondant, faites le 01 45 62 18 33.'},
 {s:'F2',t:'Message 3. Bonjour, c’est Inès, du club de danse Studio 9. Les inscriptions pour la nouvelle saison sont ouvertes ! Merci de remplir le formulaire sur notre site avant le 15 septembre. Et si vous venez avec un ami, vous avez 20 % de réduction sur votre inscription.'},
 {s:'M',t:'Message 4. Félicitations ! Vous avez gagné un week-end pour deux personnes à la montagne ! Pour recevoir votre cadeau, connectez-vous vite sur www.super-vacances.fr.'},
 {s:'F',t:'Message 5. Bonjour madame, ici monsieur Robin, conseiller principal d’éducation du collège Jules-Verne. Votre fils Noah n’est pas venu en cours ce matin. Merci d’envoyer un mot d’excuse ou de me rappeler au collège avant 17 heures.'}
]},
{type:'ex',id:'e10',title:'Activité 10',consigne:'1. Écoutez les cinq messages une fois. Associez la raison du message au numéro du message. 2. Écoutez encore une fois et répondez aux questions.',tr:{ko:'1. 다섯 메시지를 듣고 메시지의 이유를 연결하세요. 2. 다시 듣고 질문에 답하세요.',en:'1. Listen once and match each message with its reason. 2. Listen again and answer.'},items:[
 {type:'match',q:'1 — Associez.',left:['Message 1','Message 2','Message 3','Message 4','Message 5'],right:['nouvelle inscription','appel manqué','problème d’absence','problème de commande','offre commerciale'],answer:[3,1,0,4,2]},
 {type:'short',q:'Message 1 a. Qui donne le message ?',answer:'la librairie Page Blanche',keywords:[['librairie','page blanche']],need:1},
 {type:'short',q:'Message 1 b. Quel est le problème ?',answer:'Le livre commandé n’est plus disponible.',keywords:[['plus','pas de','manque','disponible']],need:1},
 {type:'short',q:'Message 1 c. Quelle est la solution ?',answer:'le livre en format poche ou un remboursement',keywords:[['poche','rembours']],need:1},
 {type:'short',q:'Message 2 a. Quels sont le jour et l’heure du message ?',answer:'mardi, 14 h 20',keywords:[['mardi'],['14 h 20','14h20','14 heures 20']],need:2},
 {type:'short',q:'Message 2 b. Quel numéro faut-il appeler ?',answer:'01 45 62 18 33',keywords:[['0145621833','01 45 62 18 33']],need:1},
 {type:'short',q:'Message 3 a. La personne demande de faire quoi ?',answer:'remplir le formulaire sur le site avant le 15 septembre',keywords:[['formulaire','inscri']],need:1},
 {type:'mcq',q:'Message 3 b. Inès propose une réduction. Laquelle ?',options:['10 % pour tout le monde','20 % si on vient avec un ami','un mois gratuit'],answer:1},
 {type:'short',q:'Message 4 a. Qu’avez-vous gagné ?',answer:'un week-end pour deux à la montagne',keywords:[['week'],['montagne','deux']],need:2},
 {type:'short',q:'Message 4 b. Quelle est l’adresse du site ?',answer:'www.super-vacances.fr',keywords:[['super-vacances','supervacances','super vacances']],need:1},
 {type:'short',q:'Message 5 a. Qui laisse ce message ?',answer:'monsieur Robin, le CPE du collège',keywords:[['robin','cpe','conseiller','collège','college']],need:1},
 {type:'short',q:'Message 5 b. Que devez-vous faire ?',answer:'envoyer un mot d’excuse ou rappeler le collège avant 17 h',keywords:[['excuse','rappel']],need:1}
]},

{type:'audio',id:'a11',title:'Activité 11 — Le règlement du collège',plays:2,situation:{ko:'개학식 날 교장 선생님의 연설',en:'The principal’s speech on the first day',fr:'Discours de la directrice le jour de la rentrée'},names:{F:'Directrice'},lines:[
 {s:'F',t:'Bonjour à toutes et à tous et bienvenue au collège ! Voici les cinq articles importants de notre règlement.'},
 {s:'F',t:'Article 1 : les cours commencent à 8 heures. Vous devez arriver à l’heure ; il est interdit d’entrer en classe après la sonnerie sans passer par le bureau de la vie scolaire.'},
 {s:'F',t:'Article 2 : chaque élève doit toujours avoir sa carte d’élève sur lui. Il est interdit de prêter sa carte à un camarade.'},
 {s:'F',t:'Article 3 : vous devez porter une tenue correcte. Les casquettes sont interdites dans les bâtiments.'},
 {s:'F',t:'Article 4 : pendant la récréation, vous devez rester dans la cour. Il est interdit d’utiliser son téléphone portable.'},
 {s:'F',t:'Article 5 : vous devez respecter les adultes et vos camarades. La violence et les insultes sont strictement interdites. Bonne année scolaire à tous !'}
]},
{type:'ex',id:'e11',title:'Activité 11',consigne:'1. Écoutez le discours. Reliez le thème à chaque article du règlement. 2. Écoutez encore une fois et écrivez les obligations ou les interdictions de chaque article.',tr:{ko:'1. 연설을 듣고 각 조항과 주제를 연결하세요. 2. 다시 듣고 각 조항의 의무 또는 금지 사항을 쓰세요.',en:'1. Listen and match each article with its theme. 2. Listen again and write the obligations or prohibitions.'},items:[
 {type:'match',q:'1 — Reliez.',left:['Article 1','Article 2','Article 3','Article 4','Article 5'],right:['VÊTEMENTS','HORAIRES','DISCIPLINE','PAUSES','CARTE D’ÉLÈVE'],answer:[1,4,0,3,2]},
 {type:'short',q:'Article 1 — obligation / interdiction',answer:'Obligation : arriver à l’heure (8 h). Interdiction : entrer en classe après la sonnerie sans passer par la vie scolaire.',keywords:[['heure','8'],['sonnerie','entrer']],need:2,lines:2},
 {type:'short',q:'Article 2 — obligation / interdiction',answer:'Obligation : avoir sa carte d’élève sur soi. Interdiction : prêter sa carte.',keywords:[['carte'],['prêt','pret']],need:2,lines:2},
 {type:'short',q:'Article 3 — obligation / interdiction',answer:'Obligation : porter une tenue correcte. Interdiction : les casquettes dans les bâtiments.',keywords:[['tenue','correct'],['casquette']],need:2,lines:2},
 {type:'short',q:'Article 4 — obligation / interdiction',answer:'Obligation : rester dans la cour. Interdiction : utiliser son téléphone portable.',keywords:[['cour'],['téléphone','telephone','portable']],need:2,lines:2},
 {type:'short',q:'Article 5 — obligation / interdiction',answer:'Obligation : respecter les adultes et les camarades. Interdiction : la violence et les insultes.',keywords:[['respect'],['violence','insulte']],need:2,lines:2}
]},

{type:'audio',id:'a12',title:'Activité 12 — Une émission de télé-crochet',plays:2,situation:{ko:'노래 경연 프로그램 안내',en:'Announcement for a singing contest show',fr:'Annonce pour une émission de chant'},names:{M:'Présentateur'},lines:[
 {s:'M',t:'Bonsoir à tous et bienvenue dans la grande finale de « Talents de demain » ! Ce soir, quatre jeunes chanteurs sont sur scène, et c’est vous qui allez choisir le gagnant !'},
 {s:'M',t:'Je vous présente nos candidats. Numéro 1 : Élisa, quinze ans. Numéro 2 : Kenzo, seize ans. Numéro 3 : Romane, quatorze ans. Et numéro 4 : Adam, dix-sept ans.'},
 {s:'M',t:'Pour voter, c’est très simple : envoyez par SMS le numéro de votre candidat préféré au 7 1 2 0 0, ou votez sur l’application « Talents de demain ». Les votes sont ouverts jusqu’à 22 heures. Bonne soirée !'}
]},
{type:'ex',id:'e12',title:'Activité 12',consigne:'Écoutez l’annonce. Répondez aux questions.',tr:{ko:'방송을 듣고 질문에 답하세요.',en:'Listen to the announcement and answer the questions.'},items:[
 {type:'short',q:'a. Qui participe à l’émission entendue ?',answer:'quatre jeunes chanteurs',keywords:[['chanteur','candidat','jeune']],need:1},
 {type:'mcq',q:'b. L’annonce vous propose de…',options:['choisir le gagnant.','participer à l’émission.','présenter les candidats.'],answer:0},
 {type:'gap',q:'c. Écrivez le prénom correspondant à chaque numéro.',text:'1. {{Élisa|Elisa}} — 2. {{Kenzo}} — 3. {{Romane}} — 4. {{Adam}}'},
 {type:'short',q:'d. Quel est le titre de l’émission ?',answer:'Talents de demain',keywords:[['talents de demain','talent de demain']],need:1},
 {type:'short',q:'e. Quels sont les deux moyens techniques pour voter ?',answer:'par SMS et sur l’application',keywords:[['sms','texto','message'],['application','appli']],need:2}
]},

{type:'audio',id:'a13',title:'Activité 13 — Dans un grand magasin',plays:2,situation:{ko:'백화점 안내 방송',en:'Department store announcement',fr:'Annonce dans un grand magasin'},names:{N:'Annonce'},lines:[
 {s:'N',t:'Chers clients, bienvenue aux Galeries du Centre ! Ne manquez pas notre semaine de la beauté.'},
 {s:'N',t:'Rendez-vous au troisième étage, au rayon parfumerie. Pour tout achat de plus de 40 euros, nous vous offrons une jolie trousse de toilette.'},
 {s:'N',t:'Attention, cette offre est valable seulement trois jours, jusqu’à samedi soir. Bon shopping à tous !'}
]},
{type:'ex',id:'e13',title:'Activité 13',consigne:'Écoutez l’annonce. Répondez aux questions.',tr:{ko:'방송을 듣고 질문에 답하세요.',en:'Listen to the announcement and answer the questions.'},items:[
 {type:'mcq',q:'a. Vous entendez l’annonce dans…',options:['🥫 une épicerie.','🏬 un grand magasin.','⚽ un magasin de sport.'],answer:1},
 {type:'short',q:'b. Où l’annonce vous propose-t-elle d’aller ?',answer:'au troisième étage, au rayon parfumerie',keywords:[['troisième','3','troisieme','parfum']],need:1},
 {type:'short',q:'c. Quel cadeau vous propose l’annonce ?',answer:'une trousse de toilette',keywords:[['trousse']],need:1},
 {type:'short',q:'d. Combien de temps pouvez-vous profiter de l’offre ?',answer:'trois jours (jusqu’à samedi soir)',keywords:[['trois','3','samedi']],need:1}
]}
]});
