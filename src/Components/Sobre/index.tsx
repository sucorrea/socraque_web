import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Theme } from "@mui/material";

import TituloLarge from "../TituloLarge";
import TextoSobre from "../HomeSoCraque/Sobre/TextoSobre";
import useStyles from "./styles";
import MenuHeader from "../Layout/MenuHeader";
import ArenasParceiras from "../HomeSoCraque/ArenasParceiras";
import Localizacao from "../Localizacao";
import MenuFooter from "../Layout/MenuFooter";

const Sobre = () => {
  const styles = useStyles();

  return (
    <Box
      id="sobre"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        background: "rgb(234, 241, 245)",
        // overflow: 'hidden',
        mt: 9,
      }}
    >
      <MenuHeader logoImagem={"/img/logo-footer.png"} />
      {/* <Inicio /> */}
      <ArenasParceiras />
      <Box
        sx={{
          backgroundImage: "url(img/teste1.jpg)",
          width: "100%",
          height: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Grid container spacing={3} padding={3}>
          <Grid item xs={12}>
            <TituloLarge titulo="Sobre" />
          </Grid>
          <Grid item xs={7}>
            <TextoSobre />
          </Grid>
          <Grid item xs={5}>
            <Box
              sx={{
                height: 200,
                width: 300,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="/img/logo-socraque-alta.png"
                alt="imagem"
                style={{ height: 200, width: 250 }}
              />
            </Box>
            <Box sx={{ pl: 5, pt: 3 }}>
              <Typography
                sx={{
                  textShadow: "2px 0px 6px rgba(255,255,255,0.7)",
                  color: (theme: Theme) => theme.palette.grey[700],
                  fontSize: 16,
                }}
              >
                <Typography>Fácil instalção!</Typography>
                <Typography>Fácil utilização!</Typography>
                <Typography>Fácil compartilhamento!</Typography>
                <Typography
                  color="red"
                  component="a"
                  href="./contato"
                  fontWeight="bold"
                >
                  Solicite um ORÇAMENTO
                </Typography>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Localizacao />
          </Grid>
        </Grid>
        <MenuFooter />
      </Box>
    </Box>
  );
};

export default Sobre;
