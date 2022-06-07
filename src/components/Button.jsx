import React from 'react';
import ButtonCSS from '../styles/components/button.module.css';

export const Button = ({className, text, onClick}) => {
  const btnClass = className + ' ' + ButtonCSS.button;
  return <button onClick={onClick} className={btnClass}>{text}</button>;
};
