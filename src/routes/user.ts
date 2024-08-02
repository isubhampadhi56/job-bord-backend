import { Router } from "express";
import {getUserProfile, updateProfile, getApplications, getSavedJob, deleteSavedJob} from "../controller/user"
const app = Router();

app.get('/:username', getUserProfile)
app.put('/updateProfile', updateProfile)
app.get('/applications', getApplications)
app.post('/savedJob', getSavedJob)
app.delete('/savedJob', deleteSavedJob)

export {
    app as userRouter
}
