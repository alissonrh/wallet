import React from 'react';
import { connect } from 'react-redux';
import checkPropTypes from 'prop-types';
import { removeExpense, editExpense } from '../actions';
import { BsTrash } from 'react-icons/bs'
import { FaRegEdit } from 'react-icons/fa'

class Table extends React.Component {
  handleClickDelete = (id) => {
    const { dispatch } = this.props;
    dispatch(removeExpense(id));
  }

  handleClickEdit = (id) => {
    const { dispatch } = this.props;
    dispatch(editExpense(id));
  }

  render() {
    const { expenses } = this.props;
    return (
      <table className="w-full border">
        <thead className="border">
          <tr className="border">
            <th className="border">Descrição</th>
            <th className="border">Tag</th>
            <th className="border">Método de pagamento</th>
            <th className="border">Valor</th>
            <th className="border">Moeda</th>
            <th className="border">Câmbio utilizado</th>
            <th className="border">Valor convertido</th>
            <th className="border">Moeda de conversão</th>
            <th className="border">Editar/Excluir</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {expenses.map((e) => (
            <tr key={ e.id }>
              <td className="border">{e.description}</td>
              <td className="border">{e.tag}</td>
              <td className="border">{e.method}</td>
              <td className="border">{Number(e.value).toFixed(2)}</td>
              <td className="border">
                {(e.exchangeRates[e.currency].name).split('/')[0]}

              </td>
              <td className="border">
                {Number(e.exchangeRates[e.currency].ask).toFixed(2)}

              </td>
              <td className="border">
                {Number(e.value * e.exchangeRates[e.currency].ask).toFixed(2)}

              </td>
              <td className="border">Real</td>
              <td className="border">
                <button 
                  data-testid="edit-btn"
                  type="button"
                  onClick={ () => this.handleClickEdit(e.id) }
                  className="bg-laranja-itau hover:bg-amarelo-itau
        text-white hover:text-black font-bold px-3 py-1.5 rounded mx-1 text-xl
        focus:outline-none focus:shadow-outline"
                ><FaRegEdit/></button>
                <button
                  data-testid="delete-btn"
                  type="button"
                  onClick={ () => this.handleClickDelete(e.id) }
                  className="bg-azul-itau hover:bg-amarelo-itau 
        text-white hover:text-black font-bold px-3 py-1.5 rounded m-0.5 text-xl
        focus:outline-none focus:shadow-outline"
                ><BsTrash />
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
