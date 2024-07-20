import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// imports the router function from posts.js
import posts from "./routes/posts.js";
// logger
import logger from "./middleware/logger.js";
// error handler
import errorHandler from "./middleware/error.js";
import notFound from "./middleware/notFound.js";

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

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__filename);
const port = process.env.PORT || 8000;
const app = express();

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// static folder
app.use(express.static(path.join(__dirname, "public")));

// use logger
app.use(logger);

// Routes;
app.use("/api/posts", posts);

// use error handler
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`server is running on Port:${port}`);
});
