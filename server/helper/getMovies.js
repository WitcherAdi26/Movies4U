import movieModel from "../models/movieModel.js";
import checkCache from "./checkCache.js";
import { redisClient } from "../middlewares/checkRedisClient.js";

// to get all restaurant either from cache or database
const getMovies=async()=>{
    const isCachePresent=await checkCache("movies");
    if(isCachePresent==null){
        let movies=await movieModel.find();
        const movie=JSON.stringify(restaurants);

        // cache response
        await redisClient.set('restaurants', movie, 'EX', 3600);
        movies=await JSON.parse(movie);
        return movies;
    }else{
        return isCachePresent;
    }
}

export default getMovies;