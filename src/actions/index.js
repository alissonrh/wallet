// Coloque aqui suas actions
import getCurrencies from '../services/api';

export const SEND_LOGIN = 'SEND_LOGIN';
export const SEND_CURRENCIE = 'SEND_CURRENCIE';
export const SEND_EXPENSE = 'SEND_EXPENSE';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const EXPENSE_EDITED = 'EXPENSE_EDITED';

export const sendLogin = (login) => ({
  type: SEND_LOGIN,
  payloud: { ...login },
});

export const sendCurrencie = (array) => ({
  type: SEND_CURRENCIE,
  payloud: [...array],
});

export const sendExpense = (expense) => ({
  type: SEND_EXPENSE,
  payloud: expense,
});

export const removeExpense = (id) => ({
  type: REMOVE_EXPENSE,
  payloud: id,
});

export const editExpense = (id) => ({
  type: EDIT_EXPENSE,
  payloud: id,
});

export const expenseEdited = (expense) => ({
  type: EXPENSE_EDITED,
  payloud: expense,
});

export const fetchCurrencieObjThunk = (action, state) => async (dispatch) => {
  const response = await getCurrencies();
  delete response.USDT;
  state.exchangeRates = response;
  dispatch(action(state));
};

export const fetchCurrencieThunk = () => async (dispatch) => {
  // logica
  // dispache do obj
  const response = await getCurrencies();
  const arrayCurrencies = Object.keys(response).filter((e) => e !== 'USDT');
  dispatch(sendCurrencie(arrayCurrencies));
};
