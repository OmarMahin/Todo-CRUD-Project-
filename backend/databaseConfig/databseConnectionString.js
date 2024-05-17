const mongoose = require("mongoose")

let dbConnect = () => {
	mongoose
		.connect(
			"mongodb+srv://omar:omar020809@todo.znilxe0.mongodb.net/?retryWrites=true&w=majority&appName=todo"
		)
		.then(() => {
			console.log("Datatabase connected sucessfully.")
		})
}


module.exports = dbConnect