const express = require("express");
const router = express.Router();
const adminControler = require("../controlers/adminControler");

router.get('/', adminControler.admin_index); 
router.get("/add", adminControler.admin_add);
router.post("/add", adminControler.admin_post_add);
router.delete("/delet/:id", adminControler.admin_delete);

module.exports = router;