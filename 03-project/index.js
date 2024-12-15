const express = require("express");
const users = require("./MOCK_DATA.json");
const mongoose = require("mongoose");

const app = express();
const fs = require("fs");
const { type } = require("os");
const PORT = 8000;

//connection
mongoose
  .connect(" mongodb://127.0.0.1:27017/vishal-1")
  .then(() => console.log("MongoDb connected"))
  .catch(() => console.log("Mongo error"));

//schema
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastname: {
    type: String,
    require: false,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  job_title: {
    type: String,
  },
  gender: {
    type: String,
  },
});

//create model
const User = mongoose.model("user", userSchema);

//middleware - pluging 
app.use(express.urlencoded({ extended: false }));

//Routers
app.get("/api/users", (req, res) => {
  return res.json(users);
});

app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  return res.json(user);
});

app.post("/api/users", (req, res) => {
  const body = req.body;
  // console.log("Body", body);
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, response) => {
    return res.json({ status: "sucess", id: users.length });
  });
});

app.patch("/api/users/:id", (req, res) => {
  return res.json({ status: "pending" });
});

app.delete("/api/users", (req, res) => {
  const body = req.body;
  users.delete({ ...body, id: users.length });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, response) => {
    return res.json({ status: "pending" });
  });
});

app.listen(PORT, () => console.log(`Server strated at port:${PORT}`));
