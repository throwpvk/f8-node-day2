const { commentModel } = require("../models");
const {
  getAllComments,
  getCommentById,
  createComment,
  updateComment,
  deleteComment,
} = commentModel;

exports.getComments = async (req, res) => {
  try {
    const comments = await getAllComments();
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getComment = async (req, res) => {
  try {
    const comment = await getCommentById(req.params.id);
    if (!comment) return res.status(404).json({ message: "Comment not found" });
    res.json(comment);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.createComment = async (req, res) => {
  try {
    const { postId, content } = req.body;
    if (!postId || !content)
      return res
        .status(400)
        .json({ message: "PostId and content are required" });
    const newComment = await createComment({ postId, content });
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.updateComment = async (req, res) => {
  try {
    const { content } = req.body;
    if (!content)
      return res.status(400).json({ message: "Content is required" });
    const updatedComment = await updateComment(req.params.id, { content });
    if (!updatedComment)
      return res.status(404).json({ message: "Comment not found" });
    res.json(updatedComment);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.deleteComment = async (req, res) => {
  try {
    const deleted = await deleteComment(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Comment not found" });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
