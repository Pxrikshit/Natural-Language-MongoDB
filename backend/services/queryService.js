const mongoose = require("mongoose");
const axios = require("axios");

const employeeSchema = new mongoose.Schema({}, { strict: false });
const Employee = mongoose.model("employees", employeeSchema);

async function processQuery(userQuery) {

    const prompt = `
Convert the following English query into a MongoDB find query JSON only.

Collection: employees
Fields: name, age, department, salary

Return ONLY valid JSON object.
No explanation.

Query: "${userQuery}"
`;

    const response = await axios.post(
  "https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=" + process.env.GEMINI_API_KEY,
  {
    contents: [
      {
        parts: [
          {
            text: `
Convert the following English query into a MongoDB find query JSON only.

Collection: employees
Fields: name, age, department, salary

Return ONLY valid JSON object.
Return ONLY raw JSON.
Do NOT use markdown.
No explanation.

Query: "${userQuery}"
`
          }
        ]
      }
    ]
  }
);

    let text = response.data.candidates[0].content.parts[0].text;

console.log("Gemini Raw Response:", text);

// Remove markdown if present
text = text.replace(/```json/g, "")
           .replace(/```/g, "")
           .trim();

// Extract JSON safely
const jsonMatch = text.match(/\{[\s\S]*\}/);

if (!jsonMatch) {
    throw new Error("No valid JSON found in Gemini response");
}

const mongoQuery = JSON.parse(jsonMatch[0]);

    const data = await Employee.find(mongoQuery);
    console.log("MongoDB Data:", data);

    return data;
}

module.exports = { processQuery };