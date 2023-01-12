import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Theme } from "@mui/material";

import useStyles from "./styles";
import TituloLarge from "../../TituloLarge";
import TextoSobre from "./TextoSobre";
import Localizacao from "../../Localizacao";

const Sobre = () => {
  const styles = useStyles();

  return (
    <Grid container spacing={3} padding={3}>
      <Grid item xs={12}>
        <TituloLarge titulo="Sobre" />
      </Grid>
      <Grid item lg={7} sx={{ display: "flex", alignItems: { xs: "center" } }}>
        <TextoSobre />
      </Grid>
      <Grid item lg={5}>
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
            component="span"
            sx={{
              textShadow: "2px 0px 6px rgba(255,255,255,0.7)",
              color: (theme: Theme) => theme.palette.grey[700],
              fontSize: 20,
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
      {/* <Grid item xs={12} sx={{ pt: 5 }}>
        <Localizacao />
      </Grid> */}
    </Grid>
  );
};

export default Sobre;
