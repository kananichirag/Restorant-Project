const Restorant = require('../models/restorant');
const Restorant2 = require('../models/Restorant2')


module.exports = {

    Getall: (Page, Limit) => {
        return new Promise(async (res, rej) => {
            try {
                let page = parseInt(Page)
                let limit = parseInt(Limit)

                const user = await Restorant.aggregate([
                    { $match: {} },
                    { $skip: (page - 1) * limit },
                    { $limit: limit }
                ])
                res({
                    status: 200,
                    data: {
                        count: user.length,
                        result: user
                    }
                })

            } catch (error) {
                console.log(user);
                rej({ status: 500, error: error, message: "Something Went Wrong" })
            }
        })
    },


    add: (data) => {
        return new Promise(async (res, rej) => {
            try {
                let newRestorant = new Restorant2(data)
                let save = await newRestorant.save()
                if (save) {
                    res({ data: save })
                } else {
                    rej({ status: 500, message: "something went Worng!!" })
                }
            } catch (error) {
                console.log(error);
                rej({ status: 500, message: "Something Went Worng" })
            }
        })
    },

    findbyid: (id) => {
        return new Promise(async (res, rej) => {
            try {

                let user = await Restorant.findById(id);

                res({
                    data: user
                })
            }

            catch (error) {
                rej({ status: 500, message: "Something Went Wrong" })
            }
        })
    },

    City: (city) => {
        return new Promise(async (res, rej) => {
            try {

                let user = await Restorant.aggregate([

                    {
                        $match: {
                            "address.city": city
                        }
                    }
                ])

                res({

                    data: {
                        count: user.length,
                        result: user
                    }
                })

            } catch (error) {
                rej({ status: 500, message: "Something Went Wrong" })
            }
        })
    },

    Updateproject: (Page, Limit) => {
        return new Promise(async (res, rej) => {
            try {
                let page = parseInt(Page)
                let limit = parseInt(Limit)
                const user = await Restorant.aggregate([
                    {
                        $match: {
                            "restaurant_name": "Honorable"
                        }
                    },
                    {
                        $project: {
                            _id: 1,
                            newcuisine: {
                                $cond: { if: { $lt: ["$price_range", 4500] }, then: "ABC", else: "XYZ" }
                            },
                            restaurant_name: 1,
                            cuisine_type: 1,
                            price_range: 1
                        }
                    },
                    {
                        $set: {
                            cuisine_type: "$newcuisine"
                        }
                    },
                    { $skip: (page - 1) * limit },
                    { $limit: limit },
                ])
                const op = user.map((doc) => ({
                    updateOne: {
                        filter: { _id: doc._id },
                        update: { $set: { cuisine_type: doc.newcuisine } },
                        upsert: true
                    }
                }))
                const result = await Restorant.bulkWrite(op)
                res({
                    data: {
                        result: user
                    }
                })
            } catch (error) {
                rej({ status: 500, message: "Something Went Wrong" })
            }
        })
    },


    update: (id, data) => {
        return new Promise(async (res, rej) => {
            try {

                const user = await Restorant.findByIdAndUpdate(id, data, { new: true })
                res({
                    data: {
                        result: user
                    }
                })
            }
            catch (error) {

                rej({ status: 500, message: "Something Went Wrong" })
            }
        })
    }






































    
    // addRating : (id,data) => {
    //     return new Promise ( async (res, rej)  => {
    //         try {

    //     var city = data.address.city
    //     var state = data.address.state
    //     var country = data.address.country
    //         console.log(city,country);

    //         let user = await Restorant.findByIdAndUpdate(
    //             id,
    //             {$push:{address:{city:city,state:state,country:country}}},
    //             {new:true}
    //         )
    //         res({
    //             data:{
    //                 count:user.length,
    //                 result:user
    //             }
    //         })

    //         } catch (error) {
    //             console.log(error);
    //             rej({status:500, message:"Something Went Wrong"})
    //         }
    //     })
    // }
}   