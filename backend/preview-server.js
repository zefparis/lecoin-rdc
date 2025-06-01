const http = require('http');

// Utiliser la variable d'environnement PORT pour le déploiement
const PORT = process.env.PORT || 3002;

const server = http.createServer((req, res) => {
  // Servir la page des conditions générales
  if (req.url === '/terms-and-conditions') {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    res.end(`
      <!DOCTYPE html>
      <html lang="fr">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Conditions Générales d'Utilisation - LeCoin RDC</title>
        <style>
          :root {
            --background: #0f172a;
            --text-primary: #f8fafc;
            --text-secondary: #94a3b8;
            --accent-blue: #3b82f6;
            --border-color: #334155;
          }
          body {
            font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: var(--text-primary);
            background-color: var(--background);
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 1000px;
            margin: 0 auto;
            padding: 40px 20px;
          }
          header {
            margin-bottom: 40px;
            text-align: center;
          }
          h1 {
            font-size: 2.5rem;
            margin-bottom: 10px;
            color: var(--text-primary);
          }
          h2 {
            font-size: 1.8rem;
            margin-top: 40px;
            margin-bottom: 20px;
            color: var(--accent-blue);
            border-bottom: 1px solid var(--border-color);
            padding-bottom: 10px;
          }
          h3 {
            font-size: 1.4rem;
            margin-top: 30px;
            color: var(--text-primary);
          }
          p, ul, ol {
            margin-bottom: 20px;
            color: var(--text-secondary);
          }
          ul, ol {
            padding-left: 20px;
          }
          li {
            margin-bottom: 10px;
          }
          a {
            color: var(--accent-blue);
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
          .back-link {
            display: inline-block;
            margin-top: 40px;
            padding: 10px 20px;
            background-color: var(--accent-blue);
            color: white;
            border-radius: 4px;
            text-decoration: none;
          }
          .back-link:hover {
            background-color: #2563eb;
            text-decoration: none;
          }
          .last-updated {
            font-style: italic;
            margin-top: 60px;
            font-size: 0.9rem;
            color: var(--text-secondary);
          }
          footer {
            margin-top: 60px;
            text-align: center;
            color: var(--text-secondary);
            font-size: 0.9rem;
            padding: 30px 20px;
            border-top: 1px solid var(--border-color);
          }
        </style>
      </head>
      <body>
        <div class="container">
          <header>
            <h1>Conditions Générales d'Utilisation</h1>
            <p>LeCoin RDC - Plateforme de services intégrés pour la République Démocratique du Congo</p>
          </header>

          <section>
            <h2>1. Dispositions Générales</h2>
            <p>Les présentes Conditions Générales d'Utilisation (ci-après dénommées "CGU") régissent l'utilisation de la plateforme LeCoin RDC (ci-après dénommée "la Plateforme"), exploitée par Congo Gaming SARL, société de droit congolais, immatriculée au Registre du Commerce et du Crédit Mobilier sous le numéro CD/KIN/RCCM/16-B-09723, titulaire de l'autorisation ASVA-ARPTC n°0573/008/Mars/2023.</p>
            
            <p>En accédant à la Plateforme et en utilisant nos services, vous acceptez sans réserve d'être lié par les présentes CGU. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre Plateforme.</p>
            
            <h3>1.1 Définitions</h3>
            <ul>
              <li><strong>"Utilisateur"</strong> : toute personne qui accède à la Plateforme et/ou utilise les services proposés.</li>
              <li><strong>"Compte"</strong> : espace personnel créé par l'Utilisateur sur la Plateforme.</li>
              <li><strong>"Services"</strong> : ensemble des prestations proposées par LeCoin RDC via sa Plateforme, notamment Immo-Express, Pharma-Express, Wewa-Express, Pasteur-Express, Librairie-Express et Studio-Express.</li>
            </ul>
            
            <h3>1.2 Objet</h3>
            <p>Les présentes CGU ont pour objet de définir les conditions d'accès et d'utilisation des Services proposés sur la Plateforme, ainsi que de définir les droits et obligations des parties dans ce cadre.</p>
          </section>

          <section>
            <h2>2. Accès à la Plateforme</h2>
            <p>La Plateforme est accessible gratuitement à tout Utilisateur disposant d'un accès à Internet. Tous les coûts afférents à l'accès à la Plateforme, que ce soient les frais matériels, logiciels ou d'accès à Internet sont exclusivement à la charge de l'Utilisateur.</p>
            
            <p>L'accès à certains Services peut nécessiter la création préalable d'un Compte. L'Utilisateur s'engage à fournir des informations exactes lors de son inscription et à les mettre à jour régulièrement.</p>
            
            <h3>2.1 Création de compte</h3>
            <p>Pour créer un compte, l'Utilisateur doit :</p>
            <ul>
              <li>Remplir le formulaire d'inscription en fournissant des informations exactes et complètes</li>
              <li>Choisir un mot de passe confidentiel</li>
              <li>Accepter les présentes CGU</li>
            </ul>
            
            <p>Conformément à la loi n° 020/2020 du 28 septembre 2020 relative aux télécommunications et aux technologies de l'information et de la communication en République Démocratique du Congo, l'Utilisateur s'engage à ne pas usurper l'identité d'un tiers ni à utiliser une fausse identité.</p>
          </section>

          <section>
            <h2>3. Services Proposés</h2>
            <p>LeCoin RDC propose divers services intégrés destinés à faciliter la vie quotidienne des Congolais :</p>
            
            <h3>3.1 Immo-Express</h3>
            <p>Service de mise en relation pour la location et la vente de biens immobiliers en RDC.</p>
            
            <h3>3.2 Pharma-Express</h3>
            <p>Service de livraison de produits pharmaceutiques et de mise en relation avec des professionnels de santé.</p>
            
            <h3>3.3 Wewa-Express</h3>
            <p>Service de transport et de livraison à domicile.</p>
            
            <h3>3.4 Pasteur-Express</h3>
            <p>Service d'accompagnement spirituel et pastoral pour la communauté chrétienne congolaise.</p>
            
            <h3>3.5 Librairie-Express</h3>
            <p>Service de vente et de livraison de livres et de littérature spécialisée.</p>
            
            <h3>3.6 Studio-Express</h3>
            <p>Service d'enregistrement audio et de production musicale (en construction).</p>
            
            <p>Chaque service est soumis à des conditions spécifiques qui complètent les présentes CGU.</p>
          </section>

          <section>
            <h2>4. Obligations de l'Utilisateur</h2>
            <p>En utilisant la Plateforme, l'Utilisateur s'engage à :</p>
            <ul>
              <li>Respecter les lois et règlements en vigueur en République Démocratique du Congo</li>
              <li>Ne pas porter atteinte aux droits des tiers</li>
              <li>Ne pas utiliser la Plateforme à des fins illicites, frauduleuses ou préjudiciables</li>
              <li>Protéger la confidentialité de ses identifiants de connexion</li>
              <li>Informer immédiatement LeCoin RDC de toute utilisation non autorisée de son compte</li>
            </ul>
            
            <p>Conformément à la loi n° 18/017 du 24 juillet 2018 fixant les règles relatives à la télécommunication en RDC, l'Utilisateur s'engage à ne pas diffuser de contenus illégaux ou préjudiciables via la Plateforme.</p>
          </section>

          <section>
            <h2>5. Propriété Intellectuelle</h2>
            <p>Tous les éléments de la Plateforme, y compris mais sans s'y limiter, les textes, images, logos, marques, sons, logiciels, icônes, mise en page, base de données, sont protégés par les droits de propriété intellectuelle et sont la propriété exclusive de Congo Gaming SARL ou de ses partenaires.</p>
            
            <p>Conformément à la loi n° 82-001 du 7 janvier 1982 sur la propriété industrielle et à l'Ordonnance-Loi n° 86-033 du 5 avril 1986 portant protection des droits d'auteurs et droits voisins en RDC, toute reproduction, représentation, utilisation ou adaptation, sous quelque forme que ce soit, de tout ou partie des éléments de la Plateforme sans l'autorisation préalable écrite de Congo Gaming SARL est strictement interdite et constitue une contrefaçon passible de sanctions pénales.</p>
          </section>

          <section>
            <h2>6. Données Personnelles</h2>
            <p>LeCoin RDC collecte et traite les données personnelles des Utilisateurs dans le respect de la vie privée conformément à la loi n° 020/2020 du 28 septembre 2020 relative aux télécommunications et aux technologies de l'information et de la communication en RDC.</p>
            
            <p>Les informations recueillies font l'objet d'un traitement informatique destiné à :</p>
            <ul>
              <li>Gérer les comptes des Utilisateurs</li>
              <li>Fournir et améliorer les Services</li>
              <li>Personnaliser l'expérience utilisateur</li>
              <li>Communiquer avec les Utilisateurs</li>
            </ul>
            
            <p>L'Utilisateur dispose d'un droit d'accès, de rectification et de suppression de ses données personnelles. Pour exercer ces droits, l'Utilisateur peut contacter LeCoin RDC à l'adresse suivante : privacy@lecoin-rdc.com.</p>
          </section>

          <section>
            <h2>7. Responsabilité</h2>
            <p>LeCoin RDC s'efforce d'assurer au mieux de ses possibilités l'exactitude et la mise à jour des informations diffusées sur la Plateforme, dont elle se réserve le droit de corriger le contenu à tout moment.</p>
            
            <p>LeCoin RDC ne peut toutefois garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur la Plateforme. En conséquence, LeCoin RDC décline toute responsabilité :</p>
            <ul>
              <li>Pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur la Plateforme</li>
              <li>Pour tous dommages résultant d'une intrusion frauduleuse d'un tiers ayant entraîné une modification des informations mises à la disposition sur la Plateforme</li>
              <li>Pour tous dommages directs ou indirects, quelles qu'en soient les causes, origines, natures ou conséquences, provenant de l'impossibilité d'accéder à la Plateforme</li>
            </ul>
            
            <p>Conformément à l'article 258 du Code Civil Congolais Livre III, la responsabilité de LeCoin RDC ne saurait être engagée en cas de force majeure ou de faits indépendants de sa volonté.</p>
          </section>

          <section>
            <h2>8. Liens Hypertextes</h2>
            <p>La Plateforme peut contenir des liens hypertextes vers d'autres sites internet. LeCoin RDC n'exerce aucun contrôle sur ces sites et n'assume aucune responsabilité quant à leur contenu.</p>
          </section>

          <section>
            <h2>9. Modification des CGU</h2>
            <p>LeCoin RDC se réserve le droit de modifier les présentes CGU à tout moment. Les Utilisateurs seront informés de toute modification par la publication des CGU mises à jour sur la Plateforme. Les modifications entrent en vigueur dès leur publication.</p>
            
            <p>En continuant à utiliser la Plateforme après la publication des CGU modifiées, l'Utilisateur accepte ces modifications.</p>
          </section>

          <section>
            <h2>10. Droit Applicable et Juridiction Compétente</h2>
            <p>Les présentes CGU sont régies par le droit de la République Démocratique du Congo.</p>
            
            <p>En cas de litige relatif à l'interprétation ou à l'exécution des présentes CGU, les parties s'efforceront de trouver une solution amiable. À défaut d'accord amiable, le litige sera soumis aux tribunaux compétents de Kinshasa, conformément aux dispositions du Code de Procédure Civile Congolais.</p>
          </section>

          <section>
            <h2>11. Dispositions Diverses</h2>
            <p>Si une ou plusieurs stipulations des présentes CGU sont tenues pour non valides ou déclarées comme telles en application d'une loi, d'un règlement ou à la suite d'une décision définitive d'une juridiction compétente, les autres stipulations garderont toute leur force et leur portée.</p>
            
            <p>Le fait pour LeCoin RDC de ne pas se prévaloir à un moment donné d'une des dispositions des présentes CGU ne peut être interprété comme valant renonciation à s'en prévaloir ultérieurement.</p>
          </section>

          <p class="last-updated">Dernière mise à jour : 1 juin 2025</p>
          
          <a href="/" class="back-link">Retour à l'accueil</a>
        </div>

        <footer>
          <p>&copy; 2025 LeCoin RDC - Tous droits réservés</p>
          <p>Congo Gaming SARL - RCCM : CD/KIN/RCCM/16-B-09723 | ASVA-ARPTC n&deg;0573/008/Mars/2023</p>
        </footer>
      </body>
      </html>
    `);
    return;
  }
  
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
            --accent-teal: #14b8a6;
            --accent-pink: #ec4899;
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
            position: relative;
            overflow: hidden;
            text-align: center;
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
          section h2 {
            color: var(--text-primary);
            font-size: 1.8rem;
            margin-top: 40px;
            margin-bottom: 20px;
            border-bottom: 2px solid var(--accent-blue);
            padding-bottom: 10px;
            display: inline-block;
            text-align: center;
            width: 100%;
          }
          section p {
            text-align: center;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 30px;
          }
          .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-bottom: 40px;
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
          .pasteur-img { background-image: url('https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'); /* Image de croix chrétienne */ }
          .librairie-img { background-image: url('https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'); /* Image de livres ésothériques */ }
          .studio-img { background-image: url('https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'); /* Image de studio d'enregistrement */ }
          .construction-banner {
            position: absolute;
            top: 20px;
            right: -35px;
            background-color: #f59e0b;
            color: #000;
            padding: 5px 40px;
            font-weight: bold;
            transform: rotate(45deg);
            z-index: 10;
            font-size: 0.8rem;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
          }
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
          .librairie { color: var(--accent-teal); }
          .librairie::before { background-color: var(--accent-teal); }
          .studio { color: var(--accent-pink); }
          .studio::before { background-color: var(--accent-pink); }
          /* Les styles de l'endpoint ont été supprimés car la section API a été retirée */
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
            padding: 30px 20px;
            border-top: 1px solid #333;
            background-color: #0f172a;
          }
          .footer-content {
            max-width: 1200px;
            margin: 0 auto;
          }
          .company-info {
            margin-top: 20px;
            padding-top: 15px;
            border-top: 1px solid #333;
            font-size: 0.8rem;
            line-height: 1.6;
          }
          footer a {
            color: var(--accent-blue);
            text-decoration: none;
          }
          footer a:hover {
            text-decoration: underline;
          }
          
          /* Media queries pour la responsivité */
          @media (max-width: 768px) {
            body {
              padding: 15px;
            }
            
            h1 {
              font-size: 2.2rem;
            }
            
            .hero {
              padding: 40px 20px;
            }
            
            .hero h2 {
              font-size: 1.8rem;
            }
            
            .hero p {
              font-size: 1rem;
            }
            
            .service-card {
              padding: 20px;
            }
          }
          
          @media (max-width: 480px) {
            h1 {
              font-size: 1.8rem;
            }
            
            header {
              padding: 20px;
            }
            
            .hero h2 {
              font-size: 1.5rem;
            }
            
            .service-image {
              height: 120px;
            }
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
            
            <div class="services-grid">
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
                <p class="service-description">Accompagnement spirituel et pastoral pour la communauté chrétienne congolaise.</p>
                <div class="service-features">
                  <div class="service-feature">Conseils et accompagnement pastoral à distance</div>
                  <div class="service-feature">Prières personnalisées et soutien moral</div>
                  <div class="service-feature">Communauté chrétienne connectée et échanges en temps réel</div>
                </div>
                <div class="service-footer">
                  <a href="https://pasteur-express.replit.app/" target="_blank" class="button" style="background-color: #2563eb;">Visiter Pasteur-Express</a>
                </div>
              </div>

              <div class="service-card">
                <div class="service-image librairie-img"></div>
                <div class="service-header librairie">Librairie-Express</div>
                <p class="service-description">Livres ésotériques et littérature spécialisée pour tous les Congolais passionnés.</p>
                <div class="service-features">
                  <div class="service-feature">Large collection de livres ésotériques et spirituels</div>
                  <div class="service-feature">Livraison dans toutes les grandes villes de la RDC</div>
                  <div class="service-feature">Conseils personnalisés par des experts en littérature</div>
                </div>
                <div class="service-footer">
                  <a href="https://librairiearcanes.replit.app/" target="_blank" class="button" style="background-color: #14b8a6;">Visiter Librairie-Express</a>
                </div>
              </div>

              <div class="service-card">
                <div class="service-image studio-img"></div>
                <div class="construction-banner">En construction</div>
                <div class="service-header studio">Studio-Express</div>
                <p class="service-description">Services d'enregistrement audio et production musicale professionnelle.</p>
                <div class="service-features">
                  <div class="service-feature">Studios d'enregistrement de haute qualité</div>
                  <div class="service-feature">Production et mixage par des professionnels</div>
                  <div class="service-feature">Distribution musicale sur les plateformes digitales</div>
                </div>
                <div class="service-footer">
                  <a href="https://mundo-cultura.replit.app/" target="_blank" class="button" style="background-color: #ec4899;">Visiter Studio-Express</a>
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
          
          <!-- La section API a été retirée de la page d'accueil -->
        </main>
        
        <footer>
          <div class="footer-content">
            <p>&copy; 2025 LeCoin RDC - La plateforme de services essentiels pour tous les Congolais</p>
            <div class="company-info">
              <p>Beneficiary: Congo Gaming SARL</p>
              <p>RCCM : CD/KIN/RCCM/16-B-09723 | ASVA-ARPTC n&deg;0573/008/Mars/2023</p>
              <p>&copy; 2023 ImmoExpress. All rights reserved. <a href="/terms-and-conditions">Terms and Conditions</a></p>
            </div>
          </div>
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
        { name: 'Librairie-Express', status: 'disponible', endpoint: '/api/librairie-express' },
        { name: 'Studio-Express', status: 'en construction', endpoint: '/api/studio-express' },
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
        { id: 1, name: 'Conseils et accompagnement pastoral à distance', type: 'Spirituel', disponible: true },
        { id: 2, name: 'Prières personnalisées et soutien moral', type: 'Soutien', disponible: true },
        { id: 3, name: 'Communauté chrétienne connectée', type: 'Échange', disponible: true }
      ]
    }));
  } else if (req.url.startsWith('/api/librairie-express')) {
    res.statusCode = 200;
    res.end(JSON.stringify({
      service: 'Librairie-Express',
      books: [
        { id: 1, title: 'Les Arcanes Majeurs du Tarot', price: 25, category: 'Ésotérisme', available: true },
        { id: 2, title: 'Astrologie et Spiritualité', price: 30, category: 'Astrologie', available: true },
        { id: 3, title: 'Méditation et Pratiques Spirituelles', price: 22, category: 'Spiritualité', available: true }
      ]
    }));
  } else if (req.url.startsWith('/api/studio-express')) {
    res.statusCode = 200;
    res.end(JSON.stringify({
      service: 'Studio-Express',
      status: 'en construction',
      services: [
        { id: 1, name: 'Enregistrement vocal', price: 80, duration: '2h', available: false },
        { id: 2, name: 'Production musicale complète', price: 300, duration: 'variable', available: false },
        { id: 3, name: 'Mixage et mastering', price: 150, duration: '3-5 jours', available: false }
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
