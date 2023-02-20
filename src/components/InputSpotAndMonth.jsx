import React from "react";

export default function InputFactor({ setFactor }) {
  const handleInputChange = (event) => {
    const value = parseFloat(event.target.value);
    if (!isNaN(value)) {
      setFactor(value);
    }
  };

  return (
    <div>
      <label>Factor: </label>
      <input type="text" onChange={handleInputChange} />
    </div>
  );
}
