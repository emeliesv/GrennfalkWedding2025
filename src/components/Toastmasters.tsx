import Viktor from "/assets/ToastmasterViktor.png?url";
import Johan from "/assets/ToastmasterJohan.png?url";
import Image from "./ImageComponent";

const Toastmasters = (): JSX.Element => {
  return (
    <section className="p-6 md:p-10 flex flex-col justify-center items-center">
      <article className="flex flex-col md:w-[800px] my-10 md:mx-10">
        <h2 className="font-display text-center text-3xl md:text-6xl">
          Meet our Toastmasters
        </h2>
        <p className="md:text-center text-bodyregular mt-6">
          Vi har med stor omsorg valt ut en av våra toastmasters, den andra kom
          på köpet. Man måste liksom ha två. Vem som är vem får ni lista ut
          själva. Båda är dock väldigt ordningssamma, trevliga och vi har stort
          förtroende för dessa eminenta herrar, Kontakta dem för tal eller spex
          och de har (bör ha) koll på allt för dagen om ni har några frågor!
        </p>
      </article>
      <div className="flex flex-col md:flex-row w-full justify-center">
        <article className="flex flex-col md:flex-row md:w-[500px] items-center md:items-start">
          <Image
            srcUrl={Viktor}
            altText="Toastmaster Viktor"
            customClass="px-5 mb-2"
          />
          <div className="flex-col text-jossanKalleBrand md:px-5">
            <h3 className="font-display text-3xl mt-6 mb-2">Viktor</h3>
            <p className="text-bodyregular">
              Viktor är en av brudgummens tre bröder. Näst yngst i skaran. Efter
              sin mor är han den mest pedantiska vi känner och anledningen till
              att han är rakad är för att så fort någon petade på håret behövde
              det stylas om. Se om ni hittar en rynka på skjortan. ​ Kontakt:
              073 405 03 28
            </p>
          </div>
        </article>
        <article className="flex flex-col md:flex-row md:w-[500px] items-center md:items-start mt-6">
          <Image
            srcUrl={Johan}
            altText="Toastmaster Johan"
            customClass="px-5 mb-2"
          />
          <div className="flex-col text-jossanKalleBrand md:px-5">
            <h3 className="font-display text-3xl mt-6 mb-2">Johan</h3>
            <p className="text-bodyregular">
              Johan tillhör brudens syster Agnes. Hans alter ego efter 4 öl
              heter Jonas och är snäppet trevligare än Johan själv. 6:e bästa
              paddelspelaren i Nyköping enligt honom själv. Kontakt: 070 617 18
              30
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Toastmasters;
