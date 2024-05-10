import mongoose from  'mongoose';

export const connectDB= async()=>{
    await mongoose.connect('#your db url').then(()=>{
        console.log('db connected');
    })
   
}
