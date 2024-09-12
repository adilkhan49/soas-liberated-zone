## set up backend env

```
cd backend
python3 -m venv .venv
. .venv/bin/activate
pip install -r requirements.txt
```
## set up db

brew install mariadb
brew services start mariadb
mysql
> CREATE DATABASE slz;
> CREATE USER dev@localhost IDENTIFIED BY 'pwd123'; 
> GRANT ALL PRIVILEGES ON slz.* TO dev@localhost;
> FLUSH PRIVILEGES;

## Migrate model

cd backend
python manage.py makemigrations
python manage.py migrate

## Run backend server

```python manage.py runserver
```

## Run frontend server


npm create vite@latest frontend -- --template react
cd frontend
npm install tailwindcss postcss autoprefixer react-router-dom 
npx tailwindcss init -p

in tailwind.config.js add `"./index.html","./src/**/*.{js,ts,jsx,tsx}",` to the content section in tailwind.config.js

add the following to index.css
@tailwind base;
@tailwind components;
@tailwind utilities;


https://reactrouter.com/en/main/start/tutorial

https://medium.com/@ronakchitlangya1997/jwt-authentication-with-react-js-and-django-c034aae1e60d

https://arindam1729.hashnode.dev/setup-vite-reactjs-with-tailwind-css

https://github.com/seankwarren/Django-React-jwt-authentication?tab=readme-ov-file