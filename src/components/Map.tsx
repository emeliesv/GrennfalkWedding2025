import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useMediaQuery } from "react-responsive";

export const Map = (): JSX.Element => {
  const position: [number, number] = [59.1043066, 17.8807879];
  const isLargeScreen = useMediaQuery({ minWidth: 768 });

  const customIcon = new L.Icon({
    iconUrl: new URL("leaflet/dist/images/marker-icon.png", import.meta.url)
      .href,
    shadowUrl: new URL("leaflet/dist/images/marker-shadow.png", import.meta.url)
      .href,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

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
      <Marker position={position} icon={customIcon}>
        <Popup>
          <b>Vigsel och fest!</b>
        </Popup>
      </Marker>
    </MapContainer>
  );
};
