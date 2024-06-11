import express from "express";
import multer from "multer";
import getAllMovies from "../middlewares/getAllMovies.js";
import getMovie from "../middlewares/getMovie.js";
import authenticateJWT from "../middlewares/AuthenticateJWT.js";
import isAdmin from "../middlewares/isAdmin.js";
import holdMovie from "../middlewares/holdMovie.js";
import uploadMovie from "../middlewares/uploadMovie.js";

const moviesRouter=express.Router();

// get all movies
moviesRouter.get("/",getAllMovies);

// get movie details by _id
moviesRouter.get('/:_id',getMovie);

// to upload movies for Admin
const upload=multer({storage:holdMovie});
moviesRouter.post("/upload",authenticateJWT,isAdmin,upload.fields([{name:"image"}]),uploadMovie);

export default moviesRouter;