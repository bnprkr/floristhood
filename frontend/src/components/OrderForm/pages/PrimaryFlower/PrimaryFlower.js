import { useState } from "react";
import Header from "../../Header/Header";
import Navigation from "../../Navigation/Navigation";
import styles from "./PrimaryFlower.module.css";
import ThumbnailSelect from "../../../ThumbnailSmallSelect/Thumbnail";
import { thumbs } from "../../../../assets/images";

function PrimaryFlower(page, setPage) {
  const [oneSelected, toggleOneSelected] = useState(false);

  return (
    <>
      <Header
        heading1="Customise your flowers"
        heading2="Choose your primary flower"
      />
      <div className={styles.thumbsContainer}>
        {Array.from({ length: 9 }, (_, i) => {
          return (
            <ThumbnailSelect
              text1="Quisque pellentesque"
              text2=""
              imageName={thumbs[i]}
              oneSelected={oneSelected}
              toggleOneSelected={toggleOneSelected}
            />
          );
        })}
      </div>
      <Navigation page={page} setPage={setPage} />
    </>
  );
}

export default PrimaryFlower;
