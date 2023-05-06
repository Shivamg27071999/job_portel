import jobModel from "../models/jobModel.js"


//create job code
export const createJobController = async (req, res, next)=>{
    const {company, position,jobType} = req.body
    if(!company||!position){
        next('Please provide all details')
    }
    if(jobType === 'Teaching'){
        res.status(400).send({
            success:false,
            message:"teaching job is not allowed"
        })
    }
    const newJob ={
        company,
        position,
        jobType
    }
    const job = await jobModel.create(newJob)
    res.status(200).json({
        success:true,
        message:'Job created successfully'
    }) 

}

//fetch jobs
export const getJobController = async(req,res,next)=>{
    try{
        const jobs = await jobModel.find()
        res.status(200).json({
            success:'true',
            jobs,
            totalJobs:jobs.length
        })
    }catch(err){

    }
}


//update job
export const updatejobController = async(req,res,next)=>{
    try{
        const {id} = req.params
        const {workLocation, position}= req.body
        if(!workLocation||!position){
            next('please provide all details')
        }

        const job = await jobModel.findOne({_id:id})
        if(!id){
            next(`job id is not valid ${id}`)
        }
        const updateJob = await jobModel.findOneAndUpdate({_id:id},{
            workLocation:workLocation,
            position:position
        })

        res.status(200).json({
            updateJob
        })
    }catch(err){
        next('error in controller')
    }
}

//delete job
export const deletejobController = async(req,res,next)=>{
    try{
        const {id} = req.params

        const job = await jobModel.findOne({_id:id})

        if(!job){
            next('job not found')
        }

        await job.deleteOne({_id:id});

        res.status(200).json({
            message:'successfuly delete job',
            success:true
        })
    }catch(err){
        next('error in delete controller')
    }
}