const express = require("express");
const router = express.Router();

const postRoutes = require("./post.route");
const commentRoutes = require("./comment.route");

router.use("/posts", postRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
