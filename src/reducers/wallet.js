// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SEND_CURRENCIE, SEND_EXPENSE } from '../actions';

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
  case SEND_EXPENSE:
    return {
      ...state,
      expenses: [
        ...state.expenses, {
          ...action.payloud,
          id: state.expenses.length,
        },
      ],
    };
  default:
    return state;
  }
};

export default reducerWallet;
