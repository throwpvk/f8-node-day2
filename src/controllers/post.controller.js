const { postModel } = require("../models");
const { getAllPosts, getPostById, createPost, updatePost, deletePost } =
  postModel;

exports.getPosts = async (req, res) => {
  try {
    const posts = await getAllPosts();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getPost = async (req, res) => {
  try {
    const post = await getPostById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || !content)
      return res
        .status(400)
        .json({ message: "Title and content are required" });
    const newPost = await createPost({ title, content });
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || !content)
      return res
        .status(400)
        .json({ message: "Title and content are required" });
    const updatedPost = await updatePost(req.params.id, { title, content });
    if (!updatedPost)
      return res.status(404).json({ message: "Post not found" });
    res.json(updatedPost);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const deleted = await deletePost(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Post not found" });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
