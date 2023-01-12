import React, { ReactNode } from "react";

import Box from "@mui/material/Box";

import MenuHeader from "./MenuHeader";
import MenuFooter from "./MenuFooter";
import useStyles from "./styles";

type LayoutProps = {
  children: ReactNode;
  boxCenter?: boolean;
  margimTopBoxNone?: number;
};

const Layout = ({
  children,
  boxCenter = true,
  margimTopBoxNone = 4,
}: LayoutProps) => {
  const styles = useStyles();

  return (
    <Box sx={styles.root}>
      <MenuHeader logoImagem={"/img/logo-footer.png"} />
      {boxCenter ? (
        <Box sx={styles.boxCentral}>{children}</Box>
      ) : (
        <Box sx={styles.boxCentralSemBackGround(margimTopBoxNone)}>
          {children}
        </Box>
      )}
      <Box sx={styles.footer}>
        <MenuFooter />
      </Box>
    </Box>
  );
};

export default Layout;
