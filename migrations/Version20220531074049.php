<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220531074049 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE formation (id INT AUTO_INCREMENT NOT NULL, coach_id INT DEFAULT NULL, titre VARCHAR(255) DEFAULT NULL, description LONGTEXT DEFAULT NULL, description_deblocage LONGTEXT DEFAULT NULL, contenu LONGTEXT DEFAULT NULL, lien_video VARCHAR(255) DEFAULT NULL, est_disponible TINYINT(1) DEFAULT NULL, est_debloquee TINYINT(1) DEFAULT NULL, brouillon TINYINT(1) DEFAULT NULL, INDEX IDX_404021BF3C105691 (coach_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE formation_agent (id INT AUTO_INCREMENT NOT NULL, formation_id INT DEFAULT NULL, agent_id INT DEFAULT NULL, statut VARCHAR(255) DEFAULT NULL, INDEX IDX_500002E85200282E (formation_id), INDEX IDX_500002E83414710B (agent_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE media (id INT AUTO_INCREMENT NOT NULL, formation_id INT DEFAULT NULL, titre VARCHAR(255) DEFAULT NULL, type VARCHAR(255) DEFAULT NULL, INDEX IDX_6A2CA10C5200282E (formation_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user_secteur (id INT AUTO_INCREMENT NOT NULL, user_id INT DEFAULT NULL, secteur_id INT DEFAULT NULL, date_validation DATETIME DEFAULT NULL, statut TINYINT(1) DEFAULT NULL, INDEX IDX_D8483B15A76ED395 (user_id), INDEX IDX_D8483B159F7E4405 (secteur_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE formation ADD CONSTRAINT FK_404021BF3C105691 FOREIGN KEY (coach_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE formation_agent ADD CONSTRAINT FK_500002E85200282E FOREIGN KEY (formation_id) REFERENCES formation (id)');
        $this->addSql('ALTER TABLE formation_agent ADD CONSTRAINT FK_500002E83414710B FOREIGN KEY (agent_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE media ADD CONSTRAINT FK_6A2CA10C5200282E FOREIGN KEY (formation_id) REFERENCES formation (id)');
        $this->addSql('ALTER TABLE user_secteur ADD CONSTRAINT FK_D8483B15A76ED395 FOREIGN KEY (user_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE user_secteur ADD CONSTRAINT FK_D8483B159F7E4405 FOREIGN KEY (secteur_id) REFERENCES secteur (id)');
        $this->addSql('ALTER TABLE user ADD code_postal VARCHAR(255) DEFAULT NULL, CHANGE created_at created_at DATETIME DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE formation_agent DROP FOREIGN KEY FK_500002E85200282E');
        $this->addSql('ALTER TABLE media DROP FOREIGN KEY FK_6A2CA10C5200282E');
        $this->addSql('DROP TABLE formation');
        $this->addSql('DROP TABLE formation_agent');
        $this->addSql('DROP TABLE media');
        $this->addSql('DROP TABLE user_secteur');
        $this->addSql('ALTER TABLE `user` DROP code_postal, CHANGE created_at created_at DATETIME NOT NULL');
    }
}
