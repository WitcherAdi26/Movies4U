import multer from "multer";

const holdMovie = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./images/");
    },
    filename: function (req, file, cb) {
      // if(file.fieldname==="pdf"){
      //   cb(null, "temp.pdf");
      // }else{
        
      // }
      cb(null, file.originalname);
    }
});

export default holdMovie;
  