import React from "react";
//normal js not JSX
const Hello = () => {
  return React.createElement(
    "div",
    { id: "hello", className: "hello" },
    React.createElement("h1", null, "Hello Shivaraj")
  );
};

export default Hello;
