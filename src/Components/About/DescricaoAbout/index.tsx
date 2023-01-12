import React from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Theme } from '@mui/material/styles'
import { Instagram } from '@mui/icons-material'
import Imagem from 'next/image'

const DescricaoAbout = () => {
  return (
    <Box>
      <img src="/img/logo.png" alt="Logo" width="100" />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          pt: 2,
        }}
      >
        <Typography
          component={'p'}
          sx={{
            color: (theme: Theme) => theme.palette.grey[700],
            textAlign: 'justify',
            fontWeight: 500,
          }}
        >
          PANTAI JIWA traz a alma e o espírito de praia para o interior
          paulista.
          <br />
          <br />
          Aqui você terá muitas experiências sensoriais no contato com a areia,
          a natureza, o esporte ao ar livre, música e gastronomia.
          <br />
          <br />
          É o lugar onde as famílias se reúnem, os amigos se encontram e, é
          claro, novas amizades se formam.
          <br />
          <br />
          Conecte-se à atmosfera tropical, recarregue suas energias e deixe seus
          dias mais leves!
          <br />
          <br />
          FAÇA DAQUI A SUA PRAIA!
        </Typography>
        <Button
          href="https://www.instagram.com/pantai.jiwa/"
          target="_blank"
          rel="noreferrer"
          variant="text"
          startIcon={<Instagram />}
          sx={{
            fontSize: { xs: '14px', lg: '16px' },
            textDecoration: 'none',
          }}
          disableRipple
        >
          Saiba mais acessando o Instagram
        </Button>
      </Box>
    </Box>
  )
}

export default DescricaoAbout
