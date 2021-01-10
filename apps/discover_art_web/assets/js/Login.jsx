import React from 'react';
import { Form } from 'react-bootstrap';
import "../css/Login.css";
import Button from './Button';

const Login = () => {
  return (
    <div className="login-container">
      <div className="instructions">Please sign in to save your progress:</div>
        <Form className="box-container">
          <Form.Group controlId="BasicEmail">
            <Form.Control placeholder=" Email:" />     
          </Form.Group>
          <Form.Group controlId="BasicPassword">
            <Form.Control placeholder=" Password:" />
          </Form.Group>
          <Form.Group className="login-buttons">
            <Button primary>
              Sign in
            </Button>
            <Button primary>
              Sign up
            </Button>
          </Form.Group>
        </Form>
    </div>
  )
}

export default Login;