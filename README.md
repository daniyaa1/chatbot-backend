# Ementora Chatbot – Backend

Node.js + Express API that powers the Ementora AI chat. It receives messages from the frontend and responds using Google Gemini via the Generative Language API.

## 🧩 Overview

Endpoints:

- `GET /` — health check
- `POST /chat` — accepts `{ message: string }` and returns `{ reply: string }`

Features:

- CORS enabled
- Optional `faq.json` for quick answers to common questions
- Uses the `gemini-flash-latest` model alias for forward compatibility

## 🖥️ Tech Stack

- Node.js + Express
- Axios (HTTP client)
- dotenv (env management)
- CORS

## ⚙️ Environment Variables

Create a `.env` file (not committed):

```bash
GEMINI_API_KEY=your_gemini_api_key
PORT=5050
```

Do not commit secrets or deployment URLs to the repository. Configure environment variables in your hosting platform.

## 🛠️ Run Locally

```bash
# 1) Clone
git clone <your-backend-repo-url>
cd chatbot-backend

# 2) Install deps
npm install

# 3) Configure env
echo "GEMINI_API_KEY=your_gemini_api_key" > .env
echo "PORT=5050" >> .env

# 4) Start the server
node server.js
# Server runs at http://localhost:5050
```

Test endpoint:

```bash
curl -X POST http://localhost:5050/chat \
	-H "Content-Type: application/json" \
	-d '{"message":"Hello"}'
```

## 🌐 Deploy

You can deploy on platforms like Railway, Render, Fly.io, etc.

Typical steps:

1. Push the repo to GitHub.
2. Create a new service in your platform of choice.
3. Set environment variables (e.g., `GEMINI_API_KEY`, `PORT`).
4. Deploy.

## 🔒 Security Notes

- Never commit `.env` files.
- Avoid hardcoding any backend URL into public repos.
- Rate limits and model availability may change; using `gemini-flash-latest` helps stay compatible.

## 📄 License & Notes

For learning and demonstration purposes. Configure environment variables per environment; do not expose private URLs.
