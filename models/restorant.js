const mongoose = require('mongoose');


const restotantSchema = new mongoose.Schema({
    restaurant_name:{
        type:String
    },
    slogan:{
        type:String
    },
    cuisine_type:{
        type:String
    },
    price_range:{
        type:Number
    },
    address:{
        city:{
            type:String
        },
        state:{
            type:String
        },
        country:{
            type:String
        }
    },
    phone_number:{
        type:String
    },
    restorant_info:{
        rating:{
            type:String
        },
        opening_time:{
            type:String
        },
        closing_time:{
            type:String
        },
        opening_year:{
            type:Number
        }
    },
    facility:{
        reservation_required:{
            type:Boolean
        },
        outdoor_seating:{
            type:Boolean
        },
        delivery_available:{
            type:Boolean
        }
    },
    URL:{
        type:String
    }


}) 


const ResModel = new mongoose.model('restorant  ',restotantSchema);
module.exports = ResModel;