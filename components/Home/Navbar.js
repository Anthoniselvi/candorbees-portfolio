import Image from "next/image";
import styles from "@/styles/Navbar.module.css";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/image/logo-blue.png" width="200" height="50" />
        {/* <div className={styles.text} onClick={() => handleNavigation("/")}>
          CANDORBEES
        </div> */}
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li
            className={styles.listItem}
            onClick={() => handleNavigation("/what")}
          >
            WHAT WE DO
          </li>
          <li
            className={styles.listItem}
            onClick={() => handleNavigation("/project")}
          >
            PROJECTS
          </li>
          <li
            className={styles.listItem}
            onClick={() => handleNavigation("/teams")}
          >
            TEAM
          </li>
          <li
            className={styles.listItem}
            onClick={() => handleNavigation("/footer")}
          >
            GET IN TOUCH
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
