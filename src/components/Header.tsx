import { useState } from "react";

type HeaderProps = {
  scrollToHero: () => void;
  scrollToToastmasters: () => void;
  scrollToInfo: () => void;
  scrollToReception: () => void;
  scrollToAccomodation: () => void;
  scrollToFooter: () => void;
};

const Header = ({
  scrollToHero,
  scrollToToastmasters,
  scrollToInfo,
  scrollToAccomodation,
  scrollToReception,
  scrollToFooter,
}: HeaderProps) => {
  const [hamburgerOpen, setHamburgerOpen] = useState<Boolean>(false);

  const toggleBurger = () => {
    return setHamburgerOpen(!hamburgerOpen);
  };

  /* FORTSÄTTA MED: göra en hamburgermeny (komponent), sätta navigeringen på rätt sida i desktop
  göra toggleBurger-funktionen typesafe */

  return (
    <header>
      <nav>
        <ul className="hidden sm:flex justify-end p-3">
          <li className="p-1">
            <button
              onClick={scrollToHero}
              className="hover:font-bold hover:underline m-1"
            >
              Home
            </button>
          </li>
          <li className="p-1">
            <button
              onClick={scrollToToastmasters}
              className="hover:font-bold hover:underline m-1"
            >
              Toastmasters
            </button>
          </li>
          <li className="p-1">
            <button
              onClick={scrollToInfo}
              className="hover:font-bold hover:underline m-1"
            >
              Gästinformation
            </button>
          </li>
          <li className="p-1">
            <button
              onClick={scrollToReception}
              className="hover:font-bold hover:underline m-1"
            >
              Vigsel och mottagning
            </button>
          </li>
          <li className="p-1">
            <button
              onClick={scrollToAccomodation}
              className="hover:font-bold hover:underline m-1"
            >
              Boende och transport
            </button>
          </li>
          <li className="p-1">
            <button
              onClick={scrollToFooter}
              className="hover:font-bold hover:underline m-1"
            >
              RSVP
            </button>
          </li>
        </ul>
        <div
          className="flex flex-col sm:hidden h-full ml-4"
          onClick={toggleBurger}
        >
          HAMMY
        </div>
      </nav>
    </header>
  );
};

export default Header;
