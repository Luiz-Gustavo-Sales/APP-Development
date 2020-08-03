const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
const port = process.env.PORT || 3333;

const api = express();

mongoose.connect(
  "mongodb+srv://produtividade:flamengo15@cluster0-xsmns.mongodb.net/<dbname>?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true }
);

api.use(cors());

api.use(express.json());
api.use(routes);

api.listen(port);
