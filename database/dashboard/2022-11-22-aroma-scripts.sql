

create or replace view view_implantation_elmt_aroma_valid as 
select ie.id, 
ie.mere_id, 
ie.produit_id, 
ie.statut, 
coalesce(ie.qte_gratuit, 0) as qte_gratuit, 
coalesce(ie.qte_gratuit_reassort, 0) as qte_gratuit_reassort, 
coalesce(p.prix, 0) as prix_produit,
coalesce(p.prix_conseille, 0) as prix_conseille_produit
from implantation_elmt_aroma ie join produit_aroma p on  
ie.produit_id = p.id
where ie.statut is NULL or ie.statut != 0;

create or replace view view_implantation_aroma as 
select id, 
nom, 
description, 
image, 
statut, 
element_unique, 
coalesce(qte_elmt, 0) as qte_elmt, 
coalesce(qte_elmt_reassort, 0) as qte_elmt_reassort, 
coalesce(remise, 0) as remise, 
coalesce(remise_reassort, 0) as remise_reassort 
from  implantation_aroma;

create or replace view view_implantation_aroma_total as 
select i.id, sum(ie.prix_produit * (1. - i.remise/100) * i.qte_elmt) as total,
sum(ie.prix_produit * (1. - i.remise_reassort/100) * i.qte_elmt_reassort) as total_reassort,
sum(ie.qte_gratuit) as ug,
sum(ie.qte_gratuit_reassort) as ug_reassort
from view_implantation_aroma i join view_implantation_elmt_aroma_valid ie 
on i.id = ie.mere_id
group by i.id;

create or replace view view_implantation_aroma_total_full as 
select i.id, 
i.id as implantation_id,
coalesce(total, 0) as total,
coalesce(total_reassort, 0) as total_reassort,
coalesce(ug, 0) as ug,
coalesce(ug_reassort, 0) as ug_reassort
from implantation_aroma i left join view_implantation_aroma_total it on i.id = it.id;
