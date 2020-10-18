let AdminController = require('../controller/adminController')
let StartupController = require('../controller/startupIdeaController')


const jwtUtility = require('./../middlewares/jwt')

module.exports = function(app) {

    app.post("/evalate", jwtUtility.authenticateAccessToken, AdminController.evalute)
    app.put("/add-comment", jwtUtility.authenticateAccessToken, AdminController.addComment)
    app.get("/findall-evaluation-byteamId/:id", jwtUtility.authenticateAccessToken, AdminController.findAllEvaluationByTeamID)
    app.get("/findOneByEvaluationId/:id", jwtUtility.authenticateAccessToken, AdminController.findOneByEvaluationId)
    
    app.get("/get-all-idea", jwtUtility.authenticateAccessToken, StartupController.getAllIdea)
    // app.post("/update", jwtUtility.authenticateAccessToken, AuthController.update)
    // app.get("/getAll", AuthController.getAllUser)    
	
}