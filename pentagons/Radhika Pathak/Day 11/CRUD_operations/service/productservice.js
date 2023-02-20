const { privateDecrypt } = require('crypto');
const { response } = require('express');
const router = require('../controller/productcontroller');
const product = require('../db/connection');
var connection = require('../db/connection');
/**
 * @author Radhika Pathak
 */
/**
 * @description get all product list
 * @param {*} req 
 * @param {*} res 
 */
        const getDetails = async (req,res)=>{
            try{
                const product_details = await product.find();
                res.json(product_details);
            }
            catch(error){
                res.json({message: error});
            }
         };
                

/**
 * @description create new product 
 * @param {*} req 
 * @param {*} res 
 */
const insertProduct = async (req,res)=>{
    let name = req.body.name;
    let price = req.body.price;
    let brand = req.body.brand;
    let ram = req.body.ram;
    let data = {name,price,brand,ram};
    //to store into database
    try{
   product.create(data,(err,result)=>{
        res.send(result);
    })
    }
    catch(error){
        res.status(400).send(error);
    }
}

/**
 * @description update product details with given details
 * @param {*} req 
 * @param {*} res 
 */
const updateProduct = async(req,res)=>{
        let name = req.body.name;
        let price = req.body.price;
        let brand = req.body.brand;
        let ram = req.body.ram;
        let data = {name,price,brand,ram};
        try{
            const updated_details = await product.findByIdAndUpdate({_id: req.params.id},data);
            res.json(updated_details);
        }
        catch(error)
        {
            res.json({message: error});
        }
};


/**
 * @description get details of products with given id
 * @param {*} req 
 * @param {*} res 
 */
const getProductDetailsById = async (req,res)=>{
    try{
        const product_result = await product.findById(req.params.id);
        res.json(product_result);
    }
    catch(error){
        res.json({message:error});
    }
};

/**
 * @description delete record of particular product with given id
 * @param {*} req 
 * @param {*} res 
 */
const deleteById = async(req,res)=>{
    try{
        const removeProduct = await product.findByIdAndDelete(req.params.id);
        res.json(removeProduct);
    }
    catch(error)
    {
        res.json({message: error});
    }
};

/**
 * @description delete all product details
 * @param {*} req 
 * @param {*} res 
 */
const deleteAll = async(req,res)=>{
    try{
        const removeProduct = await product.deleteMany();
        res.json(removeProduct);
    }
    catch(error)
    {
        res.json({message: error});
    }
};

/**
 * @description search a product by specific name
 * @param {*} req 
 * @param {*} res 
 */
const getProductByName = (req,res)=>{
    let search_name = req.params.name;
    try
    {
        const results = async()=>{
            const ans = await product.find({name:search_name});
            res.status(200).json(ans);
        }
        results();
    }
    catch(err){
        response.send("Error:",err);
    }
}

module.exports = {getDetails,
    insertProduct,
    getProductByName,
    getProductDetailsById,
    updateProduct,
    deleteById,
    deleteAll
};