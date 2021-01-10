import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import "../css/Login.css";
import Button from './Button';
import { useUser } from './UserProvider';

const Login = ({dismiss}) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const {login, register, me} = useUser();

  const toggleRegister = () => {
    setIsRegister(!isRegister);
  }

  return me ? null : (
    <div className="login-container">
      <div className="close-btn" onClick={()=> dismiss ? dismiss() : null}>x</div>
      <div className={isRegister ? "instructionsTop" : "instructions"}>Please sign in to save your progress:</div>
        <Form className="box-container">
          <Form.Group>
            <Form.Control placeholder=" Email:" value={email} onChange={(e) => setEmail(e.target.value)} />     
          </Form.Group>
          <Form.Group>
            <Form.Control placeholder=" Password:" value={pass} onChange={(e) => setPass(e.target.value)} />
          </Form.Group>
          {isRegister ? <Form.Group>
            <Form.Control placeholder=" Display Name:" value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Group> : null}
          <Form.Group className="login-buttons">
            <Button onClick={ () => isRegister ? toggleRegister() : login(email, pass)} primary>
              Sign in
            </Button>
            <Button onClick={ () => isRegister ?  register(email, pass, name) : toggleRegister()} primary>
              Sign up
            </Button>
          </Form.Group>
        </Form>
    </div>
  );
}

export default Login;