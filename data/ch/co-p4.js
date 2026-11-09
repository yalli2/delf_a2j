DELF.chapter({
id:'co-p4', part:'co', stage:'preparer', num:4, order:4,
title:'Comprendre une discussion entre locuteurs natifs',
tr:{ko:'원어민 사이의 대화 이해하기',en:'Understanding a conversation between native speakers'},
intro:{ko:'두 사람의 대화를 듣고 <b>관계(tu/vous)</b>, 대화 주제, 그리고 동의·거절·감정 같은 <b>반응</b>을 파악하는 연습입니다.',en:'Practise understanding conversations: the relationship between speakers, the topic and their reactions.',fr:'S’entraîner à comprendre des conversations : la relation entre les personnes, le thème et les réactions.'},
blocks:[
{type:'note',kind:'lex',title:'Comprendre des rituels sociaux',tr:{ko:'사회적 인사 표현 이해하기',en:'Social rituals'},toc:true,html:'<table><tr><th>Relation formelle (vous)</th><th>Relation amicale (tu)</th><th>Relation familiale</th></tr><tr><td><span class="say">Bonjour madame, enchanté.</span><br><span class="say">Comment allez-vous ?</span><br><span class="say">Au revoir, bonne journée.</span></td><td><span class="say">Salut ! Ça va ?</span><br><span class="say">Coucou !</span><br><span class="say">À plus ! Ciao !</span></td><td><span class="say">Bonjour mon chéri !</span><br><span class="say">Bisous, maman !</span><br><span class="say">Bonne nuit, papi.</span></td></tr></table><p>Les personnes <b>ne se connaissent pas</b> : elles se présentent (<span class="say">Je m’appelle…, je suis le nouveau voisin</span>).</p>'},
{type:'audio',id:'a29',title:'Activité 29 — Trois conversations',plays:2,situation:{ko:'세 개의 짧은 대화',en:'Three short conversations',fr:'Trois petites conversations'},names:{F:'Femme',M:'Homme',F2:'Jeune fille',M2:'Garçon'},lines:[
 {s:'N',t:'Conversation 1.'},
 {s:'M',t:'Bonjour madame. Excusez-moi, je suis monsieur Faure, le nouveau professeur de musique. Je cherche le bureau du directeur.'},
 {s:'F',t:'Bonjour monsieur, enchantée. Je suis madame Leroy, la secrétaire. Le bureau est au premier étage, je vous accompagne.'},
 {s:'N',t:'Conversation 2.'},
 {s:'F2',t:'Coucou Mamie ! Ça fait plaisir de te voir ! Tu m’as manqué !'},
 {s:'F',t:'Bonjour ma chérie ! Viens me faire un gros bisou. Tu as encore grandi, toi !'},
 {s:'N',t:'Conversation 3.'},
 {s:'M2',t:'Salut Hugo ! Ça va ? T’étais où hier ?'},
 {s:'M',t:'Salut mec ! J’étais malade. Allez, à plus, on se voit à la cantine !'}
]},
{type:'ex',id:'e29',title:'Activité 29',consigne:'1. Écoutez les trois conversations. Les personnes se connaissent-elles ? 2. Écoutez encore une fois. Associez le type de relation à la conversation et notez les salutations.',tr:{ko:'1. 세 대화를 듣고 서로 아는 사이인지 고르세요. 2. 다시 듣고 관계 유형을 연결하고 인사 표현을 쓰세요.',en:'1. Listen: do the people know each other? 2. Listen again, match the relationship and note the greetings.'},items:[
 {type:'match',q:'1 — Les personnes se connaissent-elles ?',left:['Conversation 1','Conversation 2','Conversation 3'],right:['Les personnes se connaissent.','Elles ne se connaissent pas.'],answer:[1,0,0]},
 {type:'match',q:'2a — Associez le type de relation.',left:['Conversation 1','Conversation 2','Conversation 3'],right:['relation familiale','relation formelle','relation amicale'],answer:[1,0,2]},
 {type:'short',q:'2b — Conversation 1 : expressions de salutation',answer:'Bonjour madame — Bonjour monsieur, enchantée',keywords:[['madame','monsieur'],['enchanté','enchante','excusez']],need:1},
 {type:'short',q:'2b — Conversation 2 : expressions de salutation',answer:'Coucou Mamie ! — Bonjour ma chérie, viens me faire un gros bisou',keywords:[['coucou','mamie'],['chérie','cherie','bisou']],need:1},
 {type:'short',q:'2b — Conversation 3 : expressions de salutation',answer:'Salut ! Ça va ? — Salut mec ! À plus !',keywords:[['salut'],['à plus','a plus','ça va','ca va']],need:1}
]},

{type:'audio',id:'a30',title:'Activité 30 — La journée sportive',plays:2,situation:{ko:'두 친구의 대화',en:'Two friends talking',fr:'Deux amis discutent'},names:{M:'Théo',M2:'Elias'},lines:[
 {s:'M',t:'Salut Elias ! Ça va, toi ?'},
 {s:'M2',t:'Oui, ça va. Il se passe quoi ? T’as l’air tout content !'},
 {s:'M',t:'Ben oui ! Le lycée organise une grande journée sportive le mercredi 15 mai ! Il y aura des matchs contre les autres lycées de la ville.'},
 {s:'M2',t:'Ah bon ? T’as vu ça où ?'},
 {s:'M',t:'Sur Internet, sur le site du lycée. Le mercredi, il y a deux épreuves : le relais 4 fois 100 mètres et le tournoi de volley. Tu viens avec moi ?'},
 {s:'M2',t:'Le volley, carrément ! On s’inscrit quand ?'},
 {s:'M',t:'Avant vendredi, au bureau du prof de sport.'}
]},
{type:'ex',id:'e30',title:'Activité 30',consigne:'1. Écoutez la conversation une fois. Répondez aux questions. 2. Écoutez encore une fois. Notez les questions entendues et écrivez-les de manière formelle.',tr:{ko:'1. 대화를 한 번 듣고 답하세요. 2. 다시 듣고 들은 질문을 쓰고 격식 있는 표현으로 바꾸세요.',en:'1. Listen once and answer. 2. Listen again, note the questions and rewrite them formally.'},items:[
 {type:'short',q:'1a. Quelle est l’information principale de Théo ?',answer:'Le lycée organise une journée sportive le mercredi 15 mai.',keywords:[['journée','journee','sport','match']],need:1},
 {type:'mcq',q:'1b. Elias peut lire cette information…',options:['au lycée.','sur Internet.','dans le journal.'],answer:1},
 {type:'short',q:'1c. Quelles sont les deux épreuves du mercredi ?',answer:'le relais 4 × 100 mètres et le tournoi de volley',keywords:[['relais','100'],['volley']],need:2},
 {type:'short',q:'2a. Notez les autres questions entendues (après « Ça va, toi ? » et « Il se passe quoi ? »).',answer:'T’as vu ça où ? — Tu viens avec moi ? — On s’inscrit quand ?',keywords:[['vu ça où','vu ca ou','où'],['tu viens'],['quand']],need:2,lines:2},
 {type:'match',q:'2b. Associez chaque question familière à sa forme formelle.',left:['Ça va, toi ?','Il se passe quoi ?','T’as vu ça où ?','Tu viens avec moi ?','On s’inscrit quand ?'],right:['Où as-tu vu cela ?','Quand pouvons-nous nous inscrire ?','Est-ce que tu vas bien ?','Viens-tu avec moi ?','Qu’est-ce qui se passe ?'],answer:[2,4,0,3,1],explain:'Forme formelle : inversion (Où as-tu…?) ou « est-ce que », et « nous » au lieu de « on ».'}
]},

{type:'note',kind:'method',title:'Comprendre le thème de discussion',tr:{ko:'대화 주제 파악하기',en:'Finding the topic of a discussion'},toc:true,html:'<ul><li>Qui parle ? (parent / enfant, amis, vendeur / client…)</li><li>De quoi parlent-ils ? Repérez les <b>mots qui reviennent</b>.</li><li>Que demandent-ils ? <span class="say">Tu peux… ? Tu pourrais… ? N’oublie pas de…</span></li></ul>'},
{type:'audio',id:'a31',title:'Activité 31 — Trois dialogues en famille',plays:2,situation:{ko:'가족 간의 세 대화',en:'Three family dialogues',fr:'Trois dialogues en famille'},names:{M:'Père',F:'Mère',F2:'Louise',M2:'Paul'},lines:[
 {s:'N',t:'Dialogue 1.'},
 {s:'M',t:'Louise, je pars à la pharmacie, je reviens dans vingt minutes. Tu peux surveiller ton petit frère, s’il te plaît ? Il joue dans le salon.'},
 {s:'F2',t:'D’accord, papa, pas de problème.'},
 {s:'N',t:'Dialogue 2.'},
 {s:'F2',t:'Maman, cet après-midi, je peux faire du vélo avec Inès ? Et ce soir, je peux dormir chez elle ?'},
 {s:'F',t:'Le vélo, oui, mais avec ton casque ! Mais dormir chez Inès, non : demain, tu as un contrôle de maths à 8 heures.'},
 {s:'N',t:'Dialogue 3.'},
 {s:'F',t:'Paul, Zoé, vos cousins de Lyon arrivent ce soir pour le week-end !'},
 {s:'M2',t:'Génial ! Je vais leur faire un gâteau au chocolat !'},
 {s:'F2',t:'Oh non… Ils vont encore dormir dans ma chambre et tout déranger. Ça ne me fait pas plaisir.'}
]},
{type:'ex',id:'e31',title:'Activité 31',consigne:'1. Écoutez les trois dialogues. Associez une tâche à chaque dialogue. 2. Écoutez encore une fois et répondez aux questions.',tr:{ko:'1. 세 대화를 듣고 각 대화에 맞는 일을 연결하세요. 2. 다시 듣고 답하세요.',en:'1. Listen and match a task with each dialogue. 2. Listen again and answer.'},items:[
 {type:'match',q:'1 — Associez.',left:['Dialogue 1','Dialogue 2','Dialogue 3'],right:['🧒 A. surveiller un enfant','🎂 B. faire un gâteau','🍽️ C. mettre la table','🚲 D. faire du vélo','🗄️ E. ranger l’armoire'],answer:[0,3,1]},
 {type:'short',q:'Dialogue 1 — Où part le père ?',answer:'à la pharmacie',keywords:[['pharmacie']],need:1},
 {type:'short',q:'Dialogue 2 a. Louise veut faire deux choses. Lesquelles ?',answer:'faire du vélo avec Inès et dormir chez elle',keywords:[['vélo','velo'],['dormir']],need:2},
 {type:'mcq',q:'Dialogue 2 b. La mère est-elle d’accord avec les deux choses ?',options:['OUI','NON'],answer:1},
 {type:'short',q:'Dialogue 2 c. Pourquoi ?',answer:'Louise a un contrôle de maths demain à 8 heures.',keywords:[['contrôle','controle','examen','maths']],need:1},
 {type:'short',q:'Dialogue 3 a. Qui va venir chez Paul et Zoé ?',answer:'leurs cousins de Lyon',keywords:[['cousin']],need:1},
 {type:'short',q:'Dialogue 3 b. Quelle est la différence d’accueil entre Paul et Zoé ?',answer:'Paul est content (il va faire un gâteau) ; Zoé n’est pas contente (ils vont dormir dans sa chambre).',keywords:[['content','génial','genial','gâteau','gateau'],['pas content','pas plaisir','chambre','déranger','deranger']],need:2,lines:2}
]},

{type:'audio',id:'a32',title:'Activité 32 — Léna n’est pas prête',plays:2,situation:{ko:'아빠와 딸의 대화',en:'A father and his daughter',fr:'Un père parle à sa fille'},names:{M:'Père',F2:'Léna'},lines:[
 {s:'M',t:'Léna ! Il est 9 heures 20 ! Ton cours de piano commence à 9 heures 30 et tu es encore en pyjama !'},
 {s:'F2',t:'Oh non, papa, j’ai oublié ! Je regardais une série…'},
 {s:'M',t:'Ce n’est pas possible ! Madame Girard t’attend, et moi, je dois emmener ton frère au foot à 10 heures !'},
 {s:'F2',t:'Je sais, je sais… Écoute, je m’habille en deux minutes et j’y vais à vélo. Comme ça, tu peux partir avec Tom directement.'},
 {s:'M',t:'Bon, d’accord. Mais dépêche-toi !'}
]},
{type:'ex',id:'e32',title:'Activité 32',consigne:'1. Écoutez la conversation une fois. Répondez aux questions. 2. Écoutez encore une fois et répondez.',tr:{ko:'1. 대화를 한 번 듣고 답하세요. 2. 다시 듣고 답하세요.',en:'1. Listen once and answer. 2. Listen again and answer.'},items:[
 {type:'short',q:'1a. Qui parle à qui ?',answer:'Un père parle à sa fille Léna.',keywords:[['père','pere','papa'],['fille','léna','lena']],need:2},
 {type:'mcq',q:'1b. Le père n’est pas content parce que Léna…',options:['n’a pas fait ses devoirs.','n’est pas prête à partir.','n’est pas allée à son cours.'],answer:1},
 {type:'short',q:'1c. On parle de deux autres personnes. Lesquelles ?',answer:'Madame Girard (la professeure de piano) et Tom (le frère)',keywords:[['girard','professeur','prof'],['tom','frère','frere']],need:2},
 {type:'short',q:'2a. Où doit aller Léna ?',answer:'à son cours de piano',keywords:[['piano']],need:1},
 {type:'short',q:'2b. Quelle solution propose Léna ?',answer:'Elle s’habille vite et va au cours à vélo.',keywords:[['vélo','velo']],need:1}
]},

{type:'audio',id:'a33',title:'Activité 33 — Mathis à la librairie',plays:2,situation:{ko:'서점에서의 대화',en:'A conversation in a bookshop',fr:'Une conversation dans une librairie'},names:{F:'Mme Garnier',M2:'Mathis'},lines:[
 {s:'F',t:'Bonjour… Mais c’est Mathis ! Tu te souviens de moi ? J’étais ta maîtresse en CM2 !'},
 {s:'M2',t:'Madame Garnier ! Bien sûr ! Vous travaillez ici maintenant ?'},
 {s:'F',t:'Oui, j’ai quitté l’école l’année dernière. Alors, qu’est-ce que tu cherches ?'},
 {s:'M2',t:'Je prends le nouveau tome de « Capitaine Comète » et un carnet de dessin. Vous savez, ma passion, c’est toujours la bande dessinée !'},
 {s:'F',t:'Je me rappelle, tu dessinais tout le temps en classe !'},
 {s:'M2',t:'Oui ! Et maintenant, je dessine une petite BD chaque semaine pour le journal du collège.'}
]},
{type:'ex',id:'e33',title:'Activité 33',consigne:'1. Écoutez le dialogue une fois. Répondez aux questions. 2. Écoutez encore une fois et répondez.',tr:{ko:'1. 대화를 한 번 듣고 답하세요. 2. 다시 듣고 답하세요.',en:'1. Listen once and answer. 2. Listen again and answer.'},items:[
 {type:'mcq',q:'1a. Mathis se trouve…',options:['à la bibliothèque.','dans une librairie.','dans un supermarché.'],answer:1},
 {type:'short',q:'1b. Mathis achète deux choses. Lesquelles ?',answer:'une BD (le nouveau tome de « Capitaine Comète ») et un carnet de dessin',keywords:[['comète','comete','bd','tome'],['carnet']],need:2},
 {type:'short',q:'2a. Pourquoi Mathis connaît-il Madame Garnier ?',answer:'C’était sa maîtresse en CM2.',keywords:[['maîtresse','maitresse','professeur','institutrice','cm2','école','ecole']],need:1},
 {type:'short',q:'2b. Quelle est la passion de Mathis ?',answer:'la bande dessinée',keywords:[['bande dessinée','bande dessinee','bd']],need:1},
 {type:'short',q:'2c. Quelle est l’activité de Mathis ?',answer:'Il dessine une BD chaque semaine pour le journal du collège.',keywords:[['dessin'],['journal']],need:2}
]},

{type:'audio',id:'a34',title:'Activité 34 — L’inscription en ligne',plays:1,situation:{ko:'대학 지원 사이트에 대한 대화',en:'A conversation about an online application site',fr:'Deux lycéens parlent du site d’inscription'},names:{F2:'Clara',M2:'Ethan'},lines:[
 {s:'F2',t:'Ethan, tu peux m’aider ? Je ne comprends rien au site pour s’inscrire dans les études après le lycée.'},
 {s:'M2',t:'Oui, c’est simple. D’abord, tu te connectes sur le site avec ton numéro d’élève.'},
 {s:'F2',t:'Justement, c’est mon premier problème : j’ai oublié mon mot de passe !'},
 {s:'M2',t:'Tu cliques sur « mot de passe oublié », tu en reçois un nouveau par mail. Après, tu fais tes choix d’études, par exemple « école d’infirmière » ou « langues étrangères ». En juin, le site te répond, et tu dois confirmer la réponse. Et enfin, en juillet, tu passes ton bac !'},
 {s:'F2',t:'Merci, tu es génial !'}
]},
{type:'ex',id:'e34',title:'Activité 34',consigne:'Écoutez le dialogue. Répondez aux questions.',tr:{ko:'대화를 듣고 질문에 답하세요.',en:'Listen to the dialogue and answer the questions.'},items:[
 {type:'mcq',q:'a. Clara et Ethan discutent du site pour…',options:['passer le bac.','s’inscrire à des études.','parler de leurs orientations.'],answer:1},
 {type:'order',q:'b. Classez les étapes dans l’ordre des actions.',items:['Se connecter sur le site','Faire un choix d’études','Confirmer la réponse du site','Passer le bac']},
 {type:'short',q:'c. Quel est le premier problème de Clara ?',answer:'Elle a oublié son mot de passe.',keywords:[['mot de passe','code']],need:1}
]},

{type:'note',kind:'lex',title:'Comprendre des interactions : accord et désaccord',tr:{ko:'상호작용 이해하기: 동의와 반대',en:'Agreeing and disagreeing'},toc:true,html:'<table><tr><th>Accord 👍</th><th>Désaccord 👎</th></tr><tr><td><span class="say">D’accord !</span> <span class="say">Bonne idée !</span> <span class="say">Tu as raison.</span> <span class="say">Carrément !</span> <span class="say">Je suis d’accord avec toi.</span></td><td><span class="say">Pas question !</span> <span class="say">Je ne suis pas d’accord.</span> <span class="say">Tu rigoles ?</span> <span class="say">Ça ne me tente pas.</span> <span class="say">Non, je préfère…</span></td></tr></table><p>Pour <b>encourager</b> : <span class="say">Ne t’inquiète pas, tu vas y arriver !</span> <span class="say">Courage !</span></p>'},
{type:'audio',id:'a35',title:'Activité 35 — Les exposés',plays:2,situation:{ko:'두 학생의 대화',en:'Two students talking',fr:'Deux élèves discutent'},names:{F2:'Margot',M2:'Karim'},lines:[
 {s:'F2',t:'Salut Karim ! Tu as choisi ton sujet pour l’exposé de la semaine prochaine ?'},
 {s:'M2',t:'Oui ! En histoire, je vais préparer un exposé sur les châteaux forts, avec une maquette en carton !'},
 {s:'F2',t:'Waouh, quelle bonne idée ! C’est super original !'},
 {s:'M2',t:'Et toi ?'},
 {s:'F2',t:'Moi… j’ai trois exposés : en géographie, en sciences et en anglais. Je n’ai pas le temps, j’ai peur de ne pas finir… Je suis vraiment stressée.'},
 {s:'M2',t:'Mais non, ne t’inquiète pas ! Tu es la meilleure de la classe. On peut travailler ensemble à la bibliothèque mercredi, si tu veux. Tu vas y arriver !'}
]},
{type:'ex',id:'e35',title:'Activité 35',consigne:'1. Écoutez le dialogue une fois. Répondez aux questions. 2. Écoutez encore une fois et répondez.',tr:{ko:'1. 대화를 한 번 듣고 답하세요. 2. 다시 듣고 답하세요.',en:'1. Listen once and answer. 2. Listen again and answer.'},items:[
 {type:'short',q:'1a. Quel est le thème de discussion entre Margot et Karim ?',answer:'les exposés à l’école',keywords:[['exposé','expose']],need:1},
 {type:'gap',q:'1b. Écrivez les quatre matières scolaires entendues.',text:'1. {{histoire|géographie|sciences|anglais}} — 2. {{géographie|histoire|sciences|anglais}} — 3. {{sciences|histoire|géographie|anglais}} — 4. {{anglais|histoire|géographie|sciences}}'},
 {type:'short',q:'2a. Qu’est-ce que Karim va préparer ?',answer:'un exposé sur les châteaux forts, avec une maquette',keywords:[['château','chateau','maquette']],need:1},
 {type:'short',q:'2b. Quelle est la réaction de Margot à l’activité de Karim ? Écrivez l’expression entendue.',answer:'Elle est enthousiaste : « Waouh, quelle bonne idée ! C’est super original ! »',keywords:[['bonne idée','bonne idee','original','waouh']],need:1},
 {type:'mcq',q:'2c. Pour son activité, Margot est…',options:['satisfaite.','inquiète.','malheureuse.'],answer:1,explain:'« j’ai peur de ne pas finir… je suis stressée ».'},
 {type:'mcq',q:'2d. Quelle est la réaction de Karim au sentiment de Margot ?',options:['triste','soulagé','encourageant'],answer:2},
 {type:'short',q:'2d. Justifiez en écrivant les mots entendus.',answer:'Ne t’inquiète pas ! Tu vas y arriver !',keywords:[['inquiète','inquiete'],['arriver','meilleure']],need:1}
]},

{type:'audio',id:'a36',title:'Activité 36 — Quatre dialogues',plays:2,situation:{ko:'네 개의 짧은 대화',en:'Four short dialogues',fr:'Quatre petits dialogues'},names:{F:'Femme',M:'Homme',F2:'Jeune fille',M2:'Garçon'},lines:[
 {s:'N',t:'Dialogue 1.'},
 {s:'M2',t:'Samedi, on pourrait aller au bowling, puis manger une pizza ?'},
 {s:'F2',t:'Bonne idée ! Tu as raison, on n’est pas sortis depuis longtemps. Carrément !'},
 {s:'N',t:'Dialogue 2.'},
 {s:'F2',t:'Papa, l’année prochaine, je voudrais faire une formation de cuisinière.'},
 {s:'M',t:'Cuisinière ? Pas question ! Tu as de très bonnes notes, tu dois aller au lycée général.'},
 {s:'N',t:'Dialogue 3.'},
 {s:'F',t:'Pour notre voyage au Portugal, je vous présente le programme : cinq jours à Lisbonne, puis deux jours à la plage.'},
 {s:'M',t:'Je suis tout à fait d’accord avec vous, c’est parfait pour les élèves.'},
 {s:'N',t:'Dialogue 4.'},
 {s:'M2',t:'Le directeur dit que la cantine va fermer à 13 heures au lieu de 14 heures.'},
 {s:'F2',t:'Je ne suis pas d’accord ! On n’aura pas le temps de manger. Tu rigoles ou quoi ?'}
]},
{type:'ex',id:'e36',title:'Activité 36',consigne:'1. Écoutez les quatre dialogues une fois. Les personnes sont-elles d’accord ? Associez le thème au dialogue. 2. Écoutez encore une fois. Écrivez les expressions d’accord ou de désaccord.',tr:{ko:'1. 네 대화를 듣고 동의/반대 여부와 주제를 연결하세요. 2. 다시 듣고 동의·반대 표현을 쓰세요.',en:'1. Listen once: agreement or disagreement? Match the topics. 2. Listen again and write the expressions.'},items:[
 {type:'match',q:'1a. Accord ou désaccord ?',left:['Dialogue 1','Dialogue 2','Dialogue 3','Dialogue 4'],right:['Accord','Désaccord'],answer:[0,1,0,1]},
 {type:'match',q:'1b. Associez le thème au dialogue.',left:['Dialogue 1','Dialogue 2','Dialogue 3','Dialogue 4'],right:['Projet de formation','Présentation de voyage','Organisation du temps libre','Information sur la vie scolaire'],answer:[2,0,1,3]},
 {type:'short',q:'2 — Dialogue 1 : expressions',answer:'Accord : Bonne idée ! Tu as raison. Carrément !',keywords:[['bonne idée','bonne idee','raison','carrément','carrement']],need:1},
 {type:'short',q:'2 — Dialogue 2 : expressions',answer:'Désaccord : Pas question !',keywords:[['pas question']],need:1},
 {type:'short',q:'2 — Dialogue 3 : expressions',answer:'Accord : Je suis tout à fait d’accord avec vous, c’est parfait.',keywords:[['d’accord',"d'accord",'parfait']],need:1},
 {type:'short',q:'2 — Dialogue 4 : expressions',answer:'Désaccord : Je ne suis pas d’accord ! Tu rigoles ou quoi ?',keywords:[['pas d’accord',"pas d'accord",'rigoles']],need:1}
]}
]});
