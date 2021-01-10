import '../css/Button.css';
import React from 'react';

const Button = (props) => {
  const { children, onClick } = props;
  const stopFreakingNavigation = (e) => {
    e.preventDefault();
    return onClick(e);
  }

  let className = 'primary';
  return (
    <button className={className} onClick={stopFreakingNavigation}>
      {children}
    </button>
  )
}

export default Button;