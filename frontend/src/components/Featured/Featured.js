import styles from "./Featured.module.css";
import {
  featuredThumb1,
  featuredThumb2,
  featuredThumb3,
  featuredThumb4,
  featuredThumb5,
} from "../../assets/images";
import Thumbnail from "../Thumbnail/Thumbnail";
import { Link } from "react-router-dom";

function Featured() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Featured Arrangements</h1>
        <div className={styles.thumbnailContainer}>
          <div className={styles.thumbnail}>
            <Link to="/order">
              <Thumbnail imageName={featuredThumb1} />
            </Link>
          </div>
          <div className={styles.thumbnail}>
            <Link to="/order">
              <Thumbnail imageName={featuredThumb2} />
            </Link>
          </div>
          <div className={styles.thumbnail}>
            <Link to="/order">
              <Thumbnail imageName={featuredThumb3} />
            </Link>
          </div>
          <div className={styles.thumbnail}>
            <Link to="/order">
              <Thumbnail imageName={featuredThumb4} />
            </Link>
          </div>
          <div className={styles.thumbnail}>
            <Link to="/order">
              <Thumbnail imageName={featuredThumb5} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
