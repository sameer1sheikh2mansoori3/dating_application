import User from "../models/User.js";
import jwt from "jsonwebtoken";
const signToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '7d',
    });
};
export const signup = async (req, res) => {
    const { name, email, password, age, gender, genderPreference } = req.body;
    if (!name || !email || !password || !age || !gender || !genderPreference) {
        return res.status(400).json({
            status: "fail",
            message: "All fields are required",
        });
    }
    if( age < 18 ){ 
        return res.status(400).json({   
            status: "fail",         
            message: "Age should be between 18 "        
        })
    }

    const existingUser = await User.findOne({ email }); 
    if (existingUser) {     
        return res.status(400).json({   
            status: "fail",         
            message: "User already exists"        
        })
    }   

    const user = await User.create({ name, email, password, age, gender, genderPreference });
    const token = signToken(user._id);
    res.cookie("jwt", token, {
        httpOnly: true,  // ye hhs attack rokta hai
        secure: process.env.NODE_ENV === "production", // 
        sameSite: "strict",//ye csrf attack rokta hai
        maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return res.status(201).json({
        success: true,
        user,
        message: "User created successfully",
    });
};
export const signin = async (req, res) => {
    res.send("login");
};
export const logout = async (req, res) => {
    res.send("logout");
};