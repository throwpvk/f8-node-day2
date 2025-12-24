const express = require("express");
const router = express.Router();
const { postController } = require("../controllers");
const { getPosts, getPost, createPost, updatePost, deletePost } =
  postController;

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

module.exports = router;
