import React, { useState, useEffect } from "react";
import styles from "@/styles/NewNavbar.module.css";
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import { HashLink } from "react-router-hash-link";
import Image from "next/image";

function NewNavbar({ opened, setOpened }) {
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    const currentPath = window.location.pathname;
    setActiveLink(currentPath);
  }, []);

  const handleMenuClicked = () => {
    setOpened(!opened);
    console.log("opened");
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
      <div className="navmain">
        <div className="navbarwrapper">
          <div className="navlogo">
            <div style={{ textDecoration: "none" }} to="/">
              <div
                className={
                  activeLink === "/" ? styles.active : styles.navbarleft
                }
              >
                <div className={styles.link}>
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
                </div>
              </div>
            </div>
          </div>
          <div className="navinner">
            <div
              className={
                activeLink === "/what" ? styles.active : styles.navelements
              }
            >
              <div className={styles.link}>
                <a
                  href="/what"
                  className={
                    activeLink === "/"
                      ? styles.menuwhite
                      : activeLink === "/what"
                      ? styles.activetextwhat
                      : styles.activetextinital
                  }
                >
                  WHAT WE DO
                </a>
              </div>
            </div>
            <div
              className={
                activeLink === "/project" ? styles.active : styles.navelements
              }
            >
              <div className={styles.link}>
                <a
                  href="/project"
                  className={
                    activeLink === "/"
                      ? styles.menuwhite
                      : activeLink === "/project"
                      ? styles.activetextproject
                      : styles.activetextinital
                  }
                >
                  PROJECTS
                </a>
              </div>
            </div>
            <div
              className={
                activeLink === "/#team" ? styles.active : styles.navelements
              }
            >
              <div className={styles.link}>
                <a
                  href="/#team"
                  className={
                    activeLink === "/"
                      ? styles.menuwhite
                      : activeLink === "/#team"
                      ? styles.activetextteam
                      : styles.activetextinital
                  }
                >
                  TEAM
                </a>
              </div>
            </div>
            <div
              className={
                activeLink === "/#get" ? styles.active : styles.navelements
              }
            >
              <div className={styles.link}>
                <a
                  href="/#get"
                  className={
                    activeLink === "/"
                      ? styles.menuwhite
                      : activeLink === "/#get"
                      ? styles.activetextget
                      : styles.activetextinital
                  }
                >
                  GET IN TOUCH
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {!opened ? (
        <GiHamburgerMenu onClick={handleMenuClicked} className={styles.icon} />
      ) : (
        <ImCross onClick={handleMenuClicked} className={styles.icon} />
      )}
    </div>
  );
}

export default NewNavbar;
