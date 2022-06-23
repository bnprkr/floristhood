import { useState } from "react";
import { ArrangementType, OccasionType, Page3 } from "./index";
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
            return <OccasionType page={page} setPage={setPage} first={false} />;
          case 3:
            return <Page3 page={page} setPage={setPage} />;
          default:
            return (
              <ArrangementType page={page} setPage={setPage} first={false} />
            );
        }
      })()}
    </div>
  );
}

export default OrderForm;
