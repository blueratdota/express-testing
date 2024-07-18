const express = require("express");
const router = express.Router();

const posts = [
  { id: 1, title: "one" },
  { id: 2, title: "two" },
  { id: 3, title: "three" }
];

// sends all posts
router.get("/", (req, res) => {
  const limit = parseInt(req.query.limit); // for localhost:8080/api/posts?limit=number
  if (!isNaN(limit) && limit > 0) {
    res.status(200).json(posts.slice(0, limit));
  } else {
    res.json(posts);
  }
});

// send one specific post
router.get("/:id", (req, res) => {
  //   console.log(req.params.id);
  const id = parseInt(req.params.id);
  const post = posts.find((x) => {
    return x.id === id;
  });
  if (!post) {
    return res.status(404).json({ msg: "error" });
  }
  res.status(200).json(
    posts.filter((post) => {
      return post.id === id;
    })
  );
});

module.exports = router;
