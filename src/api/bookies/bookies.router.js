const express = require("express");
const { getBookies, addBookies } = require("./bookies.contollers");

const route = express.Router();

// end point
route.get("/bookies", getBookies);
route.post("/bookies/add", addBookies);

module.exports = route;
