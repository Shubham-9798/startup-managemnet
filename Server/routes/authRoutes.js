let AuthController = require('../controller/authController')
const jwtUtility = require('./../middlewares/jwt')

module.exports = function(app) {
    // code here
    
    // insert user

    app.post("/checkUniqueUsernameExist", AuthController.checkUniqueUsernameExist)
    app.post("/update", jwtUtility.authenticateAccessToken, AuthController.update)
    app.get("/getAll", AuthController.getAllUser)
    

    // app.post("/register", AuthController.register)
    // app.post("/login", AuthController.login)
    // app.post("/token", AuthController.token);
    // app.post("/logout", AuthController.logout)
    // app.post("/addbasicdetails", AuthController.addbasicdetails)

    // app.post("/verify-otp", AuthController.verifyConfirm)
    // app.post("/resend-verify-otp", AuthController.resendConfirmOtp)
    
	
}