const express = require("express");
const router = express.Router();

const Post = require("../models/Post");

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().sort({
      createdAt: -1,
    });

    res.json(posts);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const post = new Post(req.body);

    const savedPost = await post.save();

    res.status(201).json(savedPost);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});
// GET ONE POST

router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        message: "Post not found",
      });
    }

    res.json(post);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});
// ADD AN ANSWER TO A POST

router.post("/:id/answer", async (req, res) => {
  try {
    const { author, role, text } = req.body;

    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        message: "Post not found",
      });
    }

    post.answers.push({
      author: author || "Anonymous",
      role: role || "Student",
      text,
    });

    const updatedPost = await post.save();

    res.json(updatedPost);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});
// update 
router.put("/:id", async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedPost) {
      return res.status(404).json({
        message: "Post not found",
      });
    }

    res.json(updatedPost);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});
// delete
router.delete("/:id", async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);

    if (!deletedPost) {
      return res.status(404).json({
        message: "Post not found",
      });
    }

    res.json({
      message: "Post deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});
module.exports = router;