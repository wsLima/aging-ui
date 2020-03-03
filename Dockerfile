FROM nginx
COPY ${pwd}/aging-ui/dist/aging-ui/ /usr/share/nginx/html