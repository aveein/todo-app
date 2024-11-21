const express = require('express')


const router = express.Router();

const {getTodos,createTodos} = require('../controllers/todoController.js');
const { body } = require('express-validator');
const { todoValidationRules, validate } = require('../requests/validator.js');


router.get('/',getTodos);
// todoValidationRules(),validate
router.post('/create',todoValidationRules(),validate,createTodos);



module.exports = router;





