import checkPropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <div>TrybeWallet</div>
        <div data-testid="email-field">
          Email:
          { email }
        </div>
        <div data-testid="total-field">0</div>
        <div data-testid="header-currency-field">BRL</div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Header.propTypes = {
  email: checkPropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
