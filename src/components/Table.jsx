import React from 'react';
import { connect } from 'react-redux';
import checkPropTypes from 'prop-types';
import { removeExpense } from '../actions';

class Table extends React.Component {
  handleClick = (id) => {
    const { dispatch } = this.props;
    dispatch(removeExpense(id));
  }

  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((e) => (
            <tr key={ e.id }>
              <td>{e.description}</td>
              <td>{e.tag}</td>
              <td>{e.method}</td>
              <td>{Number(e.value).toFixed(2)}</td>
              <td>{(e.exchangeRates[e.currency].name).split('/')[0]}</td>
              <td>{Number(e.exchangeRates[e.currency].ask).toFixed(2)}</td>
              <td>{Number(e.value * e.exchangeRates[e.currency].ask).toFixed(2)}</td>
              <td>Real</td>
              <td>
                <button
                  data-testid="edit-btn"
                  type="button"
                >
                  Editar
                </button>
                <button
                  data-testid="delete-btn"
                  type="button"
                  onClick={ () => this.handleClick(e.id) }
                >
                  Remover
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  expenses: checkPropTypes.arrayOf(checkPropTypes.object).isRequired,
  dispatch: checkPropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Table);
