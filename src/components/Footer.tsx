import Button from "./Button";
import Image from "./ImageComponent";
import RSVP from "./RSVP";

import { useModal } from "../context/DialogContext";

import cake from "/assets/tårta.png?url";
import bottlewGlass from "/assets/flaskaoglas.png?url";
import candle from "/assets/ljus.png?url";
import tomatos from "/assets/Tomater.png?url";
import plate from "/assets/tallrik.png?url";
import lemons from "/assets/citroner.png?url";
import tower from "/assets/bubbeltorn.png?url";

const Footer = () => {
  const { openModal } = useModal();

  return (
    <footer className="flex flex-col justify-center gap-5 items-center py-10 px-6 md:px-0 bg-jossanKalleAccent">
      <p className="md:text-center md:w-[615px]">
        GLÖM EJ: Namn på vilka som kommer, anmäl allergi/matpreferenser, om man
        vill åka med buss till och/eller från hotell i södertälje, annat viktigt
        vi kan behöva veta. <br />
        <b>OBS! Boende fixar man själv.</b>
      </p>
      <div className="flex flex-col gap-3 justify-center items-center">
        <Button onClickFunction={openModal}>RSVP</Button>
        <RSVP />
        <div className="flex flex-col">
          <p className="py-4 w-full md:text-center">
            NU BÖRJAR VI NEDRÄKNINGEN! 
          </p>
          <p className="pb-4 w-full md:text-center">
            Réspondez s'il vous plaît
          </p>
        </div>
        <div className="flex flex-row flex-wrap md:flex-nowrap items-baseline justify-center">
          <Image
            srcUrl={cake}
            altText=""
            hidden={true}
            customClass="h-28 w-auto md:h-56"
          />
          <Image
            srcUrl={bottlewGlass}
            altText=""
            hidden={true}
            size="small"
            customClass="w-28"
          />
          <Image
            srcUrl={candle}
            altText=""
            hidden={true}
            customClass="h-24 w-auto md:h-56"
          />
          <Image srcUrl={tomatos} altText="" hidden={true} size="xsmall" />
          <Image srcUrl={plate} altText="" hidden={true} size="small" />
          <Image srcUrl={lemons} altText="" hidden={true} size="xsmall" />
          <Image srcUrl={tower} altText="" hidden={true} size="small" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
