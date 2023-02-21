/**
 * @author vaishnavee patil
 */
const mongoose = require("mongoose");
const con = require("../database/db");
const router = require("../Controller/productcontroller");
const { req, res } = require("express");
/**
 * It will display all the records in poroduct collection
 * @param {*} req
 * @param {*} res
 */
const getproductlist = async (req, res) => {
  try {
    let data = await con.find();
    res.json(data);
  } catch (err) {
    res.send("Error ", err);
  }
};
/**
 * It will display product by their id.
 * @param {*} req
 * @param {*} res
 */
const getproductbyid = async (req, res) => {
  let objId = req.params.id;
  try {
    let data = await con.findById(objId);
    res.json(data);
  } catch (err) {
    res.send("Error:", err);
  }
};
/**
 * It will insert data in product collection.
 * @param {*} req
 * @param {*} res
 */
const createproduct = async (req, res) => {
  try {
    let name = req.body.name;
    let price = req.body.price;
    let category = req.body.category;
    let result = await con.create({ name, price, category });
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
  }
};
/**
 * It will update a record in a product table.
 * @param {*} req
 * @param {*} res
 */
const updateproduct = async (req, res) => {
  try {
    object = req.params.id;
    record = {
      name: req.body.name,
      age: req.body.age,
    };
    const data = await con.findByIdAndUpdate(object, record);
    res.json(data);
  } catch (err) {
    res.send(err);
  }
};
/**
 * It will delete a single product by its id
 * @param {*} req
 * @param {*} res
 */
const deleteproduct = async (req, res) => {
  try {
    const ID = req.params.id;
    const obj = await con.findById(ID);
    const result = await obj.remove();
    res.json(result);
  } catch (err) {
    console.log(err);
  }
};
/**
 * It will delete all records in product table
 * @param {*} req
 * @param {*} res
 */
const deleteallproduct = async (req, res) => {
  try {
    const status = await con.deleteMany({});
    res.send("your data is deleted successfully");
  } catch (err) {
    res.send(err);
  }
};
module.exports = {
  createproduct,
  getproductlist,
  getproductbyid,
  updateproduct,
  deleteproduct,
  deleteallproduct,
};
