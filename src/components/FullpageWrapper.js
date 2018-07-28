import React from "react";

const FullPageWrapper = props => (
  <div
    style={{
      width: "100%",
      height: "100vh",
      display: "flex",
      flexDirection: props.direction || "column",
      alignItems: props.alignItems || "flex-start",
      justifyContent: props.justifyContent || "flex-start",
      textAlign: props.textAlign || "center",
      padding: props.notPadded ? "0" : "1rem 2rem",
      ...props.style
    }}
  >
    {props.children}
  </div>
);

export default FullPageWrapper;
