const formatCentsToDollars = (amount, type) => {
  const dollarAmount = amount / 100;

  const isPositive = dollarAmount > 0;

  const formattedMoney = new Intl.NumberFormat('en-US', {
    style: 'currency',
    // currency: 'NZD',
    currency: 'NZD',
  }).format(dollarAmount); // '$100.00'

  const _color = () => {
    if (type === 'charge') return 'red'; // if is a charge, show positive as red
    return isPositive ? 'green' : 'red';
  };

  // return formattedMoney;

  return (
    <span
      style={{
        color: _color(),
      }}>
      {formattedMoney}
    </span>
  );
};

const formatCentsToDollarsVal = (amount, options) => {
  const dollarAmount = amount / 100;

  const isPositive = dollarAmount > 0;

  const formattedMoney = new Intl.NumberFormat('en-US', {
    style: 'currency',
    // currency: 'NZD',
    currency: 'NZD',
    ...options,
  }).format(dollarAmount); // '$100.00'

  return formattedMoney;
};
export { formatCentsToDollars, formatCentsToDollarsVal };

export default formatCentsToDollars;
