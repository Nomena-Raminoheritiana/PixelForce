<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220426165149 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE group_message_user DROP FOREIGN KEY FK_C84007A984B7729B');
        $this->addSql('ALTER TABLE message DROP FOREIGN KEY FK_B6BD307F84B7729B');
        $this->addSql('CREATE TABLE canal_message (id INT AUTO_INCREMENT NOT NULL, code VARCHAR(255) NOT NULL, nom VARCHAR(255) DEFAULT NULL, is_group TINYINT(1) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE canal_message_user (canal_message_id INT NOT NULL, user_id INT NOT NULL, INDEX IDX_AB12D4AAE53A466D (canal_message_id), INDEX IDX_AB12D4AAA76ED395 (user_id), PRIMARY KEY(canal_message_id, user_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE last_message (id INT AUTO_INCREMENT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE canal_message_user ADD CONSTRAINT FK_AB12D4AAE53A466D FOREIGN KEY (canal_message_id) REFERENCES canal_message (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE canal_message_user ADD CONSTRAINT FK_AB12D4AAA76ED395 FOREIGN KEY (user_id) REFERENCES `user` (id) ON DELETE CASCADE');
        $this->addSql('DROP TABLE group_message');
        $this->addSql('DROP TABLE group_message_user');
        $this->addSql('DROP INDEX IDX_B6BD307F84B7729B ON message');
        $this->addSql('ALTER TABLE message CHANGE group_message_id canal_message_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE message ADD CONSTRAINT FK_B6BD307FE53A466D FOREIGN KEY (canal_message_id) REFERENCES canal_message (id)');
        $this->addSql('CREATE INDEX IDX_B6BD307FE53A466D ON message (canal_message_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE canal_message_user DROP FOREIGN KEY FK_AB12D4AAE53A466D');
        $this->addSql('ALTER TABLE message DROP FOREIGN KEY FK_B6BD307FE53A466D');
        $this->addSql('CREATE TABLE group_message (id INT AUTO_INCREMENT NOT NULL, code VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, nom VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE group_message_user (group_message_id INT NOT NULL, user_id INT NOT NULL, INDEX IDX_C84007A984B7729B (group_message_id), INDEX IDX_C84007A9A76ED395 (user_id), PRIMARY KEY(group_message_id, user_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE group_message_user ADD CONSTRAINT FK_C84007A984B7729B FOREIGN KEY (group_message_id) REFERENCES group_message (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE group_message_user ADD CONSTRAINT FK_C84007A9A76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE');
        $this->addSql('DROP TABLE canal_message');
        $this->addSql('DROP TABLE canal_message_user');
        $this->addSql('DROP TABLE last_message');
        $this->addSql('ALTER TABLE commentaire CHANGE textes textes LONGTEXT NOT NULL COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE live_chat_video CHANGE code code VARCHAR(255) DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE theme theme VARCHAR(255) DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE description description LONGTEXT DEFAULT NULL COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('DROP INDEX IDX_B6BD307FE53A466D ON message');
        $this->addSql('ALTER TABLE message CHANGE textes textes LONGTEXT DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE canal_message_id group_message_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE message ADD CONSTRAINT FK_B6BD307F84B7729B FOREIGN KEY (group_message_id) REFERENCES group_message (id)');
        $this->addSql('CREATE INDEX IDX_B6BD307F84B7729B ON message (group_message_id)');
        $this->addSql('ALTER TABLE messenger_messages CHANGE body body LONGTEXT NOT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE headers headers LONGTEXT NOT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE queue_name queue_name VARCHAR(255) NOT NULL COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE `user` CHANGE email email VARCHAR(180) NOT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE password password VARCHAR(255) NOT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE nom nom VARCHAR(255) DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE prenom prenom VARCHAR(255) DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE adresse adresse VARCHAR(255) DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE numero_securite numero_securite VARCHAR(255) DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE rib rib VARCHAR(255) DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE photo photo VARCHAR(255) DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE forgotten_pass_token forgotten_pass_token VARCHAR(255) DEFAULT NULL COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE video_formation CHANGE uri uri VARCHAR(255) DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE titre titre VARCHAR(255) DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE description description LONGTEXT DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE video_id video_id VARCHAR(255) DEFAULT NULL COLLATE `utf8mb4_unicode_ci`');
    }
}
