const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
require('dotenv').config()
const mongoose = require("mongoose")

const app = express()
app.use(cors())
app.use(bodyParser.json())


const {Schema} = mongoose


const userSchema =new Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    imageUrl:{type:String,required:true}
},{timestamps:true}
);

const Users=mongoose.model("user",userSchema)
//get all user
app.get("/users",(req,res)=>{
    Users.find({} , (err,docs)=>{
        if(!err){
            res.send(docs)
        }else{
            res.status(404).json({message:err})
        }
    })
})
//get user by id

app.get("/users/:id",(req,res)=>{
    let {id} = req.params
    Users.findById(id,(err,doc)=>{
        if (!err) {
            if(doc){
                res.send(doc)
            }
        }
    });
});

//delete

app.delete("/users/:id", (req,res)=>{
    let {id} = req.params
    Users.findByIdAndDelete(id,(err,doc)=>{
        if (!err) {
            res.send({message:"seccessful delete"})
        }else{
            res.status(404).json({message:err})
        }
    })
})

//post

app.post("/users",(req,res)=>{
    console.log(req.body);
    let newUser = new Users({
        name:req.body.name,
        description:req.body.description,
        imageUrl:req.body.imageUrl
    })
    newUser.save();

    res.send({message:"seccessful"})
})







app.get("/",(req,res)=>{
    res.send("<h1>kelemm</h1>");
})


const PORT = process.env.PORT;
const url = process.env.CONNECT_URL.replace(
    "<password>",
    process.env.PASSWORD
);

mongoose.set('strictQuery', false);
mongoose.connect(url,(err)=>{
    if (!err) {
        console.log("DB CONNECT");

        app.listen(PORT,()=>{
            console.log("server start");
        })
    }
})