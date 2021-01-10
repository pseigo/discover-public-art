import React from 'react';
import { useHistory } from "react-router-dom";
import { Button, Image } from 'react-bootstrap';
import '../css/components.css';

export const PageButton = ({ className, path }) => {
  const history = useHistory();

  function handleClick() {
    history.push(`/${path}`);
  }

  return (
    <Image className={[className, "page-button"].join(' ')} src="../images/dummy-profile.jpeg" onClick={() => handleClick()} roundedCircle />
  );
};