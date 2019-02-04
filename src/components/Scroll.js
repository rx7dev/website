import React from "react";

const Scroll = props => {
  return (
    <div style={{ overflow: "auto", height: "900px" }}>{props.children}</div>
  );
};

export default Scroll;
