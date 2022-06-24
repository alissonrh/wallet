// Coloque aqui suas actions
import getCurrencies from '../services/api';

export const SEND_LOGIN = 'SEND_LOGIN';
export const SEND_CURRENCIE = 'SEND_CURRENCIE';

export const sendLogin = (login) => ({
  type: SEND_LOGIN,
  payloud: { ...login },
});

export const sendCurrencie = (array) => ({
  type: SEND_CURRENCIE,
  payloud: [...array],
});

export const fetchCurrencieThunk = () => async (dispatch) => {
  // logica
  // dispache do obj
  const response = await getCurrencies();
  const arrayCurrencies = Object.keys(response).filter((e) => e !== 'USDT');
  dispatch(sendCurrencie(arrayCurrencies));
};
