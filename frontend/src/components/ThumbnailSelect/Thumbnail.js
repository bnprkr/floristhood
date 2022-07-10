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
  setState,
  select,
  multiple,
}) {
  const [selected, toggleSelected] = useState(select ? true : false);

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
          onClick={(event) => {
            if (selected) {
              toggleSelected(false);
              toggleOneSelected(false);
              setState && setState(false, event.target.getAttribute("src"));
            } else if (!oneSelected || multiple) {
              toggleSelected(true);
              toggleOneSelected(true);
              setState && setState(true, event.target.getAttribute("src"));
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
