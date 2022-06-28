// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SEND_CURRENCIE, SEND_EXPENSE, REMOVE_EXPENSE,
  EDIT_EXPENSE, EXPENSE_EDITED } from '../actions';

const INITIAL_STATE_WALLET = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
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
  case REMOVE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.payloud),
    };
  case EDIT_EXPENSE:
    return {
      ...state,
      editor: true,
      idToEdit: action.payloud,
    };
  case EXPENSE_EDITED:
    return {
      ...state,
      expenses: state.expenses.map((e) => {
        if (e.id === action.payloud.id) {
          return action.payloud;
        } return e;
      }),
      editor: false,
    };
  default:
    return state;
  }
};

export default reducerWallet;
