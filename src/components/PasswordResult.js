import React, { Component } from 'react';
import './PasswordResult.css';

class PasswordResult extends Component {
  render() {
    return (
      <div className="PasswordResult">
        <input type="text" value={this.props.result} />
      </div>
    );
  }
}

export default PasswordResult;
