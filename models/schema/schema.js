import mongoose from "mongoose";


export const db = mongoose.connect("mongodb+srv://matias:matias2001@cluster0.tqiapux.mongodb.net/?retryWrites=true&w=majority")

const productsCollection = 'productos';
const cartsCollection= 'carts';

const productsSchema = new mongoose.Schema({
    name: {type: String, required: true, max: 25},
    price: {type: Number, required: true},
    stock: {type: Number, required: true},
    photo: {type: String, required: true},
    code: {type: String, required: true, max: 10},
    desc: {type: String, required: true, max: 100},
    
})

const cartsSchema = new mongoose.Schema({
    products: {type: [{
        name: {type: String, required: true, max: 25},
        price: {type: Number, required: true},
        stock: {type: Number, required: true},
        photo: {type: String, required: true},
        code: {type: String, required: true, max: 10},
        desc: {type: String, required: true, max: 100},
        quantity: {type: Number, required: true}
    }]},
   
    
} ,{timestamps:true})

export const CartsModel = mongoose.model(cartsCollection,cartsSchema)
export const ProductsModel = mongoose.model(productsCollection,productsSchema)