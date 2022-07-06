import Header from "../../Header/Header";
import Navigation from "../../Navigation/Navigation";
import styles from "./OrderConfirmation.module.css";
import { boxThumb, bouquetThumb, basketThumb } from "../../../../assets/images";
import Thumbnail from "../../../Thumbnail/Thumbnail";

function OrderConfirmation({ page, setPage }) {
  return (
    <>
      <Header
        heading1="Order confirmation"
        heading2="Thank you for your order"
      />
      <div className={styles.container}>
        <p className={styles.confirmMessage}>
          Your order #1234 has been placed successfully and you'll receive a
          confirmation email shortly.
        </p>
        <p className={styles.info}>
          You can track the progress of your order in your account, and if you
          have any questions, please contact us.
        </p>
      </div>
    </>
  );
}

export default OrderConfirmation;
