import "./App.css";
import { useState } from "react";

import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Projects from "./pages/Projects";
import Property from "./pages/Property";
import Blog from "./pages/Blog";
import Contact from "./pages/ContactUs";
import Property_detail from "./pages/Property_detail";
// ⬇️ add this line
import { Routes, Route } from "react-router-dom";
import ProjectDetail from "./pages/ProjectDetail";
import ContactPrarambh from "./pages/ContactUs";
import AdvisorLandingPage from "./pages/ContactUs";
import BlogDetailPage from "./component/RealEstateBlogPro";
import Career from "./pages/Career";
import SplashScreen from "./component/splash";
function App() {
   const [showSplash, setShowSplash] = useState(true);
  return (
     <>
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}

      {!showSplash && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/property" element={<Property />} />
          <Route path="/property_detail/:id" element={<Property_detail />} />
          <Route path="/property/:id" element={<Property_detail />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/career" element={<Career />} />
          <Route path="/blog/:id" element={<BlogDetailPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact-us" element={<ContactPrarambh />} />
          {/* If AdvisorLandingPage is different, add its own route */}
          {/* <Route path="/advisor" element={<AdvisorLandingPage />} /> */}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      )}
    </>
  );
}

export default App;
