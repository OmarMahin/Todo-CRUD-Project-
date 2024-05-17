const express = require('express')
const deleteTodoController = require('../../controllers/deleteTodoController')
const getAllTodoController = require('../../controllers/getAllTodosController')
const todoController = require('../../controllers/todoController')
const updateDataController = require('../../controllers/updateDataController')
const routes = express.Router()


routes.post('/todo', todoController)
routes.get('/get_todos', getAllTodoController)
routes.delete('/delete_todo', deleteTodoController)
routes.put('/update_data', updateDataController)

module.exports = routes