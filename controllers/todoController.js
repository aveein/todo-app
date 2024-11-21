const { Todo } = require('../models')
var ejs = require('ejs');
const { Op } = require('sequelize');


//render index page
const getTodos = (req, res) => {

    res.render('welcome');
};

//filter todo
const  Filtertodos = async (req, res) => {
 
 
   
   try{
    let todos = [];
    if( req.query.status === '0' || req.query.status === '1') {
         todos = await Todo.findAll({
            where: {
                status: {
                  [Op.eq]: req.query.status,
                },
         }
         });
    }else{

         todos = await Todo.findAll();
    }
    
    ejs.renderFile('views/todos.ejs',{todos:todos}, function(err, data) {
       
        res.status(200).json({views:data});
    });


   
   }catch(error){
    res.status(500).json({message:error.message}); 
   }

};
//create todo
const  createTodos = async (req, res) => {
 
    let data = req.body;
   try{
    const todo = await Todo.create({ 
        name: data.title,
        description: data.description,
        due_date:data.due_date });
    res.status(200).json({message:'Successfully Added'}); 
   }catch(error){
    res.status(500).json({message:error.message}); 
   }

};
//status update
const updateStatus = async (req,res) => {
    try{

        const todo = await Todo.update({
            status:req.body.status
        },{
            where: {
              id: req.body.id,
            },
          });
     
        res.json({"status":"Updated Successfully"});

       }catch(error){
        res.status(500).json({message:error.message}); 
       }
}
//edit todo
const editTodo = async (req,res) => {
    try{

        const todo = await Todo.findByPk(req.params.id);
          
     

        res.json(todo)

       }catch(error){
        res.status(500).json({message:error.message}); 
       }
}
//update todo
const updateTodo = async (req,res) => {
    try{

        const todo = await Todo.update({
            name:req.body.title,
            description:req.body.description,
            due_date: req.body.due_date

        },{
            where: {
              id: req.params.id
            },
          });
     
     
          
     

        res.json(todo)

       }catch(error){
        res.status(500).json({message:error.message}); 
       }
}

//delete todo
const deleteTodo = async (req,res) => {

    try{
        const todo = await Todo.findByPk(req.params.id);
 
        await todo.destroy();

        res.json({'message':'Deleted Successfully'})

    }catch(e){
        res.status(500).json({message:error.message}); 
    }
  


}
module.exports={
    getTodos,
    createTodos,
    editTodo,
    Filtertodos,
    updateStatus,
    updateTodo,
    deleteTodo
}

