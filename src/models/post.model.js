const { loadDB, saveDB } = require("../../utils/jsonDB");

async function getAllPosts() {
  return await loadDB("posts");
}

async function getPostById(id) {
  const posts = await loadDB("posts");
  return posts.find((p) => p.id === id);
}

async function createPost({ title, content }) {
  const posts = await loadDB("posts");
  const maxId =
    posts.length > 0 ? Math.max(...posts.map((p) => parseInt(p.id))) : 0;
  const newId = (maxId + 1).toString();
  const newPost = {
    id: newId,
    title,
    content,
    createdAt: new Date().toISOString(),
  };
  posts.push(newPost);
  await saveDB("posts", posts);
  return newPost;
}

async function updatePost(id, { title, content }) {
  const posts = await loadDB("posts");
  const index = posts.findIndex((p) => p.id === id);
  if (index === -1) return null;
  posts[index] = { ...posts[index], title, content };
  await saveDB("posts", posts);
  return posts[index];
}

async function deletePost(id) {
  const posts = await loadDB("posts");
  const index = posts.findIndex((p) => p.id === id);
  if (index === -1) return false;
  posts.splice(index, 1);
  await saveDB("posts", posts);
  return true;
}

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
