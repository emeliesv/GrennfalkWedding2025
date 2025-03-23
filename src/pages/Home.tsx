import { useRef } from "react";

import Hero from "../components/Hero";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Toastmasters from "../components/Toastmasters";
import { GuestInfo } from "../components/GuestInfo";
import { Reception } from "../components/Reception";
import { Accomodations } from "../components/Accomodations";
import { Transport } from "../components/Transport";

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const toastmasterRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const receptionRef = useRef<HTMLDivElement>(null);
  const accomodationRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Header
        scrollToHero={() => scrollToSection(heroRef)}
        scrollToToastmasters={() => scrollToSection(toastmasterRef)}
        scrollToInfo={() => scrollToSection(infoRef)}
        scrollToReception={() => scrollToSection(receptionRef)}
        scrollToAccomodation={() => scrollToSection(accomodationRef)}
        scrollToFooter={() => scrollToSection(footerRef)}
      />

      <main>
        <div ref={heroRef}>
          <Hero />
        </div>
        <div ref={toastmasterRef}>
          <Toastmasters />
        </div>
        <div ref={infoRef}>
          <GuestInfo />
        </div>
        <div ref={receptionRef}>
          <Reception />
        </div>
        <div ref={accomodationRef}>
          <Accomodations />
          <Transport />
        </div>
      </main>
      <div ref={footerRef}>
        <Footer />
      </div>
    </>
  );
};

export default Home;
