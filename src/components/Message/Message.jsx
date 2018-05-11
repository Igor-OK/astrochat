import React from 'react';
import './message.css';
import { Icon } from '../Icon/Icon';

const formatOptions = {
  hour: 'numeric',
  minute: 'numeric',
};

const formatter = new Intl.DateTimeFormat('ru-RU', formatOptions);

export const Message = ({ isMy, text, status = 'sent', time, astro }) => {
  const date = new Date(time);
  const timeFormatted = formatter.format(date);
  return (
    <div className={`message-wrapper ${isMy ? 'message-wrapper_my' : ''}`}>
      <div className={`message ${isMy ? 'message_my' : ''}`}>
        {text}
        <span className="message__astro">
          {astro[0]}
          {astro[1]}
          {astro[2]}
        </span>
        <span className="message__time">{timeFormatted}</span>
        <Icon type={`message-${status}`} />
      </div>
    </div>
  );
};
