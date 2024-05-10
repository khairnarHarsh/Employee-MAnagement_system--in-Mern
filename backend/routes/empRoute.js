import express from 'express'
import { addEmployee, editEmployee, empDetail, listEmp, removeEmp } from '../controllers/empController.js'
import multer from 'multer'

const empRouter = express.Router()
const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})
const upload = multer ({storage:storage})
empRouter.post('/add',upload.single("image"),addEmployee);
empRouter.get('/list',listEmp);
empRouter.post('/delete',removeEmp)
empRouter.post('/details',empDetail)
empRouter.post('/edit/:id',editEmployee)


export default empRouter