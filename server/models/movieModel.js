import mongoose from "mongoose";

const movieSchema=new mongoose.Schema({
    title:{
        type:String,
        require:[true,"Please provide a title for the book"],
    },
    director:{
        type:String,
        default:"Unknown"
    },
    image:{
        type:Buffer,
        require:true,
        contentType:String
    },
    cast:[],
    rating:{
        type:Number,
        min:0
    },
    longDescription:{
        type:String,
        require:[true,"Please provide description"]
    }
});

export default mongoose.model.movies || mongoose.model("movies",movieSchema);