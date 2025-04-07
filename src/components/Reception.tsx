import { Map } from "./Map";

export const Reception = (): JSX.Element => {
  return (
    <section className="p-6 md:p-10">
      <h2 className="font-display text-4xl md:text-6xl text-center my-4 md:mx-4">
        Vigsel och mottagning
      </h2>
      <div className="flex flex-col md:flex-row justify-center text-bodyregular">
        <figure className="px-5 py-6">
          <figcaption className="font-semibold">Schema</figcaption>
          <ul>
            <li>Buss från Ad Astra till vigsel:</li>
            <li>Vigsel:</li>
            <li>Middag:</li>
            <li>Buss från fest till hotell Ad Astra 1:</li>
            <li>Buss från fest till hotell Ad Astra 2:</li>
            <li>Last Call:</li>
          </ul>
        </figure>
        <div className="m-5">
          <Map />
        </div>
      </div>
    </section>
  );
};
