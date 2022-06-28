import Header from "../../Header/Header";
import Navigation from "../../Navigation/Navigation";
import styles from "./Checkout.module.css";
import { boxThumb, bouquetThumb, basketThumb } from "../../../../assets/images";
import Thumbnail from "../../../Thumbnail/Thumbnail";

function Checkout({ page, setPage }) {
  return (
    <>
      <Header heading1="Customise your flowers" heading2="Checkout" />
      <div className={styles.container}>
        <Thumbnail
          text1="Quisque pellentesque"
          text2=""
          imageName={bouquetThumb}
        />
        <div className={styles.content}>
          <h1>DELIVERY INFO</h1>
          <p>
            A Person
            <br />
            24 The Street
            <br />
            London
            <br />
            E1 1AA
          </p>
          <div className={styles.order}>
            <div className={styles.price}>£55</div>
            <button>Order now</button>
          </div>
        </div>
      </div>
      <Navigation page={page} setPage={setPage} />
    </>
  );
}

export default Checkout;
