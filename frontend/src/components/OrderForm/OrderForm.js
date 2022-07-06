import { useState } from "react";
import {
  ArrangementType,
  OccasionType,
  PrimaryFlower,
  OtherFlowers,
  Shipping,
  Checkout,
  OrderConfirmation,
} from "./index";
import styles from "./OrderForm.module.css";

function OrderForm() {
  const [page, setPage] = useState(1);
  const [primaryFlower, setPrimaryFlower] = useState("none yet");

  return (
    <div className={styles.container}>
      {(() => {
        switch (page) {
          case 1:
            return (
              <ArrangementType page={page} setPage={setPage} first={true} />
            );
          case 2:
            return <OccasionType page={page} setPage={setPage} />;
          case 3:
            return (
              <PrimaryFlower
                page={page}
                setPage={setPage}
                setPrimaryFlower={setPrimaryFlower}
              />
            );
          case 4:
            return (
              <OtherFlowers
                page={page}
                setPage={setPage}
                primaryFlower={primaryFlower}
              />
            );
          case 5:
            return <Shipping page={page} setPage={setPage} />;
          case 6:
            return <Checkout page={page} setPage={setPage} />;
          case 7:
            return <OrderConfirmation page={page} setPage={setPage} />;
          default:
            return (
              <ArrangementType page={page} setPage={setPage} first={true} />
            );
        }
      })()}
    </div>
  );
}

export default OrderForm;
