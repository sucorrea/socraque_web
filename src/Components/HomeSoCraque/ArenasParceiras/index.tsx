import React from "react";

import Glider from "react-glider";
import "glider-js/glider.min.css";
import { Theme } from "@mui/material";
import { useRouter } from "next/router";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

type ClienteValues = {
  idImagem: number;
  urlImagem: string;
  alt: string;
  rota: string;
  nome: string;
};

export const clientes: ClienteValues[] = [
  {
    idImagem: 1,
    urlImagem: "/img/logo_pantai_novo.jpeg",
    alt: "Pantai",
    rota: "/pantai",
    nome: "Pantai",
  },
  {
    idImagem: 2,
    urlImagem: "/img/sua_marca_aqui.png",
    alt: "SoCraque",
    rota: "/",
    nome: "Sua Arena",
  },
  {
    idImagem: 3,
    urlImagem: "/img/sua_marca_aqui.png",
    alt: "about",
    rota: "/",
    nome: "Sua Arena",
  },
  {
    idImagem: 4,
    urlImagem: "/img/sua_marca_aqui.png",
    alt: "about",
    rota: "/",
    nome: "Sua Arena",
  },
  {
    idImagem: 5,
    urlImagem: "/img/sua_marca_aqui.png",
    alt: "about",
    rota: "/",
    nome: "Sua Arena",
  },
  {
    idImagem: 6,
    urlImagem: "/img/sua_marca_aqui.png",
    alt: "about",
    rota: "/",
    nome: "Sua Arena",
  },
  {
    idImagem: 7,
    urlImagem: "/img/sua_marca_aqui.png",
    alt: "about",
    rota: "/",
    nome: "Sua Arena",
  },
];
const ArenasParceiras = () => {
  const router = useRouter();

  return (
    <Box
      id="clientes"
      sx={{
        width: "90%",
        pt: 3,
        pb: 3,
      }}
    >
      <Box sx={{ paddingBottom: 2 }}>
        <Typography
          variant="h5"
          fontWeight="bolder"
          sx={{
            textShadow: "2px 0px 6px rgba(255,255,255,0.7)",
            color: (theme: Theme) => theme.palette.grey[700],
          }}
        >
          ARENAS parceiras
        </Typography>
      </Box>
      <Glider
        className="caroulsel"
        draggable
        hasArrows
        slidesToShow={6}
        slidesToScroll={2}
        scrollLock
        itemWidth={150}
        exactWidth
        containerElement="div"
      >
        {clientes.map((cliente) => (
          <Tooltip title={cliente.nome} placement="top">
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                p: 0.5,
                cursor: "pointer",
              }}
              key={cliente.idImagem}
              onClick={() => router.push(cliente.rota)}
            >
              <img
                src={cliente.urlImagem}
                alt={cliente.alt}
                style={{
                  boxShadow: "-2px 3px 6px 0px #C1D7FF",
                  borderRadius: "10%",
                }}
              />
            </Box>
          </Tooltip>
        ))}
      </Glider>
    </Box>
  );
};

export default ArenasParceiras;
