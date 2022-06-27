import React from 'react';
import checkPropTypes, { string } from 'prop-types';
import { connect } from 'react-redux';
/* import getCurrencies from '../services/api'; */
import { expenseEdited, fetchCurrencieObjThunk, sendExpense } from '../actions';

const INITIAL_STATE = {
  id: 0,
  value: 0,
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
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

  shouldComponentUpdate(nextProps) {
    const { editor, idParaEditar, expenseParaEditar } = nextProps;
    const { id } = this.state;
    if (editor && id !== idParaEditar) {
      this.setState(expenseParaEditar);
    }
    return true;
  }

  handleClick = (event) => {
    event.preventDefault();
    const { dispatch, editor } = this.props;
    if (editor) {
      dispatch(expenseEdited(this.state));
    } else {
      dispatch(fetchCurrencieObjThunk(sendExpense, this.state));
    }
    this.setState(INITIAL_STATE);
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { currencies, editor } = this.props;
    const { value, description, currency, method, tag } = this.state;
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
            value={ currency }
          >
            {currencies.map((currencie) => (
              <option key={ currencie }>
                {currencie}
              </option>))}
          </select>
        </label>
        <label htmlFor="method-input">
          Método de Pagamento: editando: state.wallet.e
          <select
            onChange={ this.handleChange }
            data-testid="method-input"
            name="method"
            id="method-input"
            value={ method }
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
            value={ tag }
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
            value={ description }
          />
        </label>
        <button
          type="submit"
        >
          { editor ? 'Editar despesa' : 'Adicionar despesa' }
        </button>

      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  editor: state.wallet.editor,
  idParaEditar: state.wallet.idParaEditar,
  expenseParaEditar: state.wallet.expenses
    .find((e) => e.id === state.wallet.idParaEditar),
});

Form.propTypes = {
  currencies: checkPropTypes.arrayOf(string).isRequired,
  dispatch: checkPropTypes.func.isRequired,
  editor: checkPropTypes.bool.isRequired,
  idParaEditar: checkPropTypes.number.isRequired,
  expenseParaEditar: checkPropTypes.shape({}),
};

Form.defaultProps = {
  expenseParaEditar: {},
};

export default connect(mapStateToProps)(Form);
