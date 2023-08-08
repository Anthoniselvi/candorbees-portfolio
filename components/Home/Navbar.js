import Image from "next/image";
import styles from "@/styles/Navbar.module.css";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ opened, setOpened }) => {
  const [activeLink, setActiveLink] = useState("/");
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };

  const handleMenuClicked = () => {
    setOpened(!opened);
    console.log("opened");
  };
  useEffect(() => {
    const currentPath = window.location.pathname;
    setActiveLink(currentPath);
  }, []);

  return (
    <div
      // className={styles.container}
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
        {activeLink === "/" ? (
          <Image
            src="/image/logo-blue.png"
            width="200"
            height="50"
            onClick={() => handleNavigation("/")}
          />
        ) : activeLink === "/what" ? (
          <Image
            src="/image/logo-purple.png"
            width="200"
            height="50"
            onClick={() => handleNavigation("/")}
          />
        ) : (
          // activeLink === "/project" ?
          <Image
            src="/image/logo-white.png"
            width="200"
            height="50"
            onClick={() => handleNavigation("/")}
          />
        )}
        {/* <div className={styles.text} onClick={() => handleNavigation("/")}>
          CANDORBEES
        </div> */}
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li
            // className={styles.listItem}
            onClick={() => handleNavigation("/what")}
            className={
              activeLink === "/"
                ? styles.menuwhite
                : activeLink === "/what"
                ? styles.activetextwhat
                : styles.activetextinitial
            }
          >
            WHAT WE DO
          </li>
          <li
            // className={styles.listItem}
            onClick={() => handleNavigation("/project")}
            className={
              activeLink === "/"
                ? styles.menuwhite
                : activeLink === "/project"
                ? styles.activetextproject
                : styles.activetextinitial
            }
          >
            PROJECTS
          </li>
          <li
            // className={styles.listItem}
            onClick={() => handleNavigation("/#team")}
            className={
              activeLink === "/"
                ? styles.menuwhite
                : activeLink === "/#team"
                ? styles.activetextteam
                : styles.activetextinitial
            }
          >
            TEAM
          </li>
          <li
            // className={styles.listItem}
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
