import React from 'react';
import ErrorCSS from '../styles/pages/error.module.css';

export const ErrorPage = () => {
  return (
    <div className={ErrorCSS.error_wrapper}>
      <p className={ErrorCSS.error}>Something went wrong. There is no such URL 🙃</p>
    </div>
  );
}

