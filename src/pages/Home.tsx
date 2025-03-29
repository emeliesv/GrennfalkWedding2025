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
  const heroRef = useRef<HTMLDivElement | null>(null);
  const toastRef = useRef<HTMLDivElement | null>(null);
  const infoRef = useRef<HTMLDivElement | null>(null);
  const accomodationRef = useRef<HTMLDivElement | null>(null);
  const receptionRef = useRef<HTMLDivElement | null>(null);
  const footerRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <Header
        heroRef={heroRef}
        toastRef={toastRef}
        infoRef={infoRef}
        accomodationRef={accomodationRef}
        receptionRef={receptionRef}
        footerRef={footerRef}
      />

      <main>
        <div id="hero" ref={heroRef}>
          <Hero />
        </div>
        <div id="toastmasters" ref={toastRef}>
          <Toastmasters />
        </div>
        <div id="guestinfo" ref={infoRef}>
          <GuestInfo />
        </div>
        <div id="reception" ref={receptionRef}>
          <Reception />
        </div>
        <div id="accomodations-and-transport" ref={accomodationRef}>
          <Accomodations />
          <Transport />
        </div>
      </main>
      <div id="footer" ref={footerRef}>
        <Footer />
      </div>
    </>
  );
};

export default Home;
