# user-module

A small Node.js Express service for user information with secure password hashing.

## Features
- Express app with API routing in `src/app.js`
- User registration via `POST /api/auth/register`
- Password hashing with `bcrypt` before saving users to MongoDB
- User data stored in MongoDB with Mongoose models

## Password hashing
This project secures user passwords by hashing them before saving to the database.

- `src/services/auth.service.js` uses `bcrypt`
- Passwords are hashed with `bcrypt.hash(password, 10)`
- Only the hashed password is stored in MongoDB
- The returned user object omits the password field

## Prerequisites
- Node.js 18+ (or compatible)
- npm (or an alternative package manager)
- MongoDB instance for storing user data

## Install

```bash
npm install
```

## Environment
Create a `.env` file in the project root and set at least:

- `PORT` — port the server should listen on (default 5000)
- `MONGO_URI` — MongoDB connection string

Example `.env`:

```
PORT=5001
MONGO_URI=mongodb://127.0.0.1:27017/userdb
```

## Scripts
- `npm run start` — run `node src/server.js`
- `npm run dev` — run `nodemon src/server.js`

## Running locally

Start the app:

```bash
npm run dev
```

Then use an API client or curl to register a user:

```bash
curl -X POST http://localhost:5001/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Jane Doe","email":"jane@example.com","age":30,"gender":"female","password":"StrongPass123"}'
```

## API endpoints
- `POST /api/auth/register` — register a new user

## Project layout

- `src/app.js` — creates and exports the Express `app`
- `src/server.js` — loads `.env` and starts the server
- `src/controllers/auth.controller.js` — request handler for auth routes
- `src/routes/auth.routes.js` — auth API route definitions
- `src/services/auth.service.js` — registration logic and password hashing
- `src/models/user.model.js` — Mongoose schema for the `User`

## Notes
- The app uses `bcrypt` for secure hashing, so raw passwords are never stored in the database.
- If `localhost:<PORT>` conflicts with another service on macOS, choose a different port.

## License
ISC
