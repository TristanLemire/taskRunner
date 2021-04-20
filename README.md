# Task Runner

Cours de **solutions mobiles**,
HETIC web3 P2021

##### Groupe 10

Virgil LIMONGI
Tristan LEMIRE
Thomas EVANO
Selima BEN KEBAIER
Emilie TOMBUYSES
Pierre-Alain AGNAN
Rodrigo TAPIA BRAVO
Camille MARQUAND

## Projet

### Les consignes

Développer en groupe, une application mobile permettant la mise en commun d'espaces utilisateurs permettant la gestion de tâches et la gestion d'albums photos.

### La stack utilisée

- React Native
- Expo
- expo/vector-icons
- API de [jsonplaceholder](https://jsonplaceholder.typicode.com/)

----
### Plus en détails

Mettre en place une pagination pour l'affichage des listes

#### Écran d'accueil

Liste d'utilisateurs et leurs emplacements sur une carte

- Liste d'utilisateurs **scrollable** et carte statique en partie inférieure d'écran
- Barre de recherche qui filtre dans la liste des utilisateurs
- Carte sur laquelle est affichée l'emplacement des utilisateurs listés
- Au clique sur un utilisateur ou sur son emplacement sur la carte, redirection vers le profil de l'utilisateur

#### Profil utilisateur
Détails relatifs à l'utilisateur

- Nom, prénom, adresse, mail, numéro de téléphone
- Carte centrée sur l'emplacement de l'utilisateur
- Liste de choses à faire 
  - Ajout d'un item à la liste via une popup
  - Validation & dévalidation d'items dans la liste
- Liste d'albums photos relatifs à l'utilisateur
  - Au clique sur l'album, affichage des images de l'album
    - Au clique sur une image, affichage en plain écran dans une modale
- Liste de publications créés par l'utilisateur
  - Au clique sur une publication, affichage des détails

#### Détails d'une publicatio

- Titre, description
- Liste de commentaires
  - Nom de l'auteur et contenu du commentaire
  - Ajout d'un commentaire à la liste

## Installation du projet

#### Prérequis

[Télécharger l'application Expo Go](https://expo.io/)

Clone du repo

```terminal
git clone git@github.com:TristanLemire/taskRunner.git
```

#### Run de l'application


```terminal
yarn install
yarn start
```