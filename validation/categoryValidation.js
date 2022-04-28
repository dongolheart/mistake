const {check,ValidationResult, validationResult} = require('express-validator')

exports.categoryValidationSchema = [check('category_name', 'Category must not be empty').notEmpty(),
check('category_name') .isLength({min:3}) .withMessage('category name must be at least 3 characters in length')
]




exports.categoryValidationSchemaMethod = (req,res,next) => {
    //finds the validation error in this request and wraps them in an object withhandy fuctions

    const err =  validationResult(req);
    if(!err.isEmpty()){
        return res.status(400).json({
            errors : err.array() .map(error=>error.msg)});
        }
        next ()
    } 