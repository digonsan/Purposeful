import React, { Component } from 'react';
import './SignupForm.css';

class SignupForm extends Component {
  render() {
    return (
        <form id="signupForm">
          <label labelFor="firstName">First Name</label>
          <input type="text" id="firstName" autofocus required />
          
          <label labelFor="lastName">Last Name</label>
          <input type="text" id="lastName" required />

          <label labelFor="email">Email</label>
          <input type="email" id="email" required />

          <input type="button" value="Join our mailing list!" onClick={() => this.props.onClick()} />
            
        </form>

    );
  }
}

export default SignupForm;