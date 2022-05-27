<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220527165513 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE contact_information (id INT AUTO_INCREMENT NOT NULL, firstname VARCHAR(255) NOT NULL, lastname VARCHAR(255) NOT NULL, email VARCHAR(255) DEFAULT NULL, phone VARCHAR(100) DEFAULT NULL, address VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE contact ADD information_id INT DEFAULT NULL, DROP informations');
        $this->addSql('ALTER TABLE contact ADD CONSTRAINT FK_4C62E6382EF03101 FOREIGN KEY (information_id) REFERENCES contact_information (id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_4C62E6382EF03101 ON contact (information_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE contact DROP FOREIGN KEY FK_4C62E6382EF03101');
        $this->addSql('DROP TABLE contact_information');
        $this->addSql('DROP INDEX UNIQ_4C62E6382EF03101 ON contact');
        $this->addSql('ALTER TABLE contact ADD informations LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:array)\', DROP information_id');
    }
}
