const express = require('express');
const app = express();
const mongoose = require('mongoose');
const adminRouter = require("./routers/adminRouters");
const blogRouter = require("./routers/blogRouters");

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended : true}));
app.use(express.static('public'));

const dbURL = "mongodb+srv://musti1:musti123@aqil.hq9pwf5.mongodb.net/test";
mongoose.connect(dbURL)
  .then((res) =>{
      console.log("bağlandi")
      app.listen(3000, () => {
        console.log("http://localhost:3000");
        console.log("strated...");
      });
  })
  .catch((err) => console.log(err));


app.get('/', function (req, res) {
  res.redirect("/blog");
});

app.use("/admin", adminRouter);
app.use("/blog" ,blogRouter);


app.get('/about', function (req, res) {
    res.send('<h1>Haqqe Meda</h1>');
  });

app.get('/pp', function (req, res) {
    res.redirect("/");
  });

app.use(function (req, res) {
    res.status(404).send('<h1>Per Tine</h1>');
});