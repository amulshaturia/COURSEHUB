import mongoose from "mongoose";
const Schema = mongoose.Schema; 

const courseSchema = Schema({
    courseTitle : {
        type : String ,
        require : true 
    },
    price : {
        type : Number , 
        require : true 
    },
    actualPrice : {
        type : Number , 
        require : true 
    },
    overview : {
        type : String
    },
    creatorName : {
        type : String , 
        require : true 
    },
    creatorEmail : {
        type : String , 
        require : true
    },
    description : {
        type : String 
    },
    image : {
        type : String 
    },
    sold : {
        type : Number
    }

}); 

const courseModel = mongoose.model('courseModel' , courseSchema); 

// module.exports = courseModel ; 
export default courseModel;