import { useState } from "react";
import Header from "../../Header/Header";
import Navigation from "../../Navigation/Navigation";
import styles from "./PrimaryFlower.module.css";
import ThumbnailSelect from "../../../ThumbnailSelect/Thumbnail";
import { thumbs } from "../../../../assets/images";

function PrimaryFlower({ page, setPage, setPrimaryFlower }) {
  const [oneSelected, toggleOneSelected] = useState(false);
  const [errors, setErrors] = useState([]);

  const onNext = (oneSelected, setErrors) => {
    console.log("oneSelected:", oneSelected);
    if (!oneSelected) {
      setErrors(["At least one option must be selected"]);
      window.scrollTo(0, 0);
    } else return true;
  };

  return (
    <>
      <Header
        heading1="Customise your flowers"
        heading2="Choose your primary flower"
      />
      <ul className={styles.errors}>
        {errors.map((error, i) => (
          <li key={i}>{error}</li>
        ))}
      </ul>
      <div className={styles.thumbsContainer}>
        {Array.from({ length: 9 }, (_, i) => {
          return (
            <div key={i} className={styles.thumbnail}>
              <ThumbnailSelect
                text1="Quisque pellentesque"
                text2=""
                imageName={thumbs[i]}
                oneSelected={oneSelected}
                toggleOneSelected={toggleOneSelected}
                setState={setPrimaryFlower}
              />
            </div>
          );
        })}
      </div>
      <Navigation
        page={page}
        setPage={setPage}
        onNext={onNext.bind(null, oneSelected, setErrors)}
      />
    </>
  );
}

export default PrimaryFlower;
