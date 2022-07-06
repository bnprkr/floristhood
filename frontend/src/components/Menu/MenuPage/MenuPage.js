import styles from "./MenuPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import { useOnClickOutside } from "../../hooks";

function MenuPage({ open, setOpen }) {
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <>
      <div
        ref={node}
        className={`${styles.container} ${!open ? styles.closed : ""}`}
      >
        <div className={styles.closeIcon}>
          <FontAwesomeIcon icon={faXmark} onClick={() => setOpen(!open)} />
        </div>
        <div className={styles.menuLinks}>
          <div className={styles.menuItem}>
            <a href="#">HOME</a>
          </div>
          <div className={styles.menuItem}>
            <a href="#">SHOP</a>
          </div>
          <div className={styles.menuItem}>
            <a href="#">ABOUT US</a>
          </div>
          <div className={styles.menuItem}>
            <a href="#">CONTACT</a>
          </div>
        </div>

        <div className={styles.logo}>floristhood</div>
      </div>
    </>
  );
}

export default MenuPage;
