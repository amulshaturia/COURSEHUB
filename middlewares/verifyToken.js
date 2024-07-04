import jwt from "jsonwebtoken" ;   

const varifyToken = (req , res , next)=>{
    const headerAuthorization = req.headers.authorization ; 
    if(headerAuthorization && headerAuthorization.startsWith("JWT")){
        const token = headerAuthorization.split(" ")[1];
        jwt.verify(token , 'Secret JWT String' , (err , decoded)=>{
            if(err){
                return res.status(200).send({tokenVerified : false}) ; 
            }
            else{ 
                req.body.email = decoded.email ;
                next(); 
            }
        })
    }
    else {
        return res.status(200).send({tokenVerified : false}) ; 
    }
}

// module.exports = varifyToken ; 
export default varifyToken ; 