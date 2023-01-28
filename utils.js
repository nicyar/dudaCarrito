export const validatePost = () => {
    return (req, res, next) => {
        const productoNuevo = req.body;
        if (productoNuevo.name && productoNuevo.price && productoNuevo.photo && 
            productoNuevo.desc && productoNuevo.code && productoNuevo.stock) {
                next();
        } else {
            return res.status(400).send({ error: "parametros incorrectos" });
        }
    }
}
export const validatePut = () => {
    return (req, res, next) => {
        const prodMod = req.body;
        const format = prodMod.name && prodMod.price && prodMod.photo && 
        prodMod.desc && prodMod.code && prodMod.stock && 
        Object.keys(prodMod).length === 6 ? true : null;

        if (format) {
            next();
        } else {
            res.send({error: "El formato del producto no es correcto"})
        }
    }
}

export const validateAddToCart = () => {
    return (req, res, next) => {
        const product = req.body;
        if (product.name && product.price && product.photo && 
            product.desc && product.code && product.stock) {
                next();
        } else {
            return res.status(400).send({error: "parametros incorrectos"})
        }
    }
}
