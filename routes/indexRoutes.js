const express = require('express');
const IndexRoute = express.Router();
const RestorantRoutes = require('../routes/restorantRoutes');
const ImageRoute = require('../routes/imageRoute')

IndexRoute.get('/',(req,res)=>{
    res.send("V1 is working !!!")
});

IndexRoute.use('/rs',RestorantRoutes);
IndexRoute.use('/image',ImageRoute);

module.exports = IndexRoute;