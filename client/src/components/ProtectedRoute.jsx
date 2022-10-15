import React from "react";
import { Navigate } from "react-router-dom";

import { useAuthListener } from "../utils/hooks/useAuthStatus";

const ProtectedRoute = ({ children }) => {
  // a custom hook to keep track of user's auth status
  const { loggedIn, checkingStatus } = useAuthListener();

  // display a spinner while auth status being checked
  if (checkingStatus) {
    return "Hi";
  } else {
    if (loggedIn) {
      return children;
    } else {
      // else render an unauthorised component
      // stating the reason why it cannot access the route
      return <Navigate replace to="/" />;
    }
  }
};

export default ProtectedRoute;
