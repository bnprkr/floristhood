import { useEffect, useState } from "react";
import Header from "../../Header/Header";
import Navigation from "../../Navigation/Navigation";
import styles from "./OtherFlowers.module.css";
import ThumbnailSelect from "../../../ThumbnailSmallSelect/Thumbnail";
import { thumbs } from "../../../../assets/images";

function OtherFlowers({ page, setPage }) {
  const [oneSelected, toggleOneSelected] = useState(false);

  // pick three random flowers
  const indices = Array.from({ length: 9 }, (_, i) => i);
  const thumbsSelected = [];

  for (let i = 0; i < 3; i++) {
    const index = indices.splice(Math.floor(Math.random() * indices.length), 1);
    thumbsSelected.push(thumbs[index]);
  }

  return (
    <>
      <Header
        heading1="Customise your flowers"
        heading2="Recommendations for flowers based on your primary flower"
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec
        gravida neque. Proin tincidunt diam elit, ac malesuada.
      </p>
      <div className={styles.thumbsContainer}>
        {Array.from({ length: 3 }, (_, i) => {
          return (
            <div className={styles.thumbnail}>
              <ThumbnailSelect
                text1="Quisque pellentesque"
                text2=""
                imageName={thumbsSelected[i]}
                oneSelected={oneSelected}
                toggleOneSelected={toggleOneSelected}
              />
            </div>
          );
        })}
      </div>
      <Navigation page={page} setPage={setPage} />
    </>
  );
}

export default OtherFlowers;
