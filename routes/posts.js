// const express = require("express");
import express, { Router } from "express";
const router = express.Router();

let posts = [
  { id: 1, title: "one" },
  { id: 2, title: "two" },
  { id: 3, title: "three" }
];

// GET ALL POST
router.get("/", (req, res) => {
  const limit = parseInt(req.query.limit); // for localhost:8080/api/posts?limit=number
  if (!isNaN(limit) && limit > 0) {
    res.status(200).json(posts.slice(0, limit));
  } else {
    res.json(posts);
  }
});

// GET ONE POST VIA ID
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

// POST ONE POST
router.post("/", (req, res) => {
  // console.log(req.body);

  const newPost = {
    id: posts.length + 1,
    title: req.body.title
  };
  if (!newPost.title) {
    return res.status(400).json({ msg: "Please put title on your post" });
  }
  posts.push(newPost);
  res.status(201).json(posts);
});

// UPDATE POST
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((x) => x.id == id);
  if (!post) {
    return res.status(404).json({ msg: "error to update not found" });
  }
  post.title = req.body.title; // directly modifies the object
  res.status(200).json(posts);
});

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((x) => x.id == id);
  if (!post) {
    return res.status(404).json({ msg: "error to update not found" });
  }
  posts = posts.filter((x) => {
    return x.id !== id;
  });
  res.status(200).json(posts);
});

export default router;
