import { useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.css";
import UserButton from "./UserButton/UserButton";
import LoginFormModal from "../LoginFormModal/LoginFormModal";

function Header({ open, setOpen }) {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <header>
      <div className={styles.container}>
        <div className={styles.menu}>
          <FontAwesomeIcon icon={faBars} onClick={() => setOpen(!open)} />
        </div>
        <div className={styles.logo}>floristhood</div>
        <div className={styles.icons}>
          <LoginFormModal />
          <UserButton user={sessionUser} />
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
      </div>
    </header>
  );
}

export default Header;
