require("dotenv").config();
const mongoose = require("mongoose");

async function connection() {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("Database connection");
  } catch (error) {
    console.log(error);
  }
}

module.exports = connection;
