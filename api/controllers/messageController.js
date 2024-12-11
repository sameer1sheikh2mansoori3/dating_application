import { $or } from "sift";
import Message from "../models/Message";
export const getConversations = async (req, res) => {
    try {
        // TODO : SOCHNE WALI BAAT YE HAI KI YE KAISE AYEGI
        const {userId} = req.pramas
        const conversations = await Message.find({
            $or :[
                {sender : req.user._id},
                {reciever : req.user._id}
            ]
        }).sort({createdAt : -1})
                     
        res.status(200).json({
            success: true,
            conversations,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error fetching conversations",
        });
    }
};