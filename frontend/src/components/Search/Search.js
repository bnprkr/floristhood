import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "./Search.module.css";
import { useHistory } from "react-router-dom";

function Search() {
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    history.push("/order");
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          tincidunt quis tortor at dignissim. Donec porttitor, lectus sit amet
          efficitur hendrerit, libero dui rhoncus.
        </p>
        <form className={styles.search} onSubmit={onSubmit}>
          <input placeholder="Search..." disabled></input>
          <button>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className={styles.magnifyingGlass}
            />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Search;
