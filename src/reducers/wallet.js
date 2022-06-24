// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SEND_CURRENCIE } from '../actions';

const INITIAL_STATE_WALLET = {
  currencies: [],
  expenses: [],
  editor: false,
};

const reducerWallet = (state = INITIAL_STATE_WALLET, action) => {
  switch (action.type) {
  case SEND_CURRENCIE:
    return {
      ...state,
      currencies: action.payloud,
    };
  default:
    return state;
  }
};

export default reducerWallet;
