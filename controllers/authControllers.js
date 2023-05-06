import userModel from '../models/userModel.js'
import bcrypt from 'bcryptjs'


//registeration part
export const registerController = async (req, res, next)=>{
    try{
        const {name, email, password} = req.body

        //validate the information

        if(!name){
            next('name is required')
        }
        if(!email){
           next('provide email')
        }
        if(!password){
            next('provide password')
        }
        //check record present in data
        const existingUser = await userModel.findOne({email})
        if(existingUser){
            return res.status(200).send({success:true,message:'email already register'})
        }
        //store the data
        const newUser={
            name:name,
            email:email,
            password:bcrypt.hashSync(password)
        }
        const user = userModel.create(newUser)
        return res.status(200).send({success:true,message:'register success', user})
    }catch(err){
        next('error in register controller')
    }
}


//login part
export const loginController =async (req,res,next)=>{
    try{
        const {email, password} = req.body
        //validate the inputs
        if(!email||!password){
            next('provide all details')
        }
        //check the dbms user credential avail or not
        const user = await userModel.findOne({email})
        if(!user){
            next('enter correct email password')
        }


        // check password correct ot not
        const isPassword = await bcrypt.compareSync(password, user.password)
        if(!isPassword){
            // next('incorrect password')
            res.status(400).json({
                success:true,
                message:'incorrect password'
            })
        }

        res.status(200).json({
            success:true,
            message:'successfully login',
            user
        })
    }catch(err){

    }
}