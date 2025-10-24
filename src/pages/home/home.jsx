// 


import React from "react";
import { HeroSection } from "./HeroSection";
import { KeyFeaturesSection } from "./KeyFeaturesSection";
import { FooterHome } from "./footerHome";
import Service from "./service";
import Testimonial from "./testimonial";
import ContactUs from "./Contactus";
import useScrollReveal from "../../components/useScrollReveal";


function Home() {
  useScrollReveal(); // 👈 activates reveal for all sections

  return (
    <>
      <div className="reveal">
        <section id="hero-section">
          <HeroSection />
        </section>
      </div>

      <div className="reveal">
        <section id="key-features-section">
          <KeyFeaturesSection />
        </section>
      </div>

      <div className="reveal" id="service-section">
        <Service />
      </div>

      <div className="reveal" id="testimonial-section">
        <Testimonial />
      </div>

      <div className="reveal" id="Contactus-section">
        <ContactUs />
      </div>

      {/* <div className="reveal">
        <FooterHome />
      </div> */}
    </>
  );
}

export default Home;
