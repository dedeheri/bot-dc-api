require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const server = express();

const bookiesRoute = require("./api/bookies/bookies.router");
const referenceRoute = require("./api/reference/reference.router");
const connection = require("./database");

function start() {
  server.use(bodyParser.json());
  server.use(cors());

  // static
  server.use("/image", express.static(path.join(__dirname, "../assets")));

  // endpoint
  server.use("/api", bookiesRoute);
  server.use("/api", referenceRoute);

  // database
  connection();
  // listen
  server.listen(process.env.PORT, () => {
    console.log(`Server is running in ${process.env.PORT}`);
  });
}

module.exports = start;
