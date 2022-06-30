import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    // <div className={styles.container}>
    //   <div className={styles.left}>
    //     <div className={styles.logo}>floristhood</div>
    //     <div className={styles.social}>
    //       <FontAwesomeIcon icon={faFacebook} />
    //       <FontAwesomeIcon icon={faInstagramSquare} />
    //     </div>
    //   </div>
    //   <div className={styles.right}>
    //     <div className={styles.firstMenu}>
    //       <ul>
    //         <li>Terms & Conditions</li>
    //         <li>Delivery Details</li>
    //         <li>Accessibility</li>
    //         <li>Privacy Policy</li>
    //       </ul>
    //     </div>
    //     <div className={styles.secondMenu}>
    //       <ul>
    //         <li>Cookie Policy</li>
    //         <li>About Us</li>
    //         <li>Contact</li>
    //       </ul>
    //     </div>
    //     <div className={styles.contact}>
    //       <div className={styles.address}>
    //         <address>
    //           29 Lorem ipsum dolor
    //           <br />
    //           Consectetur
    //           <br />
    //           London
    //           <br />
    //           SE1 1AA
    //         </address>
    //       </div>
    //       <div className={styles.email}>info@floristhood.com</div>
    //     </div>
    //   </div>
    // </div>

    <div className={styles.container}>
      <div className={`${styles.column} ${styles.logoCol}`}>
        <div className={styles.logo}>floristhood</div>
      </div>
      <div className={styles.column}>
        <ul>
          <li>Terms & Conditions</li>
          <li>Delivery Details</li>
          <li>Accessibility</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className={styles.column}>
        <ul>
          <li>Cookie Policy</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className={styles.column}>
        <div className={styles.address}>
          <address>
            29 Lorem ipsum dolor
            <br />
            Consectetur
            <br />
            London
            <br />
            SE1 1AA
          </address>
        </div>
      </div>
      <div className={`${styles.column} ${styles.online}`}>
        <div className={styles.online}>
          <div className={styles.social}>
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagramSquare} />
          </div>
          <div className={styles.email}>info@floristhood.com</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
