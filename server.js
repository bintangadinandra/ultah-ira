const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8080;
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");

/* Server Configs */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, ".", "build")));

/* Listener */
app.listen(PORT, () => {
  console.log("The server is up ma lord!");
});
