import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../../store/session";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import styles from "./UserButton.module.css";

function UserButton({ user, setShowModal }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  const menuContent = user ? (
    <li className={styles.menuItem} onClick={logout}>
      Log Out
    </li>
  ) : (
    <>
      <li className={styles.menuItem} onClick={() => setShowModal(true)}>
        Log In
      </li>
      <li>
        <a className={styles.menuItem} href="/register">
          Register
        </a>
      </li>
    </>
  );

  return (
    <>
      <div className={styles.userDropdown}>
        <FontAwesomeIcon icon={faUser} onClick={openMenu} />
        {showMenu && <ul className={styles.userMenu}>{menuContent}</ul>}
      </div>
    </>
  );
}

export default UserButton;
