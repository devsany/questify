// ProtectedRoute.js
import React from "react";
import { NavLink, Route } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const { isSignedIn } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        isSignedIn ? <element {...props} /> : <NavLink to="/login" />
      }
    />
  );
};

export default ProtectedRoute;
