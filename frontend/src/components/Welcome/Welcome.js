import { Link } from "react-router-dom";

import { mainBouquet } from "../../assets/images";
import styles from "./Welcome.module.css";

function Welcome() {
  return (
    <div className={styles.container}>
      <img
        src={mainBouquet}
        alt="A bouquet of pink flowers in a vase"
        className={styles.welcomeImage}
      />
      <div className={styles.welcomeMessage}>
        <h1>
          Personalise your
          <br />
          flower arrangement
        </h1>
        <h2>
          Nam eu rutrum mauris. Cras tempor porttitor augue mattis consectetur.
        </h2>
        <Link to="/order" className={styles.button}>
          Order now
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
