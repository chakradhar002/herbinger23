/**
 * @author:Trupti
 * @description:Server
 */
const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
let route = require('../Controller/productcontroller');
let con = require('../DB/productdatabase');

/**
 * @description: shows all product details with get
 * @param {*} req 
 * @param {*} res 
 */

let getAllProductlist = async (req, res) => {
   try {
      let data = await con.find();
      res.json(data);
   } catch (err) {
      res.send(err)
   }
};

/**
 * @description: insert records into product through postman
 * @param {*} req 
 * @param {*} res 
 */
let createProduct = async (req, res) => {
   // if(err) throw err;

   let name = req.body.name;
   let price = req.body.price;
   let category = req.body.category;
   let description = req.body.description;
   try {
      let data = await con.insertMany({
         name,
         price,
         category,
         description
      });
      res.status(200).json(data);
   } catch (err) {
      res.send('Error' + err);
   }
};

/**
 * @description: shows a product by id which will passed through postman
 * @param {*} req 
 * @param {*} res 
 */

let getbyid = async (req, res) => {
   let id = req.params.id;
   try {
      let data = await con.findById(id);
      res.status(200).json(data);
   } catch (err) {
      res.send('Error :' + err);
   }
};

/**
 * @description: updates product details by id which passed through postman
 * @param {*} req 
 * @param {*} res 
 */

const updateproduct = async (req, res) => {
   let id = req.params.id;
   let price = req.body.price;
   let description = req.body.description;
   try {
      let data = await con.updateOne({
         price,
         description
      });
      res.status(200).json(data);
   } catch (err) {
      res.send('Error :' + err);
   }
};

/**
 * @description: delete product by id which passed through postman
 * @param {*} req 
 * @param {*} res 
 */

const deleteproductbyid = async (req, res) => {
   let {
      id
   } = req.params;
   try {
      let data = await con.findByIdAndDelete(id);
      console.log("Deleted!!")
      res.status(200).json(data);
   } catch (err) {
      res.send("Error :" + err);
   }
}

/**
 * @description: all record from product details
 * @param {*} req 
 * @param {*} res 
 */

const deleteallproduct = async (req, res) => {
   try {
      let data = await con.deleteMany({});
      console.log("Deleted All product!!");
      res.status(200).json(data);
   } catch (err) {
      res.send("Error :" + err);
   }
}

module.exports = {
   getAllProductlist,
   createProduct,
   getbyid,
   updateproduct,
   deleteproductbyid,
   deleteallproduct
};