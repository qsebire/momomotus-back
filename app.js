var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

let indexRouter = require("./routes/index");
let gameRouter = require("./routes/game");
let checkWordRouter = require("./routes/checkWord");

var app = express();

const cors = require("cors");
app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/game", gameRouter);
app.use("/check-word", checkWordRouter);

module.exports = app;
