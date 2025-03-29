/* import Button from "./Button";
import { useModal } from "../context/DialogContext";
import RSVP from "./RSVP"; */

const Hero = () => {
  /* const { openModal } = useModal(); */
  return (
    <section className="bg-jossanKalleSecondary grid grid-cols-1 md:grid-cols-2 gap-4justify-items-center items-center">
      <article className="flex flex-col justify-center items-center py-10">
        <h1 className="text-h1 text-center text-jossanKalleBrand font-display">
          We're getting married!
        </h1>
        <p>09 Augusti 2025</p>
        <p>Bröthagen, 147 91 Grödinge</p>
        {/* <Button onClickFunction={openModal}>RSVP</Button>
        <RSVP /> */}
      </article>
      <div className="bg-jossanKalleBrand px-14 md:px-28 py-5">
        <figure>
          <video
            controls
            aria-label="Video announcing a save the date 9th of August for Jossan and Kalles Wedding 2025"
            className="min-h-[400px] md:min-h-[585px] aspect-video object-cover my-5"
          >
            <source src="/assets/savethedate2025.mp4" type="video/mp4" />
            Your browser does not support the video
          </video>
          <figcaption className="hidden">
            Save the date for Jossan and Kalles wedding August 2025
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
