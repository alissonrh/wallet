import React from 'react';
import checkPropTypes, { string } from 'prop-types';
import { connect } from 'react-redux';

class Form extends React.Component {
  render() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="value-input">
          Valor:
          <input
            data-testid="value-input"
            type="number"
            id="value-input"
          />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select name="moeda" id="moeda">
            {currencies.map((currencie) => (
              <option key={ currencie }>
                {currencie}
              </option>))}
          </select>
        </label>
        <label htmlFor="method-input">
          Método de Pagamento:
          <select data-testid="method-input" name="method-input" id="method-input">
            <option value="dinheiro">Dinheiro</option>
            <option value="cartao-credito">Cartão de crédito</option>
            <option value="cartao-debito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag-input">
          Categoria:
          <select data-testid="tag-input" name="tag-input" id="tag-input">
            <option value="alimentação">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input
            data-testid="description-input"
            type="text"
            id="descricao"
          />
        </label>

      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

Form.propTypes = {
  currencies: checkPropTypes.arrayOf(string).isRequired,
};

export default connect(mapStateToProps)(Form);
