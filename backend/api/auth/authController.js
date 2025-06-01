const generateToken = require('../../utils/generateToken');

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

/**
 * @desc    Authentifier un utilisateur et générer un token JWT
 * @route   POST /api/auth/login
 * @access  Public
 */
const login = (req, res) => {
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
};

/**
 * @desc    Obtenir le profil de l'utilisateur actuel
 * @route   GET /api/auth/profile
 * @access  Private
 */
const getProfile = (req, res) => {
  // Dans une implémentation réelle, l'utilisateur serait extrait du token JWT
  // Pour cet exemple, nous simulons un utilisateur connecté
  const userId = req.user?.id || '1';
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
};

module.exports = {
  login,
  getProfile
};
