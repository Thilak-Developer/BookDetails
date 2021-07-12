const express = require('express');

const bodyparser = require('body-parser');

const dotenv = require('dotenv');

const mongoose = require('mongoose');

const app = express();

dotenv.config({path:'config.env'});

const Port = process.env.Port || 8080

app.use(bodyparser.json());

app.get('/Library',(req,res)=>{
    res.json({"message" : "Welcome to E-book store"});
})

app.listen(Port,()=>{
    console.log(`Server is running on port : ${Port}`);
})

mongoose.connect(process.env.MongoUri , {
    useNewUrlParser:true
}).then(()=> {
    console.log("Database is connected succesfully");
}).catch(err => {
    console.log("Cant able to connect database",err);
    process.exit();
});


require('./routes')(app);
