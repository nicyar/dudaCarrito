import mongoose from "mongoose";

class MongoContainer{
    constructor(db,model){
       this.db=db;
       this.model=model;
    }

    static async disconnect() {
        await mongoose.disconnect();
      }

    async getAll(){
        const documents = await this.model.find({})
        return documents
    }
    async save(item){
        const newDocument=this.model(item);
        return await newDocument.save()
    }

    async getById(id) {
        const document = await this.model.findOne({ _id: id }, { __v: 0 });
        if (!document) {
          const message = `Resource with id ${id} does not exist in our records`;
          return message
        }
        return document;
      }
    
      async update(id, item) {
        const updatedDocument = await this.model.updateOne(
          { _id: id },
          { $set: { ...item } }
        );
        if (!updatedDocument.matchedCount) {
          const message = `Resource with id ${id} does not exist in our records`;
          return message
        }
        return updatedDocument;
      }
      async delete(id) {
        return await this.model.deleteOne({ _id: id });
      }
//tendria que cambiar el code por el _id pero por ahora vamos a dejarlo asi 

}


export default MongoContainer;