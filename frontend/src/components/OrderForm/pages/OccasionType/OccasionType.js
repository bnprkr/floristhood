import Header from "../../Header/Header";
import Navigation from "../../Navigation/Navigation";
import styles from "./OccasionType.module.css";
import Dropdown from "../../../Dropdown/Dropdown";

function OccasionType({ page, setPage }) {
  const occasions = ["Mother's Day", "Father's Day"];
  const recipients = ["Parents", "Grandparents"];
  return (
    <>
      <Header
        heading1="Customise your flowers"
        heading2="Select your occasion and recipient"
      />
      <div className={styles.menuContainer}>
        <div className={styles.menuItem}>
          <Dropdown header="Occasion" items={occasions} />
        </div>
        <div className={styles.menuItem}>
          <Dropdown header="Recipient" items={recipients} />
        </div>
      </div>
      <Navigation page={page} setPage={setPage} />
    </>
  );
}

export default OccasionType;
