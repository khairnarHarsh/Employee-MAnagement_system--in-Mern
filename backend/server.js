import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import empRouter from './routes/empRoute.js'
import 'dotenv/config'
import userRouter from './routes/userRoute.js'





// app config
const app = express()
const port = 4000

// middleware
app.use(cors()) // enable C
app.use(express.json()) // enable C
// db connection 
connectDB()
// api endpoint
app.use('/api/employee',empRouter)
app.use('/api/user',userRouter)
app.use("/images",express.static('uploads'))







app.get("/", (req, res) => {
    res.send("hello")
    });


app.listen(port, () => {
 console.log(`server started on ${port}`);
})


