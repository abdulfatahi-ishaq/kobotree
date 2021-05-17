import React from "react";

import Nav from "../components/Nav";
import Footer from "../components/Footer";

function Layout(props) {
  return (
    <>
      <Nav />
      {props.children}
      <Footer />
    </>
  );
}

export default Layout;
