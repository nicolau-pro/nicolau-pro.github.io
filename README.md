# Scripts

## Install

- install `npm i`
- add `.env` file in root with database credentials

## Local backend database

- start local MySQL: `npm run db:up`
- restore the saved snapshot: `npm run db:restore`
- export the current database state: `npm run db:dump`
- local DB settings live in `src/backend-db/.env.example`
- set `DB_SSL=false` when using local MySQL

## Start backend

- backend: `node src/backend/index.cjs`
- backend API: `http://localhost:3000`
- Swagger docs: `http://localhost:3000/api-docs`

## Start frontend

- frontend: `npm run dev`
- frontend API calls proxy to the local backend in development
- set `VITE_API_BASE_URL` if you want the frontend to point at a different backend host

## Start backend and frontend

- frontend `npm run dev`

## Simple Vite build and preview

- build `npm run build`
- preview build `npm run preview`

## Full presite build and render static pages

### Build

- build with presite `npm run build-presite`

## Preview

- install `serve` (once) `npm install -g serve`
- preview presite `serve .presite
