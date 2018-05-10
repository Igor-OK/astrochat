import React from 'react';
import './Icon.css';

export function Icon (props) {
  let {type} = props;
  return (
      <span className={`icon icon_${type}`} />
    );
}
