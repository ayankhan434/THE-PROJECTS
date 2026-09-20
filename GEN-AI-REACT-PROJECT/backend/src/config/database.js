require("dotenv").config()


const mongoose = require("mongoose");

async function connectToDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to DB");
    } catch (error) {
        console.error("Database connection error:", error.message);
    }
}

module.exports = connectToDB;

module.exports = connectToDB