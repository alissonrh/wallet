import React from 'react';
import { connect } from 'react-redux';
import checkPropTypes from 'prop-types';

class Table extends React.Component {
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
                  data-testid="delete-btn"
                  type="button"
                >
                  Remover
                </button>
                <button
                  data-testid="edit-btn"
                  type="button"
                >
                  Editar
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
};

export default connect(mapStateToProps)(Table);
