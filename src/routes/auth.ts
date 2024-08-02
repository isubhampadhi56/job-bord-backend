import { Router } from "express";
import {login,register,isAuthenticated,logout} from "../controller/auth"
const app = Router();

app.post('/signin', login)
app.post('/signup', register)
app.get('/me', isAuthenticated)
app.get('/logout', logout)

export {
    app as authRouter
}