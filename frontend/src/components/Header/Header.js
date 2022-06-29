import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.css";

function Header({ open, setOpen }) {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.menu}>
          <FontAwesomeIcon icon={faBars} onClick={() => setOpen(!open)} />
        </div>
        <div className={styles.logo}>floristhood</div>
        <div className={styles.icons}>
          <FontAwesomeIcon icon={faUser} />
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
      </div>
    </header>
  );
}

export default Header;
