var PORT = process.env.PORT || 5000;
var express     =require("express"),
    app         =express(),
    bodyParer   =require("body-parser");

app.use(bodyParer.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine","ejs");

app.get("/",function(req,res){
    res.redirect("/landing");
})
app.get("/landing",function(req,res){
    res.render("landing");
})

app.get("/homepage",function(req,res){
    res.render("home_page");
})

app.listen(PORT,function(){
    console.log("Ishans server started");
})
