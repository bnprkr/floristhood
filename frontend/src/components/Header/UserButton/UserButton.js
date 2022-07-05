import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../../store/session";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import styles from "./UserButton.module.css";

function UserButton({ user }) {
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
    <li>
      <button onClick={logout}>Log Out</button>
    </li>
  ) : (
    <>
      <li>
        <Link to="/login">Log In</Link>
      </li>
      <li>
        <Link to="/signup">Sign Up</Link>
      </li>
    </>
  );

  return (
    <>
      <FontAwesomeIcon icon={faUser} onClick={openMenu} />
      {showMenu && <ul className={styles.userDropdown}>{menuContent}</ul>}
    </>
  );
}

export default UserButton;
