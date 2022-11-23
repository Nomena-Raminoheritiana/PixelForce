INSERT INTO type_secteur
(id, nom)
VALUES(4, 'Aromaforest');

INSERT INTO secteur
(id, type_id, nom, description, active)
VALUES(8, 4, 'Aromaforest', NULL, 1);

INSERT INTO `user`
(id, contact_client_id, client_agent_id, email, username, roles, password, nom, prenom, date_naissance, adresse, numero_securite, rib, photo, six_digit_code, forgotten_pass_token, active, api_token, telephone, created_at, code_postal, lien_calendly, stripe_data, account_status, account_start_date, stripe_customer_id, numero_rue, ville)
VALUES(30, NULL, NULL, 'coacharomaforest@gmail.com', 'coacharomaforest', '["ROLE_COACH"]', '$2y$13$YKwVY3JqHg0qwClKPcBVqOlJjnEO4GvtVGunu1c5nAkUqy.Fy5SCi', 'Coach', 'Aromaforest', '1991-12-30 00:00:00', 'Paris', '123465', '4242424242424242', NULL, NULL, NULL, 1, NULL, NULL, '2022-07-19 07:49:29', NULL, NULL, 'a:0:{}', NULL, NULL, NULL, NULL, NULL);

INSERT INTO coach_secteur
(id, coach_id, secteur_id)
VALUES(10, 30, 8);

INSERT INTO `user`
(id, contact_client_id, client_agent_id, email, username, roles, password, nom, prenom, date_naissance, adresse, numero_securite, rib, photo, six_digit_code, forgotten_pass_token, active, api_token, telephone, created_at, code_postal, lien_calendly, stripe_data, account_status, account_start_date, stripe_customer_id, numero_rue, ville)
VALUES(31, NULL, NULL, 'agentaromaforest@gmail.com', 'agentaromaforest', '["ROLE_AGENT"]', '$2y$13$YKwVY3JqHg0qwClKPcBVqOlJjnEO4GvtVGunu1c5nAkUqy.Fy5SCi', 'Agent', 'Aromaforest', NULL, 'Antananarivo', NULL, NULL, NULL, NULL, NULL, 1, NULL, '0349331431', '2022-07-19 07:58:37', '00101', '', 'a:0:{}', 'Actif', '2022-07-20 06:24:17', NULL, NULL, NULL);

INSERT INTO agent_secteur
(id, agent_id, secteur_id, date_validation, statut)
VALUES(25, 31, 8, '2022-09-01 14:20:05', 1);
