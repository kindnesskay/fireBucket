import React from "react";
import { Login, PersonAdd } from "@mui/icons-material";
import { IconButton, Button } from "@mui/material";
function MenuBox({ handleLoginPress, handleSignUpPress }) {
  return (
    <div className="menu_box">
      <Button
        startIcon={<PersonAdd />}
        sx={{ color: "#fff" }}
        onClick={handleSignUpPress}
      ></Button>
      <Button
        startIcon={<Login />}
        sx={{ color: "#fff" }}
        onClick={handleLoginPress}
      ></Button>
    </div>
  );
}

export default MenuBox;
