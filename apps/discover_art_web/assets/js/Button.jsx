import '../css/Button.css';
import React from 'react';

const Button = (props) => {
  const { children, onClick } = props;
  let className = 'primary';
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button;