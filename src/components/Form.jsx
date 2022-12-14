import React from 'react';
import checkPropTypes, { string } from 'prop-types';
import { connect } from 'react-redux';
/* import getCurrencies from '../services/api'; */
import { expenseEdited, fetchCurrencieObjThunk } from '../actions';

const INITIAL_STATE = {
  id: '',
  value: 0,
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
};

class Form extends React.Component {
  state = INITIAL_STATE

  shouldComponentUpdate(nextProps) {
    const { editor, idToEdit, expenseParaEditar } = nextProps;
    const { id } = this.state;
    if (editor && id !== idToEdit) {
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
      dispatch(fetchCurrencieObjThunk(this.state));
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
        className="flex w-full justify-between py-6 px-4 bg-slate-400"
        onSubmit={ this.handleClick }
      >
        <label htmlFor="value">
          Valor:
          <input
            className="bg-gray-200 appearance-none border-2
            border-gray-200 rounded w-full px-4 text-gray-700
            leading-tight focus:outline-none focus:bg-white focus:border-amarelo-itau"
            onChange={ this.handleChange }
            data-testid="value-input"
            type="number"
            id="value"
            name="value"
            value={ value }
          />
        </label>
        <div className="flex justify-between">
          <label
            htmlFor="moeda"
            className="ml-8"
          >
            Moeda:
            <select
              className="text-gray-500
          group inline-flex items-center rounded-md
           bg-white text-base font-medium
            hover:text-gray-900 focus:outline-none
            focus:ring-2 focus:ring-amarelo-itau focus:ring-offset-2"
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
          <label
            htmlFor="method-input"
            className="ml-14"
          >
            Método de Pagamento:
            <select
              className="text-gray-500
           group inline-flex items-center rounded-md
            bg-white text-base font-medium
             hover:text-gray-900 focus:outline-none
             focus:ring-2 focus:ring-amarelo-itau focus:ring-offset-2"
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
              className="text-gray-500
           group inline-flex items-center rounded-md
            bg-white text-base font-medium
             hover:text-gray-900 focus:outline-none
             focus:ring-2 focus:ring-amarelo-itau focus:ring-offset-2"
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
        </div>
        <label htmlFor="descricao">
          Descrição:
          <input
            className="bg-gray-200 appearance-none border-2
          border-gray-200 rounded w-full px-4 text-gray-700
          leading-tight focus:outline-none focus:bg-white focus:border-amarelo-itau"
            onChange={ this.handleChange }
            data-testid="description-input"
            type="text"
            id="descricao"
            name="description"
            value={ description }
          />
        </label>
        <button
          className="bg-azul-itau hover:bg-laranja-itau
        text-white font-bold px-4 rounded mx-6
        focus:outline-none focus:shadow-outline"
          type="submit"
        >
          {editor ? 'Editar despesa' : 'Adicionar despesa'}
        </button>

      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  editor: state.wallet.editor,
  idToEdit: state.wallet.idToEdit,
  expenseParaEditar: state.wallet.expenses
    .find((e) => e.id === state.wallet.idToEdit),
});

Form.propTypes = {
  currencies: checkPropTypes.arrayOf(string).isRequired,
  dispatch: checkPropTypes.func.isRequired,
  editor: checkPropTypes.bool.isRequired,
  idToEdit: checkPropTypes.number.isRequired,
  expenseParaEditar: checkPropTypes.shape({}),
};

Form.defaultProps = {
  expenseParaEditar: {},
};

export default connect(mapStateToProps)(Form);
