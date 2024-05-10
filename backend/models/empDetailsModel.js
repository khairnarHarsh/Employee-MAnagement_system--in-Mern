import mongoose from "mongoose";

const empSchema = new mongoose.Schema({
    name: { type: String, required:true},
    email:{type:String,required:true,unique:true},
    phone:{type:Number,require:true},
    designation:{type:String,require:true},
    gender:{type:String,require:true},
    course:{type:String,require:true},
    image:{type:String,required:true},
    createdate:{type:String}
})

const empModel= mongoose.models.Emp ||mongoose.model("Emp",empSchema);
export default empModel;