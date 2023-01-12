import { PaletteMode } from "@mui/material";
import { createTheme, Theme } from "@mui/material/styles";
import { ptBR } from "@mui/x-date-pickers/locales";

const themePantai = (mode: PaletteMode) =>
  createTheme(
    {
      palette: {
        mode: mode,
        primary: {
          main: "rgb(255 106 126)",
        },
        secondary: {
          main: "#e58888",
        },
      },

      typography: {
        fontFamily: ["Montserrat", "Work Sans", "sans-serif"].join(","),
      },
      components: {
        MuiDialogContent: {
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
                backgroundColor: (theme: Theme) => theme.palette.grey[500],
                borderRadius: "6px",
                border: (theme: Theme) =>
                  `3px solid ${theme.palette.background.default}`,
              },
            },
          },
        },
        MuiButtonBase: {
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

export default themePantai;
