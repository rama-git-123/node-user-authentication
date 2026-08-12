# user-module

A small Node.js Express service for user information.

## Features
- Basic Express app exported from `src/app.js`
- Server entrypoint `src/server.js` that loads environment variables and starts the app

## Prerequisites
- Node.js 18+ (or compatible)
- npm (or an alternative package manager)

## Install

```bash
npm install
```

## Environment
Create a `.env` file in the project root (see `.env` in repository for example values) and set at least:

- `PORT` — port the server should listen on (default 5000)
- `MONGO_URI` — MongoDB connection string if database features are used

Example `.env`:

```
PORT=5001
MONGO_URI=mongodb://127.0.0.1:27017/userdb
```

Note: macOS sometimes reserves port `5000` for system services; consider using a different port if you see unexpected responses.

## Scripts
- `npm run start` — run `node src/server.js`
- `npm run dev` — run `nodemon src/server.js` (development)

## Running locally

Start the app:

```bash
npm run dev
```

Open the app in your browser at `http://localhost:<PORT>` (default from `.env` or `5000`).

## Project layout

- `src/app.js` — creates and exports the Express `app`
- `src/server.js` — loads `.env` and starts the HTTP server

## Notes
- If `localhost:<PORT>` returns `403 Forbidden` but your app is running, check whether another local service is listening on that port (macOS may reserve some ports). Use a different `PORT` or stop the conflicting service.

## License
ISC
