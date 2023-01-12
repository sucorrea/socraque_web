import React from "react";

import Box from "@mui/material/Box";
import Carousel from "react-material-ui-carousel";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

import useStyles from "./styles";
import { imagensAbout } from "./utils";
import Imagem from 'next/image'

const CarouselAbout = () => {
  const styles = useStyles();

  return (
    <Carousel
      autoPlay
      animation="fade"
      PrevIcon={<ArrowBack fontSize="small" />}
      NextIcon={<ArrowForward fontSize="small" />}
      swipe
      cycleNavigation
      indicators
      duration={1000}
      sx={styles.carousel}
    >
      {imagensAbout.map((imagem) => (
        <Box sx={styles.wrapperImagem} key={imagem.idImagem}>
          <img
            src={imagem.urlImagem}
            alt={imagem.alt}
            style={{
              minWidth: 350,
              minHeight: 250,
              maxWidth: 500,
              maxHeight: 600,
              width: 500,
              height: 500,
              objectFit: "fill",
              borderRadius: 20,
              boxShadow: "-2px 3px 6px 0px #C1D7FF",
            }}
          />
        </Box>
      ))}
    </Carousel>
  );
};

export default CarouselAbout;
