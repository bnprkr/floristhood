import Header from "../../Header/Header";
import Navigation from "../../Navigation/Navigation";
import styles from "./OccasionType.module.css";
import Dropdown from "../../../Dropdown/Dropdown";

function OccasionType({ page, setPage, first }) {
  const occasions = ["Mother's Day", "Father's Day"];
  const recipients = ["Parents", "Grandparents"];
  return (
    <>
      <Header
        heading1="Customise your flowers"
        heading2="Select your occasion and recipient"
      />
      <div className={styles.menuContainer}>
        <Dropdown header="Occasion" items={occasions} />
        <Dropdown header="Recipient" items={recipients} />
      </div>
      <Navigation first={first} page={page} setPage={setPage} />
    </>
  );
}

export default OccasionType;
