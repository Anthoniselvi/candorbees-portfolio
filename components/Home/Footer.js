import Image from "next/image";
import { useState } from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import styles from "@/styles/Footer.module.css";
const Footer = () => {
  const [ishovered, setIsHovered] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.content}>
          <h1>
            <span id="get" className={styles.span}></span>
            LET’S MAKE IT TOGETHER
          </h1>

          <form className={styles.myform}>
            <div className={styles.myforminput}>
              <label className={styles.label}>Name</label>
              <input
                required
                type="text"
                name="name"
                className={styles.input}
              />
            </div>
            <div className={styles.myforminput}>
              <label className={styles.label}>Email</label>
              <input
                required
                type="email"
                name="email"
                className={styles.input}
              />
            </div>
            <div className={styles.myforminput}>
              <label className={styles.label}>Message</label>
              <textarea required name="message" className={styles.textarea} />
            </div>
            <button
              className={styles.button}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {ishovered ? (
                <div className={styles.submitbtn}>
                  Submit
                  <ArrowRightAltIcon
                    className={styles.rightarrow}
                    sx={{ fontSize: "35px" }}
                  />
                </div>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>

        <div className={styles.content}>
          <p className={styles.para3}>
            WE’RE HERE
            <br />
            14, Ekambaram Street, Chitlapakkam, Chennai 600064.
          </p>
          <p className={styles.para}>
            WORKING HOURS
            <br />
            From 9 am to 8 pm(UTC+5.30)
          </p>
          <p className={styles.para}>
            DROP US A LINE
            <br />
            <a href="mailto:srilekha.rajasekar@gmail.com">
              <span className={styles.font}>srilekha.rajasekar@gmail.com</span>
            </a>
            <br />
            +91 9176856135
          </p>
          <p className={styles.para}>
            <a href="https://www.linkedin.com/company/candorbees/">
              {/* <LinkedInIcon sx={{ fontSize: "35px" }} /> */}LinkedIn
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
