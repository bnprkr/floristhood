import Header from "../../Header/Header";
import Navigation from "../../Navigation/Navigation";
import styles from "./OccasionType.module.css";

function OccasionType({ page, setPage, first }) {
  setPage(2);

  return (
    <>
      <Header
        heading1="Customise your flowers"
        heading2="Select your occasion and recipient"
      />
      <div className={styles.menuContainer}></div>
      <Navigation first={first} page={page} setPage={setPage} />
    </>
  );
}

export default OccasionType;
