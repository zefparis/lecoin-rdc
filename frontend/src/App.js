import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Helmet>
        <title>LeCoin RDC - Plateforme de services intégrés</title>
        <meta name="description" content="LeCoin RDC - Plateforme centralisée de services pour la République Démocratique du Congo" />
      </Helmet>
      
      <Header />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Autres routes seront ajoutées ici */}
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
