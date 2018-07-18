var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');


var app = express();

app.use(bodyParser.json());

app.post("/todo", (req, res) => {
    console.log(req.body);
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.listen(3000 , () => {
	console.log("Server is start at port 3000");
});
//User collectiom



// var user =  new User({
// 	username: "Made the food",
// 	name : 'true',
// 	required: true

// });


// user.save().then((doc) => {
// 	console.log(JSON.stringify(doc , undefined , 2));
// }, (err) => {
//    	console.log('Unable to save the data');
// });

//Todo collections1




// var newTodo =  new Todo({
// 	text: "cook the food"
// });

// var OtherTodo =  new Todo({
// 	text: "Made the food",
// 	completed : true,
// 	completedAt : 123
// });

// var OtherTodo =  new Todo({
// 	text: " yes this is true",

// });

// OtherTodo.save().then((doc) => {
// 	console.log(JSON.stringify(doc , undefined , 2));
// }, (err) => {
//    	console.log('Unable to save the data');
// });

// newTodo.save().then((result) => {
// 	console.log("Saved Todo",result);
// }, (err) => {
// 	console.log("Unable to save data");
// });
