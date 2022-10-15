import { useEffect, useState } from "react";

import { auth } from "../../firebase";

export const useAuthListener = () => {
  // assume user to be logged out
  const [loggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);

  // keep track to display a spinner while auth status is being checked
  const [checkingStatus, setCheckingStatus] = useState(true);

  useEffect(() => {
    // auth listener to keep track of user signing in and out
    auth.onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true);
        setUserId(user.uid);
      }

      setCheckingStatus(false);
    });
  }, []);

  return { loggedIn, checkingStatus, userId };
};
