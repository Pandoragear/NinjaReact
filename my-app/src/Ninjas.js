import React, { Component } from 'react';
import App from './App';

class Ninjas extends Component{
    render(){
        return(
           <div className="ninja">
               <div> Name: Ryu </div>
               <div> Age: 30 </div>
               <div> Belt: Black </div>
           </div>
        )
    }
}

export default Ninjas