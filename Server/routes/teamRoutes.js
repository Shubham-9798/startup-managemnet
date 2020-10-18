let StartupController = require('../controller/startupIdeaController')
let teamController = require('../controller/teamController')

const jwtUtility = require('./../middlewares/jwt')

module.exports = function(app) {
    // code here

    app.post("/add-useradmin-details", jwtUtility.authenticateAccessToken, teamController.addUserDetails)
    app.post("/add-team-members", jwtUtility.authenticateAccessToken, teamController.addTeamMembers)
    app.get("/get-userDetails", jwtUtility.authenticateAccessToken, teamController.getUserDetails)
    app.get("/get-team-member", jwtUtility.authenticateAccessToken, teamController.getAllTeamMember)


    app.post("/add-team-details", jwtUtility.authenticateAccessToken, teamController.addTeamDetails)


}