const express = require('express');
const Rs = express.Router();
const ResController = require('../controller/restorantController');
const ResController2 = require('../controller/Restorant2controller');

// Post in Both
Rs.post('/add',ResController.Add);
//


//  Restorant Project
Rs.put('/update/:id',ResController.Update);
Rs.get('/getall',ResController.GetAll);
Rs.get('/findbyid/:id',ResController.FindById);
Rs.get('/bycity',ResController.Bycity);
Rs.get('/bystate',ResController.UpdateProject);



// Restorant 2
Rs.get('/find87',ResController2.find87);
Rs.get('/find86',ResController2.find86);
Rs.get('/find85',ResController2.find85);
Rs.get('/find82',ResController2.find82);
Rs.get('/find80',ResController2.find80);
Rs.get('/find79',ResController2.find79);
Rs.get('/find77',ResController2.find77);
Rs.get('/find72',ResController2.find72);
Rs.get('/find66',ResController2.Find66);
Rs.get('/find60',ResController2.Find60);
Rs.get('/find11',ResController2.Find11);
Rs.get('/find23',ResController2.Find23);
Rs.get('/find46',ResController2.Find46);





// Rs.put('/addrating/:id',ResController.AddRating);

module.exports = Rs;

