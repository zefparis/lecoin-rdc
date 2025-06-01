const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'change_me';

/**
 * Middleware pour protéger les routes en vérifiant le token JWT
 */
const protect = (req, res, next) => {
  let token;

  // Vérifier si le token est présent dans les headers
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Extraire le token du header (format: "Bearer TOKEN")
      token = req.headers.authorization.split(' ')[1];

      // Vérifier et décoder le token
      const decoded = jwt.verify(token, JWT_SECRET);

      // Ajouter les informations de l'utilisateur à la requête
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

/**
 * Middleware pour restreindre l'accès aux rôles spécifiques
 */
const authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ 
        success: false, 
        message: 'Non autorisé, veuillez vous connecter' 
      });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ 
        success: false, 
        message: `Rôle ${req.user.role} non autorisé à accéder à cette ressource` 
      });
    }

    next();
  };
};

module.exports = { protect, authorize };
