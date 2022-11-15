const router=require("express").Router();

const{getTodos,createTodo,updateToDo,deleteTodo}=require("./controller/toDo");
router.get("/",(req,res)=>{
    res.send("lets build crud API");
})
router.get("/todos", getTodos);
router.post("/todos",createTodo);
router.put("/todos/:todoID",updateToDo);
router.delete("/todos/:todoID", deleteTodo);


module.exports=router;
