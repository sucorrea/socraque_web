import React, { useState } from 'react'
import { Formik } from 'formik'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { Theme } from '@mui/material/styles'
import { Mail, Visibility, VisibilityOff, VpnKey } from '@mui/icons-material'
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

type LoginFormValues = {
  email: string
  senha: string
}

const LoginSoCraque = () => {
  const [value, setValue] = useState(initialValues)

  const handleSubmit = (values: LoginFormValues) => {}

  const handleClickShowPassword = () => {
    setValue({
      ...value,
      showPassword: !value.showPassword,
    })
  }

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
          Login
        </Typography>
        <Image
          src="/img/logo-footer.png"
          alt="Logo Só Craque"
          height={50}
          width={60}
          //style={{ width: '60px', height: '50px' }}
        />
        <Formik<LoginFormValues>
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
              <Box sx={{ marginTop: (theme: Theme) => theme.spacing(0) }}>
                <TextField
                  label="E-mail"
                  {...getFieldProps('email')}
                  sx={styles}
                  type="email"
                  variant="standard"
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
                <TextField
                  label="Senha"
                  variant="standard"
                  autoComplete="current-password"
                  type={value.showPassword ? 'text' : 'password'}
                  {...getFieldProps('senha')}
                  sx={styles}
                  error={!!errors.senha}
                  helperText={
                    touched.senha && !!errors.senha ? errors.senha : ''
                  }
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <VpnKey fontSize="small" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleClickShowPassword}>
                          {value.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
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
                  Entrar
                </Button>
              </Box>
            </form>
          )}
        </Formik>
        <Stack spacing={1} direction="row" sx={{ pt: 1 }}>
          <Link href="recuperar-senha" variant="caption">
            Esqueceu a senha?
          </Link>
          <Link href="#" variant="caption">
            Não tem uma conta? Registre-se
          </Link>
        </Stack>
      </Layout>
    </>
  )
}

export default LoginSoCraque
