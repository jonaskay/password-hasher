import React, { Component } from 'react';
import './PasswordForm.css';

class PasswordForm extends Component {
  render() {
    return (
      <form className="PasswordForm">
        <div className="PasswordForm-field">
          <label>Domain</label>
          <input type="text" value="http://www.example.com" />
        </div>     
        <div className="PasswordForm-field">
          <label>Password</label>
          <input type="password" value="password" />
        </div>
        <div style={{marginTop: '1.25rem', textAlign: 'right'}}>
          <button className="PasswordForm-button">Generate</button>
        </div>
      </form>
    );
  }
}

export default PasswordForm;
