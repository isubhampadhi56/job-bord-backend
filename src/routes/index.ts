import { Router } from "express";
import { authRouter } from "./auth";
import {companyRouter} from "./company";
import { jobRouter } from "./job";
import { userRouter } from "./user";

const app = Router(); 

app.use("/company", companyRouter);
app.use("/job", jobRouter);
app.use("/user", userRouter);
app.use("/auth", authRouter);

export{
    app as coreRouterV1
}