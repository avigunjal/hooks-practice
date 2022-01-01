import React, { useState } from "react";
import Heading from "./Header";

// Dependancy array in useEffect
function EffectWithDependancy({ initialName = "" }) {
  console.log("rendering: state updated...");

  const [name, setName] = useState(
    () => window.localStorage.getItem("name") || initialName
  );

  // adding dependancy array will only runs useEffect if the the value
  // we passed to DA changed.
  // useEffect will not run if count value change..
  // It'l only runs when we type something in input box..

  React.useEffect(() => {
    console.log("It'll run every time 'name' get's updated.. ");
    window.localStorage.setItem("name", name);
  }, [name]);

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <Heading title="useEffect: Dependancy Array" />
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

function EffectFundaments02() {
  const [count, setCount] = useState(0);

  React.useEffect(function () {
    return console.log("It'll run only on first render..");
  });

  return (
    <>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        count {count}
      </button>
      <EffectWithDependancy />
    </>
  );
}

export default EffectFundaments02;
