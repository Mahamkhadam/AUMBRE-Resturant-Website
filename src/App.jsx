import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Blogs from "./pages/blogs/Blogs";
import Chefs from "./pages/chefs/Chefs";
import Contact from "./pages/contact/Contact";
import Faq from "./pages/faq/Faq";
import Gallery from "./pages/gallery/Gallery";
import Menu from "./pages/menu/Menu";
import Testimonials from "./pages/testimonials/Testimonials";
import Reserve from "./pages/reserve/Reserve";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
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
    </div>
  );
}

export default App;