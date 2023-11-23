import { ArrowBack, Close, Shop, Menu, Search } from "@mui/icons-material";
import { IconButton, Button } from "@mui/material";
import MenuBox from "./menu";
import { useState } from "react";
import Cart from "./Cart";
export default function Layout({
  children,
  handleHome,
  signInPress,
  loginPress,
  handleCart,
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav
        style={{
          height: "10%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          paddingRight: 10,
          backgroundColor: "#504099",
          justifyContent: "space-between",
          color: "#fff",
        }}
      >
        <IconButton
          sx={{ width: 30, color: "#fff" }}
          onClick={() => setOpen(!open)}
        >
          {!open && <Menu />}
          {open && <Close />}
        </IconButton>
        {open && (
          <MenuBox
            handleLoginPress={() => {
              setOpen(!open);
              loginPress();
            }}
            handleSignUpPress={() => {
              setOpen(!open);
              signInPress();
            }}
          />
        )}

        <p style={{ width: "20%" }} onClick={handleHome}>
          Fruits
        </p>

        <Button
          onClick={() => {
            handleCart(true);
          }}
          variant="outlined"
          color="secondary"
          sx={{ color: "#fff" }}
        >
          <Shop />
        </Button>
      </nav>
      {open && <div className="backdrop" onClick={() => setOpen(false)}></div>}
      <main>{children}</main>
    </>
  );
}
