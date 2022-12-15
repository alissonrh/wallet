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
    showPassword: false,
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

  handleVisibiliteChange = () => {
    const { showPassword } = this.state;
    console.log(showPassword);
    this.setState(
      {
        showPassword: !showPassword,
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
    const { email, password, isButtonDissabled, showPassword } = this.state;
    return (
      <div
        className="flex h-screen
      justify-center items-center bg-gradient-to-br
       from-[#e27106]"
      >

        <form className="bg-azul-itau shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
          <div className="text-center text-amarelo-itau text-3xl font-medium">
            Pay
            <strong className="text-amarelo-itau">Wallet</strong>
          </div>
          <div className="mb-4">

            <label
              className="block text-amarelo-itau text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
              <input
                className="shadow appearance-none border mt-1.5 rounded w-full py-2 px-3
                 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
                  focus:border-2 focus:border-amarelo-itau"
                id="username"
                placeholder="exemplo@gmail.com"
                type="email"
                name="email"
                data-testid="email-input"
                value={email}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="mb-6">

            <label
              className="block text-amarelo-itau text-sm font-bold mb-2"
              htmlFor="password"
            >
              Senha
              <div className="relative">
                <input
                  className="shadow appearance-none border
          rounded w-full py-2 px-3
            text-gray-700 mt-1.5 mb-3 leading-tight
            focus:outline-none focus:shadow-outline
            focus:border-2 focus:border-amarelo-itau"
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="******"
                  name="password"
                  data-testid="password-input"
                  value={password}
                  onChange={this.handleChange}
                />
                <button
                  type="button"
                  className="absolute top-0 bottom-0 right-0 px-3 py-1 focus:outline-none"
                  onClick={this.handleVisibiliteChange}
                >
                  {showPassword ? '🙈' : '🔒'}
                </button>
              </div>
            </label>
            {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
          </div>
          <div className="flex items-center justify-between">
            <button
              className={`bg-${isButtonDissabled ? 'slate-400' : 'laranja-itau'}
    text-white font-bold py-2 px-4 rounded
    focus:outline-none w-full focus:shadow-outline`}
              type="button"
              disabled={isButtonDissabled}
              onClick={this.handleClick}
            >
              Entrar
            </button>
          </div>
        </form >
      </div >
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.func.isRequired,
};

export default connect()(Login);
