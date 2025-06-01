require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Import des routes
const authRoutes = require('./api/auth/authRoutes');

// Initialisation de l'application Express
const app = express();
const PORT = process.env.PORT || 5000;

// Configuration de Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'LeCoin RDC API',
      version: '1.0.0',
      description: 'API pour la plateforme LeCoin RDC',
      contact: {
        name: 'LeCoin RDC',
        email: 'contact@lecoin-rdc.com',
      },
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
        description: 'Serveur de développement',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    },
    security: [
      {
        bearerAuth: []
      }
    ]
  },
  apis: ['./api/**/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

// Middlewares
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes API
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes d'authentification
app.use('/api/auth', authRoutes);

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
      
      <h2>Documentation API</h2>
      <div class="card">
        <p>La documentation complète de l'API est disponible via Swagger UI :</p>
        <div class="endpoint"><a href="/api/docs" class="btn">Consulter la documentation</a></div>
      </div>
      
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

// Gestion des erreurs 404
app.use((req, res) => {
  res.status(404).json({ message: 'Route non trouvée' });
});

// Gestion des erreurs globales
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: 'Erreur serveur',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
  console.log(`Documentation API disponible sur http://localhost:${PORT}/api/docs`);
  console.log(`Route d'authentification: http://localhost:${PORT}/api/auth/login`);
  console.log(`Utilisateurs de test:`);
  console.log(`  - Admin: admin@lecoin-rdc.com / admin123`);
  console.log(`  - User: user@lecoin-rdc.com / user123`);
});
