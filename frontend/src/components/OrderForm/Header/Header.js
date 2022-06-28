import styles from "./Header.module.css";

function Heading({ heading1, heading2 }) {
  return (
    <div className={styles.container}>
      <h1>{heading1.toUpperCase()}</h1>
      <h2>{heading2}</h2>
    </div>
  );
}

export default Heading;
