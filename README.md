Ementora Chatbot Backend
This is the backend of the Ementora Chatbot, built with Node.js + Express.
It connects the frontend to Google Gemini 1.5 API and returns AI-powered responses to user messages.

🚀 Live Backend
🔗 https://chatbot-backend-jtq7.onrender.com/

Root / → Health check endpoint

POST /chat → Accepts user messages and returns AI responses

🖥️ Tech Stack
Node.js 20 – Runtime environment

Express 5 – Backend framework

Axios – For API requests to Google Gemini

CORS – To allow frontend access

dotenv – For environment variables

Render – Deployment platform for backend

⚙️ Features
✅ REST API endpoint /chat to handle messages

✅ Integrates with Google Gemini 1.5 Flash model

✅ Supports FAQ-based quick replies if faq.json exists

✅ Fully deployed and connected to frontend

🛠️ Local Development
Follow these steps to run the backend locally:

bash
Copy
Edit
# 1️⃣ Clone the repository
git clone <your-backend-repo-link>.git
cd backend

# 2️⃣ Install dependencies
npm install

# 3️⃣ Create a .env file with your Gemini API key
GEMINI_API_KEY=your_real_gemini_api_key_here

# 4️⃣ Start the server
npm start
The server will run locally at:

arduino
Copy
Edit
http://localhost:5000
✅ Test Chat Endpoint
Send a test message with cURL:

bash
Copy
Edit
curl -X POST http://localhost:5000/chat \
-H "Content-Type: application/json" \
-d '{"message":"Hello"}'
Expected response:

json
Copy
Edit
{ "reply": "Hello there! How can I help you today?" }
📡 Frontend Integration
The frontend is deployed at:

arduino
Copy
Edit
https://chatbot-frontend-seven-plum.vercel.app/
📄 License
This backend is created for learning and demonstration purposes.
