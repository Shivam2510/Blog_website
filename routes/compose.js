const router = require("express").Router();
const Blog = require("../models/BLog");



router
.get("/compose", (req,res) =>{
   
    res.render("composeBlog");
})
.post("/compose", (req, res)=>{

    //check for missing field
    const {title, content} = req.body;
    if(!title || !content) return res.send("Please filled the required field.");

    const newBlog = new Blog({title, content});

    //save data into data base
    newBlog.save()
    .then(()=>{
        console.log("Blog saved successfully");
        res.redirect("/");
    })
    .catch(err=>{
        console.log(err);
    })
})




module.exports = router;