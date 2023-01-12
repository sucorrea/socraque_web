import Head from "next/head";
import React from "react";
import ContatoSoCraque from "../Components/ContatoSoCraque";
import HeadPages from "../Components/HeadPages";

const Contato = () => {
  return (
    <>
      <HeadPages nomeTituloPage="Contato" />
      <ContatoSoCraque />
    </>
  );
};

export default Contato;
