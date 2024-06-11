import movieModel from "../models/movieModel.js";

const getAllMovies=async(req,res)=>{
    try {
        const movies=await movieModel.find();
        return res.status(200).json({"msg":"Movies Fetched Successfully","data":movies});
    } catch (error) {
        console.log(error);
        return res.status(500).json({"msg":"Server Error"});
    }
};

export default getAllMovies;