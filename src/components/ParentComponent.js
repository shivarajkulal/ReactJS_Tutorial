import React, { Component } from 'react';

import ChildComponent from './ChildComponent';

export class ParentComponent extends Component {

constructor(props){
    super(props);
    this.state ={
        ParentName : 'Parent'
    };

    this.greetParent = this.greetParent.bind(this);

}
    greetParent(ChildName){
        alert(`Hello, ${this.state.ParentName} here me ${ChildName}`);
    }

  render() {
    return (
      <div>
        <ChildComponent greetHandler ={this.greetParent}/>
      </div>
    )
  }

}

export default ParentComponent
