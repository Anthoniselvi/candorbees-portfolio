import React from "react";
import styles from "@/styles/Menu.module.css";

function Menu({ setOpened }) {
  const hideMenu = () => {
    console.log("Update click has triggered..");
    setOpened(false);
  };

  return (
    <div className={styles.navbars}>
      <ul className={styles.navbarwrappers}>
        <li className={styles.navbarelement}>
          <a href="/what" onClick={hideMenu} className={styles.text}>
            WHAT WE DO
          </a>
        </li>
        <li className={styles.navbarelement}>
          <a href="/project" onClick={hideMenu} className={styles.text}>
            PROJECTS
          </a>
        </li>
        <li className={styles.navbarelement}>
          <a href="/#team" onClick={hideMenu} className={styles.text}>
            TEAM
          </a>
        </li>
        <li className={styles.navbarelement}>
          <a href="/#get" onClick={hideMenu} className={styles.text}>
            GET IN TOUCH
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
