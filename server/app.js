var express = require('express')
var app = express()
var apiRoutes = express.Router()
apiRoutes.get('/getDiscList', function (req, res) {

})
apiRoutes.get('/lyric', function (req, res) {

})
app.use('/api', apiRoutes)
module.exports = app
