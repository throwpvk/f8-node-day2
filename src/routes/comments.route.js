const express = require("express");
const router = express.Router();
const { commentController } = require("../controllers");
const { getComments, getComment, createComment, updateComment, deleteComment } =
  commentController;

router.get("/", getComments);
router.get("/:id", getComment);
router.post("/", createComment);
router.put("/:id", updateComment);
router.delete("/:id", deleteComment);

module.exports = router;
