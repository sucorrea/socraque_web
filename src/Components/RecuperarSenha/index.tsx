import React, { useState } from 'react'
import { Formik } from 'formik'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { Theme } from '@mui/material/styles'
import { Mail } from '@mui/icons-material'

import Layout from '../Layout'

const styleButton = {
  fontWeight: 700,
  borderRadius: (theme: Theme) => theme.spacing(4.75),
}

const styles = {
  width: '100%',
  mb: 5,
}

const initialValues = {
  email: '',
  senha: '',
  showPassword: false,
}

type RecuperarSenhaFormValues = {
  email: string
  senha: string
}

const RecuperarSenha = () => {
  const [value, setValue] = useState(initialValues)

  const handleSubmit = (values: RecuperarSenhaFormValues) => {}

  return (
    <>
      <Layout>
        <Typography
          fontWeight="bold"
          textAlign="center"
          sx={{
            color: (theme: Theme) => theme.palette.primary.main,
            fontSize: { xs: '16px', md: '18px', sm: '20px', lg: '20px' },
          }}
        >
          Recuperar Senha
        </Typography>
        <Formik<RecuperarSenhaFormValues>
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          {({
            handleSubmit: handleFormikSubmit,
            isValid,
            errors,
            getFieldProps,
            touched,
          }) => (
            <form autoComplete="off" onSubmit={handleFormikSubmit}>
              <Box sx={{ marginTop: (theme: Theme) => theme.spacing(5) }}>
                <TextField
                  label="E-mail"
                  {...getFieldProps('email')}
                  sx={styles}
                  variant="standard"
                  type="email"
                  error={!!errors.email}
                  helperText={
                    touched.email && !!errors.email ? errors.email : ''
                  }
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Mail fontSize="small" />
                      </InputAdornment>
                    ),
                  }}
                />
                <Button
                  variant="contained"
                  disabled={!isValid}
                  fullWidth
                  sx={styleButton}
                  href={'/clientes'}
                >
                  Enviar
                </Button>
              </Box>
            </form>
          )}
        </Formik>
        <Box sx={{ pt: 2 }}>
          <Link href="login" variant="button">
            Voltar
          </Link>
        </Box>
      </Layout>
    </>
  )
}

export default RecuperarSenha
