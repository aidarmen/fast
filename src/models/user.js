const mongoose = require('mongoose')

// Gender: 0 - woman, 1 - man
// Role: 0 - student , 1 - teacher , 2 - admin

const UserSchema = new mongoose.Schema({
	password: {
		type: String,
		require: true
	},
	role: {
		type: Number,
		require: true,
		default: 0
	},
	email: {
		type: String,
		require: true,
		unique: true
	},
	gender: {
		type: Number,
		default: 1
	},
	first_name: {
		type: String,
		default: null
	},
	last_name: {
		type: String,
		default: null
	},
	middle_name: {
		type: String,
		default: null
	},
	phone_number: {
		type: String,
		default: ''
	},
	photo_url: {
		type: String,
		default: ''
	}
})

module.exports = mongoose.model('user', UserSchema)
