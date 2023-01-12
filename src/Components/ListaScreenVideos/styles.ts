import { Theme } from "@mui/material/styles";

const useStyles = () => ({
  root: {
    padding: (theme: Theme) => theme.spacing(1),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  alinhamentoVideos: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  alinhamentoInformacoesVideos: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    p: 2,
  },
  alinhamentoFiltroVazio: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex",
  },
  corTexto: {
    color: (theme: Theme) => theme.palette.primary.main
  },
});

export default useStyles;
