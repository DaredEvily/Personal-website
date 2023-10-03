const express = require("express")
const path = require("path")
const send = require("send")
const app = express()
const port = 2000

app.use("/",express.static(path.join(__dirname + "/")))
app.use((req , res) => {
    res.sendFile(__dirname + "/index.html")
})
app.listen(process.env.PORT || port,()=>{
    console.log('listen on port : 2000')
})