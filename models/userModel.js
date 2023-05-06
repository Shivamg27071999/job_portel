import mongoose from "mongoose";
import validator from "validator";
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true,'name is required']
    },
    email:{
        type: String,
        required: true,
        unique:true,
        validate:validator.isEmail

    },
    password:{
        type:String,
        required:true
    }
},
{timestamps:true}
)

export default mongoose.model('Users',userSchema)