import { Router } from "express";
import {getProducts,postSaveProds,getProductsById,setProductById,delProductById} from "../controllers/controllerProd.js"

const routerProd = new Router ();

routerProd.post('/newProd',postSaveProds)
routerProd.get('/allProds',getProducts)
routerProd.get('/getProd/:id',getProductsById)
routerProd.put('/setProd/:id',setProductById)
routerProd.delete('/deleteProd/:id',delProductById)

export default routerProd;