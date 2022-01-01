import React, { useRef } from "react";
import Heading from "./Header";

// useRef hooks to interact with dom nodes React.useRef(null);
// Uses: -> To access dom elements
// Uses: -> To persiste values in multiple re-renders
// React will not notify of any chnages to the components ref
// Note: ref created using createRef in class cmp are not persisted over
// multiple renders, a new ref always gets created when cmp renders

function RefHook({ initialName = "" }) {
  const myDivRef = useRef();

  React.useEffect(() => {
    const myRef = myDivRef.current;
    myRef.style.backgroundColor = "rgba(255,0,0,0.25)";
    myRef.style.padding = "20px";
    console.log("After component mounted: ", myRef);
  }, []);

  return (
    <div>
      <Heading title="useRef Hooks to access and interact with DOM nodes" />
      <div ref={myDivRef}>
        React is able to access this dom element using ref now..
      </div>
    </div>
  );
}

export default RefHook;
