import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.logo}>floristhood</div>
        <div className={styles.social}>
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagramSquare} />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.firstMenu}>
          <ul>
            <li>Terms & Conditions</li>
            <li>Delivery Details</li>
            <li>Accessibility</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
        <div className={styles.secondMenu}>
          <ul>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className={styles.contact}>
          <div className={styles.address}>
            <address>
              29 Lorem ipsum dolor
              <br />
              Consectetur
              <br />
              London
              <br />
              W1A 1AA
            </address>
          </div>
          <div className={styles.email}>info@floristhood.com</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
