<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220701214106 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE agent_secteur (id INT AUTO_INCREMENT NOT NULL, agent_id INT DEFAULT NULL, secteur_id INT DEFAULT NULL, date_validation DATETIME DEFAULT NULL, statut TINYINT(1) DEFAULT NULL, INDEX IDX_521647B53414710B (agent_id), INDEX IDX_521647B59F7E4405 (secteur_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE calendar_event (id INT AUTO_INCREMENT NOT NULL, user_id INT DEFAULT NULL, calendar_event_label_id INT DEFAULT NULL, url VARCHAR(255) DEFAULT NULL, title VARCHAR(255) NOT NULL, start DATETIME NOT NULL, end DATETIME NOT NULL, all_day TINYINT(1) DEFAULT 0 NOT NULL, INDEX IDX_57FA09C9A76ED395 (user_id), INDEX IDX_57FA09C9C7D799B9 (calendar_event_label_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE calendar_event_label (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, value VARCHAR(255) NOT NULL, color VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE canal_message (id INT AUTO_INCREMENT NOT NULL, code VARCHAR(255) NOT NULL, nom VARCHAR(255) DEFAULT NULL, is_group TINYINT(1) DEFAULT NULL, updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', vus LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:array)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE canal_message_user (canal_message_id INT NOT NULL, user_id INT NOT NULL, INDEX IDX_AB12D4AAE53A466D (canal_message_id), INDEX IDX_AB12D4AAA76ED395 (user_id), PRIMARY KEY(canal_message_id, user_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE categorie_formation (id INT AUTO_INCREMENT NOT NULL, nom VARCHAR(255) NOT NULL, description LONGTEXT DEFAULT NULL, ordre_cat_formation INT DEFAULT NULL, statut INT DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE categorie_formation_agent (id INT AUTO_INCREMENT NOT NULL, agent_id INT NOT NULL, categorie_formation_id INT NOT NULL, INDEX IDX_8D9B74463414710B (agent_id), INDEX IDX_8D9B74462B036EAC (categorie_formation_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE coach_agent (id INT AUTO_INCREMENT NOT NULL, coach_id INT DEFAULT NULL, agent_id INT DEFAULT NULL, INDEX IDX_3209FFB73C105691 (coach_id), INDEX IDX_3209FFB73414710B (agent_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE coach_secteur (id INT AUTO_INCREMENT NOT NULL, coach_id INT DEFAULT NULL, secteur_id INT DEFAULT NULL, INDEX IDX_3B95CD573C105691 (coach_id), INDEX IDX_3B95CD579F7E4405 (secteur_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE commentaire (id INT AUTO_INCREMENT NOT NULL, user_id INT DEFAULT NULL, parent INT DEFAULT NULL, tree_root INT DEFAULT NULL, video_formation_id INT DEFAULT NULL, textes LONGTEXT NOT NULL, lvl INT NOT NULL, lft INT NOT NULL, rgt INT NOT NULL, created_at DATETIME DEFAULT NULL, updated_at DATETIME DEFAULT NULL, INDEX IDX_67F068BCA76ED395 (user_id), INDEX IDX_67F068BC3D8E604F (parent), INDEX IDX_67F068BCA977936C (tree_root), INDEX IDX_67F068BCF3F339E1 (video_formation_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE contact (id INT AUTO_INCREMENT NOT NULL, agent_id INT NOT NULL, information_id INT DEFAULT NULL, secteur_id INT DEFAULT NULL, status TINYINT(1) DEFAULT NULL, created_at DATETIME DEFAULT NULL, note LONGTEXT DEFAULT NULL, INDEX IDX_4C62E6383414710B (agent_id), UNIQUE INDEX UNIQ_4C62E6382EF03101 (information_id), INDEX IDX_4C62E6389F7E4405 (secteur_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE contact_information (id INT AUTO_INCREMENT NOT NULL, type_logement_id INT DEFAULT NULL, firstname VARCHAR(255) NOT NULL, lastname VARCHAR(255) NOT NULL, email VARCHAR(255) DEFAULT NULL, phone VARCHAR(100) DEFAULT NULL, address VARCHAR(255) DEFAULT NULL, rue VARCHAR(255) DEFAULT NULL, numero VARCHAR(255) DEFAULT NULL, code_postal VARCHAR(255) DEFAULT NULL, ville VARCHAR(255) DEFAULT NULL, composition_foyer VARCHAR(255) DEFAULT NULL, nbr_personne INT DEFAULT NULL, INDEX IDX_47D5A73D13B22EC4 (type_logement_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE formation (id INT AUTO_INCREMENT NOT NULL, coach_id INT DEFAULT NULL, secteur_id INT DEFAULT NULL, categorie_formation_id INT DEFAULT NULL, titre VARCHAR(255) DEFAULT NULL, description LONGTEXT DEFAULT NULL, description_deblocage LONGTEXT DEFAULT NULL, contenu LONGTEXT DEFAULT NULL, video_id VARCHAR(255) DEFAULT NULL, debloque_agent TINYINT(1) DEFAULT NULL, brouillon TINYINT(1) DEFAULT NULL, INDEX IDX_404021BF3C105691 (coach_id), INDEX IDX_404021BF9F7E4405 (secteur_id), INDEX IDX_404021BF2B036EAC (categorie_formation_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE formation_agent (id INT AUTO_INCREMENT NOT NULL, formation_id INT DEFAULT NULL, agent_id INT DEFAULT NULL, statut VARCHAR(255) DEFAULT NULL, INDEX IDX_500002E85200282E (formation_id), INDEX IDX_500002E83414710B (agent_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE live_chat_video (id INT AUTO_INCREMENT NOT NULL, user_a_id INT DEFAULT NULL, user_b_id INT DEFAULT NULL, secteur_id INT DEFAULT NULL, code VARCHAR(255) DEFAULT NULL, is_speed_live TINYINT(1) DEFAULT NULL, date_debut_live DATETIME DEFAULT NULL, theme VARCHAR(255) DEFAULT NULL, description LONGTEXT DEFAULT NULL, is_in_process TINYINT(1) DEFAULT NULL, INDEX IDX_2D0551EB415F1F91 (user_a_id), INDEX IDX_2D0551EB53EAB07F (user_b_id), INDEX IDX_2D0551EB9F7E4405 (secteur_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE media (id INT AUTO_INCREMENT NOT NULL, formation_id INT DEFAULT NULL, titre VARCHAR(255) DEFAULT NULL, type VARCHAR(255) DEFAULT NULL, slug VARCHAR(255) DEFAULT NULL, mime_type VARCHAR(255) DEFAULT NULL, INDEX IDX_6A2CA10C5200282E (formation_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE message (id INT AUTO_INCREMENT NOT NULL, user_id INT DEFAULT NULL, canal_message_id INT DEFAULT NULL, textes LONGTEXT DEFAULT NULL, created_at DATETIME DEFAULT NULL, files LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:array)\', deleted_at DATETIME DEFAULT NULL, INDEX IDX_B6BD307FA76ED395 (user_id), INDEX IDX_B6BD307FE53A466D (canal_message_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE rformation_categorie (id INT AUTO_INCREMENT NOT NULL, formation_id INT NOT NULL, categorie_id INT NOT NULL, UNIQUE INDEX UNIQ_53D1F9BF5200282E (formation_id), INDEX IDX_53D1F9BFBCF5E72D (categorie_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE secteur (id INT AUTO_INCREMENT NOT NULL, nom VARCHAR(255) DEFAULT NULL, description LONGTEXT DEFAULT NULL, active INT DEFAULT 1, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE tag (id INT AUTO_INCREMENT NOT NULL, libelle VARCHAR(255) DEFAULT NULL, description LONGTEXT DEFAULT NULL, couleur VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE tag_contact (tag_id INT NOT NULL, contact_id INT NOT NULL, INDEX IDX_7E53CB92BAD26311 (tag_id), INDEX IDX_7E53CB92E7A1254A (contact_id), PRIMARY KEY(tag_id, contact_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE type_logement (id INT AUTO_INCREMENT NOT NULL, nom VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE `user` (id INT AUTO_INCREMENT NOT NULL, contact_client_id INT DEFAULT NULL, email VARCHAR(180) NOT NULL, username VARCHAR(255) DEFAULT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, nom VARCHAR(255) DEFAULT NULL, prenom VARCHAR(255) DEFAULT NULL, date_naissance DATETIME DEFAULT NULL, adresse VARCHAR(255) DEFAULT NULL, numero_securite VARCHAR(255) DEFAULT NULL, rib VARCHAR(255) DEFAULT NULL, photo VARCHAR(255) DEFAULT NULL, six_digit_code INT DEFAULT NULL, forgotten_pass_token VARCHAR(255) DEFAULT NULL, active INT DEFAULT NULL, api_token VARCHAR(255) DEFAULT NULL, telephone VARCHAR(50) DEFAULT NULL, created_at DATETIME DEFAULT NULL, code_postal VARCHAR(255) DEFAULT NULL, lien_calendly VARCHAR(255) DEFAULT NULL, UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), INDEX IDX_8D93D649771A4A5A (contact_client_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE video_formation (id INT AUTO_INCREMENT NOT NULL, user_id INT DEFAULT NULL, uri VARCHAR(255) DEFAULT NULL, titre VARCHAR(255) DEFAULT NULL, description LONGTEXT DEFAULT NULL, video_id VARCHAR(255) DEFAULT NULL, created_at DATETIME DEFAULT NULL, updated_at DATETIME DEFAULT NULL, INDEX IDX_823F5C2AA76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE messenger_messages (id BIGINT AUTO_INCREMENT NOT NULL, body LONGTEXT NOT NULL, headers LONGTEXT NOT NULL, queue_name VARCHAR(190) NOT NULL, created_at DATETIME NOT NULL, available_at DATETIME NOT NULL, delivered_at DATETIME DEFAULT NULL, INDEX IDX_75EA56E0FB7336F0 (queue_name), INDEX IDX_75EA56E0E3BD61CE (available_at), INDEX IDX_75EA56E016BA31DB (delivered_at), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE agent_secteur ADD CONSTRAINT FK_521647B53414710B FOREIGN KEY (agent_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE agent_secteur ADD CONSTRAINT FK_521647B59F7E4405 FOREIGN KEY (secteur_id) REFERENCES secteur (id)');
        $this->addSql('ALTER TABLE calendar_event ADD CONSTRAINT FK_57FA09C9A76ED395 FOREIGN KEY (user_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE calendar_event ADD CONSTRAINT FK_57FA09C9C7D799B9 FOREIGN KEY (calendar_event_label_id) REFERENCES calendar_event_label (id)');
        $this->addSql('ALTER TABLE canal_message_user ADD CONSTRAINT FK_AB12D4AAE53A466D FOREIGN KEY (canal_message_id) REFERENCES canal_message (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE canal_message_user ADD CONSTRAINT FK_AB12D4AAA76ED395 FOREIGN KEY (user_id) REFERENCES `user` (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE categorie_formation_agent ADD CONSTRAINT FK_8D9B74463414710B FOREIGN KEY (agent_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE categorie_formation_agent ADD CONSTRAINT FK_8D9B74462B036EAC FOREIGN KEY (categorie_formation_id) REFERENCES categorie_formation (id)');
        $this->addSql('ALTER TABLE coach_agent ADD CONSTRAINT FK_3209FFB73C105691 FOREIGN KEY (coach_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE coach_agent ADD CONSTRAINT FK_3209FFB73414710B FOREIGN KEY (agent_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE coach_secteur ADD CONSTRAINT FK_3B95CD573C105691 FOREIGN KEY (coach_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE coach_secteur ADD CONSTRAINT FK_3B95CD579F7E4405 FOREIGN KEY (secteur_id) REFERENCES secteur (id)');
        $this->addSql('ALTER TABLE commentaire ADD CONSTRAINT FK_67F068BCA76ED395 FOREIGN KEY (user_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE commentaire ADD CONSTRAINT FK_67F068BC3D8E604F FOREIGN KEY (parent) REFERENCES commentaire (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE commentaire ADD CONSTRAINT FK_67F068BCA977936C FOREIGN KEY (tree_root) REFERENCES commentaire (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE commentaire ADD CONSTRAINT FK_67F068BCF3F339E1 FOREIGN KEY (video_formation_id) REFERENCES video_formation (id)');
        $this->addSql('ALTER TABLE contact ADD CONSTRAINT FK_4C62E6383414710B FOREIGN KEY (agent_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE contact ADD CONSTRAINT FK_4C62E6382EF03101 FOREIGN KEY (information_id) REFERENCES contact_information (id)');
        $this->addSql('ALTER TABLE contact ADD CONSTRAINT FK_4C62E6389F7E4405 FOREIGN KEY (secteur_id) REFERENCES secteur (id)');
        $this->addSql('ALTER TABLE contact_information ADD CONSTRAINT FK_47D5A73D13B22EC4 FOREIGN KEY (type_logement_id) REFERENCES type_logement (id)');
        $this->addSql('ALTER TABLE formation ADD CONSTRAINT FK_404021BF3C105691 FOREIGN KEY (coach_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE formation ADD CONSTRAINT FK_404021BF9F7E4405 FOREIGN KEY (secteur_id) REFERENCES secteur (id)');
        $this->addSql('ALTER TABLE formation ADD CONSTRAINT FK_404021BF2B036EAC FOREIGN KEY (categorie_formation_id) REFERENCES categorie_formation (id)');
        $this->addSql('ALTER TABLE formation_agent ADD CONSTRAINT FK_500002E85200282E FOREIGN KEY (formation_id) REFERENCES formation (id)');
        $this->addSql('ALTER TABLE formation_agent ADD CONSTRAINT FK_500002E83414710B FOREIGN KEY (agent_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE live_chat_video ADD CONSTRAINT FK_2D0551EB415F1F91 FOREIGN KEY (user_a_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE live_chat_video ADD CONSTRAINT FK_2D0551EB53EAB07F FOREIGN KEY (user_b_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE live_chat_video ADD CONSTRAINT FK_2D0551EB9F7E4405 FOREIGN KEY (secteur_id) REFERENCES secteur (id)');
        $this->addSql('ALTER TABLE media ADD CONSTRAINT FK_6A2CA10C5200282E FOREIGN KEY (formation_id) REFERENCES formation (id)');
        $this->addSql('ALTER TABLE message ADD CONSTRAINT FK_B6BD307FA76ED395 FOREIGN KEY (user_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE message ADD CONSTRAINT FK_B6BD307FE53A466D FOREIGN KEY (canal_message_id) REFERENCES canal_message (id)');
        $this->addSql('ALTER TABLE rformation_categorie ADD CONSTRAINT FK_53D1F9BF5200282E FOREIGN KEY (formation_id) REFERENCES formation (id)');
        $this->addSql('ALTER TABLE rformation_categorie ADD CONSTRAINT FK_53D1F9BFBCF5E72D FOREIGN KEY (categorie_id) REFERENCES categorie_formation (id)');
        $this->addSql('ALTER TABLE tag_contact ADD CONSTRAINT FK_7E53CB92BAD26311 FOREIGN KEY (tag_id) REFERENCES tag (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE tag_contact ADD CONSTRAINT FK_7E53CB92E7A1254A FOREIGN KEY (contact_id) REFERENCES contact (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE `user` ADD CONSTRAINT FK_8D93D649771A4A5A FOREIGN KEY (contact_client_id) REFERENCES contact (id)');
        $this->addSql('ALTER TABLE video_formation ADD CONSTRAINT FK_823F5C2AA76ED395 FOREIGN KEY (user_id) REFERENCES `user` (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE calendar_event DROP FOREIGN KEY FK_57FA09C9C7D799B9');
        $this->addSql('ALTER TABLE canal_message_user DROP FOREIGN KEY FK_AB12D4AAE53A466D');
        $this->addSql('ALTER TABLE message DROP FOREIGN KEY FK_B6BD307FE53A466D');
        $this->addSql('ALTER TABLE categorie_formation_agent DROP FOREIGN KEY FK_8D9B74462B036EAC');
        $this->addSql('ALTER TABLE formation DROP FOREIGN KEY FK_404021BF2B036EAC');
        $this->addSql('ALTER TABLE rformation_categorie DROP FOREIGN KEY FK_53D1F9BFBCF5E72D');
        $this->addSql('ALTER TABLE commentaire DROP FOREIGN KEY FK_67F068BC3D8E604F');
        $this->addSql('ALTER TABLE commentaire DROP FOREIGN KEY FK_67F068BCA977936C');
        $this->addSql('ALTER TABLE tag_contact DROP FOREIGN KEY FK_7E53CB92E7A1254A');
        $this->addSql('ALTER TABLE `user` DROP FOREIGN KEY FK_8D93D649771A4A5A');
        $this->addSql('ALTER TABLE contact DROP FOREIGN KEY FK_4C62E6382EF03101');
        $this->addSql('ALTER TABLE formation_agent DROP FOREIGN KEY FK_500002E85200282E');
        $this->addSql('ALTER TABLE media DROP FOREIGN KEY FK_6A2CA10C5200282E');
        $this->addSql('ALTER TABLE rformation_categorie DROP FOREIGN KEY FK_53D1F9BF5200282E');
        $this->addSql('ALTER TABLE agent_secteur DROP FOREIGN KEY FK_521647B59F7E4405');
        $this->addSql('ALTER TABLE coach_secteur DROP FOREIGN KEY FK_3B95CD579F7E4405');
        $this->addSql('ALTER TABLE contact DROP FOREIGN KEY FK_4C62E6389F7E4405');
        $this->addSql('ALTER TABLE formation DROP FOREIGN KEY FK_404021BF9F7E4405');
        $this->addSql('ALTER TABLE live_chat_video DROP FOREIGN KEY FK_2D0551EB9F7E4405');
        $this->addSql('ALTER TABLE tag_contact DROP FOREIGN KEY FK_7E53CB92BAD26311');
        $this->addSql('ALTER TABLE contact_information DROP FOREIGN KEY FK_47D5A73D13B22EC4');
        $this->addSql('ALTER TABLE agent_secteur DROP FOREIGN KEY FK_521647B53414710B');
        $this->addSql('ALTER TABLE calendar_event DROP FOREIGN KEY FK_57FA09C9A76ED395');
        $this->addSql('ALTER TABLE canal_message_user DROP FOREIGN KEY FK_AB12D4AAA76ED395');
        $this->addSql('ALTER TABLE categorie_formation_agent DROP FOREIGN KEY FK_8D9B74463414710B');
        $this->addSql('ALTER TABLE coach_agent DROP FOREIGN KEY FK_3209FFB73C105691');
        $this->addSql('ALTER TABLE coach_agent DROP FOREIGN KEY FK_3209FFB73414710B');
        $this->addSql('ALTER TABLE coach_secteur DROP FOREIGN KEY FK_3B95CD573C105691');
        $this->addSql('ALTER TABLE commentaire DROP FOREIGN KEY FK_67F068BCA76ED395');
        $this->addSql('ALTER TABLE contact DROP FOREIGN KEY FK_4C62E6383414710B');
        $this->addSql('ALTER TABLE formation DROP FOREIGN KEY FK_404021BF3C105691');
        $this->addSql('ALTER TABLE formation_agent DROP FOREIGN KEY FK_500002E83414710B');
        $this->addSql('ALTER TABLE live_chat_video DROP FOREIGN KEY FK_2D0551EB415F1F91');
        $this->addSql('ALTER TABLE live_chat_video DROP FOREIGN KEY FK_2D0551EB53EAB07F');
        $this->addSql('ALTER TABLE message DROP FOREIGN KEY FK_B6BD307FA76ED395');
        $this->addSql('ALTER TABLE video_formation DROP FOREIGN KEY FK_823F5C2AA76ED395');
        $this->addSql('ALTER TABLE commentaire DROP FOREIGN KEY FK_67F068BCF3F339E1');
        $this->addSql('DROP TABLE agent_secteur');
        $this->addSql('DROP TABLE calendar_event');
        $this->addSql('DROP TABLE calendar_event_label');
        $this->addSql('DROP TABLE canal_message');
        $this->addSql('DROP TABLE canal_message_user');
        $this->addSql('DROP TABLE categorie_formation');
        $this->addSql('DROP TABLE categorie_formation_agent');
        $this->addSql('DROP TABLE coach_agent');
        $this->addSql('DROP TABLE coach_secteur');
        $this->addSql('DROP TABLE commentaire');
        $this->addSql('DROP TABLE contact');
        $this->addSql('DROP TABLE contact_information');
        $this->addSql('DROP TABLE formation');
        $this->addSql('DROP TABLE formation_agent');
        $this->addSql('DROP TABLE live_chat_video');
        $this->addSql('DROP TABLE media');
        $this->addSql('DROP TABLE message');
        $this->addSql('DROP TABLE rformation_categorie');
        $this->addSql('DROP TABLE secteur');
        $this->addSql('DROP TABLE tag');
        $this->addSql('DROP TABLE tag_contact');
        $this->addSql('DROP TABLE type_logement');
        $this->addSql('DROP TABLE `user`');
        $this->addSql('DROP TABLE video_formation');
        $this->addSql('DROP TABLE messenger_messages');
    }
}
