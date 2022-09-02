<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220902075932 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        //$this->addSql('CREATE TABLE devis (id INT AUTO_INCREMENT NOT NULL, demande_devis_id INT NOT NULL, title VARCHAR(255) NOT NULL, content LONGTEXT DEFAULT NULL, price DOUBLE PRECISION NOT NULL, files JSON DEFAULT NULL, created_at DATETIME NOT NULL, status VARCHAR(100) NOT NULL, contrat_file_name VARCHAR(255) DEFAULT NULL, status_int INT DEFAULT NULL, INDEX IDX_8B27C52B787B318 (demande_devis_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE order_digital (id INT AUTO_INCREMENT NOT NULL, agent_id INT DEFAULT NULL, client_id INT DEFAULT NULL, devis_id INT NOT NULL, amount DOUBLE PRECISION NOT NULL, created_at DATETIME NOT NULL, stripe_data LONGTEXT NOT NULL COMMENT \'(DC2Type:array)\', agent_email VARCHAR(255) NOT NULL, client_email VARCHAR(255) NOT NULL, stripe_charge_id VARCHAR(255) NOT NULL, INDEX IDX_3D32E49C3414710B (agent_id), INDEX IDX_3D32E49C19EB6921 (client_id), UNIQUE INDEX UNIQ_3D32E49C41DEFADA (devis_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        //$this->addSql('CREATE TABLE produit_qte_stock (id INT AUTO_INCREMENT NOT NULL, produit_id INT NOT NULL, qte_stock DOUBLE PRECISION NOT NULL, UNIQUE INDEX UNIQ_41E7AA3F347EFB (produit_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        //$this->addSql('ALTER TABLE devis ADD CONSTRAINT FK_8B27C52B787B318 FOREIGN KEY (demande_devis_id) REFERENCES demande_devis (id)');
        $this->addSql('ALTER TABLE order_digital ADD CONSTRAINT FK_3D32E49C3414710B FOREIGN KEY (agent_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE order_digital ADD CONSTRAINT FK_3D32E49C19EB6921 FOREIGN KEY (client_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE order_digital ADD CONSTRAINT FK_3D32E49C41DEFADA FOREIGN KEY (devis_id) REFERENCES devis (id)');
        //$this->addSql('ALTER TABLE produit_qte_stock ADD CONSTRAINT FK_41E7AA3F347EFB FOREIGN KEY (produit_id) REFERENCES produit (id)');
        $this->addSql('ALTER TABLE demande_devis CHANGE files files JSON DEFAULT NULL');
        $this->addSql('ALTER TABLE order_secu CHANGE sepa sepa JSON DEFAULT NULL');
        $this->addSql('ALTER TABLE user CHANGE roles roles JSON NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE order_digital DROP FOREIGN KEY FK_3D32E49C41DEFADA');
        //$this->addSql('DROP TABLE devis');
        $this->addSql('DROP TABLE order_digital');
        //$this->addSql('DROP TABLE produit_qte_stock');
        $this->addSql('ALTER TABLE demande_devis CHANGE files files LONGTEXT DEFAULT NULL COLLATE `utf8mb4_bin`');
        $this->addSql('ALTER TABLE order_secu CHANGE sepa sepa LONGTEXT DEFAULT NULL COLLATE `utf8mb4_bin`');
        $this->addSql('ALTER TABLE `user` CHANGE roles roles LONGTEXT NOT NULL COLLATE `utf8mb4_bin`');
    }
}
