import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protectedRoute = async (req, res, next) => {
    try {
        let token = req.cookies.jwt;
        if (! token) {
            return res.status(401).json({
                status: "fail",
                message: "You are not logged in - No token found",
            });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if( ! decoded ){
            return res.status(401).json({
                status: "fail",
                message: "invalid token - Invalid token",
            });
        }
        req.user = await User.findById(decoded.id); 
    next();                 
       
        
    } catch (error) {
        console.error( `error in protect route` ,error);
        return res.status(500).json({       
            status: "fail",         
            message: "Not authorized to access this route"        
        })
    }
};