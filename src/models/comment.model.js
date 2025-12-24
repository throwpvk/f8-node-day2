const { loadDB, saveDB } = require("../../utils/jsonDB");

async function getAllComments() {
  return await loadDB("comments");
}

async function getCommentById(id) {
  const comments = await loadDB("comments");
  return comments.find((c) => c.id === id);
}

async function createComment({ postId, content }) {
  const comments = await loadDB("comments");
  const maxId =
    comments.length > 0 ? Math.max(...comments.map((c) => parseInt(c.id))) : 0;
  const newId = (maxId + 1).toString();
  const newComment = {
    id: newId,
    postId,
    content,
    createdAt: new Date().toISOString(),
  };
  comments.push(newComment);
  await saveDB("comments", comments);
  return newComment;
}

async function updateComment(id, { content }) {
  const comments = await loadDB("comments");
  const index = comments.findIndex((c) => c.id === id);
  if (index === -1) return null;
  comments[index] = { ...comments[index], content };
  await saveDB("comments", comments);
  return comments[index];
}

async function deleteComment(id) {
  const comments = await loadDB("comments");
  const index = comments.findIndex((c) => c.id === id);
  if (index === -1) return false;
  comments.splice(index, 1);
  await saveDB("comments", comments);
  return true;
}

module.exports = {
  getAllComments,
  getCommentById,
  createComment,
  updateComment,
  deleteComment,
};
