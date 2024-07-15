import React, { Component,useEffect } from "react";
import Stack from "../utils/Stack";
import "../StackComponent.css";

class StackComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stack: new Stack(),
    };
  }

  

  handlePush = (event) => {
    event.preventDefault();
    const { stack } = this.state;
    // const value = this.refs.input.value?this.refs.input.value:10;
    for(let i=0;i<10;i++){
      let num = Math.floor(Math.random() * 50)
      stack.push(num);
    }
    this.setState({ stack });
    // this.refs.input.value = "";
  };
    handlePop = (event) => {
      event.preventDefault();
      const { stack } = this.state;
      if(!stack.items.length){
        alert(this.props.Name +' won the game')
      }
      if(stack.items.includes(this.props.value))
        stack.pop(this.props.value);
      this.setState({ stack });
    };

  render() {
    return (
      <div className="stack-container" ref={this.props.innerRef} >
        {/* <h1 className="stack-title">Stack Data Structure</h1> */}
        <form>
          {/* <input
            type="text"
            ref="input"
            className="stack-input"
            placeholder="Enter a value to push to the stack"
          /> */}
          <div className="stack-buttons">
            <button
              className="stack-button push-button" style={{zIndex:-1}}
              onClick={this.handlePush}
            >
            </button>
            <button
              className="stack-button pop-button" style={{zIndex:-1}}
              onClick={this.handlePop}
            >
            </button>
          </div>
        </form>

        <h3>Score Board:</h3>
        <div className="stack-stats">
          {/* <p className="stack-stat">Top Element: {this.state.stack.peek()}</p> */}
          <p className="stack-stat">
            Number Left: {this.state.stack.items.length}
          </p>
        </div>
        <div className="stack">
          <h3>{this.props.Name}:</h3>
          <ul className="stack-items">
            {this.state.stack.items.map((item, index) => (
              <li className="stack-item" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default React.forwardRef((props, ref) => <StackComponent 
  innerRef={ref} {...props}
  />);