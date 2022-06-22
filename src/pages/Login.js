import React from 'react';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;
    return (
      <>
        <div>Login</div>
        <from>
          <label htmlFor="email">
            <input
              type="email"
              name="email"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password">
            <input
              type="password"
              name="password"
              value={ password }
              onChange={ this.handleChange }
            />
          </label>
        </from>
      </>
    );
  }
}

export default Login;
