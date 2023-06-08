const { response } = require('../middleware/response');
const ResServices = require('../services/restorantServices');


const GetAll = async (req,res) => {
     
      try {
      if(!req.query.page || !req.query.limit){
          return response("Pagination isrequired",{},404,res)
      }
      let resp = await ResServices.Getall(
        req.query.page,
        req.query.limit,
      )

      if(resp) {
         return response("All User", resp.data, 200, res)
      }
      else{
         return response("Something Wrong", {}, 500 , res)
      }

      } catch (err) {
        console.log(err);
        return response(err.message, err?.error, err.status, res)
      }
}



const Add = async (req,res) => {
    try {
        let resp = await  ResServices.add(req.body);
        if(resp){
         return response("Success !!!!",resp.data,200,res)
        }else{
         return response("Something Worng",{},500,res)
        }
         
     } catch (err) {
      console.log(err);
         return response(err.msg,err?.error,err.status,res)
     }
}

const FindById = async (req,res) => {
  try {
    
    let resp = await ResServices.findbyid(req.params.id);

    if(resp){
      return response("Success !!!", resp.data,200,res)
    }
    else{
      return response("Something Wrong",{},500,res)
    }
  } catch (err) {
    console.log(err);
    return response(err.msg, err?.error, err.status, res)
  }
}


const Bycity = async (req,res) => {
  try {
    
   let resp = await ResServices.City(
       req.query.city
   );

   if(resp) {
    return response("Success !!!!", resp.data,200,res )
   } else{
    return response("Something Wrong",{},500,res)
   }

  } catch (err) {
    return response(err.message, err?.error, err.status, res)
  }
}


const UpdateProject = async (req,res) => {
  try {
    
    let resp = await ResServices.Updateproject(
      req.query.page,
      req.query.limit
    );


   if(resp) {
    return response("Success !!!!", resp.data,200,res )
   } else{
    return response("Something Wrong",{},500,res)
   }

  } catch (err) {
   3
    return response(err.message, err?.error, err.status, res)
  }
}


const Update = async (req,res) => {
  try {
    
    let resp = await ResServices.update(
      req.params.id,
      req.body
    );
   if(resp) {
    return response("Success !!!!", resp.data,200,res)
   } else {
     return response("Something Wrong",{},500,res)
    }
    
  } catch (err) {
    console.log(err);
   
    return response(err.message, err?.error, err.status, res)
  }
}


// const AddRating = async (req,res) => {
//   try {
     
//     let resp = await ResServices.addRating(
//       req.params.id,
//       req.body
//     )

//     if(resp) {
//       return  response("Success !!!", resp.data,200,res)
//     } else{
//       return response("Something Wrong",{},500,res)
//     }

//   } catch (err) {
//     return response(err.message, err?.error, err.status, res)
//   }
// }


module.exports = {
     GetAll,
     Add,
     FindById,
     Bycity,
     UpdateProject,
     Update

    //  AddRating
}   