const express = require('express')
const { postProduct, getAllProducts, productDetails, updateProduct, deleteProduct } = require('../controller/productController')
const upload = require('../middleware/file-upload')
const { productValidationMethod } = require('../validation/productValidation')
const {productValidationSchema} = require('../validation/productValidation')
const router = express.Router()

router.post('/postproduct',upload.single('product_image'),productValidationSchema,productValidationMethod,postProduct)

router.get('/products',getAllProducts)
router.get('/productdetails/:product_id', 
productDetails)
router.put('/product/update/:product_id',updateProduct)
router.delete('/product/delete/:product_id',deleteProduct)



module.exports = router