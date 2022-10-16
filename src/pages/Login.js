/* eslint-disable react/jsx-max-depth */
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
      <div
        className="flex h-screen
      justify-center items-center
       bg-slate-200"
      >

        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="text-center text-laranja-itau text-3xl font-medium">
            Pay
            <strong className="text-azul-itau">Wallet</strong>
          </div>
          <div className="mb-4">

            <label
              className="lock text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
              <input
                className="shadow appearance-none border mt-1.5 rounded w-full py-2 px-3
                 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                placeholder="exemplo@gmail.com"
                type="email"
                name="email"
                data-testid="email-input"
                value={ email }
                onChange={ this.handleChange }
              />
            </label>
          </div>
          <div className="mb-6">

            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Senha
              <input
                className="shadow appearance-none border
                rounded w-full py-2 px-3
                  text-gray-700 mt-1.5 mb-3 leading-tight
                  focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******"
                name="password"
                data-testid="password-input"
                value={ password }
                onChange={ this.handleChange }
              />
            </label>
            {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
          </div>
          <div className="flex items-center justify-between">
            {isButtonDissabled ? (
              <button
                className="bg-slate-400
               text-white font-bold py-2 px-4 rounded
               focus:outline-none w-full focus:shadow-outline"
                type="button"
                disabled={ isButtonDissabled }
                onClick={ this.handleClick }
              >
                Entrar
              </button>
            ) : (
              <button
                className="bg-azul-itau hover:bg-laranja-itau
               text-white font-bold py-2 px-4 rounded
               focus:outline-none w-full focus:shadow-outline"
                type="button"
                disabled={ isButtonDissabled }
                onClick={ this.handleClick }
              >
                Entrar
              </button>
            )}

          </div>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.func.isRequired,
};

export default connect()(Login);
