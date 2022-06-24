const getCurrencies = async () => {
  const url = 'https://economia.awesomeapi.com.br/json/all';
  const response = await fetch(url);
  return response.json();
};

export default getCurrencies;
