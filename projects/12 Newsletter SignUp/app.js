const express = require("express")
const bodyparser = require("body-parser")
const request = require("request")
const https = require ("https")
const path = require ("path")

const app = express()

app.use("/",express.static(path.join(__dirname + "/")))
app.use(bodyparser.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/signup.html")
})

app.post('/',(req,res)=>{
    const firstname = req.body.fname
    const lastname  = req.body.lname
    const email     = req.body.email

    var data ={
        members:[
            {
                email_address: email,
                status:"subscribed",
                merge_fields:{
                    FNAME:firstname,
                    LNAME:lastname
                }
            }
        ]
    };
    var jsondata = JSON.stringify(data)
    const url = "https://us21.api.mailchimp.com/3.0/lists/417613e370"
    const options = {
        method:"POST",
        auth:"AhmadGamal2:535074370051f28a26911f3253b0fc26-us21",
    }
    const request = https.request(url,options,(respo)=>{
        if (respo.statusCode === 200){
            res.sendFile(__dirname+"/success.html")
        }
        else{res.sendFile(__dirname+"/failure.html")}
        respo.on("data",(data)=>{
            console.log(JSON.parse(data))
        })
    })
    request.write(jsondata)
    request.end()
})

app.post("/failure",(req,res)=>{
    res.redirect("/")
})

// api = 535074370051f28a26911f3253b0fc26-us21
// api = b928e9ae-89f2-26f9-1573-92677d8d9c68
// 417613e370

var port = process.env.PORT || 2000
app.listen(port,()=>{
    console.log(`Listening On Port : ${port}`)
})