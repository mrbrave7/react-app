/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import "./Register.css";
import registerUser from "./../../../utilities/register";
import fileUploadToCloudinary from "../../../utilities/imageUploadToCloudinary";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../../store/authSlice";
function Register() {
  const imageRef = useRef(null);
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    userName: "",
    password: "",
    avatar: "",
  });
  const [isUploading, setIsUploading] = useState(false);
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isUploading) {
        alert("Please wait for the image to finish uploading.");
        return;
      }

      if (!formData.avatar) {
        alert("Please upload an avatar image.");
        return;
      }

      const data = await registerUser(formData);
      console.log(data.createdUser);
      // Handle the response from the backend
      dispach(loginSuccess(data.createdUser));
      setFormData({
        email: "",
        fullName: "",
        userName: "",
        password: "",
        avatar: "",
      });
      setImage(null);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleImagePicker = () => {
    imageRef.current.click();
  };
  const dispach = useDispatch();

  const handleImageChange = async (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      setImage(selectedImage);
      setIsUploading(true);
      try {
        const res = await fileUploadToCloudinary(selectedImage);
        setFormData((prevData) => ({
          ...prevData,
          avatar: res.url,
        }));
        setIsUploading(false);
      } catch (err) {
        console.error(err);
        setIsUploading(false);
      }
    }
  };

  return (
    <main className="mainDiv">
      <div className="formContainer">
        <img src="/Logo.png" className="logo" alt="Logo" />
        <h1 className="formContainerHeading">Register Here!</h1>
        <form className="registerForm" onSubmit={handleSubmit}>
          <input
            placeholder="Email"
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            placeholder="Fullname"
            type="text"
            name="fullName"
            id="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          <input
            placeholder="Username"
            type="text"
            name="userName"
            id="userName"
            value={formData.userName}
            onChange={handleChange}
          />
          <input
            placeholder="Password"
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
          />
          <div className="ImagePicker" onClick={handleImagePicker}>
            <img
              className="cameraLogo"
              src={formData.avatar ? formData.avatar : "/camera.png"}
              alt="ImagePicker"
            />
            <input
              type="file"
              ref={imageRef}
              onChange={handleImageChange}
              name="image"
              id="image"
              style={{ display: "none" }}
            />
          </div>
          {isUploading && toast.info("Uploading Your Image")}
          <button type="submit">Submit</button>
        </form>
        <div className="navigate">
          {/* <Link to="/login">Already Have An Account</Link>
          <Link to="/forgot-password">Forgot Password</Link> */}
        </div>
      </div>
      <ToastContainer />
    </main>
  );
}

export default Register;
