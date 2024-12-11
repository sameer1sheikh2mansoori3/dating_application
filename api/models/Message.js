import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    reciever:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    content: {
        type: String,
        
        required: true
    },
   
}, {
    timestamps: true,
});

export default mongoose.model("Message", messageSchema);    