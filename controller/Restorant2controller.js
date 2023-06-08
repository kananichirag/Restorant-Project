const { response } = require('../middleware/response');
const Restorant2Services = require('../services/restorant2services')


const find87 = async (req, res) => {
    try {
        if(!req.query.page || !req.query.limit){
            return response("Pagination is Required",{},404,res)
        }
        let resp = await Restorant2Services.Find87(
            req.query.page,
            req.query.limit,
        );

        if (resp) {
            return response("Success !!!!", resp.data, 200, res)
        } else {
            return response("Something Wrog ??", {}, 500, res)
        }
    } catch (err) {
        return response(err.message, err?.error, err.status, res)
    }
}


const find86 = async (req, res) => {
    try {
     
        let resp = await Restorant2Services.Find86();

        if (resp) {
            return response("Success !!!!", resp.data, 200, res)
        } else {
            return response("Something Wrog ??", {}, 500, res)
        }
    } catch (err) {
        return response(err.message, err?.error, err.status, res)
    }
}

const find85 = async (req, res) => {
    try {
     
        let resp = await Restorant2Services.Find85();

        if (resp) {
            return response("Success !!!!", resp.data, 200, res)
        } else {
            return response("Something Wrog ??", {}, 500, res)
        }
    } catch (err) {
        return response(err.message, err?.error, err.status, res)
    }
}


const find82 = async (req, res) => {
    try {
     
        let resp = await Restorant2Services.Find82();

        if (resp) {
            return response("Success !!!!", resp.data, 200, res)
        } else {
            return response("Something Wrog ??", {}, 500, res)
        }
    } catch (err) {
        return response(err.message, err?.error, err.status, res)
    }
}



const find80 = async (req, res) => {
    try {
     
        let resp = await Restorant2Services.Find80();

        if (resp) {
            return response("Success !!!!", resp.data, 200, res)
        } else {
            return response("Something Wrog ??", {}, 500, res)
        }
    } catch (err) {
        return response(err.message, err?.error, err.status, res)
    }
}



const find79 = async (req, res) => {
    try {
     
        let resp = await Restorant2Services.Find79();

        if (resp) {
            return response("Success !!!!", resp.data, 200, res)
        } else {
            return response("Something Wrog ??", {}, 500, res)
        }
    } catch (err) {
        return response(err.message, err?.error, err.status, res)
    }
}




const find77 = async (req, res) => {
    try {
        
        if(!req.query.page || !req.query.limit){
            return response("Pagination is Required",{},404,res)
        }

        let resp = await Restorant2Services.Find77(
            req.query.page,
            req.query.limit,
        );

        if (resp) {
            return response("Success !!!!", resp.data, 200, res)
        } else {
            return response("Something Wrog ??", {}, 500, res)
        }
    } catch (err) {
        return response(err.message, err?.error, err.status, res)
    }
}



const find72 = async (req, res) => {
    try {
     
        let resp = await Restorant2Services.Find72();

        if (resp) {
            return response("Success !!!!", resp.data, 200, res)
        } else {
            return response("Something Wrog ??", {}, 500, res)
        }
    } catch (err) {
        return response(err.message, err?.error, err.status, res)
    }
}



const Find66 = async (req, res) => {
    try {
     
        let resp = await Restorant2Services.Find66();

        if (resp) {
            return response("Success !!!!", resp.data, 200, res)
        } else {
            return response("Something Wrog ??", {}, 500, res)
        }
    } catch (err) {
        return response(err.message, err?.error, err.status, res)
    }
}


const Find60 = async (req, res) => {
    try {
     
        let resp = await Restorant2Services.Find60();

        if (resp) {
            return response("Success !!!!", resp.data, 200, res)
        } else {
            return response("Something Wrog ??", {}, 500, res)
        }
    } catch (err) {
        
        return response(err.message, err?.error, err.status, res)
    }
}


const Find11 = async (req, res) => {
    try {
     
        let resp = await Restorant2Services.Find11();

        if (resp) {
            return response("Success !!!!", resp.data, 200, res)
        } else {
            return response("Something Wrog ??", {}, 500, res)
        }
    } catch (err) {
        
        return response(err.message, err?.error, err.status, res)
    }
}



const Find23 = async (req, res) => {
    try {
     
        let resp = await Restorant2Services.Find23();

        if (resp) {
            return response("Success !!!!", resp.data, 200, res)
        } else {
            return response("Something Wrog ??", {}, 500, res)
        }
    } catch (err) {
        
        return response(err.message, err?.error, err.status, res)
    }
}



const Find46 = async (req, res) => {
    try {
     if(!req.query.page || !req.query.limit){
        return response("Pagination is Required",{},404,res)
     }
        let resp = await Restorant2Services.Find46(
            req.query.page,
            req.query.limit,
        );

        if (resp) {
            return response("Success !!!!", resp.data, 200, res)
        } else {
            return response("Something Wrog ??", {}, 500, res)
        }
    } catch (err) {
        
        return response(err.message, err?.error, err.status, res)
    }
}


module.exports = {
    find87,
    find86,
    find85,
    find82,
    find80,
    find79,
    find77,
    find72,
    Find66,
    Find60,
    Find11,
    Find23,
    Find46
    
}