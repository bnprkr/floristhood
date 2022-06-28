import Header from "../../Header/Header";
import Navigation from "../../Navigation/Navigation";
import styles from "./ArrangementType.module.css";
import ThumbnailSelect from "../../../ThumbnailSmallSelect/Thumbnail";
import { boxThumb, bouquetThumb, basketThumb } from "../../../../assets/images";
import { useState } from "react";

function ArrangementType({ page, setPage, first }) {
  const [oneSelected, toggleOneSelected] = useState(false);

  return (
    <>
      <Header
        heading1="Customise your flowers"
        heading2="What kind of arrangement are you looking for?"
      />
      <div className={styles.thumbsContainer}>
        <div className={styles.thumbnail}>
          <ThumbnailSelect
            text1="Boxed"
            text2="flowers"
            imageName={boxThumb}
            oneSelected={oneSelected}
            toggleOneSelected={toggleOneSelected}
          />
        </div>
        <div className={styles.thumbnail}>
          <ThumbnailSelect
            text1="Bouquet"
            text2="flowers"
            imageName={bouquetThumb}
            oneSelected={oneSelected}
            toggleOneSelected={toggleOneSelected}
          />
        </div>
        <div className={styles.thumbnail}>
          <ThumbnailSelect
            text1="Basket"
            text2="flowers"
            imageName={basketThumb}
            oneSelected={oneSelected}
            toggleOneSelected={toggleOneSelected}
          />
        </div>
      </div>
      <Navigation first={first} page={page} setPage={setPage} />
    </>
  );
}

export default ArrangementType;
