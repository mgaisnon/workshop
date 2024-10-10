# Utiliser l'image Node.js pour builder le frontend
FROM node:latest AS build

# Définir le répertoire de travail
WORKDIR /usr/src/app

# Copier les fichiers de package et installer les dépendances
COPY package*.json ./
RUN npm install

# Copier le reste de l'application et builder le projet React
COPY . .
RUN npm run build

# Utiliser une image nginx pour servir le contenu buildé
FROM nginx:alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Exposer le port 80 pour servir le frontend
EXPOSE 80