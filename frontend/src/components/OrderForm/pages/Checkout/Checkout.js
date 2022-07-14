import Header from "../../Header/Header";
import Navigation from "../../Navigation/Navigation";
import styles from "./Checkout.module.css";
import { boxThumb, bouquetThumb, basketThumb } from "../../../../assets/images";
import Thumbnail from "../../../Thumbnail/Thumbnail";

function Checkout({ page, setPage, shippingValues }) {
  const { firstname, lastname, address1, address2, city, postcode } =
    shippingValues;
  return (
    <>
      <Header heading1="Customise your flowers" heading2="Checkout" />
      <div className={styles.container}>
        <div className={styles.thumbnail}>
          <Thumbnail text1="" text2="" imageName={bouquetThumb} />
        </div>
        <div className={styles.content}>
          <h1>DELIVERY INFO</h1>
          <p>
            {`${firstname} ${lastname}`}
            <br />
            {address1}
            {address2 && <br />}
            {address2}
            <br />
            {city}
            <br />
            {postcode}
          </p>
          <div className={styles.price}>£55</div>
          <button onClick={() => setPage(page + 1)}>Order now</button>
        </div>
      </div>
      <Navigation page={page} setPage={setPage} last={true} />
    </>
  );
}

export default Checkout;
