import styles from "./Thumbnail.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Thumbnail({
  imageName,
  text1,
  text2,
  oneSelected,
  toggleOneSelected,
}) {
  const [selected, toggleSelected] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        {selected && (
          <FontAwesomeIcon icon={faXmark} className={styles.xmark} />
        )}
        <img
          src={imageName}
          alt="Bouquet of flowers"
          className={styles.image}
          onClick={() => {
            if (selected) {
              toggleSelected(false);
              toggleOneSelected(false);
            } else if (!oneSelected) {
              toggleSelected(true);
              toggleOneSelected(true);
            }
          }}
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
