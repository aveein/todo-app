

const getTodos = (req, res) => {
    res.render('welcome');
};



const  createTodos = async (req, res) => {
  
    // const todo = await Todo.create({ name: req.title,description: req.description,due_date:req.due_date });
    res.json(req.body);
};


module.exports={
    getTodos,
    createTodos
}

