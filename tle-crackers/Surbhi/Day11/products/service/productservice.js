const { resolve } = require('dns/promises');
const { response } = require('express');
const router = require('../controller/productcontoller')
const connection = require('../db/mongoconnection');
const { product } = require('../db/mongoconnection')
// const getProductList = (req, res) => {

// }

const insertProductInfo = (req, res) => {
    let name = req.body.name;
    let category = req.body.category;
    let price = req.body.price;
    let color = req.body.color;
    let description = req.body.description;
    //  const query=''
    let myobj = { name, category, color, price, description };
    //save into database
    product.create(myobj, (err, result) => {
        res.send(result)
    })
}
//view Record
const getProductList = (req, res) => {
    const results = async () => {
        const result2 = await product.find({})
        res.status(200).json(result2)
    }

    results()
}
//get record by name
const getProductByName = (req, res) => {
    let name1 = req.params.name;
    try {
        const results = async () => {
            const result2 = await product.find({ name: name1 })
            res.status(200).json(result2)
        }
        results();
    }
    catch (err) {
        response.send("Error:", err)
    }
}



const getProductById = (req, res) => {
    let id = req.params.id;
    try {
        const results = async () => {
            const result2 = await product.find({ _id: id })
            res.status(200).json(result2)
        }
        results();
    }
    catch (err) {
        response.send("Error:", err)
    }
}
const updateProductDetailsById = (req, res) => {
    let id = req.params.id;
    let color = req.body.color;
    try {
        const results = async () => {
            const obj = await product.findById(id);
            const result2 = await obj.updateOne({ color: color });
            res.status(200).json(result2);

        }
        results();
    }
    catch {
        response.send("Error:", err);
    }
}
const deleteProductByName = (req, res) => {
    let name = req.params.name;
    try {
        const results = async () => {
            const results2=await product.deleteOne({name : name});
            res.status(200).json(results2)
        }
        results();
    }
    catch (err) {
        response.send("Error:", err)
    }


};


module.exports = {
    insertProductInfo,
    getProductList,
    getProductByName,
    getProductById,
    updateProductDetailsById,
    deleteProductByName

}
