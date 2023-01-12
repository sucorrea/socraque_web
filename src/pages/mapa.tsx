import dynamic from "next/dynamic";
import React from "react";
const Mapao = dynamic(() => import("../Components/Mapa"), { ssr: false });

const Mapa = () => {
  return <Mapao />;
};

export default Mapa;
