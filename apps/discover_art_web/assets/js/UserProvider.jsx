import React, { useState, useContext, createContext } from "react";

const UserContext = createContext({
  me: null,
});

export function UserProvider({ children }) {
  const [me, setMe] = useState(null);

  const login = (email, pass) => {
      return fetch(
        '/auth/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            'Accept': 'application/json',
          },
          body: new URLSearchParams({
            email,
            password: pass
          })
        }
      )
      .then(((resp) => resp.json()))
      .then((data) => {
        setMe(data)
        location.href = '/';
      })
      .catch((error) => console.log(error));
  }

  const register = (email, pass, name) => {
    return fetch(
      '/api/users',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          'Accept': 'application/json',
        },
        body: new URLSearchParams({
          email,
          password: pass,
          display_name: name
        })
      }
    )
    .then(((resp) => resp.json()))
    .then(({data}) => {
      console.log(data);
      setMe(data)
      location.href = '/';
    })
    .catch((error) => console.log(error));
  }

  return (
    <UserContext.Provider value={{ me, login, register }}>{children}</UserContext.Provider>
  )
}

export const useUser = () => {
  return useContext(UserContext);
};