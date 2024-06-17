const mongoose = require("mongoose")
require('dotenv').config()

let dbConnect = () => {
	mongoose
		.connect(
			`${process.env.DB_URL}`
		)
		.then(() => {
			console.log("Datatabase connected sucessfully.")
		})
}


module.exports = dbConnect