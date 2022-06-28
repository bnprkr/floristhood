import Header from "../../Header/Header";
import Navigation from "../../Navigation/Navigation";
import styles from "./Shipping.module.css";
import { useState } from "react";

function Shipping({ page, setPage }) {
  const [shippingValues, setShippingValues] = useState({
    firstname: "A",
    lastname: "Person",
    address1: "24 The Street",
    address2: "",
    city: "London",
    postcode: "E1 1AA",
  });

  function handleChange(e) {
    const name = e.target.getAttribute("name");
    setShippingValues((prevState) => {
      const nextState = { ...prevState };
      nextState[name] = e.target.value;
      return nextState;
    });
  }

  return (
    <>
      <Header
        heading1="Customise your flowers"
        heading2="Shipping information"
      />

      <form className={styles.formContainer}>
        <input
          type="text"
          name="firstname"
          placeholder="First name"
          value={shippingValues["firstname"]}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastname"
          placeholder="Last name"
          value={shippingValues["lastname"]}
          onChange={handleChange}
        />
        <input
          type="text"
          name="address1"
          placeholder="Address line 1"
          value={shippingValues["address1"]}
          onChange={handleChange}
        />
        <input
          type="text"
          name="address2"
          placeholder="Address line 2 (optional)"
          value={shippingValues["address2"]}
          onChange={handleChange}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={shippingValues["city"]}
          onChange={handleChange}
        />
        <input
          type="text"
          name="Postcode"
          placeholder="Postcode"
          value={shippingValues["postcode"]}
          onChange={handleChange}
        />
      </form>

      <Navigation page={page} setPage={setPage} />
    </>
  );
}

export default Shipping;
