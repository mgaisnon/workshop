const express = require("express");
const db = require('./db');
const cors = require('cors'); 
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const port = 8000; 

app.use(express.json());

const JWT_SECRET = 'WORKSHOP'; 

const corsOptions = {
  origin: ['http://localhost:3000', 'http://localhost:80', 'http://localhost'], // Autoriser localhost:3000 et localhost:80
  methods: ['GET', 'POST'], // Méthodes autorisées
  allowedHeaders: ['Content-Type', 'Authorization'], // En-têtes autorisés
};


app.use(cors(corsOptions));

app.get('/hopitaux', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM Hopital'); // Correction ici, utilisez query
    res.json(rows);
  } catch (error) {
    console.error('Erreur lors de la récupération des hôpitaux:', error);
    res.status(500).json({ message: 'Erreur interne du serveur' });
  }
});

// Route pour l'inscription
app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  // Vérifiez si le nom d'utilisateur et le mot de passe sont fournis
  if (!username || !password) {
      return res.status(400).json({ message: 'Nom d\'utilisateur et mot de passe requis.' });
  }

  try {
      // Vérifiez si l'utilisateur existe déjà
      const [existingUsers] = await db.query('SELECT * FROM Login WHERE username = ?', [username]);
      
      // Si existingUsers est un tableau et a une longueur supérieure à 0, cela signifie que l'utilisateur existe déjà
      if (existingUsers.length > 0) {
          return res.status(400).json({ message: 'Le nom d\'utilisateur est déjà pris.' });
      }

      // Hacher le mot de passe
      const hashedPassword = await bcrypt.hash(password, 10);

      // Insérer l'utilisateur dans la base de données
      const result = await db.query('INSERT INTO Login (username, password) VALUES (?, ?)', [username, hashedPassword]);

      res.status(201).json({ message: 'Utilisateur créé avec succès!' });
  } catch (error) {
      console.error('Erreur lors de la création de l\'utilisateur:', error);
      res.status(500).json({ message: 'Erreur interne du serveur' });
  }
});


app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Vérifiez si le nom d'utilisateur et le mot de passe sont fournis
  if (!username || !password) {
      return res.status(400).json({ message: 'Nom d\'utilisateur et mot de passe requis.' });
  }

  try {
      // Rechercher l'utilisateur dans la base de données
      const [users] = await db.query('SELECT * FROM Login WHERE username = ?', [username]);

      // Vérifiez si l'utilisateur existe
      if (users.length === 0) {
          return res.status(401).json({ message: 'Nom d\'utilisateur ou mot de passe incorrect.' });
      }

      const user = users[0]; // Récupérer le premier utilisateur

      // Vérifiez que le mot de passe haché est disponible
      if (!user.password) {
          return res.status(500).json({ message: 'Mot de passe non trouvé dans la base de données.' });
      }

      // Vérifiez si le mot de passe correspond
      const match = await bcrypt.compare(password, user.password);
      if (match) {
          // Créer un token JWT
          const token = jwt.sign({ id: user.login_id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });
          return res.json({ token });
      } else {
          return res.status(401).json({ message: 'Nom d\'utilisateur ou mot de passe incorrect.' });
      }
  } catch (error) {
      console.error('Erreur lors de la connexion:', error);
      res.status(500).json({ message: 'Erreur interne du serveur' });
  }
});


app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
