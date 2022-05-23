const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/UserModels");
const cors = require("cors");
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

let uri =
  "mongodb+srv://zadig:Abelkibebenegash123@cluster0.s43od.mongodb.net/merntutorial?retryWrites=true&w=majority";
mongoose.connect(uri);

require("./routes/UserRoutes.js")(app);

app.listen(3001, () => {
  console.log("Server is running on port 3100");
});
