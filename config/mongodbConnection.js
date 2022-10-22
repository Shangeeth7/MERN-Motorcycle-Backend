const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });

const connection = mongoose.connection;
connection.on("connected", () => {
  console.log("Mongo DB connection successfull");
});

connection.on("error", (error) => {
  console.log(error);
});
