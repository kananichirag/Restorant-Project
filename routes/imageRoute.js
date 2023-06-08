const express = require('express');
const Image = express.Router();
const ImageController = require('../controller/imageController')
const { upload }  = require('../middleware/upload')

Image.post('/upload',upload.single("img"),ImageController.upload);

module.exports = Image;
