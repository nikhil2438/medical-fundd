import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Pages/Navbar";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Pages/Gallery";
import Events from "./components/Pages/Events";
import Ourinitiate from "./components/Pages/Ourinitiate";
import Education from "./components/Pages/Education";
// import Rtgs from "./components/Payment/Rtgs";
import DonationForm from "./components/DonationForm/DonationForm";
import FundRaise from "./components/FundRaise/FundRaise";
import Healthcare from "./components/Pages/Healthcare";
import FoodAndNutrition from "./components/Pages/FoodAndNutrition";
import WomenEmpowerment from "./components/Pages/WomenEmpowerment";
import Vision from "./components/DonationForm/Vision";
import PartnerPage from "./components/Work/Partnerpage";
import Payment from "./components/Payment/Payment";
import UpcomingEvents from "./components/Pages/UpcomingEvents";
import EventsHeld from "./components/Pages/EventsHeld";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events" element={<Events />} />
        <Route path="/Our-initiative" element={<Ourinitiate />} />
        <Route path="/donationform" element={<DonationForm />} />
        {/* <Route path="rtgs" element={<Rtgs />} /> */}
        <Route path="/education" element={<Education />} />
        <Route path="/healthcare" element={<Healthcare />} />
        <Route path="/food&nutrition" element={<FoodAndNutrition />} />
        <Route path="/womenempowerment" element={<WomenEmpowerment />} />
        <Route path="/fundraiser" element={<FundRaise />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/partner" element={<PartnerPage />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/upcoming-events" element={<UpcomingEvents />} />
<Route path="/events-held" element={<EventsHeld />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
