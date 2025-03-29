import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useMediaQuery } from "react-responsive";

export const Map = (): JSX.Element => {
  const position: [number, number] = [59.1043066, 17.8807879];
  const isLargeScreen = useMediaQuery({ minWidth: 768 });

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{
        height: isLargeScreen ? "450px" : "350px",
        width: isLargeScreen ? "360px" : "250px",
      }}
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
