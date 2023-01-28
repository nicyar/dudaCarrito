import { Router } from "express";
import {postCreateCart,postAddToCart,getAllCarts,getCartById,getProdsInCart} from "../controllers/controllerCart.js";


const routerCart = new Router ();

routerCart.post('/newCart',postCreateCart)
routerCart.post('/addCart',postAddToCart)
routerCart.get('/viewCart',getAllCarts)
routerCart.get('/viewCart/:id',getCartById)
routerCart.get('/viewCart/:id/:idProd',getProdsInCart)


export default routerCart;