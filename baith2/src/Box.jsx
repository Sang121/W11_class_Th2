import React, { Component } from 'react'
class Box extends Component {
  constructor(props){
    super(props);
    this.state={
        bgBox:'green'
    };
  }
  componentWillUnmount() {
    alert('Component sẽ unmount');
}

  render() {
    return (
        <div
       style={{height:100 ,width:100,backgroundColor:this.state.bgBox}} >box</div>
    )
  }
}
export default Box;
