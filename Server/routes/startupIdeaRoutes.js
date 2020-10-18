let StartupController = require('../controller/startupIdeaController')
const jwtUtility = require('./../middlewares/jwt')
const multer = require('./../middlewares/multer')

module.exports = function(app) {
    // code here


  //   app.post("/insertIdea", multer.upload.single('avatar'), jwtUtility.authenticateAccessToken, StartupController.insertIdea)
    app.post("/delete", jwtUtility.authenticateAccessToken, StartupController.delete)
    app.post("/addIdeaToUserArray", jwtUtility.authenticateAccessToken, StartupController.addIdeaToUserArray)

    // this is admin controller
    app.get("/get-all-idea", jwtUtility.authenticateAccessToken, StartupController.getAllIdea)
    app.get("/get-ideaof-user-admin", jwtUtility.authenticateAccessToken, StartupController.getIdeasOfUserAdmin)

    app.post("/update", jwtUtility.authenticateAccessToken, StartupController.update)
    // app.post("/update", jwtUtility.authenticateAccessToken, StartupController.update)

	
}