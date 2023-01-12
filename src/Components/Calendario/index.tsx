import React from "react";
import DateFnsUtils from "@date-io/date-fns";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

type DaysWeek = "Su" | "Mo" | "Tu" | "We" | "Th" | "Fr" | "Sa";
type DiasSemana = "Dom" | "Seg" | "Ter" | "Qua" | "Qui" | "Sex" | "Sab";

const dias: Record<DaysWeek, DiasSemana> = {
  Su: "Dom",
  Mo: "Seg",
  Tu: "Ter",
  We: "Qua",
  Th: "Qui",
  Fr: "Sex",
  Sa: "Sab",
};

type CalendarioProps = {
  value: Date | null;
  onChangeCalendario: (value: Date | null) => void;
};

const Calendario = ({ value, onChangeCalendario }: CalendarioProps) => {
  const handleFormatarDiasSemana = (days: DaysWeek) => {
    return dias[days];
  };

  return (
    <LocalizationProvider dateAdapter={DateFnsUtils}>
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <StaticDatePicker
          displayStaticWrapperAs={"desktop"}
          openTo="day"
          value={value}
          onChange={onChangeCalendario}
          renderInput={(params) => <TextField {...params} />}
          dayOfWeekFormatter={(days) =>
            handleFormatarDiasSemana(days as DaysWeek)
          }
          disableHighlightToday
        />
      </Box>
      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <StaticDatePicker
          displayStaticWrapperAs={"mobile"}
          openTo="day"
          value={value}
          onChange={onChangeCalendario}
          renderInput={(params) => <TextField {...params} />}
          dayOfWeekFormatter={(days) =>
            handleFormatarDiasSemana(days as DaysWeek)
          }
          disableHighlightToday
        />
      </Box>
    </LocalizationProvider>
  );
};

export default Calendario;
