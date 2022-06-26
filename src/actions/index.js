// Coloque aqui suas actions
import getCurrencies from '../services/api';

export const SEND_LOGIN = 'SEND_LOGIN';
export const SEND_CURRENCIE = 'SEND_CURRENCIE';
export const SEND_EXPENSE = 'SEND_EXPENSE';

export const sendLogin = (login) => ({
  type: SEND_LOGIN,
  payloud: { ...login },
});

export const sendCurrencie = (array) => ({
  type: SEND_CURRENCIE,
  payloud: [...array],
});

export const sendExpense = (payloud) => ({
  type: SEND_EXPENSE,
  payloud,
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
