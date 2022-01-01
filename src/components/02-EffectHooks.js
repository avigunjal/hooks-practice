import React, { useState } from "react";
import Heading from "./Header";

// Persistent state using useState
function EffectFundaments01({ initialName = "" }) {
  console.log("rendering...");

  /* function getInitalState() {
    return window.localStorage.getItem("name") || initialName;
  } */

  // Lazi state initialization: Adding state inside function
  // and add that fun inside useState
  // usefull to avoid re-rendering when we does't want initi value...
  // it's only call when we want's initial state.

  const [name, setName] = useState(
    () => window.localStorage.getItem("name") || initialName
  );

  // 👉🏽 useEffect function runs every time this components get rendered.
  // 👉🏽 When we set state using useState hooks our components get's rendered.

  React.useEffect(() => {
    window.localStorage.setItem("name", name);
  });

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <Heading title="useState lazy initialization & useEffect" />
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

export default EffectFundaments01;
