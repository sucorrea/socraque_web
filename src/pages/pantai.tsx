import React, { useCallback, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import dayjs, { Dayjs } from "dayjs";
import ptBR from "date-fns/locale/pt-BR";
import "react-datepicker/dist/react-datepicker.css";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { AddCircle, RemoveCircle } from "@mui/icons-material";
import { ThemeProvider } from "@mui/material/styles";

import About from "../Components/About";
import Calendario from "../Components/Calendario";
import ListaScreenVideos from "../Components/ListaScreenVideos";
import IntervaloHoras from "../Components/IntervaloHoras";
import MenuFooter from "../Components/Layout/MenuFooter";
import MenuHeader from "../Components/Layout/MenuHeader";
import Swipe from "../Components/Swipe";
import SelecaoQuadra from "../Components/SelecaoQuadra";
import TituloLarge from "../Components/TituloLarge";
import VideoModal from "../Components/Video";
import useStyles from "../Components/HomePantai/styles";
import { CoutsValues, InFiltroVideos, VideoTypes } from "../../Types";
import { HomePantaiViewModel } from "../Components/HomePantai/HomePantaiViewModel";
import { Api, buscarVideos, buscarVideosFiltro } from "../api";
import themePantai from "../../themes/pantai";
import { useSoCraque } from "../../Context/SoCraque";
import SliderFotos from "../Components/Slider";
import moment from "moment";
import { quadraDefault } from "../Components/HomePantai/utils";
import Head from "next/head";
import HeadPages from "../Components/HeadPages";

const HomePantai = () => {
  const styles = useStyles();
  const { mode } = useSoCraque();
  const [date, setDate] = useState<Dayjs | null>(dayjs());
  const [openVideo, setOpenVideo] = useState(false);
  const [habilitarMaisVideos, setHabilitarMaisVideos] = useState(true);
  const [intervaloHoras, setIntevaloHoras] = useState<number[]>([6, 18]);
  const [videos, setVideos] = useState<VideoTypes[]>([]);
  const [quadraSelecionada, setQuadraSelecionada] = useState<CoutsValues>(
    quadraDefault
  );
  const [videoSelecionado, setVideoSelecionado] = useState<VideoTypes>(
    {} as VideoTypes
  );

  const handleChangeDatePicker = useCallback((data: Date | null) => {
    setDate(dayjs(data));
  }, []);

  const { isLoading: isLoadingVideos } = useQuery(
    ["videos"],
    () => buscarVideos(),
    {
      onSuccess: (todosVideos) => {
        setVideos(todosVideos.data);
      },
    }
  );

  const viewModel = new HomePantaiViewModel(date, intervaloHoras);

  const valoresEntrada: InFiltroVideos = {
    searchDate: viewModel.dataFormatada(),
    startInterval: viewModel.inicioIntervaloHora() ?? "06",
    endInterval: viewModel.finalIntervaloHora() ?? "18",
    courtId: quadraSelecionada.id,
  };

  const { mutate } = useMutation(() => buscarVideosFiltro(valoresEntrada), {
    onSuccess: (videosFiltro) => setVideos(videosFiltro.data),
  });

  const handleOpenVideo = useCallback((videoSelecionado: VideoTypes) => {
    setVideoSelecionado(videoSelecionado);
    setOpenVideo(true);
  }, []);

  const handleCloseVideo = useCallback(() => {
    setOpenVideo(false);
  }, []);

  const handleChangeIntevaloHoras = useCallback(
    (_e: Event, newValue: number | number[]) => {
      setIntevaloHoras(newValue as number[]);
    },
    []
  );

  const handleMaisVideos = useCallback(() => {
    setHabilitarMaisVideos(!habilitarMaisVideos);
  }, [habilitarMaisVideos]);

  const handleQuadraSelecionada = useCallback((coutSelected: CoutsValues) => {
    setQuadraSelecionada(coutSelected);
  }, []);

  const handleBuscar = useCallback(() => {
    mutate();
  }, [mutate]);

  return (
    <>
      <HeadPages nomeTituloPage="Pantai" />
      <ThemeProvider theme={themePantai(mode)}>
        <MenuHeader logoImagem="/img/logo.png" />
        <Box sx={styles.corBackgroud}>
          <Box sx={styles.imagemBackground} />
          <Card sx={styles.card}>
            <Box component="section" py={{ xs: 3, sm: 3 }}>
              <Container>
                <Grid container item xs={12} justifyContent="center" mx="auto">
                  {habilitarMaisVideos ? (
                    <>
                      <Grid item xs={12}>
                        <TituloLarge titulo="Vídeos" />
                        {/* <SliderFotos dadosVideos={videos} /> */}
                        <Typography
                          component="p"
                          align="center"
                          sx={styles.corTexto}
                        >
                          {viewModel.dataSelecionada()}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sx={{ padding: "16px" }}>
                        <Swipe
                          onClick={handleOpenVideo}
                          dadosVideos={videos ?? []}
                          isLoading={isLoadingVideos}
                        />
                      </Grid>
                    </>
                  ) : (
                    <>
                      <Grid
                        item
                        xs={12}
                        sx={styles.posicionamentoGrid(0, "center", "column")}
                      >
                        <TituloLarge titulo="GALERIA DE VÍDEOS" />
                      </Grid>
                      <Grid item md={4} xs={12} sx={styles.datePicker}>
                        <Calendario
                          value={date?.toDate() ?? null}
                          onChangeCalendario={handleChangeDatePicker}
                        />
                      </Grid>
                      <Grid
                        item
                        md={8}
                        lg={8}
                        xs={12}
                        sx={styles.posicionamentoGrid(0, "center", "column")}
                      >
                        <SelecaoQuadra
                          onSelectedCourt={handleQuadraSelecionada}
                        />
                        <Typography component="p" sx={styles.galeriaData}>
                          {viewModel.dataSelecionada()}
                        </Typography>
                        <IntervaloHoras
                          value={intervaloHoras}
                          handleChangeIntevaloHoras={handleChangeIntevaloHoras}
                        />

                        <Box sx={{ mb: 3, mt: 2 }}>
                          <Button variant="contained" onClick={handleBuscar}>
                            Buscar
                          </Button>
                        </Box>
                        <Grid
                          item
                          sx={
                            videos.length ? styles.containerVideosGaleria : {}
                          }
                        >
                          <ListaScreenVideos
                            dadosVideos={videos ?? []}
                            onClick={handleOpenVideo}
                          />
                        </Grid>
                      </Grid>
                    </>
                  )}
                  <Grid
                    item
                    xs={12}
                    sx={styles.posicionamentoGrid(5, "flex-end", "row")}
                  >
                    <Button
                      startIcon={
                        habilitarMaisVideos ? <AddCircle /> : <RemoveCircle />
                      }
                      onClick={handleMaisVideos}
                    >
                      {!habilitarMaisVideos ? "Ver menos" : "Ver mais vídeos"}
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <About />
                  </Grid>
                  <VideoModal
                    open={openVideo}
                    onClose={handleCloseVideo}
                    item={videoSelecionado}
                  />
                </Grid>
              </Container>
            </Box>
          </Card>
          <MenuFooter />
        </Box>
      </ThemeProvider>
    </>
  );
};

export default HomePantai;
