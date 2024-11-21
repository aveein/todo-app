const express = require('express')


const router = express.Router();

const {getTodos,createTodos, Filtertodos, updateStatus, editTodo, updateTodo, deleteTodo} = require('../controllers/todoController.js');

//validators
const { todoValidationRules, validate } = require('../requests/validator.js');


router.get('/',getTodos);

router.get('/filter-todos',Filtertodos);

router.post('/create',todoValidationRules(),validate,createTodos);

router.get('/edit/:id',editTodo);

router.put('/update/:id',todoValidationRules(),validate,updateTodo);

router.post('/update/status',updateStatus);


router.delete('/delete/:id',deleteTodo);

module.exports = router;





