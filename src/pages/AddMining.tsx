import React, { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";

const ImageUploadPage = () => {
  const [uploadStatus, setUploadStatus] = useState("");
  const [uploadedImage, setUploadedImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [sucsess, setSuccess] = useState(false);

  const navigate = useNavigate();
  const handleImageUpload = async () => {
    console.log({
      Image: uploadedImage,
      title: title,
      description: description,
    });
    if (uploadStatus == "Upload successful!") {
      setSuccess(true);
      navigate("/");
    }
  };

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const cloudName = "dqljcai0w";
    const uploadPreset = "kal-upload";
    const selectedImage: File | undefined = event.target.files?.[0];
    if (selectedImage) {
      try {
        setUploadStatus("Uploading...");

        const formData = new FormData();
        formData.append("file", selectedImage);
        formData.append("upload_preset", uploadPreset);

        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          formData
        );

        setUploadStatus("Upload successful!");
        console.log("Image URL:", response.data.secure_url);
        setUploadedImage(response.data.secure_url);
      } catch (error) {
        console.error("Error uploading image:", error);
        setUploadStatus("Upload failed. Please try again.");
      }
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const openSidebar = () => {
    setIsOpen(!isOpen);
  };
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex">
      <div className={`w-screen flex flex-col `}>
        <Header openSidebar={openSidebar} />
        <div className="flex items-center justify-center  bg-login-image">
          <div className="bg-gray-100 bg-opacity-90 py-8  flex min-w-full">
            <div className="max-w-xl w-full mx-auto border bg-white rounded-md mt-10 shadow-md">
              {/* {error && (
                <div className="bg-red-100 text-red-600 py-2 px-4 mb-4 text-center font-bold rounded-md">
                  Invalid credentials
                </div>
              )} */}
              {sucsess && (
                <div className="bg-green-100 border border-green-200 text-green-600 py-2 px-4 mb-4 text-center font-bold rounded-md">
                  successful!
                </div>
              )}

              <form
                onSubmit={handleImageUpload}
                className="bg-white rounded-md p-8 my-4"
              >
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter your title"
                    className="  w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-100"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="description"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Description
                  </label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter your description"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200 "
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="image"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Image
                  </label>
                  <input
                    type="file"
                    onChange={handleImageChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                    required
                  />
                  <p>{uploadStatus}</p>
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    add mining
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>

      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default ImageUploadPage;
