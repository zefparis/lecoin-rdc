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
        <title>LeCoin RDC - La Plateforme Congolaise de Services Essentiels</title>
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
            --accent-purple: #8b5cf6;
            --border-radius: 12px;
          }
          body {
            font-family: 'Inter', 'Segoe UI', Tahoma, sans-serif;
            line-height: 1.6;
            color: white;
            padding: 30px;
            border-radius: var(--border-radius);
            margin-bottom: 30px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
            position: relative;
            overflow: hidden;
          }
          header::after {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 150px;
            height: 100%;
            background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Flag_of_the_Democratic_Republic_of_the_Congo.svg/320px-Flag_of_the_Democratic_Republic_of_the_Congo.svg.png');
            background-size: cover;
            background-position: center;
            opacity: 0.15;
            border-top-right-radius: var(--border-radius);
            border-bottom-right-radius: var(--border-radius);
          }
          h1 {
            margin: 0;
            font-size: 2.8rem;
            font-weight: 800;
          }
          .hero {
            background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80');
            background-size: cover;
            background-position: center;
            padding: 60px 30px;
            border-radius: var(--border-radius);
            margin-bottom: 40px;
            text-align: center;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
          }
          .hero h2 {
            color: white;
            border-bottom: none;
            font-size: 2.2rem;
            margin-top: 0;
          }
          .hero p {
            color: #e0e0e0;
            font-size: 1.2rem;
            max-width: 800px;
            margin: 20px auto;
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
            position: relative;
            overflow: hidden;
          }
          .service-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 20px rgba(0, 0, 0, 0.3);
          }
          .service-image {
            height: 150px;
            margin: -25px -25px 20px -25px;
            background-size: cover;
            background-position: center;
            border-top-left-radius: var(--border-radius);
            border-top-right-radius: var(--border-radius);
          }
          .immo-img { background-image: url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'); }
          .pharma-img { background-image: url('https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'); }
          .wewa-img { background-image: url('https://images.unsplash.com/photo-1494412651409-8963ce7935a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'); }
          .pasteur-img { background-image: url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'); }
          .service-header {
            font-weight: bold;
            font-size: 1.4rem;
            margin-bottom: 15px;
            display: flex;
          }
          .service-description {
            color: var(--text-secondary);
            margin-bottom: 20px;
            font-size: 1rem;
          }
          .service-features {
            margin-bottom: 20px;
          }
          .service-feature {
            display: flex;
            align-items: center;
            margin-bottom: 8px;
            font-size: 0.9rem;
          }
          .service-feature::before {
            content: '✓';
            color: var(--accent-green);
            margin-right: 8px;
            font-weight: bold;
          }
          .immo { color: var(--accent-green); }
          .immo::before { background-color: var(--accent-green); }
          .pharma { color: var(--accent-red); }
          .pharma::before { background-color: var(--accent-red); }
          .wewa { color: var(--accent-orange); }
          .wewa::before { background-color: var(--accent-orange); }
          .pasteur { color: var(--accent-blue); }
          .pasteur::before { background-color: var(--accent-blue); }
          .endpoint {
            background-color: #2d2d2d;
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 10px;
            font-family: monospace;
            font-size: 0.9rem;
          }
          .button {
            display: inline-block;
            margin-top: 20px;
            padding: 12px 24px;
            background-color: var(--accent-blue);
            color: white;
            text-decoration: none;
            border-radius: 8px;
            font-weight: 600;
            transition: all 0.2s;
            border: 1px solid #444;
            text-align: center;
          }
          .button:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
          }
          .about-section {
            background-color: var(--bg-secondary);
            padding: 30px;
            border-radius: var(--border-radius);
            margin-top: 40px;
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
          }
          footer {
            margin-top: 60px;
            text-align: center;
            color: var(--text-secondary);
            font-size: 0.9rem;
            padding: 20px;
            border-top: 1px solid #333;
          }
        </style>
      </head>
      <body>
        <header>
          <h1>LeCoin RDC</h1>
          <p>La plateforme de services essentiels pour tous les Congolais</p>
        </header>
        
        <main>
          <div class="hero">
            <h2>Tous les services essentiels en un seul endroit</h2>
            <p>
              LeCoin RDC rassemble les services indispensables au quotidien des Congolais : logement, santé, transport et pharmacie.
              Notre mission est de simplifier la vie des citoyens de la République Démocratique du Congo en offrant un accès centralisé
              à des services de qualité, disponibles 24h/24 et 7j/7.  
            </p>
          </div>
          
          <section>
            <h2>Nos services pour améliorer le quotidien des Congolais</h2>
            <p>
              Découvrez notre écosystème de services conçus pour répondre aux besoins essentiels
              des habitants de la RDC. Chaque service est développé avec une connaissance approfondie
              des réalités locales et des défis spécifiques au contexte congolais.
            </p>
            
            <div class="services">
              <div class="service-card">
                <div class="service-image immo-img"></div>
                <div class="service-header immo">Immo-Express</div>
                <p class="service-description">Trouvez facilement votre logement idéal partout en RDC.</p>
                <div class="service-features">
                  <div class="service-feature">Annonces immobilières vérifiées</div>
                  <div class="service-feature">Terrains et propriétés dans toutes les provinces</div>
                  <div class="service-feature">Assistance personnalisée pour vos recherches</div>
                </div>
                <div class="service-footer">
                  <a href="https://immoexpress.eu/" target="_blank" class="button" style="background-color: #10b981;">Visiter Immo-Express</a>
                </div>
              </div>
              
              <div class="service-card">
                <div class="service-image pharma-img"></div>
                <div class="service-header pharma">Pharma-Express</div>
                <p class="service-description">Médicaments et produits pharmaceutiques livrés à domicile.</p>
                <div class="service-features">
                  <div class="service-feature">Médicaments authentiques et vérifiés</div>
                  <div class="service-feature">Livraison rapide dans les grandes villes</div>
                  <div class="service-feature">Conseils pharmaceutiques en ligne</div>
                </div>
                <div class="service-footer">
                  <a href="https://pharma-express.replit.app/" target="_blank" class="button" style="background-color: #dc2626;">Visiter Pharma-Express</a>
                </div>
              </div>
              
              <div class="service-card">
                <div class="service-image wewa-img"></div>
                <div class="service-header wewa">Wewa-Express</div>
                <p class="service-description">Transport et livraison rapide pour particuliers et entreprises.</p>
                <div class="service-features">
                  <div class="service-feature">Livraison sécurisée de colis</div>
                  <div class="service-feature">Transport de personnes à la demande</div>
                  <div class="service-feature">Solutions logistiques pour entreprises</div>
                </div>
                <div class="service-footer">
                  <a href="https://wewa-express.replit.app/" target="_blank" class="button" style="background-color: #f59e0b;">Visiter Wewa-Express</a>
                </div>
              </div>
              
              <div class="service-card">
                <div class="service-image pasteur-img"></div>
                <div class="service-header pasteur">Pasteur-Express</div>
                <p class="service-description">Services de santé accessibles pour tous les Congolais.</p>
                <div class="service-features">
                  <div class="service-feature">Consultations médicales à distance</div>
                  <div class="service-feature">Visites médicales à domicile</div>
                  <div class="service-feature">Suivi médical personnalisé</div>
                </div>
                <div class="service-footer">
                  <a href="https://pasteur-express.replit.app/" target="_blank" class="button" style="background-color: #2563eb;">Visiter Pasteur-Express</a>
                </div>
              </div>
            </div>
          </section>
          
          <section class="about-section">
            <h2>Notre mission pour la RDC</h2>
            <p>
              LeCoin RDC est né d'une vision simple : rendre accessibles les services essentiels à tous les Congolais,
              quel que soit leur lieu de résidence. Dans un pays où l'accès aux services de base peut être difficile,
              notre plateforme apporte des solutions concrètes et adaptées aux réalités locales.
            </p>
            <p>
              Nous travaillons avec des partenaires locaux dans chaque province pour garantir un service de qualité
              et contribuer au développement économique du pays. Chaque service que nous proposons est pensé pour
              répondre aux défis spécifiques rencontrés par les Congolais au quotidien.
            </p>
          </section>
          
          <section class="api-section">
            <h2>API pour développeurs</h2>
            <p>Intégrez nos services dans vos applications grâce à nos API:</p>
            
            <div class="endpoint">GET /api - Point d'entrée principal</div>
            <div class="endpoint">GET /api/immo-express - Service immobilier</div>
            <div class="endpoint">GET /api/pharma-express - Service pharmaceutique</div>
            <div class="endpoint">GET /api/wewa-express - Service de transport</div>
            <div class="endpoint">GET /api/pasteur-express - Service de santé</div>
            
            <a href="/api" class="button">Explorer les API</a>
          </section>
        </main>
        
        <footer>
          <p> 2025 LeCoin RDC - La plateforme de services essentiels pour tous les Congolais</p>
        </footer>
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
