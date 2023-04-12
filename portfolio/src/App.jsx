import { Route, Routes } from "react-router-dom";
import React from "react";

// Components
import AppWrapper from "./components/AppWrapper";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Routes
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

function App() {
  const [siteLang, SetSiteLang] = React.useState(localStorage.getItem("lang"));

  return (
    <AppWrapper>
      <>
        <Navbar className="absolute" SetSiteLang={SetSiteLang} siteLang={siteLang} />
        <Routes>
          <Route path="/" element={<AboutMe siteLang={siteLang} />} />
          <Route path="/projects" element={<Projects siteLang={siteLang} />} />
          <Route path="/experience" element={<Experience siteLang={siteLang} />} />
          <Route path="/contact" element={<Contact siteLang={siteLang} />} />
        </Routes>
        <Footer />
      </>
    </AppWrapper>
  );
}

export default App;
