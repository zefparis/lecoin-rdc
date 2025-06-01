const http = require('http');

// Utiliser la variable d'environnement PORT pour le déploiement
const PORT = process.env.PORT || 3002;

const server = http.createServer((req, res) => {
  // Servir une page HTML à la racine
  if (req.url === '/' || req.url === '') {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    res.end(`
      <!DOCTYPE html>
      <html lang="fr">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>LeCoin RDC - Prévisualisation</title>
        <style>
          :root {
            --bg-primary: #121212;
            --bg-secondary: #1e1e1e;
            --bg-card: #252525;
            --text-primary: #e0e0e0;
            --text-secondary: #a0a0a0;
            --accent-blue: #3b82f6;
            --accent-green: #10b981;
            --accent-red: #ef4444;
            --accent-orange: #f59e0b;
            --border-radius: 12px;
          }
          body {
            font-family: 'Inter', 'Segoe UI', Tahoma, sans-serif;
            line-height: 1.6;
            color: var(--text-primary);
            background-color: var(--bg-primary);
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
          }
          header {
            background: linear-gradient(135deg, #1a1a1a, #2a2a2a);
            border-left: 4px solid var(--accent-blue);
            color: white;
            padding: 30px;
            border-radius: var(--border-radius);
            margin-bottom: 30px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          }
          h1 {
            margin: 0;
            font-size: 2.8rem;
            font-weight: 800;
            background: linear-gradient(to right, #3b82f6, #10b981);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          h2 {
            color: var(--text-primary);
            border-bottom: 2px solid #333;
            padding-bottom: 15px;
            margin-top: 40px;
            font-weight: 700;
            font-size: 1.8rem;
          }
          .services {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 25px;
            margin-top: 30px;
          }
          .service-card {
            background-color: var(--bg-card);
            border: 1px solid #333;
            border-radius: var(--border-radius);
            padding: 25px;
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
            transition: transform 0.2s, box-shadow 0.2s;
          }
          .service-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 20px rgba(0, 0, 0, 0.3);
          }
          .service-header {
            font-weight: bold;
            font-size: 1.4rem;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            gap: 10px;
          }
          .service-header::before {
            content: '';
            display: inline-block;
            width: 12px;
            height: 12px;
            border-radius: 50%;
          }
          .immo { color: var(--accent-green); }
          .immo::before { background-color: var(--accent-green); }
          .pharma { color: var(--accent-red); }
          .pharma::before { background-color: var(--accent-red); }
          .wewa { color: var(--accent-orange); }
          .wewa::before { background-color: var(--accent-orange); }
          .pasteur { color: var(--accent-blue); }
          .pasteur::before { background-color: var(--accent-blue); }
          .api-section {
            background-color: var(--bg-secondary);
            padding: 30px;
            border-radius: var(--border-radius);
            margin-top: 40px;
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
          }
          .endpoint {
            background-color: #2d2d2d;
            padding: 15px;
            border-radius: 8px;
            font-family: 'Fira Code', monospace;
            margin: 15px 0;
            border-left: 3px solid #444;
          }
          .button {
            display: inline-block;
            background-color: #2d2d2d;
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            text-decoration: none;
            margin-top: 15px;
            font-weight: 600;
            transition: all 0.2s;
            border: 1px solid #444;
          }
          .button:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
          }
        </style>
      </head>
      <body>
        <header>
          <h1>LeCoin RDC</h1>
          <p>Plateforme de services intégrés pour la République Démocratique du Congo</p>
        </header>
        
        <main>
          <section>
            <h2>Bienvenue sur la prévisualisation de LeCoin RDC</h2>
            <p>
              Cette plateforme fédère plusieurs services express pour faciliter la vie quotidienne 
              des habitants de la RDC. Voici un aperçu des services disponibles:
            </p>
            
            <div class="services">
              <div class="service-card">
                <div class="service-header immo">Immo-Express</div>
                <p>Services immobiliers rapides et fiables pour l'achat, la vente et la location de biens immobiliers en RDC.</p>
                <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                  <a href="/api/immo-express" class="button" style="background-color: #10b981;">Explorer l'API</a>
                  <a href="https://immoexpress.eu/" target="_blank" class="button" style="background-color: #059669;">Visiter le site</a>
                </div>
              </div>
              
              <div class="service-card">
                <div class="service-header pharma">Pharma-Express</div>
                <p>Livraison de médicaments et produits pharmaceutiques à domicile dans toute la RDC.</p>
                <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                  <a href="/api/pharma-express" class="button" style="background-color: #ef4444;">Explorer l'API</a>
                  <a href="https://pharma-express.replit.app/" target="_blank" class="button" style="background-color: #dc2626;">Visiter le site</a>
                </div>
              </div>
              
              <div class="service-card">
                <div class="service-header wewa">Wewa-Express</div>
                <p>Services de transport et livraison rapide pour particuliers et entreprises.</p>
                <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                  <a href="/api/wewa-express" class="button" style="background-color: #f59e0b;">Explorer l'API</a>
                  <a href="https://wewa-express.replit.app/" target="_blank" class="button" style="background-color: #d97706;">Visiter le site</a>
                </div>
              </div>
              
              <div class="service-card">
                <div class="service-header pasteur">Pasteur-Express</div>
                <p>Services de santé à domicile et téléconsultation avec des professionnels de santé qualifiés.</p>
                <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                  <a href="/api/pasteur-express" class="button" style="background-color: #3b82f6;">Explorer l'API</a>
                  <a href="https://pasteur-express.replit.app/" target="_blank" class="button" style="background-color: #2563eb;">Visiter le site</a>
                </div>
              </div>
            </div>
          </section>
          
          <section class="api-section">
            <h2>API Documentation</h2>
            <p>Vous pouvez explorer les différentes API de la plateforme:</p>
            
            <div class="endpoint">GET /api - Point d'entrée principal de l'API</div>
            <div class="endpoint">GET /api/immo-express - API du service immobilier</div>
            <div class="endpoint">GET /api/pharma-express - API du service pharmaceutique</div>
            <div class="endpoint">GET /api/wewa-express - API du service de transport</div>
            <div class="endpoint">GET /api/pasteur-express - API du service de santé</div>
            
            <a href="/api" class="button">Voir toutes les API</a>
          </section>
        </main>
      </body>
      </html>
    `);
    return;
  }
  
  // Pour les routes API, on continue à renvoyer du JSON
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    res.statusCode = 200;
    res.end();
    return;
  }

  if (req.url === '/api') {
    res.statusCode = 200;
    res.end(JSON.stringify({
      message: 'Bienvenue sur l\'API de LeCoin RDC',
      status: 'online',
      version: '1.0.0',
      services: [
        { name: 'Immo-Express', status: 'disponible', endpoint: '/api/immo-express' },
        { name: 'Pharma-Express', status: 'disponible', endpoint: '/api/pharma-express' },
        { name: 'Wewa-Express', status: 'disponible', endpoint: '/api/wewa-express' },
        { name: 'Pasteur-Express', status: 'disponible', endpoint: '/api/pasteur-express' },
      ]
    }));
  } else if (req.url.startsWith('/api/immo-express')) {
    res.statusCode = 200;
    res.end(JSON.stringify({
      service: 'Immo-Express',
      properties: [
        { id: 1, title: 'Appartement à Kinshasa', price: 150000, type: 'Appartement', location: 'Kinshasa' },
        { id: 2, title: 'Villa à Lubumbashi', price: 250000, type: 'Villa', location: 'Lubumbashi' },
        { id: 3, title: 'Terrain à Goma', price: 50000, type: 'Terrain', location: 'Goma' }
      ]
    }));
  } else if (req.url.startsWith('/api/pharma-express')) {
    res.statusCode = 200;
    res.end(JSON.stringify({
      service: 'Pharma-Express',
      products: [
        { id: 1, name: 'Paracétamol', price: 5, category: 'Analgésique', available: true },
        { id: 2, name: 'Amoxicilline', price: 12, category: 'Antibiotique', available: true },
        { id: 3, name: 'Ibuprofène', price: 8, category: 'Anti-inflammatoire', available: true }
      ]
    }));
  } else if (req.url.startsWith('/api/wewa-express')) {
    res.statusCode = 200;
    res.end(JSON.stringify({
      service: 'Wewa-Express',
      services: [
        { id: 1, name: 'Livraison standard', price: 10, duration: '24-48h' },
        { id: 2, name: 'Livraison express', price: 20, duration: '12-24h' },
        { id: 3, name: 'Livraison urgente', price: 30, duration: '2-6h' }
      ]
    }));
  } else if (req.url.startsWith('/api/pasteur-express')) {
    res.statusCode = 200;
    res.end(JSON.stringify({
      service: 'Pasteur-Express',
      services: [
        { id: 1, name: 'Consultation à domicile', price: 50, duration: '60 min' },
        { id: 2, name: 'Téléconsultation', price: 30, duration: '30 min' },
        { id: 3, name: 'Soins infirmiers', price: 40, duration: '45 min' }
      ]
    }));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ message: 'Route non trouvée' }));
  }
});

server.listen(PORT, () => {
  console.log(`Serveur de prévisualisation démarré sur le port ${PORT}`);
  console.log(`API accessible à l'adresse http://localhost:${PORT}/api`);
  console.log(`Page d'accueil accessible à l'adresse http://localhost:${PORT}/`);
});
