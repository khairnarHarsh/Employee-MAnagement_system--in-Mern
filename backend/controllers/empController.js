import empModel from "../models/empDetailsModel.js";

import fs from 'fs'
import validator from 'validator';
// adding emp data

const addEmployee = async(req,res)=>{
    let image_filename = `${req.file.filename}`
    const emp = new empModel({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        designation: req.body.designation,
        gender: req.body.gender,
        course: req.body.course,
        createdate:req.body.createdate,
        image:image_filename
    })
    if(!validator.isEmail(emp.email)){
        res.json({success:false,message:"plzz enter valid email"})
    }
    try{
        await emp.save();
        res.status(201).json({success:true,message:"Employee added Successfully!"});
    }catch(err){
        res.status(409).json({sucess:false,message:'This Employee already exists!'})
    }

}

// all employee
const listEmp= async(req,res)=>{
    try{
        const emp= await empModel.find({});
        res.json({success:true,data:emp})

    }catch(err){
        console.log("data error");
        res.json({success:false,message:"Data not found"})
    }
}
// remove Emp
const removeEmp = async(req,res)=>{
    try{
        const emp = await empModel.findById(req.body._id)
        
        // fs.unlink(`uploads/${emp.image}`,()=>{})
        await empModel.findByIdAndDelete(req.body.id)
        res.json({success:true,message:"Emp Removed"})
    }
    catch(err){
        console.log(err);
        res.json(
            {success:false,message:"err"}   
        )

    }

}
// editEmployee details
const empDetail=async(req,res)=>{
    try{
        const emp = await empModel.findById(req.body.id)
        res.json({success:true,data:emp})
    }
    catch(err){
        console.log(err);
        res.json(
            {success:false,message:"err"}
        )

    }


}
const editEmployee = async (req, res) => {
    try {
        const updatedEmployee = await empModel.findByIdAndUpdate(req.params.id, 
            req.body)
        if (!updatedEmployee) {
            return res.status(404).json({ success: false, message: "Employee not found." });
        }

        res.status(200).json({ success: true, data:updatedEmployee });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "An error occurred while updating the employee." });
    }
}


export{addEmployee,listEmp,removeEmp,editEmployee,empDetail}