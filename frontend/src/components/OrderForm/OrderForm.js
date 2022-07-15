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
  const [arrangementType, setArrangementType] = useState();
  const [primaryFlower, setPrimaryFlower] = useState();
  const [shippingValues, setShippingValues] = useState({
    firstname: "A",
    lastname: "Person",
    address1: "24 The Street",
    address2: "",
    city: "London",
    postcode: "E1 1AA",
  });
  const [occasion, setOccasion] = useState();
  const [recipient, setRecipient] = useState();

  return (
    <div className={styles.container}>
      {(() => {
        switch (page) {
          case 1:
            return (
              <ArrangementType
                page={page}
                setPage={setPage}
                first={true}
                setArrangementType={setArrangementType}
              />
            );
          case 2:
            return (
              <OccasionType
                page={page}
                setPage={setPage}
                occasion={occasion}
                setOccasion={setOccasion}
                recipient={recipient}
                setRecipient={setRecipient}
              />
            );
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
            return (
              <Shipping
                page={page}
                setPage={setPage}
                shippingValues={shippingValues}
                setShippingValues={setShippingValues}
              />
            );
          case 6:
            return (
              <Checkout
                page={page}
                setPage={setPage}
                shippingValues={shippingValues}
                arrangementType={arrangementType}
              />
            );
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
