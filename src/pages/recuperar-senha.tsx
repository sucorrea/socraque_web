import Head from "next/head";
import React from "react";
import HeadPages from "../Components/HeadPages";
import RecuperarSenha from "../Components/RecuperarSenha";

const Recuperar = () => {
  return (
    <>
      <HeadPages nomeTituloPage="Recuperar Senha" />
      <RecuperarSenha />
    </>
  );
};

export default Recuperar;
