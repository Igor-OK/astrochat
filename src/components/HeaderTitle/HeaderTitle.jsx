import React from 'react';
import './HeaderTitle.css';

export function HeaderTitle(props) {
  let {title, subtitle} = props;
  return (
      <React.Fragment>
        <div className="header-title">{title}</div>
        {subtitle && (
          <div className="header-subtitle">{subtitle}</div>
        )}
      </React.Fragment>
    );
}
