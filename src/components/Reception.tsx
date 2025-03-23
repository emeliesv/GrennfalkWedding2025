import { Map } from "./Map";

export const Reception = (): JSX.Element => {
  return (
    <section className="p-10">
      <h2 className="font-display text-6xl text-center m-4">
        Vigsel och mottagning
      </h2>
      <div className="flex justify-center">
        <figure className="px-5 py-6">
          <figcaption className="font-semibold">Schema</figcaption>
          <ul>
            <li>Vigsel</li>
            <li>Fördrink och mingel</li>
            <li>Buss till hotell 1</li>
            <li>Buss till hotell 2</li>
            <li>Last Call</li>
          </ul>
        </figure>
        <div className="m-5">
          <Map />
        </div>
      </div>
    </section>
  );
};
