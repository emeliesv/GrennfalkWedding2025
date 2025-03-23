import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export const Map = (): JSX.Element => {
  const position: [number, number] = [59.1043066, 17.8807879];

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "450px", width: "360px" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}>
        <Popup>
          <b>Vigsel och fest!</b>
        </Popup>
      </Marker>
    </MapContainer>
  );
};
