import { createContext, useState, useEffect } from "react";

import { auth } from "../../firebase";

export const AuthContext = createContext({
  userDataPresent: false,
  user: null,
  listener: null,
});

const AuthProvider = ({ children }) => {
  const [userState, setUserState] = useState({
    userDataPresent: false,
    user: null,
    listener: null,
  });

  useEffect(() => {
    if (userState?.listener == null) {
      setUserState({
        ...userState,
        listener: auth.onAuthStateChanged((user) => {
          if (user) {
            setUserState((prev) => ({
              ...prev,
              userDataPresent: true,
              user: user,
            }));
          } else {
            setUserState((prev) => ({
              ...prev,
              userDataPresent: true,
              user: null,
            }));
          }
        }),
      });
    }

    return () => {
      if (userState?.listener) userState.listener();
    };
  }, []);
  return (
    <AuthContext.Provider value={userState}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
