import React, { Component } from 'react';
import './Astrograph.css';

export class Astrograph extends Component {
  render() {
    //generating of right color
    let colorMood =
      this.props.astroMood > 0
        ? 'rgba(' + this.props.astroMood * 20 + ',200,' + this.props.astroMood * 20 + ',0.7)'
        : 'rgba(200,' + this.props.astroMood * -20 + ',' + this.props.astroMood * -20 + ',0.7)';
    let colorPower =
      this.props.astroPower > 0
        ? 'rgba(' + this.props.astroPower * 20 + ',200,' + this.props.astroPower * 20 + ',0.7)'
        : 'rgba(200,' + this.props.astroPower * -20 + ',' + this.props.astroPower * -20 + ',0.7)';
    let colorMind =
      this.props.astroMind > 0
        ? 'rgba(' + this.props.astroMind * 20 + ',200,' + this.props.astroMind * 20 + ',0.7)'
        : 'rgba(200,' + this.props.astroMind * -20 + ',' + this.props.astroMind * -20 + ',0.7)';
    if (this.props.astroMood === 0) colorMood = 'lightgoldenrodyellow';
    if (this.props.astroPower === 0) colorPower = 'lightgoldenrodyellow';
    if (this.props.astroMind === 0) colorMind = 'lightgoldenrodyellow';

    let classMood, classPower, classMind;

    if (this.props.astroMood < -2) classMood = 'mood-3 astrocell';
    if (this.props.astroMood > 2) classMood = 'mood-1 astrocell';
    if (this.props.astroMood <= 2 && this.props.astroMood >= -2) classMood = 'mood-2 astrocell';

    if (this.props.astroPower < -2) classPower = 'power-3 astrocell';
    if (this.props.astroPower > 2) classPower = 'power-1 astrocell';
    if (this.props.astroPower <= 2 && this.props.astroPower >= -2) classPower = 'power-2 astrocell';

    if (this.props.astroMind < -2) classMind = 'mind-3 astrocell';
    if (this.props.astroMind > 2) classMind = 'mind-1 astrocell';
    if (this.props.astroMind <= 2 && this.props.astroMind >= -2) classMind = 'mind-2 astrocell';

    return (
      <div className="astrograph">
        <div
          className={classMood}
          style={{
            backgroundColor: colorMood,
            width: '40px',
            height: '40px',
            display: 'inline-block',
          }}
        >
          {this.props.astroMood}
        </div>

        <div
          className={classPower}
          style={{
            backgroundColor: colorPower,
            width: '40px',
            height: '40px',
            display: 'inline-block',
          }}
        >
          {this.props.astroPower}
        </div>

        <div
          className={classMind}
          style={{
            backgroundColor: colorMind,
            width: '40px',
            height: '40px',
            display: 'inline-block',
          }}
        >
          {this.props.astroMind}
        </div>
      </div>
    );
  }
}

export default Astrograph;

//  var SPoint=document.createElementNS("http://www.w3.org/2000/svg",'line');
//     SPoint.setAttribute("id","SPoint"+i);
//     if(i<7){
//       var R = 205;
//       var G = i*i*4;
//       var B = i*i*4;
//         SPoint.setAttribute("stroke","rgb("+R+","+G+","+B+")");
//     }
//     else{
//       var R = (15-i-1)*(15-i-1)*4;
//       var G = 205;
//       var B = (15-i-1)*(15-i-1)*4;
//         SPoint.setAttribute("stroke","rgb("+R+","+G+","+B+")");
//     }
