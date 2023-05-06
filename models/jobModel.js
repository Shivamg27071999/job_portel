import mongoose from "mongoose";
const jobSchema = new mongoose.Schema({
    company:{
        type:String,
        required:[true,'Company name is required']
    },
    position:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:["pending","reject","interview"],
        default:"pending"
    },
    workLocation:{
        type:String,
        required:true,
        default: 'Delhi'
    },
    workType:{
        type:String,
        default:'Remote'
    },
    createdby:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    },
    jobType:{
        type:String,
        default:"Development",
        required:[true,"job type is developemnt"]
    }
},
{timestamps:true}
)

export default mongoose.model('Job',jobSchema)