import React, {Component} from 'react';
import Dropdown from './Dropdown';
import Home from './Home'


export default class App extends Component{
  constructor(){
    super();
    this.state ={
      isShow:false,
      selected:"Not Selected",

      // array item
      items:["yes", "Probably Not", "I dont know"]
    }
  }

  // on hovering of the button ,show the dropdown item function
  handleMouseEnter=()=>{
    this.setState({
      isShow:true,
    });
  };

  // on click of an optionin a dropdown list, close the dropdown function
  handleOnClick=(item)=>{
    this.setState({
      isShow:false,
      selected:item
    });
  };

  render(){
    return (
      <div className='app'>
        <Home isShow={this.state.isShow} handleMouseEnter={this.handleMouseEnter} />
        {this.state.isShow?<Dropdown items={this.state.items} handleOnClick={this.handleOnClick}/>:" "}
        <p className='ans-p'>Ans. {this.state.selected}</p>
      </div>
    );
  };
};


