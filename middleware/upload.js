const multer = require("multer");
const path = require("path");

let storageMulter = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname,'../upload'))
    },
    filename:  (req, file, cb) => {
        cb(null, file.originalname)
   
    },

})

exports.upload = multer({ storage: storageMulter });