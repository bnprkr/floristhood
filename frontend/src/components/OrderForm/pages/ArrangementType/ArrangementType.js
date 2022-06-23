import Header from "../../Header/Header";
import Navigation from "../../Navigation/Navigation";
import styles from "./ArrangementType.module.css";
import Thumbnail from "../../../ThumbnailSmall/Thumbnail";
import { boxThumb, bouquetThumb, basketThumb } from "../../../../assets/images";

function ArrangementType({ page, setPage, first }) {
  setPage(1);
  return (
    <>
      <Header
        heading1="Customise your flowers"
        heading2="What kind of arrangement are you looking for?"
      />
      <div className={styles.thumbsContainer}>
        <Thumbnail text1="Boxed" text2="flowers" imageName={boxThumb} />
        <Thumbnail text1="Bouquet" text2="flowers" imageName={bouquetThumb} />
        <Thumbnail text1="Basket" text2="flowers" imageName={basketThumb} />
      </div>
      <Navigation first={first} page={page} setPage={setPage} />
    </>
  );
}

export default ArrangementType;
