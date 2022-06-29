import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "./Search.module.css";
import { useState } from "react";

function Search() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <p className={open ? styles.hide : ""}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        tincidunt quis tortor at dignissim. Donec porttitor, lectus sit amet
        efficitur hendrerit, libero dui rhoncus.
      </p>
      <button
        className={styles.search}
        onClick={!open ? () => setOpen(!open) : ""}
      >
        {open ? (
          <FontAwesomeIcon
            icon={faXmark}
            className={styles.close}
            onClick={() => setOpen(!open)}
          />
        ) : (
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className={styles.magnifyingGlass}
          />
        )}
      </button>
    </div>
  );
}

export default Search;
