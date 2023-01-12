import { Theme } from "@mui/material/styles";

const useStyles = () => ({
  texto: {
    textShadow: "2px 0px 6px rgba(255,255,255,0.7)",
    color: (theme: Theme) => theme.palette.grey[700],
    fontSize: 22,
  },
});

export default useStyles;
