import checkPropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email, values } = this.props;
    return (
      <header>
        <div>TrybeWallet</div>
        <div data-testid="email-field">
          Email:
          { email }
        </div>
        <div data-testid="total-field">
          { values
            .reduce((acc, e) => Number(e.value)
            * Number(e.exchangeRates[e.currency].ask) + acc, 0).toFixed(2) }

        </div>
        <div data-testid="header-currency-field">BRL</div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  values: state.wallet.expenses,
});

Header.propTypes = {
  email: checkPropTypes.string.isRequired,
  values: checkPropTypes.arrayOf(checkPropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Header);
