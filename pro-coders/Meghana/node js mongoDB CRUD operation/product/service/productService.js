/**
 * @author:Meghana
 * @description:server
 */

const express = require('express');
const http = require('http');
const router = require('../controller/productController')
const mongoose = require('mongoose');
let connection = require('../database/mongodb');
mongoose.set('strictQuery', false)


/**
 * @description:getting the list of product
 * @param {*} req 
 * @param {*} res 
 */
let getAllProductlist = async (req, res) => {
    try {
        let result = await connection.find();
        res.json(result);
    }
    catch (err) {
        res.send(err)
    }
};

/**
 * @description:define records for insert
 * @param {*} req 
 * @param {*} res 
 */

let insertIntoProduct = async (req, res) => {

    let name = req.body.name;
    let price = req.body.price;
    let catagory = req.body.catagory;
    try {
        let result = await connection.insertMany({ name, price, catagory });
        res.status(200).json(result);
    } catch (err) {
        console.log(err)
    }
}

/**
 * @description:find the product by id
 * @param {*} req 
 * @param {*} res 
 */
const getProductDetailsById = async (req, res) => {
    let id = req.body.id;
    try {
        let result = await connection.findById(id);
        res.status(200).json(result);
    } catch (err) {
        res.send(err);
    }
}

/**
 * @description:update the product details
 * @param {*} req 
 * @param {*} res 
 */
const updateProductDetails = async (req, res) => {
    let id = req.body.id;
    let price = req.body.price;
    let Description = req.body.Description;
    try {
        let result = await connection.updateOne({ price, Description });
        res.status(200).json(result);
    } catch (err) {
        res.send(err);
    }
}

/**
 * @description:delete the product details by id
 * @param {*} req 
 * @param {*} res 
 */
const deleteProductById = async (req, res) => {
    let id = req.body.id;
    try {
        let result = await connection.findByIdAndDelete(id);
        console.log("Deleted")
        res.status(200).json(result);
    } catch (err) {
        res.send(err);
    }
}
/**
 * @description:Exporting all the methods for routing
 */

module.exports = {
    getAllProductlist,
    insertIntoProduct,
    getProductDetailsById,
    updateProductDetails,
    deleteProductById
}