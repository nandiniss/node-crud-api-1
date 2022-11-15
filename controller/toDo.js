const Todo = require("../Model/Todo");

const getTodos = (req, res) => {
    Todo.find((err, todos) => {
      if (err) {
        res.send(err);
      }
      res.json(todos);
    });
  };

const createTodo=(req,res)=>{
    const todo=new Todo({
        title:req.body.title,
        description:req.body.description,
        completed:req.body.completed,
    });

    todo.save((err,todo)=>{
        if(err){
            res.send(err);
        }
        res.json(todo);
    });
  };


const updateToDo=(req,res)=>{
    Todo.findOneAndUpdate(
        {_id:req.params.todoID},
        {
            $set:{
                title:req.body.title,
                description:req.body.description,
                completed:req.body.completed
            },

        },
        {new:true},
        (err,Todo)=>{
            if(err){
                res.send(err);
            }
            else res.json(Todo);
        }
    );
};

// const deleteToDo=(req,res)=>{
//     Todo.deleteOne({_id:req.params.todoID})
//     .then(()=>res.json({message:"ToDo Deleted"}))
//     .catch((err)=>res.send(err));
// };

const deleteTodo = (req, res) => {
    Todo.deleteOne({ _id: req.params.todoID })
      .then(() => res.json({ message: "Todo Deleted" }))
      .catch((err) => res.send(err));
  };

  module.exports = {
    getTodos,
    createTodo,
    updateToDo,
    deleteTodo,
  };