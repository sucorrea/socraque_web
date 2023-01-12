import React, { useState, MouseEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRouter } from "next/router";

import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import AdbIcon from "@mui/icons-material/Adb";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

import useStyles from "./styles";
import { useSoCraque } from "../../../../Context/SoCraque";
import Imagem from "next/image";
import { PersonOff, Person } from "@mui/icons-material";

const menuHeader = [
  {
    id: 1,
    nome: "Início",
    url: "/",
  },
  {
    id: 2,
    nome: " Sobre",
    url: "#sobre",
  },
  {
    id: 3,
    nome: "Contato",
    url: "/contato",
  },
  {
    id: 6,
    nome: "Clientes",
    url: "#clientes",
  },
  // {
  //   id: 4,
  //   nome: "Login",
  //   url: "/login",
  // },
];

type MenuHeaderProps = {
  logoImagem: string;
};

const MenuHeader = ({ logoImagem }: MenuHeaderProps) => {
  const styles = useStyles();
  const router = useRouter();
  const { atualizarMode, mode } = useSoCraque();

  const pathname = router.pathname;
  const marcadorMenu = (name: string) => (pathname === name ? true : false);

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (url: string) => {
    router.push(url);
    setAnchorElNav(null);
  };

  const handleEscolhaTema = () => {
    atualizarMode(mode === "light" ? "dark" : "light");
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "none" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={styles.logoMobile}
          >
            <img
              src={logoImagem}
              alt="Logo"
              // width={45}
              // height={55}
              style={{ width: 50, maxHeight: 55 }}
            />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {menuHeader.map((page) => (
                <MenuItem
                  key={page.id}
                  onClick={() => handleCloseNavMenu(page.url)}
                >
                  <Typography textAlign="center">{page.nome}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "none", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={styles.logoDesktop}
          >
            <img
              src={logoImagem}
              alt="Logo"
              style={{ width: 70, maxHeight: 70 }}
            />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {menuHeader.map((page) => (
              <Button
                key={page.id}
                onClick={() => handleCloseNavMenu(page.url)}
                sx={styles.botao(
                  marcadorMenu(page.url) ? "black" : "white",
                  marcadorMenu(page.url) ? 800 : 700
                )}
              >
                {page.nome}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton sx={{ p: 0 }}>
              {/* <Avatar
                alt="imagemAvatar"
                src={'/img/avatar.jpg'}
                sx={{
                  width: { lg: 48, md: 45, sm: 36, xs: 30 },
                  height: { lg: 48, md: 45, sm: 36, xs: 30 },
                }}
              /> */}
              <Button
                variant="contained"
                startIcon={<Person fontSize="large" />}
                disableRipple
                disableElevation
                disableTouchRipple
                disableFocusRipple
                size="large"
                href="/login"
              >
                Login
              </Button>
            </IconButton>
            {/* <IconButton sx={{ p: 0 }} onClick={handleEscolhaTema}>
              {mode === 'light' ? (
                <WbSunnyOutlinedIcon />
              ) : (
                <DarkModeOutlinedIcon />
              )}
            </IconButton> */}
            {/* {mode} */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default MenuHeader;
