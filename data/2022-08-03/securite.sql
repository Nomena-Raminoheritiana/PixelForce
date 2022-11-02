INSERT INTO type_abonnement_secu
(id, nom, description, prix)
VALUES(1, 'Sans abonnement', NULL, 1299.0);
INSERT INTO type_abonnement_secu
(id, nom, description, prix)
VALUES(2, 'Avec abonnement', NULL, 699.0);

INSERT INTO type_installation_secu
(id, description, prix)
VALUES(1, 'Je veux faire l’installation moi-même', 0.0);
INSERT INTO type_installation_secu
(id, description, prix)
VALUES(2, 'Un installateur se déplace chez moi', 150.0);

INSERT INTO code_promo_secu
(id, code, description, prix, statut)
VALUES(1, 'CODE1', NULL, 499.0, 1);
INSERT INTO code_promo_secu
(id, code, description, prix, statut)
VALUES(2, 'CODE2', NULL, 299.0, 1);


--  Auto-generated SQL script #202208031218
INSERT INTO categorie_secu (id,secteur_id,nom,statut)
	VALUES (1,1,'Unités centrales',1);
INSERT INTO categorie_secu (id,secteur_id,nom,statut)
	VALUES (2,1,'Prolongateur de portée',1);
INSERT INTO categorie_secu (id,secteur_id,nom,statut)
	VALUES (3,1,'Unité d’alimentation',1);
INSERT INTO categorie_secu (id,secteur_id,nom,statut)
	VALUES (4,1,'Protection intrusion intérieure',1);
INSERT INTO categorie_secu (id,secteur_id,nom,statut)
	VALUES (5,1,'Protection intrusion extérieure',1);
INSERT INTO categorie_secu (id,secteur_id,nom,statut)
	VALUES (6,1,'Commandes',1);
