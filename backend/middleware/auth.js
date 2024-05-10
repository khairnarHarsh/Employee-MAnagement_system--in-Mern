import jwt from 'jsonwebtoken'

const authMiddleware= async(req,res,next)=>{
    const { token }=req.headers;
    if(!token){
        return res.json({sucess:false,message:"Not authorize login again"})
    }
    try {
        const token_decode = jwt.verify(token,process.env.jwt_SECRET);
        req.body.userId= token_decode.id
        next();
    } catch (error) {
        console.log("error");
        res.json({sucess:false,message: "Invalid Token!"});
        
    }

}


export default authMiddleware;