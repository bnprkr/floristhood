import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.css";
import UserButton from "./UserButton/UserButton";
import LoginFormModal from "../LoginFormModal/LoginFormModal";

function Header({ open, setOpen }) {
  const sessionUser = useSelector((state) => state.session.user);
  const [showModal, setShowModal] = useState(false);

  return (
    <header>
      <div className={styles.container}>
        <div className={styles.menu}>
          <FontAwesomeIcon icon={faBars} onClick={() => setOpen(!open)} />
        </div>
        <Link to="/" className={styles.logo}>
          floristhood
        </Link>
        <div className={styles.icons}>
          <LoginFormModal showModal={showModal} setShowModal={setShowModal} />
          <UserButton user={sessionUser} setShowModal={setShowModal} />
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
      </div>
    </header>
  );
}

export default Header;
