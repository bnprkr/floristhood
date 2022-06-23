import styles from "./Thumbnail.module.css";

function Thumbnail(props) {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={props.imageName} alt="Bouquet of flowers" />
      </div>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2>{props.title}</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            tincidunt quis tortor at dignissim.
          </p>
        </div>
        <div className={styles.button}>
          <button>See all</button>
        </div>
      </div>
    </div>
  );
}

export default Thumbnail;
