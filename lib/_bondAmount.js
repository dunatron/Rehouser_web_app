const _bondAmount = (bondType, rent) => {
  if (!bondType) return rent;
  var thenum = bondType.replace(/^\D+/g, ''); // is `WEEKS_RENT_2` and gets 2

  return thenum * rent;
};

export default _bondAmount;
