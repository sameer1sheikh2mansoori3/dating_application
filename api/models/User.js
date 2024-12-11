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
    if (!this.isModified("password")) {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = bcrypt.hash(this.password, salt);
    next();
});

userSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};
export default mongoose.model("User", userSchema);  