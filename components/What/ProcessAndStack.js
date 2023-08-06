import styles from "@/styles/Process.module.css";

const ProcessAndStack = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containercontent}>
        <h1>WE ARE TRANSPARENT, AND SO IS OUR PROCESS </h1>

        <p className={styles.para}>
          The process is based on Scrum, which we have tweaked to make it more
          practical and allow us to work remotely in different time zones. You
          can read details in our knowledge base.
        </p>
      </div>

      <div className={styles.containercontent1}>
        <div className={styles.containercontent1a}>
          <h6>PREDICTABILITY </h6>

          <p className={styles.para}>
            We maintain a long-term roadmap for months in advance and detailed
            estimates for upcoming weeks. Working with startups forces us to
            change the plan a lot, but we always have it.
          </p>
        </div>
        <div className={styles.containercontent1a}>
          <h6>PRACTICALITY </h6>

          <p className={styles.para}>
            We maintain projects in working and shippable conditions at all
            times. We also understand that humans are not perfect, so we do a
            lot of documenting and testing.
          </p>
        </div>
        <div className={styles.containercontent1a}>
          <h6>TRANSPARENCY </h6>

          <p className={styles.para}>
            The client has full access to all tasks, documentation, servers, and
            code. Everyone can talk to anyone. Weekly demos ensure that everyone
            is on the same page.
          </p>
        </div>
      </div>

      <div className={styles.container1}>
        <div className={styles.container1content}>
          <p className={styles.para1}>
            We have carefully chosen a range of established and adaptable
            technologies that empower us to develop fully functional apps of any
            level of complexity, starting from scratch. This is our
            tried-and-true approach to delivering exceptional results.
          </p>

          <h4>REACT, NODE.JS, NEXT, NEST, MONGODB, POSTGRESQL</h4>
        </div>
      </div>
    </div>
  );
};

export default ProcessAndStack;
