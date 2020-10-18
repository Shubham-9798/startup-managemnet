var multer  = require('multer')
var path = require('path')
var utility = require('./../helpers/utility')

// const fs = require('fs/promises');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads')
    },
    filename: function (req, file, cb) {
      cb(null, utility.randomNumber(5) + '_' +  utility.currentDate('.', '.')+ '_' + file.originalname)
    }
  })

var fileFilter =  function (req, file, callback) {
    var ext = path.extname(file.originalname);
    if(ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
        return callback(new Error('Only images are allowed'))
    }
    callback(null, true)
}


   
  var upload = multer({ storage: storage, fileFilter:fileFilter })
  module.exports.upload = upload