import styles from "./Thumbnail.module.css";

function Thumbnail({ imageName, text1, text2 }) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src={imageName}
          alt="Bouquet of flowers"
          className={styles.image}
        />
      </div>
      <span>
        {text1}
        <br />
        {text2}
      </span>
    </div>
  );
}

Thumbnail.defaultProps = {
  text1: "Quisque",
  text2: "pellentesque",
};

export default Thumbnail;
