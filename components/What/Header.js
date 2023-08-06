import styles from "@/styles/WhatHeader.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>WE MAKE COMPLEX CUSTOM APPLICATIONS IN A CLEAR WAY </h1>

        <p className={styles.para}>
          Our focus is on complex long-term web and mobile projects, in which we
          are fully responsible for the technical part, from planning a roadmap
          to deploying and maintaining applications.
        </p>
      </div>
    </div>
  );
};

export default Header;
