import { useEffect, useState } from "react";
import Header from "../../Header/Header";
import Navigation from "../../Navigation/Navigation";
import styles from "./OtherFlowers.module.css";
import ThumbnailSelect from "../../../ThumbnailSelect/Thumbnail";
import { thumbs } from "../../../../assets/images";
import { prefix } from "@fortawesome/free-solid-svg-icons";

function OtherFlowers({ page, setPage, primaryFlower }) {
  const [oneSelected, toggleOneSelected] = useState(false);
  const [thumbsArray, setThumbsArray] = useState([]);
  const [selected, updateSelected] = useState([primaryFlower]);
  const [errors, setErrors] = useState([]);

  const onNext = () => {
    if (selected.length < 1) {
      setErrors(["At least one option must be selected"]);
      window.scrollTo(0, 0);
    } else return true;
  };

  const setState = (add, flower) => {
    if (add) updateSelected((prevSelected) => prevSelected.concat(flower));
    else {
      updateSelected((prevSelected) => {
        const index = prevSelected.indexOf(flower);
        return prevSelected
          .slice(0, index)
          .concat(prevSelected.slice(index + 1));
      });
    }
  };

  useEffect(() => {
    const indices = Array.from({ length: 9 }, (_, i) => i);
    // get index of selected primary flower and remove from array
    const primaryIndex = thumbs.indexOf(primaryFlower);
    indices.splice(primaryIndex, 1);
    const newThumbs = [];

    for (let i = 0; i < 3; i++) {
      let index;
      if (i === 1) index = primaryIndex;
      else {
        index = indices.splice(Math.floor(Math.random() * indices.length), 1);
      }
      newThumbs.push(thumbs[index]);
    }

    setThumbsArray(newThumbs);
  }, [primaryFlower]);

  return (
    <>
      <Header
        heading1="Customise your flowers"
        heading2="Recommendations for flowers based on your primary flower"
      />
      <ul className={styles.errors}>
        {errors.map((error, i) => (
          <li key={i}>{error}</li>
        ))}
      </ul>
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
                select={i === 1 ? true : false}
                multiple={true}
                setState={setState}
              />
            </div>
          );
        })}
      </div>
      <Navigation page={page} setPage={setPage} onNext={onNext} />
    </>
  );
}

export default OtherFlowers;
