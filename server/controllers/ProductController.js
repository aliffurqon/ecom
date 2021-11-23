const { product , user } = require('../models')

class ProductController {
    static async getProduct(req, res) {
        try {
            const { id } = req.userData
            let products = await product.findAll({
                where: {
                    userId: id
                },
                include: [
                    user
                ]
            });

            res.status(200).json(products)

        } catch (e) {
            res.status(500).json(e)
        }
    }

    static async addProduct(req, res) {
        try {
            const { name, type, image, price, stock } = req.body

            const { id } = req.userData
            let result = await product.create({
                name, type, image, price, stock, userId: id
            })
            res.status(201).json(result)

        } catch (e) {
            res.status(500).json(e)
        }
    }

    static findById(req, res) {

    }

    static deleteProduct(req, res) {

    }

    static editProduct(req, res) {

    }
    static buyProduct(req, res) {

    }

}

module.exports = ProductController;