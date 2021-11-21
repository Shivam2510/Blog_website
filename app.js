const express  = require("express");

const mongoose = require("mongoose");


const app = express();

// mongoose connected

mongoose.connect("mongodb://localhost/blog_CA", {
    useNewUrlParser: true,
    useUnifiedTopology: true
},
() => {
    console.log("connecion to mongodb database was successfully");
}
);

//middlewares

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");


//routes
app.use(require("./routes/index"));
app.use(require("./routes/compose"));
app.use(require("./routes/blog"));



// server

app.listen(3000, () =>{
    console.log("server started on port 3000");
})