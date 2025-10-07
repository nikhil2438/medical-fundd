import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ApprovedFundraisers = () => {
  const [fundraisers, setFundraisers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFundraisers = async () => {
      try {
        const response = await fetch(
          "https://charity-backend-uj5e.onrender.com/api/fundraisers/approved"
        );
        if (!response.ok) throw new Error("Failed to fetch fundraisers");
        const data = await response.json();
        setFundraisers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchFundraisers();
  }, []);

  if (loading) return <p>Loading fundraisers...</p>;
  if (error) return <p>Error: {error}</p>;
  if (fundraisers.length === 0) return <p>No approved fundraisers found.</p>;

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <p className="text-center max-w-3xl mx-auto text-gray-700 mb-8 text-lg leading-relaxed bg-red-50 p-6 rounded-lg">
        Every story below is more than just a cause — it's a cry for help, a
        dream waiting to be fulfilled, a family hoping for support. These
        fundraisers have been carefully reviewed and approved by our trust to
        ensure your generosity reaches those who truly need it most.
        <br />
        <br />
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {fundraisers.map(
          ({
            _id,
            name,
            contact,
            email,
            cause,
            amount,
            documentUrl,
            videoUrl,
          }) => (
            <div
              key={_id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              {documentUrl && (
                <img
                  src={documentUrl}
                  alt={name}
                  className="w-full h-48 object-cover rounded mb-4"
                />
              )}
              <h3 className="text-xl font-semibold mb-2">{name}</h3>
              <p className="text-gray-700">
                <strong>Cause:</strong> {cause}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Amount Needed:</strong> ₹{amount}
              </p>
              {videoUrl && (
                <a
                  href={videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline text-sm block mb-4"
                >
                  Watch Video
                </a>
              )}
              <button
                onClick={() =>
                  navigate("/donationform", {
                    state: {
                      fundraiserName: name,
                      contact,
                      email,
                      amount,
                      cause,
                    },
                  })
                }
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 w-full"
              >
                Donate Now
              </button>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default ApprovedFundraisers;
