# Utiliser l'image Node.js officielle
FROM node:latest

# Définir le répertoire de travail
WORKDIR /usr/src/app

# Copier les fichiers de package et installer les dépendances
COPY package*.json ./
RUN npm install

# Copier le reste de l'application
COPY . .

# Exposer le port utilisé par ton application (ex : 3000)
EXPOSE 3000

# Démarrer l'application
CMD ["node", "app.js"]