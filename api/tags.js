const express = require("express");
const tagsRouter = express.Router();
const { getAllTags, getPostsByTagName } = require("../db");

tagsRouter.use((req, res, next) => {
  console.log("A request is being made to /tags");

  next();
});

tagsRouter.get("/", async (req, res) => {
  const tags = await getAllTags();

  res.send({
    tags,
  });
});

tagsRouter.get("/:tagName/posts", async (req, res, next) => {
  // read the tagname from the params
  const { tagname } = req.params;
  const tags = getAllTags.filter((tags) => {
    return post.active || (req.user && post.author.id === req.user.id);
  });
  try {
    const allPosts = await getPostsByTagName;
    // use our method to get posts by tag name from the db
    res.send({ posts: allPosts });
  } catch ({ name, message }) {
    // forward the name and message to the error handler
    next({
      name,
      message,
    });
  }
});

tagsRouter.get("/:tagName/posts", async (req, res, next) => {
  const { tagname } = req.params;
  try {
    const allPosts = await getPostsByTagName();
    const posts = allPosts.filter((post) => {
      if (post.active) {
        return true;
      }
      if (req.user && post.author.id === req.user.id) {
        return true;
      }
      return false;
    });
    res.send({
      posts,
    });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

module.exports = tagsRouter;
