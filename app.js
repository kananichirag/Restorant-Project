const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const bodyparser = require('body-parser')
const IndexRoutes = require('./routes/indexRoutes');
require('dotenv').config({ path: path.join(__dirname, "./config/.env") });



app.use(express.json())
app.use(express.urlencoded({ extended: false }))       

app.use('/v1',IndexRoutes);
app.use('/',(req,res) => {
    res.send("hello")
})



// Mongo Connection
mongoose.connect(process.env.MONGO_URL).then((e) => console.log("🚀 MongoDB Connected")).catch((err) => {
    console.log("error--->", err)
})
// Server
app.listen(process.env.PORT || 3000, () => console.log("Server Start"))