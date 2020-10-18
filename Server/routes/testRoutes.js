let testController = require('../controller/testController')

module.exports = function(app) {
    // code here
    app.get('/test', 
           testController.test
           )
    app.post('/testAdd', 
    testController.testAdd
    )
	
}