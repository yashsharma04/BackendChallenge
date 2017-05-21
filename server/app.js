var express = require('express')
var app = express()

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
app.use('/process',function(req,res){
	console.log(req);
	var time = new Date()
	var method = req.method
	var header = JSON.stringify(req.headers)
	var path = req.originalUrl 
	var query = req.query 
	var body = req.body 
	var duration = getRandomArbitrary(15,30)
	var data = {
		time, 
		method,
		header ,
		path,
		query,
		body,
		duration 
	}
	/*responds in about 15-30 seconds */
	setTimeout(function(){
		res.send(data)
	},duration*1000)
})
app.listen(3111, function() {
		console.log('Express server Listening on 3111, in development mode');
})
exports = module.exports = app
