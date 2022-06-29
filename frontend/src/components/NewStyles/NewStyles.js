import styles from "./NewStyles.module.css";
import { newThumb1, newThumb2 } from "../../assets/images";
import Thumbnail from "./Thumbnail/Thumbnail";

function NewStyles() {
  return (
    <div className={styles.container}>
      <h1>New Styles</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        tincidunt quis tortor at dignissim.
      </p>
      <div className={styles.thumbnailContainer}>
        <div className={styles.thumbnail}>
          <Thumbnail title="British Tulips" imageName={newThumb1} />
        </div>
        <div className={styles.thumbnail}>
          <Thumbnail title="Hand-tied Flowers" imageName={newThumb2} />
        </div>
      </div>
    </div>
  );
}

export default NewStyles;
