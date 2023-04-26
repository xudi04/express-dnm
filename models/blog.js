const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BlogPost = new Schema({
    name: String,
    sname: String
}, {timestamps: true});

const Blog = mongoose.model("BlogPost", BlogPost);
module.exports = Blog;