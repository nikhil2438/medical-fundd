import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function DonationForm({ categoryFromPage }) {
  const [formData, setFormData] = useState({
    FullName: "",
    ContactNumber: "",
    Email: "",
    address: "",
    category: categoryFromPage || "",
    Language: "",
    amount: "",
  });

  const [approvedCauses, setApprovedCauses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (categoryFromPage) {
      setFormData((prev) => ({ ...prev, category: categoryFromPage }));
    }

    const fetchApprovedFundraisers = async () => {
      try {
        const res = await fetch(
          "https://charity-backend-uj5e.onrender.com/api/fundraisers/approved"
        );
        const data = await res.json();
        const allCategories = data.map((item) => item.cause);
        setApprovedCauses(allCategories);
      } catch (err) {
        console.error("Error fetching approved fundraisers:", err);
      }
    };

    fetchApprovedFundraisers();
  }, [categoryFromPage]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      amount: Number(formData.amount),
    };

    if (!/^[0-9]{10}$/.test(payload.ContactNumber)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(payload.Email)) {
      alert("Please enter a valid email address.");
      return;
    }

     if (payload.amount < 1) {
       alert("Minimum donation amount is ₹1.");
       return;
     }

    navigate("/payment", { state: payload });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg space-y-4"
      >
        <h2 className="text-xl font-semibold text-orange-500 text-center mb-4">
          Maa Siddheshwari Charity Trust
        </h2>

        <input
          type="text"
          name="FullName"
          placeholder="Full Name"
          value={formData.FullName}
          onChange={handleChange}
          className="w-full p-3 border rounded-md"
          required
        />
        <input
          type="tel"
          name="ContactNumber"
          placeholder="Phone"
          maxLength={10}
          value={formData.ContactNumber}
          onChange={handleChange}
          className="w-full p-3 border rounded-md"
          required
        />
        <input
          type="email"
          name="Email"
          placeholder="Email"
          value={formData.Email}
          onChange={handleChange}
          className="w-full p-3 border rounded-md"
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full p-3 border rounded-md"
          required
        />

        {categoryFromPage ? (
          <input type="hidden" name="category" value={formData.category} />
        ) : (
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-3 border rounded-md"
            required
          >
            <option value="">Select Approved Category</option>
            {approvedCauses.map((cause, idx) => (
              <option key={idx} value={cause}>
                {cause}
              </option>
            ))}
          </select>
        )}

        <select
          name="Language"
          value={formData.Language}
          onChange={handleChange}
          className="w-full p-3 border rounded-md"
          required
        >
          <option value="">Select Language</option>
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="Tamil">Tamil</option>
        </select>

        <input
          type="number"
          name="amount"
          placeholder="Donation Amount (₹)"
          value={formData.amount}
          onChange={handleChange}
           min={1}
          className="w-full p-3 border rounded-md"
          required
        />

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-3 rounded-md font-semibold hover:bg-orange-600"
        >
          Proceed to Payment
        </button>
      </form>
    </div>
  );
}

export default DonationForm;
