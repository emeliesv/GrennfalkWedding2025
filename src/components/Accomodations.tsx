import Image from "./ImageComponent";
import AdAstra from "/assets/AdAstra.png?url";

export const Accomodations = (): JSX.Element => {
  return (
    <section className="bg-jossanKalleSecondary">
      <article className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-6 md:p-5 flex flex-col items-center text-bodyregular">
          <h2 className="font-display text-4xl md:text-6xl m-4">Boende</h2>
          <p>
            Behöver man boende ser vi gärna att man bokar hotell{" "}
            <a
              href="https://www.elite.se/hotell/sodertalje/ad-astra-by-elite/"
              className="underline hover:font-semibold"
            >
              Ad Astra by Elite
            </a>{" "}
            i Södertälje. Brudparet ska även de bo där från fredag - söndag.
            Tyvärr kunde de inte fixa rabattkod men nämn vid bokning att ni
            tillhör Josefin och Kalles sällskap så kanske vi lyckas få rum nära
            varann.
          </p>
        </div>
        <Image
          srcUrl={AdAstra}
          altText="AdAstra Elite hotel entrance"
          customClass="w-full"
        />
      </article>
    </section>
  );
};
