# Pixel force

## Création de la base de données 
```php bin/console doctrine:database:create```

## doctrine/doctrine-bundle
DATABASE_URL="mysql://root:@127.0.0.1:3306/pixelForce?serverVersion=5.7&charset=utf8mb4"

## Mise a jour des tables de la base de données generique
```php bin/console doctrine:schema:update -f --em=default```
```php bin/console doctrine:migrations:migrate```

#mail
MAILER_DSN=smtp://localhost:1025
MAILER_SEND_FROM=admin@pixelForce.fr
MAILER_SEND_FROM_NAME=PixelForce

# installer les dépendances symfony
composer install

# installer les dépendances assets
yarn install

# buil yarn
yarn run dev

#lancer messenger
php bin/console messenger:consume async -vv

#lancer maildev
maildev --hide-extensions STARTTLS

#probleme du slash div dans le compilateur js
npm install -g sass-migrator
sass-migrator division **/*.scss

#Lancer messenger
php bin/console messenger:consume async

