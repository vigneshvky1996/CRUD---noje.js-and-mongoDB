const express = require('express');
const employeeData = require('../schema/employeeDetails');

const router = express.Router();

router.get('/' , async(req,res)=>{
    try {
        const data = await employeeData.find();
        res.json(data);
    } catch (error) {
        console.log("error occured "+error);
    }
    //console.log("in get request page");
})

router.post('/' , async(req,res)=>{
    try {
        //console.log(req.body);
        const data = new employeeData({
            name : req.body.name,
            tech : req.body.tech,
            contactNumber : +(req.body.contactNumber),
            exprerience : +(req.body.exprerience)
        })
        const storedData = await data.save();
        res.json(storedData);
    } catch (error) {
        console.log("error occured "+error);
    }
})

router.get('/:id' , async(req,res)=>{
    try {
        //console.log(req.params.id);
        const data = await employeeData.findById(req.params.id);
        res.json(data);
        //const data = await employeeData.findOne()

    } catch (error) {
        console.log("error occured "+error);
    }
})

router.delete('/:id' , async(req,res)=>{
    try {
        let data = await employeeData.findById(req.params.id);
       // res.json(data);
        await data.delete();
        updatedData = await employeeData.find();
        res.json(updatedData);
    } catch (error) {
        console.log("error occured "+error);
    }
})

router.patch('/:id' , async(req,res)=>{
    try {
        let data = await employeeData.findById(req.params.id);
        data.contactNumber = +(req.body.contactNumber);
        let updatedData = await data.save();
        res.json(updatedData);
    } catch (error) {
        console.log("error occured "+error);
    }
})

router.put('/:id' , async(req,res)=>{
    try {
        let data = await employeeData.findById(req.params.id);
        data.name = req.body.name;
        data.tech = req.body.tech;
        data.contactNumber = +(req.body.contactNumber);
        data.exprerience = +(req.body.exprerience);
        const updatedData = await data.save();
        res.json(updatedData);
    } catch (error) {
        console.log("error occured "+error);
    }
})

router.get('/search/:name' , async(req,res)=>{
    //res.send("in get by name block "+req.params.name);
    //const data = await employeeData.findOne({ name : {$regex : req.params.name}});
    let searchName = req.params.name;
    //let searchTech = req.body.tech;
    const data = await employeeData.findOne({ name : searchName });
    res.json(data);
})

router.patch('/search/:name' ,async(req,res)=>{
    let updatedTech = req.body.tech;
    let data = await employeeData.findOneAndUpdate({name : req.params.name} , { tech : updatedTech},{new : true});
   // let updatedData = await data.save();
  // let updatedData = await employeeData.findOne({name : req.params.name});
    res.json(data);
})

router.delete('/search/:name' , async(req,res)=>{
    let data = await employeeData.findOneAndDelete({name : req.params.name});
    let updatedData = await employeeData.find();
    res.json(updatedData);
})

module.exports = router;

