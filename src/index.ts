import express from 'express';
import { coreRouterV1 } from './routes';
const app = express();
const PORT = '3000';
app.use(express.json());
app.use("/api/v1",coreRouterV1);

app.listen(PORT, ()=>{console.log(`Server Started on Port ${PORT}`);});