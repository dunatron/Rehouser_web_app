import { MYOB_IMPORT_KEYS } from './MYOBImporter';

const findType = item => {
  const isMYOBCashBook = _isMYOBCashBook(item);
  if (isMYOBCashBook) return 'MYOB_CASHBOOK';
  return 'UNDEFINED_TYPE';
};

const _isMYOBCashBook = item => {
  let haystack = item.meta.fields;
  let needle = MYOB_IMPORT_KEYS;
  let result = needle.every(i => haystack.includes(i));
  return result;
};
export { MYOB_IMPORT_KEYS };
export default findType;
