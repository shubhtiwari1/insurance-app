// import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../Components/Home";
import Contact from "../Components/Contact"; // Import your Contact component

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />{" "}
          {/* Route for Contact page */}
        </Routes>
      </div>
    </Router>
  );
}
