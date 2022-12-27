const db = require("../database/models/index");

module.exports.createBlog = async (req, res) => {
  try {
    const blogDetails = await db.models.Blogs.create({ ...req.body });
    res.status(200).send({
      status: 200,
      message: "successfully created",
    });
  } catch (err) {
    return res.status(400).send({
      message: "Unable to create blog",
      status: 400,
    });
  }
};

module.exports.getAllBlog = async (req, res) => {
  try {
    const blogs = await db.models.Blogs.findAll({
      order: [["id", "DESC"]],
    });
    console.log("aaaa");
    res.status(200).send({
      status: 200,
      message: "Success",
      data: blogs,
    });
  } catch (error) {
    return res.status(400).send({
      message: "Unable to insert data",
      error: error,
      status: 400,
    });
  }
};

module.exports.getBlogById = async (req, res) => {
  try {
    console.log(req.params.id);
    const blog = await db.models.Blogs.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send({
      status: 200,
      data: blog,
    });
  } catch (error) {
    return res.status(400).send({
      message: "Unable to insert data",
      error: error,
      status: 400,
    });
  }
};

module.exports.updateBlog = async (req, res) => {
  try {
    const blog = await db.models.Blogs.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (blog) {
      blog.Content = req.body.Content;
      blog.ImgVideo = req.body.ImgVideo;
      blog.Total = req.body.Total;
      blog.Category = req.body.Category;
      blog.Like = req.body.Like;
      blog.Dislike = req.body.Dislike;
      blog.Comment = req.body.Comment;
      blog.Status = req.body.Status;
      await blog.save();
    }
    res.status(200).send({
      status: 200,
      message: "Success",
      data: blog,
    });
  } catch (error) {
    return res.status(400).send({
      message: "Unable to insert data",
      error: error,
      status: 400,
    });
  }
};

module.exports.deleteBlog = async (req, res) => {
  try {
    const blog = await db.models.Blogs.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (blog) {
      await blog.destroy();
    }
    res.status(200).send({
      status: 200,
      message: "Delete oke",
    });
  } catch (error) {
    return res.status(400).send({
      message: "Unable to insert data",
      error: error,
      status: 400,
    });
  }
};
