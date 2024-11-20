const express = require('express')

const router = express.Router();

const {getTodos,createTodos} = require('../controllers/todoController.js');


router.get('/',getTodos);




module.exports = router;




