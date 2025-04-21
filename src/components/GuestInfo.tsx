import JK from "/assets/J+K.jpg?url";
import cake from "/assets/tårta.png?url";
import Image from "./ImageComponent";
import { useMediaQuery } from "react-responsive";

export const GuestInfo = (): JSX.Element => {
  const isLargeScreen = useMediaQuery({ minWidth: 768 });

  return (
    <section className="flex flex-col p-6 md:p-5 bg-jossanKalleSecondary">
      <h2 className="text-center font-display text-3xl md:text-6xl mt-3 mb-5">
        Gästinformation
      </h2>
      <div className="flex flex-col md:flex-row justify-center mt-6">
        <div className="flex flex-col gap-2 md:w-[400px] text-bodyregular">
          <p>
            <b>Klädsel: </b>Ha på dig va fan du vill! Men helst inte naken.
            Sommarfin!
          </p>
          <p>
            <b>Mat och dryck: </b>Bubbel och enklare tilltugg efter vigseln och
            sedan middag. Allergier/kostavvikelser anmäls i RSVP. Fri bar! Med
            eller utan alkohol.
          </p>
          <p>
            <b>OSA: </b>Svara längst upp eller längst ned på sidan. Sista
            svarsdag:
            <br />
            <b>15 juni 2025</b>
          </p>
          <p>
            <b>Vigsel: </b>
            Vigsel kommer äga rum utomhus, medan middagen hålls inomhus i ladan
            på Bröthagen. Tänk gärna på att ta med extra kläder efter väder.
          </p>
          <p>
            <b>Plus en? </b>Undrar du om du får ta med en +1? Hör av dig till
            oss!
          </p>
          <p>
            <b>Barn? </b>Vi älskar barn! De är varmt välkomna till vigseln och
            minglet före middagen. Under själva middagen ser vi dock gärna att
            det är barnfritt. Ammande barn får givetvis vara med under hela
            dagen/kvällen.
          </p>
        </div>
        <div
          className={`flex justify-center items-center ${
            isLargeScreen ? "mx-10" : "mx-5"
          }`}
        >
          <Image
            srcUrl={isLargeScreen ? JK : cake}
            altText=""
            size={isLargeScreen ? "xsmall" : "medium"}
          />
        </div>
        {/* <picture className="flex justify-center items-center">
          <source
            srcSet={JK}
            media="(min-width: 768px)"
            className="min-h-80 max-h-96"
          />
          <img src={cake} alt="" className="max-h-52 mx-10" />
        </picture> */}
        <div className="flex flex-col gap-2 md:w-[400px] text-bodyregular">
          <p>
            <b>Transport:</b> Se informationsrutan om transport. Vi ordnar buss
            mellan hotell Ad Astra och bröllopet. Meddela i din OSA om du vill
            åka med bussen tillbaka till hotellet. Om du planerar att ta en taxi
            hem rekommenderar vi att du bokar en i förväg - av erfarenhet vet vi
            att det kan vara lite krångligt för taxi att ta sig ut till oss.
            Samåk gärna om det går!
          </p>
          <p>
            <b>Parkering:</b> Det går bra att ta egen bil. Följ skyltningen på
            plats för parkering. Det är även möjligt att lämna bilen över
            natten.
          </p>
          <p>
            <b>Gåvor: </b>Att ni kommer är gåva nog för oss. Men om man
            verkligen vill ge något är bidrag till bröllopsresa uppskattat.
          </p>
          <p>
            Finns det ytterligare funderingar kontakta någon av våra två
            toastmasters så hjälper de er.
          </p>
        </div>
      </div>
    </section>
  );
};
