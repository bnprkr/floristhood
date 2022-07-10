import Header from "../../Header/Header";
import Navigation from "../../Navigation/Navigation";
import styles from "./Shipping.module.css";
import { useEffect, useState } from "react";

function Shipping({ page, setPage, shippingValues, setShippingValues }) {
  const [errors, setErrors] = useState([]);

  const onNext = (shippingValues) => {
    if (
      shippingValues.firstname === "" ||
      shippingValues.lastname === "" ||
      shippingValues.address1 === "" ||
      shippingValues.city === "" ||
      shippingValues.postcode === ""
    ) {
      setErrors(["Please complete all required fields"]);
      window.scrollTo(0, 0);
    } else return true;
  };

  const handleChange = (e) => {
    const name = e.target.getAttribute("name");
    setShippingValues((prevState) => {
      const nextState = { ...prevState };
      nextState[name] = e.target.value;
      return nextState;
    });
  };

  return (
    <>
      <Header
        heading1="Customise your flowers"
        heading2="Shipping information"
      />
      <ul className={styles.errors}>
        {errors.map((error, i) => (
          <li key={i}>{error}</li>
        ))}
      </ul>
      <div className={styles.container}>
        <form>
          <div className={styles.formContainer}>
            <div className={styles.column}>
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
            </div>
            <div className={styles.column}>
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
                name="postcode"
                placeholder="Postcode"
                value={shippingValues["postcode"]}
                onChange={handleChange}
              />
            </div>
          </div>
        </form>
      </div>

      <Navigation
        page={page}
        setPage={setPage}
        onNext={onNext.bind(null, shippingValues)}
      />
    </>
  );
}

export default Shipping;
