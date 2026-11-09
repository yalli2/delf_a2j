DELF.chapter({
id:'ce-p4', part:'ce', stage:'preparer', num:4, order:4,
title:'Lire pour s’informer', tr:{ko:'정보를 얻기 위해 읽기',en:'Reading for information'},
intro:{ko:'신문 기사와 웹사이트 글에서 <b>주제</b>를 파악하고, <b>숫자·고유명사</b> 같은 핵심 정보를 찾고, 참/거짓으로 <b>정보를 확인</b>하는 연습을 합니다.',en:'Identify the theme of articles, spot key figures and names, and check information (true/false).',fr:'Identifier le thème général d’un article, repérer les informations importantes et vérifier une information.'},
blocks:[
{type:'note',kind:'lex',title:'Les grands thèmes de la presse',tr:{ko:'신문 기사의 주요 주제',en:'Main news themes'},toc:true,html:
'<table><tr><th>Thème</th><th>Mots-clés</th></tr>'+
'<tr><td>Transports</td><td><span class="say">bus, tramway, train, ferry, circulation, passagers, accident</span></td></tr>'+
'<tr><td>Météo</td><td><span class="say">tempête, vent, pluie, neige, verglas, froid</span></td></tr>'+
'<tr><td>Technologie</td><td><span class="say">application, téléphone portable, en ligne, tablette</span></td></tr>'+
'<tr><td>Santé</td><td><span class="say">médecin, fièvre, malade, hôpital, épidémie</span></td></tr>'+
'<tr><td>Sport</td><td><span class="say">match, championne, joueur, tournoi, course</span></td></tr>'+
'<tr><td>Éducation</td><td><span class="say">élèves, professeurs, rentrée, école</span></td></tr>'+
'<tr><td>Argent / économie</td><td><span class="say">prix, augmenter, euros, payer</span></td></tr>'+
'<tr><td>Tourisme / Histoire</td><td><span class="say">visiteurs, touristes, château, abbaye, siècle</span></td></tr>'+
'<tr><td>Logement</td><td><span class="say">appartement, maison, décoration, loyer</span></td></tr></table>'},
{type:'text',id:'t15',label:'Activité 15 — Documents',title:'Quatre articles',source:'Articles adaptés pour la classe',html:
'<div style="display:flex;flex-wrap:wrap;gap:10px">'+
'<div style="flex:1 1 260px;border:1px solid #ccc;padding:8px"><b>A. Tempête Odile : des rafales à 130 km/h sur la côte atlantique</b><p>Toute la nuit, le vent a soufflé très fort entre La Rochelle et Biarritz. De nombreux arbres sont tombés et des milliers de maisons sont restées sans électricité. Météo-Ouest annonce encore de fortes pluies pour demain.</p></div>'+
'<div style="flex:1 1 260px;border:1px solid #ccc;padding:8px"><b>B. À Nantes, la cantine se paie avec son portable</b><p>Fini les tickets en papier ! Grâce à une nouvelle application pour smartphones et tablettes, les parents nantais paient maintenant les repas de leurs enfants en ligne, en quelques secondes. Une petite révolution numérique !</p></div>'+
'<div style="flex:1 1 260px;border:1px solid #ccc;padding:8px"><b>C. Collision entre un bus et une voiture à Toulouse</b><p>Ce matin, un bus de la ligne 14 a percuté une voiture à un carrefour du centre-ville. Deux passagers légèrement blessés ont été transportés à l’hôpital. La circulation a été bloquée pendant deux heures.</p></div>'+
'<div style="flex:1 1 260px;border:1px solid #ccc;padding:8px"><b>D. Gastro-entérite : les médecins débordés</b><p>Depuis le début du mois, plus de 600 000 personnes ont consulté un médecin pour des maux de ventre et de la fièvre. Conseil : lavez-vous souvent les mains et buvez beaucoup d’eau.</p></div></div>'},
{type:'ex',id:'e15',title:'Activité 15',consigne:'Lisez ces quatre articles d’un journal francophone, relevez les mots importants et identifiez le thème de chaque texte.',tr:{ko:'네 개의 기사를 읽고 핵심 단어를 찾아 각 글의 주제를 고르세요.',en:'Read the four articles, find key words and identify each theme.'},items:[
 {type:'match',q:'Associez chaque article à un thème.',left:['Article A','Article B','Article C','Article D'],right:['Transports','Tourisme','Sport','Météo','Histoire','Technologie','Logement','Éducation','Santé','Argent'],answer:[3,5,0,8],explain:'A : tempête, vent, pluie ; B : application, en ligne ; C : bus, passagers, circulation ; D : médecin, fièvre.'}
]},
{type:'ex',id:'e16',title:'Activité 16',consigne:'Lisez les titres d’articles, relevez le ou les mots qui indiquent le thème et écrivez-le.',tr:{ko:'기사 제목을 읽고 주제를 나타내는 단어를 찾아 주제를 쓰세요.',en:'Read the headlines, find the key word(s) and write the theme.'},items:[
 {type:'short',q:'1. « Finale magnifique : la championne de judo fait ses adieux au public »',answer:'Le sport',keywords:[['sport','judo']]},
 {type:'short',q:'2. « Neige et verglas : la préfecture déconseille de prendre la route »',answer:'La météo',keywords:[['météo','meteo','temps','neige','climat']]},
 {type:'short',q:'3. « Trois millions de spectateurs en deux semaines pour la comédie de l’année »',answer:'Le cinéma',keywords:[['ciném','cinem','film','culture']]},
 {type:'short',q:'4. « L’abbaye du XII<sup>e</sup> siècle accueille de nouveau les visiteurs après deux ans de travaux »',answer:'L’histoire / le patrimoine (tourisme)',keywords:[['histoire','patrimoine','tourisme','monument']]},
 {type:'short',q:'5. « Rentrée : douze millions d’élèves reprennent le chemin de l’école »',answer:'L’éducation',keywords:[['éducation','education','école','ecole','scolaire']]},
 {type:'short',q:'6. « Le prix du gaz augmente de 8 % cet hiver »',answer:'L’argent / l’économie',keywords:[['argent','économie','economie','prix']]},
 {type:'short',q:'7. « Nice, ville préférée des vacanciers européens »',answer:'Le tourisme',keywords:[['tourisme','vacances','voyage']]},
 {type:'short',q:'8. « Un jeune chef lyonnais reçoit sa première étoile »',answer:'La cuisine / la gastronomie',keywords:[['cuisine','gastronomie','restaurant']]},
 {type:'short',q:'9. « Petit appartement : 50 astuces pour gagner de la place »',answer:'Le logement / la maison',keywords:[['logement','maison','appartement','décoration','decoration']]}
]},
{type:'note',kind:'method',title:'Repérer les informations importantes',tr:{ko:'핵심 정보 찾기',en:'Spotting key information'},toc:true,html:
'<p>Parcourez le texte et soulignez : les <b>chiffres</b> (âges, durées, distances, dates) et les <b>noms propres</b> (mots avec une majuscule : personnes, villes, animaux). Puis demandez-vous : <b>Qui ? Quoi ? Où ? Quand ?</b> → l’information principale.</p>'},
{type:'text',id:'t17',label:'Activité 17 — Document',title:'Un chat retrouvé après huit mois',subtitle:'www.infos-savoie.fr',source:'Article adapté pour la classe',paras:[
'La famille Morel n’avait plus de nouvelles de son chat, Filou, 5 ans. Il avait disparu il y a huit mois près d’Annecy, pendant les vacances. Mais Sandrine et Paul Morel n’ont jamais perdu espoir.',
'C’est Mathilde, une habitante de Chambéry, qui a vu Filou dans son jardin. Chambéry est à 50 km d’Annecy ! Grâce à la puce électronique du chat, une vétérinaire de Chambéry a pu appeler les Morel, fous de joie. « Depuis que notre fils Lucas est parti à l’université, il y a un an, Filou est un peu notre bébé ! »']},
{type:'ex',id:'e17',title:'Activité 17',consigne:'Lisez cet article d’un site internet francophone. Relevez les chiffres et les noms propres, puis choisissez l’information la plus importante.',tr:{ko:'기사를 읽고 숫자와 고유명사를 찾은 뒤, 가장 중요한 정보를 고르세요.',en:'Find the figures and proper nouns, then choose the most important information.'},items:[
 {type:'multi',q:'Cochez les noms propres du texte.',options:['Morel','chat','Filou','Annecy','vacances','Mathilde','Chambéry','Lucas','université'],answer:[0,2,3,5,6,7]},
 {type:'match',q:'À quoi correspondent ces chiffres ?',left:['5','8','50','1'],right:['la distance entre Annecy et Chambéry (km)','le nombre d’années depuis le départ de Lucas','l’âge de Filou (ans)','le nombre de mois sans nouvelles'],answer:[2,3,0,1]},
 {type:'mcq',q:'Selon vous, quelle est l’information la plus importante du texte ?',options:['Filou a marché 50 km.','Mathilde a un jardin à Chambéry.','Sandrine et Paul ont retrouvé leur chat après huit mois.'],answer:2,explain:'제목과 같은 내용: 8개월 만에 고양이를 찾음.'}
]},
{type:'text',id:'t18',label:'Activité 18 — Document',title:'Comment devient-on « capitale européenne de la culture » ?',source:'Article adapté pour la classe',paras:[
'Chaque année, deux villes d’Europe deviennent « capitales européennes de la culture ». Elles sont choisies quatre ans à l’avance. D’abord, les villes candidates écrivent un dossier : elles expliquent leur projet (concerts, expositions, festivals…). Ensuite, un jury de spécialistes de la culture lit tous les dossiers, rencontre les villes et vote.',
'La ville gagnante a ensuite quatre ans pour se préparer : rénover un musée, ouvrir de nouvelles salles de spectacle, former des bénévoles… Pendant l’année de la fête, elle accueille souvent des millions de visiteurs et plus de 1 000 événements. Une chance formidable pour la ville et un très beau cadeau pour ses habitants !']},
{type:'ex',id:'e18',title:'Activité 18',consigne:'Lisez cet article d’un journal francophone et répondez aux questions.',tr:{ko:'기사를 읽고 질문에 답하세요.',en:'Read the article and answer the questions.'},items:[
 {type:'mcq',q:'Combien de temps à l’avance choisit-on une capitale européenne de la culture ?',options:['Un an.','Quatre ans.','Dix ans.'],answer:1},
 {type:'mcq',q:'Que doit faire une ville candidate pour être choisie ?',options:['Écrire un dossier.','Rénover un musée.','Accueillir des millions de visiteurs.'],answer:0,explain:'박물관 리노베이션은 선정된 <b>후</b>에 하는 일.'},
 {type:'short',q:'Comment est choisie la ville ?',answer:'Un jury de spécialistes de la culture vote.',keywords:[['jury','vote','spécialiste','specialiste']]},
 {type:'mcq',q:'Combien de villes deviennent capitales de la culture chaque année ?',options:['2','4','1 000'],answer:0},
 {type:'mcq',q:'Quel est le sentiment du journaliste ?',options:['😀 Positif','😐 Neutre','😟 Négatif'],answer:0,explain:'« une chance formidable », « un très beau cadeau ».'}
]},
{type:'note',kind:'tip',title:'Vérifier une information',tr:{ko:'정보 확인하기',en:'Checking information'},toc:true,html:
'<p>Pour un « vrai / faux », cherchez dans le texte la phrase qui parle du même sujet. Attention aux petits mots qui changent tout : <span class="say">seul, déjà, pas encore, même pas, aussi</span>, et aux chiffres.</p>'},
{type:'text',id:'t19',label:'Activité 19 — Document',title:'Naissance surprise au parc animalier',source:'Article adapté pour la classe',paras:[
'Il a déjà deux mois et demi, mais personne ne le savait : un bébé panda roux est né au parc animalier de la Vallée verte, près de Besançon. C’est un événement rare : c’est seulement le troisième panda roux né en France cette année !',
'Pour le protéger, le petit et sa mère, née dans un zoo aux Pays-Bas, restent dans un bâtiment calme, loin du public. Personne ne peut encore les approcher, pas même Julie, la soigneuse : « Il faut attendre encore trois semaines. Le bébé ne doit pas avoir peur. »',
'Le parc est très fier et ouvrira bientôt les portes de la maison des pandas aux visiteurs. Le bébé n’a pas encore de nom : votez pour votre prénom préféré sur le site du parc !']},
{type:'ex',id:'e19',title:'Activité 19',consigne:'Lisez cet article. Les informations sont-elles vraies ou fausses ?',tr:{ko:'기사를 읽고 참인지 거짓인지 고르세요.',en:'Read the article. Are the statements true or false?'},items:[
 {type:'tf',q:'Le bébé panda a un mois.',answer:false,justify:'Il a déjà deux mois et demi.'},
 {type:'tf',q:'Sa mère est aussi née au parc de la Vallée verte.',answer:false,justify:'sa mère, née dans un zoo aux Pays-Bas'},
 {type:'tf',q:'La soigneuse est la seule personne qui peut toucher le bébé.',answer:false,justify:'Personne ne peut encore les approcher, pas même Julie, la soigneuse.'},
 {type:'tf',q:'Bientôt, les visiteurs pourront voir le bébé panda.',answer:true,justify:'Le parc ouvrira bientôt les portes de la maison des pandas aux visiteurs.'},
 {type:'tf',q:'Le parc n’a pas encore choisi de prénom pour le bébé.',answer:true,justify:'Le bébé n’a pas encore de nom.'}
]},
{type:'text',id:'t20',label:'Activité 20 — Document',title:'Partie il y a 7 ans, une Belge termine son tour du monde à vélo',subtitle:'www.actus-francophones.net',source:'Article adapté pour la classe',paras:[
'Nadia Lambotte, 41 ans, a quitté Liège il y a sept ans pour découvrir le monde et rencontrer des gens. Son mari est resté en Belgique et lui a envoyé de l’argent chaque mois. Seule sur son vélo, elle a parcouru environ 60 kilomètres par jour : au total, plus de 85 000 km à travers 48 pays.',
'Elle a parfois pris l’avion, par exemple pour traverser les océans, mais le plus souvent, c’est en pédalant qu’elle a visité chaque continent.',
'Revenue en Belgique depuis quelques semaines, Nadia n’a plus d’économies, mais elle est très heureuse : « Partout, j’ai vu que l’école est la chose la plus importante pour les enfants. » En septembre, elle va retrouver son travail : professeure de sport dans un collège de Liège.']},
{type:'ex',id:'e20',title:'Activité 20',consigne:'Lisez cet article d’un site internet francophone et répondez aux questions.',tr:{ko:'기사를 읽고 질문에 답하세요.',en:'Read the article and answer the questions.'},items:[
 {type:'mcq',q:'Nadia Lambotte est…',options:['française.','belge.'],answer:1},
 {type:'mcq',q:'Elle a voyagé…',options:['seule.','avec son mari.'],answer:0,explain:'« Son mari est resté en Belgique », « Seule sur son vélo ».'},
 {type:'mcq',q:'Pour faire son voyage, elle a surtout…',options:['pédalé.','pris l’avion.'],answer:0},
 {type:'mcq',q:'Elle est allée…',options:['dans 85 pays.','sur tous les continents.'],answer:1,explain:'85 000은 km, 나라는 48개.'},
 {type:'mcq',q:'Elle travaille dans…',options:['un collège.','un magasin de vélos.'],answer:0}
]},
{type:'text',id:'t21',label:'Activité 21 — Document',title:'UNE GAGNANTE TRÈS ÉMUE',subtitle:'www.infos-bretagne.fr',source:'Article adapté pour la classe',paras:[
'Hélène Garnier attendait ce moment depuis vingt-cinq ans : elle vient de gagner le prix de la meilleure galette des rois de France ! Le concours a eu lieu le 12 janvier à Tours. « C’est la recette de mon père. Lui, il l’avait apprise de son oncle ». Une victoire de toute la famille, donc !',
'De retour à Quimper, la ville où elle est née, Hélène a accroché son diplôme dans sa boulangerie. « Sa galette est la meilleure, je le dis depuis des années ! Mais un prix national, c’est une belle surprise pour elle », raconte Yves, un fidèle client.']},
{type:'ex',id:'e21',title:'Activité 21',consigne:'Lisez cet article. Parmi les phrases proposées, choisissez les trois phrases correctes.',tr:{ko:'기사를 읽고 맞는 문장 세 개를 고르세요.',en:'Read the article and choose the three correct sentences.'},items:[
 {type:'multi',q:'Cochez les trois phrases correctes.',options:['Hélène a gagné un prix pour un gâteau.','Hélène a vingt-cinq ans.','Hélène est née à Tours.','Ses clients ne sont pas étonnés de sa victoire.','La recette d’Hélène vient de sa famille.'],answer:[0,3,4],explain:'25 = 기다린 햇수 / Tours = 대회 장소, 고향은 Quimper.'}
]}
]});
