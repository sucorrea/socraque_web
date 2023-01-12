import { Theme } from "@mui/material/styles";

const useStyles = () => ({
  logoMobile: {
    mr: 2,
    display: { xs: "none", md: "flex" },
    fontFamily: "monospace",
    fontWeight: 700,
    letterSpacing: ".3rem",
    color: "inherit",
    textDecoration: "none",
  },
  logoDesktop: {
    mr: 2,
    display: { xs: "flex", md: "none" },
    flexGrow: 1,
    fontFamily: "monospace",
    fontWeight: 700,
    letterSpacing: ".3rem",
    color: "inherit",
    textDecoration: "none",
  },
  botao: (color: string, fontWeight: number)=> ({
    my: 2,
    color: color,
    display: "block",
    fontWeight: fontWeight,
  }),
});

export default useStyles;
