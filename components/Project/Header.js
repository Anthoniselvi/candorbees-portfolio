import Image from "next/image";
import styles from "@/styles/ProjectHeader.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containercontent}>
        <h1>THESE ARE SOME OF OUR PERFECT MATCHES </h1>

        <p className={styles.para}>
          We are driven not only by exciting projects but also by the people who
          bring them to life. Finding the perfect team match is of utmost
          importance to us. Our clients are not just clients; they are our
          partners, collaborators, and friends throughout all stages of the
          project. Let's take a look at some instances where CandorBees proved
          to be the ideal teammate for our valued customers.
        </p>
      </div>

      <div className={styles.container1}>
        <Image
          src="/image/project5.png"
          width="50"
          height="50"
          alt=""
          className={styles.homeimage}
        />

        <div className={styles.container3}>
          <h2>Production Scheduler</h2>
          <h3>JOB MANAGEMENT PLATFORM</h3>
          <p className={styles.parat}>Country: India</p>
          <p className={styles.para}>
            Technologies : React, Node.js, PostgreSQL
          </p>
          <p className={styles.para}>Time together: 6 months till now</p>
          <p className={styles.para}>Team : 1 PM, 0.5 BA, 2 developers, 1 QA</p>
          <p className={styles.para}>
            <Image
              src="/image/arrow.png"
              width="20"
              height="20"
              alt=""
              className={styles.homeimage1}
            />
          </p>
        </div>
      </div>

      <div className={styles.container1a}>
        <Image
          src="/image/project1.png"
          width="50"
          height="50"
          alt=""
          className={styles.homeimage}
        />
        <div className={styles.container3}>
          <h2>Gift Junction</h2>
          <h3>A GIFT MANAGEMENT SOFTWARE</h3>
          <p className={styles.parat}>Country: United States</p>
          <p className={styles.para}>
            Technologies : React, Node.js, PostgreSQL
          </p>
          <p className={styles.para}>Time together: 3 months till now</p>
          <p className={styles.para}>
            Team : 0.5 PM, 0.5 BA, 2 developers, 1 QA
          </p>
          <p className={styles.para}>
            <Image
              src="/image/arrow.png"
              width="20"
              height="20"
              alt=""
              className={styles.homeimage1}
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
