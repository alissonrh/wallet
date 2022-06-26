import React from 'react';
import checkPropTypes, { string } from 'prop-types';
import { connect } from 'react-redux';
/* import getCurrencies from '../services/api'; */
import { fetchCurrencieObjThunk, sendExpense } from '../actions';

const INITIAL_STATE = {
  id: 0,
  value: 0,
  description: '',
  currency: '',
  method: '',
  tag: '',
  exchangeRates: {},
};

class Form extends React.Component {
  state = INITIAL_STATE

  /* handleClick = async (event) => {
    event.preventDefault();
    const { dispatch } = this.props;
    const fetchApi = await getCurrencies();
    delete fetchApi.USDT;
    this.setState({
      exchangeRates: fetchApi,
    });
    await dispatch(sendExpense(this.state));
    this.setState({
      value: 0,
    });
  } */

  handleClick = (event) => {
    event.preventDefault();
    const { dispatch } = this.props;
    dispatch(fetchCurrencieObjThunk(sendExpense, this.state));
    this.setState({
      value: 0,
    });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { currencies } = this.props;
    const { value } = this.state;
    return (
      <form
        onSubmit={ this.handleClick }
      >
        <label htmlFor="value">
          Valor:
          <input
            onChange={ this.handleChange }
            data-testid="value-input"
            type="number"
            id="value"
            name="value"
            value={ value }
          />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select
            id="moeda"
            name="currency"
            onChange={ this.handleChange }
          >
            {currencies.map((currencie) => (
              <option value={ currencie } key={ currencie }>
                {currencie}
              </option>))}
          </select>
        </label>
        <label htmlFor="method-input">
          Método de Pagamento:
          <select
            onChange={ this.handleChange }
            data-testid="method-input"
            name="method"
            id="method-input"
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Categoria:
          <select
            onChange={ this.handleChange }
            data-testid="tag-input"
            name="tag"
            id="tag"
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input
            onChange={ this.handleChange }
            data-testid="description-input"
            type="text"
            id="descricao"
            name="description"
          />
        </label>
        <button
          type="submit"
        >
          Adicionar despesa
        </button>

      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

Form.propTypes = {
  currencies: checkPropTypes.arrayOf(string).isRequired,
  dispatch: checkPropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Form);
