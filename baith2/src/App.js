import React, { Component } from 'react';
import './App.css';
import Box from './Box';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      isDisplay:true
    };
  }
  onRemoveBox=()=>{
    this.setState({isDisplay:false});
  }
  render(){
  return (
    <div >
    {this.state.isDisplay && <Box />} 
          <div onClick={this.onRemoveBox}>Xoá Component</div>
    </div>
  );
}
}

export default App;
