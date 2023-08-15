import React from "react";
import styles from "@/styles/Menu.module.css";
import Link from "next/link";

function Menu({ setOpened }) {
  const hideMenu = () => {
    console.log("Update click has triggered..");
    setOpened(false);
  };

  return (
    <div className={styles.navbars}>
      <ul className={styles.navbarwrappers}>
        <li className={styles.navbarelement}>
          {/* <Link href="/what" onClick={hideMenu} className={styles.text}>
            WHAT WE DO
          </Link> */}
          <a href="/what" onClick={hideMenu} className={styles.text}>
            WHAT WE DO
          </a>
        </li>
        <li className={styles.navbarelement}>
          {/* <Link href="/project" onClick={hideMenu} className={styles.text}>
            PROJECTS
          </Link> */}
          <a href="/project" onClick={hideMenu} className={styles.text}>
            PROJECTS
          </a>
        </li>
        <li className={styles.navbarelement}>
          {/* <Link href="/#team" onClick={hideMenu} className={styles.text}>
            TEAM
          </Link> */}
          <a href="/#team" onClick={hideMenu} className={styles.text}>
            TEAM
          </a>
        </li>
        <li className={styles.navbarelement}>
          {/* <Link href="/#get" onClick={hideMenu} className={styles.text}>
            GET IN TOUCH
          </Link> */}
          <a href="/#get" onClick={hideMenu} className={styles.text}>
            GET IN TOUCH
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
