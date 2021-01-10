import React from 'react';
import { Button, Image } from 'react-bootstrap';
import '../css/components.css';

export const PageButton = ({ className }) => {
  return (
    <Image className={[className, "page-button"].join(' ')} src="../images/dummy-profile.jpeg" roundedCircle />
  );
};