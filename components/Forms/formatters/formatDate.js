import moment from 'moment';

const _preFormatDate = val => {
  if (val == '') return null;
  if (val === 'Invalid date') return null; //actually going to catch this on the form setValue and set null
  const formattedVal = moment(val).format();
  return formattedVal;
};

const _postFormatDate = val => {
  if (val == '') return null;
  if (val === 'Invalid date') return null; //actually going to catch this on the form setValue and set null
  const formattedVal = moment(val).format();
  return formattedVal;
};

export { _preFormatDate, _postFormatDate };
