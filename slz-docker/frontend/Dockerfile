FROM node:16-alpine as build
WORKDIR /app
COPY ./frontend .
RUN npm install
RUN npm run build

FROM python:3.11-slim as djangostatic
WORKDIR /app
COPY ./requirements.txt requirements.txt
RUN pip install -r requirements.txt
COPY ./backend/ .
RUN python manage.py collectstatic --no-input

FROM nginx:stable-alpine
COPY --from=build /app/dist var/www/html/my-react-app/dist
COPY --from=djangostatic /app/staticfiles /home/app/django-app/staticfiles/
COPY slz-docker/frontend/react.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]