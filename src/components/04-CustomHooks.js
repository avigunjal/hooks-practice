import React, { useState } from "react";
import Heading from "./Header";

// React customHooks for storing state in localstorage
function useLocalStorage(
  key,
  defaultValue = "",
  { serialize = JSON.stringify, deserialize = JSON.parse } = {}
) {
  // lazy state initializer
  const [state, setState] = useState(() => {
    const valueInLocal = window.localStorage.getItem(key);
    if (valueInLocal) {
      return deserialize(valueInLocal);
    }
    return typeof defaultValue === "function" ? defaultValue() : defaultValue;
  });

  const prevKeyRef = React.useRef(key); // if we change our key

  // Effect that runs every time when components gets updated.
  // make localstorage state for any kind of data using JSON.stringify and parse it
  React.useEffect(() => {
    const prevKey = prevKeyRef.current;
    if (prevKey !== key) {
      window.localStorage.removeItem(prevKey);
    }
    prevKeyRef.current = key;
    window.localStorage.setItem(key, serialize(state));
  }, [key, state, serialize]);

  return [state, setState];
}

function CustomHooks({ initialName = "" }) {
  const [name, setName] = useLocalStorage("name", initialName);

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <Heading title="React customHooks" />
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

export default CustomHooks;
