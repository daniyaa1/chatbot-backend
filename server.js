import express from "express";
import cors from "cors";
import fs from "fs";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;
const GEMINI_KEY = process.env.GEMINI_API_KEY;

console.log("Gemini Key Loaded:", GEMINI_KEY ? "✅ Yes" : "❌ No");

// Load FAQ if exists
let faq = [];
if (fs.existsSync("faq.json")) {
  faq = JSON.parse(fs.readFileSync("faq.json", "utf-8"));
}

// Test endpoint
app.get("/", (req, res) => {
  res.send("✅ Ementora Chatbot Backend (Gemini 1.5) is running.");
});

app.post("/chat", async (req, res) => {
  const { message } = req.body;
  const lower = message.toLowerCase();

  //  Check FAQ first
  const found = faq.find(f => lower.includes(f.question.toLowerCase().split("?")[0]));
  if (found) return res.json({ reply: found.answer });

  //  Call Gemini 1.5 free API
  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${GEMINI_KEY}`,
      {
        contents: [{ role: "user", parts: [{ text: message }] }],
        generationConfig: {
          maxOutputTokens: 40, 
          temperature: 0.7
        }
      },
      { headers: { "Content-Type": "application/json" } }
    );

    const reply =
      response.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Hmm, I need to think about that!";
    res.json({ reply });
  } catch (err) {
    console.error("Gemini Error:", err.response?.data || err.message);
    res.json({ reply: "Our AI is unavailable right now. Please try again later!" });
  }
});

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));


