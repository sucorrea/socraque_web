import React from "react";
import Typography from "@mui/material/Typography";

import { Theme } from "@mui/material/styles";

type TituloLargeProps = {
  titulo: string;
};

const TituloLarge = ({ titulo }: TituloLargeProps) => (
  <Typography
    fontWeight="bold"
    textAlign="center"
    sx={{
      textShadow: "2px 0px 6px rgba(255,255,255,0.7)",
      color: (theme: Theme) => theme.palette.grey[700],
      fontSize: { xs: "30px", md: "60px", sm: "60px", lg: "60px" },
    }}
  >
    {titulo.toUpperCase()}
  </Typography>
);

export default TituloLarge;
