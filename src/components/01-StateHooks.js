import React, { useState } from "react";

function StateFundamentals({ initialName = "" }) {
  const [name, setName] = useState(initialName);

  function handleChange(event) {
    // 👨🏽‍💻 update the name based on event.target.value
    setName(event.target.value);
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          type="text"
          value={name}
          name="firstName"
          onChange={handleChange}
        />
      </form>
      {name ? <strong> {name} </strong> : "Please type your name"}
    </div>
  );
}

export default StateFundamentals;
