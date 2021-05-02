// Our value is stored in cents in the db but this wants a dollar amound I think
import { is } from 'ramda';

const _preFormatMoney = val => {
  // it may not come from the database, but saved dollar sign amount
  if (!val) return val;
  if (is(Number, val)) return parseFloat(val / 100);
  if (val.includes('$')) {
    return val;
  }
  return val;
};

const _postFormatMoney = val => {
  const extractedFloatVal = Number(val.replace(/[^0-9.-]+/g, '')); // no useles escape lint
  const floatValAsIntInCents = extractedFloatVal * 100;
  return floatValAsIntInCents;
};

export { _preFormatMoney, _postFormatMoney };
