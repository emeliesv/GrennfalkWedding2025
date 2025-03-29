import cake from "/assets/tårta.png?url";
import Image from "./ImageComponent";

export const GuestInfo = (): JSX.Element => {
  return (
    <section className="flex flex-col p-6 md:p-5 bg-jossanKalleSecondary">
      <h2 className="text-center font-display text-3xl md:text-6xl mt-3 mb-5">
        Gästinformation
      </h2>
      <div className="flex flex-col md:flex-row justify-center mt-6">
        <div className="md:w-[400px] text-bodyregular">
          <p>
            <b>Klädsel:</b>Ha på dig va fan du vill! Men helst inte naken.
            Sommarfin!
          </p>
          <p>
            <b>Mat och dryck:</b>Mat och dryck kommer serveras under dagen.
            Kocken{" "}
            <a
              href="https://albinedberg.se/"
              className="underline hover:font-semibold"
            >
              Albin Edberg
            </a>{" "}
            ser till att den blir god.  Allergier/kostavvikelser anmäls i RSVP.
            Fri bar! Med eller utan alkohol.
          </p>
          <p>
            <b>RSVP:</b>Görs längst ned på sidan
          </p>
          <p>Vigsel kommer äga rum utomhus och middag inomhus i lada</p>
          <p>Kan man ta med plus 1?</p>
          <p>Är barn välkomna?</p>
        </div>
        <Image srcUrl={cake} altText="" />
        <div className="md:w-[400px] text-bodyregular">
          <p>
            <b>Transport:</b>Se nedan. Anmäl i RSVP om man vill åka med i buss
            till hotellet.
          </p>
          <p>
            <b>Parkering:</b>Vill man ta egen bil går det. Se skyltning när ni
            kommer fram för parkering.
          </p>
          <p>
            <b>Gåvor:</b>Att ni kommer är gåva nog för oss. Men om man verkligen
            vill ge något är bidrag till bröllopsresa uppskattat.
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
