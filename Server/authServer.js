const express = require('express')
let path = require("path")
let jwtUtility = require('./middlewares/jwt')
require('dotenv').config()
const app = express()
const port = process.env.AUTHPORT

var apiResponse = require("./helpers/apiResponse")
var cors = require("cors")
var MONGODB_URL = process.env.MONGODB_URL
var mongoose = require("mongoose")
let AuthController = require('./controller/authController')
let AdminAuthController = require('./controller/adminAuthController')


mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
	//don't show the log when it is test
	if(process.env.NODE_ENV !== "test") {
		console.log("Connected to %s", MONGODB_URL)
		console.log("App is running ... \n")
		console.log("Press CTRL + C to stop the process. \n")
	}
})
.catch(err => {
	console.error("App starting error:", err.message)
	process.exit(1)
})
var db = mongoose.connection

db.on('open', function(){
  console.log("connected")
})

// //don't show the log when it is test
// if(process.env.NODE_ENV !== "test") {
// 	app.use(logger("dev"))
// }
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))

//To allow cross-origin requests
app.use(cors())
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
  });

const directoryPath = path.join(__dirname, 'routes/index.js')
app.get("/", function(req, res) {
	res.render("index", { title: "Express" })
})

app.post("/register", AuthController.register)
app.post("/login", AuthController.login)
app.post("/token", AuthController.token) // to get access-token when expired
app.post("/verifytoken", jwtUtility.authenticateAccessToken , AuthController.verifyToken)
app.post("/logout", jwtUtility.authenticateAccessToken , AuthController.logout)

// admin Auth Controller
app.post("/register-admin", AdminAuthController.registerAdmin) 
app.post("/login-admin", AdminAuthController.login) 
app.get("/get-adminList", AdminAuthController.getAdminList) 




// throw 404 if URL not found
app.all("*", function(req, res) {
	return apiResponse.notFoundResponse(res, "Page not found")
})

app.use((err, req, res) => {
	if(err.name == "UnauthorizedError"){
		return apiResponse.unauthorizedResponse(res, err.message)
	}
})

// module.exports = app
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
