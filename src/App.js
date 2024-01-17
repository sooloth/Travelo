import React, { useEffect } from "react";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Recommend from "./Components/Recommend";
import ScrollToTop from "./Components/ScrollToTop";
import Services from "./Components/Services";
import Testimonials from "./Components/Testimonials";
import ScrollReveal from "scrollreveal";
function App() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    sr.reveal(
      `
          nav,
          #hero,
          #services,
          #recommend,
          #testimonials,
          footer
          `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Services />
      <Recommend />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