INSERT INTO categorie_secu (id,secteur_id,nom,statut)
	VALUES (7,1,'Prévention des incendies 
& des inondations',1);
INSERT INTO categorie_secu (id,secteur_id,nom,statut)
	VALUES (8,1,'Sirènes',1);
INSERT INTO categorie_secu (id,secteur_id,nom,statut)
	VALUES (9,1,'Domotique',1);
INSERT INTO categorie_secu (id,secteur_id,nom,statut)
	VALUES (10,1,'Application',1);

INSERT INTO   produit_secu
(id, secteur_id, id_categorie, nom, description, photo, statut)
VALUES(1, 1, 1, 'Hub 2', '<p><strong>Unit&eacute;s centrales</strong></p>

<p>Panneau de contr&ocirc;le avec int&eacute;gration de d&eacute;tecteur avec lev&eacute;e de doute</p>

<ul>
	<li><strong>Ethernet</strong></li>
	<li><strong>2G</strong></li>
</ul>', 'images/products/hub-2.PNG', 1);
INSERT INTO   produit_secu
(id, secteur_id, id_categorie, nom, description, photo, statut)
VALUES(2, 1, 1, 'Hub 2 Plus', '<p><strong>Unit&eacute;s centrales</strong></p>

<p>Panneau de contr&ocirc;le avanc&eacute; avec int&eacute;gration de d&eacute;tecteur avec lev&eacute;e de doute</p>

<ul>
	<li><strong>Ethernet</strong></li>
	<li><strong>Wi-Fi</strong></li>
	<li><strong>2G/3G/4G</strong></li>
</ul>', 'images/products/hub-2.PNG', 1);
INSERT INTO   produit_secu
(id, secteur_id, id_categorie, nom, description, photo, statut)
VALUES(3, 1, 2, 'ReX', '<p><strong>Prolongateur de port&eacute;e</strong></p>

<p>Prolongateur de port&eacute;e de signal radio</p>

<p><span style="font-size:11px">Jusqu&rsquo;&agrave; 5 ReX peuvent &ecirc;tre connect&eacute;s au syst&egrave;me</span></p>', 'images/products/rex.PNG', 1);
INSERT INTO   produit_secu
(id, secteur_id, id_categorie, nom, description, photo, statut)
VALUES(4, 1, 3, '12V PSU', '<p><strong>Unit&eacute; d&rsquo;alimentation</strong></p>

<p>Bloc d&rsquo;alimentation 12V</p>

<p><span style="font-size:11px">Optimal pour un fonctionnement basse tension</span></p>', 'images/products/12v-psu.PNG', 1);
INSERT INTO   produit_secu
(id, secteur_id, id_categorie, nom, description, photo, statut)
VALUES(5, 1, 4, 'MotionCam', '<p><strong>Protection intrusion int&eacute;rieure</strong></p>

<p>D&eacute;tecteur de mouvement sans fil avec prise de photos en cas d&rsquo;alarmes et immunit&eacute; aux animaux domestiques</p>', 'images/products/motioncam.PNG', 1);
INSERT INTO   produit_secu
(id, secteur_id, id_categorie, nom, description, photo, statut)
VALUES(6, 1, 4, 'MotionProtect', '<p><strong>Protection intrusion int&eacute;rieure</strong></p>

<p>D&eacute;tecteur de mouvement sans fil avec immunit&eacute; aux animaux domestiques</p>', 'images/products/motionprotect.PNG', 1);
INSERT INTO   produit_secu
(id, secteur_id, id_categorie, nom, description, photo, statut)
VALUES(7, 1, 4, 'MotionProtect Plus', '<p><strong>Protection intrusion int&eacute;rieure</strong></p>

<p>D&eacute;tecteur de mouvement sans fil, double technologie avec immunit&eacute; aux animaux domestiques</p>', 'images/products/motionprotect.PNG', 1);
INSERT INTO   produit_secu
(id, secteur_id, id_categorie, nom, description, photo, statut)
VALUES(8, 1, 4, 'CombiProtect', '<p><strong>Protection intrusion int&eacute;rieure</strong></p>

<p>D&eacute;tecteur de mouvement sans fil avec immunit&eacute; aux animaux domestiques, associ&eacute; &agrave; un d&eacute;tecteur bris de vitre</p>', 'images/products/motionprotect.PNG', 1);
INSERT INTO   produit_secu
(id, secteur_id, id_categorie, nom, description, photo, statut)
VALUES(9, 1, 4, 'DoorProtect', '<p><strong>Protection intrusion int&eacute;rieure</strong></p>

<p>D&eacute;tecteur d&rsquo;ouverture magn&eacute;tique sans fil</p>', 'images/products/doorprotect.PNG', 1);
INSERT INTO   produit_secu
(id, secteur_id, id_categorie, nom, description, photo, statut)
VALUES(10, 1, 4, 'DoorProtect Plus', '<p><strong>Protection intrusion int&eacute;rieure</strong></p>

<p>D&eacute;tecteur d&rsquo;ouverture magn&eacute;tique sans fil avec capteur de vibration et d&rsquo;inclinaison</p>', 'images/products/doorprotect.PNG', 1);
INSERT INTO   produit_secu
(id, secteur_id, id_categorie, nom, description, photo, statut)
VALUES(11, 1, 4, 'GlassProtect', '<p><strong>Protection intrusion int&eacute;rieure</strong></p>

<p>D&eacute;tecteur de bris de vitre</p>', 'images/products/glassprotect.PNG', 1);
INSERT INTO   produit_secu
(id, secteur_id, id_categorie, nom, description, photo, statut)
VALUES(12, 1, 5, 'MotionCam Outdoor', '<p><strong>Protection intrusion ext&eacute;rieure</strong></p>

<p>D&eacute;tecteur de mouvement d&#39;ext&eacute;rieur sans fil dot&eacute; d&#39;un appareil photo qui permet de v&eacute;rifier les alarmes,</p>', 'images/products/motioncam-outdoor-removebg-preview.png', 1);
INSERT INTO   produit_secu
(id, secteur_id, id_categorie, nom, description, photo, statut)
VALUES(13, 1, 5, 'MotionProtect Outdoor', '<p><strong>Protection intrusion ext&eacute;rieure</strong></p>

<p>D&eacute;tecteur de mouvement sans fil ext&eacute;rieur avec anti-masquage et immunit&eacute; aux animaux domestiques</p>', 'images/products/motionprotect-outdoor-removebg-preview.png', 1);
INSERT INTO   produit_secu
(id, secteur_id, id_categorie, nom, description, photo, statut)
VALUES(14, 1, 5, 'DualCurtain Outdoor', '<p><strong>Protection intrusion ext&eacute;rieure</strong></p>

<p>Surveille le p&eacute;rim&egrave;tre du local &agrave; prot&eacute;ger, sans g&ecirc;ner les personnes se trouvant &agrave; l&#39;int&eacute;rieur. Deux syst&egrave;mes optiques ind&eacute;pendants avec des champs de d&eacute;tection &eacute;troits et des param&egrave;tres modulables vous permettent de d&eacute;finir avec pr&eacute;cision une zone de d&eacute;tection sur une distance de 30 m, tout en &eacute;vitant les fausses alarmes. Le programme unique ELSA r&eacute;agit en cas d&#39;intrusion, et filtre les d&eacute;clencheurs tels que les interf&eacute;rences environnementales et les animaux domestiques.</p>', 'images/products/dualcurtain-outdoor-removebg-preview.png', 1);
INSERT INTO   produit_secu
(id, secteur_id, id_categorie, nom, description, photo, statut)
VALUES(15, 1, 6, 'SpaceControl', '<p><strong>Commandes</strong></p>

<p>T&eacute;l&eacute;commande bidirectionnelle sans fil avec bouton panique</p>', 'images/products/spacecontrol.PNG', 1);
INSERT INTO   produit_secu
(id, secteur_id, id_categorie, nom, description, photo, statut)
VALUES(16, 1, 6, 'Button', '<p><strong>Commandes</strong></p>

<p>Bouton de panique sans fil / t&eacute;l&eacute;commande pour le contr&ocirc;le des sc&eacute;narios</p>', 'images/products/button.PNG', 1);
INSERT INTO   produit_secu
(id, secteur_id, id_categorie, nom, description, photo, statut)
VALUES(17, 1, 6, 'DoubleButton', '<p><strong>Commandes</strong></p>

<p>T&eacute;l&eacute;commande panique</p>', 'images/products/doublebutton.PNG', 1);
INSERT INTO   produit_secu
(id, secteur_id, id_categorie, nom, description, photo, statut)
VALUES(18, 1, 6, 'KeyPad', '<p><strong>Commandes</strong></p>

<p>Clavier tactile Bidirectionnel sans fil</p>', 'images/products/keypad.PNG', 1);
INSERT INTO   produit_secu
(id, secteur_id, id_categorie, nom, description, photo, statut)
VALUES(19, 1, 6, 'KeyPad Plus', '<p><strong>Commandes</strong></p>

<p>Clavier tactile avec lecteur de badges Bidirectionnel sans fil</p>', 'images/products/keypad-plus.PNG', 1);
INSERT INTO   produit_secu
(id, secteur_id, id_categorie, nom, description, photo, statut)
VALUES(20, 1, 7, 'FireProtect', '<p><strong>Pr&eacute;vention des incendies &amp; des inondations</strong></p>

<p>D&eacute;tecteur de fum&eacute;e et de chaleur sans fil</p>', 'images/products/fireprotect.PNG', 1);
INSERT INTO   produit_secu
(id, secteur_id, id_categorie, nom, description, photo, statut)
VALUES(21, 1, 7, 'FireProtect Plus', '<p><strong>Pr&eacute;vention des incendies &amp; des inondations</strong></p>

<p>D&eacute;tecteur de fum&eacute;e, de chaleur et de monoxyde de carbone sans fil</p>', 'images/products/fireprotect.PNG', 1);
INSERT INTO   produit_secu
(id, secteur_id, id_categorie, nom, description, photo, statut)
VALUES(22, 1, 7, 'LeaksProtect', '<p><strong>Pr&eacute;vention des incendies &amp; des inondations</strong></p>

<p>D&eacute;tecteur d&rsquo;inondation sans fil</p>', 'images/products/leaksprotect.PNG', 1);
INSERT INTO   produit_secu
(id, secteur_id, id_categorie, nom, description, photo, statut)
VALUES(23, 1, 8, 'HomeSiren', '<p><strong>Sir&egrave;nes</strong></p>

<p>Sir&egrave;ne int&eacute;rieure sans fil</p>', 'images/products/homesiren.PNG', 1);
INSERT INTO   produit_secu
(id, secteur_id, id_categorie, nom, description, photo, statut)
VALUES(24, 1, 8, 'StreetSiren', '<p><strong>Sir&egrave;nes</strong></p>

<p>Sir&egrave;ne ext&eacute;rieure avec flash sans fil</p>

<p>&nbsp;</p>', 'images/products/streetsiren.PNG', 1);
INSERT INTO   produit_secu
(id, secteur_id, id_categorie, nom, description, photo, statut)
VALUES(25, 1, 8, 'StreetSiren DoubleDeck', '<p><strong>Sir&egrave;nes</strong></p>

<p>Sir&egrave;ne ext&eacute;rieure avec flash sans fil &amp; logo</p>', 'images/products/streetsiren-doublechek.PNG', 1);
INSERT INTO   produit_secu
(id, secteur_id, id_categorie, nom, description, photo, statut)
VALUES(26, 1, 9, 'Socket', '<p><strong>Domotique</strong></p>

<p>Prise intelligente sans fil avec contr&ocirc;le d&rsquo;&eacute;nergie</p>', 'images/products/socket.PNG', 1);
INSERT INTO   produit_secu
(id, secteur_id, id_categorie, nom, description, photo, statut)
VALUES(27, 1, 10, 'Applications gratuites intuitives', '<p><strong>Application</strong></p>

<p>Alarmes envoy&eacute;es par notifications push, SMS</p>', 'images/products/application.PNG', 1);



INSERT INTO produit_secu_accomp
(id, secteur_id, nom, description, photo, statut, prix)
VALUES(1, 1, 'Keypad', NULL, 'images/products/smart-plus-keypad.PNG', 1, 199);
INSERT INTO produit_secu_accomp
(id, secteur_id, nom, description, photo, statut, prix)
VALUES(2, 1, 'Contact Protect', NULL, 'images/products/smart-plus-contact-protect.PNG', 1, 129);
INSERT INTO produit_secu_accomp
(id, secteur_id, nom, description, photo, statut, prix)
VALUES(3, 1, 'Motion Cam', NULL, 'images/products/smart-plus-motion-cam.PNG', 1, 129);
INSERT INTO produit_secu_accomp
(id, secteur_id, nom, description, photo, statut, prix)
VALUES(4, 1, 'Scream', NULL, 'images/products/smart-plus-scream.PNG', 1, 199);
INSERT INTO produit_secu_accomp
(id, secteur_id, nom, description, photo, statut, prix)
VALUES(5, 1, 'Smoke Protect', NULL, 'images/products/smart-plus-smoke-protect.PNG', 1, 129);
INSERT INTO produit_secu_accomp
(id, secteur_id, nom, description, photo, statut, prix)
VALUES(6, 1, 'Motion Outdoor', NULL, 'images/products/smart-plus-motion-outdoor.PNG', 1, 399);
INSERT INTO produit_secu_accomp
(id, secteur_id, nom, description, photo, statut, prix)
VALUES(7, 1, 'Flood Protect', NULL, 'images/products/smart-plus-flood-protect.PNG', 1, 129);
INSERT INTO produit_secu_accomp
(id, secteur_id, nom, description, photo, statut, prix)
VALUES(8, 1, 'Tags X3', NULL, 'images/products/smart-plus-tags-x3.PNG', 1, 49);
INSERT INTO produit_secu_accomp
(id, secteur_id, nom, description, photo, statut, prix)
VALUES(9, 1, 'Space Control', NULL, 'images/products/smart-plus-space-control.PNG', 1, 69);
INSERT INTO produit_secu_accomp
(id, secteur_id, nom, description, photo, statut, prix)
VALUES(10, 1, 'Easy Life', NULL, 'images/products/smart-plus-easy-life.PNG', 1, 99);
INSERT INTO produit_secu_accomp
(id, secteur_id, nom, description, photo, statut, prix)
VALUES(11, 1, 'Button Panic', NULL, 'images/products/smart-plus-button-panic.PNG', 1, 129);
INSERT INTO produit_secu_accomp
(id, secteur_id, nom, description, photo, statut, prix)
VALUES(12, 1, 'Repeater', NULL, 'images/products/smart-plus-repeater.PNG', 1, 199);

