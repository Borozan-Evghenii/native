import React from 'react';

export interface AuthContext {
  isAuth: boolean;
  setIsAuth: (isAuth: boolean) => void;
}

export const AuthContext = React.createContext<AuthContext>({
  isAuth: false,
  setIsAuth: () => {}
});
