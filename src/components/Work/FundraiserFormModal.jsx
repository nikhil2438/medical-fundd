import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const FundraiserFormModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    cause: "",
    amount: "",
  });

  const [imageFile, setImageFile] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleVideoChange = (e) => {
    setVideoFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("contact", formData.contact);
      data.append("email", formData.email);
      data.append("cause", formData.cause);
      data.append("amount", formData.amount);
      if (imageFile) data.append("image", imageFile);
      if (videoFile) data.append("video", videoFile);

      const res = await fetch(
        "https://charity-backend-uj5e.onrender.com/api/fundraisersRegister",
        {
          method: "POST",
          body: data,
        }
      );

      const result = await res.json();

      if (res.ok) {
        alert(result.message || "Fundraiser submitted successfully!");
        onClose();
        setFormData({
          name: "",
          contact: "",
          email: "",
          cause: "",
          amount: "",
        });
        setImageFile(null);
        setVideoFile(null);
      } else {
        alert(result.message || "Failed to submit fundraiser");
      }
    } catch (error) {
      console.error("Submit error:", error);
      alert("An error occurred while submitting fundraiser.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-xl rounded-lg shadow-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-2xl"
        >
          <IoClose />
        </button>
        <h3 className="text-2xl font-semibold text-red-600 mb-4">
          Start a Fundraiser
        </h3>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 text-left"
          encType="multipart/form-data"
        >
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <input
            name="contact"
            type="text"
            placeholder="Contact Number"
            value={formData.contact}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <textarea
            name="cause"
            placeholder="Cause of Fund"
            rows="3"
            value={formData.cause}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <input
            name="amount"
            type="number"
            placeholder="Fund Value (₹)"
            value={formData.amount}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />

          <div>
            <label className="block text-sm font-medium">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Upload Video</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleVideoChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit Fundraiser"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FundraiserFormModal;
