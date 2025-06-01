require('dotenv').config();
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');

// Import du générateur de token
const generateToken = require('./utils/generateToken');

// Initialisation de l'application Express
const app = express();
const PORT = process.env.PORT || 3001; // Utiliser un port différent pour éviter les conflits

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Utilisateurs de test (en mémoire pour éviter la dépendance à MongoDB)
const users = [
  {
    id: '1',
    email: 'admin@lecoin-rdc.com',
    password: 'admin123',
    role: 'admin',
    name: 'Admin User'
  },
  {
    id: '2',
    email: 'user@lecoin-rdc.com',
    password: 'user123',
    role: 'user',
    name: 'Regular User'
  }
];

// Middleware pour protéger les routes
const protect = (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'change_me');
      req.user = decoded;
      next();
    } catch (error) {
      console.error('Erreur de vérification du token:', error);
      res.status(401).json({ 
        success: false, 
        message: 'Non autorisé, token invalide' 
      });
    }
  }

  if (!token) {
    res.status(401).json({ 
      success: false, 
      message: 'Non autorisé, aucun token fourni' 
    });
  }
};

// Route pour la racine du serveur
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>LeCoin RDC API</title>
      <style>
        body {
          font-family: 'Arial', sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }
        h1 {
          color: #2c3e50;
          border-bottom: 2px solid #3498db;
          padding-bottom: 10px;
        }
        h2 {
          color: #2980b9;
        }
        .card {
          background: #f9f9f9;
          border-left: 4px solid #3498db;
          margin: 20px 0;
          padding: 15px;
          border-radius: 0 4px 4px 0;
        }
        code {
          background: #f1f1f1;
          padding: 2px 5px;
          border-radius: 3px;
          font-family: monospace;
        }
        .endpoint {
          margin-top: 5px;
          font-weight: bold;
        }
        .btn {
          display: inline-block;
          background: #3498db;
          color: white;
          padding: 8px 15px;
          text-decoration: none;
          border-radius: 4px;
          margin-top: 10px;
        }
        .btn:hover {
          background: #2980b9;
        }
      </style>
    </head>
    <body>
      <h1>LeCoin RDC - API Backend</h1>
      <p>Bienvenue sur l'API backend de la plateforme LeCoin RDC. Cette API fournit des services pour les différentes applications de la plateforme.</p>
      
      <h2>Authentification</h2>
      <div class="card">
        <p>L'API utilise l'authentification JWT. Testez l'authentification avec les utilisateurs suivants :</p>
        <ul>
          <li><strong>Admin:</strong> admin@lecoin-rdc.com / admin123</li>
          <li><strong>User:</strong> user@lecoin-rdc.com / user123</li>
        </ul>
        <div class="endpoint">Endpoint: <code>POST /api/auth/login</code></div>
      </div>
      
      <h2>Services disponibles</h2>
      <div class="card">
        <p>Immo-Express - Services immobiliers</p>
        <div class="endpoint">Endpoint: <code>/api/immo-express</code></div>
      </div>
      
      <div class="card">
        <p>Pharma-Express - Services pharmaceutiques</p>
        <div class="endpoint">Endpoint: <code>/api/pharma-express</code></div>
      </div>
      
      <div class="card">
        <p>Wewa-Express - Services de transport</p>
        <div class="endpoint">Endpoint: <code>/api/wewa-express</code></div>
      </div>
      
      <div class="card">
        <p>Pasteur-Express - Services médicaux</p>
        <div class="endpoint">Endpoint: <code>/api/pasteur-express</code></div>
      </div>
    </body>
    </html>
  `);
});

// Route de base pour tester l'API
app.get('/api', (req, res) => {
  res.json({
    message: 'Bienvenue sur l\'API de LeCoin RDC',
    status: 'online',
    version: '1.0.0',
    services: [
      { name: 'Immo-Express', status: 'disponible', endpoint: '/api/immo-express' },
      { name: 'Pharma-Express', status: 'disponible', endpoint: '/api/pharma-express' },
      { name: 'Wewa-Express', status: 'disponible', endpoint: '/api/wewa-express' },
      { name: 'Pasteur-Express', status: 'disponible', endpoint: '/api/pasteur-express' },
    ]
  });
});

// Route d'authentification - Login
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ 
      success: false, 
      message: 'Veuillez fournir un email et un mot de passe' 
    });
  }

  // Rechercher l'utilisateur par email
  const user = users.find(u => u.email === email);

  // Vérifier si l'utilisateur existe et si le mot de passe est correct
  if (user && user.password === password) {
    // Créer le payload pour le token JWT
    const payload = {
      id: user.id,
      email: user.email,
      role: user.role
    };

    // Générer le token JWT
    const token = generateToken(payload);

    // Renvoyer la réponse avec le token et les informations de l'utilisateur
    return res.status(200).json({
      success: true,
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role
      }
    });
  }

  // Si l'authentification échoue
  return res.status(401).json({ 
    success: false, 
    message: 'Email ou mot de passe incorrect' 
  });
});

// Route pour obtenir le profil utilisateur
app.get('/api/auth/profile', protect, (req, res) => {
  const userId = req.user.id;
  const user = users.find(u => u.id === userId);

  if (!user) {
    return res.status(404).json({ 
      success: false, 
      message: 'Utilisateur non trouvé' 
    });
  }

  return res.status(200).json({
    success: true,
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role
    }
  });
});

// Gestion des erreurs 404
app.use((req, res) => {
  res.status(404).json({ message: 'Route non trouvée' });
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
  console.log(`Route d'authentification: http://localhost:${PORT}/api/auth/login`);
  console.log(`Utilisateurs de test:`);
  console.log(`  - Admin: admin@lecoin-rdc.com / admin123`);
  console.log(`  - User: user@lecoin-rdc.com / user123`);
});
