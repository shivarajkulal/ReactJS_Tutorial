import React, { useState } from "react";
import HooksUseEffect from "./HooksUseEffect";

function HooksUseEffectMain() {
  const [data, setData] = useState(10);
  const [count, setCount] = useState(100);

  return (
    <div className="HooksUseEffectMain">
      <h1>Count : {count}</h1>
      <h1>Date : {data}</h1>
      <HooksUseEffect count={count} data={data} />
      <button onClick={() => setCount(count + 1)}>Update Count</button>
      <button onClick={() => setData(data + 1)}>Update Data</button>
    </div>
  );
}

export default HooksUseEffectMain;
