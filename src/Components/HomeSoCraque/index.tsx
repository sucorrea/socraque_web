import React from "react";
import dynamic from "next/dynamic";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Stack, Theme } from "@mui/material";

import TituloLarge from "../TituloLarge";
import MenuHeader from "../Layout/MenuHeader";
import Localizacao from "../Localizacao";
import MenuFooter from "../Layout/MenuFooter";
import Sobre from "./Sobre";
import Inicio from "./Inicio";
import ArenasParceiras from "./ArenasParceiras";

const Mapa = dynamic(() => import("../Mapa"), { ssr: false });

const HomeSoCraque = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        background: (theme: Theme) => theme.palette.background.paper,
        mt: 9,
      }}
    >
      <MenuHeader logoImagem={"/img/logo-footer.png"} />
      <Inicio />
      <ArenasParceiras />
      <Box
        sx={{
          backgroundImage: "url(img/teste.jpg)",
          width: "100%",
          height: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Sobre />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          background: (theme: Theme) => theme.palette.background.paper,
          pt:2,
          pb: 2,
        }}
      >
        <Mapa />
      </Box>
      <MenuFooter />
    </Box>
  );
};

export default HomeSoCraque;
