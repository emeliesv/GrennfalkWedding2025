import Image from "./ImageComponent";
import Kerstin from "/assets/Kerstin.png?url";

export const Transport = (): JSX.Element => {
  return (
    <section className="bg-jossanKalleSecondary">
      <article className="grid grid-cols-2">
        <Image
          srcUrl={Kerstin}
          altText="Owner of Kerstins Taxi receiving keys from driver"
          customClass="w-full"
        />
        <div className="p-5 flex flex-col items-center">
          <h2 className="font-display text-6xl m-4">Transport</h2>
          <p>
            Kerstins taxi kommer med buss att köra mellan hotellet och ladan i
            Grödinge.  Tiderna kommer vara:  Från hotellet till Vigseln -  Från
            festen till hotellet omgång 1 -  Från festen till hotellet omgång 2
            - 
          </p>
        </div>
      </article>
    </section>
  );
};
