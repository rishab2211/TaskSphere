const jwt = require("jsonwebtoken");
const JWT_SECRET = require("./config");


const authMiddleware = (req,res,next)=>{

    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith("Bearer ")){

        res.status(400).json({
            message : "authorization failed"
        })
    }

    const token = authHeader.split(" ")[1];
    
    try{
        const decode = jwt.verify({token},JWT_SECRET);

        req.userId = decode.userId;

        next();
    }catch(err){
        res.json({
            message : err
        })
    }
}