import ProductsDaos from "../models/daos/productsDaos.js";

const ApiProd = new ProductsDaos();

const getProducts = async (req,res)=>{
    const prods = await ApiProd.getAll()
    res.status(200).json(prods)
}

const postSaveProds = async (req,res)=>{
    const product = req.body;
    const save = await ApiProd.save(product);
    res.status(200).json(save);
}

const getProductsById = async (req,res)=>{
    const id = req.params.id;
    const prod = await ApiProd.getById(id)
    res.status(200).json(prod);
}

const setProductById = async (req,res)=>{
    const id = req.params.id;
    const product = req.body;
    const prod = await ApiProd.update(id,product);
    res.status(200).json(prod)
}

const delProductById=async(req,res)=>{
    const id = req.params.id;
    const del = await ApiProd.delete(id)
    res.status(200).json(del)
}


export {getProducts,postSaveProds,getProductsById,setProductById,delProductById}