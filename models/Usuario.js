var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//crypto
var UsuarioSchema = new Schema({
	username:{
		type:String,
		unique:true,
		sparse:true,
		match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Introduzca un email valido']
	},
	password:{
		type:String
	}
});

module.exports = mongoose.model("Usuario",UsuarioSchema);
