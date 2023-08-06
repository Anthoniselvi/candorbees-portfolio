import styles from "@/styles/Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>WE ARE A TRUSTED COMPANION IN YOUR WEB APP DEVELOPMENT.</h1>
        <p className={styles.para}>
          We work with both startups and established businesses to create
          exceptional products that boost performance and drive growth. We are
          enthusiastic about advanced technologies and challenging projects, yet
          we value straightforward and well-coordinated collaboration.
        </p>
      </div>
    </div>
  );
};

export default Header;
