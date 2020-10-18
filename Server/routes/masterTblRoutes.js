let MasterTblController = require('../controller/masterTblController')
const jwtUtility = require('./../middlewares/jwt')
const multer = require('./../middlewares/multer')

module.exports = function(app) {
    // code here


    app.post("/addMasterDomain", jwtUtility.authenticateAccessToken, MasterTblController.addDomain)

    app.post("/addMasterCategory", jwtUtility.authenticateAccessToken, MasterTblController.addCategory)

    app.post("/addMasterStatus", jwtUtility.authenticateAccessToken, MasterTblController.addStatus) 

    app.post("/addMasterRole", jwtUtility.authenticateAccessToken, MasterTblController.addRole)

    app.post("/add-master-evaluation-status", jwtUtility.authenticateAccessToken, MasterTblController.addEvaluationStatus)

    // app.post("/update", jwtUtility.authenticateAccessToken, StartupController.update)

	
}