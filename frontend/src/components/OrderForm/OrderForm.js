import { useState } from "react";
import {
  ArrangementType,
  OccasionType,
  PrimaryFlower,
  OtherFlowers,
} from "./index";
import styles from "./OrderForm.module.css";

function OrderForm() {
  const [page, setPage] = useState(1);

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
            return <PrimaryFlower page={page} setPage={setPage} />;
          case 4:
            return <OtherFlowers page={page} setPage={setPage} />;
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