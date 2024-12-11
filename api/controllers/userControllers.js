export const updateProfile = async (req, res) => {
  try {
      const {   image , ...otherData} = req.body;
      let updatedData = { ...otherData };
      
      if (image) {
        // base64 format ye jab frontend use krenge tb pta chal jayega
        if (image.startsWith("data:image")) {
            try {
                const uploadResponse = await cloudinary.uploader.upload(image);
                updatedData.image = uploadResponse.secure_url;
            } catch (error) {
                console.error("Error uploading image:", uploadError);

                return res.status(400).json({
                    success: false,
                    message: "Error uploading image",
                });
            }
        }
    }

      const updatedUser = await User.findByIdAndUpdate(req.user._id, updatedData, {
          new: true,
          runValidators: true,
      });
      res.status(200).json({
          success: true,
          data: updatedUser,
      });
  } catch (error) {
    console.log(`error in update profile` , error);
    res.status(500).json({
        success: false,
        message: "Error in updating profile",
    });
  }
};