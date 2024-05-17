const todoSchema = require("../model/todoSchema")

let todoController = (req,res)=>{
    let {data} = req.body
    let todoData = new todoSchema({
        todo: data
    })

    try{
        todoData.save()
    } catch(error){
        console.log(error)
    }
    
    res.send(data)
}

module.exports = todoController