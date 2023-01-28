import MongoContainer from "../container/MongoContainer.js";
import { db, CartsModel } from "../schema/schema.js";


class CartsDaos extends MongoContainer {
  constructor() {
    super(db, CartsModel);
  }

  async createCart(req, res) {
    try {
      const newProduct = req.body;
      const newprod = this.model(newProduct,newProduct.quantity=1)
      return await newprod.save()
    } catch (error) {
      console.log(error)
    }
    
  }

  async addToCart(req, res) {
    try {
    const cartFound =await this.model.this.getById(req.params.id)
    const prodNew = req.body;
    if (cartFound && prodNew) {
      const inCart = cartFound.products.find(product => product.name === prodNew.name)
      if (inCart) {
        inCart.quantity+=1
      } else {
        prodNew.updateOne(
          {$push:{...prodNew}}
        )
      }
    } else {
      await this.save(prodNew);
      prodNew.quintity = 1
    }
    } catch (error) {
      console.log(error)
    }
 
  }
  // async addToCart(req, res) {
  //   try {
  //   const cartFound =await this.model.this.getById(req.params.id)
  //   const prodNew = req.body;
  //   if (cartFound && prodNew) {
  //     const inCart = cartFound.products.find(product => product.name === prodNew.name)
  //     if (inCart) {
  //      const update= await this.model.updateOne(
  //         {quintity:+1}
  //       )
  //     } else {
  //       const pepe = await this.model.update(
  //         {$push: {...prodNew,prodNew.quantity=1}}
  //       )
  //     }
  //   } else {
  //     await this.save(prodNew);
  //     prodNew.quintity = 1
  //   }
  //   } catch (error) {
  //     console.log(error)
  //   }
 
  // }
  async getCarts(req,res){
    try{
      const prods = await this.model.find({})
      return prods
    }
    catch{
      console.log(error)
    }
  }

  async getCartsId(req, res) {
    try {
      const id = req.params.id
      const cart = await this.model.findOne({ _id: id })
      return cart
    } catch (error) {
      console.log(error)
    }
  }

  async getCartsProds(req, res) {
    try {
      const id = req.params.id
      const idProd = req.params.idProd
      const carrito = this.getById(id)
      const prod = carrito.find(prod => prod.id === idProd)
      return res.json({ productFound: prod.products })
    } catch (error) {
      console.log(error);
    }
  }

}

export default CartsDaos;