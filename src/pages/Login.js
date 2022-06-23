import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { sendLogin } from '../actions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    isButtonDissabled: true,
  }

  isButtonEnabled = () => {
    const { email, password } = this.state;
    const MIN_LENGTH = 6;
    const regex = /^\S+@\S+\.\S+$/;
    const checkInput = [
      regex.test(email),
      password.length >= MIN_LENGTH,
    ];
    const isDisable = checkInput.every((element) => element === true);
    this.setState(
      {
        isButtonDissabled: !isDisable,
      },
    );
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, this.isButtonEnabled);
  }

  handleClick = () => {
    const { dispatch, history } = this.props;
    dispatch(sendLogin(this.state));
    history.push('/carteira');
  }

  render() {
    const { email, password, isButtonDissabled } = this.state;
    return (
      <>
        <div>Login</div>
        <form>
          <label htmlFor="email">
            <input
              type="email"
              name="email"
              data-testid="email-input"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password">
            <input
              type="password"
              name="password"
              data-testid="password-input"
              value={ password }
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="button"
            disabled={ isButtonDissabled }
            onClick={ this.handleClick }
          >
            Entrar
          </button>
        </form>
      </>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.func.isRequired,
};

export default connect()(Login);
