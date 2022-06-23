import styles from "./Navigation.module.css";

function Navigation({ page, setPage, first }) {
  return (
    <div className="container">
      <button
        onClick={() => {
          setPage(page + 1);
        }}
        className={first ? styles.hide : ""}
      >
        Back
      </button>
      <button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Next
      </button>
    </div>
  );
}

Navigation.defaultProps = {
  first: false,
};

export default Navigation;
