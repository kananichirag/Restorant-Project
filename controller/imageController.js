const  {response} = require('../middleware/response');
const ImageServices = require('../services/imageServices');

exports.upload = async (req,res) => {
    try {
        
        let resp =  await ImageServices.Upload(req.file);

        if(resp){
            return response("Success !!!",resp.data, 200,res)
        } else {
            return response("Somwthing Wrong",{},500,res)
        }

    } catch (err) {
        return response(err.message, err?.error, err.status, res);
    }
}
