import React from 'react';

import style from './Message.module.scss';

interface MessageProps {
  message: string;
}

export const Message = ({ message }: MessageProps) => {
  return <div className={style.message}>{message}</div>;
};
