import { formatToDateTime } from "brazilian-values";

import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, Virtual } from "swiper";
import useStyles from "./styles";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { VideoTypes } from "../../../Types";
import Imagem from 'next/image'

const breakpoints = {
  100: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  480: {
    slidesPerView: 2,
    spaceBetween: 30,
  },
  600: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
  900: {
    slidesPerView: 3,
    spaceBetween: 10,
  },
  1200: {
    slidesPerView: 3,
    spaceBetween: 10,
  },
};

type SwipeProps = {
  dadosVideos: VideoTypes[];
  isLoading: boolean;
  onClick?: (item: VideoTypes) => void;
};

const Swipe = ({ onClick, dadosVideos, isLoading }: SwipeProps) => {
  const styles = useStyles();


  const handleClickImagem = (item: VideoTypes) => {
    if (onClick) {
      onClick(item);
    }
  };

  if (isLoading) {
    <Box sx={styles.alinhamentoLoading}>
      <CircularProgress />
    </Box>;
  }

  return (
    <Grid container spacing={1} sx={styles.root}>
      <Grid item xs={12}>
        <Swiper
          breakpoints={breakpoints}
          slidesPerView={4}
          spaceBetween={10}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay, Virtual]}
          autoplay
        >
          <>
            {dadosVideos.map((item) => {
              const l = item.label;
              const label = l.slice(0, l.indexOf("-"));
              return (
                <SwiperSlide
                  key={item.id}
                  title={item.label}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "80%",
                    height: "100%",
                    backgroundColor: "rgb(234, 241, 245)",
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

                  <>
                    <Typography
                      align="center"
                      variant="body2"
                      sx={styles.corTexto}
                    >
                      {label}
                    </Typography>
                    <Typography
                      align="center"
                      variant={"caption"}
                      sx={styles.corTexto}
                    >
                      {formatToDateTime(new Date(item.date))}
                    </Typography>
                  </>
                </SwiperSlide>
              );
            })}
          </>
        </Swiper>
      </Grid>
    </Grid>
  );
};
export default Swipe;
