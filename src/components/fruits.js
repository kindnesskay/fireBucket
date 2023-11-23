import Card from "./card";
import { useState } from "react";
function Fruits({ onProductClick, products }) {
  const [fruitsArray, setFruitsArray] = useState(products);

  return (
    <div className="product_grid">
      {!fruitsArray.length && <p>Nothing to display </p>}

      {fruitsArray.map((fruit) => (
        <Card
          handleClick={() => onProductClick(fruit.id)}
          key={fruit.id}
          image={fruit.image}
          name={fruit.name}
          price={fruit.price}
        />
      ))}
    </div>
  );
}

export default Fruits;
