create or replace view order_secu_valide as 
select os.*, (accomp_montant + prix_produit) * (1 + tva_pourcentage/100) as montant_ttc
from order_secu os where statut = 2;

create or replace view stat_vente_secu_agent as 
select agent_id, secteur_id, count(id) as nbr_ventes, sum(montant_ttc) as ca
from order_secu_valide group by agent_id, secteur_id; 

create or replace view agent_secteur_valide as 
select ase.*, s.type_id as type_secteur_id
from agent_secteur ase join secteur s on ase.secteur_id = s.id where ase.statut;

create or replace view stat_vente_secu_tout_agent as 
select ase.id, ase.agent_id, ase.secteur_id, coalesce(sv.nbr_ventes, 0) as nbr_ventes,
coalesce(sv.ca, 0) as ca, ase.type_secteur_id
from (select * from agent_secteur_valide where type_secteur_id = 3) ase left join 
stat_vente_secu_agent sv 
on (ase.agent_id, ase.secteur_id) = (sv.agent_id, sv.secteur_id);

create or replace view active_clients as
select *
from user where active and json_contains(roles, '"ROLE_CLIENT"', '$');


create or replace view order_valide as 
select *
from `order` where status = 2;

create or replace view stat_vente_ecommerce_agent as 
select agent_id, secteur_id, count(id) as nbr_ventes, sum(amount) as ca
from order_valide group by agent_id, secteur_id; 

create or replace view stat_vente_ecommerce_tout_agent as 
select ase.id, ase.agent_id, ase.secteur_id, coalesce(sv.nbr_ventes, 0) as nbr_ventes,
coalesce(sv.ca, 0) as ca, ase.type_secteur_id
from (select * from agent_secteur_valide where type_secteur_id = 1) ase left join 
stat_vente_ecommerce_agent sv 
on (ase.agent_id, ase.secteur_id) = (sv.agent_id, sv.secteur_id);


create or replace view demande_devis_valide as 
select *
from demande_devis where statut = 2;

create or replace view stat_vente_dd_agent as 
select agent_id, secteur_id, count(id) as nbr_ventes, 0 as ca
from demande_devis_valide group by agent_id, secteur_id; 

create or replace view stat_vente_dd_tout_agent as 
select ase.id, ase.agent_id, ase.secteur_id, coalesce(sv.nbr_ventes, 0) as nbr_ventes,
coalesce(sv.ca, 0) as ca, ase.type_secteur_id
from (select * from agent_secteur_valide where type_secteur_id = 2) ase left join 
stat_vente_dd_agent sv 
on (ase.agent_id, ase.secteur_id) = (sv.agent_id, sv.secteur_id);

create or replace view stat_vente_tout_agent as
select * from stat_vente_secu_tout_agent union all 
select * from stat_vente_ecommerce_tout_agent union all 
select * from stat_vente_dd_tout_agent;

create or replace view all_type_order_valide as
select agent_id, secteur_id, client_id, montant_ttc as montant from  order_secu_valide
union all
select agent_id, secteur_id, user_id, amount from order_valide 
union all 
select agent_id, secteur_id, client_id, 0 from demande_devis_valide;

create or replace view agent_secteur_client_valide as 
select a.agent_id, a.secteur_id, ac.id as client_id
from agent_secteur_valide a join active_clients ac on a.agent_id = ac.client_agent_id;

create or replace view all_type_order_valide_per_client as 
select agent_id, secteur_id, client_id, sum(montant) as montant, count(client_id) as nbr
from all_type_order_valide group by agent_id, secteur_id, client_id;

create or replace view all_type_order_valide_all_client as 
select a.agent_id, a.secteur_id, a.client_id, coalesce(montant, 0) as montant, coalesce(nbr, 0) as nbr
from agent_secteur_client_valide a left join all_type_order_valide_per_client o 
on (a.agent_id, a.secteur_id, a.client_id) = (o.agent_id, o.secteur_id, o.client_id);

create or replace view client_secteur_agent as 
select a.*, ac.nom, ac.prenom, ac.email, ac.username
from all_type_order_valide_all_client a 
join active_clients ac on a.client_id = ac.id; 