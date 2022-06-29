import styles from "./Featured.module.css";
import {
  featuredThumb1,
  featuredThumb2,
  featuredThumb3,
  featuredThumb4,
  featuredThumb5,
} from "../../assets/images";
import Thumbnail from "../Thumbnail/Thumbnail";

function Featured() {
  return (
    <div className={styles.container}>
      <h1>Featured Arrangements</h1>
      <div className={styles.thumbnailContainer}>
        <div className={styles.thumbnail}>
          <Thumbnail imageName={featuredThumb1} />
        </div>
        <div className={styles.thumbnail}>
          <Thumbnail imageName={featuredThumb2} />
        </div>
        <div className={styles.thumbnail}>
          <Thumbnail imageName={featuredThumb3} />
        </div>
        <div className={styles.thumbnail}>
          <Thumbnail imageName={featuredThumb4} />
        </div>
        <div className={styles.thumbnail}>
          <Thumbnail imageName={featuredThumb5} />
        </div>
      </div>
    </div>
  );
}

export default Featured;
