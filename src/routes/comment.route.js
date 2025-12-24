const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("List of comments");
});

router.get("/:id", (req, res) => {
  const commentId = req.params.id;
  res.send(`Details of comment ${commentId}`);
});

router.post("/", (req, res) => {
  res.send("Create a new comment");
});

router.put("/:id", (req, res) => {
  const commentId = req.params.id;
  res.send(`Update comment ${commentId}`);
});

router.delete("/:id", (req, res) => {
  const commentId = req.params.id;
  res.send(`Delete comment ${commentId}`);
});

module.exports = router;
