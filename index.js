import express from "express";
import ProductsDaos from "./models/daos/productsDaos.js";
import CartsDaos from "./models/daos/cartsDaos.js";
//import { validatePost,validatePut,validateAddToCart } from "./utils.js"; 
import appRouter from "./router/appRouter.js";

const app = express();

app.use(express.json());
//app.use(cookieParser());
//app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use(appRouter)

app.listen(8080, () => {
    console.log("servidor corriendo el el puerto 8080");
})

// app.post('/newProduct', async (req, res) => {
//     try {
//         const prods = req.body
//         if (prods) {
//             ApiProd.save(prods)
//         } else {
//             return `no cumple con el formato`
//         }
//     } catch (error) {
//         console.log(error)
//     }

// })
// app.post('/createCart',async (req,res)=>{
//     return await ApiCart.createCart(req,res)
// })

// app.post('/saveCart/:id',validateAddToCart,async (req,res)=>{
//    return await ApiCart.save(req,res)
// })

// app.get('/getCarts',async(req,res)=>{
//     return await ApiCart.getCarts(req,res)
// })