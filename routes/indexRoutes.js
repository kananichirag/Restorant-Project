const express = require('express');
const IndexRoute = express.Router();
const RestorantRoutes = require('../routes/restorantRoutes');
const ImageRoute = require('../routes/imageRoute')


IndexRoute.use('/rs',RestorantRoutes);
IndexRoute.use('/image',ImageRoute);

module.exports = IndexRoute;