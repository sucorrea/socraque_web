import { Theme } from "@mui/material/styles";

const useStyles = () => ({
  galeriaData: {
    color: (theme: Theme) => theme.palette.grey[700],
    fontWeight: "bold",
    paddingTop: (theme: Theme) => theme.spacing(1),
  },
  posicionamentoGrid: (
    padding: number,
    justifyContent: string,
    flexDirection: string | undefined
  ) => ({
    display: "flex",
    alignItems: "center",
    flexDirection: flexDirection ?? "colunm",
    justifyContent: justifyContent,
    padding: (theme: Theme) => theme.spacing(padding),
  }),
  datePicker: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: (theme: Theme) => theme.spacing(2),
    mt: { lg: 5, xl: 5, md: 4, sm: 3 },
  },
  card: {
    p: 0,
    mx: { xs: 2, lg: 3 },
    mt: -6,
    mb: 4,
    backdropFilter: "saturate(200%) blur(30px)",
    backgroundColor: "rgb(234, 241, 245)",
    boxShadow: (theme: Theme) =>
      `rgb(172, 200, 215) 0px 30px 40px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 20px -18px inset;`,
    borderRadius: "20px",
  },
  alinhamentoLoading: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    p: 2,
  },
  imagemBackground: {
    backgroundImage: "url(img/banner2.jpg)",
    paddingTop: { xs: 0, sm: -10, md: -10, lg: 12 },
    minHeight: { xs: "20rem", sm: "20rem", md: "25rem", lg: "25rem" },
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "grid",
    placeItems: "normal",
    borderRadius: 2,
  },
  corBackgroud: {
    backgroundColor: "rgb(234, 241, 245)",
  },
  containerVideosGaleria: {
    maxHeight: "330px",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      width: "11px",
      scrollbarWidth: "thin",
    },
    "&::-webkit-scrollbar-track": {
      background: (theme: Theme) => theme.palette.background.default,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: (theme: Theme) => theme.palette.grey[500],
      borderRadius: "6px",
      border: (theme: Theme) => `3px solid ${theme.palette.background.default}`,
    },
  },
  corTexto: {
    color: (theme: Theme) => theme.palette.grey[700],
  },
});

export default useStyles;
