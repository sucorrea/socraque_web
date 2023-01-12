import React, { useCallback } from "react";
import { formatToDateTime } from "brazilian-values";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import { Download, SentimentVeryDissatisfied } from "@mui/icons-material";
import { VideoTypes } from "../../../Types";
import useStyles from "./styles";
import Imagem from 'next/image'

const px2vw = (size: number, width = 1440) => `${(size / width) * 100}vw`;

type ListaScreenVideosProps = {
  dadosVideos: VideoTypes[];
  isLoading?: boolean;
  onClick?: (item: VideoTypes) => void;
};

const ListaScreenVideos = ({
  dadosVideos,
  isLoading = false,
  onClick,
}: ListaScreenVideosProps) => {
  const styles = useStyles();

  const handleClickImagem = (item: VideoTypes) => {
    if (onClick) {
      onClick(item);
    }
  };

  const legenda = useCallback((item: VideoTypes) => {
    const nome = item.label;
    const label = nome.slice(0, nome.indexOf("-"));
    return label;
  }, []);

  if (isLoading) {
    <Skeleton width={500} height={250} />;
  }

  return (
    <Grid container spacing={1} sx={styles.root}>
      {dadosVideos.length ? (
        dadosVideos.map((item) => {
          return (
            <Grid item xs={12} sx={styles.alinhamentoVideos} key={item.id}>
              <Box
                sx={{
                  display: "flex",
                  width: { lg: 530, xl: 450, md: 300, sm: 250, xs: 100 },
                  height: { lg: 270, xl: 230, md: 150, sm: 125, xs: 50 },
                  padding: 2,
                  gap: 2,
                }}
              >
                <img
                  onClick={() => handleClickImagem(item)}
                  src={item.srcTmbSigned}
                  alt={item.label}
                  style={{
                    borderRadius: "6px",
                    boxShadow: "-2px 3px 6px 0px #C1D7FF",
                  }}
                />
              </Box>
              <Box sx={styles.alinhamentoInformacoesVideos}>
                <Typography align="center" variant="body2" sx={styles.corTexto}>
                  {legenda(item)}
                </Typography>
                <Typography
                  align="center"
                  variant={"caption"}
                  sx={styles.corTexto}
                >
                  {formatToDateTime(new Date(item.date))}
                </Typography>
                <Button startIcon={<Download />} href={item.srcTmbSigned}>
                  Baixar
                </Button>
              </Box>
            </Grid>
          );
        })
      ) : (
        <Grid item xs={12} sx={styles.alinhamentoFiltroVazio}>
          <SentimentVeryDissatisfied fontSize="large" color="primary" />
          <Typography>Que pena!</Typography>
          <Typography>
            Não foram encontrados vídeos na data/período escolhido.
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};
export default ListaScreenVideos;
