import courseModel from '../models/course.js' ; 

export const getAll = async(req , res)=>{
    let data = await courseModel.find({}); 
    res.send(data); 
}

//////////////////////////////////////// temp for inserting course /////////////////////////////////////////////////////////
export const insertCourse = async(req , res)=>{
    const temp = new courseModel({
        "courseTitle" : req.body.courseTitle ,
        "price" : req.body.price ,
        "actualPrice" : req.body.actualPrice , 
        "overview" : req.body.overview ,
        "creatorName" : req.body.creatorName,
        "creatorEmail" : req.body.creatorEmail,
        "description" : req.body.description ,
        "image" : req.body.image,
        "sold" : 0 
    }); 

    temp.save(); 
    res.send('ok'); 
}
//////////////////////////////////////// temp for inserting course /////////////////////////////////////////////////////////

// module.exports = {getAll , insertCourse} ; 



