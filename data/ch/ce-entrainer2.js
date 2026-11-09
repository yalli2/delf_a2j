DELF.chapter({
id:'ce-entrainer2', part:'ce', stage:'entrainer', num:2, order:2,
title:'S’entraîner : lire des instructions et lire pour s’informer', tr:{ko:'실전 연습: 지시문 읽기 · 정보 얻기 읽기',en:'Practice: instructions and reading for information'},
intro:{ko:'시험 형식의 연습 문제 7–12번. <b>규칙·레시피·사용법(6점)</b>과 <b>기사(8점, 참/거짓+근거 포함)</b>를 풀어 봅니다.',en:'Exam-style exercises 7–12: rules, recipes, how-to (6 pts) and articles with true/false + justification (8 pts).',fr:'Exercices 7 à 12 au format de l’examen : instructions (6 points) et articles (8 points).'},
blocks:[
{type:'note',kind:'method',title:'Méthode — Lire des instructions',tr:{ko:'방법: 지시문 읽기',en:'Method'},toc:true,html:
'<ul><li>J’identifie la situation : où suis-je ? qui écrit ? (une salle de sport, un site de recettes…)</li><li>Je lis d’abord les questions, puis je regarde le titre, les dessins, l’auteur.</li><li>Je cherche les expressions de l’<b>obligation</b> (<span class="say">il est obligatoire de</span>, <span class="say">il faut</span>, <span class="say">vous devez</span>), de l’<b>interdiction</b> (<span class="say">il est interdit de</span>, <span class="say">ne… pas</span>) et les verbes à l’<b>impératif</b> (<span class="say">apportez</span>, <span class="say">consultez</span>).</li></ul>'},
{type:'text',id:'t7',label:'Exercice 7 — Document',title:'RÈGLEMENT DU CENTRE SPORTIF SAINT-ROCH',source:'Document adapté pour la classe',html:
'<div style="border:1px solid #999;padding:10px;background:#fff"><p>Le centre sportif est ouvert aux habitants du quartier Saint-Roch. Horaires : du lundi au jeudi (14 h – 21 h) et le samedi (8 h – 18 h).</p><ul>'+
'<li>Il est obligatoire de porter des chaussures de sport propres, utilisées seulement à l’intérieur.</li>'+
'<li>Il est interdit de manger, de fumer et de venir avec un animal, même petit.</li>'+
'<li>Les enfants de moins de 12 ans doivent venir avec un adulte (parent, entraîneur, professeur…).</li>'+
'<li>La ville prête gratuitement le matériel : ballons de basket et de volley, tapis, cordes à sauter. Attention : joueurs de badminton, apportez votre raquette et vos volants.</li>'+
'<li>Merci de laisser les vestiaires et les douches propres.</li></ul>'+
'<p>Les horaires des cours collectifs sont sur le site internet du centre. Pour le règlement de la piscine, cliquez ici.</p><p style="text-align:right"><i>Service des sports de la ville</i></p></div>'},
{type:'ex',id:'ex7',title:'Exercice 7',consigne:'Vous habitez au Québec. Vous lisez le règlement du centre sportif de votre quartier. Répondez aux questions.',tr:{ko:'퀘벡에 살고 있습니다. 동네 스포츠센터 규칙을 읽고 질문에 답하세요.',en:'You live in Quebec. Read the sports centre rules and answer the questions.'},items:[
 {type:'short',q:'Quels jours le centre sportif est-il fermé ?',answer:'Le vendredi et le dimanche.',keywords:[['vendredi'],['dimanche']],need:2,points:1.5},
 {type:'mcq',q:'Que devez-vous apporter pour entrer ?',options:['Un short.','Votre carte de membre.','Des chaussures de sport propres.'],answer:2,points:1},
 {type:'mcq',q:'Quelles personnes ne peuvent pas entrer dans le centre sportif ?',options:['A. 👨‍👦 Un père avec son fils de 8 ans','B. 🧑‍🤝‍🧑🐕 Deux adolescents avec leur chien','C. 🧒🧒🧑‍🏫 Des enfants avec leur professeur'],answer:1,points:1,explain:'animaux interdits, même petits.'},
 {type:'mcq',q:'Qu’est-ce que vous trouverez dans la salle ?',options:['Des serviettes.','Une raquette de badminton.','Des ballons de basket.'],answer:2,points:1,explain:'라켓은 직접 가져와야 함.'},
 {type:'short',q:'Comment obtenir des informations sur les horaires des cours ?',answer:'Sur le site internet du centre.',keywords:[['site','internet']],points:1.5}
]},
{type:'text',id:'t8',label:'Exercice 8 — Document',title:'Wraps chauds au poulet',subtitle:'www.cuisinefacile-ados.fr — pour 4 personnes',source:'Recette adaptée pour la classe',html:
'<div style="display:flex;flex-wrap:wrap;gap:16px"><div style="flex:2 1 280px"><p><b>Préparation :</b></p><ul>'+
'<li>Préchauffez le four à 200 degrés.</li><li>Dans un bol, mélangez le fromage frais et la crème. Ajoutez les herbes, salez et poivrez.</li><li>Étalez ce mélange sur les 4 tortillas.</li><li>Placez des morceaux de poulet au milieu de chaque tortilla.</li><li>Ajoutez le fromage râpé, puis roulez les tortillas.</li><li>Faites cuire 12 minutes à 190 degrés. Servez chaud avec une salade.</li>'+
'<li>Version végétarienne : remplacez le poulet par des champignons.</li></ul></div>'+
'<div style="flex:1 1 180px;background:#fff6e6;padding:8px"><p>Préparation : 15 minutes<br>Cuisson : 12 minutes</p><p><b>Ingrédients :</b><br>4 tortillas (galettes de blé)<br>200 g de poulet cuit<br>100 g de fromage frais<br>2 cuillères de crème<br>80 g de fromage râpé<br>herbes, sel, poivre</p></div></div>'},
{type:'ex',id:'ex8',title:'Exercice 8',consigne:'Vous lisez cette recette sur un site internet. Répondez aux questions.',tr:{ko:'웹사이트에서 레시피를 읽습니다. 질문에 답하세요.',en:'Read this recipe on a website and answer the questions.'},items:[
 {type:'mcq',q:'Pour faire cette recette, il faut…',options:['A. 🫓 des galettes de blé','B. 🍅 des tomates','C. 🥔 des pommes de terre'],answer:0,points:1},
 {type:'mcq',q:'De quoi avez-vous besoin pour faire la recette ?',options:['D’un verre.','D’un bol.','D’une casserole.'],answer:1,points:1},
 {type:'mcq',q:'Avec quoi faut-il d’abord mélanger le fromage frais ?',options:['Avec du sel.','Avec de la crème.','Avec des herbes.'],answer:1,points:1,explain:'mélangez le fromage frais et la crème → 그 다음에 허브, 소금 추가.'},
 {type:'short',q:'À quelle température faut-il faire cuire les wraps ?',answer:'À 190 degrés.',keywords:[['190']],points:1.5,explain:'200도는 예열 온도.'},
 {type:'short',q:'Quel ingrédient faut-il pour la version végétarienne ?',answer:'Des champignons.',keywords:[['champignon']],points:1.5}
]},
{type:'text',id:'t9',label:'Exercice 9 — Document',title:'Offrez une tasse unique !',subtitle:'www.idees-cadeaux.fr',source:'Document adapté pour la classe',html:
'<ol><li>Créez un compte sur le site www.matasseperso.fr. Il faut donner vos nom et prénom, votre adresse e-mail et un mot de passe (choisi par vous).</li>'+
'<li>Choisissez un modèle : il existe quatre couleurs et deux tailles (petite ou grande). Le prix dépend de la taille.</li>'+
'<li>Ajoutez une photo et, si vous voulez, un petit message.</li>'+
'<li>Vous pouvez utiliser une photo du site ou une photo personnelle.</li>'+
'<li>À la fin, vérifiez bien votre tasse, puis payez en ligne (seulement par carte bancaire).</li>'+
'<li>Indiquez votre adresse : la tasse arrive chez vous au plus tard 5 jours après la commande.</li></ol>'+
'<p style="background:#ffe9a8;padding:6px"><b>Jusqu’au 15 décembre : pour deux tasses achetées, la troisième est offerte !</b></p>'},
{type:'ex',id:'ex9',title:'Exercice 9',consigne:'Vous lisez cet article sur internet. Répondez aux questions.',tr:{ko:'인터넷 글을 읽고 질문에 답하세요.',en:'Read this web article and answer the questions.'},items:[
 {type:'mcq',q:'Pour vous inscrire sur le site, quelle information est nécessaire ? Votre…',options:['âge.','adresse e-mail.','photo.'],answer:1,points:1},
 {type:'short',q:'Combien de tailles de tasses propose le site ?',answer:'Deux (petite ou grande).',keywords:[['deux','2']],points:1.5},
 {type:'mcq',q:'Comment devez-vous payer ?',options:['Par chèque.','En espèces.','Par carte bancaire.'],answer:2,points:1},
 {type:'short',q:'Il faut attendre combien de temps pour recevoir la tasse ?',answer:'5 jours maximum.',keywords:[['5','cinq']],points:1.5},
 {type:'mcq',q:'Si vous achetez trois tasses avant le 15 décembre, combien coûte la troisième ?',options:['Elle est gratuite.','La moitié du prix.','Le même prix.'],answer:0,points:1,explain:'offerte = gratuite.'}
]},
{type:'note',kind:'tip',title:'Je retiens',tr:{ko:'기억하기',en:'Remember'},html:'<ul><li>Je lis une première fois : de quoi parle le texte ? À qui s’adresse-t-il ?</li><li>Je trouve les mots importants, surtout ceux qui donnent une instruction.</li><li>Si je ne comprends pas tout, ce n’est pas grave : je cherche les informations demandées.</li></ul>'},
{type:'note',kind:'method',title:'Méthode — Lire pour s’informer',tr:{ko:'방법: 정보 얻기 읽기',en:'Method'},toc:true,html:
'<ul><li>Je lis la consigne : où est publié l’article ?</li><li>Je lis les questions, puis le <b>titre</b> (il donne le sujet).</li><li>Je lis le texte et je souligne les mots importants et les <b>chiffres</b>.</li><li>⚠️ Vrai/Faux : la <b>justification</b> est aussi importante que la réponse. Sans bonne justification = 0 point.</li></ul>'},
{type:'text',id:'t10',label:'Exercice 10 — Document',title:'Victoire en solitaire pour Maëlle Kerbrat',source:'Article adapté pour la classe',paras:[
'La navigatrice bretonne Maëlle Kerbrat a remporté la 6<sup>e</sup> édition de la Route des Alizés, une grande course à la voile qui traverse l’océan Atlantique. Comme tous les autres concurrents, français ou étrangers, elle était seule sur son bateau, sans escale et sans aide. Elle a mis 12 jours, deux de moins que le record de Jonas Le Goff (14 jours) à la dernière édition.',
'Va-t-elle repartir dans trois ans ? « Je suis épuisée, mais tellement heureuse ! Aujourd’hui, je veux surtout dormir dans un vrai lit. »',
'À l’arrivée, en Guadeloupe, une foule immense a applaudi les trente-deux marins. Fabrice Morin, l’un des 50 000 spectateurs : « Ces bateaux sont superbes ! Je fais 300 km pour assister à chaque arrivée, depuis dix ans ! »',
'Maëlle Kerbrat a gagné 90 000 €. C’est beaucoup ? Pour comparer, le vainqueur d’un grand tournoi de tennis reçoit plus de deux millions d’euros.']},
{type:'ex',id:'ex10',title:'Exercice 10',consigne:'Vous lisez cet article dans un journal français. Répondez aux questions.',tr:{ko:'프랑스 신문 기사를 읽고 질문에 답하세요.',en:'Read this article in a French newspaper and answer the questions.'},items:[
 {type:'mcq',q:'Lors de la 6<sup>e</sup> édition de la Route des Alizés, qui a fini la course en premier ?',options:['Jonas Le Goff.','Maëlle Kerbrat.','Fabrice Morin.'],answer:1,points:1},
 {type:'tf',q:'Les navigateurs viennent de plusieurs pays.',answer:true,justify:'Comme tous les autres concurrents, français ou étrangers…',points:1.5},
 {type:'short',q:'Combien de temps a duré la traversée ?',answer:'12 jours.',keywords:[['12','douze']],points:1.5},
 {type:'short',q:'Qu’est-ce qui est important aujourd’hui pour la gagnante ?',answer:'Dormir dans un vrai lit.',keywords:[['dormir','lit']],points:1.5},
 {type:'mcq',q:'Le spectateur interviewé…',options:['habite en Guadeloupe.','découvre la course à la voile.','vient à chaque arrivée.'],answer:2,points:1},
 {type:'tf',q:'La gagnante reçoit autant d’argent que le vainqueur d’un grand tournoi de tennis.',answer:false,justify:'Maëlle Kerbrat a gagné 90 000 €. […] le vainqueur d’un grand tournoi de tennis reçoit plus de deux millions d’euros.',points:1.5}
]},
{type:'text',id:'t11',label:'Exercice 11 — Document',title:'Pas d’idées pour les vacances ?',subtitle:'Le Salon du voyage de Liège est ouvert !',source:'Article adapté pour la classe',paras:[
'Le Salon du voyage a ouvert ses portes hier au palais des congrès de Liège. Il reste ouvert jusqu’à dimanche soir.',
'Cette année, la Belgique est l’invitée d’honneur. On peut partir très loin, mais on peut aussi découvrir notre propre pays ! Chaque année, des millions de visiteurs se promènent dans les forêts des Ardennes, visitent nos châteaux ou découvrent la bande dessinée au musée de Bruxelles. En six ans, le nombre de touristes a augmenté de moitié, et l’Office du tourisme espère encore plus de visiteurs l’année prochaine.',
'Des safaris en Afrique aux croisières en Norvège, en passant par les plages du Mexique et les temples du Japon, les 80 agences de voyages présentes proposent plus de 150 destinations. Attention : les agences ne s’occupent pas des visas ; pour cela, il faut contacter les ambassades.',
'<b>Horaires :</b> 10 h – 19 h. Entrée : 4 € pour les adultes, gratuite pour les moins de 18 ans. Parking gratuit avec le billet d’entrée.']},
{type:'ex',id:'ex11',title:'Exercice 11',consigne:'Vous lisez cet article dans la presse belge. Répondez aux questions.',tr:{ko:'벨기에 신문 기사를 읽고 질문에 답하세요.',en:'Read this article in the Belgian press and answer the questions.'},items:[
 {type:'tf',q:'Le Salon du voyage va commencer la semaine prochaine.',answer:false,justify:'Le Salon du voyage a ouvert ses portes hier.',points:1.5},
 {type:'short',q:'D’après l’article, que font les touristes en Belgique ? (3 réponses possibles, une seule attendue)',answer:'Se promener dans les Ardennes / visiter les châteaux / découvrir la bande dessinée au musée.',keywords:[['ardenne','forêt','foret','promen','château','chateau','bande dessinée','bande dessinee','musée','musee']],points:1.5},
 {type:'mcq',q:'D’après l’article, le nombre de touristes en Belgique…',options:['augmente.','reste le même.','diminue.'],answer:0,points:1},
 {type:'mcq',q:'Les destinations proposées au Salon sont…',options:['seulement en Belgique.','surtout en Europe.','dans le monde entier.'],answer:2,points:1},
 {type:'tf',q:'Au Salon, les visiteurs peuvent faire leur visa avec les agences.',answer:false,justify:'Les agences ne s’occupent pas des visas ; pour cela, il faut contacter les ambassades.',points:1.5},
 {type:'short',q:'Combien paie un adolescent de 15 ans pour entrer au Salon ?',answer:'Rien : c’est gratuit pour les moins de 18 ans.',keywords:[['gratuit','rien','0 €','zéro','zero']],points:1.5}
]},
{type:'text',id:'t12',label:'Exercice 12 — Document',title:'Des lunettes sur Internet',source:'Article adapté pour la classe',paras:[
'L’opticienne suisse Laura Bettex avait déjà deux magasins à Lausanne. En 2015, elle a eu une idée : vendre des lunettes sur Internet. Avec deux collègues opticiens, elle a créé le site www.voirclair-enligne.ch. Aujourd’hui, on y trouve plus de 15 000 modèles.',
'En huit ans, le site s’est installé dans neuf pays européens, dont la France et la Belgique, et compte plus de 200 000 clients. « Entre mars 2022 et mars 2023, le nombre de clients a doublé. Ce sont surtout des étudiants et des jeunes de 18 à 30 ans. Ils aiment nos conseils en vidéo, mais aussi nos prix : deux fois moins chers qu’en magasin », explique Marc Rochat, l’un des trois fondateurs.',
'« Ce qui plaît le plus, c’est de pouvoir commander à toute heure, même la nuit. Ensuite, les lunettes sont envoyées chez l’opticien de leur quartier. »']},
{type:'ex',id:'ex12',title:'Exercice 12',consigne:'Vous lisez cet article dans un journal francophone. Répondez aux questions.',tr:{ko:'프랑스어권 신문 기사를 읽고 질문에 답하세요.',en:'Read this article in a French-language newspaper and answer the questions.'},items:[
 {type:'mcq',q:'Qui a eu l’idée du site ?',options:['Des informaticiens.','Des médecins.','Des opticiens.'],answer:2,points:1},
 {type:'short',q:'Dans combien de pays peut-on utiliser le site ?',answer:'Dans neuf pays européens.',keywords:[['neuf','9']],points:1.5},
 {type:'tf',q:'En six mois, le nombre de clients a doublé.',answer:false,justify:'Entre mars 2022 et mars 2023, le nombre de clients a doublé.',points:1.5,explain:'6개월이 아니라 1년.'},
 {type:'short',q:'Quel est le public principal de ce site ?',answer:'Les étudiants et les jeunes de 18 à 30 ans.',keywords:[['étudiant','etudiant','jeune','18']],points:1.5},
 {type:'tf',q:'Les lunettes coûtent moins cher sur le site qu’en magasin.',answer:true,justify:'nos prix : deux fois moins chers qu’en magasin',points:1.5},
 {type:'mcq',q:'D’après l’article, les clients aiment surtout…',options:['recevoir leurs lunettes à la maison.','commander quand ils veulent.','revendre leurs vieilles lunettes.'],answer:1,points:1,explain:'« commander à toute heure ». 안경은 집이 아니라 동네 안경점으로 배송.'}
]},
{type:'note',kind:'tip',title:'Je retiens',tr:{ko:'기억하기',en:'Remember'},html:'<ul><li>Je lis plusieurs fois le titre, le texte et les questions.</li><li>Je cherche les mots importants et les chiffres.</li><li>Je choisis « vrai » ou « faux » et je recopie la phrase qui le prouve.</li></ul>'}
]});
