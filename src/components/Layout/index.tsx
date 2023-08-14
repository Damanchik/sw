import React, { FC, ReactNode } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Header } from "../Header";
import { Footer } from "../Footer";

interface ILayout {
  children: ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => (
  <>
    <Header />
    <main>
      <CssBaseline />
      {children}
    </main>
    <Footer />
  </>
);

export { Layout };
