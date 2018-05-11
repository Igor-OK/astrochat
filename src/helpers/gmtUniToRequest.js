// функция формирует строку - запрос для получения массива координат

export const gmtUniToRequest = _arr => {
  var _arr_start = [];
  var _arr_end = [];
  var _start = '';
  var _end = '';

  for (let i = 0; i < 3; i++) _arr_start[i] = _arr[i];

  _arr_end[0] = _arr_start[0] + 1;
  _arr_end[1] = _arr_start[1];
  _arr_end[2] = _arr_start[2];
  _arr_end[3] = 0;

  true_date_arr(_arr_end, 0);

  for (let i = 0; i < 3; i++) {
    if (_arr_start[i].toString().length === 1) _arr_start[i] = '0' + _arr_start[i].toString();
    else _arr_start[i] = _arr_start[i].toString();
  }
  _start = _arr_start[0] + '.' + _arr_start[1] + '.' + _arr_start[2];

  for (let i = 0; i < 3; i++) {
    if (_arr_end[i].toString().length === 1) _arr_end[i] = '0' + _arr_end[i].toString();
    else _arr_end[i] = _arr_end[i].toString();
  }
  _end = _arr_end[0] + '.' + _arr_end[1] + '.' + _arr_end[2];
  return [_start, _end];
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
