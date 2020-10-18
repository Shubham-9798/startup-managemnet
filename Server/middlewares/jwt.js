const jwt = require('jsonwebtoken')
var secret = process.env.ACCESS_TOKEN_SECRET 
var refreshSecret = process.env.REFRESH_TOKEN_SECRET 
const apiResponse = require('./../helpers/apiResponse')


module.exports.generateAccessToken = (payload) => {
	const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1500000s'})
	return token
}
module.exports.generateRefreshToken = (payload) => {
	const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET )
	return token
}

// middleware
module.exports.authenticateAccessToken = (req, res, next) =>{
	const authHeader = req.headers.authorization
	const token = authHeader && authHeader.split(' ')[1]
	// console.log(process.env.ACCESS_TOKEN_SECRET, token, "-----------------")
	if(token == null) return apiResponse.unauthorizedResponse(res, "Empty Token")

	jwt.verify(token, process.env.ACCESS_TOKEN_SECRET , (err, user) => {
		if(err) return apiResponse.unauthorizedResponse(res, "Invalid Token")
		req.tokenParseData = user
		next()
	})
}

module.exports.authenticateRefreshToken = (req, res, next) =>{
	const authHeader = req.headers.authorization
	const token = authHeader && authHeader.split(' ')[1]

	if(token == null) return apiResponse.unauthorizedResponse(res, "Empty Token")

	jwt.verify(token, process.env.REFRESH_TOKEN_SECRET , (err, user) => {
		if(err) return apiResponse.unauthorizedResponse(res, "Invalid Token")
		req.tokenParseData = user
		next()
	})
}

module.exports.verifyToken = (token) =>{
	if(token == null) return new Error('Empty Token')

	jwt.verify(token, refreshSecret, (err, user) => {
		if(err) return new Error('Invalid Token')
		 console.log(user)
		return new Promise((resolve, reject) => resolve(user))
	})
	.then( (u) => { return u;})
}

 module.exports.jwt = jwt;

