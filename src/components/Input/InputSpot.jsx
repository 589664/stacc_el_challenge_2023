import React from "react";
import styles from "./Input.module.css";

export default function InputSpot({ setCustomSpot }) {
  const handleSpot = (event) => {
    const value = parseFloat(event.target.value);
    if (!isNaN(value)) {
      setCustomSpot((prevState) => {
        return { ...prevState, spotAddon: value };
      });
    }
  };

  return (
    <div className={styles.form__group}>
      <input
        required=""
        placeholder="Name"
        className={styles.form__field}
        type="input"
        onChange={handleSpot}
      ></input>
      <label className={styles.form__label} for="name">
        Spotpris
      </label>
    </div>
  );
}
