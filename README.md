SalemWorld Portfolio
 ## Aperçu

 SalemWorld est mon portfolio personnel, une application web statique développée pour présenter mon parcours, mes compétences, et mes projets en tant qu’étudiant en MSc Cybersécurité & Cloud à Epitech. Ce site met en avant mon expertise en développement web, DevOps, et cloud computing, avec des projets comme **Trinity** et **SalemWorld**.

 ### Fonctionnalités
 - **Pages dynamiques** : Accueil, Ce que je suis, Ce que je veux, Ce que je fais, Mes projets, Contact, et une page dédiée à Trinity.
 - **Design responsive** : Utilisation de Bootstrap pour un style sobre, élégant, et adapté à tous les écrans.
 - **Affichage de PDF** : Documentation du projet Trinity et Jack the ripper intégrée via un visualiseur embarqué.
 - **Déploiement cloud** : Hébergé sur AWS S3 avec CloudFront pour une distribution rapide et sécurisée et synchronisé avec un nom de domaine acheté sur OVH (salemworld.cloud).
 - **CI/CD** : Pipeline GitHub Actions pour build, déploiement S3, et push d’image Docker.

 ### Technologies utilisées
 - **Frontend** : Vue.js 3, TypeScript, Vue Router, Bootstrap 5
 - **CI/CD** : GitHub Actions, Docker
 - **Cloud** : AWS S3, CloudFront
 - **Outils** : Vite, npm, ESLint

 ## Prérequis
 - Node.js (v20.x recommandé)
 - npm (v8.x ou supérieur)
 - Compte AWS avec accès S3/CloudFront
 - Docker (optionnel, pour tests locaux)

 ## Installation

 1. **Cloner le dépôt** :
    ```bash
    git clone https://github.com/hsalemh/SalemWorld.git
    cd SalemWorld
    ```

 2. **Installer les dépendances** :
    ```bash
    npm install
    ```

 3. **Lancer en local** :
    ```bash
    npm run dev
    ```
    - Ouvre `http://localhost:5173`.

 4. **Construire pour production** :
    ```bash
    npm run build
    ```

 5. **Tester avec Docker** :
    ```bash
    docker build -t salemworld:latest .
    docker run -d -p 4173:4173 salemworld:latest
    ```
    - Ouvre `http://localhost:4173`.

 ## Déploiement sur AWS

 1. **Configurer S3** :
    - Crée un bucket (ex. : `salemworld-portfolio`).
    - Active l’hébergement statique avec `index.html` comme document par défaut.
    - Applique une politique publique pour `s3:GetObject`.

 2. **Configurer CloudFront** :
    - Crée une distribution avec le bucket S3 comme origine.
    - Définis `index.html` comme objet racine par défaut.

 3. **Automatisation CI/CD** :
    - Ajoute les secrets GitHub : `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_REGION`, `AWS_S3_BUCKET`, `CLOUDFRONT_DISTRIBUTION_ID`.
    - Le pipeline (`deploy.yml`) synchronise `dist/` vers S3 et invalide le cache CloudFront.
    - Optimisation des coûts : Suppression d’un Web ACL WAF non nécessaire, réduisant la facture de 7,52 $/mois à ~0 $.

 ## Structure du projet
 ```
 SalemWorld/
    ├── .github/workflows/
    │   └── deploy.yml
    ├── README.md
    SalemWorld/
    ├── public/
    │   ├── index.html
    │   └── assets/
    │       └── trinity-documentation.pdf
    \---src
        |   App.vue
        |   main.ts
        |   shims-vue.d.ts
        |   style.css
        |   vite-env.d.ts
        |
        +---assets
        |       1.jpg
        |       10.jpg
        |       11.jpg
        |       12.jpg
        |       13.jpg
        |       14.jpg
        |       15.jpg
        |       16.jpg
        |       17.jpg
        |       18.jpg
        |       19.jpg
        |       2.jpg
        |       20.jpg
        |       21.jpg
        |       22.jpg
        |       23.jpg
        |       24.jpg
        |       25.jpg
        |       26.jpg
        |       27.jpg
        |       28.jpg
        |       29.jpg
        |       3.jpg
        |       30.jpg
        |       31.jpg
        |       32.jpg
        |       33.jpg
        |       34.jpg
        |       35.jpg
        |       36.jpg
        |       37.jpg
        |       38.jpg
        |       39.jpg
        |       4.jpg
        |       40.jpg
        |       41.jpg
        |       42.jpg
        |       43.jpg
        |       5.jpg
        |       6.jpg
        |       7.jpg
        |       8.jpg
        |       9.jpg
        |       DIT-1.jpg
        |       DIT-10.jpg
        |       DIT-11.jpg
        |       DIT-12.jpg
        |       DIT-2.jpg
        |       DIT-3.jpg
        |       DIT-4.jpg
        |       DIT-5.jpg
        |       DIT-6.jpg
        |       DIT-7.jpg
        |       DIT-8.jpg
        |       DIT-9.jpg
        |       DIT700.pdf
        |       lead1.jpg
        |       lead2.jpg
        |       salem.jpg
        |       trinity-devops-front-images-0.jpg
        |       trinity-devops-front-images-1.jpg
        |       trinity-devops-front-images-2.jpg
        |       trinity-devops-front-images-3.jpg
        |       Trinity-devops.pdf
        |       vue.svg
        |
        +---components
        |       HelloWorld.vue
        |
        +---router
        |       index.ts
        |
        \---views
                AboutMe.vue
                Contact.vue
                HomePage.vue
                JackRipper.vue
                MyGoals.vue
                MyProjects.vue
                MyWork.vue
                TrinityApp.vue
    ├── Dockerfile
    ├── package.json
    └── README.md
 ```

 ## Projets mis en avant
 - **Trinity** : Plateforme de gestion de tâches (Vue.js, Node.js).
 - **salemworld** : Portefolio (Vue.js, Vite).
 - **Jack The Ripper** : Projet de transformation digitale relatif à la ville du Kremlin. 

 ## Problèmes rencontrés
 - **404 sur S3** : Résolu en synchronisant `dist/` à la racine du bucket.
 - **PDF non affiché** : Après quelques problèmes rencontrés, je suis passé à des images l'une à la suite de l'autre en utilisant des balises
 - **Coût WAF** : Supprimé pour optimiser la facture à ~0 $.

 ## Contact
- Email : salem.hamiane@outlook.fr
- LinkedIn : Salem HAMIANE


 © 2025 - Salem Hamiane

