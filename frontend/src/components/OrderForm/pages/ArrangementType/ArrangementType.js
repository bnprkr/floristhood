import Header from "../../Header/Header";
import Navigation from "../../Navigation/Navigation";
import styles from "./ArrangementType.module.css";
import ThumbnailSelect from "../../../ThumbnailSelect/Thumbnail";
import { boxThumb, bouquetThumb, basketThumb } from "../../../../assets/images";
import { useState } from "react";

function ArrangementType({ page, setPage, first, setArrangementType }) {
  const [oneSelected, toggleOneSelected] = useState(false);
  const [errors, setErrors] = useState([]);

  const onNext = (oneSelected, setErrors) => {
    if (!oneSelected) {
      setErrors(["An arrangement type must be selected"]);
      window.scrollTo(0, 0);
    } else return true;
  };

  const setState = (add, ref) => {
    if (add) setArrangementType(ref);
  };

  return (
    <>
      <Header
        heading1="Customise your flowers"
        heading2="What kind of arrangement are you looking for?"
      />
      {errors.length > 0 && (
        <ul className={styles.errors}>
          {errors.map((error, i) => (
            <li key={i}>{error}</li>
          ))}
        </ul>
      )}
      <div className={styles.thumbsContainer}>
        <div className={styles.thumbnail}>
          <ThumbnailSelect
            text1="Boxed"
            text2=""
            imageName={boxThumb}
            oneSelected={oneSelected}
            toggleOneSelected={toggleOneSelected}
            setState={setState}
          />
        </div>
        <div className={styles.thumbnail}>
          <ThumbnailSelect
            text1="Bouquet"
            text2=""
            imageName={bouquetThumb}
            oneSelected={oneSelected}
            toggleOneSelected={toggleOneSelected}
            setState={setState}
          />
        </div>
        <div className={styles.thumbnail}>
          <ThumbnailSelect
            text1="Basket"
            text2=""
            imageName={basketThumb}
            oneSelected={oneSelected}
            toggleOneSelected={toggleOneSelected}
            setState={setState}
          />
        </div>
      </div>
      <Navigation
        first={first}
        page={page}
        setPage={setPage}
        onNext={onNext.bind(null, oneSelected, setErrors)}
      />
    </>
  );
}

export default ArrangementType;
