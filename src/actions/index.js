// Coloque aqui suas actions
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
