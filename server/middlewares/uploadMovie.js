import fs from "fs";
import movieModel from "../models/movieModel.js";

const uploadMovie=async (req,res)=>{
    const filePath="./images/";
    
    fs.readFile(filePath+req.files.image[0].originalname,async (err,image)=>{
        if(err){
            console.log('Error reading Cover Photo File : ',err);
            return;
        }

        try {
            const {
                title,
                rating,
                longDescription,
                director,
                cast
            }=req.body;

            let ratingF=parseFloat(rating);

            let castArray=cast.split(',');
    
            const newMovie=new movieModel({
                title,
                director,
                rating:ratingF,
                longDescription,
                cast:castArray,
                image
            });
        
            await newMovie.save(); 
            console.log("Movie saved");
        
        } catch (error) {
            return res.status(500).json({"msg":"Error occured while uploading movie to MongoDB"});
        }finally{
            fs.unlink(filePath+req.files.image[0].originalname,(err)=>{
                if(err)throw err;
            });
        }

        return res.status(202).json({"msg":"Movie uploaded Successfully"});
    });  
};

export default uploadMovie;