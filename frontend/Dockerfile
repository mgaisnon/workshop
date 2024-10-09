# Utiliser une image de base pour Node.js
FROM node:14-alpine

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier uniquement le contenu du dossier frontend
COPY ./frontend/package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers du frontend
COPY ./frontend ./

# Exposer le port du serveur
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["npm", "start"]
