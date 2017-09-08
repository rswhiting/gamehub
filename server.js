"use strict";

const express = require("express");
const app = express();

const minify = require("express-minify");

app.use(minify({
    onerror: (error) => { console.error(error); }
}));
app.use(express.static(__dirname + "/assets"));

app.listen(8080, () => {
    console.log("Listening at http://localhost:8080");
});

app.get("/", (req, res) => {
    res.send("Hello, world.");
});