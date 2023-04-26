const Blog = require("../models/blog");

const admin_index =  (req, res) => {
    Blog.find().sort({ createdAt: -1})
      .then((respons) => {
        res.render("admin", {title: 'Admin', blogs: respons});
      })
      .catch((err) => console.log(err))
  }

const admin_add = (req,res) => {
    res.render("add", {title: "ekle"})
  }

const admin_post_add = (req,res) => {
    const body = req.body;
    const blog = new Blog(body);
    blog.save()
      .then((result) => {
        res.redirect("/admin");
      })
      .catch((err) => console.log(err))
  }

const admin_delete = (req,res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
      .then((result) => {
        res.json({link: "/admin"});
      })
      .catch((err) => console.log(err))
  }

module.exports = {
    admin_index,
    admin_add,
    admin_post_add,
    admin_delete
}