//---------------Time-zones in Belarus------set natal_gmt and current_gmt depending on date to date

export const belarusGmt = (date, time) => {
  // incoming strings '26.04.1986'  '01.40'
  var native_gmt = [];
  var _gmt = 0;
  var natMinArr = time.split('.');
  var MIN = Number(natMinArr[0]) * 60 + Number(natMinArr[1]);
  var natDateArr = date.split('.');
  native_gmt[0] = Number(natDateArr[0]); //day
  native_gmt[1] = Number(natDateArr[1]); //month
  native_gmt[2] = Number(natDateArr[2]); //year
  native_gmt[3] = MIN;

  if (native_gmt[2] < 1981) _gmt = 3;
  if (native_gmt[2] === 1981 && native_gmt[1] < 4) _gmt = 3; //to 01.04.1981 00:00 gmt+3

  if (native_gmt[2] === 1981 && native_gmt[1] >= 4 && native_gmt[1] < 10) _gmt = 4; //01.04-10.1981 00:00 gmt+4

  if (native_gmt[2] === 1981 && native_gmt[1] >= 10) _gmt = 3;
  if (native_gmt[2] === 1982 && native_gmt[1] < 4) _gmt = 3; //01.10.81-01.04.82 gmt+3

  if (native_gmt[2] === 1982 && native_gmt[1] >= 4 && native_gmt[1] < 10) _gmt = 4; //01.04-10.1982 00:00 gmt+4

  if (native_gmt[2] === 1982 && native_gmt[1] >= 10) _gmt = 3;
  if (native_gmt[2] === 1983 && native_gmt[1] < 4) _gmt = 3; //01.10.82-01.04.83 gmt+3

  if (native_gmt[2] === 1983 && native_gmt[1] >= 4 && native_gmt[1] < 10) _gmt = 4; //01.04-10.1983 00:00 gmt+4

  if (native_gmt[2] === 1983 && native_gmt[1] >= 10) _gmt = 3;
  if (native_gmt[2] === 1984 && native_gmt[1] < 4) _gmt = 3; //01.10.83-01.04.84 gmt+3

  if (
    native_gmt[2] === 1984 &&
    native_gmt[1] >= 4 &&
    (native_gmt[1] < 9 ||
      (native_gmt[1] === 9 && native_gmt[0] < 30) ||
      (native_gmt[1] === 9 && native_gmt[0] === 30 && native_gmt[3] < 180))
  )
    _gmt = 4; //01.04.84-30.09.1984 03:00 gmt+4

  if (
    native_gmt[2] === 1984 &&
    (native_gmt[1] > 9 || (native_gmt[1] === 9 && native_gmt[0] === 30 && native_gmt[3] >= 180))
  )
    _gmt = 3;
  if (
    native_gmt[2] === 1985 &&
    (native_gmt[1] < 3 ||
      (native_gmt[1] === 3 && native_gmt[0] < 31) ||
      (native_gmt[1] === 3 && native_gmt[0] === 31 && native_gmt[3] < 120))
  )
    _gmt = 3; //30.09.84-31.03.85 02:00 gmt+3

  if (
    native_gmt[2] === 1985 &&
    (native_gmt[1] > 3 || (native_gmt[1] === 3 && native_gmt[0] === 31 && native_gmt[3] >= 120)) &&
    (native_gmt[1] < 9 ||
      (native_gmt[1] === 9 && native_gmt[0] < 29) ||
      (native_gmt[1] === 9 && native_gmt[0] === 29 && native_gmt[3] < 180))
  )
    _gmt = 4; //01.04.85 02:00-29.09.1985 03:00 gmt+4

  if (
    native_gmt[2] === 1985 &&
    (native_gmt[1] > 9 ||
      (native_gmt[1] === 9 && native_gmt[0] === 29 && native_gmt[3] >= 180) ||
      (native_gmt[1] === 9 && native_gmt[0] > 29))
  )
    _gmt = 3;
  if (
    native_gmt[2] === 1986 &&
    (native_gmt[1] < 3 ||
      (native_gmt[1] === 3 && native_gmt[0] < 30) ||
      (native_gmt[1] === 3 && native_gmt[0] === 30 && native_gmt[3] < 120))
  )
    _gmt = 3; //29.09.85 03:00-30.03.86 02:00 gmt+3

  if (
    native_gmt[2] === 1986 &&
    (native_gmt[1] > 3 ||
      (native_gmt[1] === 3 && native_gmt[0] === 30 && native_gmt[3] >= 120) ||
      (native_gmt[1] === 3 && native_gmt[0] > 30)) &&
    (native_gmt[1] < 9 ||
      (native_gmt[1] === 9 && native_gmt[0] < 28) ||
      (native_gmt[1] === 9 && native_gmt[0] === 28 && native_gmt[3] < 180))
  )
    _gmt = 4; //30.03.86 02:00-28.09.1986 03:00 gmt+4

  if (
    native_gmt[2] === 1986 &&
    (native_gmt[1] > 9 ||
      (native_gmt[1] === 9 && native_gmt[0] === 28 && native_gmt[3] >= 180) ||
      (native_gmt[1] === 9 && native_gmt[0] > 28))
  )
    _gmt = 3;
  if (
    native_gmt[2] === 1987 &&
    (native_gmt[1] < 3 ||
      (native_gmt[1] === 3 && native_gmt[0] < 29) ||
      (native_gmt[1] === 3 && native_gmt[0] === 29 && native_gmt[3] < 120))
  )
    _gmt = 3; //28.09.86 03:00-29.03.87 02:00 gmt+3

  if (
    native_gmt[2] === 1987 &&
    (native_gmt[1] > 3 ||
      (native_gmt[1] === 3 && native_gmt[0] === 29 && native_gmt[3] >= 120) ||
      (native_gmt[1] === 3 && native_gmt[0] > 29)) &&
    (native_gmt[1] < 9 ||
      (native_gmt[1] === 9 && native_gmt[0] < 27) ||
      (native_gmt[1] === 9 && native_gmt[0] === 27 && native_gmt[3] < 180))
  )
    _gmt = 4; //29.03.87 02:00-27.09.1987 03:00 gmt+4

  if (
    native_gmt[2] === 1987 &&
    (native_gmt[1] > 9 ||
      (native_gmt[1] === 9 && native_gmt[0] === 27 && native_gmt[3] >= 180) ||
      (native_gmt[1] === 9 && native_gmt[0] > 27))
  )
    _gmt = 3;
  if (
    native_gmt[2] === 1988 &&
    (native_gmt[1] < 3 ||
      (native_gmt[1] === 3 && native_gmt[0] < 27) ||
      (native_gmt[1] === 3 && native_gmt[0] === 27 && native_gmt[3] < 120))
  )
    _gmt = 3; //27.09.87 03:00-27.03.88 02:00 gmt+3

  if (
    native_gmt[2] === 1988 &&
    (native_gmt[1] > 3 ||
      (native_gmt[1] === 3 && native_gmt[0] === 27 && native_gmt[3] >= 120) ||
      (native_gmt[1] === 3 && native_gmt[0] > 27)) &&
    (native_gmt[1] < 9 ||
      (native_gmt[1] === 9 && native_gmt[0] < 25) ||
      (native_gmt[1] === 9 && native_gmt[0] === 25 && native_gmt[3] < 180))
  )
    _gmt = 4; //27.03.88 02:00-25.09.1988 03:00 gmt+4

  if (
    native_gmt[2] === 1988 &&
    (native_gmt[1] > 9 ||
      (native_gmt[1] === 9 && native_gmt[0] === 25 && native_gmt[3] >= 180) ||
      (native_gmt[1] === 9 && native_gmt[0] > 25))
  )
    _gmt = 3;
  if (
    native_gmt[2] === 1989 &&
    (native_gmt[1] < 3 ||
      (native_gmt[1] === 3 && native_gmt[0] < 26) ||
      (native_gmt[1] === 3 && native_gmt[0] === 26 && native_gmt[3] < 120))
  )
    _gmt = 3; //25.09.88 03:00-26.03.89 02:00 gmt+3

  if (
    native_gmt[2] === 1989 &&
    (native_gmt[1] > 3 ||
      (native_gmt[1] === 3 && native_gmt[0] === 26 && native_gmt[3] >= 120) ||
      (native_gmt[1] === 3 && native_gmt[0] > 26)) &&
    (native_gmt[1] < 9 ||
      (native_gmt[1] === 9 && native_gmt[0] < 24) ||
      (native_gmt[1] === 9 && native_gmt[0] === 24 && native_gmt[3] < 180))
  )
    _gmt = 4; //26.03.89 02:00-24.09.1989 03:00 gmt+4

  if (
    native_gmt[2] === 1989 &&
    (native_gmt[1] > 9 ||
      (native_gmt[1] === 9 && native_gmt[0] === 24 && native_gmt[3] >= 180) ||
      (native_gmt[1] === 9 && native_gmt[0] > 24))
  )
    _gmt = 3;
  if (
    native_gmt[2] === 1990 &&
    (native_gmt[1] < 3 ||
      (native_gmt[1] === 3 && native_gmt[0] < 25) ||
      (native_gmt[1] === 3 && native_gmt[0] === 25 && native_gmt[3] < 120))
  )
    _gmt = 3; //24.09.89 03:00-25.03.90 02:00 gmt+3

  if (
    native_gmt[2] === 1990 &&
    (native_gmt[1] > 3 ||
      (native_gmt[1] === 3 && native_gmt[0] === 25 && native_gmt[3] >= 120) ||
      (native_gmt[1] === 3 && native_gmt[0] > 25)) &&
    (native_gmt[1] < 9 ||
      (native_gmt[1] === 9 && native_gmt[0] < 30) ||
      (native_gmt[1] === 9 && native_gmt[0] === 30 && native_gmt[3] < 180))
  )
    _gmt = 4; //25.03.90 02:00-30.09.1990 03:00 gmt+4

  if (
    native_gmt[2] === 1990 &&
    (native_gmt[1] > 9 || (native_gmt[1] === 9 && native_gmt[0] === 30 && native_gmt[3] >= 180))
  )
    _gmt = 3;
  if (
    native_gmt[2] === 1991 &&
    (native_gmt[1] < 9 ||
      (native_gmt[1] === 9 && native_gmt[0] < 29) ||
      (native_gmt[1] === 9 && native_gmt[0] === 29 && native_gmt[3] < 120))
  )
    _gmt = 3; //30.09.90 03:00-29.09.91 02:00 gmt+3

  //-------Similarities with MOSKOW ENDs HERE

  //here could be one important date, when decret time was returned in Russia 19.01.1992 - before +2 after+3 sinse this moment there was time lag 1 hour between Moskow and Minsk

  if (
    native_gmt[2] === 1991 &&
    (native_gmt[1] > 9 ||
      (native_gmt[1] === 9 && native_gmt[0] === 29 && native_gmt[3] >= 180) ||
      (native_gmt[1] === 9 && native_gmt[0] > 29))
  )
    _gmt = 2;
  if (
    native_gmt[2] === 1992 &&
    (native_gmt[1] < 3 ||
      (native_gmt[1] === 3 && native_gmt[0] < 29) ||
      (native_gmt[1] === 3 && native_gmt[0] === 29 && native_gmt[3] < 120))
  )
    _gmt = 2; //29.09.91 03:00-29.03.92 02:00 gmt+2

  if (
    native_gmt[2] === 1992 &&
    (native_gmt[1] > 3 ||
      (native_gmt[1] === 3 && native_gmt[0] === 29 && native_gmt[3] >= 120) ||
      (native_gmt[1] === 3 && native_gmt[0] > 29)) &&
    (native_gmt[1] < 9 ||
      (native_gmt[1] === 9 && native_gmt[0] < 27) ||
      (native_gmt[1] === 9 && native_gmt[0] === 27 && native_gmt[3] < 180))
  )
    _gmt = 3; //29.03.92 02:00-27.09.1992 03:00 gmt+3

  if (
    native_gmt[2] === 1992 &&
    (native_gmt[1] > 9 ||
      (native_gmt[1] === 9 && native_gmt[0] === 27 && native_gmt[3] >= 180) ||
      (native_gmt[1] === 9 && native_gmt[0] > 27))
  )
    _gmt = 2;
  if (
    native_gmt[2] === 1993 &&
    (native_gmt[1] < 3 ||
      (native_gmt[1] === 3 && native_gmt[0] < 28) ||
      (native_gmt[1] === 3 && native_gmt[0] === 28 && native_gmt[3] < 120))
  )
    _gmt = 2; //27.09.92 03:00-28.03.93 02:00 gmt+2

  if (
    native_gmt[2] === 1993 &&
    (native_gmt[1] > 3 ||
      (native_gmt[1] === 3 && native_gmt[0] === 28 && native_gmt[3] >= 120) ||
      (native_gmt[1] === 3 && native_gmt[0] > 28)) &&
    (native_gmt[1] < 9 ||
      (native_gmt[1] === 9 && native_gmt[0] < 26) ||
      (native_gmt[1] === 9 && native_gmt[0] === 26 && native_gmt[3] < 180))
  )
    _gmt = 3; //28.03.93 02:00-26.09.1993 03:00 gmt+3

  if (
    native_gmt[2] === 1993 &&
    (native_gmt[1] > 9 ||
      (native_gmt[1] === 9 && native_gmt[0] === 26 && native_gmt[3] >= 180) ||
      (native_gmt[1] === 9 && native_gmt[0] > 26))
  )
    _gmt = 2;
  if (
    native_gmt[2] === 1994 &&
    (native_gmt[1] < 3 ||
      (native_gmt[1] === 3 && native_gmt[0] < 27) ||
      (native_gmt[1] === 3 && native_gmt[0] === 27 && native_gmt[3] < 120))
  )
    _gmt = 2; //26.09.93 03:00-27.03.94 02:00 gmt+2

  if (
    native_gmt[2] === 1994 &&
    (native_gmt[1] > 3 ||
      (native_gmt[1] === 3 && native_gmt[0] === 27 && native_gmt[3] >= 120) ||
      (native_gmt[1] === 3 && native_gmt[0] > 27)) &&
    (native_gmt[1] < 9 ||
      (native_gmt[1] === 9 && native_gmt[0] < 25) ||
      (native_gmt[1] === 9 && native_gmt[0] === 25 && native_gmt[3] < 180))
  )
    _gmt = 3; //27.03.94 02:00-25.09.1994 03:00 gmt+3

  if (
    native_gmt[2] === 1994 &&
    (native_gmt[1] > 9 ||
      (native_gmt[1] === 9 && native_gmt[0] === 25 && native_gmt[3] >= 180) ||
      (native_gmt[1] === 9 && native_gmt[0] > 25))
  )
    _gmt = 2;
  if (
    native_gmt[2] === 1995 &&
    (native_gmt[1] < 3 ||
      (native_gmt[1] === 3 && native_gmt[0] < 26) ||
      (native_gmt[1] === 3 && native_gmt[0] === 26 && native_gmt[3] < 120))
  )
    _gmt = 2; //25.09.94 03:00-26.03.95 02:00 gmt+2

  if (
    native_gmt[2] === 1995 &&
    (native_gmt[1] > 3 ||
      (native_gmt[1] === 3 && native_gmt[0] === 26 && native_gmt[3] >= 120) ||
      (native_gmt[1] === 3 && native_gmt[0] > 26)) &&
    (native_gmt[1] < 9 ||
      (native_gmt[1] === 9 && native_gmt[0] < 24) ||
      (native_gmt[1] === 9 && native_gmt[0] === 24 && native_gmt[3] < 180))
  )
    _gmt = 3; //26.03.95 02:00-24.09.1995 03:00 gmt+3

  if (
    native_gmt[2] === 1995 &&
    (native_gmt[1] > 9 ||
      (native_gmt[1] === 9 && native_gmt[0] === 24 && native_gmt[3] >= 180) ||
      (native_gmt[1] === 9 && native_gmt[0] > 24))
  )
    _gmt = 2;
  if (
    native_gmt[2] === 1996 &&
    (native_gmt[1] < 3 ||
      (native_gmt[1] === 3 && native_gmt[0] < 31) ||
      (native_gmt[1] === 3 && native_gmt[0] === 31 && native_gmt[3] < 120))
  )
    _gmt = 2; //24.09.95 03:00-31.03.96 02:00 gmt+2

  if (
    native_gmt[2] === 1996 &&
    (native_gmt[1] > 3 || (native_gmt[1] === 3 && native_gmt[0] === 31 && native_gmt[3] >= 120)) &&
    (native_gmt[1] < 9 ||
      (native_gmt[1] === 10 && native_gmt[0] < 27) ||
      (native_gmt[1] === 10 && native_gmt[0] === 27 && native_gmt[3] < 180))
  )
    _gmt = 3; //31.03.96 02:00-27.10.1996 03:00 gmt+3

  if (
    native_gmt[2] === 1996 &&
    (native_gmt[1] > 10 ||
      (native_gmt[1] === 10 && native_gmt[0] === 27 && native_gmt[3] >= 180) ||
      (native_gmt[1] === 10 && native_gmt[0] > 27))
  )
    _gmt = 2;
  if (
    native_gmt[2] === 1997 &&
    (native_gmt[1] < 3 ||
      (native_gmt[1] === 3 && native_gmt[0] < 30) ||
      (native_gmt[1] === 3 && native_gmt[0] === 30 && native_gmt[3] < 120))
  )
    _gmt = 2; //27.10.96 03:00-30.03.97 02:00 gmt+2

  if (
    native_gmt[2] === 1997 &&
    (native_gmt[1] > 3 ||
      (native_gmt[1] === 3 && native_gmt[0] === 30 && native_gmt[3] >= 120) ||
      (native_gmt[1] === 3 && native_gmt[0] > 30)) &&
    (native_gmt[1] < 10 ||
      (native_gmt[1] === 10 && native_gmt[0] < 26) ||
      (native_gmt[1] === 10 && native_gmt[0] === 26 && native_gmt[3] < 180))
  )
    _gmt = 3; //30.03.97 02:00-26.10.1997 03:00 gmt+3

  if (
    native_gmt[2] === 1997 &&
    (native_gmt[1] > 10 ||
      (native_gmt[1] === 10 && native_gmt[0] === 26 && native_gmt[3] >= 180) ||
      (native_gmt[1] === 10 && native_gmt[0] > 26))
  )
    _gmt = 2;
  if (
    native_gmt[2] === 1998 &&
    (native_gmt[1] < 3 ||
      (native_gmt[1] === 3 && native_gmt[0] < 29) ||
      (native_gmt[1] === 3 && native_gmt[0] === 29 && native_gmt[3] < 120))
  )
    _gmt = 2; //26.10.97 03:00-29.03.98 02:00 gmt+2

  if (
    native_gmt[2] === 1998 &&
    (native_gmt[1] > 3 ||
      (native_gmt[1] === 3 && native_gmt[0] === 29 && native_gmt[3] >= 120) ||
      (native_gmt[1] === 3 && native_gmt[0] > 29)) &&
    (native_gmt[1] < 10 ||
      (native_gmt[1] === 10 && native_gmt[0] < 25) ||
      (native_gmt[1] === 10 && native_gmt[0] === 25 && native_gmt[3] < 180))
  )
    _gmt = 3; //29.03.98 02:00-25.10.1998 03:00 gmt+3

  if (
    native_gmt[2] === 1998 &&
    (native_gmt[1] > 10 ||
      (native_gmt[1] === 10 && native_gmt[0] === 25 && native_gmt[3] >= 180) ||
      (native_gmt[1] === 10 && native_gmt[0] > 25))
  )
    _gmt = 2;
  if (
    native_gmt[2] === 1999 &&
    (native_gmt[1] < 3 ||
      (native_gmt[1] === 3 && native_gmt[0] < 28) ||
      (native_gmt[1] === 3 && native_gmt[0] === 28 && native_gmt[3] < 120))
  )
    _gmt = 2; //25.10.98 03:00-28.03.99 02:00 gmt+2

  if (
    native_gmt[2] === 1999 &&
    (native_gmt[1] > 3 ||
      (native_gmt[1] === 3 && native_gmt[0] === 28 && native_gmt[3] >= 120) ||
      (native_gmt[1] === 3 && native_gmt[0] > 28)) &&
    (native_gmt[1] < 10 ||
      (native_gmt[1] === 10 && native_gmt[0] < 31) ||
      (native_gmt[1] === 10 && native_gmt[0] === 31 && native_gmt[3] < 180))
  )
    _gmt = 3; //28.03.99 02:00-31.10.1999 03:00 gmt+3

  if (
    native_gmt[2] === 1999 &&
    (native_gmt[1] > 10 || (native_gmt[1] === 10 && native_gmt[0] === 31 && native_gmt[3] >= 180))
  )
    _gmt = 2;
  if (
    native_gmt[2] === 2000 &&
    (native_gmt[1] < 3 ||
      (native_gmt[1] === 3 && native_gmt[0] < 26) ||
      (native_gmt[1] === 3 && native_gmt[0] === 26 && native_gmt[3] < 120))
  )
    _gmt = 2; //31.10.99 03:00-26.03.00 02:00 gmt+2

  if (
    native_gmt[2] === 2000 &&
    (native_gmt[1] > 3 ||
      (native_gmt[1] === 3 && native_gmt[0] === 26 && native_gmt[3] >= 120) ||
      (native_gmt[1] === 3 && native_gmt[0] > 26)) &&
    (native_gmt[1] < 10 ||
      (native_gmt[1] === 10 && native_gmt[0] < 29) ||
      (native_gmt[1] === 10 && native_gmt[0] === 29 && native_gmt[3] < 180))
  )
    _gmt = 3; //26.03.00 02:00-29.10.00 03:00 gmt+3

  if (
    native_gmt[2] === 2000 &&
    (native_gmt[1] > 10 ||
      (native_gmt[1] === 10 && native_gmt[0] === 29 && native_gmt[3] >= 180) ||
      (native_gmt[1] === 10 && native_gmt[0] > 29))
  )
    _gmt = 2;
  if (
    native_gmt[2] === 2001 &&
    (native_gmt[1] < 3 ||
      (native_gmt[1] === 3 && native_gmt[0] < 25) ||
      (native_gmt[1] === 3 && native_gmt[0] === 25 && native_gmt[3] < 120))
  )
    _gmt = 2; //29.10.00 03:00-25.03.01 02:00 gmt+2

  if (
    native_gmt[2] === 2001 &&
    (native_gmt[1] > 3 ||
      (native_gmt[1] === 3 && native_gmt[0] === 25 && native_gmt[3] >= 120) ||
      (native_gmt[1] === 3 && native_gmt[0] > 25)) &&
    (native_gmt[1] < 10 ||
      (native_gmt[1] === 10 && native_gmt[0] < 28) ||
      (native_gmt[1] === 10 && native_gmt[0] === 28 && native_gmt[3] < 180))
  )
    _gmt = 3; //25.03.01 02:00-28.10.01 03:00 gmt+3

  if (
    native_gmt[2] === 2001 &&
    (native_gmt[1] > 10 ||
      (native_gmt[1] === 10 && native_gmt[0] === 28 && native_gmt[3] >= 180) ||
      (native_gmt[1] === 10 && native_gmt[0] > 28))
  )
    _gmt = 2;
  if (
    native_gmt[2] === 2002 &&
    (native_gmt[1] < 3 ||
      (native_gmt[1] === 3 && native_gmt[0] < 31) ||
      (native_gmt[1] === 3 && native_gmt[0] === 31 && native_gmt[3] < 120))
  )
    _gmt = 2; //28.10.01 03:00-31.03.02 02:00 gmt+2

  // after this point time was sincronised with moskow time (all years after not acceptable yet because of age)

  // YOU SHOULD WRITE MORE CODE FOR BELARUS, GLOBA p86-87 (2002-now)

  return _gmt;

  // this.current_gmt=3;  WTF
};
