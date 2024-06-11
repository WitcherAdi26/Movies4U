

const isAdmin=async(req,res,next)=>{
    try {
        const isAdmin=req.user.isAdmin;
        if(!isAdmin){
            return res.status(400).json({"msg":"Access Denied to Non-Admins"});
        }

        console.log("passed");
        next();
    } catch (error) {
        return res.status(500).json({"msg":"Server Error"});
    }
};

export default isAdmin;