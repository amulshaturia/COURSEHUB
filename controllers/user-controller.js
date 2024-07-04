import userModel from "../models/user.js" ; 

export const addUser = async (request, response) => {
  try {
    console.log('here !!!!!!!!!!'); 
    let exist = await User.findOne({ sub: request.body.sub });

    //  if user exists then send response
    if (exist) {
      response.status(200).json({ msg: "user already exists" });
      return;
    }

    // if new user then
    const newUser = new User(request.body);
    // save in the database
    await newUser.save();
    return response.status(200).json(newUser);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

export const getUsers = async (request, response) => {
  try {
    console.log("req yahan aai hei bhaiii"); 
    const users = await User.find({});
    return response.status(200).json(users);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};
 

export const handleLogin = ()=>{

}

export const handleSignUp = ()=>{

}

export const handleProfile = async (req , res)=>{
    console.log(req.body); 
    let user = await userModel.find({email : req.body.email}); 
    res.send(user); 
}

// module.exports = {handleLogin , handleSignUp , handleProfile} ;   
