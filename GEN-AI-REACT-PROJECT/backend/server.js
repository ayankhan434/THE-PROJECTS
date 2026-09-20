require("dotenv").config({ path: "./.env" });

console.log("JWT_SECRET loaded:", !!process.env.JWT_SECRET);

const app = require("./src/app");
const connectToDB = require("./src/config/database");

connectToDB();

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

