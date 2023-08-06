import styles from "@/styles/Teams.module.css";
import Image from "next/image";

const Teams = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content1}>
        <h1>
          <span id="team" className={styles.span}></span>
          OUR CANDORBEES
        </h1>

        <p className={styles.para}>
          We are a remote team of 5 professionals who are passionate about
          creating complex projects. With a remarkable track record of zero
          staff turnover, each member of our community is a highly skilled
          expert who finds joy in crafting intricate projects.
        </p>
      </div>

      <div className={styles.container2}>
        <div className={styles.content}>
          <div className={styles.image}>
            {/* <img src="./image/profile1.png" alt="" className="homeTeam_image" /> */}
            <Image
              src="/image/profile1.png"
              width="200"
              height="200"
              alt=""
              className={styles.teamimage}
            />
          </div>
          <h3>
            <a href="https://www.linkedin.com/in/anthoni-selvi-813804248/">
              ANTHONI SELVI
            </a>
          </h3>
          <p className={styles.parat}>Role: Full Stack Developer</p>
          <p className={styles.para}>Time together : 2 years</p>
        </div>

        <div className={styles.content}>
          {/* <img src="./image/profile2.png" alt="" className={styles.teamimage} /> */}
          <Image
            src="/image/profile2.png"
            width="200"
            height="200"
            alt=""
            className={styles.teamimage}
          />
          <h3>
            <a href="https://www.linkedin.com/in/fatima-mary-572b90252/">
              FATIMA MARY
            </a>
          </h3>

          <p className={styles.parat}>Role: Full Stack Developer</p>
          <p className={styles.para}>Time together: 2 years</p>
        </div>

        <div className={styles.content}>
          {/* <img src="/image/profile3.jpg" alt="" className={styles.teamimage}/> */}
          <Image
            src="/image/profile3.jpg"
            width="200"
            height="200"
            alt=""
            className={styles.teamimage}
          />
          <h3>
            <a href="https://www.linkedin.com/in/stella-mary-577ab1252">
              MARIA STELLA MARY
            </a>
          </h3>
          <div className={styles.parat}>Role: UI Developer</div>
          <div className={styles.para}>Time together: 2 years</div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
