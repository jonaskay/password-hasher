import React, { Component } from 'react';
import './PasswordResult.css';

class PasswordResult extends Component {
  constructor(props) {
    super(props);
    this.selectTextInput = this.selectTextInput.bind(this);
  }

  selectTextInput() {
    this.textInput.select();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.result !== this.props.result) {
      this.selectTextInput();
    }
  }

  render() {
    return (
      <div className="PasswordResult">
        <input
          type="text"
          value={this.props.result}
          ref={input => {
            this.textInput = input;
          }}
          readOnly
        />
      </div>
    );
  }
}

export default PasswordResult;
