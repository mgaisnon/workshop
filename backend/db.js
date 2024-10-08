const mysql = require('mysql2');

// Créez une connexion ou un pool de connexions
const pool = mysql.createPool({
  host: 'localhost',         // Par exemple, 'localhost'
  user: 'root',              // Votre nom d'utilisateur MySQL
  password: 'root',          // Votre mot de passe MySQL
  database: 'workshop',      // Le nom de votre base de données
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Exportez le pool pour l'utiliser dans d'autres fichiers
module.exports = pool.promise();
