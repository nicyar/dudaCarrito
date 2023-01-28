import { Router } from "express";
import routerCart from "./routerCart.js"
import routerProd from "./routerProducts.js";

const appRouter = new Router ();

appRouter.use('/cart',routerCart)
appRouter.use('/prod',routerProd)

export default appRouter;