import React from 'react';
import ButtonCSS from '../styles/components/button.module.css';

export const Button = ({className, text}) => {
  const btnClass = className + ' ' + ButtonCSS.button;
  return <button className={btnClass}>{text}</button>;
};
