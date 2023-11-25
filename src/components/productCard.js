import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

function ProductCard({ image, name, price, handleClick }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component={"img"} height={140} image={image} alt={name} />
      <CardContent
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography component={"h5"}>{name}</Typography>
        <Typography color={"text.secondary"}>{price}</Typography>
        <CardActions>
          <Button color="secondary" variant="contained" onClick={handleClick}>
            Add to cart
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
