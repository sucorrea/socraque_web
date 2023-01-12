import React from "react";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import Layout from "../Components/Layout";
import { Theme } from "@mui/material";
import ArenasParceiras from "../Components/HomeSoCraque/ArenasParceiras";
import Mapa from "../Components/Mapa";
import HeadPages from "../Components/HeadPages";

const Sobre = () => {
  return (
    <>
      <HeadPages nomeTituloPage="Sobre" />
      <Layout boxCenter={false}>{/* <Mapa /> */}</Layout>
    </>
  );
};

export default Sobre;
