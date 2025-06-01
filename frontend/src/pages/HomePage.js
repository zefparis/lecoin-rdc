import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const services = [
    {
      id: 'immo',
      name: 'Immo-Express',
      description: 'Services immobiliers rapides et fiables pour l\'achat, la vente et la location de biens immobiliers en RDC.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-immo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      link: '/immo-express',
      color: 'bg-immo-500',
      hoverColor: 'hover:bg-immo-700',
    },
    {
      id: 'pharma',
      name: 'Pharma-Express',
      description: 'Livraison de médicaments et produits pharmaceutiques à domicile dans toute la RDC.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-pharma-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      link: '/pharma-express',
      color: 'bg-pharma-500',
      hoverColor: 'hover:bg-pharma-700',
    },
    {
      id: 'wewa',
      name: 'Wewa-Express',
      description: 'Service de transport et de livraison rapide pour particuliers et entreprises en RDC.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-wewa-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      link: '/wewa-express',
      color: 'bg-wewa-500',
      hoverColor: 'hover:bg-wewa-700',
    },
    {
      id: 'pasteur',
      name: 'Pasteur-Express',
      description: 'Services de santé à domicile et téléconsultation avec des professionnels de santé qualifiés.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-pasteur-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      link: '/pasteur-express',
      color: 'bg-pasteur-500',
      hoverColor: 'hover:bg-pasteur-700',
    },
  ];

  const features = [
    {
      name: 'Authentification SSO',
      description: 'Connectez-vous une seule fois pour accéder à tous nos services.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      ),
    },
    {
      name: 'Paiement Intégré',
      description: 'Payez facilement via Stripe, Unipesa ou Mobile Money.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
    },
    {
      name: 'Multilingue',
      description: 'Disponible en Français, Anglais, Lingala et Swahili.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      ),
    },
    {
      name: 'Notifications',
      description: 'Recevez des alertes en temps réel sur vos commandes et services.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">LeCoin RDC</span>
              <span className="block text-primary-200 mt-2">Tous vos services en un seul endroit</span>
            </h1>
            <p className="mt-6 max-w-lg mx-auto text-xl text-primary-100 sm:max-w-3xl">
              Découvrez notre plateforme centralisée offrant des services immobiliers, pharmaceutiques, de transport et de santé pour toute la République Démocratique du Congo.
            </p>
            <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                <Link to="/auth/register" className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-primary-700 bg-white hover:bg-primary-50 sm:px-8">
                  Commencer
                </Link>
                <Link to="/about" className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8">
                  En savoir plus
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Nos Services
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Découvrez notre gamme complète de services conçus pour faciliter votre quotidien.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div key={service.id} className="flex flex-col bg-white rounded-lg shadow-card overflow-hidden">
                <div className={`p-6 ${service.color} flex items-center justify-center`}>
                  {service.icon}
                </div>
                <div className="p-6 flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                  <p className="mt-3 text-base text-gray-500">{service.description}</p>
                </div>
                <div className="p-6 pt-0">
                  <Link
                    to={service.link}
                    className={`w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white ${service.color} ${service.hoverColor} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500`}
                  >
                    Explorer
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Fonctionnalités
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Une plateforme complète avec tout ce dont vous avez besoin.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-card p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                  </div>
                </div>
                <p className="mt-4 text-base text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Prêt à commencer?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-primary-100">
              Rejoignez des milliers d'utilisateurs satisfaits à travers la RDC.
            </p>
            <div className="mt-8">
              <Link
                to="/auth/register"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-white hover:bg-primary-50"
              >
                Créer un compte gratuitement
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
