import React from 'react';

import { AuthContext } from './AuthContext';

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children, ...props }: AuthProviderProps) => {
  const [isAuth, setIsAuth] = React.useState(true);

  const value = React.useMemo(
    () => ({
      isAuth,
      setIsAuth: (entry: boolean) => {
        if (!value) {
          setIsAuth(entry);
        } else {
          setIsAuth(entry);
        }
      }
    }),
    [isAuth]
  );

  return (
    <AuthContext.Provider value={value} {...props}>
      {children}
    </AuthContext.Provider>
  );
};
