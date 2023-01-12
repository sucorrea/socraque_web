import { Theme } from "@mui/material/styles";

const useStyles = () => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100vh",
    background: "rgb(234, 241, 245)",
    overflow: "hidden",
    mt: 10,
  },
  boxCentral: {
    marginTop: (theme: Theme) => theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: (theme: Theme) => theme.spacing(2),
    border: "solid",
    borderColor: (theme: Theme) => theme.palette.primary.main,
    borderRadius: "20px",
    maxWidth: 400,
    width: { xl: 450, lg: 400, xs: 350 },
    height: 350,
    maxHeight: 500,
    position: "fixed",
  },

  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "fixed",
    bottom: 0,
    width: "100%",
  },
  boxCentralSemBackGround: (margimTopBoxNone: number) => ({
    marginTop: (theme: Theme) => theme.spacing(margimTopBoxNone),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: (theme: Theme) => theme.spacing(2),
    overflowX: "hidden",
    position: "fixed",
  }),
});

export default useStyles;
