import React from 'react';
import './MenuAction.css';

export const MenuAction = ({ text, icon, onClick }) => (
  <button className="menu-action" type="button" onClick={onClick}>
    <span className="menu-action__icon">
      <img src={icon} alt={text} />
    </span>
    <span className="menu-action__content">{text}</span>
  </button>
);
