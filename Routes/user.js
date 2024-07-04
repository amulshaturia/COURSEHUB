import express from "express";
const userRouter = express.Router() ;

import {handleLogin , handleSignUp , handleProfile} from '../controllers/user-controller.js' ; 
import varifyToken from '../middlewares/verifyToken.js' ;


userRouter.post('/profile' , varifyToken , handleProfile); 

userRouter.get('/login' , handleLogin); 

export default userRouter ;