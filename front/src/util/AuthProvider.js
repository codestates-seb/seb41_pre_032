import jwtDecode from 'jwt-decode';
import { createContext, useEffect, useState } from 'react';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() =>
    localStorage.getItem('auth')
      ? JSON.parse(localStorage.getItem('auth'))
      : null
  );

  const [user, setUser] = useState(() =>
    localStorage.getItem('auth')
      ? jwtDecode(localStorage.getItem('auth'))
      : null
  );

  useEffect(() => {
    if (auth) {
      setUser(jwtDecode(auth?.accessToken));
    }
  }, [auth]);

  const [loggedin, setLoggedin] = useState(auth ? true : false);

  return (
    <AuthContext.Provider
      value={{ loggedin, setLoggedin, auth, setAuth, user, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
