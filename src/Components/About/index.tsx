import React from "react";

import Grid from "@mui/material/Grid";

import CarouselAbout from "./Carousel";
import DescricaoAbout from "./DescricaoAbout";
import TituloLarge from "../TituloLarge";
import useStyles from "./styles";
import Localizacao from "../Localizacao";

const About = () => {
  const styles = useStyles();

  return (
    <Grid container spacing={1} sx={styles.root}>
      <Grid item xs={12}>
        <TituloLarge titulo="Sobre" />
      </Grid>
      <Grid item xs={12} md={6} sm={6} lg={6}>
        <CarouselAbout />
      </Grid>
      <Grid item xs={12} md={5} sm={6} lg={5}>
        <DescricaoAbout />
      </Grid>
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <Localizacao />
      </Grid>
    </Grid>
  );
};

export default About;
