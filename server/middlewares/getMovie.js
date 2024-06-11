import movieModel from "../models/movieModel.js";

const getMovie=async(req,res)=>{
    try {
        const movie=await movieModel.findOne({_id:req.query._id});
        return res.status(200).json({"msg":"Movie fetched Successfully","data":movie});
    } catch (error) {
        console.log(error);
        return res.status(500).json({"msg":"Server Error"});
    }
};

export default getMovie;