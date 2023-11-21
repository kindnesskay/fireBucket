import { Button } from "@mui/material";
import Layout from "./layout";
function Hero({ handleClick }) {
  return (
    <div className="hero">
      <img src="/orange.jpg" className="hero_image" />
      <p>Fruist, the fresh ones</p>
      <Button variant="outlined" color="secondary" onClick={handleClick}>
        Shop
      </Button>
    </div>
  );
}

export default Hero;
