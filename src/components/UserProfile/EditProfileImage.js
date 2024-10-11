import React, { useState } from "react";
import Button from "../UI/Button";
import { FaCamera } from "react-icons/fa";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { editProfilePicture } from "../../Redux/Actions/UserActions";

const EditProfileImage = () => {
  const [selectedImage, setSelectedImage] = useState(null); // State to hold selected image
  const [imagePreview, setImagePreview] = useState(null); // State for image preview
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.edit_profile_picture_reducer.isLoading);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 5 * 1024 * 1024) {
      const fileType = file.type.split("/")[1];
      if (["png", "jpg", "jpeg"].includes(fileType)) {
        setSelectedImage(file);
        setImagePreview(URL.createObjectURL(file)); // Generate image preview
      } else {
        toast.error("Only PNG, JPG, and JPEG file types are allowed.");
      }
    } else {
      toast.error("Maximum file size allowed is 5MB.");
    }
  };

  const handleImageUpload = () => {
    if (selectedImage) {
      const body = {
        'profile_picture': selectedImage,
      };
      dispatch(editProfilePicture(body));
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
        Upload Profile Image
      </h2>
      <div className="flex flex-col items-center">
        {imagePreview ? (
          <img
            src={imagePreview}
            alt="Preview"
            className="w-40 h-40 rounded-full object-cover mb-4 border-4 border-gray-300"
          />
        ) : (
          <div className="w-40 h-40 rounded-full bg-gray-200 flex items-center justify-center mb-4 border-4 border-gray-300">
            <FaCamera className="text-gray-400 text-4xl" />
          </div>
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mb-4 w-full text-gray-500 file:border-0 file:mr-4 file:py-1.5 file:px-3 file:cursor-pointer cursor-pointer"
        />
        <Button onClick={handleImageUpload} isLoading={isLoading}>Upload</Button>
      </div>
    </div>
  );
};

export default EditProfileImage;
