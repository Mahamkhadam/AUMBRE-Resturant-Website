import Navbar from "./components/Navbar";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Chefs from "./pages/Chefs";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Gallery from "./pages/Gallery";
import Menu from "./pages/Menu";
import Testimonials from "./pages/Testimonials";
import Reserve from "./pages/Reserve";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/chefs" element={<Chefs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/reserve" element={<Reserve />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;