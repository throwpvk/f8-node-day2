const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("List of posts");
});

router.get("/:id", (req, res) => {
  const postId = req.params.id;
  res.send(`Details of post ${postId}`);
});

router.post("/", (req, res) => {
  res.send("Create a new post");
});

router.put("/:id", (req, res) => {
  const postId = req.params.id;
  res.send(`Update post ${postId}`);
});

router.delete("/:id", (req, res) => {
  const postId = req.params.id;
  res.send(`Delete post ${postId}`);
});

module.exports = router;
