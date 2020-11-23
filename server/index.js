const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

require("dotenv/config");
const PORT = process.env.PORT || 5000;
const MONGODB = process.env.MONGODB;

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose
  .connect(MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Success"))
  .catch((err) => console.log("Error"));

app.listen(PORT, () => console.log(`Server running at port ${PORT} `));
