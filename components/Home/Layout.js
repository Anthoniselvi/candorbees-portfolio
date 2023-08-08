import React, { useState } from "react";
// import Navbar from "./Navbar";
import Footer from "./Footer";
import Menu from "./Menu";
import NewNavbar from "./NewNavbar";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const [opened, setOpened] = useState(false);
  return (
    <div>
      <Navbar opened={opened} setOpened={setOpened} />
      {opened ? <Menu setOpened={setOpened} /> : <div>Menu not opened</div>}
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
