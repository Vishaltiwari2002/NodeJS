require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require('./db/Connect')

const PORT = process.env.PORT || 5000;

const products_routes = require("./routes/Products");

app.get("/", (req, res) => {
  res.send("Hi, i am live");
});

app.use("/api/products", products_routes);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL)
    app.listen(PORT, () => {
      console.log`${PORT} yes i m connect`;
    });
  } catch (error) {
    console.log(error);
  }
};

start();
