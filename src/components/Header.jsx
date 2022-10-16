import checkPropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;
    return (
      <header className="flex bg-azul-itau justify-between">
        <div
          className="mt-1.5 ml-6
         text-amarelo-itau text-3xl font-medium"
        >
          Pay
          <strong className="text-amarelo-itau">Wallet</strong>
        </div>
        <div className="mr-14">
          <div className="flex text-laranja-itau text-xl font-bold">
            <div data-testid="total-field">
              { expenses
                .reduce((acc, e) => Number(e.value)
              * Number(e.exchangeRates[e.currency].ask) + acc, 0).toFixed(2) }

            </div>
            <div data-testid="header-currency-field">
              BRL
            </div>
          </div>
          <div
            className="text-[#f0c297]"
            data-testid="email-field"
          >
            Email:
            {' '}
            { email }
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: checkPropTypes.string.isRequired,
  expenses: checkPropTypes.arrayOf(checkPropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Header);
