const express = require("express");
const path = require("path");
const app = express();
const posts = require("./routes/posts.js");
const port = process.env.PORT || 8000;

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

// Routes
app.use("/api/posts", posts);

app.listen(8000, () => {
  console.log(`server is running on Port:${port}`);
});
