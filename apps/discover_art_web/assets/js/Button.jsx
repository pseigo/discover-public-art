import '../css/Button.css';
import React from 'react';

const Button = (props) => {
  const { children } = props;
  let className = 'primary';
  return (
    <button className={className}>
      {children}
    </button>
  )
}

export default Button;