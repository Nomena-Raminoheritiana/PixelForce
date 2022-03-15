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

#Fixtures
Il faudra mettre la valeur de EXECUTE_COMMAND dans .env.local à true
et le nom de la maison d'edition en cours dans COMMAND_MANAGER. Par exemple EXECUTE_COMMAND = edito
Lancer la commande: 
```php bin/console d:f:l```
# zoom
apiKey : C5nboPLUTfaxopXDGu7rFQ
secretApiKey : vtFA9DdSudcre68Bu2XWsp8fMNlBCTTyw8IN
Jeton : eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJvaXFvVVNMVVRacTc2OVY3WFZteXJnIn0.diKFWe1HVRm4nOE2077xvDDxWopxLNowRaWiNlTh70c
Jeton de vérification : 94mnMT8qQa6sluP4b15rXg
