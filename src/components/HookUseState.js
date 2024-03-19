import React, { useState } from "react";

function HookUseState() {
  const [name, setName] = useState("shivaraj");

  const updateName = () => {
    setName("shivaraj-kulal"); // Change "new name" to whatever new name you want
  };

  return (
    <div className="Hook_Use_State">
      <p>Name: {name}</p>
      <button onClick={updateName}>Change Name</button>
    </div>
  );
}

export default HookUseState;
