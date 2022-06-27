import styles from "./Navigation.module.css";

function Navigation({ page, setPage, first }) {
  return (
    <div className={styles.container}>
      <div className={styles.back}>
        {!first && (
          <button
            onClick={() => {
              console.log(setPage);
              setPage(page - 1);
            }}
            className={styles.backButton}
          >
            &lt; Back
          </button>
        )}
      </div>
      <div className={styles.next}>
        <button
          onClick={() => {
            setPage(page + 1);
          }}
          className={styles.nextButton}
        >
          Continue &gt;
        </button>
      </div>
    </div>
  );
}

Navigation.defaultProps = {
  first: false,
};

export default Navigation;
