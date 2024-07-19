// const express = require("express");
import express from "express";
// const path = require("path");
import path from "path";
const app = express();
// const posts = require("./routes/posts.js");
import posts from "./routes/posts.js";
const port = process.env.PORT || 8000;
// logger
import logger from "./middleware/logger.js";

// BASIC SENDING
// app.get("/", (req, res) => {
//   console.log(__dirname);
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });
// app.get("/about", (req, res) => {
//   console.log(__dirname);
//   res.sendFile(path.join(__dirname, "public", "about.html"));
// });

// SENDING THRU EX: LOCALHOST:8000/ABOUT.HTML
// app.use(express.static(path.join(__dirname, "public")));

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// use logger
app.use(logger);

// Routes;
app.use("/api/posts", posts);

app.listen(port, () => {
  console.log(`server is running on Port:${port}`);
});
