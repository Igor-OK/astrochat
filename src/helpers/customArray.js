// функция для формирования массива координат планет на текуший момент времени(принимает минуты текущих суток и даты их начала и конца)

export const customArray = (_min, _start, _end) => {
  var natal_arr = [];
  var start = [];
  var end = [];
  var min = _min;
  for (
    let i = 1;
    i < _start.length;
    i++ // CHANGING 0 TO 1 FOR INVOLVING STARTIME - Pos 0 in days-object
  )
    start[i - 1] = _start[i]; // i-1 for it too
  for (
    let i = 1;
    i < _end.length;
    i++ // here too
  )
    end[i - 1] = _end[i]; // i-1 for it too

  for (var i = 0; i < start.length; i++) {
    if (Math.abs(end[i] - start[i]) < 333) natal_arr[i] = (end[i] - start[i]) * min / 1440 + start[i];
    else {
      //should think about planet turned during the day 21 of march =)))
      if (end[i] < start[i]) end[i] += 360;
      else start[i] += 360;
      natal_arr[i] = (end[i] - start[i]) * min / 1440 + start[i]; // else is for cases of intersect of 0 deg
      if (natal_arr[i] >= 360) natal_arr[i] -= 360;
    } //end of else
  } // retro, if you wish, here // 1440 minutes in a day
  return natal_arr;
};
