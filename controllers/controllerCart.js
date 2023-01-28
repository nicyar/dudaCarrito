import CartsDaos from "../models/daos/cartsDaos.js";
// import ProductsDaos from "../models/daos/productsDaos";

//aca deberia usar los req.body

const ApiCart = new CartsDaos ()


const postCreateCart = async (req,res)=>{
    const datos = await ApiCart.createCart(req,res)
    res.status(201).json(datos)
}

const postAddToCart=async(req,res)=>{
    await ApiCart.addToCart(req,res);
    res.status(201)
}


const getAllCarts= async (req,res) =>{
    const carts = await ApiCart.getCarts(req,res)
    res.status(200).json(carts)
}

const getCartById=async(req,res)=>{
    const carrito = await ApiCart.getById(req,res)
    res.status(200).json(carrito)
}

const getProdsInCart=async(req,res)=>{
    const prods = await ApiCart.getCartsProds(req,res)
    res.status(200).json(prods)
}


export {postCreateCart,postAddToCart,getAllCarts,getCartById,getProdsInCart};