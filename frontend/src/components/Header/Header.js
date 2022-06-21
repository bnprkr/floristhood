import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './Header.css'

function Header() {
  return (
    <header>
      <div className="container">
        <div className="menu">
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className="logo">
          floristhood
        </div>
        <div className="icons">
          <FontAwesomeIcon icon={faUser} />
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
      </div>
    </header>
  );
}

export default Header;