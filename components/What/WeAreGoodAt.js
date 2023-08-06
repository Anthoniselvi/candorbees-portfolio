import styles from "@/styles/WeAreGood.module.css";

const WeAreGoodAt = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.content1}>
          <h1>WE VALUE RELATIONSHIPS </h1>

          <p className={styles.parat1}>
            We are burning not only with cool projects, but also with the people
            behind them. And a perfect team match truly matters. Our clients are
            our partners, co-authors, and friends at all project stages. Here
            are some examples of times when CandorBees became a best-fit
            teammate for our customers.
          </p>
          <p className={styles.parat1}>&#160;</p>

          <h1>WE KNOW EXACTLY WHAT WE ARE GOOD AT </h1>

          <p className={styles.parat1}>
            Our clear definition makes us really good experts.
          </p>
          <p className={styles.parat1}>&#160;</p>

          <h5>WE PROVIDE: </h5>

          <div className={styles.list}>
            <ul>
              <li className={styles.li}>Programming.</li>
              <li className={styles.li}>Testing.</li>
              <li className={styles.li}>Development process management.</li>
              <li className={styles.li}>Server configuration and support.</li>
              <li className={styles.li}>Documentation creation. </li>
            </ul>
          </div>
          <p className={styles.parat1}>&#160;</p>

          <h5>WE DO NOT PROVIDE:</h5>

          <div className={styles.list}>
            <ul>
              <li className={styles.li}>
                Consulting; we can share our experience, but consulting is not
                our area.
              </li>
              <li className={styles.li}>
                Design; if you don't have your own designer, we are ready to
                recommend our partners.
              </li>
              <li className={styles.li}>
                AI/VR/AR/ML; we can determine the need for such technologies and
                attract third-party narrow experts.
              </li>
              <li className={styles.li}>
                Promotion and sales; we are techies, so business endeavors are
                up to you.
              </li>
            </ul>
          </div>
          <p className={styles.parat1}>&#160;</p>

          <h1>IT’S EASY TO GET US STARTED</h1>

          <p className={styles.parat1}>
            If you have a vision for a future product, you simply need to reach
            out and tell us your idea. There’s no need to include technical
            specifications and other complex documentation, and we won’t burden
            you with requests for payment or cost estimations right away. If we
            feel your project is a good match for us, we will assemble a team,
            draw up a roadmap, and launch sprints. There will be interesting and
            difficult work ahead, but this stage is very simple.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeAreGoodAt;
