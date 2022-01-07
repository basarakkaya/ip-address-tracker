import React from "react";
import L from "leaflet";
import iconUrl from "../assets/images/icon-location.svg";

const markerIcon = L.icon({
  iconUrl,
  iconSize: [46, 56],
});

const Map = ({ location }) => {
  const _map = React.useRef(null);
  const _marker = React.useRef(null);

  React.useEffect(() => {
    let map = L.map("map", { zoomControl: false }).setView([41, 29], 13);

    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken: process.env.REACT_APP_MAP_ACCESS_TOKEN,
      }
    ).addTo(map);

    _map.current = map;
  }, []);

  React.useEffect(() => {
    _marker.current?.remove();

    if (location) {
      _map.current.setView(location, 13);
      _marker.current = L.marker(location, { icon: markerIcon }).addTo(
        _map.current
      );
    }
  }, [location]);

  return (
    <div className="mapContainer">
      <div id="map" />
    </div>
  );
};

export default Map;
