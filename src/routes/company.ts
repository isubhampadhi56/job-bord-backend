import { Router } from "express";
import {getCompanies, createCompany, getCompanyById, updateCompanyById, deleteCompanyById, searchCompany} from "../controller/company"
const app = Router();

app.get('/', getCompanies)
app.post('/', createCompany)
app.get('/:companyId', getCompanyById)
app.put('/:companyId', updateCompanyById)
app.delete('/:companyId', deleteCompanyById)
app.get('/search', searchCompany)

export {
    app as companyRouter
}