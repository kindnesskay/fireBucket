import { ArrowBack, Close, Shop, Menu, Search } from "@mui/icons-material";
import { IconButton, Button } from "@mui/material";
import MenuBox from "./menu";
import { useState } from "react";
export default function Layout({
  children,
  handleHome,
  signInPress,
  loginPress,
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

        {/* <IconButton sx={{ width: "10%" }}>
          <ArrowBack sx={{ color: "#fff" }} />
        </IconButton> */}
        {/* 
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: 20,
            backgroundColor: "#fff",
            width: "60%",
          }}
        >
          <IconButton sx={{ width: "auto", maxWidth: "30%" }}>
            <Search />
          </IconButton>
          <input
            placeholder="Search"
            type="search"
            style={{ border: "none", maxWidth: "70%", width: "auto" }}
          />
        </Box> */}
        <p style={{ width: "20%" }} onClick={handleHome}>
          Fruits
        </p>

        <Button variant="outlined" color="secondary" sx={{ color: "#fff" }}>
          <Shop />
        </Button>
      </nav>
      {open && <div className="backdrop" onClick={() => setOpen(false)}></div>}
      <main>{children}</main>
    </>
  );
}
