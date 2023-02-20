// const { response } = require("express");
/**
 * @author Ankita Bhujbal
 * 
 */

let router = require("../controller/productController");
let con = require("../db/dbconn");

/**
 * @description - function for displaying all records from mongoDB
 * @param {*} req 
 * @param {*} res 
 */

let getallproducts = async (req, res) => {
    try {
        let query = await con.find();
        res.json(query)

    }
    catch (err) {
        res.status(200).send('Error', err);
    }
};
/**
 * @description - function for displaying all records from mongoDB
 * @param {*} req 
 * @param {*} res 
 */
let getproductbyid = async (req, res) => {
    let objid = req.params.id;
    try {
        let query = await con.findById(objid);
        res.json(query);

    }
    catch (err) {
        res.send("Error:", err)
    }
};
/**
 * @description - function for displaying all records from mongoDB
 * @param {*} req 
 * @param {*} res 
 */
let addproduct = async (req, res) => {
    try {
        let name = req.body.name;
        let price = req.body.price;
        let category = req.body.category;
        let description = req.body.description;
        let query = await con.create({ name, price, category, description });
        res.status(200).json(query);
    }
    catch (err) {
        console.log(err);
    }
};
/**
 * @description - function for displaying all records from mongoDB
 * @param {*} req 
 * @param {*} res 
 */
let updateProductById = (req, res) => {

    let id = req.params.id
    let name = req.body.name;
    let price = req.body.price;
    let category = req.body.category;
    let description = req.body.description;
    const results = async () => {
        const ID = await con.findById(id)
        const show = await ID.updateOne({ name: name, price: price, category: category, description: description })
        res.status(200).json(show)
    }
}
const deleteByid = async (req, res) => {
    try {
        const ID = req.params.id;
        const obj = await con.findById(ID)
        const result = await obj.remove()
        res.status(200).json(result)
    }
    catch (err) {
        console.log(err);
    }
};

module.exports = {
    getallproducts,
    getproductbyid,
    addproduct,
    updateProductById,
    deleteByid
}