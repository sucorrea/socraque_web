import React from "react";

import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import L, { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";

import Card from "@mui/material/Card";

const icon = L.icon({ iconUrl: "/img/marker-icon-red.png" });
const position: LatLngExpression = [-22.979228508027184, -49.895161313286856];

const Mapa = () => {
  return (
    <Card
      sx={{
        discplay: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "95%",
        height: 300,
        overflowY: "auto",
      }}
    >
      <MapContainer
        center={position}
        zoom={16}
        scrollWheelZoom={false}
        fadeAnimation
        markerZoomAnimation
        style={{
          height: 300,
          width: "100wh",
        }}
      >
        <TileLayer
          attribution=""
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={position}
          title="Pantai Beach Sports"
          icon={icon}
          alt="Pantai"
          interactive
        >
          <Tooltip permanent>Pantai Beach Sports</Tooltip>
        </Marker>
      </MapContainer>
    </Card>
  );
};

export default Mapa;
