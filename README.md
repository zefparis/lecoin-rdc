# LeCoin RDC - Plateforme de Services Intégrés

LeCoin RDC est une plateforme web centralisée qui fédère plusieurs services express pour la République Démocratique du Congo:
- **Immo-Express**: Services immobiliers
- **Pharma-Express**: Services pharmaceutiques
- **Wewa-Express**: Services de transport
- **Pasteur-Express**: Services de santé

## Fonctionnalités Principales

- **Interface Centralisée**: Accès unifié à tous les services
- **Authentification SSO**: Connexion unique pour tous les services
- **API Gateway**: Gestion centralisée des API
- **Paiement Intégré**: Support pour Stripe, Unipesa, Mobile Money
- **Multilingue**: Français, Anglais, Lingala, Swahili
- **Notifications**: Système de notifications en temps réel
- **Dashboard**: Interface utilisateur et administrateur
- **Documentation API**: Documentation Swagger complète

## Architecture Technique

- **Frontend**: React + Tailwind CSS
- **Backend**: Express.js (Node.js)
- **Base de données**: MongoDB
- **Authentification**: JWT, OAuth 2.0
- **API**: RESTful API avec documentation Swagger
- **Internationalisation**: i18next
- **Déploiement**: Docker, Replit, VPS/Cloud

## Structure du Projet

```
lecoin-rdc/
├── frontend/               # Application React
│   ├── src/
│   │   ├── apps/           # Applications spécifiques
│   │   ├── core/           # Fonctionnalités principales
│   │   ├── components/     # Composants réutilisables
│   │   ├── layouts/        # Mises en page
│   │   ├── pages/          # Pages principales
│   │   ├── assets/         # Ressources statiques
│   │   ├── utils/          # Utilitaires
│   │   ├── hooks/          # Hooks personnalisés
│   │   ├── contexts/       # Contextes React
│   │   ├── i18n/           # Internationalisation
│   │   └── services/       # Services API
├── backend/                # API Express.js
│   ├── api/                # Routes API
│   ├── core/               # Fonctionnalités principales
│   ├── services/           # Services métier
│   ├── models/             # Modèles de données
│   ├── schemas/            # Schémas de validation
│   ├── utils/              # Utilitaires
│   ├── middlewares/        # Middlewares
│   └── config/             # Configuration
├── docs/                   # Documentation
├── deploy/                 # Configuration de déploiement
│   ├── docker/             # Configuration Docker
│   ├── replit/             # Configuration Replit
│   └── cloud/              # Instructions VPS/Cloud
```

## Installation et Démarrage

### Prérequis
- Node.js (v16+)
- npm ou yarn
- MongoDB

### Installation

1. Cloner le dépôt
```bash
git clone https://github.com/votre-organisation/lecoin-rdc.git
cd lecoin-rdc
```

2. Installer les dépendances du frontend
```bash
cd frontend
npm install
```

3. Installer les dépendances du backend
```bash
cd ../backend
npm install
```

4. Configurer les variables d'environnement
```bash
cp .env.example .env
# Modifier le fichier .env avec vos configurations
```

5. Démarrer l'application en développement
```bash
# Dans le dossier backend
npm run dev

# Dans un autre terminal, dans le dossier frontend
npm run dev
```

## Déploiement

### Docker
```bash
cd deploy/docker
docker-compose up -d
```

### Replit
Suivez les instructions dans le dossier `deploy/replit/README.md`

### VPS/Cloud
Suivez les instructions dans le dossier `deploy/cloud/README.md`

## Ajouter une Nouvelle Application

Pour ajouter une nouvelle application à la plateforme, suivez le guide dans `docs/new-app-template.md`.

## Licence

Ce projet est sous licence [MIT](LICENSE).

## Contact

Pour toute question ou suggestion, veuillez contacter l'équipe de développement à [contact@lecoin-rdc.com](mailto:contact@lecoin-rdc.com).
