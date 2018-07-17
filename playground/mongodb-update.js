const {MongoClient , ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp' , (err,db) => {

 	if(err)
	{
		return console.log("Unable to connect to server");
	}

	console.log("connectes to MongoDb Server");

	// db.collection('User').findOneAndUpdate(
	// {

	//  _id : new ObjectID('5b4df8777f54de18f4423815')
	// },
	// {

	// 	$set : {
	// 		name : 'Priyanka Meena'
	// 	}
	// },
	// {
	// returnOriginal: false

	// }).then((result) => {
	// 	console.log(result);
	// });

	db.collection('User').findOneAndUpdate(
	{

	 name : 'Abhimanyu Meena'
	},
	{

		$inc : {
			age : 1
		}
	},
	{
	returnOriginal: false

	}).then((result) => {
		console.log(result);
	});
	

		db.close;


});
