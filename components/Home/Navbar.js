import Image from "next/image";
import styles from "@/styles/Navbar.module.css";
import { useRouter } from "next/router";
import { useState } from "react";
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import { useMediaQuery } from "@mui/material";

const Navbar = ({ opened, setOpened }) => {
  const [activeLink, setActiveLink] = useState("/");
  const router = useRouter();

  const handleNavigation = (path) => {
    setActiveLink(path); // Update activeLink when a menu item is clicked
    router.push(path);
  };

  const handleMenuClicked = () => {
    setOpened(!opened);
  };

  return (
    <div
      className={
        activeLink === "/"
          ? styles.activehome
          : activeLink === "/what"
          ? styles.activewhat
          : activeLink === "/project"
          ? styles.activeproject
          : activeLink === "/#team"
          ? styles.activeteam
          : activeLink === "/#get"
          ? styles.activeget
          : styles.nav
      }
    >
      <div className={styles.item}>
        <Image
          alt="logo"
          src="/image/logo-blue.png"
          style={{
            width: "50%",
            height: "100%",
            cursor: "pointer",
          }}
          width={400}
          height={400}
          onClick={() => handleNavigation("/")}
        />
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li
            onClick={() => handleNavigation("/what")}
            className={
              activeLink === "/"
                ? styles.menuwhite
                : activeLink === "/#get"
                ? styles.menuwhite
                : activeLink === "/what"
                ? styles.activetextwhat
                : styles.activetextinitial
            }
          >
            WHAT WE DO
          </li>
          <li
            onClick={() => handleNavigation("/project")}
            className={
              activeLink === "/"
                ? styles.menuwhite
                : activeLink === "/#get"
                ? styles.menuwhite
                : activeLink === "/project"
                ? styles.activetextproject
                : styles.activetextinitial
            }
          >
            PROJECTS
          </li>
          <li
            onClick={() => handleNavigation("/#team")}
            className={
              activeLink === "/"
                ? styles.menuwhite
                : activeLink === "/#get"
                ? styles.menuwhite
                : activeLink === "/#team"
                ? styles.activetextteam
                : styles.activetextinitial
            }
          >
            TEAM
          </li>
          <li
            onClick={() => handleNavigation("/#get")}
            className={
              activeLink === "/"
                ? styles.menuwhite
                : activeLink === "/#get"
                ? styles.activetextget
                : styles.activetextinitial
            }
          >
            GET IN TOUCH
          </li>
        </ul>
      </div>

      {!opened ? (
        <GiHamburgerMenu onClick={handleMenuClicked} className={styles.icon} />
      ) : (
        <ImCross onClick={handleMenuClicked} className={styles.icon} />
      )}
    </div>
  );
};

export default Navbar;
