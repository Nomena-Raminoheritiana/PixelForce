<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220715132024 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE produit_qte_stock (id INT AUTO_INCREMENT NOT NULL, produit_id INT NOT NULL, qte_stock DOUBLE PRECISION NOT NULL, UNIQUE INDEX UNIQ_41E7AA3F347EFB (produit_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE produit_qte_stock ADD CONSTRAINT FK_41E7AA3F347EFB FOREIGN KEY (produit_id) REFERENCES produit (id)');
        $this->addSql('ALTER TABLE meeting DROP FOREIGN KEY FK_F515E1392A44447F');
        $this->addSql('ALTER TABLE meeting CHANGE user_to_meet_id user_to_meet_id INT NOT NULL');
        $this->addSql('ALTER TABLE meeting ADD CONSTRAINT FK_F515E1392A44447F FOREIGN KEY (user_to_meet_id) REFERENCES contact (id)');
        $this->addSql('ALTER TABLE user ADD stripe_data LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:array)\'');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE produit_qte_stock');
        $this->addSql('ALTER TABLE meeting DROP FOREIGN KEY FK_F515E1392A44447F');
        $this->addSql('ALTER TABLE meeting CHANGE user_to_meet_id user_to_meet_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE meeting ADD CONSTRAINT FK_F515E1392A44447F FOREIGN KEY (user_to_meet_id) REFERENCES user (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE `user` DROP stripe_data');
    }
}
