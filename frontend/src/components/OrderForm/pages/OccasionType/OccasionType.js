import Header from "../../Header/Header";
import Navigation from "../../Navigation/Navigation";
import styles from "./OccasionType.module.css";
import Dropdown from "../../../Dropdown/Dropdown";
import { useState } from "react";

function OccasionType({
  page,
  setPage,
  occasion,
  setOccasion,
  recipient,
  setRecipient,
}) {
  const occasions = ["Mother's Day", "Father's Day"];
  const recipients = ["Parents", "Grandparents"];
  const [errors, setErrors] = useState([]);

  const onNext = (occasion, recipient, setErrors) => {
    if (!occasion || !recipient) {
      setErrors(["Occassion and recipient required"]);
      window.scrollTo(0, 0);
    } else return true;
  };

  return (
    <>
      <Header
        heading1="Customise your flowers"
        heading2="Select your occasion and recipient"
      />
      {errors.length > 0 && (
        <ul className={styles.errors}>
          {errors.map((error, i) => (
            <li key={i}>{error}</li>
          ))}
        </ul>
      )}
      <div className={styles.menuContainer}>
        <div className={styles.menuItem}>
          <Dropdown
            header="Occasion"
            items={occasions}
            value={occasion}
            setValue={setOccasion}
          />
        </div>
        <div className={styles.menuItem}>
          <Dropdown
            header="Recipient"
            items={recipients}
            value={recipient}
            setValue={setRecipient}
          />
        </div>
      </div>
      <Navigation
        page={page}
        setPage={setPage}
        onNext={onNext.bind(null, occasion, recipient, setErrors)}
      />
    </>
  );
}

export default OccasionType;
