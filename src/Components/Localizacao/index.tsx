import React, { useState, useCallback } from "react";

import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "300px",
};

const center = {
  lat: -22.978627313340972,
  lng: -49.8917979204294,
};

const Localizacao = () => {
  const [map, setMap] = useState(null);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBT1CiM7Ci2ZQ7TOyYxARElRcuCuyyvDXU",
  });

  const onLoad = useCallback(() => {
    setMap(map);
  }, [map]);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={16}
      onLoad={onLoad}
      onUnmount={onUnmount}
      clickableIcons
    >
      <Marker
        position={{
          lat: -22.97944187935119,
          lng: -49.89509846572083,
        }}
      />
    </GoogleMap>
  ) : (
    <></>
  );
};
export default Localizacao;
