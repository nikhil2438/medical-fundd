import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo1 from "../../assets/images/logo1.png";
import educationImg from "../../assets/images/education.jpg";
import foodImg from "../../assets/images/Food.jpg";
import healthcareImg from "../../assets/images/banner7.jpg";
import womenImg from "../../assets/images/page.png";
import "../Pages/navbar.css";

const initiatives = [
  { title: "Education", route: "/education", image: educationImg },
  { title: "Food & Nutrition", route: "/food&nutrition", image: foodImg },
  { title: "Healthcare", route: "/healthcare", image: healthcareImg },
  { title: "Women Empowerment", route: "/womenempowerment", image: womenImg },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const desktopDropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    localStorage.setItem("selectedLanguage", lang);
    setTimeout(() => {
      const select = document.querySelector(".goog-te-combo");
      if (select) {
        select.value = lang;
        select.dispatchEvent(new Event("change"));
      }
    }, 500);
  };

  const modifyTranslateText = () => {
    const observer = new MutationObserver(() => {
      document.querySelectorAll("span").forEach((span) => {
        if (span.textContent.trim().toLowerCase() === "select language") {
          span.textContent = "Language";
        }
      });
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  };

  useEffect(() => {
    if (!document.querySelector("#google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }

    window.googleTranslateElementInit = () => {
      if (!document.querySelector(".skiptranslate")) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,hi",
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element"
        );
      }

      if (
        window.innerWidth < 768 &&
        document.querySelector("#google_translate_element_mobile")
      ) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,hi",
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element_mobile"
        );
      }

      modifyTranslateText();
    };

    const savedLang = localStorage.getItem("selectedLanguage") || "en";
    setLanguage(savedLang);

    setTimeout(() => {
      const select = document.querySelector(".goog-te-combo");
      if (select) {
        select.value = savedLang;
        select.dispatchEvent(new Event("change"));
      }
    }, 1000);

    const style = document.createElement("style");
    style.innerHTML = `
      .goog-te-spinner-pos,
      .goog-te-spinner-animation,
      .goog-te-spinner,
      .goog-tooltip,
      #goog-gt-tt,
      .activity-root,
      .status-message,
      .goog-te-banner-frame.skiptranslate {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
      }
      body { top: 0 !important; }
    `;
    document.head.appendChild(style);

    const observer = new MutationObserver(() => {
      const spinner = document.querySelector(".goog-te-spinner-pos");
      if (spinner) {
        spinner.style.display = "none";
        spinner.style.opacity = "0";
        spinner.style.visibility = "hidden";
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    const handleClickOutside = (event) => {
      if (
        desktopDropdownRef.current &&
        !desktopDropdownRef.current.contains(event.target)
      ) {
        setDesktopDropdownOpen(false);
      }
      if (
        mobileDropdownRef.current &&
        !mobileDropdownRef.current.contains(event.target)
      ) {
        setMobileDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      observer.disconnect();
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white shadow-md z-50 relative">
      <div className="container mx-auto px-2 py-1 flex justify-between items-center">
        <Link to="/">
          <img
            src={logo1}
            alt="MA SIDISHWARI Logo"
            className="object-contain h-24 w-24"
          />
        </Link>

        <div className="hidden md:flex space-x-8 font-semibold tracking-wide items-center">
          <Link to="/" className="text-gray-700 hover:text-orange-500 transition">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-orange-500 transition">
            About Us
          </Link>

          <div className="relative group" ref={desktopDropdownRef}>
            <button
              onClick={() => setDesktopDropdownOpen((prev) => !prev)}
              className="text-gray-700 hover:text-orange-500 transition flex items-center gap-1"
            >
              Our Initiative <ChevronDown size={16} />
            </button>
            {desktopDropdownOpen && (
              <div className="absolute left-0 top-full bg-white shadow-md rounded-md mt-2 w-48 z-50">
                {initiatives.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      navigate(item.route);
                      setDesktopDropdownOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-orange-100"
                  >
                    {item.title}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link to="/events" className="text-gray-700 hover:text-orange-500 transition">
            Events
          </Link>
          <Link to="/gallery" className="text-gray-700 hover:text-orange-500 transition">
            Gallery
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4 relative">
          <button
            onClick={() => navigate("/DonationForm")}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 transition"
          >
            Donate
          </button>
          <div id="google_translate_element"></div>
        </div>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          {["/", "/about", "/events", "/gallery", "/DonationForm"].map(
            (route, i) => {
              const labels = [
                "Home",
                "About Us",
                "Events",
                "Gallery",
                "Donate",
              ];
              return (
                <Link
                  key={route}
                  to={route}
                  className={`block px-6 py-3 ${
                    i === 4
                      ? "bg-orange-500 text-white text-center rounded-b-lg"
                      : "text-orange-700 hover:bg-orange-100 transition"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {labels[i]}
                </Link>
              );
            }
          )}

          <div className="px-6 pt-3 border-t" ref={mobileDropdownRef}>
            <button
              onClick={() => setMobileDropdownOpen((prev) => !prev)}
              className="flex justify-between items-center w-full text-orange-700 font-semibold"
            >
              Our Initiative <ChevronDown size={16} />
            </button>
            {mobileDropdownOpen && (
              <div className="mt-2">
                {initiatives.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      navigate(item.route);
                      setIsMobileMenuOpen(false);
                      setMobileDropdownOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-orange-100"
                  >
                    {item.title}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="px-6 py-3 border-t flex justify-between items-center">
            <span className="text-gray-700 font-medium">Language:</span>
            <select
              value={language}
              onChange={(e) => handleLanguageChange(e.target.value)}
              className="border border-gray-300 rounded px-2 py-1"
            >
              <option value="en">English</option>
              <option value="hi">हिंदी</option>
            </select>
          </div>

          <div className="px-6 py-3" id="google_translate_element_mobile"></div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
 
