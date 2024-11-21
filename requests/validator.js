const { body, validationResult } = require('express-validator')

const todoValidationRules = () => {
  
  return [
      body('title').notEmpty().withMessage('Title is Required'),
      body('description').notEmpty().withMessage('Description is Required'),
      body('due_date').notEmpty().withMessage('Due Date is Required'),
  ]
}

const validate = (req, res, next) => {
  console.log(req.body)
  const errors = validationResult(req)
   
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() })
  }

  next()
}

module.exports = {
  todoValidationRules,
  validate,
}