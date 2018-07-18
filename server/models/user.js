const mongoose =require('mongoose');

var User= mongoose.model('User',{
	username : 
	{
		type: String,
		require:true,
		minlength:1,
		trim:true

	},
	password:
	{
		type : String,
		default: null
	}
});


module.exports = {User};