import Head from "next/head";
import React from "react";
import HeadPages from "../Components/HeadPages";

import LoginSoCraque from "../Components/LoginSoCraque";

const Login = () => {
  return (
    <>
      <HeadPages nomeTituloPage="Login" />
      <LoginSoCraque />
    </>
  );
};

export default Login;
