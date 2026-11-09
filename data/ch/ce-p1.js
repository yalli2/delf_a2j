DELF.chapter({
id:'ce-p1', part:'ce', stage:'preparer', num:1, order:1,
title:'Lire pour s’orienter', tr:{ko:'정보를 찾기 위해 읽기',en:'Reading to find your way'},
intro:{ko:'광고, 시간표, 포스터, 메뉴 같은 짧은 실용문에서 <b>숫자 정보, 주제, 핵심 정보</b>를 빠르게 찾는 연습을 합니다.',en:'Practise finding figures, themes and key information in ads, timetables, posters and menus.',fr:'Repérer des informations chiffrées, des thèmes et les informations importantes dans des annonces, des horaires, des affiches et des menus.'},
blocks:[
{type:'note',kind:'method',title:'Repérer des informations chiffrées',tr:{ko:'숫자 정보 찾기',en:'Spotting figures'},toc:true,html:
'<p>Dans une annonce, les chiffres donnent souvent :</p><table><tr><th>Information</th><th>Exemple</th></tr>'+
'<tr><td>un numéro de téléphone</td><td><span class="say">07-52-18-44-03</span></td></tr>'+
'<tr><td>un âge</td><td><span class="say">pour les 11-15 ans</span></td></tr>'+
'<tr><td>une adresse</td><td><span class="say">7, avenue Foch</span></td></tr>'+
'<tr><td>une heure</td><td><span class="say">à 20 h 30</span>, <span class="say">après 19 h</span></td></tr>'+
'<tr><td>un prix</td><td><span class="say">Entrée : 7 €</span>, <span class="say">18 € l’heure</span></td></tr>'+
'<tr><td>une date</td><td><span class="say">le samedi 18 mai</span></td></tr></table>'},
{type:'text',id:'t1',label:'Activité 1 — Documents',title:'Quatre petites annonces',source:'Documents adaptés pour la classe',html:
'<div style="display:flex;flex-wrap:wrap;gap:10px">'+
'<div style="flex:1 1 240px;border:2px solid #34495e;border-radius:8px;padding:10px;background:#fbfbff"><b>DOC 1</b><p style="text-align:center"><b>SOIRÉE ROCK ACOUSTIQUE 🎸</b><br>Le samedi 18 mai, à 20 h 30<br>Au café La Lanterne (14, rue des Tilleuls)<br>Entrée : 7 €<br>Réservations : 06-41-27-88-10</p></div>'+
'<div style="flex:1 1 240px;border:1px solid #aaa;border-radius:8px;padding:10px;background:#fff"><b>DOC 2</b><p style="text-align:center"><b>Vends vélo de ville 🚲</b><br>Bon état : 120 €<br>(acheté 250 € il y a 2 ans)<br>Appelez Karim au 07-52-18-44-03, après 19 h.</p></div>'+
'<div style="flex:1 1 240px;border:1px solid #d4c26a;border-radius:8px;padding:10px;background:#fff9d6"><b>DOC 3</b><p><i>Tu as entre 10 et 14 ans ?<br>Tu aimes les énigmes ?<br>Viens au grand jeu de piste du jardin public le samedi 8 juin à 15 h (rendez-vous devant la piscine) !</i><br><b>Gratuit</b></p></div>'+
'<div style="flex:1 1 240px;border:1px solid #9bc;border-radius:8px;padding:10px;background:#f2f9ff"><b>DOC 4</b><p style="text-align:center"><b>Cours de guitare 🎶</b><br>Chez moi (7, avenue Foch)<br>pour les jeunes de 11 à 15 ans<br>les lundis et vendredis après 17 h 30<br>Tarif : 18 € l’heure<br>Contact : romain.guitare@mail.fr ou 06-88-15-32-70</p></div>'+
'</div>'},
{type:'ex',id:'e1',title:'Activité 1',consigne:'Repérez tous les chiffres et indiquez quelles informations ils donnent dans chaque document.',tr:{ko:'모든 숫자를 찾아 각 문서에서 어떤 정보를 주는지 표시하세요.',en:'Find all the figures and say what information they give in each document.'},items:[
 {type:'multi',q:'Doc 1 (soirée rock) : cochez les informations chiffrées.',options:['Numéro de téléphone','Âge','Adresse','Heure','Prix','Date'],answer:[0,2,3,4,5],explain:'06-41… / 14, rue des Tilleuls / 20 h 30 / 7 € / samedi 18 mai'},
 {type:'multi',q:'Doc 2 (vélo) : cochez les informations chiffrées.',options:['Numéro de téléphone','Âge','Adresse','Heure','Prix','Date'],answer:[0,3,4],explain:'07-52… / après 19 h / 120 € (« il y a 2 ans » n’est pas une date précise)'},
 {type:'multi',q:'Doc 3 (jeu de piste) : cochez les informations chiffrées.',options:['Numéro de téléphone','Âge','Adresse','Heure','Prix','Date'],answer:[1,3,5],explain:'10–14 ans / 15 h / samedi 8 juin (« gratuit » n’est pas un chiffre)'},
 {type:'multi',q:'Doc 4 (guitare) : cochez les informations chiffrées.',options:['Numéro de téléphone','Âge','Adresse','Heure','Prix','Date'],answer:[0,1,2,3,4],explain:'06-88… / 11–15 ans / 7, avenue Foch / après 17 h 30 / 18 € (lundis et vendredis = des jours, pas une date)'},
 {type:'gap',q:'Complétez avec les informations des documents.',text:'Le concert commence à {{20 h 30|20h30|20 heures 30}}. Le vélo coûte {{120}} euros. Le jeu de piste est pour les jeunes de 10 à {{14}} ans. Un cours de guitare coûte {{18}} euros l’heure.'}
]},
{type:'text',id:'t2',label:'Activité 2 — Document',title:'Emploi du temps — Classe de 4e B',subtitle:'Professeure principale : Mme Lambert',source:'Document adapté pour la classe',html:
'<table><tr><th></th><th>Lundi</th><th>Mardi</th><th>Mercredi</th></tr>'+
'<tr><th>8 h 30</th><td>📖 Français (salle 12)</td><td>➗ Mathématiques (salle 210)</td><td>🇪🇸 Espagnol (salle 31)</td></tr>'+
'<tr><th>10 h 30</th><td>🔬 SVT (labo 2)</td><td>🇬🇧 Anglais (salle 30)</td><td>📖 Français (salle 12)</td></tr>'+
'<tr><th>12 h</th><td style="background:#fff4b0">déjeuner</td><td style="background:#fff4b0">déjeuner</td><td style="background:#fff4b0">sortie des classes</td></tr>'+
'<tr><th>13 h</th><td>🇬🇧 Anglais (salle 30)</td><td>🌍 Histoire-géographie (salle 15)</td><td rowspan="3"></td></tr>'+
'<tr><th>15 h</th><td>🎨 Arts plastiques (salle 8)</td><td>🎵 Musique (auditorium)</td></tr>'+
'<tr><th>16 h</th><td>⚽ EPS (gymnase Pasteur)</td><td>➗ Mathématiques (salle 210)</td></tr>'+
'<tr><th>18 h</th><td colspan="2" style="background:#fff4b0;text-align:center">sortie des classes</td><td></td></tr></table>'},
{type:'ex',id:'e2',title:'Activité 2',consigne:'Lisez l’extrait d’emploi du temps et répondez aux questions.',tr:{ko:'시간표를 읽고 질문에 답하세요.',en:'Read the timetable and answer the questions.'},items:[
 {type:'mcq',q:'Combien de matières différentes sont étudiées ?',options:['7','9','12'],answer:1,explain:'Français, SVT, Anglais, Arts plastiques, EPS, Maths, Histoire-géo, Musique, Espagnol = 9 (같은 과목은 한 번만 셉니다).'},
 {type:'short',q:'Dans quelle salle se passe le cours d’anglais ?',answer:'Salle 30',keywords:[['30']]},
 {type:'mcq',q:'Combien de temps dure le cours d’EPS ?',options:['1 heure','1 heure 30','2 heures'],answer:2,explain:'16 h → 18 h = 2시간.'},
 {type:'short',q:'À quelle heure commence le cours de musique ?',answer:'À 15 h',keywords:[['15']]},
 {type:'mcq',q:'Il y a combien de matières le mercredi après-midi ?',options:['Aucune','Une','Deux'],answer:0,explain:'수요일 12시 = sortie des classes → 오후 수업 없음.'}
]},
{type:'note',kind:'lex',title:'Repérer des thèmes ou des activités',tr:{ko:'주제·활동 찾기',en:'Spotting themes'},toc:true,html:
'<ul><li><b>Transport</b> : <span class="say">covoiturage, train, billet, départ, trajet</span></li>'+
'<li><b>Temps libre</b> : <span class="say">tournoi, concert, sortie, match, atelier</span></li>'+
'<li><b>Identité</b> : <span class="say">passeport, carte d’identité, carte d’étudiant, nom, perdu</span></li>'+
'<li><b>Maison</b> : <span class="say">vaisselle, meubles, canapé, cuisine, appartement</span></li></ul>'},
{type:'text',id:'t3',label:'Activité 3 — Documents',title:'Petites annonces',source:'Documents adaptés pour la classe',html:
'<div style="display:flex;flex-wrap:wrap;gap:10px">'+
'<div style="flex:1 1 200px;border:1px solid #aaa;padding:8px;background:#fff"><b>DOC 1</b><p>Cherche covoiturage Lyon → Grenoble, vendredi 3 mai, départ vers 18 h. Je partage l’essence ! Tél. : 06-12-40-77-31</p></div>'+
'<div style="flex:1 1 200px;border:1px solid #aaa;padding:8px;background:#fff"><b>DOC 2</b><p><b>Tournoi de ping-pong</b><br>samedi 11 mai, 14 h<br>gymnase municipal<br>Ouvert à tous — gratuit</p></div>'+
'<div style="flex:1 1 200px;border:1px solid #aaa;padding:8px;background:#fff"><b>DOC 3</b><p><i>Vends service à vaisselle complet : assiettes, verres et tasses pour 8 personnes. 40 €. lucie.b@mail.fr</i></p></div>'+
'<div style="flex:1 1 200px;border:1px solid #aaa;padding:8px;background:#fff"><b>DOC 4</b><p><i>Perdu passeport au nom de Samir Haddad, le 2 mai, près de la gare routière. Merci de m’appeler ! (06-77-21-09-54)</i></p></div></div>'},
{type:'ex',id:'e3',title:'Activité 3',consigne:'Lisez les annonces et associez chaque petite annonce à un thème.',tr:{ko:'광고를 읽고 각 광고를 주제와 연결하세요.',en:'Read the ads and match each one with a theme.'},items:[
 {type:'match',q:'Associez.',left:['Doc 1','Doc 2','Doc 3','Doc 4'],right:['Temps libre','Transport','Identité','Maison'],answer:[1,0,3,2],explain:'covoiturage → transport ; tournoi → temps libre ; vaisselle → maison ; passeport → identité'}
]},
{type:'text',id:'t4',label:'Activité 4 — Document',title:'www.villedesaintmarc.fr/ete',subtitle:'Cet été, dans votre ville !',source:'Document adapté pour la classe',html:
'<div style="display:flex;flex-wrap:wrap;gap:10px">'+
'<div style="flex:1 1 200px;border:1px solid #ccc;padding:8px">🏐 <b>Article A</b><p>Tous les matins à 9 h, au parc des Rives : yoga, course à pied et volley-ball. C’est gratuit, venez en tenue de sport !</p></div>'+
'<div style="flex:1 1 200px;border:1px solid #ccc;padding:8px">🎬 <b>Article B</b><p>Chaque jeudi à 21 h 30, un film en plein air sur la plage du lac. Apportez votre coussin ! Programme sur notre site.</p></div>'+
'<div style="flex:1 1 200px;border:1px solid #ccc;padding:8px">📚 <b>Article C</b><p>Soutien scolaire : révisions de maths et de français pour les collégiens. Rendez-vous à la médiathèque le vendredi à 10 h.</p></div></div>'},
{type:'ex',id:'e4',title:'Activité 4',consigne:'Lisez la page du site internet de votre ville et écrivez le type d’activité de chaque article.',tr:{ko:'시 웹사이트를 읽고 각 기사의 활동 종류를 쓰세요.',en:'Read the city website and write the type of activity for each article.'},items:[
 {type:'short',q:'Article A : type d’activité ?',answer:'Du sport',keywords:[['sport','yoga','volley','course']]},
 {type:'short',q:'Article B : type d’activité ?',answer:'Du cinéma (en plein air)',keywords:[['cinéma','cinema','film']]},
 {type:'short',q:'Article C : type d’activité ?',answer:'Aide aux devoirs / soutien scolaire',keywords:[['devoir','soutien','scolaire','révision','revision','étude','etude','cours']]}
]},
{type:'note',kind:'tip',title:'Repérer les informations importantes',tr:{ko:'핵심 정보 찾기',en:'Spotting key information'},toc:true,html:
'<p>Soulignez les <b>mots-clés</b> : ce qu’on mange, le prix, les qualités (<span class="say">petits prix, très frais, bio</span>), les jours et les horaires (<span class="say">ouvert du lundi au samedi</span>, <span class="say">fermé le dimanche</span>, <span class="say">le midi</span>, <span class="say">le soir</span>).</p>'},
{type:'text',id:'t5',label:'Activité 5 — Document',title:'www.ouvamangerce-soir.fr',source:'Document adapté pour la classe',html:
'<div style="display:flex;flex-wrap:wrap;gap:10px">'+
'<div style="flex:1 1 220px;border:1px solid #c66;padding:8px;text-align:center"><b style="color:#b33">🥩 VIANDE</b><p>Envie d’un burger ou de grillades ? Venez au <b>Grill de Marius</b> ! Des petits prix et des produits de la ferme d’à côté. Menu à 17 €. Ouvert du lundi au samedi, le soir seulement. Réservation : 04-75-21-63-09.</p></div>'+
'<div style="flex:1 1 220px;border:1px solid #369;padding:8px;text-align:center"><b style="color:#246">🐟 POISSON</b><p>Au <b>Phare bleu</b>, les poissons et les crevettes arrivent du port chaque matin : impossible de trouver plus frais ! Menu à 29 €. Ouvert du mercredi au dimanche, midi et soir. Fermé lundi et mardi. Contact : lepharebleu@mail.fr</p></div>'+
'<div style="flex:1 1 220px;border:1px solid #393;padding:8px;text-align:center"><b style="color:#262">🥗 VÉGÉTARIEN</b><p>Soupes, tartes et salades : à <b>La Feuille verte</b>, on cuisine seulement des légumes bio de saison. Plat du jour à 11,50 €. Ouvert tous les jours, le midi. Réservation sur notre site.</p></div></div>'},
{type:'ex',id:'e5',title:'Activité 5',consigne:'Lisez les présentations des restaurants, repérez les mots importants et complétez le tableau.',tr:{ko:'식당 소개를 읽고 핵심 단어를 찾아 표를 완성하세요.',en:'Read the restaurant descriptions, find the key words and complete the table.'},items:[
 {type:'match',q:'Nourriture',left:['Le Grill de Marius','Le Phare bleu','La Feuille verte'],right:['des légumes (soupes, tartes, salades)','des burgers et des grillades','des poissons et des crevettes','des pizzas'],answer:[1,2,0]},
 {type:'match',q:'Prix / Tarif',left:['Le Grill de Marius','Le Phare bleu','La Feuille verte'],right:['plat du jour à 11,50 €','menu à 17 €','menu à 29 €'],answer:[1,2,0]},
 {type:'match',q:'Pourquoi on aime ?',left:['Le Grill de Marius','Le Phare bleu','La Feuille verte'],right:['des produits très frais du port','des légumes bio de saison','des petits prix et des produits de la ferme'],answer:[2,0,1]},
 {type:'match',q:'Jours / horaires',left:['Le Grill de Marius','Le Phare bleu','La Feuille verte'],right:['tous les jours, le midi','du lundi au samedi, le soir','du mercredi au dimanche, midi et soir'],answer:[1,2,0]},
 {type:'mcq',q:'Vous voulez dîner au restaurant un mardi soir. Où pouvez-vous aller ?',options:['Au Grill de Marius.','Au Phare bleu.','À La Feuille verte.'],answer:0,explain:'Phare bleu는 화요일 휴무, Feuille verte는 점심만 → Grill de Marius.'}
]},
{type:'text',id:'t6',label:'Activité 6 — Documents',title:'Deux affiches',source:'Documents adaptés pour la classe',html:
'<div style="display:flex;flex-wrap:wrap;gap:10px">'+
'<div style="flex:1 1 260px;background:#2c3e50;color:#fff;padding:12px;border-radius:6px;text-align:center"><b>AFFICHE 1</b><p>La librairie <b><i>La Page tournée</i></b><br>vous invite<br><b>le jeudi 14 novembre à 18 h 30</b><br>pour la présentation du roman<br><i>Le Jardin des brumes</i>,<br>en présence de son autrice, Clémence Arnaud.<br><small>Entrée libre. Places limitées : pensez à réserver !</small></p></div>'+
'<div style="flex:1 1 260px;background:#fff1dc;padding:12px;border-radius:6px;text-align:center"><b>AFFICHE 2</b><p><b style="color:#a33">BOURSE AUX INSTRUMENTS 🎻🥁</b><br><b>Dimanche 6 avril, de 9 h à 16 h</b><br>salle des fêtes<br>Achetez et vendez des instruments d’occasion : batterie, flûte, violoncelle…<br>À 16 h 30 : concert de la chorale du collège.<br><span style="color:#a33">Entrée : 2 € — parking gratuit</span></p></div></div>'},
{type:'ex',id:'e6',title:'Activité 6',consigne:'Lisez les affiches et répondez aux questions.',tr:{ko:'포스터를 읽고 질문에 답하세요.',en:'Read the posters and answer the questions.'},items:[
 {type:'mcq',q:'Quel est le thème de l’affiche 1 ?',options:['La musique.','Le sport.','La lecture.'],answer:2,explain:'librairie, roman, autrice → lecture.'},
 {type:'mcq',q:'Quel est le thème de l’affiche 2 ?',options:['La musique.','Le sport.','La lecture.'],answer:0,explain:'instruments, chorale → musique.'},
 {type:'short',q:'Affiche 1 : l’événement se passe quand ?',answer:'Le jeudi 14 novembre à 18 h 30',keywords:[['14 novembre','jeudi 14'],['18 h 30','18h30','18 h30']],need:2},
 {type:'short',q:'Affiche 2 : l’événement se passe quand ?',answer:'Le dimanche 6 avril, de 9 h à 16 h',keywords:[['6 avril','dimanche 6'],['9 h','9h']],need:2}
]}
]});
