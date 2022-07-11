# Pixel force
## doctrine/doctrine-bundle
```DATABASE_URL="mysql://root:@127.0.0.1:3306/pixelForce?serverVersion=5.7&charset=utf8mb4"```
#mail
```MAILER_DSN=smtp://localhost:1025```
```MAILER_SEND_FROM=admin@pixelForce.fr```
```MAILER_SEND_FROM_NAME=PixelForce```

### commandes

# installer les dépendances symfony
```composer install```
# installer les dépendances assets
```yarn install```
# probleme du slash div dans le compilateur js
```npm install -g sass-migrator```
```sass-migrator division **/*.scss```
# buil yarn
```yarn run dev --watch```
# lancer maildev
```maildev --hide-extensions STARTTLS```
# Lancer messenger
```php bin/console messenger:consume async -vv```
## Création de la base de données 
```php bin/console doctrine:database:create```
## Mise a jour des tables de la base de données generique
```php bin/console doctrine:schema:update -f```
# lancer messenger
```php bin/console messenger:consume async -vv```
# lancer mercure
```mercure run -config Caddyfile.dev```
# suprimer l cache
```php bin/console c:c```

# Calendar Fixtures :
```php bin/console doctrine:fixtures:load --group=calendar_event_label --append```
```php bin/console doctrine:fixtures:load --group=calendar_event --append```
```php bin/console doctrine:fixtures:load --group=meeting_state --append```



