import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dpu6mcqsy",
  api_key: "221293588987832",
  api_secret: "fvWiIc5WqiY4VHRJUgPjYDQuFSY",
});

export const uploadImage = async (filePath) => {
  return await cloudinary.uploader.upload(filePath, {
    folder: "posts",
  });
};

export const deleteImage = async (id) => {
  return await cloudinary.uploader.destroy(id);
};
