const express = require("express");
require('dotenv').config();
const mongoose = require ("mongoose");
const cors =require("cors")
const bodyParser = require("body-parser")

const app = express()

app.use(cors())
app.use(bodyParser.json())
const {Schema} = mongoose


const userSchema = Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    imageUrl:{type:String,required:true}
}
)
const Users = mongoose.model("users",userSchema)
//GET all data

app.get("/users",(req,res)=>{
    Users.find({},(err,docs)=>{
        if (!err) {
            res.send(docs)
        }else{
            res.send({message:err})
        }
    })
})

//getalluser by id

app.get("/users/:id", (req,res)=>{
    let {id} =req.params
    Users.findById(id,(err,doc)=>{
        if(!err){
            if(doc){
                res.send(doc)
            }
        }

    })
})

//delete
app.delete("/users/:id" , (req,res)=>{
    let {id} =req.params
    Users.findByIdAndDelete(id,(err,doc)=>{
        if (!err) {
            res.send({message: "seccess delete"})
        }else{
            res.send({message: err})
        }
    })
})

//post


app.post("/users",(req,res)=>{
    let newUser = new Users({
        name:req.body.name,
        description:req.body.description,
        imageUrl:req.body.imageUrl
    });
    newUser.save()

    res.send({message:"seccess post"})

})




const PORT= process.env.PORT;
const url = process.env.CONNECT_URL.replace(
    "<password>",
    process.env.PASSWORD
);
mongoose.set('strictQuery', false);
mongoose.connect(url,(err)=>{
    if(!err){
        console.log("db connect success");

        app.listen(PORT, ()=>{
            console.log("success");
        })
    }
})