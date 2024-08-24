import React from "react";
import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Tooltip,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import markerShadowPng from "leaflet/dist/images/marker-shadow.png";

// Fix for marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIconPng,
  iconRetinaUrl: markerIconPng,
  shadowUrl: markerShadowPng,
});

// Custom component to recenter the map
const RecenterMap = ({ lat, lng }) => {
  const map = useMap();

  const recenterMap = () => {
    map.setView([lat, lng], 40);
  };

  return (
    <button
      onClick={recenterMap}
      className="absolute top-2 right-2 z-50 bg-blue-500 text-white px-4 py-2 rounded shadow"
    >
      Recenter Map
    </button>
  );
};

export const Location = () => {
  const place = {
    name: "New Shalimar Road, Gulshan-e-Ravi, Lahore, Punjab, 54500, Pakistan",
    longitude: 74.279139,
    latitude: 31.5434824,
  };

  return (
    <div style={{ height: "75vh", width: "100%", position: "relative" }}>
      <p className="text-lg font-semibold mb-7">{place.name}</p>
      <MapContainer
        center={[place.latitude, place.longitude]}
        zoom={40}
        scrollWheelZoom
        className="h-5/6"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[place.latitude, place.longitude]}>
          <Tooltip>
            <strong>Syed Faaiz</strong>
            <br />
            {place.name}
          </Tooltip>
        </Marker>
        <RecenterMap lat={place.latitude} lng={place.longitude} />
      </MapContainer>
    </div>
  );
};
