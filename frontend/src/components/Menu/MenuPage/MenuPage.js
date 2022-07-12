import styles from "./MenuPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import { useOnClickOutside } from "../../hooks";
import { Link } from "react-router-dom";

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
          <div className={styles.menuItem} onClick={() => setOpen(!open)}>
            <Link to="/">HOME</Link>
          </div>
          <div className={styles.menuItem} onClick={() => setOpen(!open)}>
            <Link to="/order">SHOP</Link>
          </div>
          <div className={styles.menuItem}>ABOUT US</div>
          <div className={styles.menuItem}>CONTACT</div>
        </div>

        <div className={styles.logo}>floristhood</div>
      </div>
    </>
  );
}

export default MenuPage;
