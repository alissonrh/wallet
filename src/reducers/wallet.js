// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE_WALLET = {
  wallet: {
    currencies: [],
    expenses: [],
    editor: false,
    idToEdit: 0,
  },
};

const reducerWallet = (state = INITIAL_STATE_WALLET, action) => {
  switch (action.type) {
  default:
    return state;
  }
};

export default reducerWallet;
