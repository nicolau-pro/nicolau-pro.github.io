# Scripts

## Quick Start

- `npm i` - install the shared frontend/backend dependencies
- `npm run db:up` - start the local MySQL container
- `npm run db:restore` - load the saved database snapshot into MySQL
- `node src/backend/index.cjs` - start the backend API on port 3000
- `npm run dev` - start the frontend dev server

## Install

- install `npm i`

## Local backend database

- start local MySQL: `npm run db:up`
- restore the saved snapshot: `npm run db:restore`
- export the current database state: `npm run db:dump`
- local DB settings live in `src/backend-db/.env.example`
- snapshot files live in `src/backend-db/database/`
- set `DB_SSL=false` when using local MySQL
- the snapshot preserves IDs so foreign-key-style relationships stay stable
- when the database content changes, rerun `npm run db:dump` and commit the updated files in `src/backend-db/database/`
- copy `src/backend-db/.env.example` to your runtime `.env` or export the same variables in your shell
- start MySQL with `docker compose -f src/backend-db/docker-compose.yml up -d`
- restore the snapshot with `node src/backend-db/restore.cjs`

## Start backend

- backend: `node src/backend/index.cjs`
- backend API: `http://localhost:3000`
- Swagger docs: `http://localhost:3000/api-docs`

## Start frontend

- frontend: `npm run dev`
- frontend API calls go through `/api` in development
- set `VITE_API_BASE_URL` if you want the frontend to point at a different backend host

## Simple Vite build and preview

- build `npm run build`
- preview build `npm run preview`

## Full presite build and render static pages

### Build

- build with presite `npm run build-presite`

## Preview

- install `serve` (once) `npm install -g serve`
- preview presite `serve .presite
