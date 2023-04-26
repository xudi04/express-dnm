const express = require("express");
const router = express.Router();
const blogControler = require("../controlers/blogControler");

router.get("/", blogControler.blog_index);
router.get("/:id", blogControler.blog_id);

module.exports = router;