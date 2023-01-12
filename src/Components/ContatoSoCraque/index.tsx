import { Formik } from "formik";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Theme } from "@mui/material/styles";
import { Place, WhatsApp, Mail } from "@mui/icons-material";

import Layout from "../Layout";
import useStyles from "./styles";
import { ContatoFormValues } from "./Types";
import { NumberFormatBase } from "react-number-format";
import { formatToPhone } from "brazilian-values";

const styleButton = {
  fontWeight: 700,
  borderRadius: (theme: Theme) => theme.spacing(4.75),
};

const initialValues = {
  nome: "",
  email: "",
  telefone: "",
  assunto: "",
  mensagem: "",
};

const ContatoSoCraque = () => {
  const styles = useStyles();

  const handleSubmit = () => {};

  return (
    <Layout boxCenter={false} margimTopBoxNone={0}>
      <Grid
        container
        spacing={1}
        sx={{ maxHeight: { lg: "70vh", xs: "100vh" } }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sm={6}
          lg={6}
          component={Paper}
          sx={{ padding: { lg: 3, xs: 0 } }}
        >
          <Typography
            fontWeight="bold"
            textAlign="center"
            sx={{
              color: (theme: Theme) => theme.palette.primary.main,
              fontSize: { xs: "30px", md: "30px", sm: "35px", lg: "35px" },
            }}
          >
            Solicite seu orçamento ou tire suas dúvidas.
          </Typography>
          <Formik<ContatoFormValues>
            initialValues={initialValues}
            onSubmit={handleSubmit}
          >
            {({
              handleSubmit: handleFormikSubmit,
              isValid,
              errors,
              getFieldProps,
              touched,
              values,
            }) => (
              <form autoComplete="off" onSubmit={handleFormikSubmit}>
                <Grid container spacing={1}>
                  <Grid item xs={12} md={6} sm={6} lg={6}>
                    <TextField
                      label="Nome"
                      {...getFieldProps("nome")}
                      fullWidth
                      error={!!errors.nome}
                      helperText={
                        touched.nome && !!errors.nome ? errors.nome : ""
                      }
                    />
                  </Grid>
                  <Grid item xs={12} md={6} sm={6} lg={6}>
                    <TextField
                      {...getFieldProps("email")}
                      label="Email"
                      type="email"
                      fullWidth
                      error={!!errors.email}
                      helperText={errors.email}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} sm={6} lg={6}>
                    <TextField
                      {...getFieldProps("telefone")}
                      label="Telefone"
                      error={touched.telefone && !!errors.telefone}
                      helperText={errors.telefone || touched.telefone}
                      sx={styles.inputTelefone}
                      fullWidth
                      InputProps={{ inputComponent: NumberFormatBase as any }}
                      inputProps={{ format: formatToPhone }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} sm={6} lg={6}>
                    <TextField
                      label="Assunto"
                      {...getFieldProps("assunto")}
                      fullWidth
                      error={touched.assunto && !!errors.assunto}
                      helperText={errors.assunto || touched.assunto}
                    />
                  </Grid>
                  <Grid item xs={12} md={12} sm={12} lg={12}>
                    <TextField
                      {...getFieldProps("mensagem")}
                      label="Mensagem"
                      helperText={touched.mensagem && errors.mensagem}
                      error={touched.mensagem && Boolean(errors.mensagem)}
                      fullWidth
                      multiline
                      rows={3}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      variant="contained"
                      disabled={!isValid}
                      sx={styleButton}
                    >
                      Enviar
                    </Button>
                  </Grid>
                </Grid>
              </form>
            )}
          </Formik>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sm={6}
          lg={6}
          component={Paper}
          sx={{
            display: "flex",
            alignItems: "center",
            //justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              //alignItems: "center",
              //justifyContent: "center",
              //textAlign: "justify",
            }}
          >
            <Button
              variant="text"
              rel="noopenner noreferrer"
              target="_blank"
              href="https://api.whatsapp.com/send?phone=5514996065543&amp;text=Olá"
              startIcon={<WhatsApp color="success" />}
            >
              <Typography fontWeight="bold">+55 (14) 99606-5543</Typography>
            </Button>
            {/* <Button
              rel="noopenner noreferrer"
              target="_blank"
              href="https://www.google.com/maps/place/R.+dos+Expedicion%C3%A1rios,+Ourinhos+-+SP/@-22.9878231,-49.8659011,17z/data=!4m13!1m7!3m6!1s0x94c01817908f6653:0x1480608193d6927f!2sR.+dos+Expedicion%C3%A1rios,+Ourinhos+-+SP!3b1!8m2!3d-22.9878231!4d-49.8659011!3m4!1s0x94c01817908f6653:0x1480608193d6927f!8m2!3d-22.9878231!4d-49.8659011"
              startIcon={<Place color="error" />}
            >
              <Typography fontWeight="bold">
                Rua dos Expedicionários, Centro, 819900-041&nbsp;
                <Typography
                  fontWeight="bold"
                  component="span"
                  className="color"
                >
                  Ourinhos / SP
                </Typography>
              </Typography>
            </Button> */}
            <Button
              rel="noopenner noreferrer"
              target="_blank"
              href="mailto: contato@socraque.com.br"
              startIcon={<Mail />}
              sx={{ textTransform: "none" }}
            >
              contato@socraque.com.br
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default ContatoSoCraque;
