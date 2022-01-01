import React from "react";

const Heading = ({ title = "", ...props }) => {
  //console.log({ title });
  return (
    <div {...props}>
      <h1>{title}</h1>
    </div>
  );
};

export default Heading;
