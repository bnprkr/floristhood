import { useEffect, useState } from "react";
import Header from "../../Header/Header";
import Navigation from "../../Navigation/Navigation";
import styles from "./OtherFlowers.module.css";
import ThumbnailSelect from "../../../ThumbnailSelect/Thumbnail";
import { thumbs } from "../../../../assets/images";

function OtherFlowers({ page, setPage }) {
  const [oneSelected, toggleOneSelected] = useState(false);
  const [thumbsArray, setThumbsArray] = useState([]);

  useEffect(() => {
    const indices = Array.from({ length: 9 }, (_, i) => i);
    const newThumbs = [];

    for (let i = 0; i < 3; i++) {
      const index = indices.splice(
        Math.floor(Math.random() * indices.length),
        1
      );
      newThumbs.push(thumbs[index]);
    }

    setThumbsArray(newThumbs);
  }, []);

  return (
    <>
      <Header
        heading1="Customise your flowers"
        heading2="Recommendations for flowers based on your primary flower"
      />
      <div className={styles.thumbsContainer}>
        {Array.from({ length: 3 }, (_, i) => {
          return (
            <div className={styles.thumbnail}>
              <ThumbnailSelect
                text1="Quisque pellentesque"
                text2=""
                imageName={thumbsArray[i]}
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
