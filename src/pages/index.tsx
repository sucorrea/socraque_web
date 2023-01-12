import Head from "next/head";
import React from "react";
import HeadPages from "../Components/HeadPages";

import HomeSoCraque from "../Components/HomeSoCraque";

const Home = () => {
  return (
    <>
      <HeadPages />
      <HomeSoCraque />;
    </>
  );
};

export default Home;
