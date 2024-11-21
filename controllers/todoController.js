const { Todo } = require('../models')

const { query, validationResult } = require('express-validator');


const getTodos = (req, res) => {

    res.render('welcome');
};

const  Filtertodos = async (req, res) => {
 
 
   try{
    const todos = await Todo.findAll();
    let views = res.renderFile('')
    res.status(200).json({data:views}); 
   }catch(error){
    res.status(500).json({message:error.message}); 
   }

};

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


module.exports={
    getTodos,
    createTodos,
    Filtertodos
}

