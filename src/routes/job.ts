import { Router } from "express";
import {getJobs, createJobs,getJobById,updateJobId,applyJobById,getApplications,deleteJobById,searchJobs } from "../controller/job"
const app = Router();

app.get('/', getJobs)
app.post('/', createJobs)
app.get('/:jobId', getJobById)
app.put('/:jobId', updateJobId)
app.post('/:jobId/apply', applyJobById)
app.get('/:jobId/applications', getApplications)
app.delete('/:jobId', deleteJobById)
app.get('/search', searchJobs)

export {
    app as jobRouter
}


