import Todo from './models/Todo.js'

export const getTodos = (req, res) => {
    res.render('welcome');
};



export const createTodos = async (req, res) => {
    console.log(req.body)
    // const todo = await Todo.create({ name: req.title,description: req.description,due_date:req.due_date });
    res.json(req.body);
};


