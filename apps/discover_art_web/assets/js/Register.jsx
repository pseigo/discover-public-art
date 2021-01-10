import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import "../css/Login.css";
import Button from './Button';

const Register = ({history}) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');

  const toLogin = () => {
    let pathname = '/';
    history.replace({pathname});
  }

  return (
    <div className="login-container">
      <div className="instructionsTop">Please sign up to save your progress:</div>
        <Form className="box-container">
          <Form.Group>
            <Form.Control placeholder=" Email:" value={email} onChange={(e) => setEmail(e.target.value)} />     
          </Form.Group>
          <Form.Group>
            <Form.Control placeholder=" Password:" value={pass} onChange={(e) => setPass(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Control placeholder=" Display Name:" value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Group>
          <Form.Group className="login-buttons">
            <Button primary>
              Sign up
            </Button>
            <Button onClick={ toLogin } primary>
              Sign in
            </Button>
          </Form.Group>
        </Form>
    </div>
  );
}

export default Register;