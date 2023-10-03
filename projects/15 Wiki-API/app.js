const express = require("express")
const mongoose = require("mongoose")
const ejs = require("ejs")
const bodyparser = require ("body-parser")
const path = require("path")
const _ = require('lodash')
const app = express()

const localurl = "mongodb://localhost:27017/WikiDB" 
const cloudurl = "mongodb+srv://ahmedjokar08:JBX08059@cluster0.5lfjd8y.mongodb.net/WikiDB"
const port = 2000

mongoose.connect(cloudurl,{UseNewUrlParser:true}).then(()=>{console.log("DB Connected")})

app.set("view engine",'ejs')
app.use("/public",express.static(path.join(__dirname+"/public")))
app.use(bodyparser.urlencoded({extended:true}))
// =================================================================================================
const articleschema = {
    title:String,
    content:String
}
const Article = mongoose.model("Article",articleschema)

app.route("/articles")
    .get((req,res)=>
        res.sendFile(path.join(__dirname,'creatarticle.html'))
    )

    .post((req,res)=>{
        const article = new Article({
            title:_.toUpper(req.body.title),
            content:req.body.content
        }) 
        if (req.body.title == 0 || req.body.content == 0){
            Article.find()
            .then((foundedarticles)=>
                res.send(foundedarticles)
            )
        }
        else{
            article.save().then(()=> console.log("Saved Successfully"))
            Article.find()
            .then((foundedarticles)=>
            res.send(foundedarticles)
        )
        .catch((err) => console.log(err))
        }
    })
// =================================================================================================
app.post("/delete",(req,res)=>{
    Article.deleteOne({
        title:_.toUpper(req.body.del)
    })
    .then((item)=>{
        if (item.deletedCount > 0){
        console.log('Delete Successfully')
        Article.find().then((found)=>{res.send(found)})}
        else if (req.body.del == 0){res.send('<h1 style="text-align:center;margin:15% 25%">No Item To Found</h1>')}
        else{res.send('<h1 style="text-align:center;margin:15% 25%">No Matching Item Found</h1>')}
    })
    .catch((err)=>console.log(err))
})
// =================================================================================================
app.route("/articles/:articletitle")
    
    .get((req,res)=>{
        Article.findOne({title:_.toUpper(req.params.articletitle)})
        .then((foundarticle)=>{
            if (foundarticle){res.send(foundarticle)}
            else{res.send('<h1 style="text-align:center;margin:2%">No Article Matching The Title</h1>')}
        })
        .catch((err)=>res.send(err))
    })    
// =================================================================================================
app.listen(process.env.PORT || port,()=>
    console.log(`Listening On Port : ${port}`)
)