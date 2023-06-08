const Restorant2 = require('../models/Restorant2');
const mongoose = require('mongoose');


module.exports = {

    Find87: (Page, Limit) => {
        return new Promise(async (res, rej) => {
            try {
                let page = parseInt(Page)
                let limit = parseInt(Limit)
                const user = await Restorant2.aggregate([
                    {
                        $match: {
                            "grades.grade": "A",
                            "grades.score": { $gte: 90 }
                        }
                    },
                    {
                        $group: {
                            _id: "$borough",
                            count: { $sum: 1 }
                        }
                    },
                    { $skip: (page - 1) * limit },
                    { $limit: limit }
                ])

                res({
                    data: {
                        result: user
                    }
                })

            } catch (error) {
                rej({ status: 500, message: "Somwthing Went Wrong" })
            }
        })
    },

    Find86: () => {
        return new Promise(async (res, rej) => {
            try {

                const user = await Restorant2.aggregate([
                    { $unwind: "$grades" },
                    {
                        $match: {
                            "grades.grade": "A"
                        }
                    },
                    {
                        $group: {
                            _id: { Brough: "$borough", Restorant_id: "$restaurant_id" },
                            Gradecount: { $sum: 1 }
                        }
                    },
                    {
                        $sort: {
                            "_id.borough": 1,
                            Gradecount: -1
                        }
                    },
                    {
                        $group: {
                            _id: "$_id.Brough",
                            TopRstorant: { $push: { Restorant_id: "$_id.Restorant_id", GradeCount: "$Gradecount" } }
                        }
                    },
                    {
                        $project: {
                            _id: 0,
                            borough: "$_id",
                            TopRstorant: { $slice: ["$TopRstorant", 5] }

                        }
                    },
                ])
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

    Find85: () => {
        return new Promise(async (res, rej) => {
            try {
                const user = await Restorant2.aggregate([
                    { $unwind: "$grades" },
                    {
                        $group: {
                            _id: { cuisine: "$cuisine", restaurant_id: "$restaurant_id" },
                            avgScore: { $avg: "$grades.score" }
                        }
                    },
                    {
                        $sort: {
                            "_id.cuisine": 1,
                            avgScore: -1
                        }
                    },
                    {
                        $group: {
                            _id: "$_id.cuisine",
                            TopRestorant: { $push: { restaurant_id: "$_id.restaurant_id", AvgScore: "$avgScore" } }
                        }
                    },
                    {
                        $project: {
                            _id: 0,
                            cuisine: "$_id",
                            TopRestorant: { $slice: ["$TopRestorant", 5] }
                        }
                    }
                ])

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

    Find82: () => {
        return new Promise(async (res, rej) => {
            try {

                const user = await Restorant2.aggregate([
                    { $unwind: "$grades" },
                    {
                        $group: {
                            _id: "$name",
                            totalScore: { $sum: "$grades.score" }
                        }
                    },
                    {
                        $sort: {
                            _id: 1,
                            totalScore: -1
                        }
                    },
                    {
                        $group: {
                            _id: "$totalScore",
                            Restorants: { $push: "$_id" }
                        }
                    },
                    {
                        $sort: {
                            _id: -1
                        }
                    },

                ])
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

    Find80: () => {
        return new Promise(async (res, rej) => {
            try {

                const user = await Restorant2.aggregate([
                    { $unwind: "$grades" },
                    {
                        $match: {
                            "grades.grade": "C"
                        }
                    },
                    {
                        $group: {
                            _id: "$cuisine",
                            count: { $sum: 1 }
                        }
                    },
                    {
                        $sort: {
                            count: -1
                        }
                    }
                ])
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

    Find79: () => {
        return new Promise(async (res, rej) => {
            try {

                const user = await Restorant2.aggregate([
                    { $unwind: "$grades" },
                    {
                        $match: {
                            "grades.grade": "A"
                        }
                    },
                    {
                        $group: {
                            _id: "$restaurant_id",
                            count: { $sum: 1 }
                        }
                    },
                    {
                        $sort: {
                            count: -1
                        }
                    },
                    {
                        $group: {
                            _id: "$count",
                            restorant: { $push: "$_id" }
                        }
                    },
                    {
                        $sort: {
                            _id: -1
                        }
                    },
                    { $limit: 2 }
                ])

                res({
                    data: {
                        result: user
                    }
                })

            } catch (error) {
                rej({ status: 500, message: "Somwthing Went Wrong" })
            }
        })
    },

    Find77: (Page, Limit) => {
        return new Promise(async (res, rej) => {
            try {
                let page = parseInt(Page)
                let limit = parseInt(Limit)
                const user = await Restorant2.aggregate([
                    {
                        $match: {
                            cuisine: { $regex: /Pizza/i }          //{ $regex: /y$/i }  for End with "y" //
                        }
                    },                                    // "address.zipcode": /^10/   == zipcode Start with 10  //
                    {
                        $project: {                            //  { $regex: /^B/ } == Start with "B" //
                            name: 1,                            // { $regex: /coffee/i } } == Contain "coffee" in name field 
                            address: 1,
                            cuisine: 1,
                            _id: 0
                        }
                    },
                    { $skip: (page - 1) * limit },
                    { $limit: limit }
                ])

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

    Find72: () => {
        return new Promise(async (res, rej) => {
            try {

                const user = await Restorant2.aggregate([
                    {
                        $match: {
                            $nor: [
                                {
                                    grades: {
                                        $elemMatch: { grade: "B" }
                                    }
                                },
                                {
                                    grades: {
                                        $elemMatch: { grade: "C" }
                                    }
                                }
                            ]
                        }
                    },
                    { $limit: 10 }
                ])

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

    Find66: () => {
        return new Promise(async (res, rej) => {
            try {

                const user = await Restorant2.aggregate([
                    { $unwind: "$grades" },
                    {
                        $group: {
                            _id: "$borough",
                            Lowestscore: { $min: "$grades.score" }         //Heigestscore:{$max:"$grades.score"}
                        }
                    },
                ])
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

    Find60: () => {
        return new Promise(async (res, rej) => {
            try {

                const user = await Restorant2.aggregate([
                    {
                        $match: {
                            "address.coord": [-73.96926909999999, 40.7685235]
                        }
                    }
                ])

                res({
                    data: {
                        result: user
                    }
                })
                console.log(user);
            } catch (error) {

                rej({ status: 500, message: "Something Went Wrong" })
            }
        })
    },

    Find11: () => {
        return new Promise(async (res, rej) => {
            try {

                const user = await Restorant2.aggregate([
                    {
                        $match: {
                            "cuisine": { $ne: "American" },
                            "grades.score": { $gt: 70 },
                            "address.coord": { $lt: -65.754168 }
                        }
                    }
                ])

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


    Find23: () => {
        return new Promise(async (res, rej) => {
            try {

                const user = await Restorant2.aggregate([
                    {
                        $match: {
                            "grades.1.score": { $eq: 9 },
                            "grades.1.grade": { $eq: "A" },
                            "grades.1.date": { $eq: new Date("2013-04-30T00:00:00.000+00:00") },
                        }
                    },
                ])

                res({
                    data: {
                        count: user.length,
                        result: user,
                    }
                })

            } catch (error) {
                console.log(error);
                rej({ status: 500, message: "Something Went Wrong" })
            }
        })
    },


    Find46: (Page, Limit) => {
        return new Promise(async (res, rej) => {
            try {
                let page = parseInt(Page)
                let limit = parseInt(Limit)
                const user = await Restorant2.aggregate([
                    {
                        $match: {
                            $and: [
                                {
                                    $or: [
                                        { borough: "Brooklyn" },
                                        { borough: "Manhattan" },
                                    ]
                                },
                                {
                                    $or: [
                                        { "grades.score": 2 },
                                        { "grades.score": 6 },
                                    ]
                                }
                            ]
                        }
                    },
                    {
                        $match: {
                            cuisine: { $ne: "American " }
                        }
                    },
                    {
                        $project: {
                            _id: 0,
                            address: 0,
                            name: 0,
                            restaurant_id: 0
                        }
                    },
                    { $skip: (page - 1) * limit },
                    { $limit: limit }

                ])

                res({
                    data: {
                        count: user.length,
                        result: user,
                    }
                })

            } catch (error) {
                console.log(error);
                rej({ status: 500, message: "Something Went Wrong" })
            }
        })
    }







}