const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const jwt = require ('jsonwebtoken');
const {expressjwt: exjwt} = require ('express-jwt');
const jwt_decode = require('jwt-decode');

const app = new express();
app.use(express.json());
app.use(cors());

const client = new MongoClient('mongodb+srv://admin:admin@cluster0.vlrx0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
client.connect();
const db = client.db('mcaproject');
const col = db.collection('register');

//middleware for JesonWebToken  verification
var jwtmw = exjwt({
    secret: 'kanrube',
    algorithms:["HS256"]
})
const secret = "kanrube";

app.get('/show', (req, res) => {
    res.send("This a Show Page");
});

app.post('/signin', (req, res) => {
   // console.log(req.body);
    col.insertOne(req.body);
    res.send("Data Received");
});

app.post('/login',async(req,res)=>{
    console.log("entering check")
    const result = await col.findOne({'email':req.body.email})
    var token = null;
    if(result.password == req.body.password){
        token = jwt.sign(result,secret,{
            algorithm:"HS256",
            expiresIn: "2m"
        })
        res.send({
            msg: result,
            token:token
        })
    }
    else{
        res.send({
            msg:"failed",
            token: token
        })
    }
    console.log(token)
    console.log(result);
})

app.get('/showall',jwtmw,async(req,res)=>{
    //console.log("show",req.headers)
    const result =await col.find().toArray();
    res.send(result);
});

app.listen(8081,()=>{console.log("Server is running on 8081")});