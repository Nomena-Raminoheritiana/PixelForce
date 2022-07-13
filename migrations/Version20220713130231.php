<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220713130231 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE meeting DROP FOREIGN KEY FK_F515E1392A44447F');
        $this->addSql('ALTER TABLE meeting CHANGE user_to_meet_id user_to_meet_id INT NOT NULL');
        $this->addSql('ALTER TABLE meeting ADD CONSTRAINT FK_F515E1392A44447F FOREIGN KEY (user_to_meet_id) REFERENCES contact (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE meeting DROP FOREIGN KEY FK_F515E1392A44447F');
        $this->addSql('ALTER TABLE meeting CHANGE user_to_meet_id user_to_meet_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE meeting ADD CONSTRAINT FK_F515E1392A44447F FOREIGN KEY (user_to_meet_id) REFERENCES user (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
    }
}
