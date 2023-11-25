import { Button } from "@mui/material";
import { Link } from "react-router-dom";
function Hero({ handleClick }) {
  return (
    <div className="hero">
      <div className="hero_banner">
        <img src="/orange.jpg" className="hero_image" />
      </div>
      <div className="hero_contents">
        <p>Fruist, the fresh ones</p>
        <Link to="/shop">
          <Button variant="outlined" color="secondary" onClick={handleClick}>
            Shop
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
