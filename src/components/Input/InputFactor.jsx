import React from "react";
import styles from "./Input.module.css";

export default function InputFactor({ setFactor}) {

  const handleInputChange = (event) => {
    const value = parseFloat(event.target.value);
    if (!isNaN(value)) {
      setFactor(value);
    }
  };

  return (
      <div className={styles.form__group}>
        <input
          required=""
          placeholder="Name"
          className={styles.form__field}
          type="input"
          onChange={handleInputChange}
        ></input>
        <label className={styles.form__label} for="name">
          Factor
        </label>
      </div>
  );
}
