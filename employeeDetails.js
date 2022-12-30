//const { default: mongoose } = require('mongoose');
const mongoose = require('mongoose');
const employeeSchema= new mongoose.Schema({
    name : {
        type : String
    },
    tech : {
        type : String
    },
    contactNumber : {
        type : Number
    },
    exprerience : {
        type : Number,
        default : 0 
    }
})

module.exports = mongoose.model('employeeDetails' , employeeSchema);