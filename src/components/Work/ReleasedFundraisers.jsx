import React, { useEffect, useState } from "react";

const ReleasedFundraisers = () => {
  const [releasedFundraisers, setReleasedFundraisers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReleasedFundraisers();
  }, []);

  const fetchReleasedFundraisers = async () => {
    try {
      const res = await fetch(
        "https://charity-backend-uj5e.onrender.com/api/fundraisers/released"
      );
      if (!res.ok) throw new Error("Failed to fetch released fundraisers");
      const data = await res.json();
      setReleasedFundraisers(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading released fundraisers...</p>;

  if (releasedFundraisers.length === 0) {
    return <p>No fundraisers have been released yet.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-green-700">
        Released Fundraisers
      </h2>
      {releasedFundraisers.map((fundraiser) => (
        <div
          key={fundraiser._id}
          className="mb-4 p-4 bg-gray-100 rounded shadow"
        >
          <h3 className="text-lg font-semibold">{fundraiser.name}</h3>
          <p>
            <strong>Cause:</strong> {fundraiser.cause}
          </p>
          <p>
            <strong>Amount Raised:</strong> ₹{fundraiser.amount}
          </p>
          <p>
            <strong>Status:</strong> Funds Released ✔️
          </p>
        </div>
      ))}
    </div>
  );
};

export default ReleasedFundraisers;
