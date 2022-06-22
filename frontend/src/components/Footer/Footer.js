import styles from './Footer.module.css'

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          floristhood
        </div>
        <div className={styles.social}>
        
        </div>
      </div>
      <div className={styles.menu}>

      </div>
      <div className={styles.contact}>
        <div className={styles.address}>
        
        </div>
        <div className={styles.email}>
        
        </div>
      </div>
    </div>
  );
}

export default Footer;