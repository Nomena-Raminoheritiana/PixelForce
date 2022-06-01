<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220527125939 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE contact (id INT AUTO_INCREMENT NOT NULL, agent_id INT NOT NULL, informations LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:array)\', status TINYINT(1) DEFAULT NULL, INDEX IDX_4C62E6383414710B (agent_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE contact ADD CONSTRAINT FK_4C62E6383414710B FOREIGN KEY (agent_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE user ADD contact_client_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D649771A4A5A FOREIGN KEY (contact_client_id) REFERENCES contact (id)');
        $this->addSql('CREATE INDEX IDX_8D93D649771A4A5A ON user (contact_client_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE `user` DROP FOREIGN KEY FK_8D93D649771A4A5A');
        $this->addSql('DROP TABLE contact');
        $this->addSql('DROP INDEX IDX_8D93D649771A4A5A ON `user`');
        $this->addSql('ALTER TABLE `user` DROP contact_client_id');
    }
}
