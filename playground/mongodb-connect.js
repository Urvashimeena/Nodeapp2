//const MongoCLient =  require('mongodb').MongoClient;

//example of object distructing

const {MongoClient , ObjectID} = require('mongodb');

const obj = new ObjectID();

console.log(obj);

// const users = { name : 'Urvashi'};
// var {name} = users;

// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp' , (err,db) => {
//MongoCLient.connect('mongodb://localhost:27017/TodoApp' , (err,client) => {   //for v3 version
 	if(err)
	{
		return console.log("Unable to connect to server");
	}

	console.log("connectes to MongoDb Server");
	// const db = client.db('TodoApp');  for version 3
	db.collection('Todos').insertOne({
		text: "Ask Anything from me",
		completed : false
	}, (err,result) => {
		if(err)
		{
			return console.log("Unable to insert todos data");
		}

		console.log(JSON.stringify(result.ops , undefined ,2));  //ops is going to stored all the docs that are inserted
	});

	// for another collection User(name , age , city)

	db.collection('User').insertOne({
		name: 'Urvashi Meena',
		age : 20,
		city : 'Udaipur'
	}, (err,result) => {
		if(err)
		{
			return console.log("Unable to insert User data");
		}

		console.log(JSON.stringify(result.ops , undefined ,2));  //ops is going to stored all the docs that are inserted
	});
	 	db.close;

	// 	client.close;   in version3
});
