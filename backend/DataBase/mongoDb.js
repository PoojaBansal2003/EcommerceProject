const mongoose = require("mongoose");
require("colors");


const connectionDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    // mongoose.set('strictQuery', false);
    
    console.log(
      `DataBase is Connected to Server ${process.env.PORT} and ${conn.connection.host}.`.underline.bgBlue
    );
  } catch (err) {
    console.error(`Error : ${err.message}`.underline.bgRed);
    // process.exit(1)
  }
};

module.exports = connectionDb;
