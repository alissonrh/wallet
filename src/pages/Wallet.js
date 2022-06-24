import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sendCurrencie } from '../actions';
import Header from '../components/Header';
import getCurrencies from '../services/api';

class Wallet extends React.Component {
  componentDidMount() {
    this.requestCurrencies();
  }

  requestCurrencies = async () => {
    const response = await getCurrencies();
    const arrayCurrencies = Object.keys(response).filter((e) => e !== 'USDT');
    const { dispatch } = this.props;
    dispatch(sendCurrencie(arrayCurrencies));
  }

  render() {
    return (
      <main>
        <Header />
      </main>);
  }
}

Wallet.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Wallet);
