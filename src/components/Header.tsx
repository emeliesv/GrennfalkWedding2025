import { RefObject, useState } from "react";
import { Burger } from "./Burger";

type HeaderProps = {
  heroRef: RefObject<HTMLElement>;
  toastRef: RefObject<HTMLElement>;
  infoRef: RefObject<HTMLElement>;
  accomodationRef: RefObject<HTMLElement>;
  receptionRef: RefObject<HTMLElement>;
  footerRef: RefObject<HTMLElement>;
};

const Header = ({
  heroRef,
  toastRef,
  infoRef,
  accomodationRef,
  receptionRef,
  footerRef,
}: HeaderProps) => {
  const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false);

  const toggleBurger = () => {
    return setHamburgerOpen(!hamburgerOpen);
  };

  const handleScroll = (ref: RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`${hamburgerOpen} && bg-jossanKalleSecondary`}>
      <nav>
        <ul className="hidden sm:flex justify-end p-3">
          <li className="p-1">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleScroll(heroRef);
              }}
              className="hover:font-bold hover:underline m-1"
            >
              Home
            </a>
          </li>
          <li className="p-1">
            <a
              href="#toastmasters"
              onClick={(e) => {
                e.preventDefault();
                handleScroll(toastRef);
              }}
              className="hover:font-bold hover:underline m-1"
            >
              Toastmasters
            </a>
          </li>
          <li className="p-1">
            <a
              href="#guestinfo"
              onClick={(e) => {
                e.preventDefault();
                handleScroll(infoRef);
              }}
              className="hover:font-bold hover:underline m-1"
            >
              Gästinformation
            </a>
          </li>
          <li className="p-1">
            <a
              href="#reception"
              onClick={(e) => {
                e.preventDefault();
                handleScroll(receptionRef);
              }}
              className="hover:font-bold hover:underline m-1"
            >
              Vigsel och mottagning
            </a>
          </li>
          <li className="p-1">
            <a
              href="#accomodations-and-transport"
              onClick={(e) => {
                e.preventDefault();
                handleScroll(accomodationRef);
              }}
              className="hover:font-bold hover:underline m-1"
            >
              Boende och transport
            </a>
          </li>
          <li className="p-1">
            <a
              href="#footer"
              onClick={(e) => {
                e.preventDefault();
                handleScroll(footerRef);
              }}
              className="hover:font-bold hover:underline m-1"
            >
              RSVP
            </a>
          </li>
        </ul>
        <div
          className="flex flex-col sm:hidden items-end mr-4"
          onClick={toggleBurger}
        >
          <Burger isOpen={hamburgerOpen} />
          {hamburgerOpen && (
            <ul className="flex flex-col py-3 absolute text-right right-0 top-8 w-full bg-jossanKalleSecondary border-b-2 border-jossanKalleBrand">
              <li className="py-1">
                <a
                  href="#hero"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(heroRef);
                  }}
                  className="hover:font-bold hover:underline m-1"
                >
                  Home
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#toastmasters"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(toastRef);
                  }}
                  className="hover:font-bold hover:underline m-1"
                >
                  Toastmasters
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#guestinfo"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(infoRef);
                  }}
                  className="hover:font-bold hover:underline m-1"
                >
                  Gästinformation
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#reception"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(receptionRef);
                  }}
                  className="hover:font-bold hover:underline m-1"
                >
                  Vigsel och mottagning
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#accomodations-and-transport"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(accomodationRef);
                  }}
                  className="hover:font-bold hover:underline m-1"
                >
                  Boende och transport
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#footer"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(footerRef);
                  }}
                  className="hover:font-bold hover:underline m-1"
                >
                  RSVP
                </a>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
