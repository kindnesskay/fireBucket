import { AppBar, Toolbar, IconButton, Link, Drawer } from "@mui/material";
import { Close, Menu, Person, ShoppingCart } from "@mui/icons-material";
import { useState } from "react";
import Cart from "./Cart";
function Layout({ children }) {
  const [menuState, setMenuState] = useState(false);
  const [cartState, setCartState] = useState(false);
  return (
    <>
      <header>
        <AppBar color="secondary">
          <Toolbar
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <IconButton
              onClick={() => setMenuState(!menuState)}
              edge="start"
              aria-label="menu"
              sx={{ color: "#fff" }}
            >
              <Menu />
            </IconButton>
            <Link
              href="/"
              underline="none"
              sx={{ color: "#fff", fontSize: 24 }}
            >
              Fruits
            </Link>
            <Link href="/login">
              <IconButton
                edge="end"
                aria-label="account"
                sx={{ color: "#fff", width: 30 }}
              >
                <Person />
              </IconButton>
            </Link>
            <IconButton
              onClick={() => setCartState(!cartState)}
              edge="end"
              aria-label="cart"
              sx={{ color: "#fff", width: 30 }}
            >
              <ShoppingCart />
            </IconButton>
          </Toolbar>
        </AppBar>
      </header>
      <Drawer
        anchor="left"
        open={menuState}
        onClose={() => setMenuState(false)}
      >
        <IconButton
          onClick={() => setMenuState(!menuState)}
          edge="start"
          aria-label="menu"
          sx={{ width: 50 }}
        >
          <Close />
        </IconButton>
        <div style={{ width: 200 }}></div>
      </Drawer>
      <Drawer
        anchor="right"
        open={cartState}
        onClose={() => setCartState(false)}
      >
        <IconButton
          onClick={() => setCartState(!cartState)}
          edge="start"
          aria-label="menu"
          sx={{ width: 50 }}
        >
          <Close />
        </IconButton>
        <Cart />
      </Drawer>
      <main>{children}</main>
    </>
  );
}

export default Layout;
