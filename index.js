const express = require("express");
const route = require("./route/route");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

mongoose.set('strictQuery', true);
 mongoose
  .connect(
    "mongodb+srv://Avipatra912:Avi878878@cluster0.kahv6oh.mongodb.net/?retryWrites=true&w=majority",
    { UseNewUrlParser: true }
  )
  .then(() => console.log("Mongo-Db is connected"))
  .catch((err) => console.log(err.message))

app.use("/", route);

app.listen(process.env.PORT || 3000, function () {
  console.log("listening at " + (process.env.PORT || 3000))})