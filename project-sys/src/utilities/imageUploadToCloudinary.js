import axios from 'axios';

const uploadImageToCloudinary = async (file) => {
  const cloudName = 'diyhkjyn2'; // Replace with your Cloudinary cloud name
  const uploadPreset = 'ml_default'; // Replace with your Cloudinary upload preset

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', uploadPreset); // Ensure the upload preset is included

  try {
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error uploading image to Cloudinary:', error);
    throw error;
  }
};

export default uploadImageToCloudinary;
