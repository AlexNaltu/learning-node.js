const express = require("express");
const app = express();
const http = require("http");
const path = require("path");
const PORT = process.env.PORT || 3500;

app.get("^/$|/index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
  //  res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/new-page(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "new-page.html"));
});

app.get("/old-page(.html)?", (req, res) => {
  res.redirect(301, "/new-page.html");
});

// Route Handlers
app.get(
  "/hello(.html)?",
  (req, res, next) => {
    console.log("Attemped to access /hello");
    next();
  },
  (req, res) => {
    res.send("Hello, World!");
  }
);

app.get("/*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
