import { Theme } from "@mui/material/styles";

const useStyles = () => ({
  root: {
    padding: (theme: Theme) => theme.spacing(0, 6),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  alinhamentoLoading: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    p: 2,
  },
  corTexto: {
    color: (theme: Theme) => theme.palette.grey[700],
  },
});

export default useStyles;
