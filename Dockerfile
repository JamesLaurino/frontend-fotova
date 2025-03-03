# Utiliser l'image officielle de Nginx
FROM nginx:latest

# Supprimer la configuration par défaut de Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copier les fichiers du frontend (HTML, CSS, JS)
COPY . /usr/share/nginx/html/

# Copier la configuration Nginx personnalisée
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exposer le port 80
EXPOSE 80