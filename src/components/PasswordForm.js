import React, { Component } from 'react';
import './PasswordForm.css';

class PasswordForm extends Component {
  render() {
    return (
      <form className="PasswordForm" onSubmit={this.props.onSubmit}>
        <div className="PasswordForm-field">
          <label>Domain</label>
          <input
            type="text"
            name="domain"
            placeholder="www.example.org"
            value={this.props.domain}
            onChange={this.props.onChange}
          />
        </div>
        <div className="PasswordForm-field">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={this.props.password}
            onChange={this.props.onChange}
          />
        </div>
        <div style={{ marginTop: '1.25rem', textAlign: 'right' }}>
          <input className="PasswordForm-button" type="submit" value="Generate" />
        </div>
      </form>
    );
  }
}

export default PasswordForm;
