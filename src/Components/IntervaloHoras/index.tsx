import React from "react";

import Slider from "@mui/material/Slider";
import Tooltip from "@mui/material/Tooltip";

import { marksRange } from "./utils";

function valueText(value: number) {
  return `${value} h`;
}

type IntervaloHorasProps = {
  value: number | number[];
  handleChangeIntevaloHoras: (
    event: Event,
    value: number | number[],
    activeThumb: number
  ) => void;
};
const IntervaloHoras = ({
  handleChangeIntevaloHoras,
  value,
}: IntervaloHorasProps) => (
  <Tooltip title="Selecione o intervalo desejado" placement="top-end">
    <Slider
      value={value}
      max={23}
      marks={marksRange}
      onChange={handleChangeIntevaloHoras}
      valueLabelDisplay="auto"
      getAriaValueText={valueText}
      sx={{
        width: { xs: 300, md: 500, sm: 500, lg: 600, xl: 700 },
      }}
    />
  </Tooltip>
);

export default IntervaloHoras;
