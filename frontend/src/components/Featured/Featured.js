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
      <div className={styles.thumbnails}>
        <Thumbnail imageName={featuredThumb1} />
        <Thumbnail imageName={featuredThumb2} />
        <Thumbnail imageName={featuredThumb3} />
        <Thumbnail imageName={featuredThumb4} />
        <Thumbnail imageName={featuredThumb5} />
      </div>
    </div>
  );
}

export default Featured;
