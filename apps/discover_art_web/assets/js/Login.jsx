import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import "../css/Login.css";
import Button from './Button';
import { useUser } from './UserProvider';

const Login = ({history, dismiss}) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const {login, me} = useUser();

  const toRegister = (data) => {
    let pathname = '/Register';
    history.replace({pathname, state: data});
  }

  return me ? null : (
    <div className="login-container">
      <div className="close-btn" onClick={()=> dismiss ? dismiss() : null}>x</div>
      <div className="instructions">Please sign in to save your progress:</div>
        <Form className="box-container">
          <Form.Group>
            <Form.Control placeholder=" Email:" value={email} onChange={(e) => setEmail(e.target.value)} />     
          </Form.Group>
          <Form.Group>
            <Form.Control placeholder=" Password:" value={pass} onChange={(e) => setPass(e.target.value)} />
          </Form.Group>
          <Form.Group className="login-buttons">
            <Button onClick={ () => login(email, pass)} primary>
              Sign in
            </Button>
            <Button onClick={ () => toRegister({email, pass})} primary>
              Sign up
            </Button>
          </Form.Group>
        </Form>
    </div>
  );
}

export default Login;