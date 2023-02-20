let document = require('../db/db');

/**
 * @description CreateProduct to add new document in collection
 * @param {*} req 
 * @param {*} res 
 */
const CreateProduct = (req,res) => {
    let name = req.body.name;
    let price = req.body.price;
    let color = req.body.color;

    let product = new document.user({
        name : name,
        price : price,
        color : color
    });

    product.save((err,data)=>{
        res.send(JSON.stringify(data))
        console.log("Data inserted Successfully");
        console.log(data);
    })
}



const getProductByname = async (req,res)=>{
    let name = req.params.name
    let doc = await document.user.findById(id)
    res.status(200).JSON(doc)
}

const getProductById = async(req,res)=>{
    let id = req.params.id
    let doc = await document.user.findById(id)
    res.status(200).JSON(doc)
}

const updateProductById = async(req,res)=>{
    let id = req.params.id
    let name = req.body.name;
    let price = req.body.price;
    let color = req.body.color;

    let doc = await document.user.findById('');
    let update = doc.update({
        name : name,
        price : price,
        color : color
    })
    console.log(`Upadtes name is ${name}`);
    res.send(200).JSON();
}


const deleteProduct = async (req,res)=>{
    let id = req.params.id;
    let doc = await document.user.findByIdAndDelete(id)
    console.log(`Deleted Product is ${doc}`);
    res.send(200).JSON();
}

module.exports = {
    CreateProduct,
    getProductById,
    getProductByname,
    getProductByname,
    updateProductById,
    deleteProduct
}