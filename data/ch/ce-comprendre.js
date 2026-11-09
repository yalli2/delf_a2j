DELF.chapter({
id:'ce-comprendre', part:'ce', stage:'comprendre', num:2, order:1,
title:'Comprendre l’épreuve de compréhension des écrits', tr:{ko:'독해 시험 이해하기',en:'Understanding the reading test'},
intro:{ko:'DELF A2 <b>독해(Compréhension des écrits)</b> 시험의 구성, 4가지 연습 유형, 지시문 읽는 법과 문제 유형(연결, 객관식, 단답형, 참/거짓+근거)을 알아봅니다.',en:'Discover the format of the DELF A2 reading test: 4 exercises, the instructions and the question types.',fr:'Découvrez l’épreuve de compréhension des écrits du DELF A2 : 4 exercices, la consigne et les types de questions.'},
blocks:[
{type:'note',kind:'info',title:'L’épreuve',tr:{ko:'시험 개요',en:'The test'},toc:true,html:
'<p>La <b>compréhension des écrits</b> est la <b>2<sup>e</sup> épreuve</b> du DELF A2 (après la compréhension de l’oral).</p>'+
'<table class="tbl"><tr><th>Ce qu’on fait</th><th>Durée</th><th>Note</th></tr>'+
'<tr><td>On répond à des questionnaires sur <b>3 ou 4 documents écrits</b> de la vie quotidienne.</td><td><b>30 minutes</b></td><td><b>/25</b></td></tr></table>'+
'<p><b>4 exercices</b> au niveau A2, avec 4 objectifs :</p>'+
'<ol><li><span class="say">Lire pour s’orienter</span> — 길 찾기·정보 찾기 (광고, 시간표, 메뉴)</li>'+
'<li><span class="say">Lire une correspondance</span> — 편지·이메일 읽기</li>'+
'<li><span class="say">Lire des instructions</span> — 규칙·사용법·레시피 읽기</li>'+
'<li><span class="say">Lire pour s’informer</span> — 기사·안내문 읽기</li></ol>'},
{type:'note',kind:'method',title:'Les savoir-faire',tr:{ko:'필요한 능력',en:'Key skills'},toc:true,html:
'<p>Pendant l’épreuve, il faut surtout être capable de :</p><ul>'+
'<li><b>identifier le type d’écrit</b> (lettre amicale, familiale, professionnelle…) — 글의 종류 파악</li>'+
'<li><b>comprendre le sujet ou le thème principal</b> du document — 주제 파악</li>'+
'<li><b>repérer des chiffres, des indications de temps ou de lieu</b> — 숫자·시간·장소 찾기</li>'+
'<li><b>identifier les actions ou les faits</b> — 행동·사실 파악</li>'+
'<li><b>vérifier des informations</b> (vrai / faux + justification) — 정보 확인</li></ul>'},
{type:'ex',id:'e1',title:'Activité — Les savoir-faire en exemples',consigne:'Lisez chaque petit document et répondez à la question.',tr:{ko:'각 짧은 글을 읽고 질문에 답하세요.',en:'Read each short document and answer the question.'},items:[
 {type:'mcq',q:'<i>« Coucou Inès ! Papa et moi, on arrive chez vous dimanche pour le déjeuner. Gros bisous, ta cousine Margot »</i><br>Quelle relation y a-t-il entre Inès et Margot ?',options:['Amicale.','Familiale.','Professionnelle.'],answer:1,explain:'« ta cousine » → 가족 관계(familiale).'},
 {type:'mcq',q:'<i>« L’association Les Pieds Agiles organise chaque samedi matin des balades de 10 km dans les collines. Prévoir de bonnes chaussures ! »</i><br>Que propose l’association ?',options:['Du théâtre.','De la natation.','De la randonnée.'],answer:2,explain:'balades de 10 km, bonnes chaussures → randonnée(하이킹).'},
 {type:'short',q:'<i>« Médiathèque Jules-Verne : ouverte du mardi au samedi, de 10 h à 18 h. »</i><br>Quels jours la médiathèque est-elle fermée ?',answer:'Le dimanche et le lundi.',keywords:[['dimanche'],['lundi']],need:2,explain:'화~토 개관 → 일요일과 월요일 휴관.'},
 {type:'mcq',q:'<i>« À Lyon, Camille va d’abord visiter le musée des Confluences. Ensuite, elle montera à la basilique de Fourvière. »</i><br>Que va visiter Camille en premier ?',options:['Un musée.','Un monument.','Une basilique.'],answer:0,explain:'« d’abord » = 먼저 → 박물관.'},
 {type:'tf',q:'<i>« Paul est élève au collège Victor-Hugo ; son frère Max, lui, va au lycée Lumière. »</i><br>Les deux frères vont dans la même école.',answer:false,justify:'Paul est élève au collège Victor-Hugo ; son frère Max, lui, va au lycée Lumière.'}
]},
{type:'note',kind:'info',title:'Les exercices et les documents',tr:{ko:'연습 유형과 문서',en:'Exercises and documents'},toc:true,html:
'<table class="tbl"><tr><th>Exercice</th><th>Documents possibles</th><th>Type d’exercice</th><th>Points</th></tr>'+
'<tr><td>1. Lire pour s’orienter</td><td>menus, horaires, prospectus, petites annonces</td><td>un tableau d’appariement (associer)</td><td><b>5</b></td></tr>'+
'<tr><td>2. Lire une correspondance</td><td>lettre standard, lettre personnelle, courriel, carte postale</td><td>un questionnaire</td><td><b>6</b></td></tr>'+
'<tr><td>3. Lire des instructions</td><td>règlement, mode d’emploi, recette, consignes</td><td>un questionnaire</td><td><b>6</b></td></tr>'+
'<tr><td>4. Lire pour s’informer</td><td>brochure, court article, affiche, publicité, guide touristique</td><td>un questionnaire</td><td><b>8</b></td></tr></table>'},
{type:'note',kind:'tip',title:'La consigne',tr:{ko:'지시문',en:'The instructions'},toc:true,html:
'<ul><li><b>C’est quoi ?</b> Une phrase générale au début de l’exercice. Elle explique <b>ce qu’il faut faire</b>.<br>Ex. : <span class="say">Répondez aux questions en cochant la bonne réponse ou en écrivant l’information demandée.</span></li>'+
'<li><b>Elle est importante ?</b> Oui ! Elle donne la <b>situation</b> (qui ? où ? quel document ?).<br>Ex. : <span class="say">Vous lisez cet article dans un journal belge. Répondez aux questions.</span></li>'+
'<li><b>Quand la lire ?</b> <b>Avant</b> de lire les documents. — 문서를 읽기 전에 지시문부터!</li></ul>'},
{type:'note',kind:'method',title:'Les questions et les réponses',tr:{ko:'문제 유형',en:'Question types'},toc:true,html:
'<p>Les questions suivent toujours <b>l’ordre du document</b>. (질문 순서 = 글의 순서)</p><ul>'+
'<li><b>Le tableau d’appariement</b> : associer chaque situation au bon texte. — 연결하기</li>'+
'<li><b>Le QCM</b> (questions à choix multiple) : choisir la bonne réponse parmi 3 (mots ou dessins). Une seule réponse est correcte. — 객관식</li>'+
'<li><b>La QROC</b> (question à réponse ouverte courte) : écrire seulement le ou les mots attendus. Pas besoin de phrase complète. — 단답형</li>'+
'<li><b>Vrai / Faux + justification</b> : cocher vrai ou faux et recopier la phrase du texte qui le prouve. — 참/거짓 + 근거 문장</li></ul>'},
{type:'note',kind:'tip',title:'Conseils : quand lire les questions ?',tr:{ko:'팁: 질문은 언제 읽을까?',en:'Tip: when to read the questions?'},html:
'<ol><li>D’abord, lisez bien la <b>consigne</b> et identifiez la situation de communication.</li><li>Puis, lisez les <b>questions</b> : elles vous aident à lire le texte.</li><li>Enfin, lisez le <b>texte</b> et répondez.</li></ol>'},
{type:'ex',id:'e2',title:'Vérifiez vos connaissances',consigne:'Répondez aux questions sur l’épreuve.',tr:{ko:'시험에 관한 질문에 답하세요.',en:'Answer the questions about the test.'},items:[
 {type:'mcq',q:'Combien de temps dure l’épreuve de compréhension des écrits ?',options:['20 minutes.','30 minutes.','45 minutes.'],answer:1,explain:'독해 시험은 30분.'},
 {type:'mcq',q:'Sur combien de points est-elle notée ?',options:['/20','/25','/100'],answer:1},
 {type:'match',q:'Associez chaque exercice à un document possible.',left:['Lire pour s’orienter','Lire une correspondance','Lire des instructions','Lire pour s’informer'],right:['un courriel d’un ami','un court article de journal','des petites annonces','une recette de cuisine'],answer:[2,0,3,1]},
 {type:'tf',q:'Les questions suivent l’ordre du document.',answer:true,justify:'Les questions et les réponses sont toujours dans l’ordre du document.'},
 {type:'tf',q:'Pour une QROC, il faut écrire une phrase complète avec sujet et verbe.',answer:false,justify:'On écrit seulement le ou les mots attendus.'},
 {type:'mcq',q:'Dans un exercice vrai/faux, que faut-il ajouter ?',options:['Un dessin.','Une justification (la phrase du texte).','Son opinion.'],answer:1},
 {type:'order',q:'Remettez les étapes dans le bon ordre.',items:['Je lis la consigne.','Je lis les questions.','Je lis le document.','Je réponds aux questions.']}
]}
]});
