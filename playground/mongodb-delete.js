const {MongoClient , ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp' , (err,db) => {

 	if(err)
	{
		return console.log("Unable to connect to server");
	}

	console.log("connectes to MongoDb Server");

	// db.collection('User').deleteMany({name: 'Pushpa Meena'}).then((result) => {
	// 	console.log(result);
	// });

	

	// db.collection('User').deleteOne({name: 'Urvashi Meena'}).then((result) => {
	// 	console.log(result);
	// });

	db.collection('User').deleteOne({_id: new ObjectID('5b4df6d20f3948004469568f') }).then((result) => {
		console.log(result);
	});

	// db.collection('User').findOneAndDelete({name: 'Urvashi Meena'}).then((result) => {
	// 	console.log(result);
	// });

		db.close;


});
