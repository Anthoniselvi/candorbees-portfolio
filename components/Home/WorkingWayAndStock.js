import styles from "@/styles/Working.module.css";

const WorkingWayAndStock = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>
          WE VALUE TRANSPARENCY, MAKING OUR PROCESS EASILY UNDERSTANDABLE.
        </h1>

        <p className={styles.para}>
          Our process is designed to be straightforward and customer-friendly.
          Utilizing a Scrum-based workflow, we ensure efficient collaboration,
          even across different time zones between our team and clients.
        </p>
      </div>

      <div className={styles.button}>LOOK AT HOW WE WORK</div>

      <div className={styles.container1}>
        <div className={styles.content}>
          <p className={styles.para1}>
            We have carefully chosen a range of established and adaptable
            technologies that empower us to develop fully functional apps,
            starting from scratch. This is our tried & true approach to
            delivering exceptional results.
          </p>
          <h4>REACT, NODE.JS, NEXT, NEST, MONGODB, POSTGRESQL</h4>
        </div>
      </div>
    </div>
  );
};

export default WorkingWayAndStock;
