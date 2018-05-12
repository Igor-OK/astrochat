import React from 'react';
import './message.css';
import { Icon } from '../Icon/Icon';
import { Astrograph } from '../Astrograph/Astrograph';

const formatOptions = {
  hour: 'numeric',
  minute: 'numeric',
};

const formatter = new Intl.DateTimeFormat('ru-RU', formatOptions);

export const Message = ({ isMy, text, status = 'sent', time, astro }) => {
  const date = new Date(time);
  const timeFormatted = formatter.format(date);
  if (!astro)
    return (
      <div className={`message-wrapper ${isMy ? 'message-wrapper_my' : ''}`}>
        <div className={`message ${isMy ? 'message_my' : ''}`}>
          {text}
          <span className="message__time">{timeFormatted}</span>
          <Icon type={`message-${status}`} />
        </div>
      </div>
    );

  return (
    <div className={`message-wrapper ${isMy ? 'message-wrapper_my' : ''}`}>
      <div className={`message ${isMy ? 'message_my' : ''}`}>
        {text}
        <span className="message__time">{timeFormatted}</span>
        <Icon type={`message-${status}`} />
        <Astrograph astroMood={astro[0]} astroPower={astro[1]} astroMind={astro[2]} size={'S'} />
      </div>
    </div>
  );
};
