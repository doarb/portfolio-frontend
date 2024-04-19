# Portfolio

Le projet vise à développer un site web mettant en valeur un portfolio, avec un frontend connecté à un backend. La page d'accueil offre une présentation personnelle, avec la fonctionnalité d'envoi de courriel. Une section projet permet d'afficher, d'ajouter, de modifier et de supprimer des projets. Le système d'authentification est inclus. De plus, une interface administrateur propose des statistiques sur les visites du site et la création de comptes administrateurs.

## Technologies Utilisées

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Recharts](https://recharts.org/)

## Installation

1. Cloner le dépôt : `git clone git@github.com:doarb/portfolio-frontend.git`
2. Accéder au dossier du projet : `cd portfolio-frontend`
3. Effectuer les installations : `pnpm install`
4. Configurer les variables d'environnement :
   - Créez un fichier .env à la racine du projet.
   - Ajoutez les configurations suivantes au fichier .env :
     ```
     VITE_URL_BACK="http://localhost:5000"
     ```
     Il est important de noter que lors du lancement, si le backend n'est pas correctement renseigné, celui-ci ne démarrera pas. De plus, il est nécessaire de démarrer le backend en premier.

## Utilisation

Pour démarrer le projet localement, utilisez la commande suivante :

```
pnpm dev
```

Cela lancera l'application en mode développement. Ouvrez [http://localhost:5173](http://localhost:5173) pour la visualiser dans votre navigateur.

## Auteur

Si vous avez des questions ou des commentaires, n'hésitez pas à me contacter à l'adresse suivante : [damienboucher25@gmail.com](mailto:damienboucher25@gmail.com).
