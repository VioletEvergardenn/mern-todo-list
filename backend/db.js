const mongoose = require("mongoose");

const connectDb = async function () {
  try {
    const { connection } = await mongoose.connect(
      `${process.env.MONGO_DB_URL}`
    );
    console.log(`MongoDB Connected ${connection.host}`);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectDb;
