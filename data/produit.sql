INSERT INTO `user`
(id, contact_client_id, email, username, roles, password, nom, prenom, date_naissance, adresse, numero_securite, rib, photo, six_digit_code, forgotten_pass_token, active, api_token, telephone, created_at, code_postal, lien_calendly, client_agent_id, stripe_data)
VALUES(14, NULL, 'agentproduit@gmail.com', 'agentproduit@gmail.com', '["ROLE_AGENT"]', '$2y$13$R1h3Ew6Gwj258hZaLtK6TOLGUaQu60OpsOgg2ppqxinNzUEPRZ5xi', 'agent produit', 'as', NULL, 'Antananarivo', NULL, NULL, NULL, NULL, NULL, 1, NULL, '0349331431', '2022-06-08 08:15:34', '00101', 'https://calendly.com/mnakanyandriamihaja', NULL, NULL);

INSERT INTO secteur
(id, nom, description, active, type_id)
VALUES(4, 'Produit', 'Produit', 1, 1);

INSERT INTO agent_secteur
(id, agent_id, secteur_id, date_validation, statut)
VALUES(4, 14, 4, NULL, 1);

INSERT INTO `user` (id,email,roles,password,nom,prenom,adresse,active,created_at)
	VALUES (15,'coachproduit@gmail.com','["ROLE_COACH"]','$2y$13$YKwVY3JqHg0qwClKPcBVqOlJjnEO4GvtVGunu1c5nAkUqy.Fy5SCi','Coach Produit','as','Antananarivo',1,'2022-06-01 07:29:23');

INSERT INTO coach_secteur (id,coach_id,secteur_id)
	VALUES (6,15,4);

INSERT INTO categorie
(id, secteur_id, nom, description, statut)
VALUES(1, 4, 'Huiles Essentielles Pure', NULL, 1);
INSERT INTO categorie
(id, secteur_id, nom, description, statut)
VALUES(2, 4, 'Gamme & Sens', NULL, 1);


INSERT INTO produit
(id, secteur_id, id_categorie, nom, description, prix, photo, statut)
VALUES(1, 4, 1, 'Gingembre Frais', NULL, 23.9, 'images/products/gingembre-frais.jpg', 1);
INSERT INTO produit
(id, secteur_id, id_categorie, nom, description, prix, photo, statut)
VALUES(2, 4, 1, 'Niaouli', NULL, 8.000, 'images/products/niaouli.jpg', 1);
INSERT INTO produit
(id, secteur_id, id_categorie, nom, description, prix, photo, statut)
VALUES(3, 4, 1, 'Ravintsara', NULL, 10.800, 'images/products/Ravintsara.jpg', 1);
INSERT INTO produit
(id, secteur_id, id_categorie, nom, description, prix, photo, statut)
VALUES(4, 4, 1, 'Saro', NULL, 12.500, 'images/products/saro.jpg', 1);
INSERT INTO produit
(id, secteur_id, id_categorie, nom, description, prix, photo, statut)
VALUES(5, 4, 1, 'Ylang Ylang', NULL, 14.200, 'images/products/ylang-ylang.jpg', 1);
INSERT INTO produit
(id, secteur_id, id_categorie, nom, description, prix, photo, statut)
VALUES(6, 4, 2, 'Dynamin & Sens', NULL, 13.000, 'images/products/dynamin-sens.jpg', 1);
INSERT INTO produit
(id, secteur_id, id_categorie, nom, description, prix, photo, statut)
VALUES(7, 4, 2, 'Zen & Sens', NULL, 13.000, 'images/products/zen-sens.jpg', 1);
INSERT INTO produit
(id, secteur_id, id_categorie, nom, description, prix, photo, statut)
VALUES(8, 4, 2, 'Immun & Sens', NULL, 13.000, 'images/products/immun-sens.jpg', 1);
INSERT INTO produit
(id, secteur_id, id_categorie, nom, description, prix, photo, statut)
VALUES(9, 4, 2, 'Fragran’Delices', NULL, 13.000, 'images/products/fragran-delices.jpg', 1);
