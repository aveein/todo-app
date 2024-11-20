const express = require('express')

const router = express.Router();

const {getTodos,createTodos} = require('../controllers/todoController.js');


router.get('/',getTodos);

router.post('/create',createTodos);




module.exports = router;




