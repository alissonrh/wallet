// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE_WALLET = {
  currencies: [],
  expenses: [],
  editor: false,
};

const reducerWallet = (state = INITIAL_STATE_WALLET, action) => {
  switch (action.type) {
  default:
    return state;
  }
};

export default reducerWallet;
