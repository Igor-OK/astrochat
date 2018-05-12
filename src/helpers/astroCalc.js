export const astroCalc = (arrCurrent, arrNative) => {
  console.log(arrCurrent);
  console.log(arrNative);

  let nat_sun_orb = 5,
    nat_moo_orb = 4,
    nat_mer_orb = 2.5,
    nat_ven_orb = 3,
    nat_mar_orb = 3,
    nat_upi_orb = 3,
    nat_sat_orb = 3,
    nat_ura_orb = 1.5,
    nat_nep_orb = 1.5,
    nat_plu_orb = 1.5,
    nat_rah_orb = 1.5,
    nat_ket_orb = 1.5,
    nat_lil_orb = 1.5,
    nat_sel_orb = 1.5,
    cur_sun_orb = 5,
    cur_moo_orb = 4,
    cur_mer_orb = 2.5,
    cur_ven_orb = 3,
    cur_mar_orb = 3,
    cur_upi_orb = 3,
    cur_sat_orb = 3,
    cur_ura_orb = 1.5,
    cur_nep_orb = 1.5,
    cur_plu_orb = 1.5,
    cur_rah_orb = 1.5,
    cur_ket_orb = 1.5,
    cur_lil_orb = 1.5,
    cur_sel_orb = 1.5;

  const curSun = arrCurrent[0];
  const curMoon = arrCurrent[1];
  const curMer = arrCurrent[2];
  const curVen = arrCurrent[3];
  const curMar = arrCurrent[4];
  const curUpi = arrCurrent[5];
  const curSat = arrCurrent[6];
  const curUra = arrCurrent[7];
  const curNep = arrCurrent[8];
  const curPlu = arrCurrent[9];
  const curRah = arrCurrent[10];
  const curKet = arrCurrent[11];
  const curLil = arrCurrent[12];
  const curSel = arrCurrent[13];

  const natSun = arrNative[0];
  const natMoon = arrNative[1];
  const natMer = arrNative[2];
  const natVen = arrNative[3];
  const natMar = arrNative[4];
  const natUpi = arrNative[5];
  const natSat = arrNative[6];
  const natUra = arrNative[7];
  const natNep = arrNative[8];
  const natPlu = arrNative[9];
  const natRah = arrNative[10];
  const natKet = arrNative[11];
  const natLil = arrNative[12];
  const natSel = arrNative[13];

  const conj = (nat_orb, cur_orb, nat_lon, cur_lon, max) => {
    // max can have negative value in some cases
    var def = Math.abs(nat_lon - cur_lon);
    var orb = nat_orb + cur_orb; // orb of 2 planet, all orb.
    var res;
    if (0 <= def && def <= orb) {
      res = max * (1 - (def - 0) / orb);
      return res;
    } // end of IF
    if (360 - orb <= def && def <= 360) {
      res = max * (1 - (360 - def) / orb);
      return res;
    } else return 0; //end of IF
  }; // end of conj

  const trin = (nat_orb, cur_orb, nat_lon, cur_lon, max) => {
    //orb=original-1 - for trin
    var def = Math.abs(nat_lon - cur_lon);
    var orb = nat_orb + cur_orb; // orb of 2 planet, all orb.
    var res;
    if (120 <= def && def <= 120 + orb) {
      res = max * (1 - (def - 120) / orb);
      return res;
    } // end of IF
    if (120 - orb <= def && def < 120) {
      res = max * (1 - (120 - def) / orb);
      return res;
    } //end of IF
    if (240 <= def && def <= 240 + orb) {
      res = max * (1 - (def - 240) / orb);
      return res;
    } // end of IF
    if (240 - orb <= def && def < 240) {
      res = max * (1 - (240 - def) / orb);
      return res;
    } else return 0; //end of IF
  }; //end of trin

  const sixt = (nat_orb, cur_orb, nat_lon, cur_lon, max) => {
    //orb=original-2(1.5) - for sixteele
    var def = Math.abs(nat_lon - cur_lon);
    var orb = nat_orb + cur_orb; // orb of 2 planet, all orb.
    var res;
    if (60 <= def && def <= 60 + orb) {
      res = max * (1 - (def - 60) / orb);
      return res;
    } // end of IF
    if (60 - orb <= def && def < 60) {
      res = max * (1 - (60 - def) / orb);
      return res;
    } //end of IF
    if (300 <= def && def <= 300 + orb) {
      res = max * (1 - (def - 300) / orb);
      return res;
    } // end of IF
    if (300 - orb <= def && def < 300) {
      res = max * (1 - (300 - def) / orb);
      return res;
    } else return 0; //end of IF
  }; //end of sixt

  const oppo = (nat_orb, cur_orb, nat_lon, cur_lon, max) => {
    //orb = original
    var def = Math.abs(nat_lon - cur_lon);
    var orb = nat_orb + cur_orb; // orb of 2 planet, all orb.
    var res;
    if (180 <= def && def <= 180 + orb) {
      res = max * (1 - (def - 180) / orb);
      return res;
    } // end of IF
    if (180 - orb <= def && def < 180) {
      res = max * (1 - (180 - def) / orb);
      return res;
    } else return 0; //end of IF
  }; //end of oppo

  const quadro = (nat_orb, cur_orb, nat_lon, cur_lon, max) => {
    //orb = original-1
    var def = Math.abs(nat_lon - cur_lon);
    var orb = nat_orb + cur_orb; // orb of 2 planet, all orb.
    var res;
    if (90 <= def && def <= 90 + orb) {
      res = max * (1 - (def - 90) / orb);
      return res;
    } // end of IF
    if (90 - orb <= def && def < 90) {
      res = max * (1 - (90 - def) / orb);
      return res;
    } //end of IF
    if (270 <= def && def <= 270 + orb) {
      res = max * (1 - (def - 270) / orb);
      return res;
    } // end of IF
    if (270 - orb <= def && def < 270) {
      res = max * (1 - (270 - def) / orb);
      return res;
    } else return 0; //end of IF
  }; //end of quadro

  //============BAD MOOD BLOCK
  //bad venus-venus
  var veN_veC_b =
    oppo(nat_ven_orb, cur_ven_orb, natVen, curVen, 3) + quadro(nat_ven_orb, cur_ven_orb, natVen, curVen, 3);
  //bad venus-sun
  var veN_suC_b =
    oppo(nat_ven_orb, cur_sun_orb, natVen, curSun, 4) + quadro(nat_ven_orb, cur_sun_orb, natVen, curSun, 4);
  var veC_suN_b =
    oppo(cur_ven_orb, nat_sun_orb, curVen, natSun, 4) + quadro(cur_ven_orb, nat_sun_orb, curVen, natSun, 4);
  //bad venus-mars
  var veN_maC_b =
    oppo(nat_ven_orb, cur_mar_orb, natVen, curMar, 4) + quadro(nat_ven_orb, cur_mar_orb, natVen, curMar, 4);
  var veC_maN_b =
    oppo(cur_ven_orb, nat_mar_orb, curVen, natMar, 2) + quadro(cur_sun_orb, nat_ven_orb, curSun, natVen, 2);
  //bad venus-saturn
  var veN_saC_b =
    oppo(nat_ven_orb, cur_sat_orb, natVen, curSat, 4) + quadro(nat_ven_orb, cur_sat_orb, natVen, curSat, 4);
  var veC_saN_b =
    oppo(cur_ven_orb, nat_sat_orb, curVen, natSat, 3) + quadro(cur_ven_orb, nat_sat_orb, curVen, natSat, 3);
  //bad venus-upiter
  var veN_upC_b =
    oppo(nat_ven_orb, cur_upi_orb, natVen, curUpi, 3) + quadro(nat_ven_orb, cur_upi_orb, natVen, curUpi, 3);
  var veC_upN_b =
    oppo(cur_ven_orb, nat_upi_orb, curVen, natUpi, 2) + quadro(cur_ven_orb, nat_upi_orb, curVen, natUpi, 2);
  //bad venus-uran
  var veN_urC_b =
    oppo(nat_ven_orb, cur_ura_orb, natVen, curUra, 3) + quadro(nat_ven_orb, cur_ura_orb, natVen, curUra, 3);
  var veC_urN_b =
    oppo(cur_ven_orb, nat_ura_orb, curVen, natUra, 2) + quadro(cur_ven_orb, nat_ura_orb, curVen, natUra, 2);

  //bad moon-moon
  var moN_moC_b =
    oppo(nat_moo_orb, cur_moo_orb, natMoon, curMoon, 4) + quadro(nat_moo_orb, cur_moo_orb, natMoon, curMoon, 4);
  //bad moon-sun
  var moN_suC_b =
    oppo(nat_moo_orb, cur_sun_orb, natMoon, curSun, 4) + quadro(nat_moo_orb, cur_sun_orb, natMoon, curSun, 4);
  var moC_suN_b =
    oppo(cur_moo_orb, nat_sun_orb, curMoon, natSun, 4) + quadro(cur_moo_orb, nat_sun_orb, curMoon, natSun, 4);
  //bad moon-mars
  var moN_maC_b =
    oppo(nat_moo_orb, cur_mar_orb, natMoon, curMar, 5) + quadro(nat_moo_orb, cur_mar_orb, natMoon, curMar, 5);
  var moC_maN_b =
    oppo(cur_moo_orb, nat_mar_orb, curMoon, natMar, 3) + quadro(cur_moo_orb, nat_mar_orb, curMoon, natMar, 3);
  //bad moon-saturn
  var moN_saC_b =
    oppo(nat_moo_orb, cur_sat_orb, natMoon, curSat, 5) + quadro(nat_moo_orb, cur_sat_orb, natMoon, curSat, 5);
  var moC_saN_b =
    oppo(cur_moo_orb, nat_sat_orb, curMoon, natSat, 4) + quadro(cur_moo_orb, nat_sat_orb, curMoon, natSat, 4);
  //bad moon-upiter
  var moN_upC_b =
    oppo(nat_moo_orb, cur_upi_orb, natMoon, curUpi, 4) + quadro(nat_moo_orb, cur_upi_orb, natMoon, curUpi, 4);
  var moC_upN_b =
    oppo(cur_moo_orb, nat_upi_orb, curMoon, natUpi, 3) + quadro(cur_moo_orb, nat_upi_orb, curMoon, natUpi, 3);
  //bad moon-uran
  var moN_urC_b =
    oppo(nat_moo_orb, cur_ura_orb, natMoon, curUra, 4) + quadro(nat_moo_orb, cur_ura_orb, natMoon, curUra, 4);
  var moC_urN_b =
    oppo(cur_moo_orb, nat_ura_orb, curMoon, natUra, 3) + quadro(cur_moo_orb, nat_ura_orb, curMoon, natUra, 3);
  //bad moon-venus
  var moN_veC_b =
    oppo(nat_moo_orb, cur_ven_orb, natMoon, curVen, 4) + quadro(nat_moo_orb, cur_ven_orb, natMoon, curVen, 4);
  var moC_veN_b =
    oppo(cur_moo_orb, nat_ven_orb, curMoon, natVen, 3) + quadro(cur_moo_orb, nat_ven_orb, curMoon, natVen, 3);

  let badMood =
    -1 *
    (moN_moC_b +
      moN_suC_b +
      moC_suN_b +
      moN_maC_b +
      moC_maN_b +
      moN_saC_b +
      moC_saN_b +
      moN_upC_b +
      moC_upN_b +
      moN_urC_b +
      moC_urN_b +
      moN_veC_b +
      moC_veN_b +
      veN_veC_b +
      veN_suC_b +
      veC_suN_b +
      veN_maC_b +
      veC_maN_b +
      veN_saC_b +
      veC_saN_b +
      veN_upC_b +
      veC_upN_b +
      veN_urC_b +
      veC_urN_b);

  console.log('badMood', badMood);

  //==========GOOD MOOD BLOCK

  //good venus-venus
  var veN_veC_g = trin(nat_ven_orb, cur_ven_orb, natVen, curVen, 3) + sixt(nat_ven_orb, cur_ven_orb, natVen, curVen, 3);
  //good venus-sun
  var veN_suC_g = trin(nat_ven_orb, cur_sun_orb, natVen, curSun, 4) + sixt(nat_ven_orb, cur_sun_orb, natVen, curSun, 4);
  var veC_suN_g = trin(cur_ven_orb, nat_sun_orb, curVen, natSun, 4) + sixt(cur_ven_orb, nat_sun_orb, curVen, natSun, 4);
  //good venus-mars
  var veN_maC_g = trin(nat_ven_orb, cur_mar_orb, natVen, curMar, 4) + sixt(nat_ven_orb, cur_mar_orb, natVen, curMar, 4);
  var veC_maN_g = trin(cur_ven_orb, nat_mar_orb, curVen, natMar, 2) + sixt(cur_sun_orb, nat_ven_orb, curSun, natVen, 2);
  //good venus-saturn
  var veN_saC_g = trin(nat_ven_orb, cur_sat_orb, natVen, curSat, 4) + sixt(nat_ven_orb, cur_sat_orb, natVen, curSat, 4);
  var veC_saN_g = trin(cur_ven_orb, nat_sat_orb, curVen, natSat, 3) + sixt(cur_ven_orb, nat_sat_orb, curVen, natSat, 3);
  //good venus-upiter
  var veN_upC_g = trin(nat_ven_orb, cur_upi_orb, natVen, curUpi, 3) + sixt(nat_ven_orb, cur_upi_orb, natVen, curUpi, 3);
  var veC_upN_g = trin(cur_ven_orb, nat_upi_orb, curVen, natUpi, 2) + sixt(cur_ven_orb, nat_upi_orb, curVen, natUpi, 2);
  //good venus-uran
  var veN_urC_g = trin(nat_ven_orb, cur_ura_orb, natVen, curUra, 3) + sixt(nat_ven_orb, cur_ura_orb, natVen, curUra, 3);
  var veC_urN_g = trin(cur_ven_orb, nat_ura_orb, curVen, natUra, 2) + sixt(cur_ven_orb, nat_ura_orb, curVen, natUra, 2);

  //good moon-moon
  var moN_moC_g =
    trin(nat_moo_orb, cur_moo_orb, natMoon, curMoon, 4) + sixt(nat_moo_orb, cur_moo_orb, natMoon, curMoon, 4);
  //good moon-sun
  var moN_suC_g =
    trin(nat_moo_orb, cur_sun_orb, natMoon, curSun, 4) + sixt(nat_moo_orb, cur_sun_orb, natMoon, curSun, 4);
  var moC_suN_g =
    trin(cur_moo_orb, nat_sun_orb, curMoon, natSun, 4) + sixt(cur_moo_orb, nat_sun_orb, curMoon, natSun, 4);
  //good moon-mars
  var moN_maC_g =
    trin(nat_moo_orb, cur_mar_orb, natMoon, curMar, 5) + sixt(nat_moo_orb, cur_mar_orb, natMoon, curMar, 5);
  var moC_maN_g =
    trin(cur_moo_orb, nat_mar_orb, curMoon, natMar, 3) + sixt(cur_moo_orb, nat_mar_orb, curMoon, natMar, 3);
  //good moon-saturn
  var moN_saC_g =
    trin(nat_moo_orb, cur_sat_orb, natMoon, curSat, 5) + sixt(nat_moo_orb, cur_sat_orb, natMoon, curSat, 5);
  var moC_saN_g =
    trin(cur_moo_orb, nat_sat_orb, curMoon, natSat, 4) + sixt(cur_moo_orb, nat_sat_orb, curMoon, natSat, 4);
  //good moon-upiter
  var moN_upC_g =
    trin(nat_moo_orb, cur_upi_orb, natMoon, curUpi, 4) + sixt(nat_moo_orb, cur_upi_orb, natMoon, curUpi, 4);
  var moC_upN_g =
    trin(cur_moo_orb, nat_upi_orb, curMoon, natUpi, 3) + sixt(cur_moo_orb, nat_upi_orb, curMoon, natUpi, 3);
  //good moon-uran
  var moN_urC_g =
    trin(nat_moo_orb, cur_ura_orb, natMoon, curUra, 4) + sixt(nat_moo_orb, cur_ura_orb, natMoon, curUra, 4);
  var moC_urN_g =
    trin(cur_moo_orb, nat_ura_orb, curMoon, natUra, 3) + sixt(cur_moo_orb, nat_ura_orb, curMoon, natUra, 3);
  //good moon-venus
  var moN_veC_g =
    trin(nat_moo_orb, cur_ven_orb, natMoon, curVen, 4) + sixt(nat_moo_orb, cur_ven_orb, natMoon, curVen, 4);
  var moC_veN_g =
    trin(cur_moo_orb, nat_ven_orb, curMoon, natVen, 3) + sixt(cur_moo_orb, nat_ven_orb, curMoon, natVen, 3);
  let goodMood =
    veN_veC_g +
    veN_suC_g +
    veC_suN_g +
    veN_maC_g +
    veC_maN_g +
    veN_saC_g +
    veC_saN_g +
    veN_upC_g +
    veC_upN_g +
    veN_urC_g +
    veC_urN_g +
    moN_moC_g +
    moN_suC_g +
    moC_suN_g +
    moN_maC_g +
    moC_maN_g +
    moN_saC_g +
    moC_saN_g +
    moN_upC_g +
    moC_upN_g +
    moN_urC_g +
    moC_urN_g +
    moN_veC_g +
    moC_veN_g;

  console.log('goodMood', goodMood);

  let moodResult = Math.round(badMood + goodMood);
  if (moodResult > 10) moodResult = 10;
  if (moodResult < -10) moodResult = -10;

  return [moodResult, 0, 0];
};
