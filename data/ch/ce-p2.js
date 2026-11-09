DELF.chapter({
id:'ce-p2', part:'ce', stage:'preparer', num:2, order:2,
title:'Lire une correspondance', tr:{ko:'편지·이메일 읽기',en:'Reading correspondence'},
intro:{ko:'편지와 이메일의 <b>종류(친구·업무·행정)</b>와 <b>목적</b>(초대, 감사, 사과…)을 파악하고, 누가·언제·어디서·무엇을 찾는 연습을 합니다.',en:'Identify the type and purpose of letters and emails, and find who, when, where and what.',fr:'Identifier le type d’écrit et son objectif, puis repérer les informations importantes d’une lettre ou d’un courriel.'},
blocks:[
{type:'note',kind:'lex',title:'Identifier le type d’écrit',tr:{ko:'글의 종류 구별하기',en:'Types of letters'},toc:true,html:
'<table><tr><th>Type</th><th>Pour commencer</th><th>Pour finir</th></tr>'+
'<tr><td><b>Lettre amicale</b> (à un ami, tu)</td><td><span class="say">Salut !</span> <span class="say">Coucou !</span> <span class="say">Cher Tom,</span></td><td><span class="say">Bises !</span> <span class="say">À bientôt !</span> <span class="say">À plus !</span></td></tr>'+
'<tr><td><b>Lettre professionnelle</b> (travail, entreprise, client, vous)</td><td><span class="say">Chère cliente,</span> <span class="say">Madame,</span></td><td><span class="say">Cordialement.</span></td></tr>'+
'<tr><td><b>Lettre administrative</b> (mairie, école, administration, vous)</td><td><span class="say">Monsieur le Maire,</span> <span class="say">Madame, Monsieur,</span></td><td><span class="say">Veuillez agréer mes salutations distinguées.</span></td></tr></table>'},
{type:'ex',id:'e7',title:'Activité 7',consigne:'Lisez les phrases suivantes. Associez-les avec un type d’écrit : lettre professionnelle, lettre administrative ou lettre amicale.',tr:{ko:'문장을 읽고 업무 편지, 행정 편지, 친구 편지 중 하나와 연결하세요.',en:'Match each sentence with a type of letter: professional, administrative or friendly.'},items:[
 {type:'match',q:'Associez.',left:['a. Salut ma belle !','b. Merci pour votre compte rendu de la réunion de lundi.','c. Gros bisous et à très vite !','d. Vous trouverez dans l’enveloppe les documents demandés pour votre inscription.','e. Monsieur le Maire, je vous écris pour demander une place à la crèche municipale.','f. Coucou, tu vas bien ?','g. Chère cliente, nous vous remercions pour votre commande.'],right:['lettre professionnelle','lettre amicale','lettre administrative'],answer:[1,0,1,2,2,1,0],explain:'tu/bises → amicale ; réunion, cliente, commande → professionnelle ; mairie, inscription, documents → administrative.'}
]},
{type:'note',kind:'info',title:'Identifier l’objectif',tr:{ko:'글의 목적 파악하기',en:'Purpose of a letter'},html:
'<ul><li><b>Inviter</b> : <span class="say">Tu veux venir ?</span> <span class="say">Ça te dit de…?</span></li><li><b>Remercier</b> : <span class="say">Merci beaucoup pour…</span> <span class="say">C’est très gentil !</span></li><li><b>S’excuser</b> : <span class="say">Je suis désolé(e)…</span> <span class="say">Pardon pour…</span></li><li><b>Prendre des nouvelles</b> : <span class="say">Comment vas-tu ?</span> <span class="say">Ça va mieux ?</span></li><li><b>Annoncer une nouvelle</b> : <span class="say">J’ai une grande nouvelle !</span></li><li><b>Confirmer une information</b> : <span class="say">C’est toujours d’accord pour…?</span> <span class="say">Comme prévu…</span></li></ul>'},
{type:'ex',id:'e8',title:'Activité 8',consigne:'1. Lisez les extraits de lettres. Pour chaque extrait, choisissez l’objectif. 2. Écrivez une phrase pour chacun des deux objectifs non choisis.',tr:{ko:'1. 편지 발췌문을 읽고 각각의 목적을 고르세요. 2. 선택되지 않은 두 목적으로 문장을 하나씩 쓰세요.',en:'1. Choose the purpose of each extract. 2. Write a sentence for each of the two unused purposes.'},items:[
 {type:'match',q:'Quel est l’objectif de chaque extrait ?',left:['a. Tu viens toujours au cinéma avec nous mercredi, comme prévu ?','b. Ça va mieux, ton bras ? Tu peux de nouveau écrire ?','c. Merci mille fois pour ton dictionnaire d’anglais ! Avec lui, je vais réussir mon contrôle.','d. Mes parents ont deux billets pour le match de handball samedi. Ça te dit de venir avec moi ?'],right:['S’excuser','Prendre des nouvelles','Inviter','Annoncer une nouvelle','Confirmer une information','Remercier'],answer:[4,1,5,2]},
 {type:'multi',q:'Quels sont les deux objectifs non choisis ?',options:['S’excuser','Prendre des nouvelles','Inviter','Annoncer une nouvelle','Confirmer une information','Remercier'],answer:[0,3]},
 {type:'open',q:'Écrivez une phrase pour l’objectif 5 (<b>s’excuser</b>) et une phrase pour l’objectif 6 (<b>annoncer une nouvelle</b>).',minWords:15,rows:4,model:'<p><b>S’excuser :</b> Pardon, je n’ai pas pu venir à ta fête samedi : j’étais malade, je suis vraiment désolée !</p><p><b>Annoncer une nouvelle :</b> J’ai une grande nouvelle : ma sœur va avoir un bébé au mois de mai !</p>',checklist:['Ma phrase pour s’excuser contient « pardon », « désolé(e) » ou « excuse-moi ».','Je donne une raison (parce que…, j’étais…).','Ma phrase pour annoncer une nouvelle présente un fait nouveau (J’ai une nouvelle…).','J’utilise « tu » (lettre amicale).','Mes phrases sont correctes (accents, ponctuation).'],points:2}
]},
{type:'note',kind:'method',title:'Repérer les informations importantes',tr:{ko:'핵심 정보 찾기',en:'Finding key information'},toc:true,html:
'<p>Dans un courriel, cherchez : <b>Qui écrit ?</b> (signature, « De : ») — <b>Quel est le sujet ?</b> (« Objet : ») — <b>Quand ?</b> (jours, heures) — <b>Où ?</b> (lieux).</p>'},
{type:'text',id:'t9',label:'Activité 9 — Documents',title:'Deux courriels',source:'Documents adaptés pour la classe',html:
'<div style="display:flex;flex-wrap:wrap;gap:10px">'+
'<div style="flex:1 1 280px;border:1px solid #bbb;border-radius:6px;background:#fff"><div style="background:#eef1f6;padding:6px;font-size:14px">À : jules.m@mail.fr<br>Objet : Contrôle d’histoire</div><div style="padding:8px"><p>Coucou !</p><p>Tu vas bien ? Je révise pour le contrôle d’histoire de vendredi. Tu peux m’envoyer une photo de tes notes sur la Révolution française (le cours de mardi), s’il te plaît ? Je n’étais pas en classe : j’étais chez le dentiste. Merci beaucoup !</p><p>Bisous,<br>Emma</p></div></div>'+
'<div style="flex:1 1 280px;border:1px solid #bbb;border-radius:6px;background:#fff"><div style="background:#eef1f6;padding:6px;font-size:14px">À : jules.m@mail.fr<br>Objet : Vive les vacances !</div><div style="padding:8px"><p>Salut !</p><p>C’est bientôt la fin de l’année ! Pour fêter ça, avec la bande, on organise un barbecue samedi soir dans le jardin de mes parents. Tu viens ? Tu peux apporter des boissons ?</p><p>Bonne soirée et à samedi !<br>Noah</p></div></div></div>'},
{type:'ex',id:'e9',title:'Activité 9',consigne:'Lisez les deux courriels et répondez aux questions.',tr:{ko:'두 이메일을 읽고 질문에 답하세요.',en:'Read the two emails and answer the questions.'},items:[
 {type:'short',q:'Courriel 1 — Qui écrit ?',answer:'Emma',keywords:[['emma']]},
 {type:'short',q:'Courriel 1 — Quel est le sujet du courriel ?',answer:'Elle demande les notes du cours d’histoire pour réviser le contrôle.',keywords:[['note','cours','contrôle','controle','histoire','révis','revis']]},
 {type:'short',q:'Courriel 1 — Quand a lieu le contrôle ?',answer:'Vendredi',keywords:[['vendredi']]},
 {type:'mcq',q:'Courriel 1 — Où verrez-vous la personne qui écrit ?',options:['Au collège, en classe.','Chez le dentiste.','Dans un jardin.'],answer:0,explain:'contrôle d’histoire de vendredi → 학교에서 만남.'},
 {type:'short',q:'Courriel 2 — Qui écrit ?',answer:'Noah',keywords:[['noah']]},
 {type:'short',q:'Courriel 2 — Quel est le sujet du courriel ?',answer:'Une invitation à un barbecue pour fêter la fin de l’année.',keywords:[['barbecue','fête','fete','invit','vacances','fin de l']]},
 {type:'short',q:'Courriel 2 — Quand ?',answer:'Samedi soir',keywords:[['samedi']]},
 {type:'short',q:'Courriel 2 — Où verrez-vous la personne qui écrit ?',answer:'Dans le jardin de ses parents (chez Noah).',keywords:[['jardin','chez']]}
]},
{type:'text',id:'t10a',label:'Activité 10 — Lettre 1',title:'Lettre de Léa',source:'Document adapté pour la classe',paras:[
'Coucou !',
'Comment ça va ? Me voilà enfin à Québec, après un très long voyage en avion. Mauvaise surprise à l’aéroport : impossible de trouver ma valise, elle est restée à Paris ! Ça commence bien…',
'Mon cousin Hugo est venu me chercher. Il a quitté son travail à la banque (chut ! sa mère ne le sait pas encore) et maintenant, il est guide touristique. Je suis très contente de passer trois semaines ici avec lui et sa copine Kelly, une Canadienne anglophone. Je vais pouvoir progresser en anglais !',
'Demain, au programme : balade à vélo au bord du fleuve, visite du Vieux-Québec et dîner dans un restaurant typique.',
'Et toi, qu’est-ce que tu fais pendant les vacances ?',
'Bises et à bientôt,<br>Léa']},
{type:'ex',id:'e10a',title:'Activité 10 — Lettre 1',consigne:'Lisez la lettre de Léa et répondez aux questions.',tr:{ko:'레아의 편지를 읽고 질문에 답하세요.',en:'Read Léa’s letter and answer the questions.'},items:[
 {type:'mcq',q:'Quel est l’objectif de la lettre de Léa ?',options:['Vous inviter.','Vous féliciter.','Donner des nouvelles.'],answer:2},
 {type:'short',q:'Quel problème a eu Léa à son arrivée ?',answer:'Elle n’a pas trouvé sa valise : elle est restée à Paris.',keywords:[['valise','bagage']]},
 {type:'short',q:'Que fait le cousin de Léa à Québec ?',answer:'Il est guide touristique.',keywords:[['guide']]},
 {type:'short',q:'Combien de temps Léa va-t-elle rester à Québec ?',answer:'Trois semaines',keywords:[['trois semaines','3 semaines']]},
 {type:'short',q:'Que va faire Léa demain ? (3 réponses attendues)',answer:'Une balade à vélo, la visite du Vieux-Québec et un dîner dans un restaurant typique.',keywords:[['vélo','velo','balade'],['vieux','visite'],['dîner','diner','restaurant']],need:3,points:1.5}
]},
{type:'text',id:'t10b',label:'Activité 10 — Lettre 2',title:'Lettre de Yanis',source:'Document adapté pour la classe',paras:[
'Salut !',
'Ça va ? J’ai oublié de te proposer une chose importante : tu veux passer les vacances avec nous (si tes parents sont d’accord, bien sûr) ? Je pars samedi avec ma famille à Annecy, au bord du lac.',
'Ce serait génial si tu venais, parce que mon grand frère a trouvé un job d’été dans un camping et il ne vient pas avec nous. Avec toi, les journées au lac seront plus sympas !',
'Pour la rentrée, finalement, j’ai choisi le chinois. Ça m’intéresse plus que le latin. Et toi, tu as choisi quelle option ?',
'Réponds-moi vite ! À plus,<br>Yanis']},
{type:'ex',id:'e10b',title:'Activité 10 — Lettre 2',consigne:'Lisez la lettre de Yanis et répondez aux questions.',tr:{ko:'야니스의 편지를 읽고 질문에 답하세요.',en:'Read Yanis’s letter and answer the questions.'},items:[
 {type:'mcq',q:'Quel est l’objectif de la lettre de Yanis ?',options:['Vous inviter.','Vous féliciter.','Donner des nouvelles.'],answer:0,explain:'« tu veux passer les vacances avec nous ? » → 초대.'},
 {type:'short',q:'Quelle est la destination des vacances de Yanis ?',answer:'Annecy (au bord du lac)',keywords:[['annecy']]},
 {type:'short',q:'Que fait le frère de Yanis pendant les vacances ?',answer:'Il travaille dans un camping (job d’été).',keywords:[['camping','job','travail']]},
 {type:'short',q:'Quelle nouvelle matière Yanis va-t-il étudier à la rentrée ?',answer:'Le chinois',keywords:[['chinois']]}
]}
]});
