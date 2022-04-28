const express = require('express')
const router = express.Router()
const {postCategory, getCategories, findCategory, updateCategory, deletecategory} = require('../controller/categoryController')
const { categoryValidationSchema, categoryValidationSchemaMethod } = require('../validation/categoryValidation')

router.post('/addcategory',postCategory, categoryValidationSchema , categoryValidationSchemaMethod)
router.get('/categories',getCategories)
router.get('/findcategory/:id',findCategory)
router.put('/updatecategory/:id',updateCategory)
router.delete('/deletecategory/:category_id',deletecategory)







module.exports = router
