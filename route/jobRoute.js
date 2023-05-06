import express from "express"
import { createJobController, deletejobController, getJobController, updatejobController } from "../controllers/jobController.js"


const route = express.Router()

route.post('/create-job',createJobController)
route.get('/get-job', getJobController)

//update job
route.patch('/update-jobs/:id',updatejobController)

//delete job
route.delete('/delete-job/:id',deletejobController)

export default route