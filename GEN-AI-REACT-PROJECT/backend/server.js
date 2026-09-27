require("dotenv").config({ path: "./.env" });

console.log("JWT_SECRET loaded:", !!process.env.JWT_SECRET);

const app = require("./src/app");
const connectToDB = require("./src/config/database");
//const invokeGeminiAi = require("./src/services/ai.service")

connectToDB();
//invokeGeminiAi();

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

