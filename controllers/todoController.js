const { Todo } = require('../models')

const getTodos = (req, res) => {
    res.render('welcome');
};



const  createTodos = async (req, res) => {
    let data = req.body;
    const todo = await Todo.create({ name: data.title,description: data.description,due_date:data.due_date });
    res.redirect('back'); 
};


module.exports={
    getTodos,
    createTodos
}

