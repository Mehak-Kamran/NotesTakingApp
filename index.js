//boiler plate for express

//req
let express = require("express");
let path = require("path")
let fs = require("fs")
//invoke
let app = express();
//set viewengine middleware
app.set("view engine", "ejs")
//set up cookies
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//link css etc file
app.use(express.static(path.join(__dirname, "public")))

//making server
app.get("/", function (req, res) {
    fs.readdir("./files", function (err, files) {
        res.render("index", { file: files });
        console.log(files)
    })

})
//storing data in files
app.post("/post", function (req, res) {
    fs.writeFile(`./files/${req.body.title.split(" ").join("")}.txt`, req.body.textarea, function (err) {
        res.redirect("/")
    })

})


app.listen(3000)
