FROM nginx:latest
WORKDIR /usr/share/nginx/html
ADD index.html style.css script.js ./
