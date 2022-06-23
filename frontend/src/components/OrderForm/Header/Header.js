import styles from "./Header.module.css";

function Heading({ heading1, heading2 }) {
  return (
    <>
      <h1>{heading1.toUpperCase()}</h1>
      <h2>{heading2}</h2>
    </>
  );
}

export default Heading;
