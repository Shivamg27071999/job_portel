

import mongoose from "mongoose";
const connectDB = async()=> {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL).then(()=>{
            console.log("successfully connected to mongodb")
        })
    } catch (error) {
        console.log(`error in connection ${error}`)
    }
}
export default connectDB