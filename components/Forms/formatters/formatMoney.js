// Our value is stored in cents in the db but this wants a dollar amound I think
const _preFormatMoney = val => {
  return parseFloat(val / 100);
};

const _postFormatMoney = val => {
  const extractedFloatVal = Number(val.replace(/[^0-9.-]+/g, '')); // no useles escape lint
  const floatValAsIntInCents = extractedFloatVal * 100;
  return floatValAsIntInCents;
};

export { _preFormatMoney, _postFormatMoney };
