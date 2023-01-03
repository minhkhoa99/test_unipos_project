const express = require("express");
const blog = require("../controllers/blogs.controller");

const router = express.Router();

router.post("/", blog.createBlog);

router.get("/", blog.getAllBlog);

router.get("/:id", blog.getBlogById);

router.put("/:id", blog.updateBlog);

router.delete("/:id", blog.deleteBlog);

module.exports = router;
