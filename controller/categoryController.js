const Category = require('../model/category')

// to insert data in category

exports.postCategory = async(req,res) => {
    let category = new Category(req.body)
    category = await category.save()

    if (!category){
        return res.status(400).json({error : "something went wrong "})
    }

    res.send(category)

}