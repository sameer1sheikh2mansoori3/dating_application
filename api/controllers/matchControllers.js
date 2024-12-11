
import User from "../models/User.js";


export const swipeRight = async (req, res) => {
    try {
        const { likedUserId } = req.params;
        const likedUser = await User.findById(likedUserId);
        const currentUser = await User.findById(req.user._id);
        if (!currentUser.likes.includes(likedUserId)) {
            currentUser.likes.push(likedUserId);
            await currentUser.save();

            if (likedUser.matches.includes(currentUser._id)) {
                currentUser.matches.push(likedUserId);
                likedUser.matches.push(currentUser._id);
                //  ye kr do dono sath me ho gayega
                await Promise.all([
                    currentUser.save(),
                    likedUser.save()
                ]);
                // await likedUser.save(); 
                // await currentUser.save();
                 // TODO: SEND NOTIFICATION IF IT IS A NEW MATCH
            }

           
        }
       
        res.status(200).json({
            success: true,
            user: currentUser
        });
    } catch (error) {
console.log("error in swipe right" , error)
res.status(500).json({
    success: false,
    message: "Internal server error in swipe right"
})
}
};

export const swipeLeft = async (req, res) => {
    try {
        const { dislikedUserId } = req.params;
        const currentUser = await User.findById(req.user._id);
        if (!currentUser.dislikes.includes(dislikedUserId)) {
            currentUser.dislikes.push(dislikedUserId);
        }
        await currentUser.save();
        res.status(200).json({
            success: true,
            user: currentUser
        });
    } catch (error) {

    }
};

export const getMatches = async (req, res) => {

};

export const getUserProfile = async (req, res) => {
    try {
        const currentUser = await User.findById(req.user._id);
        const users = await User.find(
            {
                $and: [
                    { _id: { $ne: currentUser._id } },
                    { _id: { $nin: currentUser.matches } },
                    { _id: { $nin: currentUser.likes } },
                    { _id: { $nin: currentUser.dislikes } },
                    {

                        // genderpreference agr both hai toh male aur female ko match krenge 
                        // iskeluye hme dono gender k bnde lane hai
                        gender: currentUser.genderPreference === 'both' ? { $in: ['male', 'female'] } : currentUser.genderPreference
                    },
                    {
                        genderPreference: { $in: ['both', currentUser.gender] }
                    }
                ],
            }
        );

        res.status(200).json({
            success: true,
            users
        })
    } catch (error) {

    }
};