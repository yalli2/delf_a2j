DELF.chapter({
id:'ce-p3', part:'ce', stage:'preparer', num:3, order:3,
title:'Lire des instructions', tr:{ko:'지시문·안내 읽기',en:'Reading instructions'},
intro:{ko:'요리법과 지시가 담긴 개인 메시지를 읽고 <b>재료, 시간, 단계의 순서</b>를 정확히 파악하는 연습을 합니다.',en:'Understand recipes and personal messages with instructions: ingredients, times and order of steps.',fr:'Comprendre des recettes de cuisine et suivre un message personnel avec des instructions.'},
blocks:[
{type:'note',kind:'lex',title:'Le vocabulaire de la recette',tr:{ko:'요리법 어휘',en:'Recipe vocabulary'},toc:true,html:
'<ul><li><b>Les rubriques</b> : <span class="say">pour 4 personnes</span>, <span class="say">difficulté</span>, <span class="say">temps de préparation</span>, <span class="say">temps de cuisson</span>, <span class="say">ingrédients</span></li>'+
'<li><b>Les verbes</b> (à l’infinitif ou à l’impératif) : <span class="say">couper, éplucher, râper, mélanger, ajouter, saler, poivrer, faire cuire, servir</span></li>'+
'<li><b>Les ustensiles</b> : <span class="say">une poêle, une casserole, un bol, une cuillère, un four</span></li></ul>'+
'<p>⏱️ Temps total = temps de préparation + temps de cuisson.</p>'},
{type:'text',id:'t11',label:'Activité 11 — Document',title:'Galettes de carottes de Mamie Rose',source:'Recette adaptée pour la classe',html:
'<div style="display:flex;flex-wrap:wrap;gap:16px;background:#eef6ea;padding:10px;border-radius:6px"><div style="flex:1 1 200px"><p>Pour 4 personnes<br>Difficulté : ★☆☆<br><b>Temps de préparation</b> : 15 min<br><b>Temps de cuisson</b> : 20 min</p><p><b>Ingrédients :</b><br>3 carottes<br>1 œuf<br>2 cuillères de farine<br>un peu de sel<br>un peu d’huile</p></div>'+
'<div style="flex:2 1 260px"><ol><li>Éplucher et râper les carottes.</li><li>Ajouter l’œuf et la farine.</li><li>Saler et bien mélanger avec une cuillère.</li><li>Former 6 petites galettes avec les mains.</li><li>Faire cuire les galettes dans l’huile chaude, 5 minutes de chaque côté.</li><li>Servir avec du fromage blanc.</li></ol></div></div>'},
{type:'ex',id:'e11',title:'Activité 11',consigne:'Vous lisez cette recette dans un livre de cuisine. Répondez aux questions.',tr:{ko:'요리책에서 이 레시피를 읽습니다. 질문에 답하세요.',en:'You read this recipe in a cookbook. Answer the questions.'},items:[
 {type:'tf',q:'La recette est difficile à faire.',answer:false,justify:'Difficulté : ★☆☆'},
 {type:'short',q:'Combien de temps est nécessaire pour faire toute la recette ?',answer:'35 minutes (15 + 20)',keywords:[['35']],explain:'préparation 15 min + cuisson 20 min.'},
 {type:'mcq',q:'Combien d’ingrédients sont nécessaires ?',options:['4','5','7'],answer:1,explain:'carottes, œuf, farine, sel, huile (fromage blanc는 재료 목록에 없음).'},
 {type:'mcq',q:'Il y a combien d’étapes dans la recette ?',options:['5','6','7'],answer:1}
]},
{type:'text',id:'t12',label:'Activité 12 — Document',title:'??? à l’ail',source:'Recette adaptée pour la classe',html:
'<div style="background:#fbeee0;padding:10px;border-radius:6px"><p>Pour 4 personnes — Difficulté : ★☆☆<br>Temps de préparation : 10 min — Temps de cuisson : ??? min<br><b>Ingrédients</b> : 500 g de champignons, 30 g de beurre, 2 gousses d’ail, du persil, sel, poivre</p>'+
'<ol><li>??? les champignons et les couper en quatre.</li><li>Mettre le beurre à fondre dans une grande poêle.</li><li>Quand ??? est fondu, ajouter les champignons. Faire cuire 10 minutes, saler et ???. Ajouter l’ail et le persil.</li><li>Laisser ??? encore 5 minutes.</li></ol></div>'},
{type:'ex',id:'e12',title:'Activité 12',consigne:'Vous lisez cette recette dans un livre de cuisine. Écrivez les mots effacés.',tr:{ko:'요리책의 레시피에서 지워진 단어를 쓰세요.',en:'Write the missing words of the recipe.'},items:[
 {type:'info',html:'Mots possibles : <i>champignons — laver — le beurre — poivrer — cuire — 15 — la farine — boire</i>'},
 {type:'gap',q:'Complétez la recette.',text:'Titre : {{Champignons|les champignons}} à l’ail.<br>Temps de cuisson : {{15}} min.<br>1. {{Laver}} les champignons et les couper en quatre.<br>3. Quand [[*le beurre|la farine|le persil]] est fondu, ajouter les champignons. Saler et {{poivrer}}.<br>4. Laisser {{cuire}} encore 5 minutes.',explain:'cuisson : 10 min + 5 min = 15 min. 녹는 것(fondu)은 버터.'}
]},
{type:'note',kind:'tip',title:'Suivre un message avec des instructions',tr:{ko:'지시가 담긴 메시지 이해하기',en:'Following a message with instructions'},toc:true,html:
'<p>Un message amical a une structure : <b>salutation</b> (<span class="say">Salut !</span>) → <b>nouvelles</b> (<span class="say">Comment ça va ?</span>) → <b>rappel / information</b> → <b>instructions</b> (impératif : <span class="say">prends</span>, <span class="say">n’oublie pas</span>, <span class="say">sois à l’heure</span>) → <b>formule finale</b> (<span class="say">À samedi !</span>).</p><p>Mots pour l’ordre : <span class="say">d’abord, ensuite, puis, enfin, et surtout</span>.</p>'},
{type:'ex',id:'e13',title:'Activité 13',consigne:'Vous avez reçu ce message déchiré d’une amie francophone. Remettez les phrases dans l’ordre.',tr:{ko:'프랑스어권 친구의 찢어진 메시지를 받았습니다. 문장을 순서대로 놓으세요.',en:'You received this torn message from a French-speaking friend. Put the sentences in order.'},html:'<p><i>Salut !</i> … <i>Camille</i></p>',items:[
 {type:'order',q:'Remettez les morceaux du message de Camille dans l’ordre.',items:['Comment ça va ?','N’oublie pas : samedi, c’est la sortie à vélo avec le club.','Mets dans ton sac un pique-nique et une bouteille d’eau (on roule toute la journée !).','Et surtout, prends ton casque et un imperméable !','Je t’attends devant chez moi à 8 h 15, alors sois à l’heure.','À samedi !'],points:2,explain:'nouvelles → rappel → instructions (sac, casque) → rendez-vous → formule finale.'}
]},
{type:'text',id:'t14',label:'Activité 14 — Document',title:'Courriel de Manon',source:'Document adapté pour la classe',html:
'<div style="border:1px solid #bbb;border-radius:6px;background:#fff"><div style="background:#eef1f6;padding:6px;font-size:14px">De : Manon<br>Objet : Fête surprise</div><div style="padding:8px">'+
'<p>Salut !</p><p>Super nouvelle : la salle de la maison des jeunes est réservée ! J’ai eu la responsable au téléphone ce matin. Maintenant, il faut préparer la suite de la fête surprise pour les 15 ans de Yasmine. Voilà ce qu’il faut faire, dans l’ordre :</p>'+
'<ul><li>envoyer à Tom la liste des courses (boissons, chips, gâteaux) ;</li><li>contacter Adam pour la musique (il a une grosse enceinte) ;</li><li>acheter jeudi des ballons et des guirlandes pour décorer la salle ;</li><li>envoyer un SMS à tous les copains pour leur donner rendez-vous samedi à 18 h 30.</li></ul>'+
'<p>Le plus compliqué, c’est de faire venir Yasmine à la salle (vers 19 h) sans lui parler de la fête. J’ai une petite idée, je t’explique demain.</p>'+
'<p>Ah, et n’oublie pas de me donner demain ta participation : 15 euros par personne.</p><p>Bisous et à demain !<br>Manon</p></div></div>'},
{type:'ex',id:'e14',title:'Activité 14',consigne:'Vous lisez ce message d’une amie française. Répondez aux questions.',tr:{ko:'프랑스 친구의 메시지를 읽고 질문에 답하세요.',en:'Read this message from a French friend and answer the questions.'},items:[
 {type:'short',q:'Qu’est-ce qui est déjà fait pour la fête ?',answer:'La salle (de la maison des jeunes) est réservée.',keywords:[['salle'],['réserv','reserv']],need:2},
 {type:'order',q:'Remettez les tâches à faire dans l’ordre.',items:['📝 Envoyer la liste des courses à Tom','🔊 Contacter Adam pour la musique','🎈 Acheter des ballons et des guirlandes','📱 Envoyer un SMS aux copains']},
 {type:'mcq',q:'Attention : une de ces images ne correspond à aucune tâche. Laquelle ?',options:['📝 une liste','🎁 un cadeau','🎈 des ballons','🔊 une enceinte','📱 un téléphone'],answer:1,explain:'메일에 선물(cadeau) 구입은 없습니다.'},
 {type:'short',q:'Que devez-vous donner à Manon ?',answer:'15 euros (ma participation)',keywords:[['15']]}
]}
]});
