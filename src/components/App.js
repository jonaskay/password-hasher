import React, { Component } from 'react';
import './App.css';
import SPH_DomainExtractor from '../domain-extractor';
import SPH_HashedPassword from '../hashed-password';
import PasswordForm from './PasswordForm';
import PasswordResult from './PasswordResult';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { domain: '', password: '', result: '' };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  extractDomain(uri) {
    if (uri) {
      return (new SPH_DomainExtractor()).extractDomain(uri);
    }
  }

  hashPassword(str, salt) {
    if (str && salt) {
      return (new String(new SPH_HashedPassword(str, salt)));
    }
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const domain = this.extractDomain(this.state.domain);
    const result = this.hashPassword(this.state.password, domain);
    result && this.setState({ result: result });
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">Password Hasher</h1>
        <PasswordForm onChange={this.handleInputChange} onSubmit={this.handleFormSubmit} />
        <PasswordResult result={this.state.result} />
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
