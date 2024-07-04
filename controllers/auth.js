import JWT from "jsonwebtoken" ;
// import { default as jwtDecode } from 'jwt-decode'; 
import userModel from '../models/user.js' ; 
import bcrypt from "bcrypt" ;

const handleGoogle = async (req , res)=>{
    const decoded = JWT.decode(req.body.googleToken);
    // const decoded = jwtDecode.jwtDecode(req.body.googleToken);
    
    let email = decoded.email ; 
    let user = await userModel.findOne({email : email}); 
    
    if(!user){
        let name = decoded.name ; 
        let pic = decoded.picture ; 
        let tempPass = "!91098#$@-" + decoded.exp+ "-top-hash-%(&*F^990Vs" + decoded.iat + "--@2777@*!^#*%!"; 
        let hashed_pass = await bcrypt.hash(tempPass , 10);

        user = new userModel({
            email : email , 
            name : name , 
            password :  hashed_pass ,
        }); 
        await user.save(); 

    }

    let payload = {
        name : decoded.name,
        email: email
    }
    let token = JWT.sign(payload, 'Secret JWT String', { expiresIn: "1d" });
    
    return res.send({
        "ok" : true ,
        "token" : token, 
    }); 
}

export default handleGoogle ; 