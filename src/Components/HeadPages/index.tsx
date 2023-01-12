import React from "react";
import Head from "next/head";

type HeadPagesProps = {
  nomeTituloPage?: string;
};

const HeadPages = ({ nomeTituloPage }: HeadPagesProps) => {
  return (
    <Head>
      <title>
        {!!nomeTituloPage ? `Só Craque-${nomeTituloPage}` : "So Craque"}
      </title>
    </Head>
  );
};

export default HeadPages;
