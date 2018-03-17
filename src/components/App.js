import React, { Component } from 'react';
import './App.css';
import PasswordForm from './PasswordForm';
import PasswordResult from './PasswordResult';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Password Hasher</h1>
        <PasswordForm />
        <PasswordResult />
        <footer className="App-footer">
          <span>&copy; 2018 <a href="https://github.com/jonaskay">Jonas Kay</a></span>
          <span style={{textAlign: 'right'}}>
            Based on <a href="https://crypto.stanford.edu/PwdHash/">PwdHash</a>
            </span>
        </footer>
      </div>
    );
  }
}

export default App;
