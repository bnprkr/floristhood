import styles from "./MenuPage.module.css";

function MenuPage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.menuLinks}>
          <div className={styles.menuItem}>
            <a href="#">HOME</a>
          </div>
          <div className={styles.menuItem}>
            <a href="#">SHOP</a>
          </div>
          <div className={styles.menuItem}>
            <a href="#">ABOUT US</a>
          </div>
          <div className={styles.menuItem}>
            <a href="#">CONTACT</a>
          </div>
        </div>

        <div className={styles.logo}>floristhood</div>
      </div>
    </>
  );
}

export default MenuPage;
