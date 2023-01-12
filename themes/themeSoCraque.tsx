import { PaletteMode } from "@mui/material";
import { createTheme, Theme } from "@mui/material/styles";
import { ptBR } from "@mui/x-date-pickers";

const themeSoCraque = (mode: PaletteMode) =>
  createTheme(
    {
      palette: {
        mode: mode,
        primary: {
          main: "#01579b",
        },
        secondary: {
          main: "#29b6f6",
        },
      },
      typography: {
        fontFamily: ["Montserrat", "Work Sans", "sans-serif"].join(","),
      },
      components: {
        MuiDialog: {
          styleOverrides: {
            root: {
              "&::-webkit-scrollbar": {
                width: "11px",
                scrollbarWidth: "thin",
              },

              "&::-webkit-scrollbar-track": {
                background: (theme: Theme) => theme.palette.background.default,
              },

              "&::-webkit-scrollbar-thumb": {
                backgroundColor: " rgb(234, 241, 245)",
                borderRadius: "6px",
                border: (theme: Theme) =>
                  `3px solid ${theme.palette.background.default}`,
              },
            },
          },
        },
      },
    },
    ptBR
  );

export default themeSoCraque;
