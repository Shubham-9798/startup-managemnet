var express = require("express");
// var router = express.Router();

// module.exports = router;
let testController = require('./../controller/testController')

module.exports = function(app) {
	// code here
	require("./testRoutes")(app)
	require('./authRoutes')(app)
	require('./startupIdeaRoutes')(app)
	require('./masterTblRoutes')(app)
	require("./adminRoutes")(app)
	require('./teamRoutes')(app)
	
}