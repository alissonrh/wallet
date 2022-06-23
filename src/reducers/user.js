// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SEND_LOGIN } from '../actions';

const INITIAL_STATE_USER = {
  email: '',
};

const redecuerUser = (state = INITIAL_STATE_USER, action) => {
  switch (action.type) {
  case SEND_LOGIN:
    return {
      ...state,
      email: action.payloud.email,
    };
  default:
    return state;
  }
};

export default redecuerUser;
