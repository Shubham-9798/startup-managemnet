const express = require('express')
var path = require("path");
var fs = require('fs');
require('dotenv').config()
const app = express()
const port = process.env.PORT;
const   bodyParser = require('body-parser');

// var indexRouter = require("./routes/index");
// var apiRouter = require("./routes/api");
var apiResponse = require("./helpers/apiResponse");
var cors = require("cors");
var MongoClient = require('mongodb').MongoClient;
var MONGODB_URL = process.env.MONGODB_URL;
var mongoose = require("mongoose");

mongoose.set('useFindAndModify', false);
mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
	//don't show the log when it is test
	if(process.env.NODE_ENV !== "test") {
		console.log("Connected to %s", MONGODB_URL);
		console.log("App is running ... \n");
		console.log("Press CTRL + C to stop the process. \n");
	}
})
.catch(err => {
	console.error("App starting error:", err.message);
	process.exit(1);
});
var db = mongoose.connection;

db.on('open', function(){
  console.log("connected")
})

// //don't show the log when it is test
// if(process.env.NODE_ENV !== "test") {
// 	app.use(logger("dev"));
// }

// app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
// app.use(bodyParser.json({limit: "50mb"}));
// app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(express.static(path.join(__dirname, "public")));
app.use("/public/uploads", express.static(path.join(__dirname, "public/uploads")));


//To allow cross-origin requests
app.use(cors());

const directoryPath = path.join(__dirname, 'routes/index.js');
app.get("/", function(req, res) {
	res.render("index", { title: "Express" });
});

// fs.readdir(directoryPath, (err, dir) =>{
	require(directoryPath)(app)
	//console.log(directoryPath +'/' + dir)
// })

// throw 404 if URL not found
app.all("*", function(req, res) {
	return apiResponse.notFoundResponse(res, "Page not found");
});

app.use((err, req, res) => {
	if(err.name == "UnauthorizedError"){
		return apiResponse.unauthorizedResponse(res, err.message);
	}
});

// module.exports = app;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
