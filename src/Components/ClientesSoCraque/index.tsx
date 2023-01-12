import React from 'react'

import Grid from '@mui/material/Grid'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

import Layout from '../Layout'
import { Theme } from '@mui/material'

type ClienteValues = {
  idImagem: number
  urlImagem: string
  alt: string
  rota: string
  nome: string
}

export const imagensAbout: ClienteValues[] = [
  {
    idImagem: 1,
    urlImagem: '/img/slide-about.jpg',
    alt: 'about',
    rota: '/pantai',
    nome: 'Pantai',
  },
  {
    idImagem: 2,
    urlImagem: '/img/slide-about/1.jpeg',
    alt: 'about',
    rota: '/',
    nome: 'Quadra',
  },
  {
    idImagem: 3,
    urlImagem: '/img/slide-about/2.jpeg',
    alt: 'about',
    rota: '/',
    nome: 'Quadra',
  },
  {
    idImagem: 4,
    urlImagem: '/img/slide-about/3.jpeg',
    alt: 'about',
    rota: '/',
    nome: 'Quadra',
  },
  {
    idImagem: 5,
    urlImagem: '/img/slide-about/4.jpeg',
    alt: 'about',
    rota: '/',
    nome: 'Quadra',
  },
  {
    idImagem: 6,
    urlImagem: '/img/slide-about/5.jpeg',
    alt: 'about',
    rota: '/',
    nome: 'Quadra',
  },
  {
    idImagem: 7,
    urlImagem: '/img/slide-about/1.jpeg',
    alt: 'about',
    rota: '/',
    nome: 'Quadra',
  },
]

const ClientesSoCraque = () => {
  return (
    <Layout boxCenter={false}>
      <Grid
        container
        spacing={1}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <Grid item xs={12}>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{
              color: (theme: Theme) => theme.palette.primary.main,
              fontSize: { xs: '30px', md: '30px', sm: '35px', lg: '35px' },
            }}
          >
            Selecione
          </Typography>
        </Grid>
        {imagensAbout.map((imagem) => (
          <Grid
            item
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
              flexDirection: 'column',
            }}
            key={imagem.idImagem}
            onClick={() => {}}
          >
            <Link href={imagem.rota}>
              <Tooltip title={imagem.nome} placement="top">
                <img
                  src={imagem.urlImagem}
                  alt={imagem.alt}
                  style={{
                    width: 100,
                    height: 100,
                    objectFit: 'fill',
                    boxShadow: '-2px 3px 6px 0px #C1D7FF',
                    cursor: 'pointer',
                    borderRadius: '50%',
                  }}
                />
              </Tooltip>
            </Link>
            <Typography>{imagem.nome}</Typography>
          </Grid>
        ))}
      </Grid>
    </Layout>
  )
}

export default ClientesSoCraque
