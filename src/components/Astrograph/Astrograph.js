import React, { Component } from 'react';
import './Astrograph.css';

export class Astrograph extends Component {
  render() {
    //generating of right color
    let cm = this.props.astroMood * 20;
    let colorMood =
      this.props.astroMood > 0
        ? 'rgba(' + (200 - cm) + ',200,' + (200 - cm) + ',0.9)'
        : 'rgba(200,' + (200 + cm) + ',' + (200 + cm) + ',0.75)';
    let cp = this.props.astroPower * 20;
    let colorPower =
      this.props.astroPower > 0
        ? 'rgba(' + (200 - cp) + ',200,' + (200 - cp) + ',0.9)'
        : 'rgba(200,' + (200 + cp) + ',' + (200 + cp) + ',0.75)';
    let cmi = this.props.astroMind * 20;
    let colorMind =
      this.props.astroMind > 0
        ? 'rgba(' + (200 - cmi) + ',200,' + (200 - cmi) + ',0.9)'
        : 'rgba(200,' + (200 + cmi) + ',' + (200 + cmi) + ',0.75)';
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

    let mainClass = '';
    if (this.props.size === 'L') mainClass = 'astrograph';
    if (this.props.size === 'S') mainClass = 'astrograph-s';
    return (
      <div className={mainClass}>
        <div
          className={classMood}
          style={{
            backgroundColor: colorMood,
            display: 'inline-block',
          }}
        >
          {this.props.astroMood}
        </div>

        <div
          className={classPower}
          style={{
            backgroundColor: colorPower,
            display: 'inline-block',
          }}
        >
          {this.props.astroPower}
        </div>

        <div
          className={classMind}
          style={{
            backgroundColor: colorMind,
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
