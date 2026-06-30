import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Gallery from "../pages/Gallery";
import Calendar from "../pages/Calendar";
import News from "../pages/News";
import Contact from "../pages/Contact";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToHash from "../components/ScrollToHash";

function AppRoutes() {
  return (
    <BrowserRouter>

      <ScrollToHash />

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/gallery" element={<Gallery />} />

        <Route path="/calendar" element={<Calendar />} />

        <Route path="/news" element={<News />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default AppRoutes;