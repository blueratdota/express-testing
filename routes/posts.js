// const express = require("express");
import express, { Router } from "express";
import {
  getPost,
  getPosts,
  createPost,
  updatePost,
  deletePost
} from "../controller/postController.js";
const router = express.Router();

// GET ALL POST
router.get("/", getPosts);
// GET ONE POST VIA ID
router.get("/:id", getPost);
// POST ONE POST
router.post("/", createPost);
// UPDATE POST
router.put("/:id", updatePost);
// DELETE POST
router.delete("/:id", deletePost);

export default router;
