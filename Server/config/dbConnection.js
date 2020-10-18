var MongoClient = require('mongodb').MongoClient;
var MONGODB_URL = process.env.MONGODB_URL;
var mongoose = require("mongoose");

module.exports.connection = (req, res, next) => 
mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
	//don't show the log when it is test
	if(process.env.NODE_ENV !== "test") {
		console.log("Connected to %s", MONGODB_URL);
		console.log("App is running ... \n");
		console.log("Press CTRL + C to stop the process. \n");
    }
    next()
})
.catch(err => {
	console.error("App starting error:", err.message);
	process.exit(1);
});
var db = mongoose.connection;
db.on('open', function(){
	console.log("connected")
  })

module.exports.db = db