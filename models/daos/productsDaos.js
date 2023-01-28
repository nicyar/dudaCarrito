import MongoContainer from "../container/MongoContainer.js";
import { db,ProductsModel } from "../schema/schema.js";


class ProductsDaos extends MongoContainer {
    constructor() {
      super(db,ProductsModel);
    }
}

export default ProductsDaos;