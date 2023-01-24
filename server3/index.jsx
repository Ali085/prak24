const express = require("express")
require('dotenv').config()
const mongoose = require("mongoose")
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express()
app.use(cors())
app.use(express.json())



const {Schema} = mongoose;

const userSchema = new Schema ({
    price:{type:Number,required:true},
    description:{type:String,required:true},
    name:{type:String,required:true}
})



const Cards = mongoose.model("user12",userSchema)

//getAllUser

app.get("/users",(req,res)=>{

    Cards.find({},(err,docs)=>{
    if (!err) {
       res.send(docs)
    }else{
        res.send({message:err})
    }
  })
})

//getUserById

app.get("/users/:id",(req,res)=>{
    let {id} = req.params;
    Cards.findById(id,(err,doc)=>{
        if(!err){
            if (doc) {
                res.send(doc)
            }
        }
    })
})

//delete 

app.delete("/users/:id", (req,res)=>{
    let {id} = req.params;
    Cards.findByIdAndDelete(id, (err,doc)=>{
        res.send({message:"SUCCESS DELETE"})
    })
})

//post

app.post("/users", (req,res)=>{
    console.log(req.body);
    let newUser = new Cards({
        price:req.body.price,
        name:req.body.name,
        description:req.body.description
    })
    newUser.save()

    res.send({message:"Success post"})
})

const PORT = process.env.PORT;
const url = process.env.CONNECT_URL.replace(
    "<password>",
    process.env.PASSWORD
);
mongoose.set('strictQuery', false);
mongoose.connect(url, (err)=>{
    if (!err) {
        console.log("mongodb success");

        app.listen(PORT, ()=>{
            console.log("success");
        })
    }
})


