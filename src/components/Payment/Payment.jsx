import React, { useState ,useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo1 from "../../assets/images/logo1.png";

const Payment = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const donorData = location.state;

  useEffect(() => {
    if (!donorData || !donorData.amount) {
      alert("❗ Invalid or expired payment data. Please fill the donation form again.");
      navigate("/");
    }
  }, [donorData]);

  const amount = donorData?.amount || 0;

  const loadRazorpayScript = () =>
    new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });

  const downloadCertificate = async (name, amount) => {
    try {
      const response = await fetch(
        "https://charity-backend-uj5e.onrender.com/api/certificate/generate-certificate",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, amount }),
        }
      );
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${name.replace(/ /g, "_")}_Certificate.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      alert("Failed to download certificate.");
    }
  };

  const handlePayment = async () => {
    console.log("Donor Data:", donorData);        
  console.log("Amount to be paid:", amount);    

    if (!donorData) return alert("Missing donor information.");
     if (amount < 1) return alert("Amount should be at least ₹1.");

    setLoading(true);

    const loaded = await loadRazorpayScript();
    if (!loaded) {
      alert("Failed to load Razorpay SDK.");
      setLoading(false);
      return;
    }

    try {
      const orderRes = await fetch(
        "http://localhost:5000/api/razorpay/create-order",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount: amount * 100 }),
        }
      );

      // 
      const resJson = await orderRes.json();
console.log("Backend Order Response:", resJson);

if (!resJson.success || !resJson.order) {
  alert("❌ Order creation failed from backend.");
  setLoading(false);
  return;
}

const order = resJson.order;
console.log("🧾 Final Order going to Razorpay:", order);
 
      const rzp = new window.Razorpay({
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order?.amount,
        currency: order?.currency,
        name: "माँ सिद्धेश्वरी चैरिटी ट्रस्ट",
        image: logo1,
        order_id: order?.id,
        handler: async (response) => {
          try {
            const verifyRes = await fetch(
              "http://localhost:5000/api/razorpay/verify-payment",
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                // 
                body: JSON.stringify({
          razorpay_order_id: response.razorpay_order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
          amount,
          FullName: donorData.FullName || "",
          ContactNumber: donorData.ContactNumber || "",
          Email: donorData.Email || "",
          address: donorData.address || "",
          category: donorData.category || "",
          Language: donorData.Language || "",
        }),
      }
    );

            
            

            const verifyData = await verifyRes.json();

            if (verifyData.success) {
              alert("🎉 Payment Verified!");
              await downloadCertificate(donorData.FullName, amount);
            } else {
              alert("❌ Payment verification failed.");
            }
          } catch (err) {
            console.error("Verification error:", err);
            alert("Server verification error.");
          }
          setLoading(false);
        },
        prefill: {
          name: donorData.FullName,
          email: donorData.Email,
          contact: donorData.ContactNumber,
        },
        theme: { color: "#3399cc" },
      });

      rzp.open();
    } catch (error) {
      console.error("Payment initiation failed:", error);
      alert("Payment initiation failed.");
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">Make a Donation</h1>
      <img src={logo1} alt="Charity Logo" className="mx-auto mb-4" />
      <input
        type="number"
        value={amount}
        readOnly
        className="w-full p-2 border rounded mb-4"
      />
      <button
        onClick={handlePayment}
        disabled={loading}
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        {loading ? "Processing..." : "Donate Now"}
      </button>
    </div>
  );
};

export default Payment;
