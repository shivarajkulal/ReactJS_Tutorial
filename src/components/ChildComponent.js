import React from 'react'

function ChildComponent(props) {
  return (
    <div>
     <button onClick={()=>props.greetHandler('Child')}>Greeting Parent...Press me!</button>
    </div>
  )
}

export default ChildComponent;
