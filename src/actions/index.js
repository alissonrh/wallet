// Coloque aqui suas actions
export const SEND_LOGIN = 'SEND_LOGIN';

export const sendLogin = (login) => ({
  type: SEND_LOGIN,
  payloud: { ...login },
});
