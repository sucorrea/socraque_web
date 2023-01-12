import { Theme } from "@mui/material/styles";

const useStyles = () => ({
  root: {
    padding: (theme: Theme) => theme.spacing(2),
  },
  textoSobre: {
    textShadow: "2px 0px 6px rgba(255,255,255,0.7)",
    color: (theme: Theme) => theme.palette.grey[700],
    fontSize: { xs: "30px", md: "60px", sm: "60px", lg: "60px" },
  },
});

export default useStyles;
