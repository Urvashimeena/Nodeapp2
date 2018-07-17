const {MongoClient , ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp' , (err,db) => {

 	if(err)
	{
		return console.log("Unable to connect to server");
	}

	console.log("connectes to MongoDb Server");

	// db.collection('User').find({

	// 	_id : new ObjectID("5b4df6dcd6f8c028dc55fa84")


	// }).toArray().then((docs) => {
	// 	console.log('The users are:');
	// 	console.log(JSON.stringify(docs ,undefined , 2));
	// }, (err) => {
	// 	console.log("fetching data");
	// });


//Using the count method of cursor 

	db.collection('User').find({

		name : 'Urvashi Meena'


	}).count({name : 'Urvashi Meena'}).then((count) => {
		console.log(`The number of users are: ${count}`);
		// console.log(count);
	}, (err) => {
		console.log("fetching data");
	});

	 	db.close;


});
