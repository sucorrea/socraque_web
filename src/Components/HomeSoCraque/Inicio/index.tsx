import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Theme } from "@mui/material";

import useStyles from "./styles";

const Inicio = () => {
  const styles = useStyles();

  return (
    <Box
      sx={{
        backgroundImage: "url(img/background_inicio.png)",
        width: "100%",
        height: { xl: 700, lg: 600, md: 600, sm: 500, xs: 600 },
        backgroundSize: "cover",
        backgroundPosition: "center",
        p: 5,
      }}
    >
      <Grid container spacing={1} padding={3}>
        <Grid item lg={4} md={6} xs={12}>
          <Box
            sx={{
              width: { xl: 400, lg: 500, md: 300, sm: 100, xs: 100 },
              height: { xl: 350, lg: 450, md: 250, sm: 100, xs: 100 },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              p: 12,
            }}
          >
            <img
              src="/img/logo-socraque-alta.png"
              alt="imagem"
              style={{ height: 250, width: 350 }}
            />
          </Box>
        </Grid>
        <Grid
          item
          lg={8}
          md={6}
          xs={12}
          sx={{
            display: "flex",
            alignItems: "flex-end",
            p: 5,
          }}
        >
          <Box sx={{ pl: 5, pt: 4 }}>
            <Typography
              component="span"
              sx={{
                color: (theme: Theme) => theme.palette.grey[700],
              }}
            >
              <Typography
                sx={{ fontSize: { xl: 40, lg: 40, xs: 30 } }}
                fontWeight="bold"
              >
                Gravamos
              </Typography>
              <Typography
                sx={{ fontSize: { xl: 25, lg: 25, xs: 20 } }}
                component="span"
              >
                suas{" "}
                <Typography
                  sx={{ fontSize: { xl: 25, lg: 25, xs: 20 } }}
                  component="span"
                  fontWeight="bold"
                >
                  jogadas
                </Typography>
                , seus{" "}
                <Typography
                  sx={{ fontSize: { xl: 25, lg: 25, xs: 20 } }}
                  component="span"
                  fontWeight="bold"
                >
                  pontos
                </Typography>
                , seus{" "}
                <Typography
                  sx={{ fontSize: { xl: 25, lg: 25, xs: 20 } }}
                  component="span"
                  fontWeight="bold"
                >
                  movimentos
                </Typography>
              </Typography>
            </Typography>
            <Box sx={{ pl: 5 }}>
              <Typography
                fontWeight="bolder"
                variant="h6"
                sx={{ color: (theme: Theme) => theme.palette.grey[900] }}
              >
                PORQUE AQUI,
              </Typography>
              <Typography
                fontWeight="bolder"
                variant="h5"
                sx={{ color: (theme: Theme) => theme.palette.grey[900] }}
              >
                VOCÊ É O CRAQUE!
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Inicio;
