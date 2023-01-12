import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Imagem from 'next/image'

const menuFooter = [
  {
    id: 1,
    nome: 'Início',
    url: '/',
  },
  {
    id: 2,
    nome: 'Sobre',
    url: '/sobre',
  },
  {
    id: 3,
    nome: 'Clientes',
    url: '/clientes',
  },
  {
    id: 4,
    nome: 'Meus vídeos',
    url: '#',
  },
  {
    id: 5,
    nome: 'Solicitar orçamento',
    url: '/contato',
  },
]

const MenuFooter = () => {
  return (
    <Stack
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        pt: 2,
      }}
    >
      <img
        src="/img/logo-footer.png"
        alt="Logo Só Craque"
        width={60}
        height={50}
      />
      <Box>
        {menuFooter.map((item) => (
          <Button
            key={item.id}
            variant="text"
            href={item.url}
            disableRipple
            sx={{ fontSize: { xs: '6px', lg: '14px' } }}
          >
            {item.nome}
          </Button>
        ))}
      </Box>
      <Typography sx={{ fontSize: { xs: '6px', lg: '10px' } }}>
        SÓ CRAQUE - APERTOU, GRAVOU! TODOS OS DIREITOS RESERVADOS - 2022
      </Typography>
    </Stack>
  )
}

export default MenuFooter
