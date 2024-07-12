![Logo](https://github.com/kecheste/t-movies/blob/main/public/logo.png)

# T-Movies

T-Movies is a movie streaming site for streaming movies and TV shows.
[Preview](https://t-movies-jet.vercel.app)

## Getting started

## Installation

This is the frontend of the project. After clonning this repository to your local computer install it using npm

Follow the following instructions:

```bash
  mkdir t-movies-app
  cd t-movies-app
  git clone https://github.com/kecheste/t-movies
  git clone https://github.com/kecheste/t-movies-backend
  cd t-movies
  npm install
  cd ../
  cd t-movies-backend
  npm install
```

Following these steps will setup the project in your local computer for development.

```bash
  npm start
  *
  yarn start
```

To run the backend

```bash
  nodemon start
```

Open http://localhost:3000 with your browser to see the frontend.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

There will be two .env files, one inside t-movies(frontend) and the other inside t-movies-backend folders

t-movies(frontend)

`REACT_APP_BACKEND_URL`=`http://localhost:3002`

t-movies-backend

`ADMIN_USER`=`enter_username`

`ADMIN_PASSWORD`=`enter_password`

`JWT_SECRET`=`very-secure-code`

`DATABASE_URL`=`your postgres database uri`

`GOOGLE_CLIENT_ID`=`google client id from google cloud console`

`GOOGLE_CLIENT_SECRET`=`google client secret from google cloud console`

`CALLBACK_URL`=`callback url from google cloud console`

`FRONT_URL`=`http://localhost:3000`

`POSTGRES_URL`=`from vercel postgres database`

`POSTGRES_PRISMA_URL`=`from vercel postgres database`

`POSTGRES_URL_NO_SSL`=`from vercel postgres database`

`POSTGRES_URL_NON_POOLING`=`from vercel postgres database`

`POSTGRES_USER`=`from vercel postgres database`

`POSTGRES_HOST`=`from vercel postgres database`

`POSTGRES_PASSWORD`=`from vercel postgres database`

`POSTGRES_DATABASE`=`from vercel postgres database`
