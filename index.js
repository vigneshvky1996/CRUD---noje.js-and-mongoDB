//const { application } = require('express');
const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/testDb',{ useNewUrlParser : true});
const con = mongoose.connection;

const app = express();
app.use(express.json());

const homeRouter = require('./routers/homeRoute');
app.use('/home', homeRouter);

con.on('open', ()=>{
     console.log("connected successfully");
})

app.listen(9000, ()=>{
    console.log("listening to port 9000");
})