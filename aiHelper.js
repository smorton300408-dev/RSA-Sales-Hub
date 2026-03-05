// aiHelper.js
const fetch = require("node-fetch");
require('dotenv').config();

async function getAIResponse(prompt) {
    const apiKey = process.env.OPENAI_API_KEY; // Add your key to .env
    if (!apiKey) throw new Error("API key not set!");

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: "gpt-4",
            messages: [{ role: "user", content: prompt }],
            temperature: 0.7
        })
    });

    const data = await response.json();
    return data.choices[0].message.content.trim();
}

module.exports = { getAIResponse };
