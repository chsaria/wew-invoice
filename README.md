# WewBill

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Info zur Einrichtung

Starten über npm start

Basiert auf https://www.djamware.com/post/5a0673c880aca7739224ee21/mean-stack-angular-5-crud-web-application-example
ev. hier nachsehen, wenn irgendwelche Pakete fehlen

Erstellt mit:
npm Version 5.6.0
@angular/cli@1.5.0

Verwendete Pakete:
npm install --save express body-parser morgan
npm install --save mongoose bluebird
npm install --save jwt-simple
npm install --save moment
npm install --save bcryptjs

ev. zusätzlich zu installieren:
npm install --save @angular-devkit/core
npm install nodemon

Datenbank:
Mongo-DB (MongoDB 3.4.7 2008R2Plus SSL (64bit))

## Info zur Umsetzung

/bin/www.js => Grundsätzliche WWW-Server-Einrichtung
/app.js     => Einstieg ins Backend
/routes/entity.js => Routen-Handler für die verschiedenen Entitäten

Unter localhost:3000/ kann die Angular-App abgerufen werden
Unter localhost:3000/entity kann die API abgerufen werden (z.B.: localhost:3000/customer)

Um mongodb in den System-PATH zu bekommen, zuerst den Pfad des bin-Verzeichnisses der mongodb-Installation herausfinden
(z.B: C:\Program Files\MongoDB\Server\3.6\bin),
 dann in einer Powershell mit Admin-Rechten folgende Befehle ausführen (Den Pfad zu dem Verzeichnis entsprechend anpassen!):
$oldpath = (Get-ItemProperty -Path 'Registry::HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Session Manager\Environment' -Name PATH).path
$newpath = "$oldpath;C:\Program Files\MongoDB\Server\3.6\bin"
Set-ItemProperty -Path 'Registry::HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Session Manager\Environment' -Name PATH -Value $newPath

Für die Datenbank die beiden folgenden Verzeichnisse anlegen:
C:\Databases\MongoDB\wew-bill\data
C:\Databases\MongoDB\wew-bill\log
Wenn die Datenbank an einem anderen Ort abgelegt werden soll, die beiden Verzeichnisse für Log und Daten anlegen und in der Datei ./mongodb/mongod.cfg anpassen.