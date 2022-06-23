import styles from "./Thumbnail.module.css";

function Thumbnail({ imageName }) {
  return (
    <div className={styles.container}>
      <img src={imageName} alt="Bouquet of flowers" />
      <span>
        Quisque
        <br />
        pellentesque
      </span>
    </div>
  );
}

export default Thumbnail;
