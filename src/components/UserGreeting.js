import React, { Component } from 'react'

export class UserGreeting extends Component {


    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : true
      }
    }
//   # if-else approach  
//   render() {
//     if(this.state.isLoggedIn){
//         return <div>your are logged in </div>
//     }else{
//         return <div>your are logged out</div>
//     }
//   }
    
//     #element-variable approach
//     render(){
//         let message
//         if(this.state.isLoggedIn){
//             message = <div>Successfully logged in</div>
//         }else{
//             message = <div>Successfully logged out</div>
//         }
//         return <div>{message}</div>
//     }
// 

// #ternary operator
// render(){
//     return this.state.isLoggedIn ? <div>Logged In</div>:<div>Logged Out</div>
// }


//#short circuit approach
render(){
    return this.state.isLoggedIn && <div>Logged In</div>
}

}


export default UserGreeting;
