const Blog = require("../models/blog");

const blog_index = (req,res) => {
    Blog.find().sort({ createdAt: -1})
      .then((respons) => {
        res.render("index", {title: 'Home', blogs: respons});
      })
      .catch((err) => console.log("============" , err))
  }

const blog_id = (req,res) => {
    const id = req.params.id;
    Blog.findById(id)
      .then((result) => {
        res.render("blog", {title: id, blog: result});
      })
      .catch((err) => {
        res.status(404).send('<h1>Per Tine</h1>');
      })
  }

module.exports = {
    blog_index,
    blog_id
}