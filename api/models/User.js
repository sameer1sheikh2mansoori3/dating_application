import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    gender: {
        type: String,
        required: true,
        enum: ['male', 'female'],
    },
    password: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    }
    ,
    genderPreference: {
        type: String,
        required: true,
        enum: ['male', 'female', 'both'],
    },
    interests: {
        type: [String],
        required: true,
    },

    image: {
        type: String,

    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
    dislikes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
    matches: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
},
    { timestamps: true }

)

userSchema.pre("save", async function (next) {
	this.password = await bcrypt.hash(this.password, 10);
	next();
});

userSchema.methods.matchPassword = async function (enteredPassword) {
   const res = await bcrypt.compare(enteredPassword, this.password)
    console.log(res)
	return await bcrypt.compare(enteredPassword, this.password);
};
export default mongoose.model("User", userSchema);  