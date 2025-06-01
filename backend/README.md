# LeCoin RDC - Backend API

Ce dossier contient le backend de la plateforme LeCoin RDC, développé avec Node.js et Express.

## Configuration

Le backend utilise les variables d'environnement suivantes (définies dans le fichier `.env`) :

```
PORT=5000
NODE_ENV=development
JWT_SECRET=votre_secret_jwt
JWT_EXPIRES_IN=7d
STRIPE_SECRET_KEY=votre_cle_stripe
MAIL_HOST=smtp.example.com
MAIL_PORT=587
MAIL_USER=votre_email
MAIL_PASS=votre_mot_de_passe
FRONTEND_URL=http://localhost:3000
```

## Installation

```bash
# Installer les dépendances
npm install

# Démarrer le serveur en mode développement
npm run dev

# Démarrer le serveur en mode production
npm start
```

## API d'authentification

Le backend implémente une API d'authentification JWT sans dépendance à MongoDB. Les données utilisateurs sont stockées en mémoire pour simplifier le développement.

### Utilisateurs de test

- Admin: admin@lecoin-rdc.com / admin123
- User: user@lecoin-rdc.com / user123

### Endpoints d'authentification

#### POST /api/auth/login

Authentifie un utilisateur et génère un token JWT.

**Request Body:**

```json
{
  "email": "admin@lecoin-rdc.com",
  "password": "admin123"
}
```

**Réponse réussie (200 OK):**

```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "1",
    "email": "admin@lecoin-rdc.com",
    "name": "Admin User",
    "role": "admin"
  }
}
```

**Réponse d'erreur (401 Unauthorized):**

```json
{
  "success": false,
  "message": "Email ou mot de passe incorrect"
}
```

#### GET /api/auth/profile

Récupère le profil de l'utilisateur connecté (nécessite un token JWT).

**Headers:**

```
Authorization: Bearer votre_token_jwt
```

**Réponse réussie (200 OK):**

```json
{
  "success": true,
  "user": {
    "id": "1",
    "email": "admin@lecoin-rdc.com",
    "name": "Admin User",
    "role": "admin"
  }
}
```

## Test avec cURL

### Login

```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "admin@lecoin-rdc.com", "password": "admin123"}'
```

### Accéder au profil

```bash
curl -X GET http://localhost:5000/api/auth/profile \
  -H "Authorization: Bearer votre_token_jwt"
```

## Test avec Postman

1. Créez une nouvelle requête POST vers `http://localhost:5000/api/auth/login`
2. Dans l'onglet "Body", sélectionnez "raw" et "JSON"
3. Ajoutez le corps de la requête :
   ```json
   {
     "email": "admin@lecoin-rdc.com",
     "password": "admin123"
   }
   ```
4. Envoyez la requête et copiez le token JWT de la réponse
5. Créez une nouvelle requête GET vers `http://localhost:5000/api/auth/profile`
6. Dans l'onglet "Authorization", sélectionnez "Bearer Token" et collez votre token
7. Envoyez la requête pour voir les informations de votre profil

## Documentation API

La documentation Swagger de l'API est disponible à l'adresse `http://localhost:5000/api/docs`.
