import React from 'react'

import Typography from '@mui/material/Typography'

import useStyles from './styles'

const TextoSobre = () => {
  const styles = useStyles()

  return (
    <Typography component='span' textAlign="justify" lineHeight={'100%'} sx={styles.texto}>
      <Typography component="p" paragraph>
        O SóCraque filma, resgistra, edita e armazena automaticamente suas
        melhores jogadas que ficam disponíveis no nosso site ou aplicativo.
      </Typography>
      <Typography component="p" paragraph>
        Clicando em um botão o SóCraque eterniza seus melhores momemntos e
        lances de jogo para você compartilhar com seus amigos e seguidores.
      </Typography>
      <Typography component="p" paragraph>
        Pode clicar no SóCraque!
      </Typography>
      <Typography component="p" paragraph>
        Para nós{' '}
        <Typography component="span" variant="h6" fontWeight="bold">
          VOCÊ É O VERDADEIRO CRAQUE!
        </Typography>
      </Typography>
    </Typography>
  )
}

export default TextoSobre
