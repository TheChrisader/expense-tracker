import React from "react";
import { logout } from "../utils/Auth";
import { useNavigate } from "react-router-dom";

const Books = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          logout();
          navigate("/");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Books;
