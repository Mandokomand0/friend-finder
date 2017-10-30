var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DATA
// =============================================================
var friends = [];
var waitlist = [];

// Routes
// =============================================================
// Basic route that sends the user first to the AJAX Page

// ------------ require GETs ---------------- //
var routes = require("./data/friends.js");

app.use("/", routes);

// ------------ require POSTs ---------------- //


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});