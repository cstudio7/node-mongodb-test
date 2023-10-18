var express = require('express');
var bodyParser = require('body-parser');
var ProductModel = require('./../models/product');
var CategoryProduct = require('./../models/category');
var router = express.Router();

// SETUP BODYPARSER
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

router.route('/products')
    .post( async (req, res) =>  {
       try{
           const product = req.body
           await ProductModel.create(product);
           return res.status(200).json({
               status: 'success',
               data: {
                   product,
                   message: 'Purchase successful'
               },
           });
       }catch (e) {
           return res.status(400).json({
               status: 'Bad Request',
               error: 'Purchase unsuccessful'
           });
       }
    })

    .get(async (req, res) =>  {
        try{
            const products = await ProductModel.find()
            return res.status(404).json(products)
        } catch(e){
            res.status(400).send('Ops Something Went Wrong. Try again.')
        }})


    .delete(async (req, res) =>  {
        try{
            const products = await ProductModel.deleteMany({})
            return res.status(404).json(products)
        } catch(e){
            res.status(400).send('Ops Something Went Wrong. Try again.')
        }});

router.route('/products/:id')

    .put(async (req, res) =>  {
        try{
            const myObject = Object.assign({}, req.body);
            const updatedProduct = await ProductModel.findByIdAndUpdate( req.params.id, {$set:{ ...myObject, updatedAt:  Date.now()}}).exec();
            if(updatedProduct) return res.status(200).send("Your Product has been Updated")
            else return res.status(404).send('Product not found')
        }catch (e) {
            res.status(500).send('Ops Something Went Wrong. Try again.')
        }

    })

    .get(async (req, res) =>  {
        try{
            const Product = await ProductModel.findOne({_id: req.params.id});
            if(Product) return res.status(200).send("Products")
            else return res.status(404).send('Product not found')
        }catch (e) {
            res.status(500).send('Ops Something Went Wrong. Try again.')
        }

    })


    .delete(async (req, res) =>  {
        try{
           const Product =  ProductModel.deleteOne({_id: req.params.id});
            if(Product) return res.status(200).send("Product deleted successful!")
        }catch (error) {
            res.status(500).send("Unable to find product by id. Failed to remove. ERROR: " + error)
        }
    });

router.route('/product')
    .get(async (req, res) =>  {
        try{
            const Product = await ProductModel.findOne({name: req.query.name});
            if(Product) return res.status(200).send(Product)
            else return res.status(404).send('Product not found')
        }catch (e) {
            res.status(500).send('Ops Something Went Wrong. Try again.')
        }
    })
//export
module.exports = router;