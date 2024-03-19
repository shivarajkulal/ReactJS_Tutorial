import React, { useEffect } from "react";

function HooksUseEffect(props) {
  useEffect(() => {
    alert("Count is " + props.count);
  }, [props.count]);

  return (
    <div className="HooksUseEffect">
      <h1>Count Props: {props.count}</h1>
      <h1>Date Props: {props.data}</h1>
    </div>
  );
}

export default HooksUseEffect;
