import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    username:{type:String,required:true,unique:true},
    password:{type:String,required:true},
},{minimize:false})

const userModel= mongoose.models.user ||mongoose.model("User",userSchema);
export default userModel;