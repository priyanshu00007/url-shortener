# URL Shortener Backend (Express + MongoDB + EJS)

A simple URL shortener built with Node.js, Express, MongoDB (Mongoose) and EJS.  
Supports creating short URLs and redirecting to the original links.

## Features

- Shorten any long URL into a short code  
- Redirect from `http://localhost:5000/:shortCode` to the original URL  
- EJS frontend with a simple white UI and form  
- MongoDB for persistent storage  
- Environment-based MongoDB URI using `.env`

## Tech Stack

- Node.js  
- Express  
- MongoDB + Mongoose  
- EJS  
- dotenv

## Getting Started

### 1. Clone and install

```bash
git clone <your-repo-url>
cd url-short
npm install
```

### 2. Environment variables

Create a `.env` file in the project root:

```env
MONGO_URI=mongodb://127.0.0.1:27017/url_shortener
```

Or use your MongoDB Atlas connection string.

### 3. Run MongoDB

Make sure MongoDB is running locally (or your Atlas cluster is online).

### 4. Start the server

```bash
node server.js
```

You should see:

- `MONGO_URI: ...`  
- `MongoDB connected`  
- `Server running on http://localhost:5000`

## Usage

1. Open `http://localhost:5000` in your browser.  
2. Enter a long URL in the form and submit.  
3. Copy or click the generated short URL.  
4. Opening the short URL will redirect to the original link.

## Project Structure

```text
url-short/
  server.js
  routes/
    urlRoutes.js
  models/        (if you extracted the model)
    Url.js
  views/
    index.ejs
  public/
    (static assets, if any)
  .env
  .gitignore
  package.json
  README.md
```

## Scripts

Common scripts (adjust if you add them):

```jsonc
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

Run:

```bash
npm run start     # or: npm run dev
```

## Future Improvements

- Add click count and analytics  
- Add user accounts and dashboard  
- Add custom short codes  
- Deploy to a hosting platform (Render, Railway, etc.)
