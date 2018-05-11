export const natalToUniGmt = (date, time, gmt) => {
  // --------------natal date-time--> universal GMT time -----------------
  let nativeUniGmt = [];

  let nat_min_arr = time.split('.');
  let MIN = Number(nat_min_arr[0]) * 60 + Number(nat_min_arr[1]);
  let nat_date_arr = date.split('.');
  nativeUniGmt[0] = Number(nat_date_arr[0]); //day
  nativeUniGmt[1] = Number(nat_date_arr[1]); //month
  nativeUniGmt[2] = Number(nat_date_arr[2]); //year
  nativeUniGmt[3] = MIN;

  return true_date_arr(nativeUniGmt, gmt);
};

//---------------- FOR PROVIDING REAL DATE after math operations----------------------------
const true_date_arr = (_arr, _gmt) => {
  var min = _arr[3];
  if (min - _gmt * 60 < 0) {
    _arr[3] = min - _gmt * 60 + 1440;
    _arr[0]--;
  }
  if (min - _gmt * 60 >= 0 && min - _gmt * 60 < 1440) {
    _arr[3] = min - _gmt * 60;
  }
  if (min - _gmt * 60 >= 1440) {
    _arr[3] = min - _gmt * 60 - (min - _gmt * 60 >= 1440 ? 1440 : 0);
    _arr[0]++;
  }

  //--order of day-month
  if (_arr[2] % 4 === 0 && _arr[1] === 2 && _arr[0] > 29) {
    _arr[0] = _arr[0] - 29;
    _arr[1]++;
  }
  if (_arr[2] % 4 !== 0 && _arr[1] === 2 && _arr[0] > 28) {
    _arr[0] = _arr[0] - 28;
    _arr[1]++;
  }
  if ((_arr[1] === 4 || _arr[1] === 6 || _arr[1] === 9 || _arr[1] === 11) && _arr[0] > 30) {
    _arr[0] = _arr[0] - 30;
    _arr[1]++;
  }
  if (
    (_arr[1] === 1 ||
      _arr[1] === 3 ||
      _arr[1] === 5 ||
      _arr[1] === 7 ||
      _arr[1] === 8 ||
      _arr[1] === 10 ||
      _arr[1] === 12) &&
    _arr[0] > 31
  ) {
    _arr[0] = _arr[0] - 31;
    _arr[1]++;
  }
  if (_arr[0] <= 0) {
    if (_arr[1] === 3 && _arr[2] % 4 === 0)
      // march of special year
      _arr[0] = 29 + _arr[0];
    if (_arr[1] === 3 && _arr[2] % 4 !== 0)
      // march of usual year
      _arr[0] = 28 + _arr[0];
    if (_arr[1] === 5 || _arr[1] === 7 || _arr[1] === 10 || _arr[1] === 12) _arr[0] = 30 + _arr[0];
    if (
      _arr[1] === 1 ||
      _arr[1] === 2 ||
      _arr[1] === 4 ||
      _arr[1] === 6 ||
      _arr[1] === 8 ||
      _arr[1] === 9 ||
      _arr[1] === 11
    )
      _arr[0] = 31 + _arr[0];
    _arr[1]--;
  }

  //--order of month - year
  if (_arr[1] === 0) {
    _arr[2]--;
    _arr[1] = 12;
  }
  if (_arr[1] === 13) {
    _arr[2]++;
    _arr[1] = 1;
  }
  return _arr;
};
